# Build Stage
FROM node:22.8.0-slim AS builder
RUN apt-get update -y && apt-get install -y openssl procps
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma/
RUN npm install --omit=dev --no-cache
COPY . .
RUN npm install prisma --no-cache
RUN npx --yes prisma generate
RUN npm run build

# Production Stage
FROM node:22.8.0-slim
RUN apt-get update -y && apt-get install -y openssl procps
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
COPY --chown=node:node --from=builder /usr/src/app/package.json ./
COPY --chown=node:node --from=builder /usr/src/app/package-lock.json ./
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
USER node
CMD [ "npm", "run", "start:prod" ]
