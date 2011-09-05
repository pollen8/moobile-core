/*
---

name: Button

description: Provides a button.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Control
	- ButtonStyle

provides:
	- Button

...
*/

Moobile.Button = new Class({

	Extends: Moobile.Control,

	label: null,

	options: {
		className: 'button',
		styleName: Moobile.ButtonStyle.Default,
		disabled: false,
		selected: false,
		highlighted: false
	},

	build: function(element) {

		this.parent(element);

		var label = this.getElement('[data-role=label]');
		if (label == null) {
			label = new Element('div[data-role=label]');
			label.ingest(this.content);
			label.inject(this.content);
		}

		this.label = this.getRoleInstance(label);

		if (this.options.disabled) this.setDisabled(true);
		if (this.options.selected) this.setSelected(true);
		if (this.options.highlighted) this.options.setHighlighted(true);

		return this;
	},

	setLabel: function(label) {

		if (this.label == label)
			return this;

		this.label.setText(null);
		this.label.hide();

		if (label) {

			var type = typeOf(label);
			if (type == 'string') {
				this.label.setText(label);
				this.label.show();
				return this;
			}

			if (type == 'element') {
				label = new Moobile.Label(label);
			}

			this.replaceChildView(this.label, label);
			this.label.destroy();
			this.label = label;
		}

		return this;
	},

	getLabel: function() {
		return this.label;
	},

	attachEvents: function() {
		this.addEvent('mouseup', this.bound('onMouseUp'))
		this.addEvent('mousedown', this.bound('onMouseDown'));
		this.parent();
		return this;
	},

	detachEvents: function() {
		this.removeEvent('mouseup', this.bound('onMouseUp'));
		this.removeEvent('mousedown', this.bound('onMouseDown'));
		this.parent();
		return this;
	},

	onMouseDown: function(e) {
		this.addClass(this.options.className + '-down');
		return this;
	},

	onMouseUp: function(e) {
		this.removeClass(this.options.className + '-down');
		return this;
	}

});