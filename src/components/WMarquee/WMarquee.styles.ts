import { toSizeOrDefault } from "../utility/ToSizeOrDefault";
import { IWMarqueeProps } from "./IWMarqueeProps";

export const setDynamicStyles = ({
  opacity,
  padding,
  justify,
  height,
  width,
  slidingWidth,
}: IWMarqueeProps & { slidingWidth: number }) => {
  const root = document.querySelector<HTMLBaseElement>(":root");
  if (root) {
    // You could add a "speed" modifier here by multiplying this calculated value
    // for example a "fast" enum would multiply it by 0.5 etc, "slow" by 1.5 etc.
    let speed = Math.floor(slidingWidth / 100);

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
      `marquee ${speed ?? 10}s linear infinite`
    );
    root.style.setProperty(
      "--wmarquee-keyframe-transform",
      `translateX(-${slidingWidth ?? 0}px)`
    );
  }
};
