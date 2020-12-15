$(function(){
  $('.btn').click(function(){
    var href=$(this).attr("href");
    switch(href)
    {
      case '#1':
      var target=$('#btn1');
      break;
      case '#2':
      var target=$('#btn2');
      break;
      case '#3':
      var target=$('#btn3');
      break;
      case '#4':
      var target=$('#btn4');
      break;

    }

    var position=target.offset();
    $('html,body').animate({'scrollTop':(position.top)},'slow');
  });
  $('.top').bgSwitcher({
    images:['fv-bgi_02@2x.jpg'],
    interval:8000,
    effect:"fade",
    duration:500,
  });



});
