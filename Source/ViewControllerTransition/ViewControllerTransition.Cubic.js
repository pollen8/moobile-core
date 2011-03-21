/*
---

name: ViewControllerTransition.Cubic

description: Provide a cubic view controller transition effect.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Core
	- ViewControllerTransition

provides:
	- ViewControllerTransition.Cubic

...
*/

Moobile.ViewControllerTransition.Cubic = new Class({

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

		this.viewControllerStack.view.addClass('transition-cubic-viewport');

		if (direction == 'enter') {
			this.wrapper.addClass('transition-cubic');
			this.wrapper.addClass('transition-cubic-enter');
			this.viewControllerStack.getViewControllerAt(0).view.addClass('cubic-face-enter');
			this.viewControllerStack.getViewControllerAt(1).view.addClass('cubic-face-leave');
			return this;
		}

		if (direction == 'leave') {
			this.wrapper.addClass('transition-cubic');
			this.wrapper.addClass('transition-cubic-leave');
			this.viewControllerStack.getViewControllerAt(0).view.addClass('cubic-face-leave');
			this.viewControllerStack.getViewControllerAt(1).view.addClass('cubic-face-enter');
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
			this.wrapper.removeClass('transition-cubic');
			this.wrapper.removeClass('transition-cubic-enter');
			this.wrapper.removeClass('transition-cubic-leave');
			this.wrapper.removeClass('commit-transition');
			this.viewControllerStack.view.removeClass('transition-cubic-viewport');
			this.viewControllerStack.getViewControllerAt(0).view
				.removeClass('cubic-face-enter')
				.removeClass('cubic-face-leave');
			this.viewControllerStack.getViewControllerAt(1).view
				.removeClass('cubic-face-enter')
				.removeClass('cubic-face-leave');
			this.parent(e);
		}
		return this;
	}

});