# custom-eslint-rule

## Example
### min-comment-lines
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

### jsx-props-max-count
set react component maximum props count.

*If component is spread props, props count is 1. Avoid use spread props.*

example:
```js
// .eslintrc.js
module.exports = {
  extends: 'eslint:recommended',
  // ... other eslint config
  rules: {
    // component props count must <= 10, otherwise alert a warning
    'jsx-props-max-count': ['warn', 10],
  }
}
```

## Option
### min-comment-lines
This rule support `Number` options or `Object` option.

`Number` options. set minimum percentage.
* {Number} min 10

```plain
# rule option:
{ 'min-comment-lines': ['warn', 5] }
```

`Object` options. `skipBlankLines` is `Boolean` type. Default is `false`. If set `true`, eslint will ignore blank line.

* {Number} option.min
* {Boolean} option.skipBlankLines

```plain
# rule option:
{ 'min-comment-lines': ['warn', { min: 5, skipBlankLines: true }] }
```

### jsx-props-max-count
This rule support `Number` options or `Object` option.

* `Number` options. set max count.

```plain
# rule option:
{ 'jsx-props-max-count': ['warn', 10] }
```

`Object` options. `ignore` is `Array` type. Default is `[]`. You can set some ui-libs component name. For example: `Table`

* {Number} option.max
* {Array<String>} option.ignore

```plain
# rule option:
{ 'jsx-props-max-count': ['warn', { max: 10, ignore: ['Table'] }] }
```
