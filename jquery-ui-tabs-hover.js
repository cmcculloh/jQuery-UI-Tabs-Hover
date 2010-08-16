;(function($){
	$.extend( $.ui.tabs.prototype, {
		hover: function(hoverOn, hoverOff) {
			var self = this,
				o = this.options;

			self.element.find("li a").hover(hoverOn,hoverOff);
		}
	});
})(jQuery);