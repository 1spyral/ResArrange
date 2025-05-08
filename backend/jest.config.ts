export default {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    setupFiles: ["dotenv/config"],
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    timeout: 60000,
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@test/(.*)$": "<rootDir>/test/$1",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
}
