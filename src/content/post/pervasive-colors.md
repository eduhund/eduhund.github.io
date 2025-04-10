
---
publishDate: 2025-04-09T00:00:00Z
title: Pervasive Colors by Name
excerpt: My Cross-App Palette Trick
image: ~/assets/images/pervasive-colors/main.webp
thumbnail: ~/assets/images/pervasive-colors/thumbnail.png
tags:
  - article
  - colors
metadata:
  canonical: https://eduhund.com/pervasive-colors
  title: Pervasive Colors by Name
  description: My Cross-App Palette Trick
---

Color consistency is my idea fix. I do need the same palette in Google Docs, iTerm2, Figma, Mermaid, 2Do, VSCode, Pixelmator, etc. So, I need a kind of personal palette. And it has to be available instantly in any — any! — moment I need any color.

![Pervasive Colors by Name](~/assets/images/pervasive-colors/1.png)
_Any color by name_

The solution is set of names for each color I need. Yes, just names. And a way to substitute any of these names to its RGB code in any text where I use the name.

![Pervasive Colors by Name](~/assets/images/pervasive-colors/2.png)
_Palette in iTerm2_

What name structure do I use? Good old [ANSI 16 colors](https://en.wikipedia.org/wiki/ANSI_escape_code) suit perfectly. The main reason to use it is I use terminal very often, and almost all terminals now support these names (not codes) seamlessly.

![Pervasive Colors by Name](~/assets/images/pervasive-colors/3.png)
_Original ANSI colors_

**No, no, no!** The colors themselves are awful and have to be changed. We need only names.

Eight base names + eight extra names + four names for black and white.

It is more than enough to implement a 16-color palette everywhere.

How does it work? Type color name, get RGB code immediately. Anywhere, anytime.

To expand names into codes, I use [Alfred](https://www.alfredapp.com):

![Pervasive Colors by Name](~/assets/images/pervasive-colors/4.png)
_Alfred_

As far as I know, [text replacement feature](https://support.apple.com/guide/mac-help/replace-text-punctuation-documents-mac-mh35735/mac) is available in macOS without any extra installation.

Each color name consists of three parts: palette code (one letter) + mark for light color(one letter) + real color name (at least one letter).

For example: gb_yell converts to FABD2F, g_red converts to D65D0E.

If you need some palettes, just use different codes: s_yellow, rb_red, etc.

Does it matter? Definitely yes, if brand awareness is one of your goals.

Are there better ways? Yes, if we speak about one tool (or couple of tools which use custom palettes accordingly to your system features). But no, if you use too many software and too many computers to organize them all.
