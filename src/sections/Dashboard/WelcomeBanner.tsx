import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'
import roevegas from '/RoeVegas.jpg';

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 20px; /* Position buttons close to the top */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  & > button {
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
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
    position: absolute;
    bottom: 20px; /* Position text close to the bottom */
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
        <button onClick={copyInvite}>💸 Copy Invite</button>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>
          💬 Discord
        </button>
      </Buttons>
      <div>
        <h1>Welcome to Gamba v2 👋</h1>
        <p>A fair, simple, and decentralized casino on Solana.</p>
      </div>
    </Welcome>
  )
}
