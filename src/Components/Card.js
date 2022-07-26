export const Card = () => {
    return (
        <div className='bg-white rounded-md w-full h-fit shadow-custom xl:w-4/12'>
            <div className='flex flex-row items-center mb-6 ml-2 px-8 pt-8'>
                <img src={require('../Assets/Images/Icons/metamask.svg').default} width={32} height={32} alt='metamask'/>
                <h2 className='text-base xl:text-lg ml-5'>Metamask Wallet Connect</h2>
            </div>
            <div className='flex flex-row justify-between items-center px-8 pb-8'>
                <div className='flex flex-row items-center'>
                    <img src={require('../Assets/Images/Icons/card-image.svg').default} width={48} height={48} alt='card-image'/>
                    <span className='ml-3 text-sm'>0x09750ad...360fdb7</span>
                </div>
                <img src={require('../Assets/Images/Icons/copy.svg').default} width={24} height={24} alt='card-image'/>
            </div>
            <div className='bg-[#F2F4F7] px-8 py-6 border-t-2'>
                <button className='bg-[#672CD0] w-full rounded-md py-2 text-center capitalize text-base text-white font-bold'>
                    connect wallet
                </button>
            </div>
        </div>
    )
}
