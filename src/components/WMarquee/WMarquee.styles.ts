import { toSizeOrDefault } from "../utility/ToSizeOrDefault";
import { IMarqueeRawBarProps } from "./IWMarqueeRawProps";

export const setDynamicStyles = ({
  opacity,
  padding,
  justify,
  height,
  width,
  speedSec,
  slidingWidth,
}: IMarqueeRawBarProps) => {
  const root = document.querySelector<HTMLBaseElement>(":root");
  if (root) {
    root.style.setProperty("--wmarquee-opacity", `${opacity ?? 0.7} `);
    root.style.setProperty("--wmarquee-padding", `${padding ?? "2rem 0"}`);
    root.style.setProperty("--wmarquee-justify-self", `${justify ?? "center"}`);
    root.style.setProperty(
      "--wmarquee-max-height",
      `${toSizeOrDefault(height, "8rem")}`
    );
    root.style.setProperty(
      "--wmarquee-width",
      `${toSizeOrDefault(width, "100vw")}`
    );
    root.style.setProperty(
      "--wmarquee-animation",
      `marquee ${speedSec ?? 10}s linear infinite`
    );
    root.style.setProperty(
      "--wmarquee-keyframe-transform",
      `translateX(-${slidingWidth ?? 0}px)`
    );
  }
};
