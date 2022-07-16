import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WCarousel from "./WCarousel";

export default {
  title: "WCarousel",
  component: WCarousel,
} as ComponentMeta<typeof WCarousel>;

const Template: ComponentStory<typeof WCarousel> = (args) => (
  <WCarousel {...args}>
    <div style={{ backgroundColor: "pink", width: "200px", height: "400px" }}>
      HEY!
    </div>
    <div style={{ backgroundColor: "pink", width: "200px", height: "400px" }}>
      HEY!
    </div>
    <div style={{ backgroundColor: "pink", width: "200px", height: "400px" }}>
      HEY!
    </div>
  </WCarousel>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gap: 20,
  interval: 3000,
};
