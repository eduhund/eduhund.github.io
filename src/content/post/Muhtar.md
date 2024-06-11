---
publishDate: 2024-06-10T00:00:00Z
title: 'Muhtar'
excerpt: Bot for automating and simplifying business processes
image: http://files.eduhund.com/Muhtar/Muhtar.png
thumbnail: http://files.eduhund.com/Muhtar/Muhtar_thumbnail.png
tags:
  - Slack bot
  - business processes
  - management
metadata:
  canonical: https://eduhund.com/muhtar
  title: Muhtar
  description: Bot for automating and simplifying business processes via Slack
---

Muhtar is an universal bot for automating and simplifying business processes via Slack

## Origin 

The [Neverhund team](https://neverhund.com/) spent a very long time looking for a tool on how to track/record the working hours of employees on projects and how to remind people if they did not record the hours worked.

Before Muhtar, all information about worked hours was collected by managers and entered into the project table. 

![Working hours collected in a Google tsble](http://files.eduhund.com/Muhtar/1.png)

The weekly stand-up didn’t start without a spent hours. If an employee forgot to send hours, the manager asked for them 100 more times. Then this practice was canceled, but clients still neeeded reports on the work done and the time spent on each piece of work.

Why it is important for us to track working hours:

1. Some Neverhund employees have an hourly rate. We have to understand what salary to pay;
2. Time tracking allows us to estimate labor costs for a specific project. This data is then used when drawing up commercial offers for future projects, based on how much time was spent on past similar projects;
3. Сan sometimes be used in punitive measures. If an employee says that he works a lot, but in fact does nothing and does not record his hours, some questions arise.

### How Muhtar works?

Muhtar is written in Java Script. Integration with services is standard via API.

Since our company uses Slack as a working messenger, Mukhtar is added as a bot to the channels. It tracks all the channels in which it is in and considers that each channel is a project.

Then the employee can do the following:

In any channel, he or she can write the command /time, a modal window will open in which you need to fill in the following fields

- Date
- Which project (selected from the list)
- How many hours did you work?
- What did you do

This information is sent to a Google sheet and database. _Soon_ we will  visualize this database so that we can look at statistics on the hours spent.

Muhtar is generally a universal bot. It can be supplemented with any tools that will solve other problems. For example, we also used it to issue passwords for various services. Command /mypassword. It was possible to write to Muhtar a list of tasks for the day and this list would be sent to the general director by email. Command /mailtoNatasha. Muhtar could also respond to some trigger words in the channels. Just a little joke that sent messages to certain triggers.

### Hwo are the users?

1. All the people who work on the project or employees who, for some reason, need to record their time worked. Not only designers/researchers/copywriters, etc., but also managers. 
2. Any size company (from small studios to large ones) that need similar employee time tracking.

### What problems Muhtar solves:

1. **The problem of using a complex tool to solve a simple problem.** All communication, including reporting, is carried out in one place using the same tool. People find it more comfortable/easier/more convenient to go to Slack than to go to Jira for example. Jira is complex, scary, bulky. Antway, you still open Slack's offtopic to look at memes. You're already in Slack, then record worked time in the neighboring channel. Easy! 
2. **For small companies, Muhtar can be a replacement for another external tool.** Also its search, integration, etc.
3. **Unloading the work of managers.** You no longer need to constantly ask your colleagues to fix hours spent on a project.
4. **Helps solve management problems and assists with reporting.** Helps to track project statuses, labor costs, etc.

### How can I install Muhtar and try it out for myself?

No way yet. Because Muhtar was created and written specifically for the Neverhund’s internal needs. Now there is nothing provided for Muhtar to become public. The repository is not accessible and we also do not allow third parties to register and use it.

But everything will be soon. Very soon.
