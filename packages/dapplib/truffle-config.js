require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain punch gloom problem off topple'; 
let testAccounts = [
"0x3855364f16d8f7cc20c6e6d93dbd0e9b6b650132b31652e6b4a6110515a5a8a4",
"0xa0e3e8d49033749a0d77e9b8ca81e3d827add1df36b06f17042c852371e7156c",
"0x1c8a8cafaa9620bcec7c3636b74234752abac36665cf5c55c381b4d249ba971a",
"0xaae45893893f5d8a3b004feec34973c1ea74981c48a3be4ea58e39fe1c71a4e7",
"0xf06f3accf638cd80b29b630010eb8bd15dfc86484e66810ae2f311f1db3baed3",
"0xdb7ec339e13cae29e93c6129d73b535bf8ad0cf48dca4edb43d53d1b0bf61d23",
"0xe30fb7c906125a1a5c87090447e540102ad7bfd72593e1cdb2ee29b73adf6e63",
"0x03b3b0c0c6f33aeefc2d859428d94a4e14a511b2dd00f8bb175e44dcd2aeaf70",
"0xdac145668e2c2449cc30ac51b2eb856b42eab19a95528c01027a795817e671d2",
"0x975d16b6c585b78657f3ab87a110dbd0722f79f1190bb04e38522b7647ec72e1"
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


