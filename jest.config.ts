import { type Config } from "@jest/types";

const config: Config.InitialOptions = {
  rootDir: "src",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "@src(.*)$": "<rootDir>/$1"
  }
};

export default config;
