$(document).ready(function()
{	
							//tabs
	$('#content1').show();
	$('#tab1').addClass('tab');						
	$('#tab1').click(function()
	{
		$('#content1').show();
		$('#content2,#content3,#content4').hide();
		$('#tab1').addClass('tab');
		$('#tab2,#tab3,#tab4').removeClass('tab');
	});
	$('#tab2').click(function()
	{
		$('#content2').show();
		$('#content1,#content3,#content4').hide();
		$('#tab2').addClass('tab');
		$('#tab1,#tab3,#tab4').removeClass('tab');
	});
	$('#tab3').click(function()
	{
		$('#content3').show();
		$('#content1,#content2,#content4').hide();
		$('#tab3').addClass('tab');
		$('#tab1,#tab2,#tab4').removeClass('tab');
	});
	$('#tab4').click(function()
	{
		$('#content4').show();
		$('#content1,#content3,#content2').hide();
		$('#tab4').addClass('tab');
		$('#tab1,#tab3,#tab2').removeClass('tab');
	});

								//hover on stars
	$('.star, .star1, .star2, .star3, .star4').addClass('starclick');
	$('p').html("<b>You rated us 5! Thank you</b>");							
	$('.star').hover(function()
	{
		$(this).toggleClass('starhvr');
	});
	$('.star1').hover(function()
	{
		$('.star, .star1').toggleClass('starhvr');
	});
	$('.star2').hover(function()
	{
		$('.star, .star1, .star2').toggleClass('starhvr');
	});
	$('.star3').hover(function()
	{
		$('.star, .star1, .star2, .star3').toggleClass('starhvr');
	});
	$('.star4').hover(function()
	{
		$('.star, .star1, .star2, .star3, .star4').toggleClass('starhvr');
	});
									//click on stars
	$('.star').click(function()
	{
		$(this).addClass('starclick');
		$('.star1, .star2, .star3, .star4').removeClass('starclick');
		$('p').html("<b>You rated us 1! we should improve ourselves</b>");
	});
	$('.star1').click(function()
	{
		$('.star, .star1').addClass('starclick');
		$('.star2, .star3, .star4').removeClass('starclick');
		$('p').html("<b>You rated us 2! Thank you</b>");
	});
	$('.star2').click(function()
	{
		$('.star, .star1, .star2').addClass('starclick');
		$('.star3, .star4').removeClass('starclick');
		$('p').html("<b>You rated us 3! Thank you</b>");
	});
	$('.star3').click(function()
	{
		$('.star, .star1, .star2, .star3').addClass('starclick');
		$('.star4').removeClass('starclick');
		$('p').html("<b>You rated us 4! Thank you</b>");
	});
	$('.star4').click(function()
	{
		$('.star, .star1, .star2, .star3, .star4').addClass('starclick');
		$('p').html("<b>You rated us 5! Thank you</b>");
	});
									//images slider
	var count=0;
	$('.right').click(function()
	{
		count+=1;
			if(count == 1)
			{
				$('#img2').fadeIn();
				$('#img1').hide();
				$('#img3').hide();
			}
			else if(count == 2)
			{
				$('#img3').fadeIn();
				$('#img2').hide();
				$('#img1').hide();
			}
			else if(count == 3)
			{
				$('#img1').fadeIn();
				$('#img3').hide();
				$('#img2').hide();
			    count = 0;  
			}	
	});
	$('.left').click(function()
	{
		count+=1;
			if(count == 1)
			{
				$('#img3').fadeIn();
				$('#img1').hide();
				$('#img2').hide();
			}
			else if(count == 2)
			{
				$('#img2').fadeIn();
				$('#img3').hide();
				$('#img1').hide();
			}
			else if(count == 3)
			{
				$('#img1').fadeIn();
				$('#img2').hide();
				$('#img3').hide();
			    count = 0;  
			}	
	});
 								//lightbox
 	$('#image4').addClass('colour');
 		$('#showimage4').fadeIn(1000);
 		$('#showimage5,#showimage6,#showimage7,#showimage8,#showimage9').hide();
 		$('#image5,#image6,#image7,#image8,#image9').removeClass('colour');
 	$('#image4').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage4').fadeIn(1000);
 		$('#showimage5,#showimage6,#showimage7,#showimage8,#showimage9').hide();
 		$('#image5,#image6,#image7,#image8,#image9').removeClass('colour');
 	});
 	$('#image5').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage5').fadeIn(1000);
 		$('#showimage4,#showimage6,#showimage7,#showimage8,#showimage9').hide();
 		$('#image4,#image6,#image7,#image8,#image9').removeClass('colour');
 	});
 	$('#image6').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage6').fadeIn(1000);
 		$('#showimage5,#showimage4,#showimage7,#showimage8,#showimage9').hide();
 		$('#image5,#image4,#image7,#image8,#image9').removeClass('colour');
 	});
 	$('#image7').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage7').fadeIn(1000);
 		$('#showimage5,#showimage6,#showimage4,#showimage8,#showimage9').hide();
 		$('#image5,#image6,#image4,#image8,#image9').removeClass('colour');
 	});
 	$('#image8').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage8').fadeIn(1000);
 		$('#showimage5,#showimage6,#showimage7,#showimage4,#showimage9').hide();
 		$('#image5,#image6,#image7,#image4,#image9').removeClass('colour');
 	});
 	$('#image9').click(function()
 	{
 		$(this).addClass('colour');
 		$('#showimage9').fadeIn(1000);
 		$('#showimage5,#showimage6,#showimage7,#showimage8,#showimage4').hide();
 		$('#image5,#image6,#image7,#image8,#image4').removeClass('colour');
 	});
 								//modal
 	$('.btn-sm').click(function()
	{
		$('#warning').modal();
	});
	$('#username').hover(function()
	{							
 		$('[data-toggle="tooltip"]').tooltip();
 	});
 								//Typeahead
 	  $(function()
 	  {
    	var Tags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
    		];
    $("#inputid").autocomplete({
      source: Tags
    });
  });
});