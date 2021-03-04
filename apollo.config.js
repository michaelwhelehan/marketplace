module.exports = {
  client: {
    excludes: ["**/__tests__/**/*"],
    service: {
      name: "marketplace",
      url: "http://futurefemales.taskdropper.com:8000/graphql/" //"https://api-staging.taskdropper.com/graphql/",
    },
  },
};