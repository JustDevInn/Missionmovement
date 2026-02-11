import React from "react";

const ContentBlocksSection = ({ heading, items }) => {
  return (
    <section className="px-4 md:px-10 max-w-5xl mx-auto pb-16">
      {heading ? (
        <h2 className="mm-h2 text-mmText mb-6">{heading}</h2>
      ) : null}
      {items.map((item, index) => (
        <div key={index} className="mb-6">
          {item.title ? (
            <h3 className="text-mmAccent font-semibold text-lg mb-2">
              {item.title}
            </h3>
          ) : null}
          <p className="text-mmTextMuted whitespace-pre-line text-base md:text-lg">
            {item.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ContentBlocksSection;
