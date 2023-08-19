// console.log("vanshuuuuuuuuuuu")

// console.log("adding new field");
function addnewWEfield(){

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ," Enter here")
    
    let weOb = document.getElementById("we");
    let weaddbuttonOb = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode, weaddbuttonOb);
}

function addnewAQfield(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ," Enter here")

    let aqOb= document.getElementById("aq");
    let aqaddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode,aqaddbuttonOb);
    
}

function addnewCRfield(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('crfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ," Enter here")

    let crOb = document.getElementById("cr");
    let craddbuttonOb = document.getElementById("craddbutton");

    crOb.insertBefore(newNode,craddbuttonOb);
}


function addnewsoftskillfield(){

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('softskillfield');
    newNode.classList.add("mt-2");
    // newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ," Enter here")
    
    let ssOb = document.getElementById("ss");
    let ssaddbuttonOb = document.getElementById("ssaddbutton");

    ssOb.insertBefore(newNode, ssaddbuttonOb);
}

function addnewhardskillfield(){

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('hardskillfield');
    newNode.classList.add("mt-2");
    // newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder" ," Enter here")
    
    let hsOb = document.getElementById("hs");
    let hsaddbuttonOb = document.getElementById("hsaddbutton");

    hsOb.insertBefore(newNode, hsaddbuttonOb);
}


// generating cv 

function generatecv(){
    // console.log("genrating baby")

    let namefield = document.getElementById("namefield").value;
    let namefT= document.getElementById("namefT")

    let middlenamefield = document.getElementById("middlenamefield").value;
    let namemT= document.getElementById("namemT")

    let lastfield = document.getElementById("lastfield").value;
    let namelT= document.getElementById("namelT")

     
     namefT.innerHTML= namefield;
     namemT.innerHTML= middlenamefield;
     namelT.innerHTML= lastfield;

    document.getElementById("namefT2").innerHTML = namefield;
    document.getElementById("namemT2").innerHTML = middlenamefield;
    document.getElementById("namelT2").innerHTML = lastfield;


    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailfield").value;
    document.getElementById("SET").innerHTML = document.getElementById("Professionfield").value;
    document.getElementById("cityT").innerHTML = document.getElementById("Cityfield").value;
    document.getElementById("stateT").innerHTML = document.getElementById("Statefield").value;
    document.getElementById("countryT").innerHTML = document.getElementById("countryfield").value;
    document.getElementById("linkdlnT").innerHTML= document.getElementById("Linkedlnid").value;
    document.getElementById("githubT").innerHTML = document.getElementById("Githubid").value;


    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;
// work experience feild 
    let we= document.getElementsByClassName("wefield")
    let str= "";

    for (let e of we)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;

    // academic education

    let aq = document.getElementsByClassName("aqfield");
    let str1="";
    for(let e of aq){
        str1 = str1 + `<li> ${e.value} </li>` ;
    }
    document.getElementById('AqT').innerHTML = str1;

    // clubs and responsibilities

    let cr= document.getElementsByClassName("crfield")
    let str2 ="";
    for(let e of cr){
        str2 = str2 + `<li> ${e.value} </li>`;

    }
    document.getElementById("crT").innerHTML = str2;


    // skills

    let ss= document.getElementsByClassName("softskillfield")
    let str3= "";

    for (let e of ss)
    {
        str3 = str3 + `<li> ${e.value} </li>`;
    }

    document.getElementById('SkillT').innerHTML = str3;

    

    let hs= document.getElementsByClassName("hardskillfield")
    let str4 = "";

    for (let e of hs)
    {
        str4 = str4 + `<li> ${e.value} </li>`;
    }

    document.getElementById('SkillT2').innerHTML = str4;

// setting image 

let file= document.getElementById("profileField").files[0];
console.log(file);
let reader = new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);

// set image to template
reader.onloadend = function(){
    document.getElementById("imgtemplate").src = reader.result;
}

    
    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}

function Printcv(){
    window.print();
}