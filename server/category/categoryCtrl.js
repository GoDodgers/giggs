const Category = require('./categoryModel');

module.exports.createDummyCategories = function(req, res) {
	//dummy data for categories
	const ParentCategories = [
		{ name: 'plumbing' },
		{ name: 'education' },
		{ name: 'tutor' },
		{ name: 'tech' },
		{ name: 'auto' },
		{ name: 'cook' },
		{ name: 'finance' },
		{ name: 'office' },
		{ name: 'engineering' },
		{ name: 'art' },
		{ name: 'craft' },
		{ name: 'media' },
		{ name: 'design' },
		{ name: 'science' },
		{ name: 'buisness' },
		{ name: 'customer service' },
		{ name: 'food' },
		{ name: 'beverage' },
		{ name: 'labor' },
		{ name: 'landscaping' },
		{ name: 'moving' },
		{ name: 'delivery' },
		{ name: 'legal' },
		{ name: 'maufacturing' },
		{ name: 'marketing' },
		{ name: 'medical' },
		{ name: 'nonprofit' },
		{ name: 'retail' },
		{ name: 'sales' },
		{ name: 'salon' },
		{ name: 'spa' },
		{ name: 'security' },
		{ name: 'software' },
		{ name: 'transport' },
		{ name: 'writing' },
		{ name: 'babysitting' },
		{ name: 'computers' }
	];

	Category.bulkCreate(dummyData).then(function(categories) { 
				console.log('check database for categories');
				res.send(categories);
			})
			.catch(function(error) {
				console.log(error); // ... in order to get the array of user objects
				res.send(error);
			});
};
