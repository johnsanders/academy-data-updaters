module.exports = {
	env: {
		browser: true,
	},
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 0, // TS handles this
		'no-invalid-this': 'error',
		'prettier/prettier': 'warn',
		'sort-imports': 'error',
		'sort-keys': 'error',
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};
