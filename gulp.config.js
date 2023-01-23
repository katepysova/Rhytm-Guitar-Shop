const sourceFolder = "./src";
const buildFolder = "./dist";

export default {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    svg: `${buildFolder}/icons/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${sourceFolder}/*.html`,
    scss: `${sourceFolder}/scss/main.scss`,
    js: `${sourceFolder}/js/script.js`,
    images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svgImages: `${sourceFolder}/images/**/*.svg`,
    svg: `${sourceFolder}/icons/svg/*.svg`,
    fonts: `${sourceFolder}/fonts/*.*`,
  },
  watch: {
    html: `${sourceFolder}/**/*.html`,
    scss: `${sourceFolder}/scss/**/*.scss`,
    js: `${sourceFolder}/js/**/*.js`,
    images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    svg: `${sourceFolder}/icons/svg/*.svg`,
    fonts: `${sourceFolder}/fonts/*.*`,
  },
  clear: buildFolder,
  buildFolder,
  sourceFolder,
};
