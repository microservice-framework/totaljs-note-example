exports.install = function() {
	F.route('/', view_index);
	F.route('users', users);
	F.route('v1/users', users1);

	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}

function users() {
	var self = this;
	self.json(['test1', 'test2']);
}

function users1() {
	var self = this;
	var users = DATABASE('users');
	users.find({}).toArray(function (err, docs) {
		self.json(docs);
	});
}
