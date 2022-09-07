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

const Template: ComponentStory<typeof WMarquee> = (args: IWMarqueeProps) => (
  <WMarquee {...args}></WMarquee>
);

const speed = 8;

const children = (size: number) => {
  const urls = [
    "https://source.unsplash.com/400x400?dog",
    "https://source.unsplash.com/400x400?cat",
    "https://source.unsplash.com/400x400?man",
    "https://source.unsplash.com/400x400?woman",
    "https://source.unsplash.com/400x400?nature",
    "https://source.unsplash.com/400x400?bee",
    "https://source.unsplash.com/400x400?lion",
    "https://source.unsplash.com/400x400?tree",
  ];

  return urls.map((m, idx) =>  <img
  key={`${m}-${idx}`}
  src={m}
  alt=""
  className="comp-marquee-img"
/>);
}

export const Size400 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size400.args = {
  speedSec: speed,
  width:40,
  children: children(400),
};

export const Size800 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size800.args = {
  speedSec: speed,
  width:80,
  children: children(800),
};

export const Size1000 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size1000.args = {
  speedSec: speed,
  width:100,
  children: children(1000),
};
