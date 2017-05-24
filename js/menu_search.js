function afficher_cross() {
 
	$("#burger").css('display','none');
	$( "#cross" ).css( "display", "block" );
	$(".menu").css("display", "block");
	cache_search();
 
}

function afficher_burger() {
 
	$("#burger").css('display','block');
	$( "#cross" ).css( "display", "none" );
	$(".menu").css("display", "none");
	
 
}
function afficher_search() {
 
	$(".clic_search").css("display", "block" );
	$("#search2").css('display','block');
	$("#search").css('display','none');
	afficher_burger();
	 
}

function cache_search() {
 
	$(".clic_search").css("display", "none" );
	$("#search").css('display','block');
	$("#search2").css('display','none');
 
}