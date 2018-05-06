module.exports = {
  "env": {
    "node": true, // this is the best starting point
    "browser": true, // for react web
    "es6": true, // enables es6 features
    "jest": true // enables es6 features
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "plugins": ["jest"],
  "parser": "babel-eslint", // needed to make babel stuff work properly
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [0, { "argsIgnorePattern": "^_" }],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0
  }
};
