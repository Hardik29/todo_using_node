$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};//getting value from input tag and storing in vriable

      $.ajax({
        type: 'POST',//posting request 
        url: '/todo',
        data: todo,//if this is sucess add value to todo araay in todocontroller 
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){//its on click handler 
      var item = $(this).text().trim().replace(/ /g, "-");// trim to remove white spaces and replces is by -
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
