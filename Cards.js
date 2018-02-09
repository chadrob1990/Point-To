// JavaScript Document

//		Setting Slide Out
		$(function(){
			$('.nav-toggle').on('click', function(){
				$('.main-navigation').toggleClass('open');
			});
		});

//		Setting Rule Slide Out Left
		$(function(){
			$('.nav-toggle2').on('click', function(){
				$('.rulesleft').toggleClass('open');
			});
		});
		
//		Game Rule Slide Out Right
		$(function(){
			$('.nav-toggle3').on('click', function(){
				$('.rulesright').toggleClass('open');
			});
		});
		
//		Next Button Drop On Slide 
		$(function(){
			$('.nav-toggle4').on('click', function(){
				$('.rulenext').toggleClass('open');
			});
		});
		
//		Playing Slide 
		$(function(){
			$('.nav-toggle5').on('click', function(){
				$('.playing').toggleClass('open');
			});
		});

//		Main Page Slide 
		$(function(){
			$('.nav-toggle5').on('click', function(){
				$('.page-content').toggleClass('open');
			});
		});

//		  Compass Icon Function
          function init() {
            var compass = document.getElementById('compass');
            if(window.DeviceOrientationEvent) {
              window.addEventListener('deviceorientation', function(event) {
                    var alpha;
					
                    //Check for iOS property
                    if(event.webkitCompassHeading) {
                      alpha = event.webkitCompassHeading;
					  
                      //Rotation is reversed for iOS
                      compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                    }
					
                    //non iOS
                    else {
                      alpha = event.alpha;
                      webkitAlpha = alpha;
                      if(!window.chrome) {
						  
                        //Assume Android stock (this is crude, but good enough for our example) and apply offset
                        webkitAlpha = alpha-270;
                      }
                    }
                    compass.style.Transform = 'rotate(' + alpha + 'deg)';
                    compass.style.WebkitTransform = 'rotate('+ alpha + 'deg)';
					
                    //Rotation is reversed for FF
                    compass.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 
                  }, false);
            }
          }
		  
//		Sound
		var bleep = new Audio();
		bleep.src = "Audio/CardFlip.mp3";
		
//		Cards
        var numbers = ["Person most likely to show up to a party without beer.", "Person most likely to do the MLS ice bucket challenge, but not donate any money.", "Person most likely to fart during sex.", "Person most likely to lose their phone.", "Person most likely to get in a car accident.", "Person most likely to get caught picking their nose.", "Person most likely to spend the night in jail.", "Person most likely to end up on Jerry Springer.", "Most likely to have not showered today.", "Most likely to dress up as a clown on the weekends.", "Most likely to be preparing for the Zombie Apocalypse.", "Most likely to get in a fight.", "Most addicted to coffee.", "Person that gets the most buck wild when drunk.", "Person that hates their job the most.", "Person that complains the most.", "The person most addicted to social media.", "Most likely to go on a hike, get lost, and die.", "Worst at chugging beer.", "Least athletic.", "Worst singer.", "Worst at reading a GPS.", "Worst driver.", "Worst at monopoly.", "Has the worst farts.", "Hardest person to convince to go out.", "The rule Nazi of the group.", "Biggest procrastinator.", "Most successful.", "Person you most want to road trip with.", "Person you would pick to be on your dodgeball team.", "Most likely to survive a month in the wilderness.", "Person with the best sense of style.", "Most likely to become a multi-millionaire.", "Luckiest person.", "Best eyes.", "Best smile.", "Funniest.", "Most talented.", "Best wrestler."];

        function generateNumbers()
        {
             numbers.push("Person most likely to show up to a party without beer.", "Person most likely to do the MLS ice bucket challenge, but not donate any money.", "Person most likely to fart during sex.", "Person most likely to lose their phone.", "Person most likely to get in a car accident.", "Person most likely to get caught picking their nose.", "Person most likely to spend the night in jail.", "Person most likely to end up on Jerry Springer.", "Most likely to have not showered today.", "Most likely to dress up as a clown on the weekends.", "Most likely to be preparing for the Zombie Apocalypse.", "Most likely to get in a fight.", "Most addicted to coffee.", "Person that gets the most buck wild when drunk.", "Person that hates their job the most.", "Person that complains the most.", "The person most addicted to social media.", "Most likely to go on a hike, get lost, and die.", "Worst at chugging beer.", "Least athletic.", "Worst singer.", "Worst at reading a GPS.", "Worst driver.", "Worst at monopoly.", "Has the worst farts.", "Hardest person to convince to go out.", "The rule Nazi of the group.", "Biggest procrastinator.", "Most successful.", "Person you most want to road trip with.", "Person you would pick to be on your dodgeball team.", "Most likely to survive a month in the wilderness.", "Person with the best sense of style.", "Most likely to become a multi-millionaire.", "Luckiest person.", "Best eyes.", "Best smile.", "Funniest.", "Most talented.", "Best wrestler.");
			    
        }
		
//		Next Card Function
        function spin()
        {
           
//			Refresh the Array		   
		    if(numbers.length==0)
            {
				
                // then we've used  up all available numbers..start new game or whatever you need to do..
                alert("Shit we ran out of card!");
                generateNumbers();
            }
            var rand = Math.floor(Math.random()*numbers.length); // select an index randomly based on the number of remaining available numbers..
            var num = numbers[rand];
            numbers.splice(rand,1); // remove the number we selected so it can't be selected next time..
            document.getElementById("cardaction").innerHTML = num;
        }			  		  		  		  		