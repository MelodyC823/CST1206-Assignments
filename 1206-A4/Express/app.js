const express = require('express');
const app = express();
const PORT = 4001;

let employeeList = [
  {
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    },
    {
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
  }
]

app.use(express.json());

//get all the employees
app.get("/employees",(req,res) => {
    return res.status(200).json({
    message: "Successfully fetched employees.",
    data: employeeList
    })
})

//add an employee
app.post("/employees", (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.employeeID || !data.department) {
      return res.status(500).json({
          message: "One of the parameters is missing"
      })
  }

  employeeList.push(data);

  return res.status(201).json({
      message: "Succesfully created the employee",
      data: employeeList
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})