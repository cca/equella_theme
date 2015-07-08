# Vault Theme

The custom EQUELLA theme used by California College of the Arts. See the <a href="http://support.equella.com/downloads/6.2/Documentation/Unchanged%20Guides%20From%20Previous%20Release(s)/EQUELLA%206.0%20Theming%20Guide.pdf">EQUELLA Theming Guide</a> (PDF :frowning:) for documentation on creating a custom theme.

## Setup

- Install [Node](http://nodejs.org)
- This gives you the `npm` package manager on your command line (on a Mac, "/Applications/Utilities/Terminal.app"):
    + install [Grunt](http://gruntjs.com/) globally, `npm install grunt -g` (`-g` flag is global)
    + inside this project, `npm install` to install all package dependencies locally
- Run `grunt --help` to confirm setup was successful; you should receive a list of available tasks

You may need add NPM and Grunt to your `$PATH` variable in order to make them accessible. `export PATH="/path/to/npm:$PATH"` will do this; add that line to the `.bash_profile` inside your user's home directory to ensure it's done every time you open a terminal.

## Usage

`grunt build`, also the default `grunt` task, compiles the SCSS to minified CSS, copies images into the build ("dist") directory, & compresses all sets into "theme.zip" for uploading. `grunt watch` will watch for changes to any file in the "css" directory & then run `build`.

To install the theme, run `grunt build` & then visit [/access/themesettings.do](https://vault.cca.edu/access/themesettings.do) (`grunt open` will take you there) where you can *remove custom theme* & replace it with the "theme.zip" created by the build process.

# LICENSE

[Apache Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
