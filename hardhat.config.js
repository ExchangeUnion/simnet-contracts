require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  defaultNetwork: "simnet",
  networks: {
    simnet: {
      url: "http://35.234.110.95:8545",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    }
  },
};
