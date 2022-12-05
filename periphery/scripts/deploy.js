const { ethers } = require("hardhat");

async function main() {
  const routerContract = await ethers.getContractFactory("UniswapV2Router02");
  const router = await routerContract.deploy(
    "0xe6b48dbe5c9c779a03afd5b237b221138779fae7",
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
  );
  console.log("UniswapV2Router02 contract address:", router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
