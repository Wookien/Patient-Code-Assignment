
const http = require("http");
const express = require('express');
const app = express();
//const sqlite3 = require(sqlite3).verbose();

app.use(express.json());


const apiwith = "localhost:8080/getPatient?patientID=<CPR>&doctorID=<DOCTOR_WITH_ACCESS>"
const apiwithout = "localhost:8080/getPatient?patientID=<CPR>&doctorID=<DOCTOR_WITHOUT_ACCESS></DOCTOR_WITHOUT_ACCESS>"


const admission = [
    {medicalJournal:12345, department: "Herning", Doctors: 3, id: 1},
    {medicalJournal: 2222, department: "Herning", Doctors: 0, id: 2},
    
];
const admissionDoctorRelation = [
    {Doctorid:12345, departmentid: 1},
    {Doctorid:2222, departmentid: 2},

];

const Patient = [
    {id:12345, name: "Sven"},
    {id:2222, name:"MrMan"},

];

const doctor = [
    {id:1, name: "Doctorwho", department: "Herning"},
    {id:2, name: "doctorlet", department: "Herning"},
    {id:3, name: "doctordoctor", department: "Herning"},
];


app.get("/", (req, res) =>{
    res.send("hello world!");
 });

app.get("/getPatient?patientID", (req, res) =>{
    var  Patients = Patient.find(p => p.id === parseInt( req.params.id));
    if(!Patients) res.status(404).send("This Patient with the given ID was not found");// 404 
    res.send(Patients);
});





app.listen(8080, () => console.log("listenning on port 8080..."));