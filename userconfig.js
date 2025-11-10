// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-7.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "Calender",
              url: "https://calendar.google.com/calendar",
              icon: "calendar-week",
              icon_color: palette.yellow,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "code",
              icon_color: palette.blue,
            },
            {
              name: "hacker-news",
              url: "https://news.ycombinator.com",
              icon: "news",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com/u/ashish0kumar/",
              icon: "brand-leetcode",
              icon_color: palette.yellow,
            },
            {
              name: "dsa",
              url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
              icon: "list-details",
              icon_color: palette.red,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/",
              icon: "brand-google-drive",
              icon_color: palette.red,
            },

          ]
        },
        {
          name: "",
          links: [
            {
              name: "Gemini",
              url: "https://gemini.google.com/",
              icon: "file-text-ai",
              icon_color: palette.teal,
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.red,
            },
            {
              name: "Keep",
              url: "https://keep.google.com/u/0/",
              icon: "note",
              icon_color: palette.blue,
            },

          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
