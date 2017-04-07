define(
	'view',
	['jquery', 'tmpl', 'model'],

	function() {
		return {
			goview: function(model){
				console.log("hi1-2", model);
				var self = this;
				function init (){
					var wrapper = tmpl($('#todo-list').html());
					$('body').append(wrapper);

					self.elements = {
						input: $('.new-item'),
						editInput: $('.edit-item'),
						addBtn: $('.add-btn'),
						editBtn: $('.edit-btn'),
						editForm: $('.edit-form'),
						listContainer: $('.list')
					};
					self.renderList(model.data);

				};

				self.renderList = function (data) {
					var list = tmpl($('#wrapper-items').html(), {data: data});
					self.elements.listContainer.html(list);
				};

				init();
			}
		};
	}
);
