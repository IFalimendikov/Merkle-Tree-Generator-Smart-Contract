const { MerkleTree} = require('merkletreejs');
const keccak256 = require("keccak256");

let whitelistedAddresses = require("./whitelist.json");


const leafNodes = whitelistedAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const rootHash = merkleTree.getRoot();

console.log(`Root is\n`, rootHash.toString("hex"));
console.log(`Merkle Tree\n`, merkleTree.toString());
