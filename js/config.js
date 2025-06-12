tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        purple_5: "hsl(263, 55%, 52%)",
      },
      boxShadow: {
        light:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        dark: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)",
        "glow-light": "0 0 10px rgba(100, 100, 255, 0.2)",
        "glow-dark": "0 0 15px rgba(100, 100, 255, 0.5)",
      },
    },
  },
};
