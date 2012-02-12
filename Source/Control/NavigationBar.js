/*
---

name: NavigationBar

description: Provides a bar control used to navigate between views.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Bar

provides:
	- NavigationBar

...
*/

/**
 * @name  NavigationBar
 * @class Provides a navigation bar control.
 *
 * @classdesc
 *
 * [TODO: Description]
 * [TODO: Events]
 * [TODO: Roles]
 * [TODO: Styles]
 * [TODO: Options]
 * [TODO: Element Structure]
 *
 * @extends Bar
 *
 * @author  Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
 * @version 0.1
 */
Moobile.NavigationBar = new Class( /** @lends NavigationBar.prototype */ {

	Extends: Moobile.Bar,

	willBuild: function() {
		this.parent();
		this.element.addClass('navigation-bar');
	}

});

//------------------------------------------------------------------------------
// Roles
//------------------------------------------------------------------------------

Moobile.Component.defineRole('navigation-bar', null, function(element) {
	var instance = Moobile.Component.create(element, Moobile.NavigationBar, 'data-navigation-bar');
	this.addChild(instance);
});

