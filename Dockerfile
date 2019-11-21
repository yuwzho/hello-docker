FROM debian
RUN apt-get update && apt-get install fio -y
WORKDIR /
