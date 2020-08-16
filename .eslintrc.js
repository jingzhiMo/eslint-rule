module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "min-comment-lines": ["warn", 20],
    "jsx-props-max-count": ["warn", 10],
    // "min-comment-lines": ["warn", { min: 20, skipBlankLines: false }]
  },
  "env": {
    "browser": true
  }
};
