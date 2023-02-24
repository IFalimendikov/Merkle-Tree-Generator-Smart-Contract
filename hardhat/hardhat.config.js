require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { REACT_APP_GOERLI_RPC_URL, REACT_APP_MAINNET_RPC_URL, REACT_APP_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
   solidity: "0.8.4",
   networks: {
      hardhat: {},
      goerli: {
         url: process.env.REACT_APP_GOERLI_RPC_URL,
         accounts: [process.env.REACT_APP_PRIVATE_KEY],
       },
      mainnet: {
         url: process.env.REACT_APP_MAINNET_RPC_URL,
         accounts: [process.env.REACT_APP_PRIVATE_KEY],
       },
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey:process.env.REACT_APP_ETHERSCAN_KEY
    }
};