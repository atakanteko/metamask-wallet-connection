import './App.css';

function App() {
  return (
    <section className='h-screen flex flex-col items-center justify-center px-5'>
        <div className='bg-white rounded-md w-full h-fit shadow-custom px-8 py-8 xl:w-4/12'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-lg'>Metamask Wallet Connect</h2>
                <img src={require('./Assets/Images/Icons/metamask.svg').default} width={32} height={32} alt='metamask'/>
            </div>
        </div>
    </section>
  );
}

export default App;
