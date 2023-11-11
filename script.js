let currentHour = dayjs().format('H');

$(function () {

  // save button
  $('.saveBtn').on('click', function() {
    // local storage id
    let id = $(this).parent().attr('id');
    
    // user entry
    let userEntry = $(this).prev().val();


    //saving into localStorage
    localStorage.setItem(id, userEntry)

    console.log('stored - id: ' + id + ' entry: ' + userEntry);
  })


  // class setters
  // before 9am
  if (currentHour < 9){
    for(let i = 9; i < 18; ++i) {
      $(`#hour-${i}`).addClass('future');
    }
  }
  //after 5pm
  else if (currentHour > 17){
    for(let i = 9; i < 18; ++i) {
      $(`#hour-${i}`).addClass('past');
    }
  } 
  else {
    //past
    for(let i = 9; i < currentHour; ++i){
      $(`#hour-${i}`).addClass('past');
    }

    //present
    $(`#hour-${currentHour}`).addClass('present');

    //future
    for(let i = currentHour + 1; i < 18; ++i){
      $(`#hour-${i}`).addClass('future');
    }
  }

  //local storage getter
  for(let i = 9; i < 18; i++) {
    let event = localStorage.getItem(`hour-${i}`);

    $(`#hour-${i}`).children('textarea').val(event);
  }

  //display current date
  $('#currentDay').text(dayjs().format('dddd, MMMM D') + ' | hour: ' + currentHour);
});
