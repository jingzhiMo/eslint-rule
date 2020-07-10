# custom-eslint-rule
## min-comment-lines
set minimum comment lines percent in every file.

example:
```js
// .eslintrc.js
module.exports = {
  extends: 'eslint:recommended',
  // ... other eslint config
  rules: {
    // comment lines percent should >= 5%, otherwise alert a warning
    'min-comment-lines': ['warn', 5]
  }
}
```
