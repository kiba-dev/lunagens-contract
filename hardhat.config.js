require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ganache");

require("dotenv").config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 60000000
      }
    }
  },
  networks: {
    // local: {
    //   url: "http://localhost:8545",
    //   accounts: [process.env.PRIVATE_KEY], // Try stealing the funds in this
    //   chainId: 31337
    // },
    // local: {
    //   url: "https://rpc.testnet.fantom.network",
    //   accounts: [process.env.PRIVATE_KEY], // Try stealing the funds in this
    //   chainId: 4002
    // },
    // bsc_testnet: {
    //   url: "https://bsctestapi.terminet.io/rpc",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 97
    // },
    // bitgert_mainnet: {
    //   url: "https://chainrpc.com",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 32520
    // },
    // telos_mainnet: {
    //   url: "https://rpc2.eu.telos.net/evm",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 40
    // },
    // gatechain_mainnet: {
    //   url: "https://evm.gatenode.cc",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 86
    // },
    ethereum_mainnet: {
      url: "https://1rpc.io/eth",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1
    },
    dogechain_mainnet: {
      url: "https://rpc01-sg.dogechain.dog",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 2000
    },
    // matic_mainnet: {
    //   url: "https://matic.slingshot.finance",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 137
    // },
    // avalanche_mainnet: {
    //   url: "https://1rpc.io/avax/c",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 43114
    // },
    // omax_mainnet: {
    //   url: "https://mainapi.omaxray.com",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 311
    // },
    bsc_mainnet: {
      url: "https://bsc-dataseed4.defibit.io",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56
    },
    // wanchain_mainnet: {
    //   url: "https://gwan-ssl.wandevs.org:56891",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 888
    // },
    // okx_mainnet: {
    //   url: "https://exchainrpc.okex.org",
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 66
    // }
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY,
      bsc: process.env.BSC_API_KEY
    }
  }
};
