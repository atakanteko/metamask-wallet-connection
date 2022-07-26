import './App.css';
import { useState } from "react";
import { Card } from "./Components/Card";

function App() {
    const [walletAddress, setWalletAddress] = useState('')

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((account) => {
                        localStorage.setItem('isWalletConnected', true)
                        setWalletAddress(account[0])
                    })
                    .catch((ex) => {
                        console.log(ex)
                    });
            } else {
                console.log('fail')
            }
        } else {
            console.log('connect1')
        }
    }
    return (
      <section className='h-screen flex flex-col items-center justify-center px-5'>
          <Card connectMetamask={connectMetamask} walletAddress={walletAddress}/>
      </section>
    );
}

export default App;
