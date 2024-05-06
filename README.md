## Title: The Shrewd Thief
## Details:
* difficulty: Easy
* category: Web 
* author: Sarmed
* flags: flag{Secret_Found}

## Description:
An application that has a simple signup and login functionality and shows the services offered when logged in. The vulnerability that is present here is of secret directory exposure.

## Hint:
Pay attention to the source of the page.

## Intended Learning and outcome:
Oftentimes developers forget to disable a webpage that contains secret data before going live. With this challenge, I was able to learn the impact this vulnerability can have and how to remediate it.

## Solution: 
After starting this challenge, we can see that there are multiple webpages. When reading the source of each, we find **/hidden/page/flag** path in the login source. When we go to that path, we see the flag.

........
