install:
	npm install
start_brain:
	npm run babel-node -- src/bin/brain-games.js
start_even:
	npm run babel-node -- src/bin/brain-even.js
start_calc:
	npm run babel-node -- src/bin/brain-calc.js
start_gcd:
	npm run babel-node -- src/bin/brain-gcd.js
publish:
	npm publish
lint:
	npm run eslint .
