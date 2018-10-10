import BaseObject from "./core/BaseObject"

class Stage extends BaseObject{
	constructor(options){
		super();

		this.options_=options;

		this.target_=this.options_.target;

		this.rendererType_=this.options_.rendererType||"canvas";
		this.renderer="";

		this.targetElement=null;
		this.getTargetElement(this.target_);
		this.createRenderer(this.rendererType_)
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
			this.renderer.style.width = '100%';
			this.renderer.style.height = '100%';
		}else if(type=="svg"){
			this.renderer = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		}
		this.targetElement.appendChild(this.renderer);
	}
}

export default Stage;