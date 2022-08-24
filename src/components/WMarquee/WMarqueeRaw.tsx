import React from "react";
import { IMarqueeRawBarProps } from "./IWMarqueeRawProps";

export const WMarqueeRaw = ({ className, comps }: IMarqueeRawBarProps) => {
  return (
    <div className={`comp-marquee-root ${className}`}>
      <div className="comp-marquee">
        <div className="comp-marquee-movable">
          {comps.map((m, idx) => (
            <img
              key={`${m}-${idx}`}
              src={m}
              alt=""
              className="comp-marquee-img"
            />
          ))}
          {comps.map((m, idx) => (
            <img
              key={`${m}-dup-${idx}`}
              src={m}
              alt=""
              className="comp-marquee-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
