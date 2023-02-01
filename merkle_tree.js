const { MerkleTree, default: MerkleTree } = require('merkletreejs');
const keccak256 = require("keccak256");

let whitelistedAddresses = [
  "",
  ""
]


const leafNodes = whitelistedAddresses.map(addr => keccak256(addr));
const MerkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const rootHash = MerkleTree.getRoot();