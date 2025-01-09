FROM postgres:latest

# set environment variable
ENV POSTGRES_USER=norwell \
    POSTGRES_PASSWORD=password \
    POSTGRES_DB=mydb


COPY init.sql /docker-entrypoint-initdb.d/
