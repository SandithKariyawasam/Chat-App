# Static Site Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN if [ -f package-lock.json ]; then npm ci; elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; else npm install; fi
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Fallback for create-react-app which uses build folder if dist is not specified
COPY --from=builder /app/build /usr/share/nginx/html || true
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
