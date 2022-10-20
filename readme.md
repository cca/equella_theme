# Vault Theme

The custom openEQUELLA theme used by California College of the Arts. See the [openEQUELLA Theming Guide](https://openequella.github.io/guides/ThemingGuide.html) for documentation on creating a custom theme.

## Setup

Install [Node](http://nodejs.org) which gets you npm and then `npm install` to get dependencies.

## Usage

`grunt build`, also the default `grunt` task, compiles the SCSS to minified CSS, copies images into the build ("dist") directory, & compresses all sets into "theme.zip" for uploading. `grunt watch` will watch for changes to any file in the "css" directory & then run `build`.

To install the theme, run `grunt build` & then visit [/access/themesettings.do](https://vault.cca.edu/access/themesettings.do) (`grunt open` will take you there) where you can *remove custom theme* & replace it with the "theme.zip" created by the build process.

`grunt dev` is like `open` but for our development server.

## LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
