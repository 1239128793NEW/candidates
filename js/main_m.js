$(document).ready(function() {


	$( "#questions__blocList_0 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      // $( "#questions__blocList_0" ).fadeOut( 500 );
	      // $( "#questions__blocList_1" ).fadeIn( 500 );
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_0" ).removeClass("show");
	      $( "#questions__blocList_1" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_1 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_1" ).removeClass("show");
	      $( "#questions__blocList_2" ).addClass("show");
	    }, 500);
    });


    $( "#questions__blocList_2 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_2" ).removeClass("show");
	      $( "#questions__blocList_3" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_3 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_3" ).removeClass("show");
	      $( "#questions__blocList_4" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_4 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_4" ).removeClass("show");
	      $( "#questions__blocList_5" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_5 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_5" ).removeClass("show");
	      $( "#questions__blocList_6" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_6 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_6" ).removeClass("show");
	      $( "#questions__blocList_7" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_7 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_7" ).removeClass("show");
	      $( "#questions__blocList_8" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_8 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_8" ).removeClass("show");
	      $( "#questions__blocList_9" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_9 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_9" ).removeClass("show");
	      $( "#questions__blocList_10" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_10 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_10" ).removeClass("show");
	      $( "#questions__blocList_11" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_11 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_11" ).removeClass("show");
	      $( "#questions__blocList_12" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_12 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_12" ).removeClass("show");
	      $( "#questions__blocList_13" ).addClass("show");
	    }, 500);
    });

    $( "#questions__blocList_13 .questions__item" ).click(function() {
	   	setTimeout(function() {
	      $( ".questions__item" ).removeClass("active");
	      $( "#questions__blocList_13" ).removeClass("show");
	      $( "#end" ).addClass("show");
	      $('.testResultItem:visible').hide().siblings().eq(Math.floor(Math.random() * 9)).show();
	      $( ".h3__test" ).hide( 250 );
	      $( ".h3__resul" ).show( 400 );
	      $( ".h3__resul" ).addClass("active");
	    }, 500);
    });

    $( "#startText" ).click(function() {
	   	setTimeout(function() {
	      $( "#questions__blocList_0" ).addClass("show");
	      $( "#end" ).removeClass("show");
	      $( ".h3__test" ).show( 400 );
	      $( ".h3__resul" ).hide( 250 );
	      $( ".h3__test" ).addClass("active");
	    }, 500);
    });


    $('.questions__item:nth-of-type(2)').click(function(){
	  $('.questions__item:nth-of-type(2)').addClass('active');
	});
	$('.questions__item:nth-of-type(3)').click(function(){
	  $('.questions__item:nth-of-type(3)').addClass('active');
	});
	$('.questions__item:nth-of-type(4)').click(function(){
	  $('.questions__item:nth-of-type(4)').addClass('active');
	});
	$('.questions__item:nth-of-type(5)').click(function(){
	  $('.questions__item:nth-of-type(5)').addClass('active');
	});

	$('#burger').click(function(){
	  $('#menu').toggleClass('active');
	});
	$('#menuClose').click(function(){
	  $('#menu').toggleClass('active');
	});

	$('.menuItem').click(function(){
	  $('#menu').toggleClass('active');
	});

});