
function Gauge(canv, diam){

	var value = null;
	var maxValue = null;
	var diameter = diam;
	var ctx = canv.getContext('2d');
	var x;
	var y;
	var r;
	var ri;
	var fullAng = 1.5*Math.PI;

	Object.defineProperty(this, 'value', {
		get: function() { return value },
		set: function(val) { value = val; setHand()} 
	})

	Object.defineProperty(this, 'maxValue', {
		get: function() { return maxValue },
		set: function(val) { maxValue = val; setScale()} 
	})

	this.applySettings = function (settings){
		console.log('set started');
		x = y = canv.height*0.5;
		r = canv.height*0.4;
		ri = r*0.95;

		ctx.beginPath();
		ctx.strokeStyle="#000000";
		ctx.arc(x,y,r,0.75*Math.PI,1.5*Math.PI);
		ctx.arc(x,y,ri,1.5*Math.PI,0.75*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle="#ffff00";
		ctx.arc(x,y,r,1.5*Math.PI,1.90*Math.PI);
		ctx.arc(x,y,ri,1.90*Math.PI,1.5*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#ffff00";
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle="#ff0000";
		ctx.arc(x,y,r,1.90*Math.PI,0.25*Math.PI);
		ctx.arc(x,y,ri,0.25*Math.PI,1.90*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#ff0000";
		ctx.fill();

	}

	//--------internal func--------

	function setScale(){
		var stepAng = fullAng / maxValue;
		var currentAng = 0.75*Math.PI;
		var currentVal = 0;

		ctx.fillStyle="#000000";

		ctx.font = "15px Arial";

		while (maxValue >= currentVal){
			
			var cos = Math.cos(stepAng*currentVal+currentAng);
			var sin = Math.sin(stepAng*currentVal+currentAng);

			ctx.fillText(currentVal, x+r*cos*1.05+(cos-1)*5, y+r*sin*1.05+(sin+1)*5); //y*Math.cos(0.75)
			
			currentVal += 1;
		}
	}

	function setHand(){
		var angle = 1 - value / maxValue; //because we do it for 1*PI gauge
	}


}
