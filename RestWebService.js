const express = require('express');
const app = express();
const sqlite3 = require(sqlite3).verbose();
const http = require("http");
app.use(express.json());


const apiwith = "localhost:8080/getPatient?patientID=<CPR>&doctorID=<DOCTOR_WITH_ACCESS>"
const apiwithout = "localhost:8080/getPatient?patientID=<CPR>&doctorID=<DOCTOR_WITHOUT_ACCESS></DOCTOR_WITHOUT_ACCESS>"


const admission = [
    {medicalJournal:12345, department: Herning, Doctors: 3},
    {medicalJournal: 2222, department: Herning, Doctors: 0},
    
];

const Patient = [
    {id:12345, name: Sven},
    {id:2222, name: MrMan},

];

const doctor = [
    {id:1, name: Doctorwho, department: Herning},
    {id:2, name: doctorlet, department: Herning},
    {id:3, name: doctordoctor, department: Herning},
];

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.write("hello");
        res.end();
    }
    if(req.url === "/ api/courses"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(8080);
console.log("Listenning on port 8080... ");


app.get("/", (req, res) =>{
    res.send("hello world!");
   });


app.get("/api/courses", (req, res) =>{
    res.send(courses);
});