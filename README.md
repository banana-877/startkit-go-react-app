# React_Go_docker-compose template
 
A learning template for myself, containerizing React and Go using docker-compose.

The policy is to reduce barriers to entry by making it easy for anyone to build an environment.
 
# Requirement
 
List the libraries and other information needed to run this application.
 
* Node.js v14.15.1 and above
* npm 6.14.11 and above
* docker
* docker-compose
 
# Usage
 
Basically, I try to complete it within the scope of the docker-compose command.

 application startup for the first time
```bash
git clone https://github.com/tatsutoshi-maeda/todo
cd ./todo/client
npm install
cd ../
docker-compose build
docker-compose up -d
```
 
Shut down
 ```bash
docker-compose down
```
