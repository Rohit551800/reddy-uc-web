# Reddy Urgent Care — Homepage

Pixel-aligned implementation of the [Figma design](https://www.figma.com/design/NclcqA02J0K38kiObWddg9/Reddy-UC-for-Dev?node-id=3-915) (homepage frame `3:915`).

## Open locally

Open `Pages/index.html` in a browser, or run a simple server from the project root:

```bash
npx --yes serve .
```

Then visit the URL shown (typically `http://localhost:3000/Pages/`).

## Structure

- `Pages/index.html` — homepage markup
- `CSS/style.css` — layout, colors, and typography from Figma tokens
- `JS/main.js` — carousels, scroll animations, navbar shadow
- `assets/images/` — images exported from Figma via Framelink MCP

## Design tokens

| Token | Value |
|-------|-------|
| Primary Blue | `#2F6EA5` |
| Primary Red | `#E53935` |
| Deep Navy | `#1B2A3A` |
| Light Medical Blue | `#F2F7FB` |
| Footer | `#1C5C93` |

Fonts: **Manrope** (headings), **Inter** (body).
