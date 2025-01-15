import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'
import roevegas from '/RoeVegas.jpg';

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap */
  gap: 10px;
  /* padding: 10px; Add some padding around the buttons */
  /*margin-top: 50px;  Adjust spacing from the top */
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensure it spans the full width */
  position: relative; /* Position relative to its container */

  @media (max-width: 800px) {
    top: 5%; /* Push buttons closer to the top */
  }

  & > button {
    border: none;
    border-radius: 10px;
   /* padding: 5px 10px; */
    background: #ffffffdf;
    color: black;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease;

    &:hover {
      background: white;
    }
  }
`

const Welcome = styled.div`
  background-image: url(${roevegas});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
  height: 768px;
  
  & > div {
    /*position: absolute;*/
    /*bottom: 20px;  Position text close to the bottom */
    text-align: center;
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

    & h1 {
      margin: 0;
      font-size: 24px;
    }

    & p {
      margin: 5px 0 0;
      font-size: 16px;
    }
  }

    @media (max-width: 800px) {
    height: auto; /* Allow the height to adjust dynamically */
    background-size: contain; /* Shrink the image to fit within the container */
    min-height: 300px;

    & > div:first-child {
      /* Welcome text adjustments for small screens */
      position: relative;
      margin-top: auto;
      bottom: -92px; /* Push text slightly below the container */
      h1 {
        font-size: 20px; /* Smaller font for better fit */
      }
      p {
        font-size: 14px;
      }
    }

    & > div:last-child {
      /* Buttons adjustments for small screens */
      top: -49px; /* Push buttons slightly above the container */
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      justify-content: space-between;
      padding-top: inherit;
    }
  }
`

export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()
  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <Welcome>
      <Buttons>
        <button title="Share your link with new users to earn 0.25% every time they play on RoeVegas" onClick={copyInvite}>💸 Copy Invite</button>
        <button title="Add liquidy to any Gamba pool" onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button title="Join our Telegram" onClick={() => window.open('https://t.me/roecoinSOL', '_blank')}>
          💬 Telegram
        </button>
        <button title="Follow us on Twitter" onClick={() => window.open('https://x.com/roecoinSOL', '_blank')}>
          🐦 Twitter
        </button>
        <button title="Chart" onClick={() => window.open('https://dexscreener.com/solana/8ebK1sKpUqvE2nh9aQTgEnbJMsZCGpphk7EExtbA4QGJ', '_blank')}>
          📈 DexScreener
        </button>
        <button title="Buy Roecoin on Jupiter" onClick={() => window.open('https://jup.ag/swap/SOL-8ebK1sKpUqvE2nh9aQTgEnbJMsZCGpphk7EExtbA4QGJ', '_blank')}>
          💸 Buy Roecoin
        </button>
        <button title="Learn more about Roecoin" onClick={() => window.open('https://roecoin.org/', '_blank')}>
          🌐 Website
        </button>
        <button title="All Roecoin Links" onClick={() => window.open('https://beacons.ai/roecoinsol', '_blank')}>
          🔗 Beacons
        </button>
      </Buttons>
      <div>
        <h1>Welcome to RoeVegas Casino using Gamba open source👋</h1>
        <p>A provably fair, simple, and decentralized casino on Solana. 🎰</p>
      </div>
    </Welcome>
  )
}
