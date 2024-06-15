# ModWebpackExampleJs


---

## Installation

1. install nodejs
2. `corepack enable`
3. `yarn`

## config
change mod name in `boot.json` file

## build

`yarn run build:webpack`

the output file will in `dist` folder

## pack

`node "..\dist-insertTools\packModZip.js" "boot.json"`

---

only the `src_inject/inject_early.js` file or require by it will be build by webpack

the `src_load/earlyload.js` and `src_load/preload.js` still a normal js file


