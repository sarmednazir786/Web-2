## Title: The Auth Breaker
## Details:
* difficulty: Medium
* category: Web 
* author: Sarmed
* flags: flag{Secret_Found_Again}

## Description:
The application using JWT to authenticate and authorize the users. The attacker has to exploit JWT to retrieve the flag.

## Hint:
Sometimes you just have to bruteforce it.

## Intended Learning and outcome:
The main learning point for this challenge is to understanding what JWT is, how it's used, and what are potential methods for its exploitation.

## Solution: 
When we start the application, we see multiple webpages. When we check the page source, we see a directory path **/hidden/page/flag**. When we go to that link we keep on getting redirected, that's strange. We signup and login, now we notice two things, the app uses JWT and on the page source of **/products** page, admin email is disclosed. We then attempt to forge an admin token, this can be done in 3 steps listed below: 

........
