/**
 *  makeMeFixed
 *  Jquery Plugin to position a floated element fixed with respect to the screen viewport. Used for sidebars.
 *  Code: https://dejoe.github.com/makeMeFixed
 *  Author: dejoe.tumblr.com
 * 
 */

(function($){
	$.fn.makeMeFixed = function(){

		function setOffset (elem){
			var $this = $(elem);
			var eMarginTop = parseInt($this.css("margin-top"), 10);
			var eMarginLeft = parseInt($this.css("margin-left"), 10);
			var eOffset = $this.offset();

			eOffset.top -= eMarginTop;
			eOffset.left -= eMarginLeft;
			$(elem).css("position","fixed").css(eOffset);
		}

		return this.each(function(){
			var elem = this;
			setOffset(elem);

			$(window).bind ('resize.makeMeFixed',function(){
				$(elem).css("position","static");
				setOffset(elem);
			});

		});
	}
})(jQuery)

