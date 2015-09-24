
function Gauge(canv){

	var value = null;
	var maxValue = null;
	var gaugeField = canv.getContext('2d');

	Object.defineProperty(this, 'value', {
		get: function() { return value },
		set: function(val) { value = val; console.log(this.value)} 
	})

	Object.defineProperty(this, 'maxValue', {
		get: function() { return maxValue },
		set: function(val) { maxValue = val; console.log(this.maxValue)} 
	})

	this.applySettings = function (settings){
		console.log('set started');
		gaugeField.beginPath();
		var x = canv.width*0.5;
		var y = canv.height*0.9;
		var r = canv.width*0.4;
		gaugeField.arc(x,y,r,1*Math.PI,0*Math.PI);
		var ri = r*0.95;
		gaugeField.arc(x,y,ri,0*Math.PI,1*Math.PI, true);
		gaugeField.closePath();
		gaugeField.stroke();
	}


}
