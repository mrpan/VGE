/*
* @Author: giserpan
* @Date:   2018-09-20 10:34:46
* @Last Modified by:   giserpan
* @Last Modified time: 2018-09-26 10:31:38
*/
import Shape from './Shape.js';

class Circle extends Shape{
	constructor(options){

		super();

		this.options_=options;
		this.x_=this.options_.x;

		this.y_=this.options_.y;

		this.r_=this.options_.r;

		this.fillStyle_='';

		this.strokeStyle_='';

		this.style_=this.options_.style;
	}
	setStyle(style){
		this.fillStyle_=style.fill;

		this.strokeStyle_=style.stroke;

		this.style_=style;
	}
	getStyle(){
		return this.style_;
	}
	getCenter(){
		return [this.x_,this.y_];
	}
	draw(context){
		context.beginPath();
		context.arc(this.x_, this.y_, 10, 0, 2 * Math.PI, false);
		if(this.fillStyle_){
			context.fillStyle=this.fillStyle_;
		}
		context.fill();
		if(this.strokeStyle_){
			context.strokeStyle=this.strokeStyle_;
		}
		context.stroke();
	}
}

export default Circle;