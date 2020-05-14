module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/$1',
  },
  testMatch: [ '**/__tests__/**/*.[jt]s?(x)' ],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: [],
}
