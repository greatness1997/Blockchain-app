require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/OA4t5mcy9ig4I1xn9Y5oLg4V0QLLQeIT',
      accounts: ['67c39b1df2f829f5d209a5cba551b8511483d9800ac1fbe16ee74af7cfbd1145']
    }
  }
};
