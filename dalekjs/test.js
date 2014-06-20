var url = 'https://github.com/';
module.exports = {
	'should perform search in GitHub': function (test) {
	  	test
		.open(url)
		.type('#js-command-bar-field', 'dalek')
		.submit('#top_search_form')
		.assert.text('.repolist h3 a', 'dalekjs/dalek', 'There is a link with label dalekjs')
		.click('[href="/dalekjs/dalek"]')
		.assert.text('.repository-description p', 'DalekJS Base framework', 'It is the right repository')
		.done()
	}
};