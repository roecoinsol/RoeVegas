import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://api.mainnet-beta.solana.com'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  '2etBGESoTCwbg912QPccnKUanGjFLi81ZYwEGT8J551Y',
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = 'https://explorer.gamba.so'

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'roecoin.fun'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05 // 1% !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 // 0.1%

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.0025 // 0.25%

/** If the user should be able to revoke an invite after they've accepted an invite */
export const PLATFORM_ALLOW_REFERRER_REMOVAL = true

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  
  // ROE:
  lp('8ebK1sKpUqvE2nh9aQTgEnbJMsZCGpphk7EExtbA4QGJ'),
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // BONK:
  lp('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
  // JUP:
  lp('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),
  // Mother:
  // lp('3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN'),
  // GUAC:
  lp('AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR'),
  lp('H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1', 'H83nsJJe11WY7TjhiVoDq5xmiYs7rU2iY4FweJuahVz2'),
  // Wormhole:
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
  // Fake token:
  lp(FAKE_TOKEN_MINT),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: new PublicKey('8ebK1sKpUqvE2nh9aQTgEnbJMsZCGpphk7EExtbA4QGJ'),
    name: 'Roecoin',
    symbol: '$ROE',
    image: 'https://slkl2ncfqajhet2px4dgtzyqslxcor7bw4uexgzjexkeeepc2wcq.arweave.net/ktS9NEWAEnJPT78GaecQku4nR-G3KEubKSXUQhHi1YU',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
    name: 'Bonk',
    symbol: 'Bonk',
    image: 'https://quei6zhlcfsxdfyes577gy7bkxmuz7qqakyt72xlbkyh7fysmoza.arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I',
    baseWager: 1e5,
    decimals: 5,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),
    name: 'Jupiter',
    symbol: 'JUP',
    image: 'https://static.jup.ag/jup/icon.png',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
 /* {
    mint: new PublicKey('3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN'),
    name: 'MOTHER IGGY',
    symbol: 'MOTHER',
    image: 'https://ipfs.io/ipfs/QmUFTFWsJiceS99iDMDm2NYuhvHXJVXTgmsDeR28X8njSn',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  }, */
  {
    mint: new PublicKey('AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR'),
    name: 'Guacamole',
    symbol: 'GUAC',
    image: 'https://bafkreiajgw65o4ryczf7cadb43rzptvb62z4msoqr3c4625hdbdbntcydq.ipfs.nftstorage.link/',
    baseWager: 1e5,
    decimals: 5,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1'),
    name: 'KOOL-AID MAN',
    symbol: 'OHYEAH',
    image: 'https://imgs.search.brave.com/hSB7u0-pXCXyBFr83emaXzGmGwoC9oj6pWvBeR98GuE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYw/Yjk1NWI0MDgxMGIz/N2Q4Y2M3MGI1OS8x/NjI2NzY0MjkzNzI4/LVozOVdMMFlTRkxJ/Q0JTV1dZWVNPLzFL/b29sQWlkLmpwZw',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
    name: 'W',
    symbol: 'Wormhole',
    image: 'https://wormhole.com/token.png',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
  {
    mint: FAKE_TOKEN_MINT,
    name: 'Fake',
    symbol: 'FAKE',
    image: '/fakemoney.png',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
]

/** HTML to display to user that they need to accept in order to continue */
export const TOS_HTML = `
  <p><b>1. Age Requirement:</b> Must be at least 18 years old.</p>
  <p><b>2. Legal Compliance:</b> Follow local laws responsibly.</p>
  <p><b>3. Risk Acknowledgement:</b> Games involve risk; no guaranteed winnings.</p>
  <p><b>4. No Warranty:</b> Games provided "as is"; operate randomly.</p>
  <p><b>5. Limitation of Liability:</b> We're not liable for damages.</p>
  <p><b>6. Licensing Disclaimer:</b> Not a licensed casino; for simulation only.</p>
  <p><b>7. Fair Play:</b> Games are conducted fairly and transparently.</p>
  <p><b>8. Data Privacy:</b> Your privacy is important to us.</p>
  <p><b>9. Responsible Gaming:</b> Play responsibly; seek help if needed.</p>
`

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()
