---
publishDate: 2024-04-17T00:00:00Z
title: 'Crucius'
excerpt: Figma plugin for quick transformation of the geometry of images/objects/frames
image: 
thumbnail: 
tags:
  - Figma plugin
  - geometry transformation
  - three-dimensional images
metadata:
  canonical: https://eduhund.com/crucius
  title: Crucius
  description: Figma plugin for quick transformation of the geometry of images/objects/frames
---

## Origin 

The idea for creating a Crucius plugin came from one of Neverhund's projects.

The client has diagrams of venues where various events are held: concerts, shows, conferences, etc. The service that client is making contains seats diagrams/maps, sector and section locations in stadiums, venues and arenas. 

Here are examples of such venue maps. 

![Rogers centre seating map](~/assets/images/Crucius1.png)

![Rogers centre seating map](~/assets/images/Crucius2.png)

One of the features that competitors have that we are looking at as a potential feature to implement is the ability to rotate this diagram so that it appears three-dimensional. It wasn't truly three-dimensional, but it gave the impression of being three-dimensional. Perspective appears. You can roughly see what view will open from a certain point on the venue.

### Problem

1. Figma cannot make such three-dimensional images. Figma, as an editor, can only stretch, compress and rotate images.

**Solution №1.** Use third-party vector editors. For example [Corel draw](https://www.coreldraw.com/en/) or [AutoCAD](https://www.autodesk.com/).

**BUT!** The problem is that, **firstly**, this is third-party software. **Secondly**, we don’t have it and we don’t have employees who understand and know how to use it (licenses problemes/it takes time to study and understand how to work in that services, etc.). **Thirdly**, in order to try on the result, you need to export the finished image from these editors, drag it into Figma, try it on, go back and redo something if something doesn’t fit, and so on many many times. Very resource and time consuming.

Therefore, we decided to walk around Figma and plugin development and see what Figma can do.

After a little research we understood that:

#### There are two ways to distort a vector image:

- rasterize it (make it pixelated) and then rotate it in different directions. But the picture quality will be very poor.
- use vector editors, but it's expensive. Can't do it half-assed.

There is only one option left. Receive a raster copy of the image. Yes, you can’t do anything with it later, but because we have access to vectors, we can rotate it and make casts (pictures) of what we got. They lose quality in relation to the original vector, but give the result as close as possible.

![Crucius](~/assets/images/Crucius3.png)

On the one hand, we are limited by the figma, on the other hand, we are limited by the principle of how it is all rendered.

As a result, Crucius is a mini preview so that you can quickly and cheaply transform images (in our case, site diagrams) and get the result in the form of a raster image. **The main thing is that it is quickly and done in one instrument - Figma.**

### How Crucius works?

- search for a plugin in the figma plugin library;
- run the plugin;
- select the object (frame) in the figma. P.S. anything can be in a frame;
- set the settings/parameters for transforming the content in the frame;

![Crucius](~/assets/images/Crucius4.png)

**Each of these sliders is a CSS parameter that allows you to do whatever you want with the frame: compress, expand, rotate, reflect, stretch, etc.**

- make all necessary transformations with the object, and ask the plugin to return it back to the figma. export button;

![Crucius](~/assets/images/Crucius5.png)

- the plugin inserts this image back into the figma;

![Crucius](~/assets/images/Crucius6.png)

- if you need a different perspective, do everything from the beginning: select an object, ask the plugin to pick it up and twist and turn until you're satisfied with the result.

**The ability to safely work with some source material and preview it. The operation of the plugin does not affect the source file in any way.**

### Who are the Users?

- Designers of all types. Those who need to create a mockup during the design process or to show the product from different perspectives.

All transformations support CSS. You can transform something directly in the plugin and get the result in CSS parameters format. So that the development, after inserting the original image and the selected parameters, gets the same result as the designers after all the transformations.

All parameters for working with images are fully CSS compatible. They are written in CSS.

### Problems Crucius solves

1. There is no need to use similar third-party services (ex. Corel draw, AutoCAD), since the Crucius practically duplicates their functionality. 
2. The ability to quickly see how the image transformation will look. The speed at which the result of these transformations appears in Figma.
3. Ease of tailoring the result to the task (endless creation of image impressions)

But there is a disadvantage of Crucius! The output is an uneditable raster image, which is very difficult to edit without losing quality.

If you want to try Crucius, follow this link to Figma community. 

If you have questions or can’t understand the principles of the plugin work, write to us to **we@eduhund.com**, we’ll help :)
