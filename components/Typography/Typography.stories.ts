// Typography.stories.ts
import { Meta, StoryObj } from "@storybook/react";

import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    className: {
      type: "string",
    },
    children: {
      defaultValue:'This is a text',
      type:'string'
      },
      variant:{
        options: ["primary", "secondary","tertiary"],
        control: {type:"radio"}
      },
      size:{
        options: ["xs","sm","md","xl","title1","title2","title3"],
        control: {type:"radio"}
      },
      defaultVariants:{
        options:['variant','size']
      }
  },
};

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
  },
};