require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
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
  defaultNetwork: "simnet",
  networks: {
    simnet: {
      url: "http://35.234.110.95:8545",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    }
  },
};

