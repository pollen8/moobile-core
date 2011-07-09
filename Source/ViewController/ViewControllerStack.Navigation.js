/*
---

name: ViewControllerStack.Navigation

description: Provide navigation function to the view controller stack such as
             a navigation bar and navigation bar buttons.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewControllerStack

provides:
	- ViewControllerStack.Navigation

...
*/

Moobile.ViewControllerStack.Navigation = new Class({

	Extends: Moobile.ViewControllerStack,
	
	didBindViewController: function(viewController) {
		
		this.parent(viewController);
		
		if (viewController.view.navigationBar)
			return this;

		var navigationBar = new Moobile.UI.Bar.Navigation();
		viewController.view.addChildControl(navigationBar, 'top');
		viewController.view.navigationBar = navigationBar;

		viewController.navigationBar = viewController.view.navigationBar;

		if (this.viewControllers.length > 1) {

			var backButton = viewController.navigationBar.getLeftButton();
			if (backButton == null) {

				var text = this.viewControllers.lastItemAt(1).getTitle() || 'Back';

				backButton = new Moobile.UI.BarButton();
				backButton.setStyle(Moobile.UI.BarButtonStyle.Back);
				backButton.setText(text);
				backButton.addEvent('click', this.bound('onBackButtonClick'));

				viewController.navigationBar.setLeftButton(backButton);
			}
		}

		viewController.navigationBar.setText(viewController.getTitle());

		return this;
	},

	onBackButtonClick: function() {
		this.popViewController();
	}

});