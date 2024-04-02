import {addons} from "@storybook/manager-api"
import {create} from "@storybook/theming"

// 606 x 255

addons.setConfig({
  theme: create({
    base:"dark",
    brandTitle:"DS Base | Design System",
    brandUrl:"https://ds-base.vercel.app/",
    //brandImage: "http://placehold.it/350x150",
    brandTarget:"_self",
  }),
})
