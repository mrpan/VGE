var stage = new vge.Stage({
	target: "map",
	rendererType: "canvas"
})
var circle = new vge.Shape.Circle({
	x: 20,
	y: 20,
	r: 5
})

stage.on("click", function(e) {
	console.log(e)
})

stage.add(circle);