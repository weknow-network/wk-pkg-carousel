import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WCarousel from "./WCarousel";
import { IWCarouselProps } from "./IWCarouselProps";

export default {
  title: "WCarousel",
  component: WCarousel,
} as ComponentMeta<typeof WCarousel>;

const Template: ComponentStory<typeof WCarousel> = (args: IWCarouselProps) => (
  <WCarousel {...args}>
    <div style={{ backgroundColor: "pink", width: "150px", height: "400px", textAlign: "center", padding: '2rem'}}>
      Item 1
    </div>
    <div style={{ backgroundColor: "pink", width: "200px", height: "400px", textAlign: "center", padding: '2rem' }}>
      Item 2
    </div>
    <div style={{ backgroundColor: "pink", width: "300px", height: "400px", textAlign: "center", padding: '2rem' }}>
      Item 3
    </div>
    <div style={{ backgroundColor: "pink", width: "150px", height: "400px", textAlign: "center", padding: '2rem'}}>
      Item 4
    </div>
    <div style={{ backgroundColor: "pink", width: "200px", height: "400px", textAlign: "center", padding: '2rem' }}>
      Item 5
    </div>
    <div style={{ backgroundColor: "pink", width: "300px", height: "400px", textAlign: "center", padding: '2rem' }}>
      Item 6
    </div>
  </WCarousel>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gap: '2rem',
  interval: 3000,
};
