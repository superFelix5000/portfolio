import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "mono": ['"Courier New"', "monospace"],
      },
      colors: {
        linkedin: "#0A66C2",
        github: "#6e40c9",
        mastodon: "#595aff"
      }
    },
  },
} as Options;
