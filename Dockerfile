FROM node:carbon
 
# Create app directory
WORKDIR  ..
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY node_test.js ./
 
RUN npm install 
# If you are building your code for production

EXPOSE 5000
EXPOSE 9090


RUN npm install 

# Remove the JRE proxy 
RUN rm -rf ./node_modules/appdynamics-jre/*
RUN rm -rf ./node_modules/appdynamics-proxy/*

CMD [ "npm", "start" ]