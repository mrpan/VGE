import BaseObject from "./core/BaseObject.js"
import {listen} from "./core/events.js"
import Observable from "./core/Observable.js"
class Stage extends Observable{
	constructor(options){
		super();

		this.options_=options;

		this.target_=this.options_.target;

		this.rendererType_=this.options_.rendererType||"canvas";
		this.renderer="";

		this.targetElement=null;
		this.getTargetElement(this.target_);
		this.createRenderer(this.rendererType_);
		listen(this.targetElement,"click",function(e){
			console.log(e);
			console.log("11")
		})

	}
	getTargetElement(target){
		if(typeof target=="string"){
			this.targetElement=document.getElementById(target);
		}else if(typeof target =="object"){
			this.targetElement =target;
		}
		return this.targetElement;
	}
	createRenderer(type){
		if(type=="canvas"){
			this.renderer = document.createElement('canvas');
			// this.renderer.style.width = '100%';
			// this.renderer.style.height = '100%';
			this.renderer.width=this.targetElement.offsetWidth;
			this.renderer.height=this.targetElement.offsetHeight;
		}else if(type=="svg"){
			this.renderer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			this.renderer.setAttribute("width", "100%");
			this.renderer.setAttribute("height", "100%");
		}
		this.targetElement.appendChild(this.renderer);

	}
	getContext(){
		if(this.rendererType_=="canvas"){
			return this.renderer.getContext("2d");
		}
	}
	add(shape){
		let canvasContext=this.getContext();
		shape.draw(canvasContext);
	}
}

export default Stage;