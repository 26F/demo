
function resizediv()
{

	var percent = 0.8;

	var newwidth = ($(window).width() * percent) + 'px';
	var newheight = ($(window).height() * percent) + 'px';

	$('#container').css({width : newwidth, height : newheight});

}


function interactive(event)
{

	const canvas = document.querySelector("#screen");
	const canvctx = canvas.getContext('2d');

	var x = event.clientX;
	var y = event.clientY;

	const radius = 5;

	canvctx.beginPath();

	canvctx.fillStyle = 'rgb(' + (x % 255) + ', 255,' + (y % 255) + ')';

	canvctx.fillRect(0, 0, canvas.width, canvas.height);

	canvctx.arc(x, y, radius, 0, 360);

	canvctx.fillStyle = "black";

	canvctx.fill();


}


function init()
{


	resizediv();

	document.addEventListener('mousemove', (event) => interactive(event));


}	