/* import type { Config } from "jest";

const config: Config = {
  verbose: true,
};

export default config;
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.{ts,tsx}"],
};
