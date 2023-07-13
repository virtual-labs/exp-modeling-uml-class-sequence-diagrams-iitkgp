/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex3.js
Author: Prakriti Dhang*/


 
/*********************************************Function for Table 1 ****************************************/

var arrsr3b =[];

function addbtnt31b(){
var inpt31b=document.getElementById("inp31b").value;

if(inpt31b == ""){
  alert("Please specify the object name!");

}

else{

   // arrsr3.push(inpt31);
 /******* Creating options in table 2********/
 let newOptionID3a1;
 newOptionID3a1 = 'newOption3ab_' + inpt31b;
 
let newOption3a1 = document.createElement('option');
let optionText3a1 = document.createTextNode(inpt31b);
// set option text
newOption3a1.appendChild(optionText3a1);
// and option value

newOption3a1.setAttribute("id", newOptionID3a1);
newOption3a1.setAttribute('value',inpt31b);
let select3a1 = document.getElementById('selectobjs3b'); 
select3a1.appendChild(newOption3a1);


let newOptionID3b2;
 newOptionID3b2 = 'newOption3b_' + inpt31b;
 
let newOption3b2 = document.createElement('option');
let optionText3b2 = document.createTextNode(inpt31b);
// set option text
newOption3b2.appendChild(optionText3b2);
// and option value

newOption3b2.setAttribute("id", newOptionID3b2);
newOption3b2.setAttribute('value',inpt31b);
let select3b2 = document.getElementById('selectobjr3b'); 
select3b2.appendChild(newOption3b2);

document.getElementById("inp31b").value="";

}


}






 /*************************************Function for Table 2***********************************************/  
 var line;
 var arrmesg3b=[];
 var arrobj=[];
 function addbtnt32b(){
  
  var selobjs3b= document.getElementById("selectobjs3b");
  var objsval3b =selobjs3b.options[selobjs3b.selectedIndex].text;
  //var objsval3= input_value3.match(/[a-zA-Z]/g);
  
  var selobjmt3b= document.getElementById("selectmsgtyp3b");
  var mtval3b =selobjmt3b.options[selobjmt3b.selectedIndex].value;
 
  var inpt32b = document.getElementById("inp32b").value;
 
  var selobjr3b= document.getElementById("selectobjr3b");
  var objrval3b =selobjr3b.options[selobjr3b.selectedIndex].text;
 
 
  if (objsval3b=="Select sender object"){
     alert("Please select a sending object!");
   } 
   else if (objrval3b=="Select receiver object"){
     alert("Please select a receiving object!");
   }
   
  
   else if(inpt32b == ""){
     alert("Please type in a message sent from source to target object!");
   }
   
   else if (mtval3b ==0){
     alert("Please select a message type!");
   }
  
 
  
 /* if((mtval == 2) || (mtval == 3)){
     alert("Please select Synchronous message type!");
  }*/
 
   
   else  {
     arrsr3b.push(objsval3b);
    arrobj= [...new Set(arrsr3b)];
     arrmesg3b.push(inpt32b);
     let newtr =document.createElement("tr");
     let newtdIDs= "objs"+objsval3b;
     let newtds= document.createElement("td");
     newtds.setAttribute("id", newtdIDs);
    
     
     let newtdIDmt= "objs"+mtval3b;
     let newtdmt= document.createElement("td");
     newtdmt.setAttribute("id", newtdIDmt);
    
     let newtdIDm= "objs"+inpt32b;
     let newtdm= document.createElement("td");
     newtdm.setAttribute("id", newtdIDm);
 
     let newtdIDr= "objs"+objrval3b;
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
 
 let tdvals=document.createTextNode(objsval3b);
 let tdvalmt=document.createTextNode(mtval3b);
 let tdvalm=document.createTextNode(inpt32b);
 let tdvalr=document.createTextNode(objrval3b);
 
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

 if((objsval3b.toLowerCase()=="user") && (objrval3b.toLowerCase()=="web browser") && (mtval3b == "SYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 /* document.getElementById("element-1a").style.display="block";
  document.getElementById("element-1b").style.display="block";
  line= new LeaderLine(clicka, clickb, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left', hide:true,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[0], {color: 'black', offset: [0, 50]})
          
        });*/
        
  // line= new LeaderLine(ele1a, ele1b, {color: 'black', size: 2, dash: true, endPlug:'behind',hide: true});
 }
 else if((objsval3b.toLowerCase()=="web browser") && (objrval3b.toLowerCase()=="web server") && (mtval3b == "ASYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }
 else if((objsval3b.toLowerCase()=="web server") && (objrval3b=="resource 1") && (mtval3b == "SYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="resource 1") && (objrval3b.toLowerCase()=="web server") && (mtval3b == "RESP")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="web server") && (objrval3b.toLowerCase()=="web browser") && (mtval3b == "RESP")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="web browser") && (objrval3b.toLowerCase()=="web browser") && (mtval3b == "SYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="web server") && (objrval3b=="resource 2") && (mtval3b == "SYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="resource 2") && (objrval3b.toLowerCase()=="web server") && (mtval3b == "RESP")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="web server") && (objrval3b.toLowerCase()=="web browser") && (mtval3b == "RESP")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }

 else if((objsval3b.toLowerCase()=="web browser") && (objrval3b.toLowerCase()=="web browser") && (mtval3b == "SYNC")){
  document.getElementById('tbodyt33b').appendChild(newtr);
 }


 else{
  alert("Message passing is not possible between " +objsval3b +" and " +objrval3b );
 }
 //document.getElementById('tbodyt33').appendChild(newtr);
 
 }
 
 }
   
 function removerow3(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      arrmesg3b.pop();
  } 
 

  else {
     return false;
  }
}

    

/***************************************************  Function for Draw UML **************************************************/
var ele12a, ele12b;
var click2a, click2b;
var link2a, link2b,link2c, link2d, link2e;
var line2a,line2b,line2c,line2d,line2e,line2f,line2g,line2h,line2i,line2j,line2k,line2l;
function drawbtnex3b(){

  

        document.getElementById("dispuml3b").style.display="block";
        document.getElementById("seq_diag_ex3b").style.display="block";


       
       ele12a = document.getElementById('element-12a');
          ele12b = document.getElementById('element-12b');
        
          var ele22a = document.getElementById('element-22a'),
          ele22b = document.getElementById('element-22b');
        
          var ele32a = document.getElementById('element-32a'),
          ele32b = document.getElementById('element-32b');
        
        
          //var ele4a = document.getElementById('element-42a'),
          //ele4b = document.getElementById('element-42b');
        
        
          var ele52a = document.getElementById('element-52a'),
          ele52b = document.getElementById('element-52b');
        
        
          var ele62a = document.getElementById('element-62a'),
          ele62b = document.getElementById('element-62b');
        
        
           click2a = document.getElementById('element-clicka21');
          click2b = document.getElementById('element-clickb21');
        
         var clicka22 = document.getElementById('element-clicka22'),
         clickb22 = document.getElementById('element-clickb22');
        
        //  var clicka3 = document.getElementById('element-clicka3'),
         // clickb3 = document.getElementById('element-clickb3');
        
          var httpreq2 = document.getElementById('elehttpreq2'),
          httpres2 = document.getElementById('elehttpres2'),
          upd2a = document.getElementById('eleupdate2a'),
          upd22 = document.getElementById('eleupdate22');
        
        
          var httpreq32 = document.getElementById('elehttpreq32'),
          httpres32 = document.getElementById('elehttpres32');
          
         
        
         var elehttpreqa2 = document.getElementById('elehttpreqa2'),
          elehttpresa2 = document.getElementById('elehttpresa2'),
          eleup32 = document.getElementById('eleup32'),
          eleup42 = document.getElementById('eleup42');
         
          var elehttpreq3a2 = document.getElementById('elehttpreq3a2'),
          elehttpres3a2 = document.getElementById('elehttpres3a2');
       
        
         
        
        
          var eleret3a2 = document.getElementById('eleret3a2'),
          eleres3b2 = document.getElementById('eleres3b2');
        
          var eleret3c2 = document.getElementById('eleret3c2'),
          eleres3d2 = document.getElementById('eleres3d2');
        
          var eleret5a2 = document.getElementById('eleret5a2'),
          eleres5b2 = document.getElementById('eleres5b2');
        
          var eleret6a2= document.getElementById('eleret6a2'),
          eleres6b2 = document.getElementById('eleres6b2');
        
        
        
       /*************************************** Creating line stroke between the objects ***************************************/
      link2a=  new LeaderLine(ele12a, ele12b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
      link2a.show();

      link2b=  new LeaderLine(ele22a, ele22b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link2b.show();

      link2c=   new LeaderLine(ele32a, ele32b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
       link2c.show(); 

       //new LeaderLine(ele42a, ele42b, {color: 'black', size: 2, dash: true, endPlug:'behind'});
        link2d=   new LeaderLine(ele52a, ele52b, {color: 'black', size: 2, dash: true, hide:true,endPlug:'behind'});
        link2d.show();

        link2e=   new LeaderLine(ele62a, ele62b, {color: 'black', size: 2, dash: true, hide:true, endPlug:'behind'});
        link2e.show();
        
        
        
     line2a=  new LeaderLine(click2a, click2b, {color: 'black', size: 2, startSocket: 'right', hide:true, endSocket: 'left',  startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
         middleLabel: LeaderLine.captionLabel(arrmesg3b[0], {color: 'black', offset: [0, 50]})
          
       });
       line2a.show('draw'); 
        
      line2b=   new LeaderLine(httpreq2, httpreq32, {color: 'black', size: 2, startSocket: 'right', hide:true, endSocket: 'left', startPlug: 'behind', endPlug: 'arrow2', endPlugSize: 2,
         
        middleLabel: LeaderLine.captionLabel(arrmesg3b[1], {color: 'black', offset: [0, 50]})
        
      });
      line2b.show('draw');

      
    line2c=   new LeaderLine(eleret3a2, eleret5a2, {color: 'black', size: 2, hide:true, startSocket: 'right', endSocket: 'left', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3b[2], {color: 'black', offset: [0, 50]})
          
        });
        line2c.show('draw');

        line2d=    new LeaderLine(clicka22, clickb22, {color: 'black', size: 2, hide:true, startSocket: 'right', endSocket: 'left', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
        middleLabel: LeaderLine.captionLabel(arrmesg3b[0], {color: 'black', offset: [0, 50]})
        
      });
      line2d.show('draw');

      line2e=   new LeaderLine(elehttpreqa2, elehttpreq3a2, {color: 'black', size: 2, hide:true, startSocket: 'right', endSocket: 'left',startPlug: 'behind', endPlug: 'arrow2', endPlugSize: 2,
       
      middleLabel: LeaderLine.captionLabel(arrmesg3b[1], {color: 'black', offset: [0, 50]})
      
    });
    line2e.show('draw');

    line2f=  new LeaderLine(eleres5b2, eleres3b2, {color: 'black', size: 2, dash:true, hide:true, startSocket: 'left', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
    middleLabel: LeaderLine.captionLabel(arrmesg3b[3], {color: 'black', offset: [0, 50]})
    
  });
  line2f.show('draw');
  line2g=   new LeaderLine(httpres32, httpres2, {color: 'black', size: 2, dash:true, hide:true, startSocket: 'left', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3b[4], {color: 'black'})
          
        });
        line2g.show('draw');  
        
       line2h=  new LeaderLine(upd2a, upd22, {color: 'black', size: 2, path: 'grid',hide:true,  startSocket: 'right', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3b[5], {color: 'black', offset: [0, 50]})
          
        });

        line2h.show('draw');
       
        line2i=      new LeaderLine(eleret3c2, eleret6a2, {color: 'black', size: 2,hide:true, startSocket: 'right', endSocket: 'left', startPlug: 'behind', endPlug: 'arrow3',endPlugSize: 2,
         
        middleLabel: LeaderLine.captionLabel(arrmesg3b[6], {color: 'black', offset: [0, 50]})
        
      });
      line2i.show('draw');
      
      line2j=   new LeaderLine(eleres6b2, eleres3d2, {color: 'black', size: 2, dash:true, hide:true,startSocket: 'left', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
       
        middleLabel: LeaderLine.captionLabel(arrmesg3b[7], {color: 'black', offset: [0, 50]})
        
      });
      line2j.show('draw');
        
      line2k=   new LeaderLine(elehttpres3a2, elehttpresa2, {color: 'black', size: 2, hide:true,startSocket: 'left', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3b[8], {color: 'black', offset: [0, 50]})
          
        });
        
        line2k.show('draw');
         
        line2l=   new LeaderLine(eleup32, eleup42, {color: 'black', size: 2, path: 'grid',hide:true, startSocket: 'right', endSocket: 'right', startPlug: 'behind', endPlug: 'arrow3', endPlugSize: 2,
         
          middleLabel: LeaderLine.captionLabel(arrmesg3b[9], {color: 'black', offset: [0, 50]})
          
        });
       
        line2l.show('draw');
       
        /*
       
        
        new LeaderLine(elehttpres3a2, elehttpresa2, {color: 'black', size: 2, startSocket: 'left', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[10], {color: 'black', offset: [0, 50]})
          
        });
        
        
        
        new LeaderLine(eleup32, eleup42, {color: 'black', size: 2, path: 'grid', startSocket: 'right', endSocket: 'right',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[11], {color: 'black', offset: [0, 50]})
          
        });
        
       /* new LeaderLine(clicka3, clickb3, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[12], {color: 'black', offset: [0, 50]})
          
        });
        
        
       
        
        
        new LeaderLine(elehttpreqb, elehttpreq3b, {color: 'black', size: 2, startSocket: 'right', endSocket: 'left',
         
          middleLabel: LeaderLine.captionLabel(arrmesg3[13], {color: 'black', offset: [0, 50]})
          
        });*/
/*
       
        
       
        */
       /*********************************************** Object name *****************************************************/
        
        document.getElementById('element-12a').innerHTML=arrobj[0];
        document.getElementById('element-12b').innerHTML=arrobj[0];
        
         document.getElementById('element-22a').innerHTML=arrobj[1];
        document.getElementById('element-22b').innerHTML=arrobj[1];
        
          document.getElementById('element-32a').innerHTML=arrobj[2];
         document.getElementById('element-32b').innerHTML=arrobj[2];
        
        
         // document.getElementById('element-42a').innerHTML=arrsr3[3];
        // document.getElementById('element-42b').innerHTML=arrsr3[3];
        
        
          document.getElementById('element-52a').innerHTML=arrobj[3];
         document.getElementById('element-52b').innerHTML=arrobj[3];
        
        
          document.getElementById('element-62a').innerHTML=arrobj[4];
          document.getElementById('element-62b').innerHTML=arrobj[4];
        

    
    }


      