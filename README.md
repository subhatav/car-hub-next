# Cars Hub

This is a **front-end** website for *showcasing* rental **cars**.

The *project* is **developed** in **TypeScript** using:

* **NodeJS** with **NPM** as *foundation*;
* **ReactJS** for *library* and **NextJS** for *framework*;
* **TailwindCSS** with **HeadlessUI** for *styling*.

<hr />

## Requirements

The **stable** releases of the following *technologies* are used:

| Technology  | Version | Technology | Version |
| ----------- | ------- | ---------- | ------- |
| Node        | 18.6+   | TypeScript | 5.1+    |
| React & DOM | 18.2+   | Next       | 13.4+   |
| TailwindCSS | 3.3+    | HeadlessUI | 1.7+    |

P.S. For *hosted* usage, only **Vercel** deployment with **variables** is *sufficient*.

<hr />

## Variables

The **environment** *variables* to be **used**, are:

### Public Rapid API Key

   1. **Go** to the [RapidAPI Cars](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) and **find** the `Header Parameters` *tab*.
   2. **Copy** the *value* from the `X-RapidAPI-Key` *field*.
   3. **Enter** it in the `NEXT_PUBLIC_RAPID_API_KEY` *property*.

### Public IMAGIN API Key

   1. **Go** to this [GitHub Gist](https://gist.github.com/adrianhajdin/e41751d170881f32955f556aaa45c77c#file-api-key) and **select** the `api-key` *file*.
   2. **Copy** the *text* **content** from that *file*.
   3. **Enter** it in the `NEXT_PUBLIC_IMAGIN_API_KEY` *property*.

<hr />

## Development

For **development** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** all the *dependencies*:

    `npm install`

2. **Run** this *command* to keep **watch** and **start** the *local server*:

    `npm run dev`

3. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

## Production

For **production** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** the required *dependencies*:

    `npm install`

2. **Run** this *command* to **minify** and **build** the *React* project:

    `npm run build`

3. **Run** this *command* to **host** the optimized *React* project:

    `npm start`

4. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

**Thank** you for *using* it!

<hr />