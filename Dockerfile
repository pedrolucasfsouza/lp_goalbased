FROM node:18 as builder

WORKDIR /boleta_ai_frontend

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

FROM node:lts

WORKDIR /app

COPY --from=builder /boleta_ai_frontend  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
