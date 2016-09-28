$(".animsition").animsition({
  inClass:'fade-in-left-lg',
  outClass:'fade-out-left-lg',
  linkElement: 'header a',
  inDuration: 500,
  outDuration: 500
});

$(".header").sticky();

$(".header").on('sticky-start', function(){
$(".description").html("We build <strong>GREAT</strong> Apps");
});
$(".header").on('sticky-end', function(){
$(".description").html("We build Apps");
});
