const baseConfig = require('./hardhat.config');

const config5 = {
  solidity: {
    version: "0.5.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts/5",
  },
};

module.exports = {
  ...baseConfig,
  ...config5,
};
