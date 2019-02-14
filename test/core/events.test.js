/*
* @Author: giserpan
* @Date:   2018-10-18 20:49:44
* @Last Modified by:   giserpan
* @Last Modified time: 2018-10-23 14:58:00
*/
import {listen} from '../../src/core/events.js';
import EventTarget from '../../src/core/EventTarget.js';
import Event from '../../src/core/Event.js';
import expect from 'expect.js';

describe('events', function() {
	let eventTarget;
	let event;
	let f ;
	describe('a unit EventTarget', function() {

		beforeEach(function() {
			eventTarget = new EventTarget();
			f=function(evt){
				console.log("this is listener");
				console.dir(evt)
			}
			// event1=new Event("click");
			// eventTarget.addEventListener("click",f);
		});

		describe('#listen function', function() {

			it('listen function', function() {
				let obj=listen(eventTarget,"click",f);
				// console.log(obj)
				expect(obj.listener).to.eql(f);
			});
		});

	

	});
})