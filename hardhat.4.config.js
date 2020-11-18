const baseConfig = require('./hardhat.config');

const config4 = {
  solidity: {
    version: "0.4.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts/4",
  },
};

module.exports = {
  ...baseConfig,
  ...config4,
};
