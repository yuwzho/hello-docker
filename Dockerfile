FROM debian
CMD apt-get update && apt-get install fio -y
ENTRYPOINT /bin/bash
