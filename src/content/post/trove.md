---
publishDate: 2024-05-20T00:00:00Z
title: 'Trove'
excerpt: Service for generating, storing and validating one-time codes.
image: http://files.eduhund.com/Trove/IMG_4579.gif
thumbnail: http://files.eduhund.com/Trove/trove_thumbnail.png
tags:
  - OTK service
  - instrument
  - one-time codes
metadata:
  canonical: https://eduhund.com/trove
  title: Trove
  description: Service for generating, storing and validating one-time codes
---

[Trove](http://otk.eduhund.com/) is a service that generates a one-time key/code and then checks whether it matches something the user needs. 

Similar services can now be found when paying for purchases on the Internet, when the bank sends a one-time code, when registering on websites/applications, when changing passwords, etc.

## Origin 

The first version (prototype) was born when we needed a thing for our [Digital Mentor](https://eduhund.gumroad.com/l/bosses) (task book) that would allow us to reset passwords for students’ task books.

Initially, the password reset mechanism was built into the task book itself. The combination of student ID + generated code was saved. These codes were stored directly inside the task book, in the program memory. But due to the fact that the codes were lost when updating/restarting the task book, we decided to move Trove into a separate microservice so that if the task book was rebooted, the codes would not be lost and would be available regardless of the work of the task book.

When a user tries to reset a password, the system asks if there is a code in the database that is identical to the user's code. The system looks for the code that needs to be checked and compares which user it belongs to. The user ID is also transferred to the service when checking the code. If there is a match, then the system says that the verification has passed, change the password. If not, then no.

If the link contained only the student’s email, then anyone, knowing the email, could change the password for the task book’s personal account. This same code is non-repetitive. It is this that makes the password reset link unique.

Then we got aN idea. Since this service is separate and does not depend in any way on the work of the task book, we can try to give it to other people for use. Use it as SaaS. We give you access, you connect via API and use our service to store and validate codes. Easy!

To visually show Trove, we made a [simple website](http://otk.eduhund.com/) that generates these codes. It doesn’t remember them, doesn’t validate them, but simply generates them randomly. For clarity.

### How Trove works.

The service has only 3 functions:

- Issuance of one-time codes.
- Validation of one-time codes.
- Generating random codes without saving (the one the [site](http://otk.eduhund.com/) demonstrates).

For example, you need to reset your personal account password. This key is generated and given to the user (Trove does not send the code. The sending occurs using a third-party product to which it is connected): it is embedded in a link, sent via SMS or by mail, it does not matter. The user enters it or the key is automatically substituted (it also doesn’t matter and it’s also not done by Trove). The service is again sent a request that such and such user wants to change the password and enters such and such code. The system verifies the user (his/her ID. The ID can be anything) and answers either yes or no. If the codes match, the user resets the password. If not, then no.

We made the service more flexible and included customization in it. When prompted, you can select a specific key. For example, only letter values or only numbers. You can select the number of characters. From 4 to 32. And make this code one-time, reusable or available for some time.

### What is Trove?

API.

### How to deploy?

You can find Trove in our Github and is available for downloading. You can deploy it yorself. 

It is also possible to connect your product to this product. This will cost you 5$ a month. For more details, please, contact us via we@eduhund.com. 

## Who are the users?

Developers of other services/pet projects/mvp products. Developers who will be able to integrate Trove into theirs producrs. 

### What problems does Trove solve?

1. Saving development resources. Eliminates the need to think through and develop a new similar service from scratch.

If we develop the service and it acquires a library, then it will be possible to quickly connect Trove in the main programming languages to other third-party services. But these are plans for the future.
