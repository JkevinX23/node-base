FROM node:18-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3333
CMD ["yarn", "dev"]
