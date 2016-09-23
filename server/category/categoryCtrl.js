const Category = require('./categoryModel');

module.exports.propagateCategories = function(req, res) {

	const categories = {
		'home/office': {
			'moving': {},
			'cleaning': {},
			'plumbing': {},
			'cooking': {},
			'landscaping': {},
			'babysitting': {}
		},
		'educational tutor': {
			'arts & crafts': {},
			'science': {},
			'cook': {},
			'legal': {},
			'auto': {},
			'music': {},
			'language': {},
			'finance': {},
			'medical': {}
		},
		'technology': {
			'engineering': {},
			'computers': {},
			'hardware': {},
			'software': {},
			'media': {}
		},
		'customer service': {
			'food': {},
			'beverage': {},
			'sales': {}
		},
		'automotive': {
			'repair': {},
			'delivery': {},
			'transport': {}
		},
		'spa/salon': {
			'nails': {},
			'hair': {},
			'massage': {}
		},
		'other': {
			'general labor': {},
			'odd jobs': {},
			'nonprofit': {},
			'security': {},
			'maufacturing': {},
			'retail': {},
			'marketing': {}
		}
	};

	function insertCategories(category, parentID = null) {
		for (var key of Object.keys(categories)) {
			//this will create the first lvl of catagories, because parentID
			//default to null, parentID will be null
			Category.build({ name: key, parent_id: parentID })
				.then(function(cat) {
					if (categories[key] != null) {
						insertCategories(categories[key], cat.dataValues.id);
					}
				}).save();
		}
	}

	//instatiate Table with parent categories and their own id PKs
	/*Category.bulkCreate(ParentCategories).then(function(categories) { 
				console.log('check database for categories');
				res.send(categories);
			})
			.catch(function(error) {
				console.log(error);
				res.send(error);
			});

	function mapParentToChildren(parentID, children) {

	}*/

};
