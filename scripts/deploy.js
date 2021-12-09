const main = async () => {
  const qiContractFactory = await hre.ethers.getContractFactory('QIPOWAH');
  const qiContract = await qiContractFactory.deploy();
  await qiContract.deployed();
  console.log("Contract deployed to:", qiContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();