const selectCryptoArr = [
  {
    value: 'Bitcoin',
    label: 'Bitcoin',
  },
  {
    value: 'Ethereum',
    label: 'Ethereum',
  },
  {
    value: 'Binance Coin',
    label: 'Binance Coin',
  },
  {
    value: 'Tether',
    label: 'Tether',
  },
  {
    value: 'Solana',
    label: 'Solana',
  },
  {
    value: 'Cardano',
    label: 'Cardano',
  },
  {
    value: 'USD Coin',
    label: 'USD Coin',
  },
  {
    value: 'XRP',
    label: 'XRP',
  },
  {
    value: 'Terra',
    label: 'Terra',
  },
  {
    value: 'Avalanche',
    label: 'Avalanche',
  },
  {
    value: 'Polkadot',
    label: 'Polkadot',
  },
  {
    value: 'Dogecoin',
    label: 'Dogecoin',
  },
  {
    value: 'Shiba Inu',
    label: 'Shiba Inu',
  },
  {
    value: 'Polygon',
    label: 'Polygon',
  },
  {
    value: 'Crypto.com Coin',
    label: 'Crypto.com Coin',
  },
  {
    value: 'Binance USD',
    label: 'Binance USD',
  },
  {
    value: 'Wrapped Bitcoin',
    label: 'Wrapped Bitcoin',
  },
  {
    value: 'Algorand',
    label: 'Algorand',
  },
  {
    value: 'Uniswap',
    label: 'Uniswap',
  },
  {
    value: 'Litecoin',
    label: 'Litecoin',
  },
  {
    value: 'TerraUSD',
    label: 'TerraUSD',
  },
  {
    value: 'Chainlink',
    label: 'Chainlink',
  },
  {
    value: 'Dai',
    label: 'Dai',
  },
  {
    value: 'NEAR Protocol',
    label: 'NEAR Protocol',
  },
  {
    value: 'Bitcoin Cash',
    label: 'Bitcoin Cash',
  },
  {
    value: 'Cosmos',
    label: 'Cosmos',
  },
  {
    value: 'TRON',
    label: 'TRON',
  },
  {
    value: 'Stellar',
    label: 'Stellar',
  },
  {
    value: 'Fantom',
    label: 'Fantom',
  },
  {
    value: 'Decentraland',
    label: 'Decentraland',
  },
  {
    value: 'Axie Infinity',
    label: 'Axie Infinity',
  },
  {
    value: 'FTX Token',
    label: 'FTX Token',
  },
  {
    value: 'VeChain',
    label: 'VeChain',
  },
  {
    value: 'Hedera',
    label: 'Hedera',
  },
  {
    value: 'The Sandbox',
    label: 'The Sandbox',
  },
  {
    value: 'Internet Computer',
    label: 'Internet Computer',
  },
  {
    value: 'Filecoin',
    label: 'Filecoin',
  },
  {
    value: 'Bitcoin BEP2',
    label: 'Bitcoin BEP2',
  },
  {
    value: 'Theta Network',
    label: 'Theta Network',
  },
  {
    value: 'Elrond',
    label: 'Elrond',
  },
  {
    value: 'Ethereum Classic',
    label: 'Ethereum Classic',
  },
  {
    value: 'Monero',
    label: 'Monero',
  },
  {
    value: 'Tezos',
    label: 'Tezos',
  },
  {
    value: 'Helium',
    label: 'Helium',
  },
  {
    value: 'IOTA',
    label: 'IOTA',
  },
  {
    value: 'UNUS SED LEO',
    label: 'UNUS SED LEO',
  },
  {
    value: 'Aave',
    label: 'Aave',
  },
  {
    value: 'Klaytn',
    label: 'Klaytn',
  },
  {
    value: 'Harmony',
    label: 'Harmony',
  },
  {
    value: 'Gala',
    label: 'Gala',
  },
  {
    value: 'The Graph',
    label: 'The Graph',
  },
  {
    value: 'EOS',
    label: 'EOS',
  },
  {
    value: 'PancakeSwap',
    label: 'PancakeSwap',
  },
  {
    value: 'Stacks',
    label: 'Stacks',
  },
  {
    value: 'Flow',
    label: 'Flow',
  },
  {
    value: 'Loopring',
    label: 'Loopring',
  },
  {
    value: 'Curve DAO Token',
    label: 'Curve DAO Token',
  },
  {
    value: 'BitTorrent',
    label: 'BitTorrent',
  },
  {
    value: 'Kusama',
    label: 'Kusama',
  },
  {
    value: 'Bitcoin SV',
    label: 'Bitcoin SV',
  },
  {
    value: 'Maker',
    label: 'Maker',
  },
  {
    value: 'Enjin Coin',
    label: 'Enjin Coin',
  },
  {
    value: 'Quant',
    label: 'Quant',
  },
  {
    value: 'Arweave',
    label: 'Arweave',
  },
  {
    value: 'Kadena',
    label: 'Kadena',
  },
  {
    value: 'eCash',
    label: 'eCash',
  },
  {
    value: 'Amp',
    label: 'Amp',
  },
  {
    value: 'Celo',
    label: 'Celo',
  },
  {
    value: 'Zcash',
    label: 'Zcash',
  },
  {
    value: 'THORChain',
    label: 'THORChain',
  },
  {
    value: 'Neo',
    label: 'Neo',
  },
  {
    value: 'Basic Attention Token',
    label: 'Basic Attention Token',
  },
  {
    value: 'KuCoin Token',
    label: 'KuCoin Token',
  },
  {
    value: 'Chiliz',
    label: 'Chiliz',
  },
  {
    value: 'OKB',
    label: 'OKB',
  },
  {
    value: 'Waves',
    label: 'Waves',
  },
  {
    value: 'Oasis Network',
    label: 'Oasis Network',
  },
  {
    value: 'Huobi Token',
    label: 'Huobi Token',
  },
  {
    value: 'Dash',
    label: 'Dash',
  },
  {
    value: 'Nexo',
    label: 'Nexo',
  },
  {
    value: 'yearn.finance',
    label: 'yearn.finance',
  },
  {
    value: 'XDC Network',
    label: 'XDC Network',
  },
  {
    value: 'Compound',
    label: 'Compound',
  },
  {
    value: 'TrueUSD',
    label: 'TrueUSD',
  },
  {
    value: 'Holo',
    label: 'Holo',
  },
  {
    value: 'Mina',
    label: 'Mina',
  },
  {
    value: 'IoTeX',
    label: 'IoTeX',
  },
  {
    value: 'SushiSwap',
    label: 'SushiSwap',
  },
  {
    value: 'NEM',
    label: 'NEM',
  },
  {
    value: 'Ravencoin',
    label: 'Ravencoin',
  },
  {
    value: '1inch Network',
    label: '1inch Network',
  },
  {
    value: 'Theta Fuel',
    label: 'Theta Fuel',
  },
  {
    value: 'Decred',
    label: 'Decred',
  },
  {
    value: 'Celsius',
    label: 'Celsius',
  },
  {
    value: 'Gnosis',
    label: 'Gnosis',
  },
  {
    value: 'Pax Dollar',
    label: 'Pax Dollar',
  },
  {
    value: 'Revain',
    label: 'Revain',
  },
  {
    value: 'Dogelon Mars',
    label: 'Dogelon Mars',
  },
  {
    value: 'Zilliqa',
    label: 'Zilliqa',
  },
  {
    value: 'Secret',
    label: 'Secret',
  },
  {
    value: 'Immutable X',
    label: 'Immutable X',
  },
  {
    value: 'Qtum',
    label: 'Qtum',
  },
  {
    value: 'WAX',
    label: 'WAX',
  },
  {
    value: 'OMG Network',
    label: 'OMG Network',
  },
  {
    value: 'BORA',
    label: 'BORA',
  },
  {
    value: 'Audius',
    label: 'Audius',
  },
  {
    value: 'Velas',
    label: 'Velas',
  },
  {
    value: 'Livepeer',
    label: 'Livepeer',
  },
  {
    value: 'ICON',
    label: 'ICON',
  },
  {
    value: 'Ankr',
    label: 'Ankr',
  },
  {
    value: 'Voyager Token',
    label: 'Voyager Token',
  },
  {
    value: 'renBTC',
    label: 'renBTC',
  },
  {
    value: 'Syscoin',
    label: 'Syscoin',
  },
  {
    value: 'APENFT',
    label: 'APENFT',
  },
  {
    value: 'Bancor',
    label: 'Bancor',
  },
  {
    value: 'Siacoin',
    label: 'Siacoin',
  },
  {
    value: 'Horizen',
    label: 'Horizen',
  },
  {
    value: '0x',
    label: '0x',
  },
  {
    value: 'Bitcoin Gold',
    label: 'Bitcoin Gold',
  },
  {
    value: 'Telcoin',
    label: 'Telcoin',
  },
  {
    value: 'Synthetix',
    label: 'Synthetix',
  },
  {
    value: 'Perpetual Protocol',
    label: 'Perpetual Protocol',
  },
  {
    value: 'Nervos Network',
    label: 'Nervos Network',
  },
  {
    value: 'SKALE Network',
    label: 'SKALE Network',
  },
  {
    value: 'Storj',
    label: 'Storj',
  },
  {
    value: 'Kava',
    label: 'Kava',
  },
  {
    value: 'SwissBorg',
    label: 'SwissBorg',
  },
  {
    value: 'UMA',
    label: 'UMA',
  },
  {
    value: 'Hive',
    label: 'Hive',
  },
  {
    value: 'IOST',
    label: 'IOST',
  },
  {
    value: 'Ontology',
    label: 'Ontology',
  },
  {
    value: 'dYdX',
    label: 'dYdX',
  },
  {
    value: 'Ocean Protocol',
    label: 'Ocean Protocol',
  },
  {
    value: 'Flux',
    label: 'Flux',
  },
  {
    value: 'Ren',
    label: 'Ren',
  },
  {
    value: 'WOO Network',
    label: 'WOO Network',
  },
  {
    value: 'Neutrino USD',
    label: 'Neutrino USD',
  },
  {
    value: 'NuCypher',
    label: 'NuCypher',
  },
  {
    value: 'Chromia',
    label: 'Chromia',
  },
  {
    value: 'Moonriver',
    label: 'Moonriver',
  },
  {
    value: 'GateToken',
    label: 'GateToken',
  },
  {
    value: 'Raydium',
    label: 'Raydium',
  },
  {
    value: 'CEEK VR',
    label: 'CEEK VR',
  },
  {
    value: 'DigiByte',
    label: 'DigiByte',
  },
  {
    value: 'Aragon',
    label: 'Aragon',
  },
  {
    value: 'Polymath',
    label: 'Polymath',
  },
  {
    value: 'Celer Network',
    label: 'Celer Network',
  },
  {
    value: 'Serum',
    label: 'Serum',
  },
  {
    value: 'Nano',
    label: 'Nano',
  },
  {
    value: 'Golem',
    label: 'Golem',
  },
  {
    value: 'OriginTrail',
    label: 'OriginTrail',
  },
  {
    value: 'XYO',
    label: 'XYO',
  },
  {
    value: 'WINkLink',
    label: 'WINkLink',
  },
  {
    value: 'Swipe',
    label: 'Swipe',
  },
  {
    value: 'Ultra',
    label: 'Ultra',
  },
  {
    value: 'Fei USD',
    label: 'Fei USD',
  },
  {
    value: 'DigitalBits',
    label: 'DigitalBits',
  },
  {
    value: 'MyNeighborAlice',
    label: 'MyNeighborAlice',
  },
  {
    value: 'JUST',
    label: 'JUST',
  },
  {
    value: 'WazirX',
    label: 'WazirX',
  },
  {
    value: 'Reserve Rights',
    label: 'Reserve Rights',
  },
  {
    value: 'Fetch.ai',
    label: 'Fetch.ai',
  },
  {
    value: 'Dent',
    label: 'Dent',
  },
  {
    value: 'Dusk Network',
    label: 'Dusk Network',
  },
  {
    value: 'Request',
    label: 'Request',
  },
  {
    value: 'Function X',
    label: 'Function X',
  },
  {
    value: 'Casper',
    label: 'Casper',
  },
  {
    value: 'Injective Protocol',
    label: 'Injective Protocol',
  },
  {
    value: 'Cartesi',
    label: 'Cartesi',
  },
  {
    value: 'COTI',
    label: 'COTI',
  },
  {
    value: 'Mdex',
    label: 'Mdex',
  },
  {
    value: 'PAX Gold',
    label: 'PAX Gold',
  },
  {
    value: 'Dvision Network',
    label: 'Dvision Network',
  },
  {
    value: 'Phantasma',
    label: 'Phantasma',
  },
  {
    value: 'Alpha Finance Lab',
    label: 'Alpha Finance Lab',
  },
  {
    value: 'Lisk',
    label: 'Lisk',
  },
  {
    value: 'Reef',
    label: 'Reef',
  },
  {
    value: 'MediBloc',
    label: 'MediBloc',
  },
  {
    value: 'Verge',
    label: 'Verge',
  },
  {
    value: 'Energy Web Token',
    label: 'Energy Web Token',
  },
  {
    value: 'VeThor Token',
    label: 'VeThor Token',
  },
  {
    value: 'Biconomy',
    label: 'Biconomy',
  },
  {
    value: 'Keep3rV1',
    label: 'Keep3rV1',
  },
  {
    value: 'NKN',
    label: 'NKN',
  },
  {
    value: 'Bitcoin Diamond',
    label: 'Bitcoin Diamond',
  },
  {
    value: 'Bitcoin Standard Hashrate Token',
    label: 'Bitcoin Standard Hashrate Token',
  },
  {
    value: 'Orchid',
    label: 'Orchid',
  },
  {
    value: 'Polkastarter',
    label: 'Polkastarter',
  },
  {
    value: 'Constellation',
    label: 'Constellation',
  },
  {
    value: 'iExec RLC',
    label: 'iExec RLC',
  },
  {
    value: 'Status',
    label: 'Status',
  },
  {
    value: 'Unibright',
    label: 'Unibright',
  },
  {
    value: 'Powerledger',
    label: 'Powerledger',
  },
  {
    value: 'Origin Protocol',
    label: 'Origin Protocol',
  },
  {
    value: 'Ardor',
    label: 'Ardor',
  },
  {
    value: 'Civic',
    label: 'Civic',
  },
  {
    value: 'Conflux',
    label: 'Conflux',
  },
  {
    value: 'Sun (New)',
    label: 'Sun (New)',
  },
  {
    value: 'MX TOKEN',
    label: 'MX TOKEN',
  },
  {
    value: 'ASD',
    label: 'ASD',
  },
  {
    value: 'HEX',
    label: 'HEX',
  },
  {
    value: 'Lido stETH',
    label: 'Lido stETH',
  },
  {
    value: 'Toncoin',
    label: 'Toncoin',
  },
  {
    value: 'Wrapped BNB',
    label: 'Wrapped BNB',
  },
  {
    value: 'Convex Finance',
    label: 'Convex Finance',
  },
  {
    value: 'Huobi BTC',
    label: 'Huobi BTC',
  },
  {
    value: 'Frax',
    label: 'Frax',
  },
  {
    value: 'Spell Token',
    label: 'Spell Token',
  },
  {
    value: 'yOUcash',
    label: 'yOUcash',
  },
  {
    value: 'SafeMoon',
    label: 'SafeMoon',
  },
  {
    value: 'Creditcoin',
    label: 'Creditcoin',
  },
  {
    value: 'WEMIX',
    label: 'WEMIX',
  },
  {
    value: 'Symbol',
    label: 'Symbol',
  },
  {
    value: 'BitDAO',
    label: 'BitDAO',
  },
  {
    value: 'ECOMI',
    label: 'ECOMI',
  },
  {
    value: 'DeFiChain',
    label: 'DeFiChain',
  },
  {
    value: 'LINK',
    label: 'LINK',
  },
  {
    value: 'Venus BNB',
    label: 'Venus BNB',
  },
  {
    value: 'Render Token',
    label: 'Render Token',
  },
  {
    value: 'NXM',
    label: 'NXM',
  },
  {
    value: 'Decentralized Social',
    label: 'Decentralized Social',
  },
  {
    value: 'Ethereum value Service',
    label: 'Ethereum value Service',
  },
  {
    value: 'Rally',
    label: 'Rally',
  },
  {
    value: 'Counos X',
    label: 'Counos X',
  },
  {
    value: 'MobileCoin',
    label: 'MobileCoin',
  },
  {
    value: 'Liquity USD',
    label: 'Liquity USD',
  },
  {
    value: 'Anchor Protocol',
    label: 'Anchor Protocol',
  },
  {
    value: 'Metahero',
    label: 'Metahero',
  },
  {
    value: 'Illuvium',
    label: 'Illuvium',
  },
  {
    value: 'UFO Gaming',
    label: 'UFO Gaming',
  },
  {
    value: 'KOK',
    label: 'KOK',
  },
  {
    value: 'WhiteCoin',
    label: 'WhiteCoin',
  },
  {
    value: 'The Transfer Token',
    label: 'The Transfer Token',
  },
  {
    value: 'Frax Share',
    label: 'Frax Share',
  },
  {
    value: 'Radio Caca',
    label: 'Radio Caca',
  },
  {
    value: 'SuperFarm',
    label: 'SuperFarm',
  },
  {
    value: 'Boba Network',
    label: 'Boba Network',
  },
  {
    value: 'Coin98',
    label: 'Coin98',
  },
  {
    value: 'Tribe',
    label: 'Tribe',
  },
  {
    value: 'Bloktopia',
    label: 'Bloktopia',
  },
  {
    value: 'Persistence',
    label: 'Persistence',
  },
  {
    value: 'Rocket Pool',
    label: 'Rocket Pool',
  },
  {
    value: 'MetisDAO',
    label: 'MetisDAO',
  },
  {
    value: 'Keep Network',
    label: 'Keep Network',
  },
  {
    value: 'HUSD',
    label: 'HUSD',
  },
  {
    value: 'MOBOX',
    label: 'MOBOX',
  },
  {
    value: 'Alitas',
    label: 'Alitas',
  },
  {
    value: 'OpenDAO',
    label: 'OpenDAO',
  },
  {
    value: 'JasmyCoin',
    label: 'JasmyCoin',
  },
  {
    value: 'Yield Guild Games',
    label: 'Yield Guild Games',
  },
  {
    value: 'Bitpanda Ecosystem Token',
    label: 'Bitpanda Ecosystem Token',
  },
  {
    value: 'Mask Network',
    label: 'Mask Network',
  },
  {
    value: 'Starlink',
    label: 'Starlink',
  },
  {
    value: 'Hathor',
    label: 'Hathor',
  },
  {
    value: 'PlayDapp',
    label: 'PlayDapp',
  },
  {
    value: 'JOE',
    label: 'JOE',
  },
  {
    value: 'Veritaseum',
    label: 'Veritaseum',
  },
  {
    value: 'Rari Governance Token',
    label: 'Rari Governance Token',
  },
  {
    value: 'YooShi',
    label: 'YooShi',
  },
  {
    value: 'Orbit Chain',
    label: 'Orbit Chain',
  },
  {
    value: 'Anyswap',
    label: 'Anyswap',
  },
  {
    value: 'PlatON',
    label: 'PlatON',
  },
  {
    value: 'RMRK',
    label: 'RMRK',
  },
  {
    value: 'Braintrust',
    label: 'Braintrust',
  },
  {
    value: 'Vulcan Forged PYR',
    label: 'Vulcan Forged PYR',
  },
  {
    value: 'Everscale',
    label: 'Everscale',
  },
  {
    value: 'Sologenic',
    label: 'Sologenic',
  },
  {
    value: 'DAO Maker',
    label: 'DAO Maker',
  },
  {
    value: 'Alchemix',
    label: 'Alchemix',
  },
  {
    value: 'Wilder World',
    label: 'Wilder World',
  },
  {
    value: 'HyperDAO',
    label: 'HyperDAO',
  },
  {
    value: 'Chia Network',
    label: 'Chia Network',
  },
  {
    value: 'Pundi X (New)',
    label: 'Pundi X (New)',
  },
  {
    value: 'LUKSO',
    label: 'LUKSO',
  },
  {
    value: 'HedgeTrade',
    label: 'HedgeTrade',
  },
  {
    value: 'Mines of Dalarnia',
    label: 'Mines of Dalarnia',
  },
  {
    value: 'Orion Protocol',
    label: 'Orion Protocol',
  },
  {
    value: 'KardiaChain',
    label: 'KardiaChain',
  },
  {
    value: 'Trust Wallet Token',
    label: 'Trust Wallet Token',
  },
  {
    value: 'Radicle',
    label: 'Radicle',
  },
  {
    value: 'GlitzKoin',
    label: 'GlitzKoin',
  },
  {
    value: 'Kyber Network Crystal v2',
    label: 'Kyber Network Crystal v2',
  },
  {
    value: 'Circuits of label',
    label: 'Circuits of label',
  },
  {
    value: 'Alchemy Pay',
    label: 'Alchemy Pay',
  },
  {
    value: 'Qredo',
    label: 'Qredo',
  },
  {
    value: 'Akash Network',
    label: 'Akash Network',
  },
  {
    value: 'Voxies',
    label: 'Voxies',
  },
  {
    value: 'Sapphire',
    label: 'Sapphire',
  },
  {
    value: 'Star Atlas',
    label: 'Star Atlas',
  },
  {
    value: 'inSure DeFi',
    label: 'inSure DeFi',
  },
  {
    value: 'Humanscape',
    label: 'Humanscape',
  },
  {
    value: 'Wrapped NCG (Nine Chronicles Gold)',
    label: 'Wrapped NCG (Nine Chronicles Gold)',
  },
  {
    value: 'StormX',
    label: 'StormX',
  },
  {
    value: 'Ontology Gas',
    label: 'Ontology Gas',
  },
  {
    value: 'Bifrost (BFC)',
    label: 'Bifrost (BFC)',
  },
  {
    value: 'BakeryToken',
    label: 'BakeryToken',
  },
  {
    value: 'aelf',
    label: 'aelf',
  },
  {
    value: 'Merit Circle',
    label: 'Merit Circle',
  },
  {
    value: 'Divi',
    label: 'Divi',
  },
  {
    value: 'Mango',
    label: 'Mango',
  },
  {
    value: 'KILT Protocol',
    label: 'KILT Protocol',
  },
  {
    value: 'Gitcoin',
    label: 'Gitcoin',
  },
  {
    value: 'Augur',
    label: 'Augur',
  },
  {
    value: 'Alien Worlds',
    label: 'Alien Worlds',
  },
  {
    value: 'Pirate Chain',
    label: 'Pirate Chain',
  },
  {
    value: 'Prometeus',
    label: 'Prometeus',
  },
  {
    value: 'BioPassport Token',
    label: 'BioPassport Token',
  },
  {
    value: 'XSGD',
    label: 'XSGD',
  },
  {
    value: 'e-Radix',
    label: 'e-Radix',
  },
  {
    value: 'Venus BTC',
    label: 'Venus BTC',
  },
  {
    value: 'Gemini Dollar',
    label: 'Gemini Dollar',
  },
  {
    value: 'Badger DAO',
    label: 'Badger DAO',
  },
  {
    value: 'Tether Gold',
    label: 'Tether Gold',
  },
  {
    value: 'Stratis',
    label: 'Stratis',
  },
  {
    value: 'Mirror Protocol',
    label: 'Mirror Protocol',
  },
  {
    value: 'Seedify.fund',
    label: 'Seedify.fund',
  },
  {
    value: 'Vectorspace AI',
    label: 'Vectorspace AI',
  },
  {
    value: 'Orbs',
    label: 'Orbs',
  },
  {
    value: 'MaidSafeCoin',
    label: 'MaidSafeCoin',
  },
  {
    value: 'Numeraire',
    label: 'Numeraire',
  },
  {
    value: 'Hxro',
    label: 'Hxro',
  },
  {
    value: 'Venus',
    label: 'Venus',
  },
  {
    value: 'Sovryn',
    label: 'Sovryn',
  },
  {
    value: 'Dawn Protocol',
    label: 'Dawn Protocol',
  },
  {
    value: 'Band Protocol',
    label: 'Band Protocol',
  },
  {
    value: 'SingularityNET',
    label: 'SingularityNET',
  },
  {
    value: 'TrueFi',
    label: 'TrueFi',
  },
  {
    value: 'CRYPTO20',
    label: 'CRYPTO20',
  },
  {
    value: 'Metadium',
    label: 'Metadium',
  },
  {
    value: 'Enzyme',
    label: 'Enzyme',
  },
  {
    value: 'Bloomzed Loyalty Club Ticket',
    label: 'Bloomzed Loyalty Club Ticket',
  },
  {
    value: 'Steem',
    label: 'Steem',
  },
  {
    value: 'DeversiFi',
    label: 'DeversiFi',
  },
  {
    value: 'TomoChain',
    label: 'TomoChain',
  },
  {
    value: 'Efinity Token',
    label: 'Efinity Token',
  },
  {
    value: 'Ribbon Finance',
    label: 'Ribbon Finance',
  },
  {
    value: 'Bonfida',
    label: 'Bonfida',
  },
  {
    value: 'Safe',
    label: 'Safe',
  },
  {
    value: 'AIOZ Network',
    label: 'AIOZ Network',
  },
  {
    value: 'RSK Infrastructure Framework',
    label: 'RSK Infrastructure Framework',
  },
  {
    value: 'Centrality',
    label: 'Centrality',
  },
  {
    value: 'SafePal',
    label: 'SafePal',
  },
  {
    value: 'Ark',
    label: 'Ark',
  },
  {
    value: 'Biswap',
    label: 'Biswap',
  },
  {
    value: 'Beta Finance',
    label: 'Beta Finance',
  },
  {
    value: 'Ergo',
    label: 'Ergo',
  },
  {
    value: 'API3',
    label: 'API3',
  },
  {
    value: 'Telos',
    label: 'Telos',
  },
  {
    value: 'DeFi Pulse Index',
    label: 'DeFi Pulse Index',
  },
  {
    value: 'Electroneum',
    label: 'Electroneum',
  },
  {
    value: 'Swarm',
    label: 'Swarm',
  },
  {
    value: 'Hyperion',
    label: 'Hyperion',
  },
  {
    value: 'IDEX',
    label: 'IDEX',
  },
  {
    value: 'Ampleforth',
    label: 'Ampleforth',
  },
  {
    value: 'Cyclub',
    label: 'Cyclub',
  },
  {
    value: 'MVL',
    label: 'MVL',
  },
  {
    value: 'Presearch',
    label: 'Presearch',
  },
  {
    value: 'AllianceBlock',
    label: 'AllianceBlock',
  },
  {
    value: 'Aavegotchi',
    label: 'Aavegotchi',
  },
  {
    value: 'TitanSwap',
    label: 'TitanSwap',
  },
  {
    value: 'Clover Finance',
    label: 'Clover Finance',
  },
  {
    value: 'SOMESING',
    label: 'SOMESING',
  },
  {
    value: 'Verasity',
    label: 'Verasity',
  },
  {
    value: 'Linear',
    label: 'Linear',
  },
  {
    value: 'Venus ETH',
    label: 'Venus ETH',
  },
  {
    value: 'Sport and Leisure',
    label: 'Sport and Leisure',
  },
  {
    value: 'Syntropy',
    label: 'Syntropy',
  },
  {
    value: 'Rakon',
    label: 'Rakon',
  },
  {
    value: 'Utrust',
    label: 'Utrust',
  },
  {
    value: 'USDX [Kava]',
    label: 'USDX [Kava]',
  },
  {
    value: 'FUNToken',
    label: 'FUNToken',
  },
  {
    value: 'GXChain',
    label: 'GXChain',
  },
  {
    value: 'Uquid Coin',
    label: 'Uquid Coin',
  },
  {
    value: 'Zelwin',
    label: 'Zelwin',
  },
  {
    value: 'Proton',
    label: 'Proton',
  },
  {
    value: 'LCX',
    label: 'LCX',
  },
  {
    value: 'Ellipsis',
    label: 'Ellipsis',
  },
  {
    value: 'Metal',
    label: 'Metal',
  },
  {
    value: 'DeRace',
    label: 'DeRace',
  },
  {
    value: 'Handshake',
    label: 'Handshake',
  },
  {
    value: 'Centrifuge',
    label: 'Centrifuge',
  },
  {
    value: 'Wanchain',
    label: 'Wanchain',
  },
  {
    value: 'ABBC Coin',
    label: 'ABBC Coin',
  },
  {
    value: 'Standard Tokenization Protocol',
    label: 'Standard Tokenization Protocol',
  },
  {
    value: 'Toko Token',
    label: 'Toko Token',
  },
  {
    value: 'RFOX',
    label: 'RFOX',
  },
  {
    value: 'DEAPcoin',
    label: 'DEAPcoin',
  },
  {
    value: 'MXC',
    label: 'MXC',
  },
  {
    value: 'Terra Virtua Kolect',
    label: 'Terra Virtua Kolect',
  },
  {
    value: 'XeniosCoin',
    label: 'XeniosCoin',
  },
  {
    value: 'Dero',
    label: 'Dero',
  },
  {
    value: 'STAKE',
    label: 'STAKE',
  },
  {
    value: 'QuarkChain',
    label: 'QuarkChain',
  },
  {
    value: 'Chrono.tech',
    label: 'Chrono.tech',
  },
  {
    value: 'Balancer',
    label: 'Balancer',
  },
  {
    value: 'PEAKDEFI',
    label: 'PEAKDEFI',
  },
  {
    value: 'sUSD',
    label: 'sUSD',
  },
  {
    value: 'Kin',
    label: 'Kin',
  },
  {
    value: 'Solanium',
    label: 'Solanium',
  },
  {
    value: 'VVS Finance',
    label: 'VVS Finance',
  },
  {
    value: 'Harvest Finance',
    label: 'Harvest Finance',
  },
  {
    value: 'BinaryX',
    label: 'BinaryX',
  },
  {
    value: 'ZB Token',
    label: 'ZB Token',
  },
  {
    value: 'Adventure Gold',
    label: 'Adventure Gold',
  },
  {
    value: 'Everipedia',
    label: 'Everipedia',
  },
  {
    value: 'Aurory',
    label: 'Aurory',
  },
  {
    value: 'GameFi',
    label: 'GameFi',
  },
  {
    value: 'DerivaDAO',
    label: 'DerivaDAO',
  },
  {
    value: 'RichQUACK.com',
    label: 'RichQUACK.com',
  },
  {
    value: 'Phala Network',
    label: 'Phala Network',
  },
  {
    value: 'Strike',
    label: 'Strike',
  },
  {
    value: 'Aleph.im',
    label: 'Aleph.im',
  },
  {
    value: 'Klever',
    label: 'Klever',
  },
  {
    value: 'RSK Smart Bitcoin',
    label: 'RSK Smart Bitcoin',
  },
  {
    value: 'Ethernity Chain',
    label: 'Ethernity Chain',
  },
  {
    value: 'dKargo',
    label: 'dKargo',
  },
  {
    value: 'LTO Network',
    label: 'LTO Network',
  },
  {
    value: 'Decentral Games [Old]',
    label: 'Decentral Games [Old]',
  },
  {
    value: 'DeFine',
    label: 'DeFine',
  },
  {
    value: 'DFI.Money',
    label: 'DFI.Money',
  },
  {
    value: 'ssv.network',
    label: 'ssv.network',
  },
  {
    value: 'Propy',
    label: 'Propy',
  },
  {
    value: 'STASIS EURO',
    label: 'STASIS EURO',
  },
  {
    value: 'Automata Network',
    label: 'Automata Network',
  },
  {
    value: 'Boson Protocol',
    label: 'Boson Protocol',
  },
  {
    value: 'QuickSwap',
    label: 'QuickSwap',
  },
  {
    value: 'ARPA Chain',
    label: 'ARPA Chain',
  },
  {
    value: 'BSCPAD',
    label: 'BSCPAD',
  },
  {
    value: 'GuildFi',
    label: 'GuildFi',
  },
  {
    value: 'Star Atlas DAO',
    label: 'Star Atlas DAO',
  },
  {
    value: 'TrustSwap',
    label: 'TrustSwap',
  },
  {
    value: 'Tranchess',
    label: 'Tranchess',
  },
  {
    value: 'CertiK',
    label: 'CertiK',
  },
  {
    value: 'Samoyedcoin',
    label: 'Samoyedcoin',
  },
  {
    value: 'Wrapped NXM',
    label: 'Wrapped NXM',
  },
  {
    value: 'BabySwap',
    label: 'BabySwap',
  },
  {
    value: 'Gods Unchained',
    label: 'Gods Unchained',
  },
  {
    value: 'BitShares',
    label: 'BitShares',
  },
  {
    value: 'DAD',
    label: 'DAD',
  },
  {
    value: 'Deeper Network',
    label: 'Deeper Network',
  },
  {
    value: 'IRISnet',
    label: 'IRISnet',
  },
  {
    value: 'ankrETH',
    label: 'ankrETH',
  },
  {
    value: 'Venus USDC',
    label: 'Venus USDC',
  },
  {
    value: 'BarnBridge',
    label: 'BarnBridge',
  },
  {
    value: 'SuperRare',
    label: 'SuperRare',
  },
  {
    value: 'Chimpion',
    label: 'Chimpion',
  },
  {
    value: 'WHALE',
    label: 'WHALE',
  },
  {
    value: 'Celo Dollar',
    label: 'Celo Dollar',
  },
  {
    value: 'MiL.k',
    label: 'MiL.k',
  },
  {
    value: 'Vega Protocol',
    label: 'Vega Protocol',
  },
  {
    value: 'Alpha Quark Token',
    label: 'Alpha Quark Token',
  },
  {
    value: 'Zenon',
    label: 'Zenon',
  },
  {
    value: 'TROY',
    label: 'TROY',
  },
  {
    value: 'Contentos',
    label: 'Contentos',
  },
  {
    value: 'DODO',
    label: 'DODO',
  },
  {
    value: 'DeFi Land',
    label: 'DeFi Land',
  },
  {
    value: 'Komodo',
    label: 'Komodo',
  },
  {
    value: 'Litentry',
    label: 'Litentry',
  },
  {
    value: 'Morpheus.Network',
    label: 'Morpheus.Network',
  },
  {
    value: 'Travala.com',
    label: 'Travala.com',
  },
  {
    value: 'Ampleforth Governance Token',
    label: 'Ampleforth Governance Token',
  },
  {
    value: 'bZx Protocol',
    label: 'bZx Protocol',
  },
  {
    value: 'SIDUS HEROES',
    label: 'SIDUS HEROES',
  },
  {
    value: 'Shapeshift FOX Token',
    label: 'Shapeshift FOX Token',
  },
  {
    value: 'Moss Coin',
    label: 'Moss Coin',
  },
  {
    value: 'Chainbing',
    label: 'Chainbing',
  },
  {
    value: 'Cortex',
    label: 'Cortex',
  },
  {
    value: 'MimbleWimbleCoin',
    label: 'MimbleWimbleCoin',
  },
  {
    value: 'Rarible',
    label: 'Rarible',
  },
  {
    value: 'Streamr',
    label: 'Streamr',
  },
  {
    value: 'Lido DAO Token',
    label: 'Lido DAO Token',
  },
  {
    value: 'Aergo',
    label: 'Aergo',
  },
  {
    value: 'MARINADE STAKED SOL',
    label: 'MARINADE STAKED SOL',
  },
  {
    value: 'Cratos',
    label: 'Cratos',
  },
  {
    value: 'Reflexer Ungovernance Token',
    label: 'Reflexer Ungovernance Token',
  },
  {
    value: 'TABOO TOKEN',
    label: 'TABOO TOKEN',
  },
  {
    value: 'Measurable Data Token',
    label: 'Measurable Data Token',
  },
  {
    value: 'Loom Network',
    label: 'Loom Network',
  },
  {
    value: 'Karura',
    label: 'Karura',
  },
  {
    value: 'TokenPocket',
    label: 'TokenPocket',
  },
  {
    value: 'Mobius',
    label: 'Mobius',
  },
  {
    value: 'Beefy Finance',
    label: 'Beefy Finance',
  },
  {
    value: 'BoringDAO',
    label: 'BoringDAO',
  },
  {
    value: 'Smooth Love Potion',
    label: 'Smooth Love Potion',
  },
  {
    value: 'Cocos-BCX',
    label: 'Cocos-BCX',
  },
  {
    value: 'Hifi Finance',
    label: 'Hifi Finance',
  },
  {
    value: 'Decentral Games',
    label: 'Decentral Games',
  },
  {
    value: 'Alpaca Finance',
    label: 'Alpaca Finance',
  },
  {
    value: 'Rai Reflex Index',
    label: 'Rai Reflex Index',
  },
  {
    value: 'Carry',
    label: 'Carry',
  },
  {
    value: 'Hacken Token',
    label: 'Hacken Token',
  },
  {
    value: 'HUNT',
    label: 'HUNT',
  },
  {
    value: 'Thunder Token',
    label: 'Thunder Token',
  },
  {
    value: 'KeeperDAO',
    label: 'KeeperDAO',
  },
  {
    value: 'Elitium',
    label: 'Elitium',
  },
  {
    value: 'Haven Protocol',
    label: 'Haven Protocol',
  },
  {
    value: 'KIMCHI.finance',
    label: 'KIMCHI.finance',
  },
  {
    value: 'MonaCoin',
    label: 'MonaCoin',
  },
  {
    value: 'Ambire AdEx',
    label: 'Ambire AdEx',
  },
  {
    value: 'district0x',
    label: 'district0x',
  },
  {
    value: 'POA Network',
    label: 'POA Network',
  },
  {
    value: 'NULS',
    label: 'NULS',
  },
  {
    value: 'Shiden Network',
    label: 'Shiden Network',
  },
  {
    value: 'Kava Lend',
    label: 'Kava Lend',
  },
  {
    value: 'Akropolis',
    label: 'Akropolis',
  },
  {
    value: 'DIA',
    label: 'DIA',
  },
  {
    value: 'Impossible Decentralized Incubator Access',
    label: 'Impossible Decentralized Incubator Access',
  },
  {
    value: 'MixMarvel',
    label: 'MixMarvel',
  },
  {
    value: 'Tellor',
    label: 'Tellor',
  },
  {
    value: 'Splintershards',
    label: 'Splintershards',
  },
  {
    value: 'ONUS',
    label: 'ONUS',
  },
  {
    value: 'Maro',
    label: 'Maro',
  },
  {
    value: 'RAMP',
    label: 'RAMP',
  },
  {
    value: 'Bella Protocol',
    label: 'Bella Protocol',
  },
  {
    value: 'Sentivate',
    label: 'Sentivate',
  },
  {
    value: 'LGCY Network',
    label: 'LGCY Network',
  },
  {
    value: 'Waltonchain',
    label: 'Waltonchain',
  },
  {
    value: 'CUDOS',
    label: 'CUDOS',
  },
  {
    value: 'GMT Token',
    label: 'GMT Token',
  },
  {
    value: 'ApeSwap Finance',
    label: 'ApeSwap Finance',
  },
  {
    value: 'Unifty',
    label: 'Unifty',
  },
  {
    value: 'cVault.finance',
    label: 'cVault.finance',
  },
  {
    value: 'FIO Protocol',
    label: 'FIO Protocol',
  },
  {
    value: 'Liquity',
    label: 'Liquity',
  },
  {
    value: 'Bluzelle',
    label: 'Bluzelle',
  },
  {
    value: 'ZKSwap',
    label: 'ZKSwap',
  },
  {
    value: 'SIX',
    label: 'SIX',
  },
  {
    value: 'SifChain',
    label: 'SifChain',
  },
  {
    value: 'Sentinel',
    label: 'Sentinel',
  },
  {
    value: 'Kleros',
    label: 'Kleros',
  },
  {
    value: 'Saito',
    label: 'Saito',
  },
  {
    value: 'Strong',
    label: 'Strong',
  },
  {
    value: 'NewYork Exchange',
    label: 'NewYork Exchange',
  },
  {
    value: 'Darma Cash',
    label: 'Darma Cash',
  },
  {
    value: 'Aion',
    label: 'Aion',
  },
  {
    value: 'Cobak Token',
    label: 'Cobak Token',
  },
  {
    value: 'Opulous',
    label: 'Opulous',
  },
  {
    value: 'Shyft Network',
    label: 'Shyft Network',
  },
  {
    value: 'Venus XVS',
    label: 'Venus XVS',
  },
  {
    value: 'Tokenlon Network Token',
    label: 'Tokenlon Network Token',
  },
  {
    value: 'Qcash',
    label: 'Qcash',
  },
  {
    value: 'Firo',
    label: 'Firo',
  },
  {
    value: 'TNC Coin',
    label: 'TNC Coin',
  },
  {
    value: 'Sentinel Protocol',
    label: 'Sentinel Protocol',
  },
  {
    value: 'Grid+',
    label: 'Grid+',
  },
  {
    value: 'Selfkey',
    label: 'Selfkey',
  },
  {
    value: 'CoinLoan',
    label: 'CoinLoan',
  },
  {
    value: 'Refereum',
    label: 'Refereum',
  },
  {
    value: 'Position Exchange',
    label: 'Position Exchange',
  },
  {
    value: 'Bread',
    label: 'Bread',
  },
  {
    value: 'Crabada',
    label: 'Crabada',
  },
  {
    value: 'Assemble Protocol',
    label: 'Assemble Protocol',
  },
  {
    value: 'MANTRA DAO',
    label: 'MANTRA DAO',
  },
  {
    value: 'ZIMBOCASH',
    label: 'ZIMBOCASH',
  },
  {
    value: 'Newscrypto',
    label: 'Newscrypto',
  },
  {
    value: 'Elastos',
    label: 'Elastos',
  },
  {
    value: 'Bytom',
    label: 'Bytom',
  },
  {
    value: 'Gas',
    label: 'Gas',
  },
  {
    value: 'Smartlands Network',
    label: 'Smartlands Network',
  },
  {
    value: 'SUKU',
    label: 'SUKU',
  },
  {
    value: 'Energi',
    label: 'Energi',
  },
  {
    value: 'Hoge Finance',
    label: 'Hoge Finance',
  },
  {
    value: 'RChain',
    label: 'RChain',
  },
  {
    value: 'Valobit',
    label: 'Valobit',
  },
  {
    value: 'Beam',
    label: 'Beam',
  },
  {
    value: 'BitMart Token',
    label: 'BitMart Token',
  },
  {
    value: 'VideoCoin',
    label: 'VideoCoin',
  },
  {
    value: 'Metronome',
    label: 'Metronome',
  },
  {
    value: 'Mithril',
    label: 'Mithril',
  },
  {
    value: 'PARSIQ',
    label: 'PARSIQ',
  },
  {
    value: 'Aurox',
    label: 'Aurox',
  },
  {
    value: 'ZEON',
    label: 'ZEON',
  },
  {
    value: 'BOSAGORA',
    label: 'BOSAGORA',
  },
  {
    value: 'Freeway Token',
    label: 'Freeway Token',
  },
  {
    value: 'StarTerra',
    label: 'StarTerra',
  },
  {
    value: 'Zigcoin',
    label: 'Zigcoin',
  },
  {
    value: 'PlanetWatch',
    label: 'PlanetWatch',
  },
  {
    value: 'Kryll',
    label: 'Kryll',
  },
  {
    value: 'Beyond Protocol',
    label: 'Beyond Protocol',
  },
  {
    value: 'DigixDAO',
    label: 'DigixDAO',
  },
  {
    value: 'Venus BUSD',
    label: 'Venus BUSD',
  },
  {
    value: 'LATOKEN',
    label: 'LATOKEN',
  },
  {
    value: 'CargoX',
    label: 'CargoX',
  },
  {
    value: 'EverRise',
    label: 'EverRise',
  },
  {
    value: 'MovieBloc',
    label: 'MovieBloc',
  },
  {
    value: 'Groestlcoin',
    label: 'Groestlcoin',
  },
  {
    value: 'Flamingo',
    label: 'Flamingo',
  },
  {
    value: 'Vai',
    label: 'Vai',
  },
  {
    value: 'Adshares',
    label: 'Adshares',
  },
  {
    value: 'EPIK Prime',
    label: 'EPIK Prime',
  },
  {
    value: 'SpiritSwap',
    label: 'SpiritSwap',
  },
  {
    value: 'Steem Dollars',
    label: 'Steem Dollars',
  },
  {
    value: 'Kava Swap',
    label: 'Kava Swap',
  },
  {
    value: 'Dego Finance',
    label: 'Dego Finance',
  },
  {
    value: 'SOLVE',
    label: 'SOLVE',
  },
  {
    value: 'Frontier',
    label: 'Frontier',
  },
  {
    value: 'Pangolin',
    label: 'Pangolin',
  },
  {
    value: 'CONUN',
    label: 'CONUN',
  },
  {
    value: 'Burger Swap',
    label: 'Burger Swap',
  },
  {
    value: 'CoinEx Token',
    label: 'CoinEx Token',
  },
  {
    value: 'Maple',
    label: 'Maple',
  },
  {
    value: 'Epic Cash',
    label: 'Epic Cash',
  },
  {
    value: 'Bounce Finance Governance Token',
    label: 'Bounce Finance Governance Token',
  },
  {
    value: 'Apollo Currency',
    label: 'Apollo Currency',
  },
  {
    value: 'AXEL',
    label: 'AXEL',
  },
  {
    value: 'PAID Network',
    label: 'PAID Network',
  },
  {
    value: 'PowerPool',
    label: 'PowerPool',
  },
  {
    value: 'BTU Protocol',
    label: 'BTU Protocol',
  },
  {
    value: 'Dock',
    label: 'Dock',
  },
  {
    value: 'v.systems',
    label: 'v.systems',
  },
  {
    value: 'AMO Coin',
    label: 'AMO Coin',
  },
  {
    value: 'Drep [new]',
    label: 'Drep [new]',
  },
  {
    value: 'Polkadex',
    label: 'Polkadex',
  },
  {
    value: 'BENQI',
    label: 'BENQI',
  },
  {
    value: 'Fusion',
    label: 'Fusion',
  },
  {
    value: 'Paris Saint-Germain Fan Token',
    label: 'Paris Saint-Germain Fan Token',
  },
  {
    value: 'Hegic',
    label: 'Hegic',
  },
  {
    value: 'BASIC',
    label: 'BASIC',
  },
  {
    value: 'ForTube',
    label: 'ForTube',
  },
  {
    value: 'Marlin',
    label: 'Marlin',
  },
  {
    value: 'AnimalGo',
    label: 'AnimalGo',
  },
  {
    value: 'ScPrime',
    label: 'ScPrime',
  },
  {
    value: 'Atari Token',
    label: 'Atari Token',
  },
  {
    value: 'GNY',
    label: 'GNY',
  },
  {
    value: 'Bytecoin',
    label: 'Bytecoin',
  },
  {
    value: 'VerusCoin',
    label: 'VerusCoin',
  },
  {
    value: 'Gifto',
    label: 'Gifto',
  },
  {
    value: 'MileVerse',
    label: 'MileVerse',
  },
  {
    value: 'XMON',
    label: 'XMON',
  },
  {
    value: 'FirmaChain',
    label: 'FirmaChain',
  },
  {
    value: 'PolkaFoundry',
    label: 'PolkaFoundry',
  },
  {
    value: 'Glitch',
    label: 'Glitch',
  },
  {
    value: 'FLETA',
    label: 'FLETA',
  },
  {
    value: 'Aragon Court',
    label: 'Aragon Court',
  },
  {
    value: 'DogeBonk',
    label: 'DogeBonk',
  },
  {
    value: 'Velo',
    label: 'Velo',
  },
  {
    value: 'OpenOcean',
    label: 'OpenOcean',
  },
  {
    value: 'Offshift',
    label: 'Offshift',
  },
  {
    value: 'MATH',
    label: 'MATH',
  },
  {
    value: 'SORA',
    label: 'SORA',
  },
  {
    value: 'Unifi Protocol DAO',
    label: 'Unifi Protocol DAO',
  },
  {
    value: 'New BitShares',
    label: 'New BitShares',
  },
  {
    value: 'ApolloX',
    label: 'ApolloX',
  },
  {
    value: 'Hermez Network',
    label: 'Hermez Network',
  },
  {
    value: 'REVV',
    label: 'REVV',
  },
  {
    value: 'dForce',
    label: 'dForce',
  },
  {
    value: 'PolySwarm',
    label: 'PolySwarm',
  },
  {
    value: 'DEXTools',
    label: 'DEXTools',
  },
  {
    value: 'Dora Factory',
    label: 'Dora Factory',
  },
  {
    value: 'Hot Cross',
    label: 'Hot Cross',
  },
  {
    value: 'mStable USD',
    label: 'mStable USD',
  },
  {
    value: 'ShareToken',
    label: 'ShareToken',
  },
  {
    value: 'Edgeware',
    label: 'Edgeware',
  },
  {
    value: 'VITE',
    label: 'VITE',
  },
  {
    value: 'DeXe',
    label: 'DeXe',
  },
  {
    value: 'AhaToken',
    label: 'AhaToken',
  },
  {
    value: 'vEmpire DDAO',
    label: 'vEmpire DDAO',
  },
  {
    value: 'SingularityDAO',
    label: 'SingularityDAO',
  },
  {
    value: 'Aeternity',
    label: 'Aeternity',
  },
  {
    value: 'Tornado Cash',
    label: 'Tornado Cash',
  },
  {
    value: 'VIDT Datalink',
    label: 'VIDT Datalink',
  },
  {
    value: 'S.S. Lazio Fan Token',
    label: 'S.S. Lazio Fan Token',
  },
  {
    value: 'Civilization',
    label: 'Civilization',
  },
  {
    value: 'PERL.eco',
    label: 'PERL.eco',
  },
  {
    value: 'pNetwork',
    label: 'pNetwork',
  },
  {
    value: 'YIELD App',
    label: 'YIELD App',
  },
  {
    value: 'Electric Vehicle Zone',
    label: 'Electric Vehicle Zone',
  },
  {
    value: 'GoChain',
    label: 'GoChain',
  },
  {
    value: 'SHILL Token',
    label: 'SHILL Token',
  },
  {
    value: 'Torum',
    label: 'Torum',
  },
  {
    value: 'AirSwap',
    label: 'AirSwap',
  },
  {
    value: 'Neutrino Token',
    label: 'Neutrino Token',
  },
  {
    value: 'Quiztok',
    label: 'Quiztok',
  },
  {
    value: 'Oxen',
    label: 'Oxen',
  },
  {
    value: 'Nimiq',
    label: 'Nimiq',
  },
  {
    value: 'EFFORCE',
    label: 'EFFORCE',
  },
  {
    value: 'KARMA',
    label: 'KARMA',
  },
  {
    value: 'PIVX',
    label: 'PIVX',
  },
  {
    value: 'Stratos',
    label: 'Stratos',
  },
  {
    value: 'Revolution Populi',
    label: 'Revolution Populi',
  },
  {
    value: 'Super Zero Protocol',
    label: 'Super Zero Protocol',
  },
  {
    value: 'NFTX',
    label: 'NFTX',
  },
  {
    value: 'Ternoa',
    label: 'Ternoa',
  },
  {
    value: 'BEPRO Network',
    label: 'BEPRO Network',
  },
  {
    value: 'PAC Protocol',
    label: 'PAC Protocol',
  },
  {
    value: 'Lossless',
    label: 'Lossless',
  },
  {
    value: 'Wirex Token',
    label: 'Wirex Token',
  },
  {
    value: 'Galaxy Heroes Coin',
    label: 'Galaxy Heroes Coin',
  },
  {
    value: 'Manchester City Fan Token',
    label: 'Manchester City Fan Token',
  },
  {
    value: 'WaykiChain',
    label: 'WaykiChain',
  },
  {
    value: 'Oxygen',
    label: 'Oxygen',
  },
  {
    value: 'Hamster',
    label: 'Hamster',
  },
  {
    value: 'Doge Dash',
    label: 'Doge Dash',
  },
  {
    value: 'MultiVAC',
    label: 'MultiVAC',
  },
  {
    value: 'Invictus Hyperion Fund',
    label: 'Invictus Hyperion Fund',
  },
  {
    value: 'Nexus',
    label: 'Nexus',
  },
  {
    value: 'ELYSIA',
    label: 'ELYSIA',
  },
  {
    value: 'Ultiledger',
    label: 'Ultiledger',
  },
  {
    value: 'Rainicorn',
    label: 'Rainicorn',
  },
  {
    value: 'Xeno Token',
    label: 'Xeno Token',
  },
  {
    value: 'Auto',
    label: 'Auto',
  },
  {
    value: 'Wing Finance',
    label: 'Wing Finance',
  },
  {
    value: 'MAP Protocol',
    label: 'MAP Protocol',
  },
  {
    value: 'ChainGuardians',
    label: 'ChainGuardians',
  },
  {
    value: 'StackOs',
    label: 'StackOs',
  },
  {
    value: 'BLOCKv',
    label: 'BLOCKv',
  },
  {
    value: 'Bitrue Coin',
    label: 'Bitrue Coin',
  },
  {
    value: 'Clearpool',
    label: 'Clearpool',
  },
  {
    value: 'Venus USDT',
    label: 'Venus USDT',
  },
  {
    value: 'ReddCoin',
    label: 'ReddCoin',
  },
  {
    value: 'FC Barcelona Fan Token',
    label: 'FC Barcelona Fan Token',
  },
  {
    value: 'Ethereum Push Notification Service',
    label: 'Ethereum Push Notification Service',
  },
  {
    value: 'TerraKRW',
    label: 'TerraKRW',
  },
  {
    value: 'Orion Money',
    label: 'Orion Money',
  },
  {
    value: 'Populous',
    label: 'Populous',
  },
  {
    value: 'PolkaBridge',
    label: 'PolkaBridge',
  },
  {
    value: 'DXdao',
    label: 'DXdao',
  },
  {
    value: 'LikeCoin',
    label: 'LikeCoin',
  },
  {
    value: 'Blockchain Monster Hunt',
    label: 'Blockchain Monster Hunt',
  },
  {
    value: 'Cellframe',
    label: 'Cellframe',
  },
  {
    value: 'Nash',
    label: 'Nash',
  },
  {
    value: 'GameCredits',
    label: 'GameCredits',
  },
  {
    value: 'ParaSwap',
    label: 'ParaSwap',
  },
  {
    value: 'Hiblocks',
    label: 'Hiblocks',
  },
  {
    value: 'BABB',
    label: 'BABB',
  },
  {
    value: 'AstroSwap',
    label: 'AstroSwap',
  },
  {
    value: 'The Midas Touch Gold',
    label: 'The Midas Touch Gold',
  },
  {
    value: 'Everest',
    label: 'Everest',
  },
  {
    value: 'Counterparty',
    label: 'Counterparty',
  },
  {
    value: 'TokenClub',
    label: 'TokenClub',
  },
  {
    value: 'Dacxi',
    label: 'Dacxi',
  },
  {
    value: 'Poseidon Network',
    label: 'Poseidon Network',
  },
  {
    value: 'Banano',
    label: 'Banano',
  },
  {
    value: 'Crust Network',
    label: 'Crust Network',
  },
  {
    value: 'Covalent',
    label: 'Covalent',
  },
  {
    value: 'CUTcoin',
    label: 'CUTcoin',
  },
  {
    value: 'King DAG',
    label: 'King DAG',
  },
  {
    value: 'Reserve',
    label: 'Reserve',
  },
  {
    value: 'Quantstamp',
    label: 'Quantstamp',
  },
  {
    value: 'USDK',
    label: 'USDK',
  },
  {
    value: 'Hydra',
    label: 'Hydra',
  },
  {
    value: 'Unisocks',
    label: 'Unisocks',
  },
  {
    value: 'BitForex Token',
    label: 'BitForex Token',
  },
  {
    value: 'Numbers Protocol',
    label: 'Numbers Protocol',
  },
  {
    value: 'Aurora',
    label: 'Aurora',
  },
  {
    value: 'MCDEX Token',
    label: 'MCDEX Token',
  },
  {
    value: 'Vertcoin',
    label: 'Vertcoin',
  },
  {
    value: 'saffron.finance',
    label: 'saffron.finance',
  },
  {
    value: 'MILC Platform',
    label: 'MILC Platform',
  },
  {
    value: 'NFTb',
    label: 'NFTb',
  },
  {
    value: 'GamerCoin',
    label: 'GamerCoin',
  },
  {
    value: 'Dragonchain',
    label: 'Dragonchain',
  },
  {
    value: 'BTSE',
    label: 'BTSE',
  },
  {
    value: 'Rubic',
    label: 'Rubic',
  },
  {
    value: 'Retreeb',
    label: 'Retreeb',
  },
  {
    value: 'ReapChain',
    label: 'ReapChain',
  },
  {
    value: 'Nestree',
    label: 'Nestree',
  },
  {
    value: 'Validity',
    label: 'Validity',
  },
  {
    value: 'Student Coin',
    label: 'Student Coin',
  },
  {
    value: 'Smart MFG',
    label: 'Smart MFG',
  },
  {
    value: 'Peony',
    label: 'Peony',
  },
  {
    value: 'Life Crypto',
    label: 'Life Crypto',
  },
  {
    value: 'ASTA',
    label: 'ASTA',
  },
  {
    value: 'ADAPad',
    label: 'ADAPad',
  },
  {
    value: 'Locus Chain',
    label: 'Locus Chain',
  },
  {
    value: 'Spartan Protocol',
    label: 'Spartan Protocol',
  },
  {
    value: 'Soda Coin',
    label: 'Soda Coin',
  },
  {
    value: 'Mogul Productions',
    label: 'Mogul Productions',
  },
  {
    value: 'TEMCO',
    label: 'TEMCO',
  },
  {
    value: 'Switcheo',
    label: 'Switcheo',
  },
  {
    value: 'GameZone',
    label: 'GameZone',
  },
  {
    value: 'WagyuSwap',
    label: 'WagyuSwap',
  },
  {
    value: 'Gameswap',
    label: 'Gameswap',
  },
  {
    value: 'unFederalReserve',
    label: 'unFederalReserve',
  },
  {
    value: 'DSLA Protocol',
    label: 'DSLA Protocol',
  },
  {
    value: 'GMCoin',
    label: 'GMCoin',
  },
  {
    value: 'DxChain Token',
    label: 'DxChain Token',
  },
  {
    value: 'FaraLand',
    label: 'FaraLand',
  },
  {
    value: 'Ferrum Network',
    label: 'Ferrum Network',
  },
  {
    value: 'Mint Club',
    label: 'Mint Club',
  },
  {
    value: 'HoDooi.com',
    label: 'HoDooi.com',
  },
  {
    value: 'Decimated',
    label: 'Decimated',
  },
  {
    value: 'Fuse Network',
    label: 'Fuse Network',
  },
  {
    value: 'Kylin',
    label: 'Kylin',
  },
  {
    value: 'FC Porto Fan Token',
    label: 'FC Porto Fan Token',
  },
  {
    value: 'O3 Swap',
    label: 'O3 Swap',
  },
  {
    value: 'MahaDAO',
    label: 'MahaDAO',
  },
  {
    value: '#MetaHash',
    label: '#MetaHash',
  },
  {
    value: 'GAMEE',
    label: 'GAMEE',
  },
  {
    value: 'X World Games',
    label: 'X World Games',
  },
  {
    value: 'Era Swap',
    label: 'Era Swap',
  },
  {
    value: 'Pendle',
    label: 'Pendle',
  },
  {
    value: 'GYEN',
    label: 'GYEN',
  },
  {
    value: 'DeHub',
    label: 'DeHub',
  },
  {
    value: 'Navcoin',
    label: 'Navcoin',
  },
  {
    value: 'Observer',
    label: 'Observer',
  },
  {
    value: 'BUX Token',
    label: 'BUX Token',
  },
  {
    value: 'Permission Coin',
    label: 'Permission Coin',
  },
  {
    value: 'Bankera',
    label: 'Bankera',
  },
  {
    value: 'Valor Token',
    label: 'Valor Token',
  },
  {
    value: 'Exeedme',
    label: 'Exeedme',
  },
  {
    value: 'Polychain Monsters',
    label: 'Polychain Monsters',
  },
  {
    value: 'Router Protocol',
    label: 'Router Protocol',
  },
  {
    value: 'Zano',
    label: 'Zano',
  },
  {
    value: 'Belt Finance',
    label: 'Belt Finance',
  },
  {
    value: 'suterusu',
    label: 'suterusu',
  },
  {
    value: 'StableXSwap',
    label: 'StableXSwap',
  },
  {
    value: 'e-Money',
    label: 'e-Money',
  },
  {
    value: 'Juggernaut',
    label: 'Juggernaut',
  },
  {
    value: 'Sin City Metaverse',
    label: 'Sin City Metaverse',
  },
  {
    value: 'VIMworld',
    label: 'VIMworld',
  },
  {
    value: 'Lotto',
    label: 'Lotto',
  },
  {
    value: 'Cream Finance',
    label: 'Cream Finance',
  },
  {
    value: 'Grin',
    label: 'Grin',
  },
  {
    value: 'GET Protocol',
    label: 'GET Protocol',
  },
  {
    value: 'Only1',
    label: 'Only1',
  },
  {
    value: 'Ariva',
    label: 'Ariva',
  },
  {
    value: 'ChainX',
    label: 'ChainX',
  },
  {
    value: 'ArtWallet',
    label: 'ArtWallet',
  },
  {
    value: 'Poolz Finance',
    label: 'Poolz Finance',
  },
  {
    value: 'Convergence',
    label: 'Convergence',
  },
  {
    value: 'Neblio',
    label: 'Neblio',
  },
  {
    value: 'Darwinia Network',
    label: 'Darwinia Network',
  },
  {
    value: 'Cindicator',
    label: 'Cindicator',
  },
  {
    value: 'Nebulas',
    label: 'Nebulas',
  },
  {
    value: 'Goldcoin',
    label: 'Goldcoin',
  },
  {
    value: 'ICHI',
    label: 'ICHI',
  },
  {
    value: 'Skey Network',
    label: 'Skey Network',
  },
  {
    value: 'Santiment Network Token',
    label: 'Santiment Network Token',
  },
  {
    value: 'DIGG',
    label: 'DIGG',
  },
  {
    value: 'Lattice Token',
    label: 'Lattice Token',
  },
  {
    value: 'Lithium',
    label: 'Lithium',
  },
  {
    value: 'Inter Milan Fan Token',
    label: 'Inter Milan Fan Token',
  },
  {
    value: 'Peercoin',
    label: 'Peercoin',
  },
  {
    value: 'Vesper',
    label: 'Vesper',
  },
  {
    value: 'Xaya',
    label: 'Xaya',
  },
  {
    value: 'PulsePad',
    label: 'PulsePad',
  },
  {
    value: 'QASH',
    label: 'QASH',
  },
  {
    value: 'Umbrella Network',
    label: 'Umbrella Network',
  },
  {
    value: 'Bitball Treasure',
    label: 'Bitball Treasure',
  },
  {
    value: 'Misbloc',
    label: 'Misbloc',
  },
  {
    value: 'Etherisc DIP Token',
    label: 'Etherisc DIP Token',
  },
  {
    value: 'Particl',
    label: 'Particl',
  },
  {
    value: 'SENSO',
    label: 'SENSO',
  },
  {
    value: 'Polkamarkets',
    label: 'Polkamarkets',
  },
  {
    value: 'K21',
    label: 'K21',
  },
  {
    value: 'BullPerks',
    label: 'BullPerks',
  },
  {
    value: 'Shopping',
    label: 'Shopping',
  },
  {
    value: 'Tachyon Protocol',
    label: 'Tachyon Protocol',
  },
  {
    value: 'Wabi',
    label: 'Wabi',
  },
  {
    value: 'valuecoin',
    label: 'valuecoin',
  },
  {
    value: 'UBIX.Network',
    label: 'UBIX.Network',
  },
  {
    value: 'Thorstarter',
    label: 'Thorstarter',
  },
  {
    value: 'Mirrored iShares Gold Trust',
    label: 'Mirrored iShares Gold Trust',
  },
  {
    value: 'Oxbull.tech',
    label: 'Oxbull.tech',
  },
  {
    value: 'UniLend',
    label: 'UniLend',
  },
  {
    value: 'Arianee',
    label: 'Arianee',
  },
  {
    value: 'LBRY Credits',
    label: 'LBRY Credits',
  },
  {
    value: 'Solrise Finance',
    label: 'Solrise Finance',
  },
  {
    value: 'RING X PLATFORM',
    label: 'RING X PLATFORM',
  },
  {
    value: 'Seascape Crowns',
    label: 'Seascape Crowns',
  },
  {
    value: 'BetU',
    label: 'BetU',
  },
  {
    value: 'Infinity PAD',
    label: 'Infinity PAD',
  },
  {
    value: 'CumRocket',
    label: 'CumRocket',
  },
  {
    value: 'MicroPets',
    label: 'MicroPets',
  },
  {
    value: 'ProximaX',
    label: 'ProximaX',
  },
  {
    value: 'WOM Protocol',
    label: 'WOM Protocol',
  },
  {
    value: 'Degenerator Meme',
    label: 'Degenerator Meme',
  },
  {
    value: 'Cardstack',
    label: 'Cardstack',
  },
  {
    value: 'BitKan',
    label: 'BitKan',
  },
  {
    value: 'Opacity',
    label: 'Opacity',
  },
  {
    value: 'Gate',
    label: 'Gate',
  },
  {
    value: 'Deri Protocol',
    label: 'Deri Protocol',
  },
  {
    value: 'BEMIL Coin',
    label: 'BEMIL Coin',
  },
  {
    value: 'Emirex Token',
    label: 'Emirex Token',
  },
  {
    value: 'Medacoin',
    label: 'Medacoin',
  },
  {
    value: 'KCCPAD',
    label: 'KCCPAD',
  },
  {
    value: '0Chain',
    label: '0Chain',
  },
  {
    value: 'Sonar',
    label: 'Sonar',
  },
  {
    value: 'Ondori',
    label: 'Ondori',
  },
  {
    value: 'Revomon',
    label: 'Revomon',
  },
  {
    value: 'HAPI',
    label: 'HAPI',
  },
  {
    value: 'Mirrored Invesco QQQ Trust',
    label: 'Mirrored Invesco QQQ Trust',
  },
  {
    value: 'DeGate',
    label: 'DeGate',
  },
  {
    value: 'Phoenix Global (new)',
    label: 'Phoenix Global (new)',
  },
  {
    value: 'SafeCoin',
    label: 'SafeCoin',
  },
  {
    value: 'Aventus',
    label: 'Aventus',
  },
  {
    value: 'Curate',
    label: 'Curate',
  },
  {
    value: 'Mirrored Apple',
    label: 'Mirrored Apple',
  },
  {
    value: 'Mirrored ProShares VIX',
    label: 'Mirrored ProShares VIX',
  },
  {
    value: 'Callisto Network',
    label: 'Callisto Network',
  },
  {
    value: 'Niftyx Protocol',
    label: 'Niftyx Protocol',
  },
  {
    value: 'KickToken',
    label: 'KickToken',
  },
  {
    value: 'HyperCash',
    label: 'HyperCash',
  },
  {
    value: 'Sarcophagus',
    label: 'Sarcophagus',
  },
  {
    value: 'Visor.Finance',
    label: 'Visor.Finance',
  },
  {
    value: 'FairGame',
    label: 'FairGame',
  },
  {
    value: 'Obyte',
    label: 'Obyte',
  },
  {
    value: 'Agoras: Currency of Tau',
    label: 'Agoras: Currency of Tau',
  },
  {
    value: 'Sylo',
    label: 'Sylo',
  },
  {
    value: 'Mirrored iShares Silver Trust',
    label: 'Mirrored iShares Silver Trust',
  },
  {
    value: 'Bridge Mutual',
    label: 'Bridge Mutual',
  },
  {
    value: 'GoCrypto Token',
    label: 'GoCrypto Token',
  },
  {
    value: 'IQeon',
    label: 'IQeon',
  },
  {
    value: 'Safe Haven',
    label: 'Safe Haven',
  },
  {
    value: 'WELL',
    label: 'WELL',
  },
  {
    value: 'Dfyn Network',
    label: 'Dfyn Network',
  },
  {
    value: 'BigONE Token',
    label: 'BigONE Token',
  },
  {
    value: 'AC Milan Fan Token',
    label: 'AC Milan Fan Token',
  },
  {
    value: 'OAX',
    label: 'OAX',
  },
  {
    value: 'FOAM',
    label: 'FOAM',
  },
  {
    value: 'Mirrored Microsoft',
    label: 'Mirrored Microsoft',
  },
  {
    value: 'Pawtocol',
    label: 'Pawtocol',
  },
  {
    value: 'Santos FC Fan Token',
    label: 'Santos FC Fan Token',
  },
  {
    value: 'Internxt',
    label: 'Internxt',
  },
  {
    value: 'Talken',
    label: 'Talken',
  },
  {
    value: 'Pickle Finance',
    label: 'Pickle Finance',
  },
  {
    value: 'Bifrost (BNC)',
    label: 'Bifrost (BNC)',
  },
  {
    value: 'Meter Governance',
    label: 'Meter Governance',
  },
  {
    value: 'Morpheus Labs',
    label: 'Morpheus Labs',
  },
  {
    value: 'Oraichain Token',
    label: 'Oraichain Token',
  },
  {
    value: 'Ambrosus',
    label: 'Ambrosus',
  },
  {
    value: 'UniCrypt',
    label: 'UniCrypt',
  },
  {
    value: 'Levolution',
    label: 'Levolution',
  },
  {
    value: 'BIDR',
    label: 'BIDR',
  },
  {
    value: 'Project WITH',
    label: 'Project WITH',
  },
  {
    value: 'Rangers Protocol',
    label: 'Rangers Protocol',
  },
  {
    value: 'EpiK Protocol',
    label: 'EpiK Protocol',
  },
  {
    value: 'TrueChain',
    label: 'TrueChain',
  },
  {
    value: 'Tranche Finance',
    label: 'Tranche Finance',
  },
  {
    value: 'dHedge DAO',
    label: 'dHedge DAO',
  },
  {
    value: 'MAPS',
    label: 'MAPS',
  },
  {
    value: 'SparkPoint',
    label: 'SparkPoint',
  },
  {
    value: 'JulSwap',
    label: 'JulSwap',
  },
  {
    value: 'Venus SXP',
    label: 'Venus SXP',
  },
  {
    value: 'Galatasaray Fan Token',
    label: 'Galatasaray Fan Token',
  },
  {
    value: 'Prism',
    label: 'Prism',
  },
  {
    value: 'Monsta Infinite',
    label: 'Monsta Infinite',
  },
  {
    value: 'Trias Token (new)',
    label: 'Trias Token (new)',
  },
  {
    value: 'Minter Network',
    label: 'Minter Network',
  },
  {
    value: 'YUSRA',
    label: 'YUSRA',
  },
  {
    value: 'AntiMatter Governance Token',
    label: 'AntiMatter Governance Token',
  },
  {
    value: 'APY.Finance',
    label: 'APY.Finance',
  },
  {
    value: 'STARSHIP',
    label: 'STARSHIP',
  },
  {
    value: 'Atletico De Madrid Fan Token',
    label: 'Atletico De Madrid Fan Token',
  },
  {
    value: 'Lamden',
    label: 'Lamden',
  },
  {
    value: 'Tokamak Network',
    label: 'Tokamak Network',
  },
  {
    value: 'Taraxa',
    label: 'Taraxa',
  },
  {
    value: 'OneLedger',
    label: 'OneLedger',
  },
  {
    value: 'USDJ',
    label: 'USDJ',
  },
  {
    value: 'Mirrored Tesla',
    label: 'Mirrored Tesla',
  },
  {
    value: 'Geeq',
    label: 'Geeq',
  },
  {
    value: 'Shirtum',
    label: 'Shirtum',
  },
  {
    value: 'Arcblock',
    label: 'Arcblock',
  },
  {
    value: 'DuckDaoDime',
    label: 'DuckDaoDime',
  },
  {
    value: 'TriumphX',
    label: 'TriumphX',
  },
  {
    value: 'Mirrored Amazon',
    label: 'Mirrored Amazon',
  },
  {
    value: 'Ignis',
    label: 'Ignis',
  },
  {
    value: 'Paribus',
    label: 'Paribus',
  },
  {
    value: 'DeepBrain Chain',
    label: 'DeepBrain Chain',
  },
  {
    value: 'Wall Street Games',
    label: 'Wall Street Games',
  },
  {
    value: 'NEST Protocol',
    label: 'NEST Protocol',
  },
  {
    value: 'TE-FOOD',
    label: 'TE-FOOD',
  },
  {
    value: 'Nitro Network',
    label: 'Nitro Network',
  },
  {
    value: 'ZeroSwap',
    label: 'ZeroSwap',
  },
  {
    value: 'FREEdom Coin',
    label: 'FREEdom Coin',
  },
  {
    value: 'Cryptocean',
    label: 'Cryptocean',
  },
  {
    value: 'ProBit Token',
    label: 'ProBit Token',
  },
  {
    value: 'Kalao',
    label: 'Kalao',
  },
  {
    value: 'Atomic Wallet Coin',
    label: 'Atomic Wallet Coin',
  },
  {
    value: 'EOS Force',
    label: 'EOS Force',
  },
  {
    value: 'Earneo',
    label: 'Earneo',
  },
  {
    value: 'Pacoca',
    label: 'Pacoca',
  },
  {
    value: 'Dexlab',
    label: 'Dexlab',
  },
  {
    value: 'Jigstack',
    label: 'Jigstack',
  },
  {
    value: 'Mirrored Netflix',
    label: 'Mirrored Netflix',
  },
  {
    value: 'Raiden Network Token',
    label: 'Raiden Network Token',
  },
  {
    value: 'Cashaa',
    label: 'Cashaa',
  },
  {
    value: 'Quantum Resistant Ledger',
    label: 'Quantum Resistant Ledger',
  },
  {
    value: 'Pallapay',
    label: 'Pallapay',
  },
  {
    value: 'DOGGY',
    label: 'DOGGY',
  },
  {
    value: 'Tarot',
    label: 'Tarot',
  },
  {
    value: 'Don-key',
    label: 'Don-key',
  },
  {
    value: 'Cirus Foundation',
    label: 'Cirus Foundation',
  },
  {
    value: 'Dovu',
    label: 'Dovu',
  },
  {
    value: 'Databroker',
    label: 'Databroker',
  },
  {
    value: 'CoinPoker',
    label: 'CoinPoker',
  },
  {
    value: 'NFTrade',
    label: 'NFTrade',
  },
  {
    value: 'DAFI Protocol',
    label: 'DAFI Protocol',
  },
  {
    value: 'Factom',
    label: 'Factom',
  },
  {
    value: 'Stafi',
    label: 'Stafi',
  },
  {
    value: 'Bonded Finance',
    label: 'Bonded Finance',
  },
  {
    value: 'ETHPad',
    label: 'ETHPad',
  },
  {
    value: 'Signum',
    label: 'Signum',
  },
  {
    value: 'TrustVerse',
    label: 'TrustVerse',
  },
  {
    value: 'TOWER',
    label: 'TOWER',
  },
  {
    value: 'ExNetwork Token',
    label: 'ExNetwork Token',
  },
  {
    value: 'Defina Finance',
    label: 'Defina Finance',
  },
  {
    value: 'Mirrored Alibaba',
    label: 'Mirrored Alibaba',
  },
  {
    value: 'Ispolink',
    label: 'Ispolink',
  },
];

export default selectCryptoArr;
