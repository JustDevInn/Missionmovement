import React from "react";

const TimelineList = ({ steps }) => {
  return (
    <ol className="relative border-l border-mmAccent pl-6 space-y-6 text-mmTextMuted text-sm md:text-base">
      {steps.map((step, index) => (
        <li key={index}>
          <span className="absolute left-[-9px] top-[5px] w-3 h-3 bg-mmAccent rounded-full" />
          {step}
        </li>
      ))}
    </ol>
  );
};

export default TimelineList;
