const connectionConfig = require('frg-ethereum-runners/config/network_config.json');

module.exports = {
  networks: {
    ganacheUnitTest: connectionConfig.ganacheUnitTest,
    gethUnitTest: connectionConfig.gethUnitTest,
    testrpcCoverage: connectionConfig.testrpcCoverage
  },
  mocha: {
    enableTimeouts: false
  },
  compilers: {
    solc: {
      settings: { // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      },
      version: '0.4.24'
    }
  }
};
