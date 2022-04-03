後々.md形式で書く

docker build -f docker/client/Dockerfile -t todo-client .

docker run -d --rm --name my-image -p 3000:3000 todo-client
