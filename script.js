
document.addEventListener('DOMContentLoaded', DrawCounter)

function DrawCounter() {
	var canv = document.getElementById('canvElement');
	var gaugeField = canv.getContext('2d');
	gaugeField.beginPath();
	var x = canv.width*0.5;
	var y = canv.height*0.9;
	var r = canv.width*0.4;
	gaugeField.arc(x,y,r,1*Math.PI,0*Math.PI);
	var ri = r*0.8;
	gaugeField.arc(x,y,ri,0*Math.PI,1*Math.PI, true);
	gaugeField.closePath();
	gaugeField.stroke();
}
