export default {
  description: "This version is a hotfix mainly to fix the settings issue.",
  changes: [
    {
      title: "You are running Lone_Soul's modified version :)",
      items: [],
    },
    {
      title: "What's New?",
      items: [
        "Fixed an issue with the settings patch failing",
        "Fixed an issue with hiding GIF and Gift buttons",
        "Fixed certain plugin patches not returning values",
        "Updated links to new website",
      ],
    },
    {
      title: "Power Users & Developers",
      type: "improved",
      items: [
        "Certain patches done using `monkeyPatch` instead of `Patcher` now properly return values.",
      ],
    },
  ],
};
