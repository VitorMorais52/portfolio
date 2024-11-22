# Use uma imagem base com Node.js
FROM node:22.11.0-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e yarn.lock para dentro do contêiner
COPY ./package.json /package.json

# Instale as dependências
RUN yarn install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta usada pela aplicação
EXPOSE 3000

# Comando para rodar o app
CMD ["yarn", "dev"]
