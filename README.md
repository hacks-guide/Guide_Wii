# wii.hacks.guide

The complete guide to modding your Wii, vWii, and Wii mini.

[![Website Badge](https://img.shields.io/badge/website-wii.hacks.guide-21ABDE?logo=vitepress&logoColor=FFFFFF)](https://wii.hacks.guide/)
[![Translation Badge](https://img.shields.io/badge/translation-contribute-263238?logo=crowdin&logoColor=FFFFFF)](https://hacks-guide.crowdin.com/u/projects/12)
[![Discord Server](https://img.shields.io/badge/chat-nintendo%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/C29hYvh)
[![Last Commit Badge](https://img.shields.io/github/last-commit/hacks-guide/Guide_Wii)](https://github.com/hacks-guide/Guide_Wii/commits/master/)
![Language Count](https://img.shields.io/badge/languages-3-brightgreen)
[![MIT License](https://img.shields.io/badge/license-MIT-A31F34)](https://github.com/hacks-guide/Guide_Wii/blob/master/LICENSE.txt)

## AI (Artificial Intelligence) Policy

As a community largely composed of passionate developers and reverse engineers, we've seen the rise of AI impact the homebrew scene. We would prefer if fully or near-fully AI generated code and/or projects be kept away from our project. However, you are welcome to use a minor amount of AI "assistance" provided you are able to maintain your contributions.

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```shell
git clone https://github.com/hacks-guide/Guide_Wii --recurse-submodules
cd Guide_Wii
```

Then simply run the following commands:

```shell
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://127.0.0.1:5173/> (or whatever port is shown on the terminal).

## Markdown Styling

> [!IMPORTANT]
> When contributing to the project, try to keep your Markdown in line with the below described styling rules. This helps keep documentation consistent and clean.
>
> This is especially important if you are planning to make significant edits or create a new guide page.

### Headings

* ATX style `#` headings should be used.
* The same heading name can only be repeatedly used on headings with different parents.

### Unordered Lists

* Unordered lists should be created with the asterisk symbol `*` for consistency.
* Unordered lists should be indented with four spaces, or a single press of `TAB` in an accordingly configured code editor.

### Ordered Lists

* Ordered lists should be created using the number one `1.` for consistency.

### HTML Elements

* The HTML elements `<hr>`, `<br>`, `<ul>`, and `<li>`, can only be used in GitHub style tables.
* The HTML element `<br>` can only be used outside of GitHub style tables as a workaround for line breaks after headings.

### Horizontal Rules

* Horizontal rules should only be created using triple hyphens `---`.

### Code Blocks

* Code blocks should only be created in a fenced style.
* Code blocks should be created with the backtick symbol ` ``` `.

### Text Formatting

* Emphasis should be specified with the asterisk symbol `*`.
* Boldness, or strong, should be specified with the asterisk symbol `**`.

### Tables

* Tables should be created with leading and trailing pipes `|`.
* Tables should be constructed in an aligned style whenever possible.
