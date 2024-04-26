---
publishDate: 2024-04-17T00:00:00Z
title: 'ChaCha'
excerpt: Collective support through messengers.
image: http://files.eduhund.com/ChaCha/ChaCha.png
thumbnail: http://files.eduhund.com/ChaCha/chacha_thumbnail.png
tags:
  - messengers
  - instrument
  - support
metadata:
  canonical: https://eduhund.github.io/chacha
---

Your clients or users use instant messengers (WhatsApp, Skype, LINE, WeChat, Viber, Snapchat, Telegram and others) to send messages, and you conduct a dialogue using a separate Slack channel. You can add as many users as you like to a Slack channel. Either one person or a whole group of specialists can respond to messages from users/clients.

## Origin 
Initially, the idea to create such an assistant bot appeared when we realized that it was difficult for us to collect feedback from people who studied on our [Taskbook](https://eduhund.gumroad.com/l/bosses?_gl=1*19igkme*_ga*MjA0NjQzODgwMS4xNzEyMjk5MjUw*_ga_6LJN6D94N6*MTcxMzM0MTk2Mi40LjEuMTcxMzM0MzU5OS4wLjAuMA) on Google Sheets. Students wrote comments/questions/problems in a special comment (notes) field. 

![ChaCha](http://files.eduhund.com/ChaCha/bles_comments_1.png) 
![ChaCha](http://files.eduhund.com/ChaCha/tables_comments.png)

All these messages were collected in a separate Google table. We could see them only if we specifically came to see what was happening there.

![ChaCha](http://files.eduhund.com/ChaCha/chacha-messages.png)

## Problems we faced: 

- We could not give quality feedback in time
- We lost messages/bugs/questions/feedback (especially technical ones, if  something doesn’t work/doesn’t open/something is broken)
- People don't like to write emails. mail is a last resort

There were attempts to create a community in telegram. This solution also had its problems, firstly, because it requires high involvement from us (communication with people), and secondly, communication takes place in public. Many people are embarrassed by this format of communication. Few people are ready to communicate in a public field, just like one on one. People have a fear of appearing stupid or a fear of asking an inappropriate question or clarification.

As a result, we integrated a familiar channel for users - Telegram with a familiar channel for us - Slack.

![ChaCha](http://files.eduhund.com/ChaCha/ChaCha_integration.png) 

In general, a bunch of services can be anything (anything that supports external management). We have Telegram and Slack. We chose Telegram because, in comparison with other services, it has more integration options than other similar social networks.

The Telegram bot was chosen because it was the only way to get a private communication channel using an external Api. The peculiarity of such communication is that a person receives feedback/help from people (us), and not from a machine that gives answers according to a script.

## Who are the users?

- Medium, medium-large (but not really large), small business in any area. Any in which some kind of communication with users is built.

The special thing about ChaCha is that specialists from different departments (3-5 employees) can communicate with users in one place. It all depends on the problem they are facing. Users no longer receive typical responses like “wait a couple of minutes, I’ll call a specialist” or “wait a little, I’ll clarify the information.” Once a message is posted to a Slack channel, everyone in that channel can immediately help and answer the user’s questions. The user is no longer stuck with one specific support employee, who may not even understand what you want from him.

## What problems does ChaCha solve?

1. ChaCha creates a familiar/natural communication environment between the user and the business. Both on one side and on the other. There are no more forms to fill out on the site, no need to leave/fill out your personal data anywhere and then wait for days for a support employee to contact you. 

![ChaCha](http://files.eduhund.com/ChaCha/site_form.png) 

ChaCha simplifies not only the process of communication itself, but also the moment of entering it.

2. Businesses no longer need to study (spend resources on studying) any third-party services to build communication with users. There is no need to deploy an endless number of tools for different tasks. The entire dialogue is conducted in the usual communication channel for business.
3. There is no chance of missing something important on the business side.
4. The necessary qualified support is provided in time and from various specialists. Sometimes even at the same time. One window principle.
5. Tool flexibility. The ability to customize the tool to suit the needs of a specific business.
6. There is no graphical user interface.

ChaCha is a self-deployment platform. To run the tool for yourself, please use the instructions.