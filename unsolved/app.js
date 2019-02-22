// Declare variables

// hide the entire screen of view in left panel
(function(){
  $(`.content`).hide();
  $(`#name`).hide();
  $(`#officenum`).hide();
  $(`#phoneNum`).hide(); 
  $(`#search`).hide();
  $('#addRecord').hide();
  $('#deleteRecord').hide();  
  $('#verifyRecord').hide();
  $('#updateRecord').hide();
})();


const showEmployeeList = function(){
  $(`.content`).show();
  const render = function() {
    // $('.content').empty();
  
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
}
// Clearning the container where the variables are stored
const clearContent = function(){
  $('.content').empty('');
};

const reset = function(){
  $('#name').val('');
  $(`#officenum`).val('');
  $(`#phoneNum`).val(''); 
};

// Show main variables to search on
const showVar = function(){
  $(`#name`).show();
  $(`#officenum`).show();
  $(`#phoneNum`).show(); 
};

// Hidding used for search/updating
const hideVar = function(){
  $(`#name`).hide();
  $(`#officenum`).hide();
  $(`#phoneNum`).hide();
  $(`#search`).hide();
  $('#addRecord').hide();
  $('#deleteRecord').hide();  
  $('#verifyRecord').hide();
  $('#updateRecord').hide(); 
};

// Show header of selections to add records
const showAdd = function(){
  $('#addRecord').show();
  $('#deleteRecord').hide();
  $('#updateRecord').hide();
  $('#search').hide();
};

// Show header of selections to delete records
const showDelete = function(){
  $('#deleteRecord').show();
  $('#addRecord').hide();
  $('#updateRecord').hide();
  $('#search').hide();
};

// Show header of selections to verify name of record
const showVerify = function(){
  $(`#name`).show();
  $('#addRecord').hide();
  $('#updateRecord').hide();
  $('#deleteRecord').hide();
  $('#search').show();
};

// Update the header to show
const showUpdate = function(){
  $('#addRecord').hide();
  $('#updateRecord').show();
  $('#deleteRecord').hide();
  $('#search').hide();
};


// Show the View of the list only

$('#view').on('click',function(){
  hideVar()
  clearContent();
  showEmployeeList();
});

// Show the view of add once link clicked
$('#add').on('click', function(){
  reset()
  showVar()
  showAdd()
  clearContent();
  showEmployeeList()
});

// Show the view of delete once link clicked
$('#delete').on('click', function(){
  reset()
  showVar()
  showDelete()
  clearContent();
  showEmployeeList()
});


// Show view of item to verify
$('#verify').on('click',function(){
  // showVar()
  showVerify()
  // showEmployeeList()
});

// show view of the update
$('#update').on('click',function(){
  showVar()
  showUpdate()
  clearContent();
  showEmployeeList()
});


// Add Button to add a person

const addName = function() {
  clearContent();
  const nameVal = $('#name').val();
  const OfNum =  $('#officenum').val();
  const phNum =  $('#phoneNum').val();
    console.log(nameVal);
    console.log(OfNum);
    console.log(phNum);
    employeeList.push({name: nameVal, officeNum: OfNum, phoneNum: phNum});
  

  showEmployeeList();

}

$('#addRecord').on('click', addName);
// -----------------------------------------------------------
// button to delete a record


const removeName = function() {
  clearContent();
  const nameVal = $('#name').val();
  console.log(nameVal);
// inside for loop
  for( let i = 0; i < employeeList.length; i++ ){
    if(employeeList[i].name === nameVal){
      console.log(i);
      employeeList.splice(i,1);
    }
    // employeeList.splice(employeeList.indexOf(nameVal), 1);
  }

  // $('#name').val('');
  showEmployeeList();  
}


$('#deleteRecord').on('click', removeName);
// ------------------------------------------------------------
// Button to update variables

const updateName = function() {
  clearContent();
  const nameVal = $('#name').val();
  const OfNum =  $('#officenum').val();
  const phNum =  $('#phoneNum').val();
  console.log(nameVal);
  console.log(OfNum);
  console.log(phNum);
  for (i=0; i < employeeList.length; i++) {
    // Taking into account the case sensetive
    if (employeeList[i].name.toLowerCase() === nameVal.toLowerCase()) {
          employeeList[i].officeNum = OfNum
          employeeList[i].phoneNum = phNum    
    }

  }
  showEmployeeList();
  
}


$('#updateRecord').on('click', updateName);
// ------------------------------------------------------------
// Verify if it exists or not

const verifyInfo= function() {
  clearContent();
  // $('.content').show();
  const nameVal = $('#name').val();

  console.log(nameVal);

  let result = "Not found";
  for (i=0; i < employeeList.length; i++) {
    // Taking into account the case sensetive
    if (employeeList[i].name === nameVal || employeeList[i].name.toLowerCase() === nameVal.toLowerCase()) {
      result = "found"
    }

    
  }
  
  $('.content').append(`<p> ${nameVal} has been ${result} in the employee records </p>`);
  $('.content').show();
  // showEmployeeList();
  result ='';
  $('#name').val(''); 
  
}


$('#search').on('click', verifyInfo);

  
