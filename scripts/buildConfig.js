var config = {
  "copy":{
    "html":{
      "sourceDir": "src",
      "sourceFiles": ["index"],
      "destinationDir":"demo"
    },
      "js":{
          "sourceDir": "lib",
          "sourceFiles": ["demo"],
          "destinationDir":"demo"
      },
    "css":{
      "sourceDir":null,
      "sourceFiles": null,
      "destinationDir":null
    },
    "json":{
      "sourceDir":null,
      "sourceFiles": null,
      "destinationDir":null
    },
    "other":{
      "sourceDir":null,
      "sourceFiles": null,
      "destinationDir":null
    }
  }
};

module.exports = config;
