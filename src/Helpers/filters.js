export const shortenWalletAddress = (address) => {
    return address.substring(0, 9) + "..." + address.substring(address.length-5, address.length);
}