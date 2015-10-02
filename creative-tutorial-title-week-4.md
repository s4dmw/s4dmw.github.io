## This weeks tutorial topic (and the winner is.....) -  node-sass

### what is node-sass and what does it do?
Node-sass is a tool that converts scss files to css files. If you are tired of using plain ole css and want to step up your game and use scss, node-sass will convert those scss files into a useable format. As an added bonus, node-sass will also check your scss file for errors.

### what problems does it solve?
If you are tired of using plain ole css and want to step up your game and use scss, node-sass will convert those scss files into a useable format. As an added bonus, node-sass will also check your scss file for errors.

### how do i use it?
First you'll need to install node-sass from your terminal
```npm install node-sass```

Once you have some scss files ready to be converted you can run:
```node-sass [options] <input.scss> [output.css]``` where <input.scss> is the file you want to convert and the optional [output.css] is the name of your output file. The default output file name matches the input file name with a css exentsion.

The option i use the most is `--output style expanded`. The output style options are nested, expanded, compact, and compressed.

### a word of caution when using node-sass
Do not try to convert multiple scss files at one time or you might end up accidentally overwriting one or more of your scss files. Just stick to converting one file at a time to be safe.

### wait...what were we talking about again?
Node-sass. Have you forgotten already?
