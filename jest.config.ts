import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: ["**/steps.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
};

export default config;
