const main = async () => {
  const qiContractFactory = await hre.ethers.getContractFactory('QIPOWAH');
  const qiContract = await qiContractFactory.deploy();
  await qiContract.deployed();
  console.log("Contract deployed to:", qiContract.address);

  let txn;

	txn = await qiContract.totalSupply();
  console.log('txn1', txn)

	txn = await qiContract.balanceOf("0x4c0ce6aa4be446722b02573524aa5e46bc5f1cff");
	console.log("Ttxn2", txn);
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