# README
This is the front-end implementation for the Pre Exam Project in the Distributed Systems class at HFT Stuttgart. It is made by Chin-Jung Lin (NorwellLin) and Kartini Vijian!

# How to build it
**First: Set Up Front End**
1. Input: `docker login -u [your-user-name]`
2. Input: `docker pull norwell/norwell-frontendimage` 
3. Input: `docker run -p 3000:80 norwell/norwell-frontendimage`

**Second: Set up Database**
1. Input: `docker pull norwell/norwell-dbimage`
2. Input:`docker run --name mydbimage -p 5432:5432 norwell/norwell-dbimage`

**Third: Set up backend**

There is still some problem with the backend image, so please use the local file first
1. Input: `cd shopping-app-backend`
2. Input: `mvn spring-boot:run`
**Please don't forget to set all visiability to Public**