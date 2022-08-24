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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  speedSec: 60,
  comps: [
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg",
  ],
};
