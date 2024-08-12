require("dotenv").config();

const http = require("http");
const app = require("./index");

const server = http.createServer(app);
server.listen(process.env.PORT);

/*Hay que crear la apk cada vez que se haga un cambio en el frontend se siguen estos pasos: Subir a producion(comando: ng build --configuration production) 
esto genera una archivo www, copiar el archivo www(comando: npx cap sync) esto copia automaticamente el archivo www en la carpeta android, generar la apk con las actualizaciones
(comando: npx cap open android) esto genera una apk con cualquier cambio realizado en el archivo angular*/
