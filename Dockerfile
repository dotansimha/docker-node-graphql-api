FROM node:10

ADD . /home/app
WORKDIR /home/app

ENV NODE_ENV="development"
RUN yarn
ENV PORT="8080"

CMD yarn start
