import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {WMarquee} from "./WMarquee";
import { IWMarqueeProps } from "./IWMarqueeProps";
import { getEnumValues } from '../../../.storybook/helpers';
import { AlignOptions } from "../AlignOptions";

export default {
  title: "WMarquee",
  component: WMarquee,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: getEnumValues(AlignOptions),
      },
    },
  },

} as ComponentMeta<typeof WMarquee>;

const baseStyle = {
  backgroundColor: "#568899",
  textAlign: "center",
  padding: "2rem",
  fontSize: "2rem",
  color: "white",
  borderRadius: "1rem",
  textShadow: "1px 1px 20px black",
  filter: "drop-shadow(3px 5px 4px #00000099)",
  margin: "3rem",
  border: "solid 3px #1d315759",
  height: "auto",
  display:'grid',
  alignContent: 'stretch',
  alignItems: 'stretch',
};

const Template: ComponentStory<typeof WMarquee> = (args: IWMarqueeProps) => (
  <WMarquee {...args}>
    <div style={{ ...baseStyle, width: "150px" }}>Item 1</div>
    <div style={{ ...baseStyle, width: "200px", height: "4rem" }}>Item 2</div>
    <div style={{ ...baseStyle, width: "300px" }}>Item 3</div>
    <div style={{ ...baseStyle, width: "150px" }}>Item 4</div>
    <div style={{ ...baseStyle, width: "200px", height: "4.5rem"  }}>Item 5</div>
    <div style={{ ...baseStyle, width: "300px" }}>Item 6</div>
  </WMarquee>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  speedSec: 6,
  gap: "2rem",
  height: 15
};

export const DistanceCompensation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DistanceCompensation.args = {
  speedSec: 6,
  gap: "2rem",
  height: 15,
  animationDistanceCompensation:"6rem"
  
};

