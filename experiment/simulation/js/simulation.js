/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: simulation.js
Author: Saptarshi Mondal */

//let currentPageIndex = null;

const button_0 = document.getElementById("button_0");
const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_4 = document.getElementById("button_4");
const button_5 = document.getElementById("button_5");
const button_6 = document.getElementById("button_6");
const button_7 = document.getElementById("button_7");

const buttons = [button_0, button_1, button_2, button_3, button_4, button_5, button_6, button_7];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].disabled = false;
}


function disabling_other_buttons() {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled === true) {
      buttons[i].disabled = false;
    }
  }
}


function main_play_button() {
  //currentPageIndex = 0;
  disabling_other_buttons();
  buttons[0].disabled = true;
  document.getElementById("play").style.display = "none";
  document.getElementById("slideshow0").style.display = "block";

  document.getElementById("List_0").style.display = "block";

  setTimeout(() => {
    document.getElementById("List_0.1").style.display = "block";
  }, 2000);

  setTimeout(() => {
    document.getElementById("List_0.2").style.display = "block";
  }, 4000);

  setTimeout(() => {
    document.getElementById("List_0.3").style.display = "block";
  }, 6000);

  setTimeout(() => {
    document.getElementById("List_0.4").style.display = "block";
  }, 8000);

  setTimeout(() => {
    document.getElementById("List_0.5").style.display = "block";
  }, 10000);

  setTimeout(() => {
    document.getElementById("List_0.6").style.display = "block";
  }, 12000);

  setTimeout(() => {
    document.getElementById("List_0.7").style.display = "block";
  }, 14000);

  setTimeout(() => { buttons[0].disabled = false; }, 17000);
  setTimeout(() => { document.getElementById("slideshow0").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.1").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.2").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.3").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.4").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.5").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.6").style.display = "none" }, 17000);
  setTimeout(() => { document.getElementById("List_0.7").style.display = "none" }, 17000);



}
function showPage(pageId) {
  // Get all the page elements
  const pages = document.querySelectorAll('.page');
  

  // Loop through each page
  pages.forEach(page => {
    // Check if the current page is the one to be shown
    if (page.id === pageId) {
      // Set display property to 'block' for the desired page
      page.style.display = 'block';
    } else {
      // Set display property to 'none' for other pages
      page.style.display = 'none';
    }
  });
}

function loadPage1() {
  //currentPageIndex = 1;
  disabling_other_buttons();

  document.getElementById("page1").style.display = "block";
  //document.getElementById("slideshow1.0").style.display = "block";
  showPage("page1");

  //disabling the button_1 for the time being


  buttons[1].disabled = true;


  document.getElementById("slideshow1.0").style.display = "block";
  setTimeout(() => { document.getElementById("List1.0").style.display = "block"; }, 2000);
  setTimeout(() => { document.getElementById("List1.1").style.display = "block"; }, 2000);
  setTimeout(() => { document.getElementById("List1.2").style.display = "block"; }, 6000);
  setTimeout(() => { document.getElementById("List1.3").style.display = "block"; }, 8000);
  setTimeout(() => { document.getElementById("List1.4").style.display = "block"; }, 10000);
  setTimeout(() => { document.getElementById("List1.5").style.display = "block"; }, 12000);
  setTimeout(() => { document.getElementById("Slideshow1.1").style.display = "block"; }, 12000);

  setTimeout(() => { document.getElementById("slideshow1.0").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.0").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.1").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.2").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.3").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.4").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("List1.5").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("Slideshow1.1").style.display = "none"; }, 14000);
  setTimeout(() => { document.getElementById("Slideshow1.2").style.display = "block"; }, 14000);

  setTimeout(() => { document.getElementById("Slideshow1.2").style.display = "none"; }, 16000);
  setTimeout(() => { document.getElementById("Slideshow1.3").style.display = "block"; }, 16000);
  setTimeout(() => { document.getElementById("Slideshow1.3.1").style.display = "block"; }, 16000);
  setTimeout(() => { document.getElementById("Lt1.0").style.display = "block"; }, 18000);
  setTimeout(() => { document.getElementById("Lt1.1").style.display = "block"; }, 18000);
  setTimeout(() => { document.getElementById("Lt1.2").style.display = "block"; }, 20000);
  setTimeout(() => { document.getElementById("Lt1.3").style.display = "block"; }, 22000);

  setTimeout(() => { document.getElementById("Slideshow1.3.1").style.display = "none"; }, 24000);
  setTimeout(() => { document.getElementById("Lt1.0").style.display = "none"; }, 24000);
  setTimeout(() => { document.getElementById("Lt1.1").style.display = "none"; }, 24000);
  setTimeout(() => { document.getElementById("Lt1.2").style.display = "none"; }, 24000);
  setTimeout(() => { document.getElementById("Lt1.3").style.display = "none"; }, 24000);

  setTimeout(() => { document.getElementById("Slideshow1.4.1").style.display = "block"; }, 24000);
  setTimeout(() => { document.getElementById("Lt1.1.0").style.display = "block"; }, 26000);
  setTimeout(() => { document.getElementById("Lt1.1.1").style.display = "block"; }, 26000);
  setTimeout(() => { document.getElementById("Lt1.1.2").style.display = "block"; }, 28000);

  setTimeout(() => { document.getElementById("Slideshow1.5").style.display = "block"; }, 32000);

  setTimeout(() => { document.getElementById("Slideshow1.3").style.display = "none"; }, 34000);
  setTimeout(() => { document.getElementById("Slideshow1.4.1").style.display = "none"; }, 34000);
  setTimeout(() => { document.getElementById("Lt1.1.0").style.display = "none"; }, 34000);
  setTimeout(() => { document.getElementById("Lt1.1.1").style.display = "none"; }, 34000);
  setTimeout(() => { document.getElementById("Lt1.1.2").style.display = "none"; }, 34000);

  setTimeout(() => { document.getElementById("Slideshow1.5").style.display = "none"; }, 34000);

  setTimeout(() => { document.getElementById("Slideshow1.6").style.display = "block"; }, 34000);
  setTimeout(() => { document.getElementById("Slideshow1.6").style.display = "none"; }, 36000);
  setTimeout(() => { document.getElementById("Slideshow1.7").style.display = "block"; }, 36000);

  setTimeout(() => { document.getElementById("Slideshow1.7").style.display = "none"; }, 38000);
  setTimeout(() => { document.getElementById("Slideshow1.8").style.display = "block"; }, 38000);

  setTimeout(() => { document.getElementById("Slideshow1.8").style.display = "none"; }, 40000);
  setTimeout(() => { document.getElementById("Slideshow1.9").style.display = "block"; }, 40000);

  setTimeout(() => { document.getElementById("Slideshow1.10").style.display = "block"; }, 42000);
  setTimeout(() => { document.getElementById("Slideshow1.9").style.display = "none"; }, 42000);

  setTimeout(() => { document.getElementById("Slideshow1.10").style.display = "none"; }, 44000);
  setTimeout(() => { document.getElementById("Slideshow1.11").style.display = "block"; }, 44000);
  setTimeout(() => { document.getElementById("Slideshow1.12").style.display = "block"; }, 46000);

  setTimeout(() => { buttons[1].disabled = false; }, 46000);
  setTimeout(() => { document.getElementById("Slideshow1.11").style.display = "none"; }, 49000);
  setTimeout(() => { document.getElementById("Slideshow1.12").style.display = "none"; }, 49000);


}

