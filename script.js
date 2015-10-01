
function Gauge(canv, diam){

	var value = null;
	var maxValue = null;
	var diameter = diam;
	var ctx = canv.getContext('2d');
	ctx.translate(canv.height*0.5, canv.height*0.5);
	var x;
	var y;
	var r;
	var ri;
	var fullAng = 1.5*Math.PI;

	Object.defineProperty(this, 'value', {
		get: function() { return value },
		set: function(val) { checkInput(val); setHand()} 
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
		ctx.arc(0,0,r,0.75*Math.PI,1.5*Math.PI);
		ctx.arc(0,0,ri,1.5*Math.PI,0.75*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle="#ffff00";
		ctx.arc(0,0,r,1.5*Math.PI,1.90*Math.PI);
		ctx.arc(0,0,ri,1.90*Math.PI,1.5*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#ffff00";
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle="#ff0000";
		ctx.arc(0,0,r,1.90*Math.PI,0.25*Math.PI);
		ctx.arc(0,0,ri,0.25*Math.PI,1.90*Math.PI, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "#ff0000";
		ctx.fill();

	}

	//--------internal func--------

	function checkInput(val){
		value = val < 0 
			? 0 
			: val > maxValue 
				? maxValue 
				: val;
	}

	function setScale(){
		var stepAng = fullAng / maxValue;
		var currentAng = 0.75*Math.PI;
		var currentVal = 0;

		ctx.fillStyle="#000000";

		ctx.font = "15px Arial";

		while (maxValue >= currentVal){
			
			var cos = Math.cos(stepAng*currentVal+currentAng);
			var sin = Math.sin(stepAng*currentVal+currentAng);

			ctx.fillText(currentVal, r*cos*1.05+(cos-1)*5, r*sin*1.05+(sin+1)*5); //y*Math.cos(0.75)
			
			currentVal += 1;
		}
	}

	function setHand(){
		//create center
		ctx.beginPath();		
		ctx.arc(0, 0, r*0.08, 0, 2*Math.PI);
		ctx.strokeStyle = "#005fff";		
		ctx.stroke();
		ctx.fillStyle = "#005fff";
		ctx.fill();

		//make rotation
		var stepAng = fullAng / maxValue;
		ctx.rotate(stepAng*value);
		
		//draw handle
		var cos = Math.cos(0.75*Math.PI);
		var sin = Math.sin(0.75*Math.PI);

		var cosA = Math.cos(0.75*Math.PI+0.5*Math.PI);
		var sinA = Math.sin(0.75*Math.PI+0.5*Math.PI);

		var cosB = Math.cos(0.75*Math.PI-0.5*Math.PI);
		var sinB = Math.sin(0.75*Math.PI-0.5*Math.PI);
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(r*0.05*cosA, r*0.05*sinA);
		ctx.lineTo(r*0.9*cos, r*0.9*sin);
		ctx.lineTo(r*0.05*cosB, r*0.05*sinB);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}


}
