# Frontend Dockerfile (Vite/React dev)
FROM node:20-alpine
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy the rest of the app
COPY . .

ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
