/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex2.js
Author: Prakriti Dhang */


 
/*********************************************Function for Table 1 ****************************************/
var arrsr =[];

function addbtnt21(){
var inpt21=document.getElementById("inp21").value;

if(inpt21 == ""){
  alert("Please specify the object name!");

}

else{

   // arrsr.push(inpt21);
 /******* Creating options in table 2********/
 let newOptionIDt2a;
 newOptionIDt2a = 'newOptiont2a_' + inpt21;
 
let newOptiont2a = document.createElement('option');
let optionTextt2a = document.createTextNode(inpt21);
// set option text
newOptiont2a.appendChild(optionTextt2a);
// and option value

newOptiont2a.setAttribute("id", newOptionIDt2a);
newOptiont2a.setAttribute('value',inpt21);
let selectt2a = document.getElementById('selectobjs'); 
selectt2a.appendChild(newOptiont2a);


let newOptionIDt2b;
 newOptionIDt2b = 'newOptiont2b_' + inpt21;
 
let newOptiont2b = document.createElement('option');
let optionTextt2b = document.createTextNode(inpt21);
// set option text
newOptiont2b.appendChild(optionTextt2b);
// and option value

newOptiont2b.setAttribute("id", newOptionIDt2b);
newOptiont2b.setAttribute('value',inpt21);
let selectt2b = document.getElementById('selectobjr'); 
selectt2b.appendChild(newOptiont2b);

document.getElementById("inp21").value="";

}


}

 /*************************************Function for Table 2***********************************************/  
 var arrmesg=[];
 var arrobjex2=[];
function addbtnt22(){
 
 var selobjs= document.getElementById("selectobjs");
 var objsval =selobjs.options[selobjs.selectedIndex].text;

 var selobjmt= document.getElementById("selectmsgtyp");
 var mtval =selobjmt.options[selobjmt.selectedIndex].value;

 var inpt22 = document.getElementById("inp22").value;

 var selobjr= document.getElementById("selectobjr");
 var objrval =selobjr.options[selobjr.selectedIndex].text;


 if (objsval=="Select sender object"){
    alert("Please select a sending object!");
  } 
  else if (objrval=="Select receiver object"){
    alert("Please select a receiving object!");
  }
  
 
  else if(inpt22 == ""){
    alert("Please type in a message sent from source to target object!");
  }
  
  else if (mtval ==0){
    alert("Please select a message type!");
  }
 

 
/* if((mtval == 2) || (mtval == 3)){
    alert("Please select Synchronous message type!");
 }*/

  
  else  {
    arrsr.push(objsval);
    arrobjex2= [...new Set(arrsr)];
    arrmesg.push(inpt22);
    let newtr =document.createElement("tr");
    let newtdIDs= "objs"+objsval;
    let newtds= document.createElement("td");
    newtds.setAttribute("id", newtdIDs);
   
    
    let newtdIDmt= "objs"+mtval;
    let newtdmt= document.createElement("td");
    newtdmt.setAttribute("id", newtdIDmt);
   
    let newtdIDm= "objs"+inpt22;
    let newtdm= document.createElement("td");
    newtdm.setAttribute("id", newtdIDm);

    let newtdIDr= "objs"+objrval;
    let newtdr= document.createElement("td");
    newtdr.setAttribute("id", newtdIDr);

var newIconbtn = document.createElement("btn");
newIconbtn.setAttribute("type","button");
newIconbtn.setAttribute("class","btn btn-danger");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");

       
var newIconbtni = document.createElement("i");
newIconbtni.setAttribute("class", "bi bi-dash-circle");
newIconbtn.appendChild(newIconbtni);

let newtdbtn= document.createElement("td");

let tdvals=document.createTextNode(objsval);
let tdvalmt=document.createTextNode(mtval);
let tdvalm=document.createTextNode(inpt22);
let tdvalr=document.createTextNode(objrval);

newtds.appendChild(tdvals);
newtdmt.appendChild(tdvalmt);
newtdm.appendChild(tdvalm);
newtdr.appendChild(tdvalr);
newtdbtn.appendChild(newIconbtn); 

newtr.appendChild(newtds);
newtr.appendChild(newtdmt);
newtr.appendChild(newtdm);
newtr.appendChild(newtdr);
newtr.appendChild(newtdbtn);

if((objsval.toLowerCase()=="client") && (objrval.toLowerCase()=="server") && (mtval == "SYNC")){
document.getElementById('tbodyt23').appendChild(newtr);
}
else if((objsval.toLowerCase()=="server") && (objrval.toLowerCase()=="client") && (mtval == "SYNC")){
    document.getElementById('tbodyt23').appendChild(newtr);
}
else if((objsval.toLowerCase()=="client") && (objrval.toLowerCase()=="server") && (mtval == "SYNC"))
{
    document.getElementById('tbodyt23').appendChild(newtr);
}
else{
    alert("Message passing is not possible between " +objsval +" and " +objrval );
}
}

}


 

/******************************** Function to remove row *********************************************************/
function removerow(btndel) {
    if (typeof(btndel) == "object") {
        $(btndel).closest("tr").remove();
        arrmesg.pop();
    } 
   
  
    else {
       return false;
    }
  }

