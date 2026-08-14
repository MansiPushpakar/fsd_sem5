const employee={
    employeeId: 101,
    name: "John Doe",
    designation: "Software Engineer",
    techstack:[{
        plang:"java",
        server:'Apache Tomcat',
        database:'MySQL',
        databaseVersion:'8.0.30'
    },
{
   plang:"python",
        server:'Django',
        database:'MySQL',
        databaseVersion:'7.0.30'
     
},
{
    plang:"react",
        server:'node server',
        database:'MySQL',
        databaseVersion:'7.0.30'

}
]
}
console.log(employee.techstack[0].plang)
console.log(employee.techstack[1].database)
console.log(employee.techstack[2].server)
console.log(employee)