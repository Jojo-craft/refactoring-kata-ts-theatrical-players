import type { Config } from 'jest';

const config: Config = {
	testMatch: ['**/*.spec.ts'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
};

export default config;
