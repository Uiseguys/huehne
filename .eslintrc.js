module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "plugins": [
        "react", "babel"
    ],
    "rules": {
        "react/sort-comp": [
          2,
          {
            order: [
              "type-annotations",
              "static-methods",
              "life-cycle",
              "everything-else",
              "render"
            ]
          }
        ],
        "react/no-unused-prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-indent": 0,
        "arrow-body-style": 0,
        "no-useless-escape": 0,
        "react/button-has-type": 0,
        "react/jsx-indent-props": 0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "strict": 0
    },
    "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
