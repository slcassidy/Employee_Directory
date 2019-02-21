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


// const hideAll = function(){
//   $(`.content`).hide();
//   $(`#name`).hide();
//   $(`#officenum`).hide();
//   $(`#phoneNum`).hide(); 
//   $(`#search`).hide();
//   $('#addRecord').hide();
//   $('#deleteRecord').hide();  
//   $('#verifyRecord').hide();
// };

// hideAll();

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

// Show main variables to search on
const showVar = function(){
  $(`#name`).show();
  $(`#officenum`).show();
  $(`#phoneNum`).show(); 
};

// Show header of selections to add records
const showAdd = function(){
  // $(`#name`).show();
  // $(`#officenum`).show();
  // $(`#phoneNum`).show(); 
  $('#addRecord').show();
  $('#deleteRecord').hide();
  $('#updateRecord').hide();
  $('#search').hide();
};

// Show header of selections to delete records
const showDelete = function(){
  // $(`#name`).show();
  // $(`#officenum`).show();
  // $(`#phoneNum`).show(); 
  $('#deleteRecord').show();
  $('#addRecord').hide();
  $('#updateRecord').hide();
  $('#search').hide();
};

// Show header of selections to verify name of record
const showVerify = function(){
  // $(`#name`).show();
  // $(`#officenum`).hide();
  // $(`#phoneNum`).hide(); 
  $('#addRecord').hide();
  $('#updateRecord').hide();
  $('#deleteRecord').hide();
  $('#search').show();
};

// Update the header to show
const showUpdate = function(){
  // $(`#name`).show();
  // $(`#officenum`).hide();
  // $(`#phoneNum`).hide(); 
  $('#addRecord').hide();
  $('#updateRecord').show();
  $('#deleteRecord').hide();
  $('#search').hide();
};


// Show the View of the list only
$('#view').on('click',function(){
  $(`#search`).hide();
  $('#addRecord').hide();
  $('#deleteRecord').hide();  
  $('#verifyRecord').hide();
  $('#updateRecord').hide();
  showEmployeeList();
});

// Show the view of add once link clicked
$('#add').on('click', function(){
  showVar()
  showAdd()
  showEmployeeList()
});

// Show the view of delete once link clicked
$('#delete').on('click', function(){
  showVar()
  showDelete()
  showEmployeeList()
});


// Show view of item to verify
$('#verify').on('click',function(){
  showVar()
  showVerify()
  showEmployeeList()
});

// show view of the update
$('#update').on('click',function(){
  showVar()
  showUpdate()
  showEmployeeList()
});








  
  