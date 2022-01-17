module.exports = {
  plugins: [
    [
      "relay",
      {
        src: "./",
        artifactDirectory: "../../types",
        extensions: ["js", "ts", "tsx"],
        include: ["**/*"],
        schema: "../apps/backend/schemas/__generated__/main.graphql",
        watchman: false,
        language: "typescript",
      },
    ],
  ],
};
