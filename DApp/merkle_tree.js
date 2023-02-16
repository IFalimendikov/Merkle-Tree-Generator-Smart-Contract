const { MerkleTree, default: MerkleTree } = require('merkletreejs');
const keccak256 = require("keccak256");

let whitelistedAddresses = require("../addresses.json");


const leafNodes = whitelistedAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const rootHash = merkleTree.getRoot();