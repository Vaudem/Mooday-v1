var app = (function app(){
    "use strict";
    var log = function(data){
        console.log(data);
    };

    var dom = {};

    var apparition = function(){
        dom.moodspage.classList.remove("dezoom");
        dom.moodspage.classList.add("zoom");


    }

    var disparition = function(){
        
        dom.moodspage.classList.add("dezoom");
        dom.moodspage.classList.remove("zoom");
    }
    


    const clickPage = function clickPage(){
        const nodes= document.querySelectorAll("figure.mood");
        log(nodes);
        nodes.forEach(function(node){
            node.onclick = loadHTML;
        });
    };


    const loadHTML = function loadHTML(e){
        const src = e.target || e.srcElement;  // target = moz et src = microsoft
        const key = Number(src.getAttribute("data-page-key")); // 1 2 3
        const url = `./pages/page${key}.html`;
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.onload= function getHTML(){
            displayHTML(this.response);

        };
        xhr.send();
    
    };


    const displayHTML = function displayHTML(html){
            window.scroll({
                top: 1420,
                left: 0,
                behavior: 'smooth'
            });
        dom.section2.innerHTML = html;
        
       
    };





    var start = function start (){
        dom.arrow = document.getElementById("arrow");
        dom.arrow.onclick = function(){
            window.scroll({
                top: 700,
                left: 0,
                behavior: 'smooth'
            })
        };
         dom.section1 = document.getElementById("page1");
         dom.moodspage = document.getElementById("moods");
         log(dom.moodspage);
         dom.section1.addEventListener("mouseenter",apparition);
         dom.section1.addEventListener("mouseleave",disparition);

         dom.section2 = document.getElementById("page2");
         clickPage();
         dom.section2.onclick = function(){
             window.scroll({
                 top: 700,
                 left: 0,
                 behavior: 'smooth'
             });
        
      
        };
    };

    window.addEventListener("DOMContentLoaded", start);


}());