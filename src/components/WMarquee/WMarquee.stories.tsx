import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WMarquee } from "./WMarquee";
import { IWMarqueeProps } from "./IWMarqueeProps";
import { getEnumValues } from "../../../.storybook/helpers";
import { AlignOptions } from "../utility/AlignOptions";

export default {
  title: "WMarquee",
  component: WMarquee,
  argTypes: {
    align: {
      control: {
        type: "inline-radio",
        options: getEnumValues(AlignOptions),
      },
    },
  },
} as ComponentMeta<typeof WMarquee>;

// const baseStyle: React.CSSProperties = {
//   backgroundColor: "#568899",
//   textAlign: "center",
//   padding: "2rem",
//   fontSize: "2rem",
//   color: "white",
//   borderRadius: "1rem",
//   textShadow: "1px 1px 20px black",
//   filter: "drop-shadow(3px 5px 4px #00000099)",
//   margin: "6px",
//   border: "solid 3px #1d315759",
//   height: "auto",
//   display: "grid",
//   alignContent: "stretch",
//   alignItems: "stretch",
// };

interface FixedWidthImage {
  url: string;
  alt: string;
  width: number;
}

const createUnsplashUrl = (size: number, title: string): FixedWidthImage => {
  return {
    url: `https://source.unsplash.com/${size}x${size}?${title}`,
    alt: title,
    width: size,
  };
};

const Template: ComponentStory<typeof WMarquee> = (args: IWMarqueeProps) => (
  <WMarquee {...args}></WMarquee>
);

const speed = 8;

const children = (size: number) => {
  const urls: FixedWidthImage[] = [
    createUnsplashUrl(size, "dog"),
    createUnsplashUrl(size, "cat"),
    createUnsplashUrl(size, "man"),
    createUnsplashUrl(size, "woman"),
    createUnsplashUrl(size, "nature"),
    createUnsplashUrl(size, "bree"),
    createUnsplashUrl(size, "tree"),
    createUnsplashUrl(size, "lion"),
  ];

  return urls.map((u, idx) => (
    <img
      key={`${u.url}-${idx}`}
      src={u.url}
      alt={u.alt}
      className="comp-marquee-img"
      style={{ width: `${u.width}px`, minHeight: "1px" }}
    />
  ));
};

export const Size400 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size400.args = {
  children: children(400),
};

export const Size800 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size800.args = {
  children: children(800),
};

export const Size1000 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size1000.args = {
  children: children(1000),
};
