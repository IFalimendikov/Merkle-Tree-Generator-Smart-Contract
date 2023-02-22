async function main() {
  // update the name here
  const YourSmartContract = await ethers.getContractFactory("YourSmartContract")

  // Start deployment, returning a promise that resolves to a contract object
  const yourSmartContract = await YourSmartContract.deploy();
  console.log("Contract deployed to address:", yourSmartContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })