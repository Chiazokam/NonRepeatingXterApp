window.addEventListener('DOMContentLoaded', function(){

  let submitButton = document.querySelector("#submit");
  let refreshButton = document.querySelector("#refresh");
  let inputElement = document.querySelector("input");
  let spanUnique = document.querySelector("#spanUnique");
  let spanWord = document.querySelector("#spanWord");
  let divDisplay =document.querySelector("#result");

  function nonRepeatChar(alphaString){
   let countChar = 0;
    for (let m = 0; m<alphaString.length; m++){
      for (let n = 0; n<alphaString.length; n++){
        if (alphaString[m] === alphaString[n]){
           countChar++;
        }
      }
      if (countChar === 1){
        return alphaString[m];
        break;
      } else {
        countChar = 0;
      }
    }
    return "No unique character";
  }

  function addDynamicDiv(innerHTMLString, divId){
    //Create new div and append to parent 'result'
    newDiv = document.createElement('div');
    newDiv.id = divId; //Gives the dynamically created div an id
    newDiv.innerHTML = innerHTMLString; //Give the new div some content
    divDisplay.appendChild(newDiv); //Append new div to parent div
    divDisplay.style.visibility = 'visible';
  }

  function detOtherChars(alphaString){
    let otherChars = "!\"#$%&’()*+,-./:`;<=>?@[\\]^_‘{|}~0123456789";
    let countOtherChar = 0;
    for (let i = 0; i < otherChars.length; i++){
      let otherChar = otherChars[i];
      if (alphaString.indexOf(otherChar) !== -1){
        //if there is a special character
        countOtherChar++;
      }
    }
    if (countOtherChar > 0){
      return true;   //There's a special xter
    }
    else {
      return false;
    }
  }

  submitButton.addEventListener('click', function(){
    let alphaString = inputElement.value;
    if (detOtherChars(alphaString)){
      innerHTMLString = "Please remove the non-alphabets from '" + alphaString + "'";
      addDynamicDiv(innerHTMLString, "divError");
      inputElement.value = '';
    }
    else {
      let uniqueCharDisplay = nonRepeatChar(alphaString.toLowerCase());
      if (alphaString === ''){
        innerHTMLString = "' " + alphaString + "' is unique enough!";
        addDynamicDiv(innerHTMLString, "dynamicDiv");
        inputElement.value = '';
      }
      else if (uniqueCharDisplay === "No unique character"){
        innerHTMLString = "No unique character in '" + alphaString + "'";
        addDynamicDiv(innerHTMLString, "dynamicDiv");
        inputElement.value = '';
      }
      else {
        innerHTMLString = "The first Unique character in '" + alphaString + "' is '" + uniqueCharDisplay + "'";
        addDynamicDiv(innerHTMLString, "dynamicDiv");
        inputElement.value = '';
      }
    }
  });

  refreshButton.addEventListener('click', function(){
    //Remove dynamic div with id 'dynamicDiv' from the parent
    let dynamicDiv = document.querySelector("#dynamicDiv");
    let divError = document.querySelector("#divError");
    if (dynamicDiv){
      result.removeChild(dynamicDiv);
      inputElement.value = '';
    }
    else if (divError){
      result.removeChild(divError);
      inputElement.value = '';
    }

  })
});
