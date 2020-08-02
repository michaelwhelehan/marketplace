module.exports = {
  client: {
    excludes: ["**/__tests__/**/*"],
    service: {
      name: "marketplace",
      url: "https://api-staging.taskdropper.com/graphql/",
    },
  },
};