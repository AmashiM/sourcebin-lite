<style>
body {
	background-color: rgb(30,30,30);
}
</style>

# sourcebin-lite

is a short sweet, easy, and lightweight sourcebin wrapper using nodejs

# license

<p>
I use the <a href="https://github.com/AmashiSenpai/sourcebin-lite/blob/main/LICENSE">unlicense</a>
</p>

# docs

<h3>1. create<h3>

```js
const sourcebin = require("sourcebin-lite");

(async () => {
	// title, code, options
	const url = await sourcebin.create("title", "code", {
		title: "title",
		description: "description",
	});

	console.log(url);
	// returns "https://sourceb.in/key"
})();
```

<hr />
<h3>2. get_key</h3>

```js
const sourcebin = require("sourcebin-lite");

// you just put in the url of the sourcebin
const key = sourcebin.get_key("https://sourceb.in/key");
console.log(key);
// returns "key"
```

<hr />
<h3>3. get url</h3>

```js
const sourcebin = require("sourcebin-lite");

// you can get the key from document 2
const key = "some key";

// default method
const url1 = sourcebin.url(key);
// returns "https://sourceb.in/key"

// short url method
const url2 = sourcebin.url.short(key);
// returns "https://srcb.in/key"
//
// you can also do sourcebin.short_url and it works the same way

// long url method
const url3 = sourcebin.url.long(key);
// returns "https://sourceb.in/key"
//
// you can also do sourcebin.long_url and it works the same way
```
