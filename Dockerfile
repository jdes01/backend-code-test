FROM node:lts-alpine as code-test

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

# ===============================

FROM code-test as code-test-backend

COPY ./src/api ./api
COPY ./src/contexts ./contexts

EXPOSE 3000

CMD ["npm", "run", "watch-node"]