function loadPage2() {
  //currentPageIndex = 2;
  showPage("page2");
  disabling_other_buttons();

  buttons[2].disabled = true;

  document.getElementById("slideshow2.0").style.display = "block";

  setTimeout(() => { document.getElementById("slideshow2.0").style.display = "none"; }, 2000);
  setTimeout(() => { document.getElementById("Slideshow2.1").style.display = "block"; }, 2000);
  setTimeout(() => { document.getElementById("sequence_diag_1").style.display = "block"; }, 4000);


  setTimeout(() => { document.getElementById("Slideshow2.1").style.display = "none"; }, 6000);
  setTimeout(() => { document.getElementById("sequence_diag_1").style.display = "none"; }, 6000);
  setTimeout(() => { document.getElementById("Slideshow2.2").style.display = "block"; }, 6000);

  setTimeout(() => { document.getElementById("sequence_diag_1.1").style.display = "block"; }, 8000);

  setTimeout(() => { document.getElementById("sequence_diag_1.1").style.display = "none"; }, 11000);
  setTimeout(() => { document.getElementById("Slideshow2.2").style.display = "none"; }, 11000);

  setTimeout(() => { document.getElementById("Slideshow2.3").style.display = "block"; }, 11000);
  setTimeout(() => { document.getElementById("sequence_diag_2").style.display = "block"; }, 14000);

  setTimeout(() => { buttons[2].disabled = false; }, 16000);
  setTimeout(() => { document.getElementById("Slideshow2.3").style.display = "none"; }, 16000);
  setTimeout(() => { document.getElementById("sequence_diag_2").style.display = "none"; }, 16000);


}

function loadPage3() {
  //currentPageIndex = 3;
  showPage("page3");
  disabling_other_buttons();

  buttons[3].disabled = true;

  document.getElementById("slide_0").style.display = "block";


  setTimeout(() => { document.getElementById("sequence_diag_3.0").style.display = "block"; }, 3000);

  setTimeout(() => { buttons[3].disabled = false; }, 3000);

  setTimeout(() => { document.getElementById("slide_0").style.display = "none"; }, 6000);
  setTimeout(() => { document.getElementById("sequence_diag_3.0").style.display = "none"; }, 6000);

}

