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
// Clearning the container where the variables are stored
const clearContent = function(){
  $('.content').empty('');
};

// Show main variables to search on
const showVar = function(){
  $(`#name`).show();
  $(`#officenum`).show();
  $(`#phoneNum`).show(); 
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
  $(`#search`).hide();
  $('#addRecord').hide();
  $('#deleteRecord').hide();  
  $('#verifyRecord').hide();
  $('#updateRecord').hide();
  clearContent();
  showEmployeeList();
});

// Show the view of add once link clicked
$('#add').on('click', function(){
  showVar()
  showAdd()
  clearContent();
  showEmployeeList()
});

// Show the view of delete once link clicked
$('#delete').on('click', function(){
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
// $('.content').removeClass(nameVal)


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

const updateName = function() {
  clearContent();
  const nameVal = $('#name').val();
  const OfNum =  $('#officenum').val();
  const phNum =  $('#phoneNum').val();
  console.log(nameVal);
  console.log(OfNum);
  console.log(phNum);
  for (i=0; i < employeeList.length; i++) {

    if (employeeList[i].name.toLowerCase() === nameVal.toLowerCase()) {
          employeeList[i].officeNum = OfNum
          employeeList[i].phoneNum = phNum    
    }

  }
  showEmployeeList();
  
}


$('#updateRecord').on('click', updateName);
// ------------------------------------------------------------

const verifyInfo= function() {
  clearContent();
  // $('.content').show();
  const nameVal = $('#name').val();

  console.log(nameVal);

  let result = "Not found";
  for (i=0; i < employeeList.length; i++) {

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

  

  
//   console.log('#name');
//   const oldRecord = employeeList.indexOf('#name');
//   console.log(oldRecord);
//   ${employeeList[i].name} 
// }

// If name matches then yes vs no
// $('#addRecord').on('click',function(){
//   $('.container').
// }

// If name matches then  Delete 

// $('#deleteRecord').on('click',function(){
//     const change = $('#name');
//     const oldRecord = employeeList.indexOf(change);
//     console.log(change);
//     console.log('#name');
//     console.log('oldRecord');
//     if (oldRecord != -1){

//       $('.container').removeClass(oldRecord);  
//       } 
//       console.log('.container');
//     });
 // 



// if name matches then push to the bottom of the list **Add

  // let found = employeeList.find(function(element){
  //   if('#name' === $('.content')){
  //     return 'Yes';
  //   }else
  //     return 'No';
    
  // }  

//   console.log(found);

// const showExist = function(){
//   for( let i = 0; i < employeeList.length; i++ ){
//     $('.content').push
//   }
// }

// for( let i = 0; i < employeeList.length; i++ ) {
//   $('.content').append(`<br> 
//                         <div class="card boarder" style="width: 18rem;">
//                             <p>${employeeList[i].name} </p>
//                             <p>${employeeList[i].officeNum}</p> 
//                             <p>${employeeList[i].phoneNum}</p>
//                         </div> `);

// }




// $('#addRecord').on('click',function(){
//  if('#name' === )

// });
// If name matches then update -> based on the entry of the 

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
//   case '^':
//     result = num1 ** num2;
//     break;
// }