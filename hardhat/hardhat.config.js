require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { GOERLI_API_URL, ROPSTEN_API_URL, POLYGON_API_URL, MUMBAI_API_URL, MAINNET_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: GOERLI_API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 1000000000, // 1 gwei
      },
      mainnet: {
         url: MAINNET_API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 55000000000, // 55 gwei
      },
      polygon: {
         url: POLYGON_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      mumbai: {
         url: MUMBAI_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      ropsten: {
         url: ROPSTEN_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: ETHERSCAN_API_KEY,
    }
}