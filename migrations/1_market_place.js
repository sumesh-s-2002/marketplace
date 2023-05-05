const marketplace = artifacts.require("marketplace");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(marketplace);
};