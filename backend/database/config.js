/**
 * Configuración de la conexion de mongodb
 * con mongoose
 */
 const mongoose = require('mongoose')

 //Función establece conexión con mongodb
 const dbConnection = async() =>{
     try {
         await mongoose.connect(process.env.MONGODB_CNN)
         console.log('Connected')
     } catch (error) {
         //Si la conexion falla
         throw new Error('Connection error')
     }
 }
 
 //Funcion cerrar connexion con mongodb
 const dbDisconnection = async() =>{
     try {
         await mongoose.disconnect()
         console.log("Disconneted")
     }catch(error){
         throw new Error('No existe conecion')
     }
 }
 
 module.exports = {
     dbConnection,
     dbDisconnection
 }