<h1 align="center">
  <img alt="ds-design-system Design System" title="#ds-design-system" src="https://i.imgur.com/VbHjaxK.png" height="300" />
</h1>


<p align="center">
   <h2 align="center">
    Design System using NextJS and Storybook
    </h2>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-4e5acf">
  </a>
</p>
<p align="center">
  <a target="_blank" href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/static/v1?color=blue&label=Typescript&message=TS&?style=plastic&logo=Typescript">
  </a>
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img alt="Next.js" src="https://img.shields.io/static/v1?color=blue&label=Next&message=JS&?style=plastic&logo=Next.js">
  </a>
  <a target="_blank" href="https://storybook.js.org/docs/react/get-started/introduction">
    <img src="https://img.shields.io/static/v1?color=red&label=Storybook&message=SB&?style=plastic&logo=Storybook">
  </a>
  <a target="_blank" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?color=blue&label=Tailwind&message=CSS&?style=plastic&logo=TailwindCSS">
  </a>
</p>

 <br> </br>

## 👨‍💻 How to install?

```bash
# npm
npm i ds-design-system@latest

# yarn
yarn add ds-design-system@latest
```


## 🏃 How to use?

The ds-design-system library was created to work in Next.js+TailwindCSS applications. Therefore, to use it, remember to create your applications with this structure. In order for you to be able to use all the library components without problems, additional configuration is required in your project. Let's do this step by step: 

    
1. In the same file that you import the tailwind layers (usually the `globals.css` or `styles.css` file) import the CSS file from the ds-design-system library as well
    
    ```tsx
    import './globals.css'
    import 'ds-design-system/styles/globals.css'
    ```
    
2. Inside the Tailwind configuration file, `tailwind.config.js`, add the ds-design-system library settings as `preset`:
    
    ```tsx
    const config = {
    	presets: [
    		require('ds-design-system/tailwind.config')
    	]
    	// ... demais configurações ...
    }
    ```
    
3. Add in the same configuration file the reference of the ds-design-system library files to be covered by Tailwind and processed in PostCSS. To do this, simply add the path of the ds-design-system library components within the `content` property, in the same tailwind configuration file as in the previous step:
    
    ```tsx
    const config = {
    	content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/ds-design-system/components/**/*.{js,ts,jsx,tsx,mdx}'
      ]
    	// ...  more  ...
    }
    ```
    
4. Configure Next.js transpile in the `next.config.js` file. In the new version of Next 13 we have a feature that will help transpile our library. Without this we will receive successive compilation errors because Next will not understand our library.
    
    ```jsx
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      transpilePackages: ["ds-design-system"],
    };
    
    module.exports = nextConfig;
    ```

And now you can use the library components on your pages:

```tsx
"use client";
import { Typograph } from "ds-design-system/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center text-gray-950 bg-gray-800">
        <Typograph element="h3" size="title3" className="font-black text-white">
          Hello!
        </Typograph>
      </div>
    </main>
  );
}
```

## 📚 What dependencies are used in this library?
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Class Variance Authority (cva)](https://cva.style/docs)
- [classnames](https://github.com/JedWatson/classnames)
- [HeadlessUI](https://headlessui.com/)
- [heroicons](https://heroicons.com/)
- [Chromatic](https://www.chromatic.com/)

## 📝 Documentation

To check the documentation click [here](https://ds-design-system.vercel.app/?path=/docs/design-tokens-colors--docs)

- To check the documentation under development, do
  
```bash
npm run storybook ou yarn storybook
```

## Developers/Contributors :octocat:

[<img src="https://avatars.githubusercontent.com/u/24809931?v=4" width=115><br><sub>Matheus</sub>](https://github.com/matheussnk)

## License 

The [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) (GPL)

Copyright :copyright: 2024 - DS Base Design System  
