
	$(document).ready(function(){
		var userPrompt = $('#intro-username');
		var listingPrompt = $('#listing-name');
		var userPromptConfirm = $('.intro-username-confirm');
		var listingPromptConfirm = $('#listing-name-confirm');
		var welcomeConfirm = $('.welcome-button');
		// **********************************************************************
		// This measures up how much padding top it needs for the intro section
		// to that the content is always centered
		// **********************************************************************
		var windowHeight = $(window).height();
		var navHeight = $('nav').height();
		var contentHeight= windowHeight - (navHeight);
		var centeredContent = (windowHeight /3) - 40;
		$('.intro-container').css('min-height',windowHeight);
		$('.intro-container').css('padding-top',centeredContent);
		$(window).on('resize', function(event){
			var windowHeight = $(window).height();
			var navHeight = $('nav').height();
			var contentHeight= windowHeight - (navHeight);
			var centeredContent = (windowHeight /3) - 40;
		$('.intro-container').css('min-height',windowHeight);
		$('.intro-container').css('padding-top',centeredContent);
		});
		// **********************************************************************
		// Fade in intro message
		// **********************************************************************
		$('.intro-message-one').delay(600).animate({'opacity':'1'},300);
		$('.intro-message-two').delay(1800).animate({'opacity':'1'},300);
		$('.input-group').delay(2400).animate({'opacity':'1'},300);
		// **********************************************************************
		// This allows for the user to press and enter instead of clicking submit
		// **********************************************************************
			userPrompt.bind("enterKey",function(e){
  				userPromptConfirm.click();
			});
			userPrompt.keyup(function(e){
    			if(e.keyCode == 13){
    				$(this).trigger("enterKey");
    			}
			});
			listingPrompt.bind("enterKey",function(e){
  				listingPromptConfirm.click();
  				console.log('test');
			});
			listingPrompt.keyup(function(e){
    			if(e.keyCode == 13){
    				$(this).trigger("enterKey");
    			}
			});
		// **********************************************************************
		// Validation function for both user prompt and and following animation
		// **********************************************************************
			userPromptConfirm.click(function(e){
				var userPrompt = $('#intro-username').val();
				e.preventDefault();
				if( userPrompt == ''){
					console.log('No name entered, please try again.');
					return false;
				}else{
					$('.user-name').text(userPrompt);
					$('.welcome-text').text('Nice to meet you ' + userPrompt +'.');
					$('.user-prompt').animate({'opacity':'0'},300).delay(600).queue(function(nxt){
      				$(this).css('display','none');
     				 	nxt();
     				})
					$('.welcome-message').delay(1000).queue(function(nxt){
      				$(this).css('display','block');
     				 	nxt();
     				}).animate({'opacity':'1'},300);
					$('.welcome-button').delay(1800).queue(function(nxt){
      				$(this).css('display','block');
     				 	nxt();
     				}).animate({'opacity':'1'},300);
			};
				});
		// **********************************************************************
		// Animation for the welcome button
		// **********************************************************************
		welcomeConfirm.click(function(){
			$('.intro-container').animate({'opacity':'0'},300).delay(600).queue(function(nxt){
   			$(this).css('display','none');
  				 nxt();
  				})
			$('.list-container').delay(1000).queue(function(nxt){
   			$(this).css('display','block');
  				 nxt();
  				}).animate({'opacity':'1'},300);

		});
		// **********************************************************************
		// Validation for the listing prompt
		// **********************************************************************
		// listingPromptConfirm.click(function(e){
		// 	e.preventDefault();
		// 	var listingPrompt = $('#listing-name').val();
		// 	if( listingPrompt.length == 0){
		// 		console.log('nothing here')
		// 		return false;
		// 	}
		// });
	});
