require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain unknown hunt desert flush sport'; 
let testAccounts = [
"0xe6247ce9499a8c092bdb05ea77bcff80a8af90559729570857508c3451f51d06",
"0x39bddae8711ccb18913cf8f08bed095ae46ef951659d9b7d84ee0d65a27bcd42",
"0x63750def636f85b0060be7f200a6a384abcb39391ddc142466a6e66b731c4c79",
"0xafc075d064c65bff2b270389f5fae94940e43d48e468dab60a6dc59da8fd217c",
"0x0e98195a9d63e863ea4ee9f94509ef962828d730903a85a46d3abef35d079eea",
"0x010c959fc57c326f7ea93b5ccb3c9694d3b00a00773f465d87fab14c8ed3ddac",
"0x29a9a7ffa88ff9df57d36ca067a108b0e5ac4d99ac11102100d3d621509ec602",
"0xb06c6e428f88c192eb49d8903ee3032d888604bd5bfde7c98517b78a7f70edaf",
"0xff605e4283c54236c24f5fc842c24be59f778963c415a2a59a42fa470472a65e",
"0xc60970f3512456d187b373994f919910f5e935021b8081a749200120c0a96171"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


