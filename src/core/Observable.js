/*
* @Author: giserpan
* @Date:   2018-09-18 10:37:21
* @Last Modified by:   giserpan
* @Last Modified time: 2018-10-19 14:25:36
*/
//inspire by https://github.com/openlayers/openlayers
//
import EventTarget from "./EventTarget.js"
import {listen} from "./events.js"
class Observable extends EventTarget{
	constructor(){
	  super();
   

  }
  on(type,listener){
  	return listen(this,type,listener);
  };

  un(){};
}


export default Observable;