function loadPage4() {
 // currentPageIndex = 4;
  showPage("page4");
  disabling_other_buttons();
  buttons[4].disabled = true;
  document.getElementById("slide_4.0").style.display = "block";


  setTimeout(() => { document.getElementById("sequence_diag_4.0").style.display = "block"; }, 3000);

  setTimeout(() => { buttons[4].disabled = false }, 6000);
  setTimeout(() => { document.getElementById("sequence_diag_4.0").style.display = "none" }, 6000);
  setTimeout(() => { document.getElementById("slide_4.0").style.display = "none" }, 6000);


}

function loadPage5() {
 // currentPageIndex = 5;
  showPage("page5");
  disabling_other_buttons();
  buttons[5].disabled = true;

  document.getElementById("slide_5.0").style.display = "block";

  setTimeout(() => { document.getElementById("slide_5.1").style.display = "block" }, 3000);

  setTimeout(() => { document.getElementById("slide_5.1").style.display = "none" }, 6000);
  setTimeout(() => { document.getElementById("slide_5.0").style.display = "none" }, 6000);

  setTimeout(() => { document.getElementById("sequence_diag_5.0").style.display = "block" }, 6000);

  setTimeout(() => { document.getElementById("sequence_diag_5.0").style.display = "none" }, 9000);
  setTimeout(() => { document.getElementById("sequence_diag_5.1").style.display = "block" }, 9000);

  setTimeout(() => { buttons[5].disabled = false }, 11000);
  setTimeout(() => { document.getElementById("sequence_diag_5.1").style.display = "none" }, 11000);



}

function loadPage6() {
  //currentPageIndex = 6;
  showPage("page6");
  disabling_other_buttons();
  buttons[6].disabled = true;

  document.getElementById("slide_6.0").style.display = "block";

  setTimeout(() => { document.getElementById("slide_6.1").style.display = "block" }, 2500);
  setTimeout(() => { document.getElementById("slide_6.2").style.display = "block" }, 5000);
  setTimeout(() => { document.getElementById("slide_6.3").style.display = "block" }, 7500);

  setTimeout(() => { document.getElementById("slide_6.0").style.display = "none" }, 10000);
  setTimeout(() => { document.getElementById("slide_6.1").style.display = "none" }, 10000);
  setTimeout(() => { document.getElementById("slide_6.2").style.display = "none" }, 10000);
  setTimeout(() => { document.getElementById("slide_6.3").style.display = "none" }, 10000);

  setTimeout(() => { document.getElementById("slide_6.4").style.display = "block" }, 10000);
  setTimeout(() => { document.getElementById("slide_6.5").style.display = "block" }, 12500);

  setTimeout(() => { buttons[6].disabled = false }, 15000);
  setTimeout(() => { document.getElementById("slide_6.4").style.display = "none" }, 15000);
  setTimeout(() => { document.getElementById("slide_6.5").style.display = "none" }, 15000);


}

function loadPage7() {
  currentPageIndex = 7;
  showPage("page7");
  disabling_other_buttons();
  buttons[7].disabled = true;

  document.getElementById("sequence_diag_7.0").style.display = "block";

  setTimeout(() => { document.getElementById("slide_7.0").style.display = "block" }, 3000);

  setTimeout(() => { buttons[7].disabled = false; }, 6000);
  setTimeout(() => { document.getElementById("slide_7.0").style.display = "none" }, 6000);
  setTimeout(() => { document.getElementById("sequence_diag_7.0").style.display = "none" }, 6000);
}

/*** function play_and_pause() {
  let remainingTime = 0;
  let timeoutId;

  function startTimeout(delay) {
    timeoutId = setTimeout(() => {
      console.log("Timeout completed.");
    }, delay);
  }

  function pauseTimeout() {
    clearTimeout(timeoutId);
    remainingTime = delay - (Date.now() - startTime);
  }

  function resumeTimeout() {
    startTimeout(remainingTime);
  }
}

function next(){
  const pages = document.querySelectorAll('.page');

}

function showPage(pageId) {
  // Get all the page elements
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    // Check if the current page is the one to be shown
    if (page.id === pageId) {
      // Set display property to 'block' for the desired page
      page.style.display = 'block';
    } else {
      // Set display property to 'none' for other pages
      page.style.display = 'none';
    }

  // Loop through each page
  pages.forEach(page => {
    // Check if the current page is the one to be shown
    if (page.id === pageId) {
      // Set display property to 'block' for the desired page
      page.style.display = 'block';
    } else {
      // Set display property to 'none' for other pages
      page.style.display = 'none';
    }
  });
}   

const pages = document.getElementsByClassName("page");


const fast_forward = document.getElementById("fast-forward");

function nextPage()
{
  
    if (currentPageIndex <= pages.length - 1) {
      showPage((currentPageIndex + 1) % pages.length);
    }
    
}
function showPage(index) {
  Array.from(pages).forEach((page) => {
    page.style.display = "none";
  });

  pages[index].style.display = "block";
  currentPageIndex = index;

  updateButtonState();
}
function updateButtonState() {
  //previousButton.disabled = currentPageIndex === 0;
  fast_forward.disabled = currentPageIndex === pages.length - 1;
}

showPage(currentPageIndex); ***/
































