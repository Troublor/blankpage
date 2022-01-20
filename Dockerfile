FROM node:16-alpine

COPY . /blankpage

WORKDIR /blankpage

RUN yarn install
RUN yarn build

ENTRYPOINT [ "yarn", "start:prod" ]
EXPOSE 8080