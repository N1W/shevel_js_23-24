//Controller
define(
	'controller',
	['jquery', 'tmpl', 'model', 'view'],

	function() {	
		return {
			gocontroller: function(model, view){
				console.log("hi1-3");
				var self = this;

				view.elements.addBtn.on('click', addNewItem);
				view.elements.listContainer.on('click', '.list-item__edit', openEdit);
				view.elements.listContainer.on('click', '.list-item__delete', removeItem);


				function addNewItem(e) {
					e.preventDefault();
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}

				function removeItem(){
					var item = $(this).attr('data-value');
					console.log(item);

					model.removeItem(item);
					view.renderList(model.data);
				}

				function openEdit() {
					view.elements.editForm.removeClass("hide");
					var item = $(this).attr('data-value');
					view.elements.editInput.val('');
					view.elements.editBtn.on('click', editItem);

					function editItem(e) {
						e.preventDefault();
						view.elements.editForm.addClass("hide");

						var newVal = view.elements.editInput.val();
						model.editItem(item, newVal);
						view.renderList(model.data);
					}

				}
			}
		};
	}
);