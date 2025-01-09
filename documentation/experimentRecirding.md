**How to make docker image**
1. Make a ###`Dockerfile`
2. Input ##mvn package at the cmd. (It will make the ##preExam-0.0.1-SNAPSHOT.jar, whcih we have to mention in ##Dockerfile Step3)
3. Input ##docker buildx build -t norwell-backendimage . in cmd
****Optional (Upload to docker hub)****
1. docker login
2. docker tag [name of your docker image] [username: docker hub]/[name of your docker image] (docker tag norwell-backendimage norwell/norwell-backendimage)
3. docker push [username: docker hub]/[name of your docker image] (docker push norwell/norwell-backendimage)
