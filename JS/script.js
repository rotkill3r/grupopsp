jQuery('document').ready(function($){
	var menuBtm = $('.menu-icono'),
		menu = $('.navegacion ul');

	menuBtm.click(function(){

		if(menu.hasClass ('show')) {

			menu.removeClass ('show');
		} else {

		menu.addClass('show');
	}
	});
});
