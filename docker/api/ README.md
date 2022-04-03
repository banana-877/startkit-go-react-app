後々.md形式で書く

docker build -f docker/api/Dockerfile -t todo-api .

docker run -d --rm --name my-image -p 8080:8080 todo-api
