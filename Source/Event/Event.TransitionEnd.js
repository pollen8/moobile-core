/*
---

name: Event.TranstionEnd

description: Enable the transition end event.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Core/Event
	- Core/Element
	- Core/Element.Event

provides:
	- Event.TransitionEnd

...
*/

(function() {

	/* vendor prefix */

	var prefix = '';
	if (Browser.safari || Browser.chrome || Browser.Platform.ios) {
		prefix = 'webkit';
	} else if (Browser.firefox) {
		prefix = 'Moz';
	} else if (Browser.opera) {
		prefix = 'o';
	} else if (Browser.ie) {
		prefix = 'ms';
	}

	/* events */

	Element.NativeEvents[prefix + 'TransitionEnd'] = 2;
	Element.Events.transitionend = { base: (prefix + 'TransitionEnd') };

})();

