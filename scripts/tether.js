// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
const hre = require("hardhat");
const tokenDecimals = hre.ethers.BigNumber.from(10).pow(6);
const tokenSupply = tokenDecimals.mul(100000000000000);

async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const USDT = await hre.ethers.getContractFactory("TetherToken");
  const usd = await USDT.deploy(tokenSupply, 'Tether', 'USDT', 6);

  await usd.deployed();

  console.log("USDT deployed to:", usd.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
