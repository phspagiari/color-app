FROM nginx
COPY html /usr/share/nginx/html

RUN apt-get update && apt-get install -y curl
ADD run.sh /run.sh

CMD ["/bin/bash", "/run.sh"]
