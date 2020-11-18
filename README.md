# Simnet Contracts
This repository contains the code for simulation network contracts.

## Install
Clone the repository and `npm install`

## Usage
`DEPLOYER_PRIVATE_KEY` should be the private key of a funded account in the simnet. All initial supply of the tokens is sent to the deployers account.

### Deploy USDT
```
➜  simnet-contracts git:(master) ✗ DEPLOYER_PRIVATE_KEY=0xYOUR_ACCOUNT_PRIVATE_KEY npm run deploy:usdt

> simnet-contracts@1.0.0 deploy:usdt /home/ar/simnet-contracts
> npx hardhat --config hardhat.4.config.js run scripts/tether.js

USDT deployed to: 0xA2736f9E21aba740F585Be5EF1330Ecb365c37B3
```

### Deploy DAI
```
➜  simnet-contracts git:(master) ✗ DEPLOYER_PRIVATE_KEY=0xYOUR_ACCOUNT_PRIVATE_KEY npm run deploy:dai

> simnet-contracts@1.0.0 deploy:dai /home/ar/simnet-contracts
> npx hardhat --config hardhat.5.config.js run scripts/dai.js

DAI deployed to: 0xd2169fA4F9Ef4a7Ff9df3413a242DCA33E245237
```
