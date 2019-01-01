FROM node:10

ADD . /home/app
WORKDIR /home/app

RUN yarn
ENV NODE_ENV="production"
ENV PORT="8080"

CMD yarn start
