FROM node:16 as builder

WORKDIR /usr/src/app
COPY . ./

RUN yarn install
RUN yarn run build

########################################
FROM node:16-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

CMD [ "yarn", "run", "start:prod" ]
EXPOSE 5000