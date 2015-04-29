window.onload = SetListener;

function SetListener() {
	DrawCounter();
	
	var button = getElementById("refresh_btn");
	button.OnClick = DrawCounter;
}

function DrawCounter() {
	
}
