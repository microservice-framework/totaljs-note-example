exports.install = function() {
	F.route('v1/users', users1);

	// or
	// F.route('/');
};

function users1() {
	var self = this;
	var users = DATABASE('users');
	users.find({}).toArray(function (err, docs) {
		self.json(docs);
	});
}
