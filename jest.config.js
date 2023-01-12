/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const customJestConfig = {
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    testEnvironment: 'jest-environment-jsdom',
};

const jestConfig = async () => {
    const nextJestConfig = await createJestConfig(customJestConfig)();

    return {
        ...nextJestConfig,
        moduleNameMapper: {
            // Workaround to put our SVG stub first
            '\\.svg': '<rootDir>/__mocks__/fileMock.js',
            ...nextJestConfig.moduleNameMapper,
        },
    };
};

module.exports = jestConfig;
