FROM node:latest
WORKDIR /site

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "build"]
