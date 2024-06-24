document.querySelectorAll('.item').forEach(function(item) {
	item.addEventListener('click', function() {
		this.classList.toggle('active');
	});
});

//---------------------------
// setup show hide all button
//---------------------------
//document.querySelector('#showhide').addEventListener('click', function() {
	const items = document.querySelectorAll('.item');
	items.forEach(function(item) {
		item.classList.toggle('active');
	});
	
//------------------------------------
// adds a a darkmode class to the body
//------------------------------------
document.querySelector('#darkmode').addEventListener('click', function() {
	document.getElementsByTagName('body')[0].classList.toggle('darkmode');
});

// let colors = ['blue', 'red', 'green', 'purple', 'yellow']
//     $('body').click(function(){
//         var color = colors[Math.floor(Math.random() * colors.length)];
//         $(this).css('background', color);
//     });

//     /* add a character to a list */

//     $('li').mouseover(function(){
//         $(this).append('👋');
//     });

    /* make a bug follow your cursor and resize */

    // $('body').append('<div id="follow">🦟</div>');
    // $(document).on("mousemove", function (event) {
    //     $('#follow').css({
    //         'font-size' : event.pageY/10+'px',
    //         'position' : 'absolute',
    //         'left' : event.pageX+10+'px',
    //         'top' : event.pageY+10+'px'
    //     });
    // });