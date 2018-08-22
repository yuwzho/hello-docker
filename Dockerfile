ARG name = any
FROM node:6.9.2
EXPOSE 8080
RUN echo "hell $name"
COPY server.js .
CMD node server.js
