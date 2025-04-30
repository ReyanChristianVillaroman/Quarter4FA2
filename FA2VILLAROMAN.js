function generateTable() {
    const start = parseInt(document.getElementById("startNum").value);
    const end = parseInt(document.getElementById("endNum").value);
  
    if (start < 2 || end > 10 || start > end) {
      alert("Please enter numbers between 2 and 10");
      document.getElementById("output").innerHTML = ""; 
      return;
    }
  
    let output = "<table><tr><th>x</th>";
    for (let i = start; i <= end; i++) {
      output += "<th>" + i + "</th>";
    }
    output += "</tr>";
  
    for (let i = start; i <= end; i++) {
      output += "<tr><th>" + i + "</th>";
      for (let j = start; j <= end; j++) {
        output += "<td>" + (i * j) + "</td>";
      }
      output += "</tr>";
    }
  
    output += "</table>";
    document.getElementById("output").innerHTML = output;
  }
