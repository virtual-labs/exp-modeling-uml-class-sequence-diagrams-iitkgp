/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex3.js
Author: Prakriti Dhang*/


 
/*********************************************Function for Table 1 ****************************************/

var arrsr3 =[];

function addbtnt31(){
var inpt31=document.getElementById("inp31").value;

if(inpt31 == ""){
  alert("Please specify the object name!");

}

else{

   // arrsr3.push(inpt31);
 /******* Creating options in table 2********/
 let newOptionID3a;
 newOptionID3a = 'newOption3a_' + inpt31;
 
let newOption3a = document.createElement('option');
let optionText3a = document.createTextNode(inpt31);
// set option text
newOption3a.appendChild(optionText3a);
// and option value

newOption3a.setAttribute("id", newOptionID3a);
newOption3a.setAttribute('value',inpt31);
let select3a = document.getElementById('selectobjs3'); 
select3a.appendChild(newOption3a);


let newOptionID3b;
 newOptionID3b = 'newOption3b_' + inpt31;
 
let newOption3b = document.createElement('option');
let optionText3b = document.createTextNode(inpt31);
// set option text
newOption3b.appendChild(optionText3b);
// and option value

newOption3b.setAttribute("id", newOptionID3b);
newOption3b.setAttribute('value',inpt31);
let select3b = document.getElementById('selectobjr3'); 
select3b.appendChild(newOption3b);

document.getElementById("inp31").value="";

}


}






 /*************************************Function for Table 2***********************************************/  
 var line;
 var arrmesg3=[];
 function addbtnt32(){
  
  var selobjs3= document.getElementById("selectobjs3");
  var objsval3 =selobjs3.options[selobjs3.selectedIndex].text;
  //var objsval3= input_value3.match(/[a-zA-Z]/g);
  
  var selobjmt3= document.getElementById("selectmsgtyp3");
  var mtval3 =selobjmt3.options[selobjmt3.selectedIndex].value;
 
  var inpt32 = document.getElementById("inp32").value;
 
  var selobjr3= document.getElementById("selectobjr3");
  var objrval3 =selobjr3.options[selobjr3.selectedIndex].text;
 
 
  if (objsval3=="Select sender object"){
     alert("Please select a sending object!");
   } 
   else if (objrval3=="Select receiver object"){
     alert("Please select a receiving object!");
   }
   
  
   else if(inpt32 == ""){
     alert("Please type in a message sent from source to target object!");
   }
   
   else if (mtval3 ==0){
     alert("Please select a message type!");
   }
  
 
  
 /* if((mtval == 2) || (mtval == 3)){
     alert("Please select Synchronous message type!");
  }*/
 
   
   else  {
    arrsr3.push(objsval3);
     arrmesg3.push(inpt32);
     let newtr =document.createElement("tr");
     let newtdIDs= "objs"+objsval3;
     let newtds= document.createElement("td");
     newtds.setAttribute("id", newtdIDs);
    
     
     let newtdIDmt= "objs"+mtval3;
     let newtdmt= document.createElement("td");
     newtdmt.setAttribute("id", newtdIDmt);
    
     let newtdIDm= "objs"+inpt32;
     let newtdm= document.createElement("td");
     newtdm.setAttribute("id", newtdIDm);
 
     let newtdIDr= "objs"+objrval3;
     let newtdr= document.createElement("td");
     newtdr.setAttribute("id", newtdIDr);
 
 var newIconbtn = document.createElement("btn");
 newIconbtn.setAttribute("type","button");
 newIconbtn.setAttribute("class","btn btn-danger");
 newIconbtn.setAttribute("onclick", "removerow3(this)");
 newIconbtn.setAttribute("style","cursor:pointer;");
 
        
 var newIconbtni = document.createElement("i");
 newIconbtni.setAttribute("class", "bi bi-dash-circle");
 newIconbtn.appendChild(newIconbtni);
 
 let newtdbtn= document.createElement("td");
 
 let tdvals=document.createTextNode(objsval3);
 let tdvalmt=document.createTextNode(mtval3);
 let tdvalm=document.createTextNode(inpt32);
 let tdvalr=document.createTextNode(objrval3);
 
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

 if((objsval3.toLowerCase()=="user") && (objrval3.toLowerCase()=="web browser") && (mtval3 == "SYNC")){
  document.getElementById('tbodyt33').appendChild(newtr);
 /* document.getElementById("element-1a").style.display="block";
  document.getElementById("element-1b").style.display="block";
  line= new LeaderLine(clicka, clickb, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left', hide:true,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[0], {color: 'black', offset: [0, 50]})
          
        });*/
        
  // line= new LeaderLine(ele1a, ele1b, {color: 'black', size: 2, dash: true, endPlug:'behind',hide: true});
 }
 else if((objsval3.toLowerCase()=="web browser") && (objrval3.toLowerCase()=="web server") && (mtval3 == "SYNC")){
  document.getElementById('tbodyt33').appendChild(newtr);
 }
 else if((objsval3.toLowerCase()=="web server") && (objrval3=="database") && (mtval3 == "SYNC")){
  document.getElementById('tbodyt33').appendChild(newtr);
 }

 else if((objsval3.toLowerCase()=="database") && (objrval3.toLowerCase()=="web server") && (mtval3 == "RESP")){
  document.getElementById('tbodyt33').appendChild(newtr);
 }

 else if((objsval3.toLowerCase()=="web server") && (objrval3.toLowerCase()=="web browser") && (mtval3 == "RESP")){
  document.getElementById('tbodyt33').appendChild(newtr);
 }

 else if((objsval3.toLowerCase()=="web browser") && (objrval3.toLowerCase()=="web browser") && (mtval3 == "SYNC")){
  document.getElementById('tbodyt33').appendChild(newtr);
 }
 else{
  alert("Message passing is not possible between " +objsval3 +" and " +objrval3 );
 }
 //document.getElementById('tbodyt33').appendChild(newtr);
 
 }
 
 }
   
 function removerow3(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      arrmesg3.pop();
  } 
 

  else {
     return false;
  }
}

    

