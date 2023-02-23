async function main() {
  // update the name here
  const Test = await ethers.getContractFactory("Test")

  // Start deployment, returning a promise that resolves to a contract object
  const test = await Test.deploy();
  console.log("Contract deployed to address:", test.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })