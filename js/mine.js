$(document).ready(function(){
	
	window.loading_screen = window.pleaseWait({
        logo: "images/start.png",
        backgroundColor: '#2e2e2e',
        loadingHtml: "<div class='spinner'><div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div></div>"});
	
	loading_screen.finish();
	
	
	$("body").niceScroll({cursorcolor:"#2e2e2e"});

	new WOW().init();
	
	$(".smooth").click(function(){
		var link = $(this).attr("href");
		var order = $(link).offset().top;
		$("body , html").animate({scrollTop:order} , 1800)
	})


	
	$(window).scroll(function(){
		if($(window).scrollTop() > 640)
			{
				$("#up").fadeIn(1500)
				$("#set").fadeIn(1000)
			}
		else
			{
				$("#up").fadeOut(1500)
				$("#set").fadeOut(1000)
				$(".colors").fadeOut(1000)
			}
	})
	
	$("#up").click(function(){
		$("body , html").animate({scrollTop: '0'} , 2000)
	})
	
	
	$(".work-info").hover(function(){
		$(this).children("#work-up").slideToggle(500);
		$(this).children("#work-down").fadeToggle(1000);
	})
	
	 
    // colors SECTION
    //----------------
    var li = $(".colors ul li");

    li.eq(0).css("backgroundColor" , "#1F52B2")	
    li.eq(1).css("backgroundColor" , "#820333")	
    li.eq(2).css("backgroundColor" , "#583F8C")
    li.eq(3).css("backgroundColor" , "#74702E")
    li.eq(4).css("backgroundColor" , "#73BF00")
    
    $(".colors ul li").click(function(){
        var z = $(this).css("backgroundColor")
        $(".c-chg").css("color" , z)
		$(".b-chg").css("backgroundColor" , z)
		$(".o-chg").css("borderColor" , z)		
    })
    
    $("#set").click(function(){
        $(".colors").toggle()
    })
	
	
})