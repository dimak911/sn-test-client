FROM node:18-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
