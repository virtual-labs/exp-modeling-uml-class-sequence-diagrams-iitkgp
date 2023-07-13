/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: main.js
Author:  Prakriti Dhang
        */

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("ex3b").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("selectpart").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("dispuml3b").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;

    link1.hide();
    link2.hide();
    link3.hide();
    link4.hide();
    line.hide();
    line2.hide();
    line3.hide();
    line4.hide();
    line5.hide();
    line6.hide();

    link2a.hide();
    link2b.hide();
    link2c.hide();
    link2d.hide();
    link2e.hide();
    line2a.hide();
    line2b.hide();
    line2c.hide();
    line2d.hide();
    line2e.hide();
    line2f.hide();
    line2g.hide();
    line2h.hide();
    line2i.hide();
    line2j.hide();
    line2k.hide();
    line2l.hide();
  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("exercise2").style.display = "block";
    document.getElementById("ex2").style.display = "block";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("ex3b").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("selectpart").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("dispuml3b").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;
    link2a.hide();
    link2b.hide();
    link2c.hide();
    link2d.hide();
    link2e.hide();
    line2a.hide();
    line2b.hide();
    line2c.hide();
    line2d.hide();
    line2e.hide();
    line2f.hide();
    line2g.hide();
    line2h.hide();
    line2i.hide();
    line2j.hide();
    line2k.hide();
    line2l.hide();

    link1.hide();
    link2.hide();
    link3.hide();
    link4.hide();
    line.hide();
    line2.hide();
    line3.hide();
    line4.hide();
    line5.hide();
    line6.hide();

  }
  if (ex.options[ex.selectedIndex].value == 3) {
    document.getElementById("exercise3").style.display = "block";
    document.getElementById("ex3").style.display = "block";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("selectpart").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;


  }

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("selectpart").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("seq_diag_ex3b").style.display = "none";
    document.getElementById("seq_diag_ex3").style.display = "none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("dispuml3b").style.display = "none";
    document.getElementById("dispviewbtn").disabled = true;
    document.getElementById("viewsol").disabled = true;
    link1.hide();
    link2.hide();
    link3.hide();
    link4.hide();
    line.hide();
    line2.hide();
    line3.hide();
    line4.hide();
    line5.hide();
    line6.hide();
link2a.hide();
    link2b.hide();
    link2c.hide();
    link2d.hide();
    link2e.hide();
    line2a.hide();
    line2b.hide();
    line2c.hide();
    line2d.hide();
    line2e.hide();
    line2f.hide();
    line2g.hide();
    line2h.hide();
    line2i.hide();
    line2j.hide();
    line2k.hide();
    line2l.hide();

  }
}
/* Submit button to directly view the solution*/

function viewsolutionb() {
  document.getElementById("dispres").style.display = "block";
  document.getElementById("viewsol").disabled = false;
  document.getElementById("dispviewbtn").disabled = true;

  if (ex.options[ex.selectedIndex].value == 1) {
    window.scrollBy(0, 1800);
  }
  if (ex.options[ex.selectedIndex].value == 2) {
    window.scrollBy(0, 1800);
  }
  if (ex.options[ex.selectedIndex].value == 3) {
    window.scrollBy(0, 3000);
  }

}

function solview() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result1").style.display = "block";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("viewsol").disabled = true;

  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result2").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";

    document.getElementById("viewsol").disabled = true;




  }
  if ((ex.options[ex.selectedIndex].value == 3) && (part.options[part.selectedIndex].value == 1)) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result3").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispuml3b").style.display = "none";
    document.getElementById("viewsol").disabled = true;
    document.getElementById("seq_diag_ex3b").style.display = "none";

  }

  if ((ex.options[ex.selectedIndex].value == 3) && (part.options[part.selectedIndex].value == 2)) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("show_result3b").style.display = "block";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("viewsol").disabled = true;
    document.getElementById("seq_diag_ex3").style.display = "none";

  }

}


var part = document.getElementById("selectpart");
function subpart() {
  if (part.options[part.selectedIndex].value == 1) {
    document.getElementById("ex3").style.display = "block";
    document.getElementById("ex3b").style.display = "none";
    // document.getElementById("dispuml3").style.display="block";
    document.getElementById("dispuml3b").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("seq_diag_ex3b").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = false;
    link2a.hide();
    link2b.hide();
    link2c.hide();
    link2d.hide();
    link2e.hide();
    line2a.hide();
    line2b.hide();
    line2c.hide();
    line2d.hide();
    line2e.hide();
    line2f.hide();
    line2g.hide();
    line2h.hide();
    line2i.hide();
    line2j.hide();
    line2k.hide();
    line2l.hide();


  }

  if (part.options[part.selectedIndex].value == 2) {
    document.getElementById("ex3b").style.display = "block";
    document.getElementById("ex3").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    // document.getElementById("dispuml3b").style.display="block";
    document.getElementById("seq_diag_ex3").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result3").style.display = "none";
    document.getElementById("show_result3b").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = false;
    //document.getElementById("seq_diag_ex3").style.display="none";
    link1.hide();
    link2.hide();
    link3.hide();
    link4.hide();
    line.hide();
    line2.hide();
    line3.hide();
    line4.hide();
    line5.hide();
    line6.hide();
  }



}
