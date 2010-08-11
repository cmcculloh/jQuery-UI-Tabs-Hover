$.extend( $.ui.tabs.prototype, {
	hover: function(hoverOn, hoverOff) {
		var self = this,
			o = this.options;

		self.element.find("li.ui-tabs-nav-item a").hover(hoverOn,hoverOff);
	}
});