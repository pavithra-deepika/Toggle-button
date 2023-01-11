const resultElement=document.getElementById('resultElement')

let showh1flag=true

function displayFunction(){
    
    resultElement.innerHTML=""

    if(showh1flag){

        const h1Element=document.createElement('h1');
        h1Element.innerHTML="hello World";
        resultElement.appendChild(h1Element)
    }
}

function showH1(){
    showh1flag=true
    displayFunction()
}

function hideH1(){
    showh1flag=false
    displayFunction()
}