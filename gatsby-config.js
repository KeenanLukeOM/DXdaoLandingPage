module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "dxdao",
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: `Guido La Rosa`,
            GitHub: `https://github.com/guidolarosa`,
          }
        ],
        site: {
          'Last update': `2021/4/16`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code, Figma`
        },
        note: `Made in Buenos Aires, Argentina.`
      }
    }
  ],
};
