import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Elsa Danielsson",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "clarity",
      projectId: "uh6fk1xqjb"
    },
    locale: "en-US",
    baseUrl: "edania.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Kantumruy Pro" ,
        body: "Kantumruy Pro",
        code: "Kantumruy Pro",
      },
      colors: {
        lightMode: {
          light: "#EEE4F1",
          lightgray: "#A840C4",
          gray: "#A840C4",
          darkgray: "#36263B",
          dark: "#36263B",
          secondary: "#A840C4",
          tertiary: "#A840C4",
          highlight: "#EEE4F1",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#261B29",
          lightgray: "#D8ABE5",
          gray: "#D8ABE5",
          darkgray: "#D2C1D7",
          dark: "#EEE4F1",
          secondary: "#D8ABE5",
          tertiary: "#D8ABE5",
          highlight: "#261B29",
          textHighlight: "#D8ABE5",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
