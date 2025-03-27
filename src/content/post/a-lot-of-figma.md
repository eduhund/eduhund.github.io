---
publishDate: 2025-03-27T00:00:00Z
title: A Bit of Code, a Lot of Figma
excerpt: For People Who Design, Not Develop
image: ~/assets/images/a-lot-of-figma/12.png
thumbnail: ~/assets/images/a-lot-of-figma/thumbnail.png
tags:
  - article
  - task management
  - vim
metadata:
  canonical: https://eduhund.com/a-lot-of-figma
  title: A Bit of Code, a Lot of Figma
  description: For People Who Design, Not Develop
---

As a design tool, (Figma](https://www.figma.com/) is one of a kind. As a software, Figma is actually quite similar to a web browser. So, you can use the same development tools that any frontend developer uses: [DevTools](https://developer.chrome.com/docs/devtools). It’s essentially a backdoor to any browser, allowing you to modify anything on the page you see at the moment, and to know anything about the page.

Since Figma is a kind of browser, any Figma file is a kind of web page. It means, you can use DevTools to manage your Figma project with code. Draw with code, type text with code, change colors with code, create components, align frames, set values, you name it.

Certainly, if you need any complicated design automation, DevTools is not enough. You should develop a plugin and even, perhaps, publish it in [Figma Community](https://www.figma.com/community). But is your automation really so complicated?

Sometimes just a couple of lines of code is all you need to automate your design. Let’s practice writing these tiny lines.

## Preparation for Coding in Figma
To begin coding in Figma application, two steps are necessary.

1. Run empty plugin.
2. Open Dev Tools.

> Yes, sounds like geek mesh. Two minutes, I promise.

### Run an Empty Plugin
It is like a magical step: nothing happens, yet you get a lot of fantastical skills and possibilities.

First of all, create empty plugin — yes, right in your current project, not in a separate file.

Click `Plugins → Development → New plugin…`, and then accept the suggested options.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/1.webp)
![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/2.png)

Then, run it. Again, right in your current project.

Right-click → `Plugins → Development → console-coding`

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/3.png)

### Open Dev Tools
Just click `Plugins → Development → Show/Hide console` menu item, and your Figma screen will transform drastically. Do it twice to hide all this stuff.

### Check If You Are Ready
Now you’re ready to write code in Figma console. Let’s check it.

Type `figma.currentPage` in console. And press Enter. Don’t worry about all those jumping lines, just do these simple steps.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/4.png)
![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/5.png)

Try to open the dropdown list.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/6.png)

Congratulations! Now you can access your Figma project (and all its details) through console code. Time to do it right—and to do it often.

## Simple Exercises to Warm Up Your Fingers

> From now on: press Enter after a `;` (or instead of it — that works too).

Here are a few quick practices to help you get used to coding in Figma console.

### Calculate Arithmetic Expressions
Wrap any simple arithmetics in parenthesis:

```
console.log(3*2.5 + 19/4 - 32);        
```

You’ll get the answer immediately.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/7.png)

### Simplify the Usage of figma.currentPage Object
Instead of writing figma.currentPage every single time, just assign it to p :

```
p = figma.currentPage;         
```

You’ll see the contents of p immediately after running this command.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/8.png)

### Count the Document Pages or Top-Level Frames
Get the number of pages in the document:

```
figma.root.children.length;        
```

Get the number of top-level frames on the page:

```
figma.currentPage.children.length;
// or
p.children.length;        
```

You’ll see the result immediately.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/9.png)

### Learn a Bit About Yourself
You are the current user—so, ask about the current user:

```
figma.currentUser;        
Feel free to open the dropdown list:
```

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/10.png)

### Who Else Is Here?
Ask something almost identical:

```
figma.activeUsers;
```

Usually, you’re alone—but who knows?

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/11.png)

## Create a New Page or Clone an Existing One
Each time you run this command, a new Page N appears:

```
figma.createPage(); 
```

If that doesn’t work, try cloning the current page—it works perfectly:

```
tmpl = figma.currentPage;
tmpl.clone();
tmpl.clone();
tmpl.clone();
...
```

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/12.png)

## Now for Some Actually Useful Code Snippets 😵💫
It’s time to use the Figma console to get more interesting results.

We believe in jumping right in—no hesitation—even if these particular tasks aren’t exactly what you are after.

Each one requires a bit of attention. Hope you are feeling focused today.

### Quickly Change the Canvas Background Color
To change the canvas background color just once, you have to run a fairly complex line:

```
figma.currentPage.backgrounds = [figma.util.solidPaint("#FF0000")];  
```
      
>Too many strange symbols? Just **ignore** them—it works, right?

Obviously, instead of #FF0000, you can use any RGB-color (do not forget the parenthesis!).


Not so obviously, you can simplify this line and reuse it with any color. Just run this line **once**:

```
function bg(value) {figma.currentPage.backgrounds = [figma.util.solidPaint(value)];}        
```

…and from then on, use your new **function** as many times as you like:

```
bg("#D79921");
bg("#979736"); 
```

>Yes, you’ve just created a real programming **function** — congratulations!

For each frequently used background color, you can create an even quicker command.

Write once:

```
function bgd() { bg("#000000"); }        
```

…and use it as many times as you like:

```
bgd();        
```

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/13.png)

Write once:…

```
function bgl() {bg("#ffffff"); }        
```

…and use it as many times as you like:

```
bgl();
```

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/14.png)

Instead of bgd or bgl, feel free to invent your own command name. And yes—parenthesis are required.

### Switch Between a Couple of Background Colors
If you’re only using two background colors, do it like this:

```
class b { static c = 0; static l = "#D79921"; static d = "#979736"; static g() { if (this.c == 0) { bg(this.l); } else { bg(this.d); }; this.c = !this.c; } };   
```

The colors are up to you — change them freely.

Now you can switch the background color pretty easily:

```
b.g();        
```

Run it as many times as you like.

> By the way, you’ve just encountered **object-oriented programming**. See that class keyword? New badge, new achievement, new level. That’s great — no kidding.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/15.png)

### Create 100+ Frames in a Line at Once
First, create a function that you can reuse as many times as you like.

> This is a typical reason to write functions: to make it easy to repeat the same action more than twice.

```
function fc(number, space_x, space_y) { const frame = figma.currentPage.selection.find(node => node.type === "FRAME"); f = new Array(); for (i = 0; i < number; i++) { f[i] = frame.clone(); f[i].x = frame.x + (i+1)  space_x; f[i].y = frame.y + (i+1)  space_y; figma.currentPage.appendChild(f[i]); } }        
```

Then, create the frame you want to clone. It can be as complex as you need. If you’ve already created the frame—great! You do not need to do anything.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/16.png)

Now select that frame.

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/17.png)

And run:

```
fc(100, 7, 3);
```

![A Bit of Code, a Lot of Figma](~/assets/images/a-lot-of-figma/18.png)

> Play around with fc() parameters: number — how many new frames to create; space_x and space_y — distance between their top-left corners.

***
Only **a few** Figma console coding practices are explained in this article — there are many more. If you show any interest, I’ll continue publishing more of these snippets.

***

Ready to start coding in Figma on your own?

Here are two key resources you’ll definitely need:

[Plugin Guide](https://www.figma.com/plugin-docs/) • [API Reference](https://www.figma.com/plugin-docs/api/api-reference/)

Yes, these two links are different — really.
