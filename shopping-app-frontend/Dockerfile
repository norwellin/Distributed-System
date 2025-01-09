# Step 1: Use the official Node.js image as the base image
FROM node:16-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install

# Step 5: Copy all the project files into the container
COPY . .

# Step 6: Build the React application (production build)
RUN npm run build

# Step 7: Use an Nginx image to serve the built static files
FROM nginx:alpine

# Step 8: Remove the default static files from nginx and copy the built files into the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to access the app
EXPOSE 3000

# Step 10: Start the Nginx server (keep it running in the foreground)
CMD ["nginx", "-g", "daemon off;"]
