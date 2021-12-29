window.onload = () => {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

let actor = new Hero();
actor.draw(ctx);
}