/***************************************************  Function for Draw UML **************************************************/
var ele1a, ele1b;
var clicka, clickb;
var link1, link2, link3, link4;
var line2, line3, line4, line5, line6;
function drawbtnex3(){



        document.getElementById("dispuml3").style.display="block";
        document.getElementById("seq_diag_ex3").style.display="block";


       
       ele1a = document.getElementById('element-1a');
          ele1b = document.getElementById('element-1b');
        
          var ele2a = document.getElementById('element-2a'),
          ele2b = document.getElementById('element-2b');
        
          var ele3a = document.getElementById('element-3a'),
          ele3b = document.getElementById('element-3b');
        
        
          var ele4a = document.getElementById('element-4a'),
          ele4b = document.getElementById('element-4b');
        
        
          //var ele5a = document.getElementById('element-5a'),
         // ele5b = document.getElementById('element-5b');
        
        
         // var ele6a = document.getElementById('element-6a'),
        //  ele6b = document.getElementById('element-6b');
        
        
           clicka = document.getElementById('element-clicka');
          clickb = document.getElementById('element-clickb');
        
     //     var clicka2 = document.getElementById('element-clicka2'),
      //    clickb2 = document.getElementById('element-clickb2');
        
        //  var clicka3 = document.getElementById('element-clicka3'),
         // clickb3 = document.getElementById('element-clickb3');
        
          var httpreq = document.getElementById('elehttpreq'),
          httpres = document.getElementById('elehttpres'),
          upd = document.getElementById('eleupdate'),
          upd2 = document.getElementById('eleupdate2');
        
        
          var httpreq3 = document.getElementById('elehttpreq3'),
          httpres3 = document.getElementById('elehttpres3');
          
          var eleuid = document.getElementById('eleuid'),
          elelogin = document.getElementById('elelogin');
        
          var eleuid4 = document.getElementById('eleuid4'),
          elelogin4 = document.getElementById('elelogin4');
        
        /*  var elehttpreqa = document.getElementById('elehttpreqa'),
          elehttpresa = document.getElementById('elehttpresa'),
          eleup3 = document.getElementById('eleup3'),
          eleup4 = document.getElementById('eleup4');
         
          var elehttpreq3a = document.getElementById('elehttpreq3a'),
          elehttpres3a = document.getElementById('elehttpres3a');
        
          var elehttpreqb = document.getElementById('elehttpreqb'),
          elehttpresb = document.getElementById('elehttpresb'),
          eleup5 = document.getElementById('eleup5'),
          eleup6 = document.getElementById('eleup6');
         
          var elehttpreq3b = document.getElementById('elehttpreq3b'),
          elehttpres3b = document.getElementById('elehttpres3b');
        
          var eleret3a = document.getElementById('eleret3a'),
          eleres3b = document.getElementById('eleres3b');
        
          var eleret3c = document.getElementById('eleret3c'),
          eleres3d = document.getElementById('eleres3d');
        
          var eleret5a = document.getElementById('eleret5a'),
          eleres5b = document.getElementById('eleres5b');
        
          var eleret6a = document.getElementById('eleret6a'),
          eleres6b = document.getElementById('eleres6b');*/
        
        
        
       /*************************************** Creating line stroke between the objects ***************************************/
       link1=  new LeaderLine(ele1a, ele1b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link1.show();

       link2=  new LeaderLine(ele2a, ele2b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link2.show();

       link3=  new LeaderLine(ele3a, ele3b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link3.show();
       
       link4=  new LeaderLine(ele4a, ele4b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link4.show();
        //new LeaderLine(ele5a, ele5b, {color: 'black', size: 2, dash: true, endPlug:'behind'});
        //new LeaderLine(ele6a, ele6b, {color: 'black', size: 2, dash: true, endPlug:'behind'});
        
        
        
        line =new LeaderLine(clicka, clickb, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left', hide:true, animation: true,startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
         middleLabel: LeaderLine.captionLabel(arrmesg3[0], {color: 'black', offset: [0, 50]})
          
       });
       line.show('draw'); 
        
     line2=  new LeaderLine(httpreq, httpreq3, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',hide:true, startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
        middleLabel: LeaderLine.captionLabel(arrmesg3[1], {color: 'black', offset: [0, 50]})
        
      });
      line2.show('draw'); 

       line3= new LeaderLine(eleuid, eleuid4, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',hide:true, startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
        middleLabel: LeaderLine.captionLabel(arrmesg3[2], {color: 'black', offset: [0, 50]})
        
      });
      line3.show('draw'); 
      
      line4= new LeaderLine(elelogin4, elelogin, {color: 'black', size: 2, dash:true, startSocket: 'left', endSocket: 'right',hide:true, startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
       
        middleLabel: LeaderLine.captionLabel(arrmesg3[3], {color: 'black', offset: [0, 50]})
        
      });
      line4.show('draw'); 
       
        
       line5=  new LeaderLine(httpres3, httpres, {color: 'black', size: 2, dash:true, startSocket: 'left', endSocket: 'right',hide:true, startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[4], {color: 'black'})
          
        });
        line5.show('draw'); 
        
        
        line6= new LeaderLine(upd, upd2, {color: 'black', size: 2, path: 'grid', startSocket: 'right', endSocket: 'right',hide:true, startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[5], {color: 'black', offset: [0, 50]})
          
        });
        line6.show('draw'); 
     /*
        new LeaderLine(clicka2, clickb2, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[6], {color: 'black', offset: [0, 50]})
          
        });


        new LeaderLine(elehttpreqa, elehttpreq3a, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
        middleLabel: LeaderLine.captionLabel(arrmesg3[7], {color: 'black', offset: [0, 50]})
        
      });
        
        new LeaderLine(eleret3a, eleret5a, {color: 'black', size: 2,  startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[8], {color: 'black', offset: [0, 50]})
          
        });
        
        new LeaderLine(eleres5b, eleres3b, {color: 'black', size: 2, dash:true, startSocket: 'left', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[9], {color: 'black', offset: [0, 50]})
          
        });
        
       
        
        new LeaderLine(elehttpres3a, elehttpresa, {color: 'black', size: 2, startSocket: 'left', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[10], {color: 'black', offset: [0, 50]})
          
        });
        
        
        
        new LeaderLine(eleup3, eleup4, {color: 'black', size: 2, path: 'grid', startSocket: 'right', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[11], {color: 'black', offset: [0, 50]})
          
        });
        
        new LeaderLine(clicka3, clickb3, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[12], {color: 'black', offset: [0, 50]})
          
        });
        
        
       
        
        
        new LeaderLine(elehttpreqb, elehttpreq3b, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[13], {color: 'black', offset: [0, 50]})
          
        });

        new LeaderLine(eleret3c, eleret6a, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
        middleLabel: LeaderLine.captionLabel(arrmesg3[14], {color: 'black', offset: [0, 50]})
        
      });
      
      new LeaderLine(eleres6b, eleres3d, {color: 'black', size: 2, dash:true, startSocket: 'left', endSocket: 'right',
       
        middleLabel: LeaderLine.captionLabel(arrmesg3[15], {color: 'black', offset: [0, 50]})
        
      });
      
        
        new LeaderLine(elehttpres3b, elehttpresb, {color: 'black', size: 2, startSocket: 'left', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[16], {color: 'black', offset: [0, 50]})
          
        });
        
        
        
        new LeaderLine(eleup5, eleup6, {color: 'black', size: 2, path: 'grid', startSocket: 'right', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[17], {color: 'black', offset: [0, 50]})
          
        });
        */
       
        
       /*********************************************** Object name *****************************************************/
        
        document.getElementById('element-1a').innerHTML=arrsr3[0];
        document.getElementById('element-1b').innerHTML=arrsr3[0];
        
         document.getElementById('element-2a').innerHTML=arrsr3[1];
        document.getElementById('element-2b').innerHTML=arrsr3[1];
        
          document.getElementById('element-3a').innerHTML=arrsr3[2];
         document.getElementById('element-3b').innerHTML=arrsr3[2];
        
        
          document.getElementById('element-4a').innerHTML=arrsr3[3];
         document.getElementById('element-4b').innerHTML=arrsr3[3];
        
        
         /* document.getElementById('element-5a').innerHTML=arrsr3[4];
         document.getElementById('element-5b').innerHTML=arrsr3[4];
        
        
          document.getElementById('element-6a').innerHTML=arrsr3[5];
          document.getElementById('element-6b').innerHTML=arrsr3[5];*/
        

    
    }


       /* var namespace = joint.shapes;
      
              var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
      
              paper = new joint.dia.Paper({
                  el: document.getElementById('seq_diag_ex3'),
                  model: graph,
                
                 
                  background: {
                      color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
                  },
                  
                  cellViewNamespace: namespace
              });
      
      
      

             


              var objs1 = new joint.shapes.standard.Rectangle();
        
        objs1.position(14, 20);
        objs1.resize(100, 40);
        objs1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objs1.addTo(graph);

        var objs2 = new joint.shapes.standard.Rectangle();
        
        objs2.position(152, 20);
        objs2.resize(100, 40);
        objs2.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objs2.addTo(graph);

        var objs3 = new joint.shapes.standard.Rectangle();
        
        objs3.position(296, 20);
        objs3.resize(100, 40);
        objs3.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[2],
                fill: 'black',
                fontSize: 16
            }
        });
        objs3.addTo(graph);

        var objs4 = new joint.shapes.standard.Rectangle();
        
        objs4.position(432, 20);
        objs4.resize(100, 40);
        objs4.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[3],
                fill: 'black',
                fontSize: 16
            }
        });
        objs4.addTo(graph);


        var objs5 = new joint.shapes.standard.Rectangle();
        
        objs5.position(561, 20);
        objs5.resize(100, 40);
        objs5.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[4],
                fill: 'black',
                fontSize: 16
            }
        });
        objs5.addTo(graph);

        var objs6 = new joint.shapes.standard.Rectangle();
        
        objs6.position(693, 20);
        objs6.resize(100, 40);
        objs6.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[5],
                fill: 'black',
                fontSize: 16
            }
        });
        objs6.addTo(graph);

        

        var objsd1 = new joint.shapes.standard.Rectangle();
        
        objsd1.position(10, 555);
        objsd1.resize(100, 40);
        objsd1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd1.addTo(graph);

        
        var objsd2 = new joint.shapes.standard.Rectangle();
        
        objsd2.position(148, 555);
        objsd2.resize(100, 40);
        objsd2.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd2.addTo(graph);


        var objsd3 = new joint.shapes.standard.Rectangle();
        
        objsd3.position(298, 555);
        objsd3.resize(100, 40);
        objsd3.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[2],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd3.addTo(graph);


        var objsd4 = new joint.shapes.standard.Rectangle();
        
        objsd4.position(437, 555);
        objsd4.resize(100, 40);
        objsd4.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[3],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd4.addTo(graph);


        var objsd5 = new joint.shapes.standard.Rectangle();
        
        objsd5.position(568, 555);
        objsd5.resize(100, 40);
        objsd5.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[4],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd5.addTo(graph);


        var objsd6 = new joint.shapes.standard.Rectangle();
        
        objsd6.position(695, 555);
        objsd6.resize(100, 40);
        objsd6.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[5],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd6.addTo(graph);

        


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
          
          link1.source(objs1);
          link1.target(objsd1);
         link1.addTo(graph);
  
         var link2 = new joint.shapes.examples.CustomLink();
          
         link2.source(objs2);
         link2.target(objsd2);
        link2.addTo(graph);

        var link3 = new joint.shapes.examples.CustomLink();
          
         link3.source(objs3);
         link3.target(objsd3);
        link3.addTo(graph);

        var link4 = new joint.shapes.examples.CustomLink();
          
         link4.source(objs4);
         link4.target(objsd4);
        link4.addTo(graph);

        var link5 = new joint.shapes.examples.CustomLink();
          
         link5.source(objs5);
         link5.target(objsd5);
        link5.addTo(graph);

        var link6 = new joint.shapes.examples.CustomLink();
          
         link6.source(objs6);
         link6.target(objsd6);
        link6.addTo(graph);


        var linkc1 = new joint.shapes.standard.Link();
        linkc1.source(link1);
        linkc1.target(link2);
         linkc1.attr({
           line: {
          //   strokeWidth: 2,
              //strokeDasharray: '4 2',
              sourceMarker: { 
                 'type': 'path',
                 
                 //'dy': 70
             },
             targetMarker: { 
               
              'type': 'path',
               'stroke-width': 2,
               'fill': 'black',
              // 'd': 'M 0 70 l 165 0 Z',
              // 'd': 'M 10 -5 0 0 10 5  Z ',
              // 'd':'M 0 0 L 10 5 L 0 10 Z'
              'd':'M 0 180  L 140 180 L 0 180  ',
              // 'd':'M 0 70  L 165 70 L 0 70  ', 
              
               //'dy': -70
           }
           
       }
         });
         linkc1.addTo(graph);


         var linkc12 = new joint.shapes.standard.Link();
        linkc12.source(link1);
        linkc12.target(link2);
         linkc12.attr({
           line: {
          //   strokeWidth: 2,
              //strokeDasharray: '4 2',
              sourceMarker: { 
                 'type': 'path',
                 
                 //'dy': 70
             },
             targetMarker: { 
               
              'type': 'path',
               'stroke-width': 2,
               'fill': 'black',
             
              'd':'M 0 -120  L 140 -120 L 0 -120  ',
             
           }
           
       }
         });
         linkc12.addTo(graph);



         var linkc23 = new joint.shapes.standard.Link();
         linkc23.source(link2);
         linkc23.target(link3);
          linkc23.attr({
            line: {
           //   strokeWidth: 2,
               //strokeDasharray: '4 2',
               sourceMarker: { 
                  'type': 'path',
                  
                  //'dy': 70
              },
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
              
               'd':'M 0 160  L 148 160 L 0 160  ',
              
            }
            
        }
          });
          linkc23.addTo(graph);

          var linkc32 = new joint.shapes.standard.Link();
         linkc32.source(link2);
         linkc32.target(link3);
          linkc32.attr({
            line: {
           //   strokeWidth: 2,
               //strokeDasharray: '4 2',
               sourceMarker: { 
                  'type': 'path',
                  
                  //'dy': 70
              },
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
              
               'd':'M 0 100  L 148 100 L 0 100  ',
              
            }
            
        }
          });
          linkc32.addTo(graph);

          var linkc22 = new joint.shapes.standard.Link();
         linkc22.source(link2);
         linkc22.target(link2);
          linkc22.attr({
            line: {
           //   strokeWidth: 2,
               //strokeDasharray: '4 2',
               sourceMarker: { 
                  'type': 'path',
                  
                  //'dy': 70
              },
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
              
               
              
            }
            
        }
          });
          linkc22.addTo(graph);

         var linkc35 = new joint.shapes.standard.Link();
         linkc35.source(link3);
         linkc35.target(link5);
          linkc35.attr({
            line: {
           strokeWidth: 2,
               //strokeDasharray: '4 2',
              
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
               // 'd': 'M 0 70 l 165 0 Z',
                //'d': 'M 10 -5 0 0 10 5  Z ',
               // 'd':'M 0 0 L 10 5 L 0 10 Z'
                
               // 'd':'M 0 70  L 165 70 L 0 70  ', 
               
                //'dy': -70
            }
            
        }
          });
          linkc35.addTo(graph);


          var linkc53 = new joint.shapes.standard.Link();
          linkc53.source(link3);
         linkc53.target(link5);
          linkc53.attr({
            line: {
           strokeWidth: 2,
            
              
              targetMarker: { 
                
               'type': 'path',
               'strokeDasharray': '4 2',
                'stroke-width': 2,
                'fill': 'black',
                'd':'M 0 -30  L 268 -30 L 0 -30  ',
               // 'd': 'M 0 70 l 165 0 Z',
                //'d': 'M 10 -5 0 0 10 5  Z ',
               // 'd':'M 0 0 L 10 5 L 0 10 Z'
                
               // 'd':'M 0 70  L 165 70 L 0 70  ', 
               
                
            }
            
        }
          });
          linkc53.addTo(graph);





          var linkc36 = new joint.shapes.standard.Link();
          linkc36.source(link3);
          linkc36.target(link6);
           linkc36.attr({
             line: {
            strokeWidth: 2,
             //strokeDasharray: '4 2',
               
               targetMarker: { 
                 
                'type': 'path',
                 'stroke-width': 2,
                 'fill': 'black',
                // 'd': 'M 0 70 l 165 0 Z',
                 //'d': 'M 10 -5 0 0 10 5  Z ',
                // 'd':'M 0 0 L 10 5 L 0 10 Z'
                 
                // 'd':'M 0 70  L 165 70 L 0 70  ', 
                
                 
             }
             
         }
           });
           linkc36.addTo(graph);
*/




      
      
      
           
      