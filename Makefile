install:
	npm install

start:
	npm run build
	npm run babel-node -- src/bin/brain-balance.js

publish:
	npm publish

lint:
	npm run eslint .

github:
	git push -u origin master
