import React, { useEffect, useRef } from "react";

const AccordionList = ({
  items,
  activeIndex,
  setActiveIndex,
  baseIndexOffset = 0,
  renderImage,
  imageLayout = "inline",
}) => {
  const buttonRefs = useRef(new Map());
  const stabilizerFrameRef = useRef(null);
  const shouldRenderImage =
    typeof renderImage === "boolean"
      ? renderImage
      : items.some((item) => Boolean(item.image));

  useEffect(() => {
    return () => {
      if (stabilizerFrameRef.current) {
        cancelAnimationFrame(stabilizerFrameRef.current);
      }
    };
  }, []);

  const stabilizeHeaderPosition = (targetIndex, targetTop, startedAt) => {
    const button = buttonRefs.current.get(targetIndex);

    if (!button) return;

    const afterTop = button.getBoundingClientRect().top;
    const delta = afterTop - targetTop;

    if (Math.abs(delta) > 0.5) {
      window.scrollBy({ top: delta, left: 0, behavior: "auto" });
    }

    if (performance.now() - startedAt < 650) {
      stabilizerFrameRef.current = requestAnimationFrame(() => {
        stabilizeHeaderPosition(targetIndex, targetTop, startedAt);
      });
    }
  };

  return (
    <>
      {items.map((item, index) => {
        const resolvedIndex = index + baseIndexOffset;
        const isOpen = activeIndex === resolvedIndex;
        const hasImage = shouldRenderImage && item.image;
        const handleToggle = (event) => {
          const beforeTop = event.currentTarget.getBoundingClientRect().top;
          const isSwitchingOpenItem =
            activeIndex !== null &&
            activeIndex !== undefined &&
            activeIndex !== resolvedIndex &&
            !isOpen;

          if (stabilizerFrameRef.current) {
            cancelAnimationFrame(stabilizerFrameRef.current);
          }

          setActiveIndex(isOpen ? null : resolvedIndex);

          if (!isSwitchingOpenItem) return;

          stabilizerFrameRef.current = requestAnimationFrame(() => {
            stabilizerFrameRef.current = requestAnimationFrame(() => {
              stabilizeHeaderPosition(
                resolvedIndex,
                beforeTop,
                performance.now()
              );
            });
          });
        };
        const contentClassName = isOpen
          ? imageLayout === "separate"
            ? "max-h-[1000px]"
            : "max-h-[1000px] py-4 px-6"
          : "max-h-0";
        const paragraphClassName = hasImage && imageLayout === "inline"
          ? "whitespace-pre-line text-mmTextMuted leading-relaxed mb-4 text-base md:text-lg"
          : "whitespace-pre-line text-mmTextMuted leading-relaxed text-base md:text-lg";

        return (
          <div
            key={resolvedIndex}
            className={`border border-mmBorder rounded-2xl transition-all duration-300 ${
              isOpen ? "bg-mmSurface border-mmAccent" : "bg-mmSurface"
            }`}
          >
            <button
              ref={(node) => {
                if (node) {
                  buttonRefs.current.set(resolvedIndex, node);
                } else {
                  buttonRefs.current.delete(resolvedIndex);
                }
              }}
              onClick={handleToggle}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-mmAccent font-display text-base md:text-lg tracking-widest uppercase">
                {item.title}
              </span>
              <span className="text-mmAccent text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${contentClassName}`}
            >
              {imageLayout === "separate" ? (
                <div className="px-6 pt-4">
                  <p className={paragraphClassName}>{item.content}</p>
                </div>
              ) : (
                <>
                  <p className={paragraphClassName}>{item.content}</p>
                  {hasImage ? (
                    <img
                      src={item.image}
                      alt={`${item.title} visual`}
                      className="w-full max-h-[300px] rounded-2xl shadow-sm border border-mmBorder object-cover"
                      style={{ objectPosition: item.objectPosition || "center" }}
                    />
                  ) : null}
                </>
              )}
            </div>
            {imageLayout === "separate" && hasImage && isOpen ? (
              <div className="px-6 pb-6 pt-4">
                <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-sm border border-mmBorder bg-mmSurface">
                  <img
                    src={item.image}
                    alt={`${item.title} visual`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: item.objectPosition || "center" }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default AccordionList;
