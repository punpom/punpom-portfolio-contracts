const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  
  const Contract = await ethers.getContractFactory("ResumeNFT");
  const deployedContract = await Contract.deploy("ipfs://QmeY8DV1YxXjQBXZU5f7XorjyAEZvUMAxniK9kapU92BvH/");

  await deployedContract.deployed();

  console.log("Contract address: ", deployedContract.address);

  console.log("Contract is verifying");
  await sleep(100000);

  await hre.run("verify:verify", {
    address: deployedContract.address,
    constructorArguments: ["ipfs://QmeY8DV1YxXjQBXZU5f7XorjyAEZvUMAxniK9kapU92BvH/"],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });