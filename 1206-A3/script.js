function populatedata()    {

  let studentAll = [];

  //Assign the new data (studentAll) into localStorage
  studentAll = JSON.stringify(studentAll)
  localStorage.setItem('data', studentAll)

  //Finally re-print the table
  printdataTable()

}
function addStudent()  {
  console.log("Adding student.")
  let students = [];
  
  //Check to see if there is anything in local storage
  if (localStorage.getItem('data'))    {
      students = JSON.parse(localStorage.getItem('data')) ;
  }

  //Declare an object
  studentsItem = {};

  studentsItem.name = document.getElementById("name").value;
  studentsItem.email = document.getElementById("email").value;
  studentsItem.studentID = document.getElementById("studentId").value;

  //Add the students Item to the students array
  students.push(studentsItem);

  localStorage.setItem('data', JSON.stringify(students));

  printdataTable()

}

function printdataTable()   {

  //If this is called and the table exists, remove it
  if (document.getElementById("dataTable"))  {
      document.body.removeChild(document.getElementById("dataTable"))
      document.body.removeChild(document.getElementById("dataTableHeader"))
  }


  //Check if there is anything to print out of localStorage

  itemTableHeader = document.createElement("h3")
  itemTableHeader.append("Student Information")
  itemTableHeader.id = "dataTableHeader"

  if (localStorage.getItem('data'))  {
      
      //Get the data out of localStrorage
      studentAll = JSON.parse(localStorage.getItem('data'));

      //Make a table
      let dataTable = document.createElement("table");
      dataTable.id = "dataTable"
      itemRow = dataTable.insertRow();
      nameCell = itemRow.insertCell();
      emailCell = itemRow.insertCell();
      studentIdCell = itemRow.insertCell();
          //Attach the cells to the row
      nameCell.append("Name")
      emailCell.append("Email")
      studentIdCell.append("StudentID")
      //Go through all the data
      studentAll.forEach(item => {

          //Create a row
          itemRow = dataTable.insertRow();
          //Create cells
          nameCell = itemRow.insertCell();
          emailCell = itemRow.insertCell();
          studentIdCell = itemRow.insertCell();
          //Attach the cells to the row
          nameCell.append(item.name)
          emailCell.append(item.email)
          studentIdCell.append(item.studentID)
          
      });

      //Append header to body
      document.body.appendChild(itemTableHeader)
      //Append table to body
  document.body.appendChild(dataTable)
  }
}
