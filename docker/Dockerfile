FROM node:12.2.0-alpine as build

WORKDIR /app
RUN apk update
RUN apk add git
RUN apk add npm
RUN apk add nginx
RUN git clone https://github.com/pshoultz/tji1498a.git
WORKDIR /app/tji1498a/client
RUN npm install
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/tji1498a/client/dist/client/ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html/client
CMD ["mv", "../"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
