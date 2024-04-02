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

  function drawbtex1() {
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
  
    
  
    
  
      var objc0 = new joint.shapes.standard.Rectangle();
  
      objc0.position(312, 4);
      objc0.resize(100, 40);
      objc0.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[0],
          fill: 'black',
          fontSize: 16
        }
      });
      objc0.addTo(graph);
  
      var objc1 = new joint.shapes.standard.Rectangle();
  
      objc1.position(23,124);
      objc1.resize(150, 40);
      objc1.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[1],
          fill: 'black',
          fontSize: 16
        }
      });
      objc1.addTo(graph);
  
      var objc2 = new joint.shapes.standard.Rectangle();
  
      objc2.position(313,122);
      objc2.resize(150, 40);
      objc2.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[2],
          fill: 'black',
          fontSize: 16
        }
      });
      objc2.addTo(graph);
  
      var objc3 = new joint.shapes.standard.Rectangle();
  
      objc3.position(570,119);
      objc3.resize(100, 40);
      objc3.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[3],
          fill: 'black',
          fontSize: 16
        }
      });
      objc3.addTo(graph);
  
      var objc4 = new joint.shapes.standard.Rectangle();
  
      objc4.position(19,265);
      objc4.resize(100, 40);
      objc4.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[4],
          fill: 'black',
          fontSize: 16
        }
      });
      objc4.addTo(graph);
  
      var objc5 = new joint.shapes.standard.Rectangle();
  
      objc5.position(280,261);
      objc5.resize(100, 40);
      objc5.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[5],
          fill: 'black',
          fontSize: 16
        }
      });
      objc5.addTo(graph);
  
      var objc6 = new joint.shapes.standard.Rectangle();
  
      objc6.position(414,260);
      objc6.resize(150, 40);
      objc6.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[6],
          fill: 'black',
          fontSize: 16
        }
      });
      objc6.addTo(graph);
  
      var objc7 = new joint.shapes.standard.Rectangle();
  
      objc7.position(592,259);
      objc7.resize(100, 40);
      objc7.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[7],
          fill: 'black',
          fontSize: 16
        }
      });
      objc7.addTo(graph);
  
      var objc8 = new joint.shapes.standard.Rectangle();
  
      objc8.position(6,378);
      objc8.resize(100, 40);
      objc8.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[8],
          fill: 'black',
          fontSize: 16
        }
      });
      objc8.addTo(graph);
  
      var objc9 = new joint.shapes.standard.Rectangle();
  
      objc9.position(119,378);
      objc9.resize(100, 40);
      objc9.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[9],
          fill: 'black',
          fontSize: 16
        }
      });
      objc9.addTo(graph);
  
      var objc10 = new joint.shapes.standard.Rectangle();
  
      objc10.position(230,376);
      objc10.resize(100, 40);
      objc10.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[10],
          fill: 'black',
          fontSize: 16
        }
      });
      objc10.addTo(graph);
  
      var objc11 = new joint.shapes.standard.Rectangle();
  
      objc11.position(472,375);
      objc11.resize(100, 40);
      objc11.attr({
        body: {
          //text: class_dictionary[document.getElementById("table_2_select_class").options[document.getElementById("table_2_select_class").selectedIndex].value],
          fill: '#FFFC8C',
          strokeWidth: 2,
          //stroke:'#B90000'
        },
        label: {
          text: class_names_array[11],
          fill: 'black',
          fontSize: 16
        }
      });
      objc11.addTo(graph);
  
      joint.shapes.standard.Link.define('examples.CustomLink', {
       
        attrs:{
          line:{
            stroke: 'black',
            sourceMarker: 'none',
            targetMarker: 'none'
          },
        },
      });
  
      var link0 = new joint.shapes.standard.Link();
      link0.source(objc1);
      link0.target(objc0);
      link0.addTo(graph);
  
      link0.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
  
    link0.appendLabel({
      attrs: {
          text: {
              text: '1'
          }
      },
      position: {
          distance: 0.9
      }
  });
  
      var link1 = new joint.shapes.standard.Link();
      link1.source(objc2);
      link1.target(objc0);
      link1.addTo(graph);
  
      link1.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
    link1.appendLabel({
      attrs: {
          text: {
              text: '1'
          }
      },
      position: {
          distance: 0.7
      }
  });
  
      var link2 = new joint.shapes.examples.CustomLink();
      link2.source(objc0);
      link2.target(objc3);
      link2.addTo(graph);
  
      link2.appendLabel({
        attrs: {
            text: {
                text: '0..* end response'
            }
        },
        position: {
            distance: 0.10
        }
    });
  
    link2.appendLabel({
      attrs: {
          text: {
              text: '0..* request page'
          }
      },
      position: {
          distance: 0.8
      }
  });
  
      var link3 = new joint.shapes.standard.Link();
      link3.source(objc1);
      link3.target(objc4);
      link3.addTo(graph);
  
      link3.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.10
        }
    });
    link3.appendLabel({
      attrs: {
          text: {
              text: 'displays'
          }
      },
      position: {
          distance: 0.35
      }
  });
  link3.appendLabel({
    attrs: {
        text: {
            text: '0..*'
        }
    },
    position: {
        distance: 0.7
    }
  });
  
      var link4 = new joint.shapes.standard.Link();
      link4.source(objc5);
      link4.target(objc2);
      link4.addTo(graph);
  
      link4.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
    link4.appendLabel({
      attrs: {
          text: {
              text: '1'
          }
      },
      position: {
          distance: 0.8
      }
  });
  
      var link5 = new joint.shapes.standard.Link();
      link5.source(objc6);
      link5.target(objc2);
      link5.addTo(graph);
  
      link5.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.10
        }
    });
    link5.appendLabel({
      attrs: {
          text: {
              text: '1'
          }
      },
      position: {
          distance: 0.8
      }
  });
  
      var link6 = new joint.shapes.standard.Link();
      link6.source(objc7);
      link6.target(objc2);
      link6.addTo(graph);
  
      link6.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.10
        }
    });
    link6.appendLabel({
      attrs: {
          text: {
              text: '1'
          }
      },
      position: {
          distance: 0.8
      }
  });
  
      
      var link7 = new joint.shapes.examples.CustomLink();
      link7.source(objc7);
      link7.target(objc11);
      link7.addTo(graph);
  
      link7.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
    link7.appendLabel({
      attrs: {
          text: {
              text: 'handles'
          }
      },
      position: {
          distance: 0.5
      }
  });
  link7.appendLabel({
    attrs: {
        text: {
            text: '0..*'
        }
    },
    position: {
        distance: 0.8
    }
  });
      
      
  
  
      var link8 =new joint.shapes.examples.CustomLink();
      link8.source(objc6);
      link8.target(objc11);
      link8.addTo(graph);
  
      link8.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
    link8.appendLabel({
      attrs: {
          text: {
              text: 'generates'
          }
      },
      position: {
          distance: 0.5
      }
  });
  link8.appendLabel({
    attrs: {
        text: {
            text: '0..*'
        }
    },
    position: {
        distance: 0.8
    }
  });
  
      
  
      var link9 = new joint.shapes.examples.CustomLink();
      link9.source(objc5);
      link9.target(objc11);
      link9.addTo(graph);
  
      link9.appendLabel({
        attrs: {
            text: {
                text: '1'
            }
        },
        position: {
            distance: 0.2
        }
    });
    link9.appendLabel({
      attrs: {
          text: {
              text: 'generates'
          }
      },
      position: {
          distance: 0.5
      }
  });
  link9.appendLabel({
    attrs: {
        text: {
            text: '0..*'
        }
    },
    position: {
        distance: 0.8
    }
  });
  
      var link10 = new joint.shapes.standard.Link();
      link10.source(objc8);
      link10.target(objc4);
      link10.addTo(graph);
  
      var link11 = new joint.shapes.standard.Link();
      link11.source(objc9);
      link11.target(objc4);
      link11.addTo(graph);
  
      var link12 = new joint.shapes.standard.Link();
      link12.source(objc10);
      link12.target(objc4);
      link12.addTo(graph);
  }
  
  
  
  
  


