exports.install = function() {
	F.route('/', view_index);
	F.route('users', users);
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