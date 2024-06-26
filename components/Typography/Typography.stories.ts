// Typography.stories.ts
import { Meta, StoryObj } from "@storybook/react"

import Typography, { type TypographyProps } from "./Typography"

const meta: Meta<TypographyProps> = {
  title: "Design System/Atoms/Typography",
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
}

export default meta

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
  },
}

export const TextHeadingH1: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
}

export const TextHeadingH2: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
}

export const TextHeadingH3: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
}

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "p",
    size: "md",
    className: "text-primary",
  },
}
