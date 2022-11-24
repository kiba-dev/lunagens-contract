const { ethers, network } = require("hardhat");

(async () => {
    const TestToken = await ethers.getContractFactory("TestERC20");
    const testToken = await TestToken.deploy(ethers.utils.parseEther("1000"))
    console.log(testToken.address)
})()