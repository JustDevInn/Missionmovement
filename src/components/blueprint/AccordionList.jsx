import React from "react";

const AccordionList = ({
  items,
  activeIndex,
  setActiveIndex,
  baseIndexOffset = 0,
  renderImage,
  imageLayout = "inline",
}) => {
  const shouldRenderImage =
    typeof renderImage === "boolean"
      ? renderImage
      : items.some((item) => Boolean(item.image));

  return (
    <>
      {items.map((item, index) => {
        const resolvedIndex = index + baseIndexOffset;
        const isOpen = activeIndex === resolvedIndex;
        const hasImage = shouldRenderImage && item.image;
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
              onClick={() => setActiveIndex(isOpen ? null : resolvedIndex)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
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
