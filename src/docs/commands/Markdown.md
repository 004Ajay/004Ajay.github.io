---
id: Markdown
title: Markdown
sidebar_label: Markdown
---

### Dropdown in Markdown

```markdown
<details>
  <summary>Click here to expand the dropdown</summary>
  
  This is the hidden content that appears when clicked!

</details>
```

- Make the title bold using `<strong>title_here</strong>`

Output: 

<details>
  <summary>Click here to expand the dropdown</summary>
  
  This is the hidden content that appears when clicked!

</details>

---

### Setext Headings

These are equivalent to `#` headings

```markdown
Heading 1
=========

Heading 2
---------
```

Output: 

Heading 1
=========

Heading 2
---------

---

### Backticks inside inline code

```markdown
``use `git` here``
```

Output: 

``use `git` here``

---

### Longer fences

Need triple backticks inside a code block?

````markdown
```
hello
```
````

---

### Reference-style links

Instead of:

```markdown
[OpenAI](https://openai.com)
```

you can write:

```markdown
[MyWebsite][site]

[site]: https://004ajay.github.io/
```

Useful for documents with many repeated links.

Output: 

[MyWebsite][site] (this uses the 2nd method)

[site]: https://004ajay.github.io/

---

### Nested blockquotes

```markdown
> Level 1
>> Level 2
>>> Level 3
```

Output: 

> Level 1
>> Level 2
>>> Level 3