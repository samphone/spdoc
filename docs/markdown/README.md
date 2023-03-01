---
sidebar: auto
---
# markdown
Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。

## 标题语法 {#header}
要创建标题，请在单词或短语前面添加井号 (\#) 。\# 的数量代表了标题的级别。例如，添加三个 (\### myHeader) 表示创建一个三级标题 &lt;h3&gt;myHeader&lt;/h3&gt; 
### 标题编号
许多Markdown处理器支持标题的自定义ID - 一些Markdown处理器会自动添加它们。添加自定义ID允许您直接链接到标题并使用CSS对其进行修改。要添加自定义标题ID，请在与标题相同的行上用大括号括起该自定义ID
```
My Great Heading {#header}
```

## 段落语法
要创建段落，请使用空白行将一行或多行文本进行分隔。不要用空格（spaces）或制表符（ tabs）缩进段落
``` markdown
第一段

第二段
```

## 换行语法
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(&lt;br&gt;)。

## 强调语法
通过将文本设置为粗体或斜体来强调其重要性
### 粗体
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）**前后不要加空格**
```
**abd** 
a**b**d
```
**abd** 
a**b**d

### 斜体
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。
```
*abd*
a*b*d
```
*abd* 
a*b*d

### 删除线
可以通过在单词中心放置一条水平线来删除单词。结果看起来像这样。此功能使您可以指示某些单词是一个错误，要从文档中删除。若要删除单词，请在单词前后使用两个波浪号~~。

    ~~点点滴滴~~
~~点点滴滴~~

## 引用语法
要创建块引用，请在段落前添加一个 > 符号。

```
> 123445555
```
> 123445555
### 多个段落的块引用
块引用可以包含多个段落。为段落之间的空白行添加一个 > 符号
```
> 1
>
> 3
```
> 1
>
> 3

### 嵌套块引用
块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号
```
>1
>
>> 3
```
>1
>
>> 3

## 列表语法
可以将多个条目组织成有序或无序列表。
### 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。
``` markdown
1. first item
1. first item
1. first item
    1. first item
    1. first item
    1. first item
1. first item
```
1. first item
1. first item
1. first item
    1. first item
    1. first item
    1. first item
1. first item

### 无序列表
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
```
- first item
- first item
    - first item
    - first item
    - first item
- first item
- first item
```

- first item
- first item
    - first item
    - first item
    - first item
- first item
- first item

### 在列表中嵌套其他元素
要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符，如下例所示：

```
- first item

    this is paragraph

- first item
    - first item

        >this is paragraph

    - first item

        ```
            <html>22</html>
        ```

    - first item
- first item

    // 图片...
    
- first item
```
- first item

    this is paragraph

- first item
    - first item

        >this is paragraph

    - first item

        ```
            <html>22</html>
        ```

    - first item
- first item

    // 图片...

- first item


## 代码语法
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。
```
At the`command`prompt, type

``Use `code` in your Markdown file.``

    <h3>
        <span>222</span>
    </h3>

```
At the`command`prompt, type

``Use `code` in your Markdown file.``


    <h3>
        <span>222</span>
    </h3>

## 分隔线语法
要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。
```
***
---
____
```
***
---
____

## 链接语法
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。 `[超链接显示名](超链接地址 "超链接title")`
```
[百度一下吧](https://baidu.com, '百度')
```
[百度一下吧](https://baidu.com, '百度')

## 图片语法
要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。`![图片alt](图片链接 "图片title")`
```
![一张网络图片](https://t7.baidu.com/it/u=2531125946,3055766435&fm=193&f=GIF '皮影')
```
![一张网络图片](https://t7.baidu.com/it/u=2531125946,3055766435&fm=193&f=GIF '皮影')

## 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 \ 

    \ ' * _ {} [] () # + - . ! |
特殊字符转化

    <  &lt;
    >  &gt;
    &  &amp;
    ©  &copy;
    |  &#124;

&lt;
&gt;
&amp;
&copy;
&#124;

## 内嵌 HTML 标签
对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

### 行级內联标签
HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

    This **word** is bold. This <em>word</em> is italic.

This **word** is bold. This <em>word</em> is italic.

### 围栏代码块
    ``` json | js | html ...
        ...
    ```
``` js
console.log(1)
```

### 区块标签
区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。
```
 <table>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
 </table>
```
 <table>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
 </table>


## 表格
要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列。您可以选择在表的任一端添加管道。

```
|  员工 |  薪资  |  工龄  |
| --- | ---| ---|
| 张三 | 12K | 24 |
| 王二狗 | 8K | 2 |
```

|  员工 |  薪资  |  工龄  |
| --- | ---| ---|
| 张三 | 12K | 24 |
| 王二狗 | 8K | 2 |

### 对齐
可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。
```
|  员工 |  薪资  |  工龄  |
| :---: | :---| ---:|
| 张三 | 12K | 24 |
| 王二狗 | 8K | 2 |
```
|  员工 |  薪资  |  工龄  |
| :---: | :---| ---:|
| 张三 | 12K | 24 |
| 王二狗 | 8K | 2 |

## 脚注
脚注使您可以添加注释和参考，而不会使文档正文混乱。当您创建脚注时，带有脚注的上标数字会出现在您添加脚注参考的位置。读者可以单击链接以跳至页面底部的脚注内容。

要创建脚注参考，请在方括号（`[^1]`）内添加插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。

在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本（`[^1]: My footnote.`）。您不必在文档末尾添加脚注。您可以将它们放在除列表，块引号和表之类的其他元素之外的任何位置。

```
Here's a simple footnote, [^12] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote, [^12] and here's a longer one.[^bignote]

[^12]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## vuepress md扩展

### 自定义容器
```
::: tip | warning | danger | details
这是一个提示
:::
```

::: tip rname提示
这是一个提示
:::


::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情快
:::