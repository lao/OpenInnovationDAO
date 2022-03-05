
# REMIX EXAMPLE PROJECT

Remix example project is present when Remix loads for the very first time or there are no files existing in the File Explorer. 
It contains 3 directories:

1. 'contracts': Holds three contracts with different complexity level, denoted with number prefix in file name.
2. 'scripts': Holds two scripts to deploy a contract. It is explained below.
3. 'tests': Contains one test file for 'Ballot' contract with unit tests in Solidity.

# SCRIPTS

The 'scripts' folder contains example async/await scripts for deploying the 'Storage' contract.
For the deployment of any other contract, 'contractName' and 'constructorArgs' should be updated (along with other code if required). 
Scripts have full access to the web3.js and ethers.js libraries.

To run a script, right click on file name in the file explorer and click 'Run'. Remember, Solidity file must already be compiled.

Output from script will appear in remix terminal.

# LOCAL DEVELOPMENT

> This local dev method can and should be improved, I dont trust send the files oved to a Web IDE but this was the only way so far I found to easily develop and deploy contracts to the testnet I have created. I am using MetaMask Wallet, maybe that is the reason. =/

## Connect your local path to Remix Web IDE

The command bellow will get the current path and all its files and send to `Remix Web IDE`, where you can compile, deploy, test smart contracts and connect to your wallet.

```bash
npx remixd -s ./ --remix-ide https://remix.ethereum.org 

# or
npm run remix:init
```

- Then open the link `https://remix.ethereum.org`
- Click `Connect to Localhost`
- Your files should be visible now

## Compile a smart contract

One inside the `Remix Web IDE`, you have a tab named `Solidity Compiler`. Follow the steps to compile a specific contract:

- Open the desired contract file (extension `.sol`) in the IDE.
- Open `Solidity Compiler` tab
- There should be a blue button `Compile <file_name.sol>`, click it to compile

## Deploy  

- Connect to your wallet and in the testnet blockchain