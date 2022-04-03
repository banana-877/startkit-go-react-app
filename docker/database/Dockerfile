FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD=root_pw
ENV MYSQL_DATABASE=demo_db
ENV MYSQL_USER=demo_u
ENV MYSQL_PASSWORD=demo_pw
COPY init/*.sql ./docker-entrypoint-initdb.d/
COPY cnf/*.cnf /etc/mysql/conf.d/