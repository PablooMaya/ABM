# Es un proyecto de ABM de tareas

Es un proyecto realizado con dos tecnologias, node para el back y para el front se uso react.
Se han complementado el front usando librerias como bootstrap y en el back para el manejo de base de datos
he utilizado MySQL. 

## Puesta en funcionamiento

Una vez descargado el proyecto, abrimos la termina y la divideremos en 2.
con una terminal vamos a levantar el servidor de express de node y con la otra terminal de react.

Para hacer funcionar el proyecto se deben instalar las dependendencias tanto del backend como el frontend

En la primer terminar (node) introducir las siguentes instrucciones:

1) cd .\node\
2) npm install nodemon

En la segunda terminar (react) introducir las siguentes instrucciones:

1) cd .\reactfront\
2) npm install react-scripts

Además, se debe crear una DB llamada datablog y dentro una tabla llamada blogs.
Campos de la tabla: 
id -> int AI PK 
title -> varchar(45) 
content -> varchar(45) 
createAt -> datetime 
updateAt->  datetime

La configuración para la base de datos se encuentra en la carpeta node/database/db
Para correr el backend en su respectiva terminal -> nodemon app.js
Para correr el frontend en su respectiva terminal ->npm start  