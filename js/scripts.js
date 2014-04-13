$(document).ready(function(){
	$("a").hover(function(){
        if ($(this).attr("href") == "#"){
            $(".coderun").text("run #" + $(this).attr("id") + "");
        }else{
		if ($(this).attr("target")){
			$(".coderun").text("cd (" + $(this).attr("href") + ", " + $(this).attr("target") + ")");
		}else{
			$(".coderun").text("cd " + $(this).attr("href"));
		}
        }
        $(".blink").addClass("doanimation");
	}, function(){
		$(".coderun").text("");
        $(".blink").removeClass("doanimation");
	});
    $("code").hover(function(){
        $(".coderun").text("highlight <code>");
        $(".blink").addClass("doanimation");
    }, function(){
		$(".coderun").text("");
        $(".blink").removeClass("doanimation");
    });
    $(".srcimg").hover(function(){
        $(".coderun").text("open img[" + $(this).attr("src") + "]"); 
        $(".blink").addClass("doanimation");
    }, function(){
		$(".coderun").text("");
        $(".blink").removeClass("doanimation");
    });
    $(".srcimg").click(function(){
        window.location = $(this).attr("src"); 
    });
});
/* SelectText - by edelman */
jQuery.fn.selectText = function(){
    var doc = document
        , element = this[0]
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};
$("code").click(function(){
    $(this).selectText();
});
/* http://www.benknowscode.com/2013/07/detect-dom-element-scrolled-with-jquery.html */
(function ($) {
   var $window = $(window),
       _watch = [],
       _buffer;
   function test($el) {
      var docViewTop = $window.scrollTop(),
          docViewBottom = docViewTop + $window.height(),
          elemTop = $el.offset().top,
          elemBottom = elemTop + $el.height();
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
                && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
   }
   $window.on('scroll', function ( e ) {
         if ( !_buffer ) {
            _buffer = setTimeout(function () {
               checkInView( e );
               _buffer = null;
            }, 300);
         }
      });
   function checkInView( e ) {
      $.each(_watch, function () {
         if ( test( this.element ) ) {
            if ( !this.invp ) {
               this.invp = true;
               if ( this.options.scrolledin ) 
                   this.options.scrolledin.call( this.element, e );
                
               this.element.trigger( 'scrolledin', e );
            }
         } else if ( this.invp ) {
            this.invp = false;
            if ( this.options.scrolledout ) 
                this.options.scrolledout.call( this.element, e );
             
            this.element.trigger( 'scrolledout', e );
         }
      });
   }
   function monitor( element, options ) {
      var item = { element: element, options: options, invp: false };
      _watch.push(item);
      return item;
   }
   function unmonitor( item ) {
      for ( var i=0;i<_watch.length;i++ ) {
         if ( _watch[i] === item ) {
            _watch.splice( i, 1 );
            item.element = null;
            break;
         }
      }
      console.log( _watch );
   }
   var pluginName = 'scrolledIntoView',
       settings = {
         scrolledin: null,
         scrolledout: null
       }
   $.fn[pluginName] = function( options ) {
         var options = $.extend({}, settings, options);
         this.each( function () {
               var $el = $(this),
                   instance = $.data( this, pluginName );
               if ( instance ) {
                  instance.options = options;
               } else {
                  $.data( this, pluginName, monitor( $el, options ) );
                  $el.on( 'remove', $.proxy( function () {
                        $.removeData(this, pluginName);
                        unmonitor( instance );
                     }, this ) );
               }
            });
         return this;
      }
})(jQuery);


$('.coderun')
  .scrolledIntoView()
  .on('scrolledin', function () { 
      $(".dd-code").removeClass("showurself").addClass("hideurself");
 })
  .on('scrolledout', function () { 
      $(".dd-code").removeClass("hideurself").addClass("showurself");
 });