ARG name
FROM node:6.9.2
EXPOSE 8080
RUN echo $name
COPY server.js .
CMD node server.js
