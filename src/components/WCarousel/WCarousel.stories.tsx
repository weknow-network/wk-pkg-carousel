import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WCarousel } from "./WCarousel";
import { IWCarouselProps } from "./IWCarouselProps";
import { getEnumValues } from "../../../.storybook/helpers";
import { AlignOptions } from "../utility/AlignOptions";

export default {
  title: "WCarousel",
  component: WCarousel,
  argTypes: {
    align: {
      control: {
        type: "inline-radio",
        options: getEnumValues(AlignOptions),
      },
    },
  },
} as ComponentMeta<typeof WCarousel>;

const baseStyle: React.CSSProperties = {
  backgroundColor: "#568899",
  textAlign: "center",
  padding: "2rem",
  fontSize: "2rem",
  color: "white",
  borderRadius: "1rem",
  textShadow: "1px 1px 20px black",
  filter: "drop-shadow(3px 5px 4px #00000099)",
  margin: "6px",
  border: "solid 3px #1d315759",
  height: "auto",
  display: "grid",
  alignContent: "stretch",
  alignItems: "stretch",
};

const Template: ComponentStory<typeof WCarousel> = (args: IWCarouselProps) => (
  <WCarousel {...args}>
    <div
      style={{
        ...baseStyle,
        width: "150px",
        minWidth: "60rem",
        maxWidth: "100%",
        padding: "100px",
        boxSizing: "content-box",
      }}
    >
      Item 1
    </div>
    <div
      style={{
        ...baseStyle,
        width: "200px",
        maxWidth: "100%",
        padding: "20px",
        height: "4rem",
        boxSizing: "border-box",
      }}
    >
      Item 2{" "}
    </div>
    <div style={{ ...baseStyle, width: "300px" ,  boxSizing: "border-box",}}>Item 3</div>
    <div style={{ ...baseStyle, width: "150px" }}>Item 4</div>
    <div style={{ ...baseStyle, width: "200px", height: "4.5rem" }}>Item 5</div>
    <div style={{ ...baseStyle, width: "300px" }}>Item 6</div>
  </WCarousel>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gap: "2rem",
  interval: 3000,
  height: 15,
};
