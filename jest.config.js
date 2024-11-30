// See https://nextjs.org/docs/testing

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@store/(.*)": "<rootDir>/src/store/$1",
    "@reducers/(.*)": "<rootDir>/src/reducers/$1",
    "@__mocks__/(.*)": "<rootDir>/__mocks__/$1",
  },
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/__mocks__/*"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    "/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend|react-dnd-touch-backend)",
  ],
});
