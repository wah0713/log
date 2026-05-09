## RegExp

### 正则取反
```js
[^\d]
```

### [正则补充](https://deerchao.cn/tutorials/regex/regex.htm)
| 分类 | 代码/语法 | 说明 |
|------|----------|------|
| 捕获 | (exp) | 匹配exp,并捕获文本到自动命名的组里 |
| 捕获 | (?\<name\>exp) | 匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp) |
| 捕获 | (?:exp) | 匹配exp,不捕获匹配的文本，也不给此分组分配组号 |
| 零宽断言 | (?=exp) | 匹配exp前面的位置 |
| 零宽断言 | (?\<=exp) | 匹配exp后面的位置 |
| 零宽断言 | (?!exp) | 匹配后面跟的不是exp的位置 |
| 零宽断言 | (?\<\!exp) | 匹配前面不是exp的位置 |
| 注释 | (?#comment) | 这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读 |

示例:
[a-z]*(?=ing) 可以匹配cooking singing 中的cook与sing
(?<=abc).* 可以匹配abcdefgabc中的defgabc 而不是abcdefg