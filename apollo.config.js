module.exports = {
  client: {
    excludes: ["**/__tests__/**/*"],
    service: {
      name: "marketplace",
      url: "https://staging.taskdropper.com/graphql/",
    },
  },
};