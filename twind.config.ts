import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Courier New"', 'monospace'],
      }
    }
  }
} as Options;
