# Backend

## Instalacion de dependencias

  1. Dependencia de desarrollo
      `npm install -D` o `npm i -D`
      
  2. Dependencia de producción
      `npm install` o `npm i`
    
## Configuraciones necesarias

  + Preparar las valiables de entorno
      Hacer una copia de `.env.example` renombrandola como `.env`,
      a continuación completar es necesario llenar las varibles de entorno como:
      
      * PORT: Define el puerto donde se iniciara el servidor.
      * MONGODB_CNN: la cadena de conexion de mongo.
      
## Iniciar

Una vez instalado y configuraciones necesarias, lo siguiente es inicar el proyecto.

  1. __Script:__ Si es primeras vez, es necesario cargar la base de dato por medio del si
     siguiente comando, `npm run script` una vez ejecuado, tomara algo de tiempo para 
     registra todas las paginas.
     
  2. __APIREST:__ para inciar el servido es posible hacerlo de dos forma `npm run dev` o `npm run start`
     el primero es para desarrollo y el segundo para face producción.