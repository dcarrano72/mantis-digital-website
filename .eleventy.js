module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
