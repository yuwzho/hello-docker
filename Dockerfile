FROM node:6.9.2
EXPOSE 8080
COPY server.js .
RUN sleep 300
CMD node server.js
