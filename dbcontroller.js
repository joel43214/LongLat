const express = require('express')
const router = express.Router()
const mysql =require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"longlat"
})

module.exports.add = function(latitude,longitude,altitude,callback){
    const query = 'insert into `fills`(latitude,longitude,altitude)value("'+latitude+'","'+longitude+'","'+altitude+'")'
    connection.query(query,callback)
}