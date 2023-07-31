# dojo-blog

## How to add google font in tailwind

- The import of the url on the top

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Add Font Name in Tailwind Config File

```css
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand"],
      },
    },
  },
  plugins: [],
};

```

- Step 4: Use Your Google Fonts in HTML

```css
<h1
class="text-2xl
font-primary
">
This heading is using Poppins Fonts
</h1>
```

- Optional Step 5 : Use it on your entire web page.

```css
<body
class="font-primary"
>

```
