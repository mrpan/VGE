
//inspire by https://github.com/openlayers/openlayers
import Event from "./Event.js";

class EventTarget{
  constructor(){

    this.listeners_ = {};
  }
  addEventListener(type,listener){
  	let listeners =this.listeners_[type];
  	 if (!listeners) {
      listeners = this.listeners_[type] = [];
    }
    if (listeners.indexOf(listener) === -1) {
      listeners.push(listener);
    }
  };

  dispatchEvent(event){
  	const evt = typeof event === 'string' ? new Event(event) : event;
    const type = evt.type;
    evt.target = this;
    const listeners = this.listeners_[type];
    let propagate;
    for(let i=0;i<listeners.length;i++){
    	if(listeners[i].call(this,evt)==false||evt.propagationStopped){
    		propagate=false;

    		break;
    	}
    }
    return propagate;
  };

  removeEventListener(type,listener){
  	 const listeners=this.listeners_[type];
  	 if(listeners){
  	 	const index = listeners.indexOf(listener);
  	 	listeners.splice(index, 1);
        if (listeners.length === 0) {
          delete this.listeners_[type];
        }

  	 }
  }
}


export default EventTarget;