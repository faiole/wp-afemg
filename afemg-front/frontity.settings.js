const settings = {
  "name": "bulldog",
  "state": {
    "frontity": {
      "url": "http://afemg.local",
      "title": "Bulldog Tattoo Studio",
      "description": "Tattoo e Body Piercing"
    },
  },
  "packages": [
    {
      name: "afemg-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://afemg.fms.net.br/wp-json/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
