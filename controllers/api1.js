exports.install = function() {
	F.route('v1/users', users1);
    F.route('v1/users/{name}', users1_name);
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

function users1_name(name) {
    var self = this;
	var users = DATABASE('users');
	users.find({"login": name}).toArray(function (err, docs) {
		self.json(docs);
	});
}