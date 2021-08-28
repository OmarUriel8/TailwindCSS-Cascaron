```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli @tailwindcss/jit
```

### Si se usa windows, para el comando ```npm run build``` instalar
```npm i win-node-env```

comandos a usar 
```
"build:css": "postcss ./src/tailwind.css -o ./public/css/main.css",
"build":"NODE_ENV=production postcss ./src/tailwind.css -o ./public/css/main.css",
"dev":"nodemon -x npm run build:css -w src/tailwind.css -w tailwind.config.js -w public/index.html"
```
# El script de dev no funciona 