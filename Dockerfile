FROM node:6.9.2
EXPOSE 8080
RUN sleep 300
COPY server.js .
CMD node server.js
