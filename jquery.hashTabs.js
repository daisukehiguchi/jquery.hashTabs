;(function($) {

	$.fn.hashTabs = function(options) {
	
		var elements = this;
		
		elements.each(function(){
			var opts = $.extend({}, $.fn.hashTabs.defaults, options);
			
			$(this).tabs(
			    {
			        select: function(event, ui) {
			            window.location.hash = ui.tab.hash;
			        },
			        
			        fx: {
			            opacity: opts.opacity,
			            duration: 'normal'
			        }			        
			    }
			);
			
			var tabIndex = {};
			
			$(opts.content).each(function(i){
				var id = $(this).attr('id');
				id = '#' + id;				
				tabIndex[id] = i ; 
			});
			//console.dir(tabIndex); For TEST
			//var tabIndex = {'#tabs_1' : 0, '#tabs_2' : 1, '#tabs_3' : 2};
			$(window).hashchange(function(){
			    var index = tabIndex[window.location.hash];
			    index = index ? index : 0;
			    elements.tabs( "select", index);
			});

		});

		return this; //メソッドチェーンを機能させるため、ちゃんと返しとく 

	};
	

    $.fn.hashTabs.defaults = {
    	content : ".tabCont" ,
    	opacity : "toggle"
    };


})(jQuery);