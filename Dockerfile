FROM node:18

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 90

CMD ["node", "."]