# Static Site Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN if [ -f package-lock.json ]; then npm ci; elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; else npm install; fi
COPY . .
RUN npm run build
RUN if [ -d "dist" ]; then mv dist _bravocloud_out; elif [ -d "dist" ]; then mv dist _bravocloud_out; elif [ -d "build" ]; then mv build _bravocloud_out; else mkdir _bravocloud_out; fi

FROM nginx:alpine
COPY --from=builder /app/_bravocloud_out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
