## node-sass

### What is node-sass and what does it do?
Node-sass is a tool that converts SCSS files to CSS files. If you are tired of using plain ole CSS and want to step up your game and use SCSS, node-sass will convert those SCSS files into a useable format. As an added bonus, node-sass will also check your SCSS file for format/syntax errors.

### What problem does it solve?
Writing in CSS is tedious and difficult to deal with when you make syntax errors. Using SCSS is much cleaner as you can nest children under their parents. This cleans up the look of the code and can simplify it. The problem is that SCSS needs to be converted to CSS in order to be used. That's where node-sass comes in to play.

### How do i use it?
First you'll need to install node-sass from your terminal
```npm install node-sass```

Once you have some SCSS files ready to be converted you can run:
```node-sass [options] <input.scss> [output.css]``` where <input.scss> is the file you want to convert and the optional [output.css] is the name of your output file. The default output file name matches the input file name with a CSS exentsion.

The option that I use the most is `--output style expanded`. The output style options are nested, expanded, compact, and compressed.

### A word of caution when using node-sass:
Do not try to convert multiple SCSS files at one time or you might end up accidentally overwriting one or more of your SCSS files. Just stick to converting one file at a time to be safe.

### Sum it up!
Remember how annoying CSS can be? Now it can be a little less annoying by writing SCSS and converting it to CSS with node-sass!
