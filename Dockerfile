# Etapa 1: Construção da aplicação Angular
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json (se houver) e instalar as dependências
COPY package*.json ./
RUN npm install -legacy-peer-deps

# Copiar os arquivos da aplicação Angular para dentro do container
COPY . .

# Construir a aplicação para produção
RUN npm run build --prod

# Etapa 2: Servir a aplicação com um servidor web leve
FROM nginx:alpine

# Copiar os arquivos construídos para o diretório do Nginx
COPY --from=builder /app/dist/technology_solutions /usr/share/nginx/html

# Expor a porta 80
EXPOSE 4200

# Iniciar o Nginx para servir a aplicação
CMD ["nginx", "-g", "daemon off;"]
