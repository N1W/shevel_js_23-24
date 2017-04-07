requirejs.config({
	paths: {
		'jquery': 'https://code.jquery.com/jquery-1.12.4'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	[	
		'tmpl',
		'model',
		'view',
		'controller',
		'jquery'

	],
	function (tmpl, model, view, controller, $) {
		$(function() {
			var firstTasks = ['homework js 22 23', 'learn english', 'read book'];
			var myModel = new model.gomodel(firstTasks);
			console.log(myModel);
			var myView = new view.goview(myModel);
			var myController = new controller.gocontroller(myModel, myView);
		});

	}
);