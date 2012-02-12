/*
---

name: ViewPanel

description: Provides a view that handles a panel with two panes.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- View

provides:
	- ViewPanel

...
*/

/**
 * @name  ViewPanel
 * @class Provides a view that handles a panel with two panes.
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
 * @extends View
 *
 * @author  Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
 * @version 0.1
 */
Moobile.ViewPanel = new Class( /** @lends ViewPanel.prototype */ {

	Extends: Moobile.View,

	willBuild: function() {
		this.parent();
		this.element.addClass('view-panel');
	},

	destroy: function() {
		this.sidePanel = null;
		this.mainPanel = null;
		this.parent();
	},

	/**
	 * Returns the side panel.
	 *
	 * This method is a conveniant shortcut that retrieves the view content
	 * then the side panel element.
	 *
	 * @return {Element} The side panel.
	 *
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getSidePanel: function() {
		return this.content.getSidePanel();
	},

	/**
	 * Returns the main panel.
	 *
	 * This method is a conveniant shortcut that retrieves the view content
	 * then the main panel element.
	 *
	 * @return {Element} The main panel.
	 *
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getMainPanel: function() {
		return this.content.getMainPanel();
	}

});

//------------------------------------------------------------------------------
// Roles
//------------------------------------------------------------------------------

Moobile.Component.defineRole('view-panel', null, function(element) {
	var instance = Moobile.Component.create(Moobile.ViewPanel, element, 'data-view-panel');
	this.addChild(instance);
});
