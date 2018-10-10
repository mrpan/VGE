/*
 * @Author: giserpan
 * @Date:   2018-09-25 15:23:59
 * @Last Modified by:   giserpan
 * @Last Modified time: 2018-09-26 10:44:45
 */
import Circle from '../../src/shape/Circle.js';
import expect from 'expect.js';

describe('vge.Shape.Circle', function() {
	let circle;
	describe('a unit circle', function() {

		beforeEach(function() {
			circle = new Circle({
				x:10,
				y:10,
				r:5
			});
		});

		describe('#getCenter', function() {

			it('returns the expected value', function() {
				expect(circle.getCenter()).to.eql([10, 10]);
			});
		})

		describe('#getStyle',function(){
			it('return style undefined',function(){
				expect(circle.getStyle()).to.be(undefined);
			})
		})

	});
})