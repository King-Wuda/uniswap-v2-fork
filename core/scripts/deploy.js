const { ethers } = require("hardhat");

async function main() {
  const FactoryContract = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await FactoryContract.deploy(
    "0x0C13DCfc50a466a63692C518239E036bd1fc117C"
  );
  console.log("Tumiswap Factory contract address:", factory.address);

  const TokenContract = await ethers.getContractFactory("UniswapERC20");
  const deployedToken = await TokenContract.deploy();
  const TokenAddress = deployedToken.address;
  console.log("TMI-V2 contract address:", TokenAddress);

  // const PairContract = await ethers.getContractFactory("UniswapPair");
  // const deployedPair = await PairContract.deploy();
  // console.log("Uniswap Pair contract address:", deployedPair.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
