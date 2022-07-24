FROM node:14 as builder

WORKDIR /usr/src/app
COPY . ./

RUN yarn install
RUN yarn run build

########################################
FROM node:14-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

CMD [ "yarn", "run", "start:prod" ]
EXPOSE 5000