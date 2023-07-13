FROM node:18-alpine

WORKDIR /boleta_ai_lp
COPY . .
RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false
RUN yarn build
WORKDIR /boleta_ai_lp
CMD ["yarn", "start"]
