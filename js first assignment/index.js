let rollNo = prompt("ENTER YOUR ROLLNO");
let name = prompt("ENTER YOUR NAME");
let tname = prompt("ENTER YOUR TEACHER'S NAME");
window.alert("WELCOME TO TECH FORCE PAKISTAN");


let htmlmarks =prompt ("ENTER YOUR HTML MARKS");
let cssmarks = prompt ("ENTER YOUR CSS MARKS");
let javascriptmarks = prompt ("ENTER YOUR JAVASCRIPT MARKS");
let phythonmarks = prompt ("ENTER YOUR PHYTHON MARKS");
let javamarks = prompt ("ENTER YOUR JAVA MARKS");
let total = parseInt(htmlmarks) + parseInt(cssmarks) + parseInt(javascriptmarks) + parseInt(phythonmarks) + parseInt(javamarks);
let per = total / 500 * 100;
let grade;

let p1;
let p2;
let p3;
let p4;
let p5;



if (per <= 100 && per >= 89) { grade = "A+"; }
else if (per <= 90 && per >= 89) { grade = "A"; }
else if (per <= 80 && per >= 70) { grade = "B"; }
else if (per <= 70 && per >= 69) { grade = "c"; }
else if (per <= 60 && per >= 59) { grade = "D"; }
else { (grade = "F"); }



if (htmlmarks>=40){
    p1="PASS";
}else{
    p1="FAIL"
}

if (cssmarks>=40){
    p2="PASS";
}else{
    p2="FAIL"
}

if (javascriptmarks>=40){
    p3="PASS";
}else{
    p3="FAIL"
}
if (phythonmarks>=40){
    p4="PASS";
}else{
    p4="FAIL"
}
if (javamarks>=40){
    p5="PASS";
}else{
    p5="FAIL"
}


//now print marksheet//
document.write("<b><br><center> Roll N0:", rollNo);
document.write("<b><br>Name:", name);
document.write("<b><br>Teacher Name </b>", tname, "<br>");
document.write("<BR><table border=6 bgcolor=black width=800px height=350px>");
document.write("<tr><th>SUBJECT</th><th>Marks Obtained</th><th>Out of</th><th>Pass/Fail</th></tr>");
document.write("<tr><td>HTML</td><td>", htmlmarks, "</td><td>100</td><td>", p1, "</td></tr>");
document.write("<tr><td>CSS</td><td>", cssmarks, "</td><td>100</td><td>", p2, "</td></tr>");
document.write("<tr><td>JAVASCRIPT</td><td>", javascriptmarks, "</td><td>100</td><td>", p3,"</td></tr>");
document.write("<tr><td>PHYTON</td><td>", phythonmarks, "</td><td>100</td><td>", p4,"</td></tr>");
document.write("<tr><td>JAVA</td><td>", javamarks, "</td><td>100</td><td>", p5, "</td></tr>");
document.write("<tr><td colspan=3>TOTAL</td><td>", total, "</td></tr>");
document.write("<tr><td colspan=3>PERCENTAGE</td><td>", per, "</td></tr>");
document.write("<tr><td colspan=3>GRADE</td><td>", grade, "</td></tr>");
document.write("<tr><td>PASS/FAIL</td><td>", pasfail, "</td></tr>");



