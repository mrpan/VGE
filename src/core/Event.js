/*
* @Author: giserpan
* @Date:   2018-10-17 14:56:38
* @Last Modified by:   giserpan
* @Last Modified time: 2018-10-19 14:24:40
*/

//inspire by ol5
class Event{

	constructor(type){
		this.propagationStopped;

		this.type=type;

		this.target = null;
	}

	preventDefault() {

    this.propagationStopped = true;

  }

  stopPropagation() {
    this.propagationStopped = true;
  }
}

export default Event;