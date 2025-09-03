# Frontend Dockerfile (Vite/React dev)
FROM node:20-alpine
WORKDIR /app

# Expect a Vite project in this directory
COPY package*.json ./
RUN npm ci
COPY . .

ENV VITE_API_URL=${VITE_API_URL}
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
