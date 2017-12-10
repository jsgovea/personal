$( "#hide" ).click(function() {
  $( "#imagen" ).hide( "slow" );
});

$( "#show" ).click(function() {
  $( "#imagen" ).show( "slow" );
});

$( "#imagen" ).click(function() {
  $( "#imagen" ).fadeOut( "slow" );
});

$( "h2" ).click(function() {
  $( "#imagen" ).fadeIn( 3000, function() {
  });
  return false;
});

$( "#slideDown" ).click(function() {
  $( "#imagen" ).slideDown( "slow", function() {
  });
});

$( "#slideUp" ).click(function() {
  $( "#imagen" ).slideUp( "slow", function() {
  });
});

$( "#slideToggle" ).click(function() {
  $( "#imagen" ).slideToggle( "slow", function() {
  });
});

$( "#animate" ).click(function() {
  $( "#imagen" ).animate({
    opacity: .5,
    right: 50,
    height: 400
  }, 5000, function() {
  });
});

$( "#go" ).click(function() {
  $( "#image" ).animate({ left: "+=500" }, 1000 );
});
 
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( ".block" ).animate({ left: "-=100px" }, 2000 );
});