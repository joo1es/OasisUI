module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'quotes': [1, 'single'],
		'semi': [1, 'never'],
		'keyword-spacing': ['error', { before: true, after: true }],
		'arrow-spacing': ['error', { before: true, after: true }],
		'space-before-function-paren': ['error', 'never'],
		'space-before-blocks': 'error',
		'no-unused-vars': 0,
		'space-infix-ops': 2,
		'no-var': 2,
		'prefer-const': 2,
		'object-shorthand': 2,
		'no-trailing-spaces': 2,
		'no-undef': 0,
		'space-unary-ops': 1,
		'no-irregular-whitespace': 1,
		'no-multi-spaces': 1,
		'comma-spacing': [1, { 'before': false, 'after': true }],
		'no-whitespace-before-property': 1,
	}
};
