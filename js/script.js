// $("#main-menu > li").on('click', function(event) {
// 	event.preventDefault();
// 	$("#main-menu > li").removeClass('active');	
// 	$(this).addClass('active');	
// });

$(function() {
	var _center = {
		width: 570,
		height: 360,
		marginLeft: 0,
		marginTop: 0,
		marginRight: 0
	};
	var _left = {
		width: 370,
		height: 260,
		marginLeft: 0,
		marginTop: 75,
		marginRight: -150
	};
	var _right = {
		width: 370,
		height: 260,
		marginLeft: -150,
		marginTop: 75,
		marginRight: 0
	};
	var _outLeft = {
	width: 150,
	height: 100,
	marginLeft: 150,
	marginTop: 200,
	marginRight: -200
	};
	var _outRight = {
	width: 150,
	height: 100,
	marginLeft: -200,
	marginTop: 200,
	marginRight: 50
	};
	$('#carousel').carouFredSel({
	width: 1010,
	height: 360,
	align: false,
	items: {
	visible: 3,
	width: 100
	},
	scroll: {
	items: 1,
	duration: 400,
	onBefore: function( data ) {
	data.items.old.eq( 0 ).animate(_outLeft);
	data.items.visible.eq( 0 ).animate(_left);
	data.items.visible.eq( 1 ).animate(_center);
	data.items.visible.eq( 2 ).animate(_right).css({ zIndex: 1 });
	data.items.visible.eq( 2 ).next().css(_outRight).css({ zIndex: 0 });
	 
	setTimeout(function() {
	data.items.old.eq( 0 ).css({ zIndex: 1 });
	data.items.visible.eq( 0 ).css({ zIndex: 2 });
	data.items.visible.eq( 1 ).css({ zIndex: 3 });
	data.items.visible.eq( 2 ).css({ zIndex: 2 });
	}, 200);
	}
	}
	});
	$('#carousel').children().eq( 0 ).css(_left).css({ zIndex: 2 });
	$('#carousel').children().eq( 1 ).css(_center).css({ zIndex: 3 });
	$('#carousel').children().eq( 2 ).css(_right).css({ zIndex: 2 });
	$('#carousel').children().eq( 3 ).css(_outRight).css({ zIndex: 1 });
});

$(function() {
	//	Scrolled by user interaction
	$('#foo2').carouFredSel({
		auto: false,
		prev: '#prev2',
		next: '#next2',
		pagination: "#pager2",
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		}
	});
});

$(document).ready(function ()
{
    var terms = ["client-1", "client-2", "client-3", "client-4", "client-5", "client-6"]; //array of terms to rotate
    function rotateTerm() {
        var ct = $("#text-content").data("term") || 0;
        $("#text-content").data("term", ct == terms.length - 1 ? 0 : ct + 1).text($('#text-slider .' + terms[ct]).html())
                .fadeIn().delay(2000).fadeOut(200);
        $("#title-content").text($('#title-slider .' +terms[ct]).html() )
                .fadeIn().delay(2000).fadeOut(200, rotateTerm);
    }
    $(rotateTerm); //start it on document.ready
});
