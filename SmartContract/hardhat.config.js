require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TCn1H-9h4_kwJpu93kpSVxRXJPUci17n',
      accounts: [
        '843f4bc1b3ea4ac8dd2bab4627b81f0a7719da7634fe371b5d45e42d969cc5b7',
      ],
    },
  },
};

