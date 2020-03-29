FROM nginx:1.17.9-alpine

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist/covid /usr/share/nginx/html