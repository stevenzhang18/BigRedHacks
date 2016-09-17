var oldValue='';
var arrBad = [];
function updateCount(){
  var count=140;
  count-=$("#message").val().length;
  count-=$("#name").val().length;


  $("#alert").html("You have "+count+" characters remaining");
  if(count<0){
    $("input[type=submit]").attr('disabled','disabled');
  }
  else if($("#name").val().length>0&&!$("#name").val().startsWith('@')){
    // $("input[type=div]").attr('disabled','disabled');
    $("#submit").css("pointer-events","none");
    $("#alert").html("Include the @ in front of the username!");

  }
  else{
    $("#submit").css("pointer-events","all");

  }
  var curse = false;
  for(var i=0;i<arrBad.length;i++){
    var temp=$("#message").val().toLowerCase();
    if(temp.includes(arrBad[i])){
      curse=true;
    }
  }
  if(curse)
  $("#submit").css("pointer-events","none");



}

$('#message').keyup(updateCount);
$('#message').keydown(updateCount);
$('#name').keyup(updateCount);
$('#name').keydown(updateCount);




//document.getElementById('message').onkeyup = test();


// $("#alert").html($("#message").value);
// $("#alert").html("lick");
