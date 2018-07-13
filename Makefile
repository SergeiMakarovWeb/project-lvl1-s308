install:
	npm install
start_brain:
	npm run babel-node -- src/bin/brain-games.js
start_even:
	npm run babel-node -- src/bin/brain-even.js
start_calc:
	npm run babel-node -- src/bin/brain-calc.js
publish:
	npm publish
lint:
	npm run eslint .
