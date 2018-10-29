FROM alpine:latest

ENV SERVICE=
ENV COLOR=
ENV VERSION=

RUN apk --update add npm
ADD package.json /app/package.json 
WORKDIR /app
RUN npm install -g 
ADD index.js /app/index.js

ENTRYPOINT ["node"]
CMD ["index.js"]
