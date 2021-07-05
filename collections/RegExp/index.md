### 正则取反
```js
[^\d]
```
### [正则补充](https://deerchao.cn/tutorials/regex/regex.htm)
<table>
<tr>
    <th scope="col">分类</th>
    <th scope="col">代码/语法</th>
    <th scope="col">说明</th>
</tr>
<tr>
    <td rowspan="3">捕获</td>
    <td>(exp)</td>
    <td>匹配exp,并捕获文本到自动命名的组里</td>
</tr>

<tr>
    <td>(?&lt;name&gt;exp)</td>
    <td>匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp)</td>
</tr>
<tr>
    <td>(?:exp)</td>
    <td>匹配exp,不捕获匹配的文本，也不给此分组分配组号</td>
</tr>
<tr>
    <td rowspan="4">零宽断言</td>
    <td>(?=exp)</td>
    <td>匹配exp前面的位置</td>
</tr>

<tr>
    <td>(?&lt;=exp)</td>
    <td>匹配exp后面的位置</td>
</tr>
<tr>
    <td>(?!exp)</td>
    <td>匹配后面跟的不是exp的位置</td>

</tr>
<tr>
    <td>(?&lt;!exp)</td>
    <td>匹配前面不是exp的位置</td>
</tr>
<tr>
    <td rowspan="1">注释</td>
    <td>(?#comment)</td>
    <td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td>
</tr>
</table>

例如 :
[a-z]*(?=ing) 可以匹配cooking singing 中的cook与sing
(?<=abc).* 可以匹配abcdefgabc中的defgabc 而不是abcdefg
### a+?正则惰性