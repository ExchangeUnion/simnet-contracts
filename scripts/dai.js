// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
const hre = require("hardhat");
const tokenDecimals = hre.ethers.BigNumber.from(10).pow(18);
const tokenSupply = tokenDecimals.mul(100000000000000);

async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DAI = await ethers.getContractFactory("Dai");
  const dai = await DAI.deploy(1337, tokenSupply);

  await dai.deployed();

  console.log("DAI deployed to:", dai.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
