const request = require('request');

/**
 * @name url
 * @param {string} key the key to the sourcebin
 * @returns {string} creates the url to the sourcebin
 */
function url(key) {
	return `https://sourceb.in/${key}`
};

Object.defineProperty(url, 'short', {
	/**
	 *
	 * @param {string} key the key to the sourcebin
	 * @returns {string} the short url to the sourcebin
	 */
	value(key) {
		return `http://srcb.in/${key}`
	},
	writable: false
});

Object.defineProperty(url, 'long', {
	/**
	 * @function value
	 * @param {string} key the key to the sourcebin
	 * @returns {string} the long url to the sourcebin
	 */
	value(key) {
		return `https://sourceb.in/${key}`
	},
	writable: false
})

/**
 *
 * @param {string} title what do you want to name the sourcebin
 * @param {string} code put the code you want to save to it here
 * @returns
 */
async function create(title, code, options = { title: "null", description: "None" }) {
	if (Array.isArray(code)) { return console.log(''); };
	if (typeof code !== 'string') { return console.log('code must be a string'); };
	if (typeof title !== 'string') { return console.log('title must be a string'); };
	return new Promise((resolve, reject) => {
		request({
			'url': "https://sourceb.in/api/bins/",
			'method': "POST",
			json: {
				files: [
					{
						"name": title,
						"content": code
					}
				],
				...options
			},
		}, (err, res, body) => {
			if (err) { return reject(err); };
			resolve(url(body.key));
		});
	});
};

const url_regex = new RegExp('https\:\/\/sourceb\.in\/|http\:\/\/srcb\.in\/');

/**
 * @name get_key
 * @param {string} url get the key of the sourcebin
 * @returns {string} the key to the sourcebin
 */
function get_key(url) {
	if (typeof url !== 'string') return console.log('make sure inputted url is a string');
	if (!url_regex.test(url)) return console.log('not a valid sourcebin link')
	return url.replace(url_regex, '');
};



module.exports = {
	create: create,
	get_key: get_key,
	url: url,
	long_url: url.long,
	short_url: url.short
};
