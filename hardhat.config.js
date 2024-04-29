
const { HardhatUserConfig } = require('hardhat/types');
const chains = require('./chains.json');

module.exports = {
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
      accounts: ['4b890292492746307b314f4cf3e0de44197e9239aa3d50913300db364842f8ad']
    },
    polygon: {
      url: chains[0].rpc,
      accounts: ['0x4b890292492746307b314f4cf3e0de44197e9239aa3d50913300db364842f8ac','4b890292492746307b314f4cf3e0de44197e9239aa3d50913300db364842f8ac']
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
  },
  mocha: {
    timeout: 40000
  }
}

