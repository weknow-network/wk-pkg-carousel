import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WMarquee } from "./WMarquee";
import { IWMarqueeProps } from "./IWMarqueeProps";
import { getEnumValues } from "../../../.storybook/helpers";
import { AlignOptions } from "../utility/AlignOptions";

const DOGS = [

  "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619980201524-2f237decc377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1604070489896-0b5916ae5691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1610112645245-36020fc0e128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519120430-a7d2287c986a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];
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
    children: {
      table: {
        disable: true,
      },
    },
    avgSpeedSec: {
      control: {
        type: 'inline-radio',
        options: [
          0.5,
          1,
          1.5,
          2,
        ],
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

const createUnsplashUrl = (size: number, url: string): FixedWidthImage => {
  return {
    url: url,
    alt: 'image',
    width: size,
  };
};

const Template: ComponentStory<typeof WMarquee> = (args: IWMarqueeProps) => (
  <WMarquee {...args}></WMarquee>
);

const speed = 8;

const children = (size: number) => {
  const urls: FixedWidthImage[] = DOGS.map((u, i) => createUnsplashUrl(size + (i % 4 * 10), u));

  return urls.map((u, idx) => (
    <img
      key={`${u.url}-${idx}`}
      src={u.url}
      alt={u.alt}
      className="comp-marquee-img"
      width={`${u.width}px`}
      
      // style={{ width: , minHeight: "1px" }}
    />
  ));
};

export const Size400 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size400.args = {
  children: children(70),
};

export const Size800 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size800.args = {
  children: children(100),
};

export const Size1000 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size1000.args = {
  children: children(200),
};
