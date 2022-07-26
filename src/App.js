import './App.css';
import { useState, useEffect, useContext } from "react";
import { Card } from "./Components/Card";
import { Context} from "./Context";

function App() {
    const { dispatch, state } = useContext(Context);
    const [walletAddress, setWalletAddress] = useState('')
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false)

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('isWalletConnected') === 'true') {
                connectMetamask()
            }
        }
        connectWalletOnPageLoad()
    }, [])

    useEffect(() => {
        setTimeout(()=>{
            setIsMetaMaskInstalled(false)
        },5000)
    }, [isMetaMaskInstalled])

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((account) => {
                        localStorage.setItem('isWalletConnected', true)
                        setWalletAddress(account[0])
                        dispatch({
                            type: "SET_CONNECTION_STATUS",
                            payload: true
                        });
                    })
                    .catch((ex) => {
                        console.log(ex)
                    });
            }
        } else {
            setIsMetaMaskInstalled(true)
        }
    }

    async function disconnect() {
        try {
            await window.ethereum.request({
                method: "eth_requestAccounts",
                params: [{eth_accounts: {}}]
            })
            localStorage.setItem('isWalletConnected', false)
            dispatch({
                type: "SET_CONNECTION_STATUS",
                payload: false
            });
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
      <section className='h-screen flex flex-col items-center justify-center px-5 relative'>
          <Card metamaskConnectionHandler={state.connectionStatus ? disconnect : connectMetamask} walletAddress={walletAddress}/>
          {
              isMetaMaskInstalled && <div className='absolute top-11 right-5 bg-red-500 py-2 px-2 rounded-md'>
                  <span className='text-lg text-white'>Make sure the Metamask plugin is installed.</span>
              </div>
          }
      </section>
    );
}

export default App;
