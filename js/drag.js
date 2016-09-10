$('#box2').mousedown(function(e){
		var _this = this,
		   oevent = e||event,
			 disx = oevent.clientX-$('#box1').offset().left-parseInt($(this).css('left'));
			 diso = $('#box1').width()-$(this).width(),
			 disr = 30 ;
			 //alert(disx)
		$(document).mousemove(function(e){
			var oevent = e||event,
			      dist = parseInt($(_this).css('left'))/diso+1;

			$(_this).css('left',oevent.clientX-$('#box1').offset().left-disx+'px')

			if (oevent.clientX-$('#box1').offset().left >= diso+disx-disr)  {

				$(_this).css('left',diso-disr+'px');

			}
			else if ($('#box1').offset().left+disx+disr >= oevent.clientX) 
			{
				$(_this).css('left',disr+'px')
			}
			$('#box').css("transform","scale(" + dist + ")");
		})
		$(document).mouseup(function(){$(document).unbind()})
	})