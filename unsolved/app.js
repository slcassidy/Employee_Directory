// Declare variables



// Allowing the list to be visiable on the page **aka rendered on the page**
const render = function() {
    $('.content').empty();
  
    // Adding the card to have a box around the names
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<br> 
                            <div class="card boarder" style="width: 18rem;">
                                <p>${employeeList[i].name} </p>
                                <p>${employeeList[i].officeNum}</p> 
                                <p>${employeeList[i].phoneNum}</p>
                            </div> `);

    }
  }
  
  render();

// Clean version testing to make sure the variables are brought over
//   const render = function() {
  
//     for( let i = 0; i < employeeList.length; i++ ) {
//       $('.content').append(`<p>${employeeList[i].name}</p>`);
//       $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
//       $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);  

//     }
//   }
  
//   render();


(function(){
    $(`#name`).hide();
})();



  
  