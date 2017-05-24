	function afficher_cross() {
 
$("#burger").css('display','none');
$( "#cross" ).css( "display", "block" );
 
}

	function afficher_burger() {
 
$("#burger").css('display','block');
$( "#cross" ).css( "display", "none" );
 
}
function afficher_search() {
 
$(".clic_search").css("display", "block" );
$("#search2").css('display','block');
$("#search").css('display','none');
 
}

function cache_search() {
 
$(".clic_search").css("display", "none" );
$("#search").css('display','block');
$("#search2").css('display','none');
 
}