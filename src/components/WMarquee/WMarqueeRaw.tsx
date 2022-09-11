import React from "react";

export const WMarqueeRaw = ({
  className,
  children,
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`comp-marquee-root ${className}`}>
      <div className="comp-marquee">
        <div className="comp-marquee-movable">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
