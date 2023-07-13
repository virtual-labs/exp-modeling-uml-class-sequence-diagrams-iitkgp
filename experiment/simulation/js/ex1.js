/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex1.js
Author:  
        */


/*********************************************Function for Table 1 ****************************************/








 /*************************************Function for Table 2 ***********************************************/  


   
/*************************************Function for Table 3 ***********************************************/  


/*************************************Function for Table 4 ***********************************************/  


/*************************************Function for Table 5 ***********************************************/  

     

/*************************************************** Function for  Draw UML **************************************************/

function drawbtnex1(){
    document.getElementById("dispuml1").style.display="block";
    var namespace = joint.shapes;
  
          var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
  
          paper = new joint.dia.Paper({
              el: document.getElementById('class_diag_ex1'),
              model: graph,
             
              background: {
                  color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
              },
              
              cellViewNamespace: namespace
          });
  
  
        }
  