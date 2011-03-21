/*
---

name: ViewControllerTransition.Slide

description: Provide a slide view controller transition effect.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Core
	- ViewControllerTransition

provides:
	- ViewControllerTransition.Slide

...
*/

Moobile.ViewControllerTransition.Slide = new Class({

	Extends: Moobile.ViewControllerTransition,

	wrapper: null,

	startup: function(viewController) {
		this.wrapper = viewController.getViewControllerStack().view.getContent();
		return this.parent(viewController);
	},

	attachEvents: function() {
		this.wrapper.addEvent('transitionend', this.onTransitionComplete);
		return this;
	},

	detachEvents: function() {
		this.wrapper.removeEvent('transitionend', this.onTransitionComplete);
		return this;
	},

	setup: function(direction) {

		if (direction == 'enter') {
			this.wrapper.addClass('transition-slide');
			this.wrapper.addClass('transition-slide-enter');
			return this;
		}

		if (direction == 'leave') {
			this.wrapper.addClass('transition-slide');
			this.wrapper.addClass('transition-slide-leave');
			return this;
		}

		throw new Moobile.Exception.ViewControllerTransition('Unsupported direction');

		return this;
	},

	start: function(direction) {
		this.wrapper.addClass('commit-transition');
		return this;
	},

	onTransitionComplete: function(e) {
		if (this.running && e.target == this.wrapper) {
			this.wrapper.removeClass('transition-slide');
			this.wrapper.removeClass('transition-slide-enter');
			this.wrapper.removeClass('transition-slide-leave');
			this.wrapper.removeClass('commit-transition');
			this.parent(e);
		}
		return this;
	}

});