/*************************************************** Function for Draw UML **************************************************/
function drawbtnex2(){
    document.getElementById("dispuml2").style.display="block";

  var namespace = joint.shapes;

        var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

        paper = new joint.dia.Paper({
            el: document.getElementById('seq_diag_ex2'),
            model: graph,
          
           
            background: {
                color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
            },
            
            cellViewNamespace: namespace
        });



        var objs = new joint.shapes.standard.Rectangle();
        
        objs.position(15, 46);
        objs.resize(100, 40);
        objs.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrobjex2[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objs.addTo(graph);


        var objs1 = new joint.shapes.standard.Rectangle();
        
        objs1.position(15, 365);
        objs1.resize(100, 40);
        objs1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrobjex2[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objs1.addTo(graph);



        var objr = new joint.shapes.standard.Rectangle();
        
        objr.position(180, 46);
        objr.resize(100, 40);
        objr.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrobjex2[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objr.addTo(graph);



        var objr1 = new joint.shapes.standard.Rectangle();
        
        objr1.position(180, 364);
        objr1.resize(100, 40);
        objr1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
               // stroke:'#B90000'
            },
            label: {
                text: arrobjex2[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objr1.addTo(graph);


        var msg1 = new joint.shapes.standard.Rectangle();
        
        msg1.position(90, 119);
        msg1.resize(100, 40);
        msg1.attr({
            body: {

                fill: '#FFFFFF',
                strokeWidth: 0
            },
            label: {
                text: arrmesg[0],
                fill: 'black',
                fontSize: 16
            }
        });
       msg1.addTo(graph);


       var msg2 = new joint.shapes.standard.Rectangle();
        
        msg2.position(92, 188);
        msg2.resize(100, 40);
        msg2.attr({
            body: {

                fill: '#FFFFFF',
                strokeWidth: 0
            },
            label: {
                text: arrmesg[1],
                fill: 'black',
                fontSize: 16
            }
        });
       msg2.addTo(graph);

       var msg3 = new joint.shapes.standard.Rectangle();
        
       msg3.position(91, 254);
       msg3.resize(100, 40);
       msg3.attr({
           body: {

               fill: '#FFFFFF',
               strokeWidth: 0
           },
           label: {
               text: arrmesg[2],
               fill: 'black',
               fontSize: 16
           }
       });
      msg3.addTo(graph);


      var arrow = new joint.shapes.standard.Image();
      arrow.resize(80, 12);
      arrow.position(184,149);
  //actor1.position(103, 15);
  arrow.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
  arrow.attr('image/xlinkHref', 'images/arrow.png');
  arrow.addTo(graph);

  var arrow1 = new joint.shapes.standard.Image();
      arrow1.resize(80, 12);
      arrow1.position(184,289);
  //actor1.position(103, 15);
  arrow1.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
  arrow1.attr('image/xlinkHref', 'images/arrow.png');
  arrow1.addTo(graph);

        joint.shapes.standard.Link.define('examples.CustomLink', {
            attrs: {
                line: {
                    //stroke:'#B90000',
                    strokeDasharray: '4 2',
                    strokeWidth: 2,
                    targetMarker: {
                        'type': 'rect',
                        'stroke': 'none',
                        
                    }
                }
            },
            
          });
  
          var link1 = new joint.shapes.examples.CustomLink();
          
          link1.source(objs);
          link1.target(objs1);
         link1.addTo(graph);
  

         var link2 = new joint.shapes.examples.CustomLink();
          
         link2.source(objr);
         link2.target(objr1);
        link2.addTo(graph);   

        


       var link3 = new joint.shapes.standard.Link();
       link3.source(link1);
       link3.target(link2);
        link3.attr({
          line: {
            strokeWidth: 2,
             //strokeDasharray: '4 2',
             sourceMarker: { 
                'type': 'path',
                //'dy': 70
            },
            targetMarker: { 
                //'stroke':'#B90000',
                /*'type': 'image',
                'xlink:href': 'https://cdn3.iconfinder.com/data/icons/49handdrawing/24x24/left.png',
                'width': 14,
                'height': 14,*/
             'type': 'path',
              'stroke-width': 2,
              'fill': 'black',
             // 'd': 'M 0 70 l 165 0 Z',
              //'d': 'M 10 -5 0 0 10 5  Z ',
              //M 0 0 L 10 5 L 0 10
              
              'd':'M 0 70  L 165 70 L 0 70  ', 
             
              //'dy': -70
          }
          
      }
        });
        link3.addTo(graph);


        var link4 = new joint.shapes.standard.Link();
       link4.source(link1);
       link4.target(link2);
        link4.attr({
          line: {
            strokeWidth: 2,
             //strokeDasharray: '4 2',
            targetMarker: { 
                //'stroke':'#B90000',
              'type': 'path',
              'stroke-width': 2,
              'fill': 'black',
              'd': 'M 0 -70 L 165 -70 V -70'
          }
          
      }
        });
        link4.addTo(graph);

       
       var link5 = new joint.shapes.standard.Link();
        link5.source(link2);
        link5.target(link1);
       
        link5.attr({
          line: {
            strokeWidth: 2,
            targetMarker: { 
             //'stroke':'#B90000',
              'type': 'path',
              'stroke-width': 0,
              'fill': 'black',
              
          }
      }
        });
        link5.addTo(graph);


      /*   var link6 = new joint.shapes.standard.Link();
        link6.source(link1, {
            anchor:{
                name:'bottom',
                args:{
                  rotate:false,
                    dx:70,
                    dy:70,
                }
            }

        });
        link6.target(link2,{
            anchor:{
                name:'bottom',
                args:{
                    rotate:false,
                    dx:70,
                    dy:70,
                }
            }

        });
        link6.appendLabel({
            attrs: {
                text: {
                    text: arrmesg[1],
                    fontSize: 16
                }
                
          }
        });
        link6.attr({
          line: {
            strokeWidth: 2,
           
            targetMarker: { // minute hand
              'type': 'path',
              'stroke-width': 2,
              'fill': 'black',
              
          }
      }
        });
        link6.addTo(graph);*/

       /* var verticesTool = new joint.linkTools.Vertices();
        
       
        var toolsView = new joint.dia.ToolsView({
            tools: [verticesTool]
        });
var linkView = link3.findView(paper);
linkView.addTools(toolsView);*/

}

     


     







