---
title: "How this blog works (notes to future me)"
description: "Posts are Markdown files in the repo. Push, and the site rebuilds."
date: 2026-10-14
tags: ["meta", "astro", "learning"]
emoji: "🛠️"
---

Every post on this site is a plain **Markdown file** that lives in the repository at `src/content/blog/`.

## Writing a new post

1. Create a file like `src/content/blog/my-new-post.md`.
2. Add the header (called *frontmatter*) at the top:

```yaml
---
title: "What I learned about RAG chunking"
description: "One-line summary that shows on the card."
date: 2026-10-20
tags: ["ai", "rag"]
emoji: "🧠"
---
```

3. Write the post below it in Markdown.
4. Commit and push to `main`. GitHub Actions rebuilds the site, and the post appears in a minute or two.

Set `draft: true` in the frontmatter to keep a post hidden while you work on it.

## Images

Put images in `public/images/blog/` and reference them like `![alt text](/Madhan-Portfolio/images/blog/photo.png)`.

```python
# Code blocks get syntax highlighting, too
def hello(name: str) -> str:
    return f"Hello, {name}!"
```
