$(document).ready(function()
{
$('h2').hide(2000);
 //slowly hide avuthundi now 2sec -2000/('slow') also use
$('#para').hide(1000);
$('p:first').css('color','red'); //* used all selected
$('ul li:first').css('color', 'blue'); //apply for only first ul li
//$('ul li:first-child').css('color','green'); //apply for every ul first one
$('[class]').css('color','yellow'); //apply for all classes if it have diff classnames also
$('a[target="_blank"]').css('color','pink'); //inner dble quotes ayte out sngle quotes fir it,a-s,inner-dbl
$('a[target!="_blank"]').css('color','black');
$(':button').css('color','white');
$(':text').css('color','red');
$('#num').css('color','red');
});