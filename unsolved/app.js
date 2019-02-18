// Declare variables
// employeeList.name();


// Allowing the list to be visiable on the page **aka rendered on the page**
const render = function() {
    // $('.content').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<p>${this.name[i]}</p>`);
    //   console.log(`Employee Name: ${employeeList.name}`);
    }
  }
  
  render();
  