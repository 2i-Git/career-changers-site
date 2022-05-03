# Career changers App

## Getting started
Once you have cloned the repo to your machine you will need to install dependencies using npm and yarn:
```
npm install -g gatsby-cli
npm install --global yarn
npm install
yarn add
```

then try running the app locally using:
```
gatsby develop
```
the dev server should start running at **localhost:8000**.

You don't need to create production builds, when your code is pulled into the main branch of the repo, Netlify will automatically kick off a build.

***

## High level overview of the app
This app is built on a template which uses:
* Gatsby - CMS
* React - to display components
* Typescript - with React
* GraphQL - As a content database and to pull data into pages
* i18n - to serve content in multiple languages. I've stripped out as much of this as I can since we only need English

If we were running a high-performance blog, this would be amazing. Since we're not, it's a little bit overkill for our needs.

To give a rough overview of where things can be found:

### content
this is where all of the lesson text is found as well as some of the images. Everything is written in markup with frontmatter. The content is pulled into the frontend using GraphQL and then a React library converts the markup to actual formatting.

In the code examples, indenting with regular spaces was not surviving the journey through the database so I had to use *special* non-breaking spaces. If you need to indent something, you can just copy and paste the non-breaking spaces that are already there.

Some of the sections have names that don't really match them, this is a hangover from how they were named in the template. Please don't change the names as the file names are used to dynamically lay out the page.

### src
This is where all of the "code" aspects are found

### src/templates/top-index.jsx
This file contains the large GraphQL query that pulls down content. It also sets how the page is set out by dynamically importing sections. Some of the sections such as the cookie banner and SEO are set out statically here so if you need to work on them, this is where you do it.

### src/components
This has all of the React components and the matching SCSS (just fancy CSS) files to style them. A lot of the React libraries that you may need to work on are also implemented in these.


***

gatsby version of startbootstrap-agency with i18n supported.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a8bfd50-2bd5-43a6-bacd-51e5efc1f248/deploy-status)](https://app.netlify.com/sites/gatsby-startbootstrap-agency/deploys)

__This project is migrated to Gatsby@v4__
- check the latest Gatsby@v3 version [here](https://github.com/thundermiracle/gatsby-startbootstrap-agency/tree/gatsby-3).
- check the latest Gatsby@v2 version [here](https://github.com/thundermiracle/gatsby-startbootstrap-agency/tree/gatsby-2.0).

## Preview

![startbootstrap-agency](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/startbootstrap-agency.png)

## Sample page

[https://gatsby-startbootstrap-agency.netlify.app](https://gatsby-startbootstrap-agency.netlify.app)

[https://gatsbystartbootstrapagency1.gatsbyjs.io/](https://gatsbystartbootstrapagency1.gatsbyjs.io/)

[※ startbootstrap-agency (Original Version)](https://github.com/BlackrockDigital/startbootstrap-agency)

[※ startbootstrap-agency-webpack(Webpack Version)](https://github.com/thundermiracle/startbootstrap-agency-webpack/)

## Note

__If you're not interesting in i18n, use [StaticQueryVersion](https://github.com/thundermiracle/gatsby-startbootstrap-agency/tree/StaticQueryVersion) instead. StaticQueryVersion gets better performance and better code structure.__

## How to use

This project is using `yarn` as the package manager. You have to set yarn as Gatsby-cli's package manager first.

[https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager](https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager)

```sh
npm install -g gatsby-cli

gatsby new my-blog-folder https://github.com/thundermiracle/gatsby-startbootstrap-agency
```

## Why Gatsby Version

1. > Original version is great but have to load too many unnecessary contents from CDN including all components in `bootstrap`, all solid & brands icons in `fontawesome`. That dramatically slows down the FCP(first contentful paint) in 3G environment.

    Using Gatsby could tree-shaking unnecessary code, optimizing images which make first contentful paint very fast.

1. > Implementation of i18n in original version is not easy and will make a lot of redundant code.

    i18n is really easy in Gatsby and i18n is more maintainable.

## Comparison of Original, Webpack and Gatsby version

### Gatsby Version

![Gatsby lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_gatsby.png)

### Webpack Version

![Webpack lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_webpack.png)

### Original Version

![Original lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_original.png)

## Basic Configuration

- `iconName` in Services.md MUST be defined in `'config/CustomIcons.jsx'`.

- `imageFileName` in markdown MUST be added in `'content/assets'`.

- all configurable contents are saved in markdown files in `'content'` folder.

- change `file name's number` in `'content/sections'` folder to change the sort order.

- nullable items (if defined):
  
  - `anchor` in section markdown: display in menu if defined in sections' markdown
  - items in `social`: `twitter, facebook, linkedin, github, medium`
  - `jumpToAnchor, jumpToAnchorText` in Top.md: add button in Top section

## i18n Configuration

- set defaultLang in `'config/site.js'`

- add langTextMap to `'config/site.js'` (LanguageSelector won't display if langTextMap is not defined. Consider using [StaticQueryVersion](#note) if i18n is not necessary)

- copy markdown files in `'content'` folder, rename it to `xxxx.[langKey].md` and translate the contents

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
