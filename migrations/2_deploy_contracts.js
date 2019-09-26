var SpectreToken = artifacts.require("./SpectreToken.sol");
var SpectreTokenSale = artifacts.require("./SpectreTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SpectreToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SpectreTokenSale, SpectreToken.address, tokenPrice);
  });
};
