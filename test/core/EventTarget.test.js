/*
* @Author: giserpan
* @Date:   2018-10-17 11:53:49
* @Last Modified by:   giserpan
* @Last Modified time: 2018-10-19 14:20:13
*/
import EventTarget from '../../src/core/EventTarget.js';
import Event from '../../src/core/Event.js';
import expect from 'expect.js';

describe('EventTarget', function() {
	let eventTarget;
	let event1;
	let f ;
	describe('a unit EventTarget', function() {

		beforeEach(function() {
			eventTarget = new EventTarget();
			f=function(evt){
				console.log("this is listener");
				console.dir(evt)
			}
			// event1=new Event("click");
			eventTarget.addEventListener("click",f);
		});

		describe('#addEventListener', function() {

			it('returns listeners_', function() {
				expect(eventTarget.listeners_).to.eql({"click":[f]});
			});
		});

		describe('#dispatchEvent', function() {
			it('dispatch event ', function() {
				expect(eventTarget.dispatchEvent("click")).to.be(undefined);
			});
		})

		describe('#removeEventListener', function() {

			it('returns listeners_', function() {
				eventTarget.removeEventListener("click",f);
				expect(eventTarget.listeners_).to.eql({});
			});
		});

	});
})