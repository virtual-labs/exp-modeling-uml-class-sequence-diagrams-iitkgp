/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex1.js
Author:  Saptarshi Mondal
        */


var class_dictionary = {};
var class_names_array = [];
function create_select_options()
{
    
  var input_from_table_1 = document.getElementById("inp1").value;
  //attributes.push(input_from_table_1);
  document.getElementById("inp1").value = "";
  
  var flag = 0;
  for (let i = 0; i<class_names_array.length; i++)
  {
    if (input_from_table_1 === class_names_array[i])
    {
      flag = 1;
      break;
    }
    
  }
  if(flag === 1)
  {
    alert("You have already entered that Class.");
  }
  else{
    class_names_array.push(input_from_table_1);
  

  var select_element_2 = document.getElementById("table_2_select_class");
  var select_element_3 = document.getElementById("table_3_select_class");
  var select_element_4_0 = document.getElementById("table_4_0_select_class");
  var select_element_4_1 = document.getElementById("table_4_1_select_class");
  var select_element_5_0 = document.getElementById("table_5_0_select_class");
  var select_element_5_1 = document.getElementById("table_5_1_select_class");

  var option = document.createElement("option");
  var option_text = document.createTextNode(input_from_table_1);
  //option.text = input_from_table_1.trim();
  option.appendChild(option_text);
  //option.appendChild(disabled_option_like_placeholder);
  option.setAttribute("value",input_from_table_1);

  var option_3 = document.createElement("option");
  var option_text_3 = document.createTextNode(input_from_table_1);
  //option_3.text = input_from_table_1.trim();
  option_3.appendChild(option_text_3);
  option_3.setAttribute("value",input_from_table_1);

  var option_4_0 = document.createElement("option");
  var option_text_4_0 = document.createTextNode(input_from_table_1);
  option_4_0.appendChild(option_text_4_0);
  option_4_0.setAttribute("value",input_from_table_1);

  var option_4_1 = document.createElement("option");
  var option_text_4_1 = document.createTextNode(input_from_table_1);
  option_4_1.appendChild(option_text_4_1);
  option_4_1.setAttribute("value",input_from_table_1);


  var option_5_1 = document.createElement("option");
  var option_text_5_1 = document.createTextNode(input_from_table_1);
  option_5_1.appendChild(option_text_5_1);
  option_5_1.setAttribute("value",input_from_table_1);

  var option_5_0 = document.createElement("option");
  var option_text_5_0 = document.createTextNode(input_from_table_1);
  option_5_0.appendChild(option_text_5_0);
  option_5_0.setAttribute("value",input_from_table_1);


  select_element_2.appendChild(option);
  select_element_3.appendChild(option_3);
  select_element_4_0.appendChild(option_4_0);
  select_element_4_1.appendChild(option_4_1);
  select_element_5_1.appendChild(option_5_1);
  select_element_5_0.appendChild(option_5_0);

  // to create a new row in table 6

  var table6 = document.getElementById("tbl6_body");

  var newRow = document.createElement("tr");

  var cid1 = "Class" + input_from_table_1;
  var cell1 = document.createElement("td");
  cell1.setAttribute("id",cid1);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowtr(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  
  cell1.textContent = input_from_table_1;
  cell1.style.fontWeight = "bold";
  cell1.style.fontSize = "larger";
  cell1.style.textAlign = "center";
  cell1.appendChild(newIconbtn);
  newRow.appendChild(cell1);

  var cid2 = "Attributes" + input_from_table_1;
  var cell2 = document.createElement("td");
  cell2.setAttribute("id",cid2);
  cell2.textContent = "";
  newRow.appendChild(cell2);
  
  var cid3 = "Operation" + input_from_table_1;
  var cell3 = document.createElement("td");
  cell3.setAttribute("id",cid3);
  cell3.textContent = "";
  newRow.appendChild(cell3);
  
  table6.appendChild(newRow);
  }
  
}




function create_attribute()
{
  var input_from_table_2 = document.getElementById("inp2").value;
  document.getElementById("inp2").value = "";
  

  var table_2_select_class = document.getElementById("table_2_select_class");
  var select_class_value = table_2_select_class.options[table_2_select_class.selectedIndex].value;

  if(!(select_class_value in class_dictionary))
  {
    class_dictionary[select_class_value]=[];
    class_dictionary[select_class_value].push(input_from_table_2);
  }
  else{
    class_dictionary[select_class_value].push(input_from_table_2);
  }
  

  var table_2_type = document.getElementById("table_2_type");
  var select_type = table_2_type.options[table_2_type.selectedIndex].text;

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
 

  
   var newLi = document.createElement("Li");
   var Li_text = document.createTextNode(input_from_table_2);
   
   document.getElementById("Attributes" + select_class_value).appendChild(newLi);
   var Li_operation = document.createTextNode(select_type);

   var gap1 = document.createTextNode(" ");
   var gap2 = document.createTextNode(" ");

   
   newLi.appendChild(Li_text);
   newLi.appendChild(gap1);
      
   newLi.appendChild(Li_operation);
   newLi.appendChild(gap2);

   newLi.appendChild(newIconbtn);

}


function create_operations()
{
  var input_from_table_3 = document.getElementById("inp3").value;
  document.getElementById("inp3").value = "";

  var table_3_select_class = document.getElementById("table_3_select_class");
  var select_class_value = table_3_select_class.options[table_3_select_class.selectedIndex].value;

  var table_3_type = document.getElementById("table_3_type");
  var select_type = table_3_type.options[table_3_type.selectedIndex].text;

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowli(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var newLi = document.createElement("Li");
   var Li_text = document.createTextNode(input_from_table_3);
   
   document.getElementById("Operation" + select_class_value).appendChild(newLi);
   var Li_operation = document.createTextNode(select_type);

   var gap1 = document.createTextNode(" ");
   var gap2 = document.createTextNode(" ");

   
   newLi.appendChild(Li_text);
   newLi.appendChild(gap1);
      
   newLi.appendChild(Li_operation);
   newLi.appendChild(gap2);

   newLi.appendChild(newIconbtn);

}

function create_row_in_table_7()
{
  var input_from_table_1 = document.getElementById("inp1").value;
  var table_4_0_select_class = document.getElementById("table_4_0_select_class");
  var select_class_value_4_0 = table_4_0_select_class.options[table_4_0_select_class.selectedIndex].text;

  var table_4_1_select_class = document.getElementById("table_4_1_select_class");
  var select_class_value_4_1 = table_4_1_select_class.options[table_4_1_select_class.selectedIndex].text;

  if(select_class_value_4_0 === select_class_value_4_1)
  {
    alert("A class cannot inherit itself!");
  }
  else
  {

  var table7 = document.getElementById("tbl7_body");
  var newRow = document.createElement("tr");

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowtr(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var cid1 = "Sub-Class" + input_from_table_1;
  var cell1 = document.createElement("td");
  cell1.setAttribute("id",cid1);
  cell1.textContent = select_class_value_4_0;
  //cell1.appendChild(newIconbtn);
  newRow.appendChild(cell1);

  var cid2 = "Super-Class" + input_from_table_1;
  var cell2 = document.createElement("td");
  cell2.setAttribute("id",cid2);
  cell2.textContent = select_class_value_4_1;
  //cell2.appendChild(newIconbtn);
  newRow.appendChild(cell2);
  newRow.appendChild(newIconbtn);

  table7.appendChild(newRow);
  }

}

function create_row_in_table_8()
{
  var input_from_table_1 = document.getElementById("inp1").value;

  var table_5_0_select_class = document.getElementById("table_5_0_select_class");
  var select_class_value_5_0 = table_5_0_select_class.options[table_5_0_select_class.selectedIndex].text;

  var multiplicity = document.getElementById("multiplicity");
  var select_multiplicity = multiplicity.options[multiplicity.selectedIndex].text;

  var association = document.getElementById("association").value;

  var association_type = document.getElementById("association_type");
  var select_association_type = association_type.options[association_type.selectedIndex].text;

  var multiplicity_2 = document.getElementById("multiplicity_2");
  var select_multiplicity_2 = multiplicity_2.options[multiplicity.selectedIndex].text;

  var association_direction = document.getElementById("association_direction");
  var select_association_direction = association_direction.options[association_direction.selectedIndex].text;

  var table_5_1_select_class = document.getElementById("table_5_1_select_class");
  var select_class_value_5_1 = table_5_1_select_class.options[table_5_1_select_class.selectedIndex].text;


  var table8 = document.getElementById("tbl8_body");
  var newRow = document.createElement("tr");

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowtr(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var cid1 = "Class" + input_from_table_1;
  var cell1 = document.createElement("td");
  cell1.setAttribute("id",cid1);
  cell1.textContent = select_class_value_5_0;
  newRow.appendChild(cell1);

  var cid2 = "Multiplicity" + select_multiplicity;
  var cell2 = document.createElement("td");
  cell2.setAttribute("id",cid2);
  cell2.textContent = select_multiplicity;
  newRow.appendChild(cell2);

  var cid3 = "Relation_Name" + association;
  var cell3 = document.createElement("td");
  cell3.setAttribute("id",cid3);
  cell3.textContent = association;
  newRow.appendChild(cell3);

  var cid4 = "Relation_Type" + select_association_type;
  var cell4 = document.createElement("td");
  cell4.setAttribute("id",cid4);
  cell4.textContent = select_association_type;
  newRow.appendChild(cell4);

  var cid5 = "Multiplicity_2" + select_multiplicity_2;
  var cell5 = document.createElement("td");
  cell5.setAttribute("id",cid5);
  cell5.textContent = select_multiplicity_2;
  newRow.appendChild(cell5);

  var cid6 = "Class_2" + select_class_value_5_1;
  var cell6 = document.createElement("td");
  cell6.setAttribute("id",cid6);
  cell6.textContent = select_class_value_5_1;
  newRow.appendChild(cell6);

  var cid7 = "Direction" + select_association_direction;
  var cell7 = document.createElement("td");
  cell7.setAttribute("id",cid7);
  cell7.textContent = select_association_direction;
  newRow.appendChild(cell7);

  newRow.appendChild(newIconbtn);

  table8.appendChild(newRow);

}

function removerowli(btndel) {

    if (typeof(btndel) == "object") {
  
         $(btndel).closest("li").remove();
    }
    else{
      return false;
    }
  }
  function removerowtr(btndel) {
  
    if (typeof(btndel) == "object") {
  
         $(btndel).closest("tr").remove();
    }
    else{
      return false;
    }
  }

function drawbtex1()
{
  document.getElementById("dispuml1").style.display = "block";

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

  for( var i = 0; i < class_names_array.length; i++)
  {      

    var objs = new joint.shapes.standard.Rectangle();
          
          objs.position(15, 46);
          objs.resize(100, 40);
          objs.attr({
              body: {
                  //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
                  fill: '#FFFC8C',
                  strokeWidth: 2,
                  //stroke:'#B90000'
              },
              label: {
                  text: class_names_array[i++],
                  fill: 'black',
                  fontSize: 16
              }
          });
          objs.addTo(graph);
  }
}


