---
publishDate: 2025-03-21T00:00:00Z
title: 'Task Management at the Speed of Thought'
excerpt: How I Replaced Trello & Jira with Plain Text
image: ~/assets/images/task-management/07 response.png
thumbnail: ~/assets/images/task-management/thumbnail.png
tags:
  - article
  - task management
  - vim
metadata:
  canonical: https://eduhund.com/task-management
  title: Task Management at the Speed of Thought
  description: How I Replaced Trello & Jira with Plain Text
---

Text lines are the most adaptive format for task recording. The problem is, you cannot use simple text lines as a task management system. Or can you?

Usually, we just have to use one of these well-structured — and hence not so adaptive — tools like Jira, Trello, Asana, you name it. Or Notion, 2do, Todoist, or whatever is fancy today to manage your tasks and projects.

All these systems are splendid and convenient, no doubt about that. However. Ever. Ever.

It is just too slow and too complicated to write down your tasks and organize them simultaneously. Moreover, you just cannot organize each and every task completely. Too much uncertainty, too many “let’s-decide-it-later” points.

So, it would be great to have a system where each task is just a text line — and we can edit it like a usual text line — but we also get to see its internal structure.

Like these ones:

```
[ ] The task is not done yet
[x] The task is completed
```

In 2025, can we seriously discuss such a way of planning? Where are the deadlines, responsibilities, milestones, and other fun stuff like Kanban?!

After a brief reflection, I found a way to implement all these features. Yes, and sorting, too. And filtering. And, and, and. Without any software development.

The answer is contradictory and a bit old-fashioned: vim.

Oh, come on, I know, I know. You might be someone who never understood all these :q! magical jinxes.

![Task Management at the Speed of Thought](~/assets/images/task-management/01 empty.png)

However, vim is not just a consumer text editor. It is not a text editor at all. It is a platform for developing your own text editors.

Here are some screenshots to explain.

## How to write down a task?

![Task Management at the Speed of Thought](~/assets/images/task-management/03 next task.png)

Just press Enter. Yes, that’s easy. No extra typing: you press Enter, and the system prepares a task template.

## How to mark a task as important?

![Task Management at the Speed of Thought](~/assets/images/task-management/04 signs.png)

Not only important but also any other priority. Just press !, #, ~, or any other appropriate sign. It’s your choice which one to use. My choice: ! # % + - / : > ? @ | ~ ± •

## How to organize tasks?

![Task Management at the Speed of Thought](~/assets/images/task-management/05 parts.png)

Here are some subheadings I use: ACTION WARM RESEARCH DONE NEVER LATER FIX DOCS TEST PUBLISH BACKLOG GOOD_ENOUGH INBOX

Each subheading should be mentioned next to its sign — this helps to sort lines properly.

## How to remember your structure?

![Task Management at the Speed of Thought](~/assets/images/task-management/02 task.png)

Look at the last line. It appears automatically. And you can change it.

## How to decompose any project into steps?

![Task Management at the Speed of Thought](~/assets/images/task-management/06 modules.png)

Or an epic into stories. Or a system into modules. Write down any name—nothing more. I mean, any name, really. You do not have to prepare or configure it separately.

## How to assign tasks to a person?

![Task Management at the Speed of Thought](~/assets/images/task-management/07 response.png)

Use hashtags at the end of the line.

## How to hide completed tasks?

![Task Management at the Speed of Thought](~/assets/images/task-management/08 done.png)

All completed (press +) tasks are hidden automatically.

## How to sort tasks?

Do nothing. **Or close and reopen the file**. The system sorts all tasks automatically when you open the file. The sorting order follows the alphabetical order of the signs.

## How to use tasks as a project backlog?

![Task Management at the Speed of Thought](~/assets/images/task-management/09 backlog.png)

Save the file as .backlog in your project’s Git directory. Nothing more.

___

So many possibilities with just a few configuration strings. No coding, no testing, no payment.

I have been using this system for about half a year. What a simple solution to manage a huge number of independent projects. To stop and start when you want, sync between computers, groom the backlog, and handle all that not-so-boring management stuff.

Join and enjoy.

Or customize your favorite text editor to do the same. To be honest, I’m not sure any editor but vim can do this. Drop your thoughts in the comments—I would love to learn from your approach!



