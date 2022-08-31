const Image = require('@11ty/eleventy-img');
const cheerio = require('cheerio');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const socialImages = require("@11tyrocks/eleventy-plugin-social-images");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [600, 1000, 1400],
    formats: ["webp", "jpeg"],
    urlPath: "/images/",
    outputDir: "dist/images/"
  });
    let imageAttributes = {
      alt,
      sizes: "100vw",
      loading: "lazy",
      decoding: "async",
    };
  
    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline"
    });
  };


module.exports = function (eleventyConfig) {

  // add plugins

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(socialImages);
  
  // pass through assets
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  // credit to https://bholmes.dev/ for this aproach to optomizing markdown images using 11ty-img
  eleventyConfig.addExtension('md', {
    read: true,
    compile() {
      return async function render(data) {
        const html = await this.defaultRenderer(data);
        const $ = cheerio.load(html);
        
       
          await Promise.all(
            // loop over all the images in our document
            $('img').toArray().map(async (img) => {
              // grab the image attributes
              const { src = '', alt = '', sizes = '100vw' } = img.attribs;
              // convert to an optimized image
              const optimizedImage = await imageShortcode(src, alt, sizes);
              // replace our images with an optimized one
              $(img).replaceWith(optimizedImage);
            })
          )
        

        return $.html();
      }
    }
  })

  // add shortcodes for 11ty-img plugin
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  // adds shortcode for footer to get current year, credit for this shortcode goes to https://github.com/5t3ph/
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
