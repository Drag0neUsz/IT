function timer()
{
  var today = new Date();
    var hour = today.getUTCHours()+1;
    if(hour<10) hour ="0"+hour;
      var minute = today.getUTCMinutes();
      if(minute<10) minute ="0"+minute;
        var second = today.getUTCSeconds();
        if(second<10) second ="0"+second;
  document.getElementById("clock").innerHTML =
  hour+":"+minute+":"+second;
  
   setTimeout("timer()",1000);

}
