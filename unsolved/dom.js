const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);

  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }
  
  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  // FUNCTIONS
  // 1. A function `addClass` that takes in a className as a string and adds that class to every element in the nodelist. 
  const addClass = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(content); 
    }  
  }


  // 2. A function `removeClass` that takes in a className as a string and removes that class from every element in the
  //  nodelist.
  const removeClass = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(content); 
    }  
  }
  // 3. A function `toggleClass` that takes in a className as a string and adds that class if the class does 
  // not exist on each element or removes that class from every element in the nodelist on which it does currently exist.
  const toggleClass = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(content); 
    }  
  }
  // 4. A function `empty` that sets the innerHTML of every element in the nodelist to an empty string.  
  const empty = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = "";
    }  
  }
  // 5. A function `append` takes in a string and adds that string on to the end of the `innerHTML` of every element in the nodelist. (Note that the `html` function _replaces_ the existing HTML, where this function adds to it.)
  const append = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content;
    }  
  }
  // 6. A function `prepend` takes in a string and adds that string on to the beginning of the `innerHTML` of every
  //  element in the nodelist. (Note that the `html` function _replaces_ the existing HTML, where this function adds to it.)
  const prepend = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;      
    }  
  }
  // 7. A function `val` that optionally takes in a string and gets the value of the input on the first element 
  // in the nodelist if a string is not passed in. Otherwise, it sets the value on the first element in the nodelist 
  // to the string. (This function is used to get values from input HTML elements. i.e. to get user input from a form.)
  const val = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      if(content == undefined){
        return nodeList[0].value;  
      }else{
        return nodeList[0] = content;  
      }
    }  
  }
  // 8. A function `on` that takes two strings, one that represents an `event` and one the represents a callback function. 
  const on = function(evt, cb){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(evt, cb);
      // evt what we want the event to respond to
      // cb = callback ~Can call it anyting but it will always be the callback
    }  
  }

  const show = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = '';
    }  
  }

  const hide = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = `none`;
    }  
  }


  // Remember to return each of these functions!
  return {
    text: text,
    html: html,
    on: on,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    val: val

  };
}