// import { useState } from "react";
// import { ethers } from "ethers";
// import { FaWallet } from "react-icons/fa";

// export default function Home() {
//   const [walletConnected, setWalletConnected] = useState(false);
//   const [address, setAddress] = useState("");
//   const [balance, setBalance] = useState("");

//   const connectWallet = async () => {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner();
//         const userAddress = await signer.getAddress();
//         const userBalance = await signer.getBalance();
//         const formattedBalance = ethers.utils.formatEther(userBalance);

//         setAddress(userAddress);
//         setBalance(formattedBalance);
//         setWalletConnected(true);
//       } catch (error) {
//         console.error("Error connecting wallet:", error);
//       }
//     } else {
//       alert(
//         "MetaMask is not installed. Please install it to connect your wallet."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="max-w-md w-full text-center p-8 bg-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-white mb-6">
//           Crypto Wallet Connection
//         </h1>
//         {!walletConnected ? (
//           <button
//             onClick={connectWallet}
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mx-auto"
//           >
//             <FaWallet className="mr-2" /> Connect Wallet
//           </button>
//         ) : (
//           <div className="text-white">
//             <p className="mb-4">Wallet Address:</p>
//             <p className="text-sm break-words bg-gray-700 p-2 rounded">
//               {address}
//             </p>
//             <p className="mt-6">Balance: {balance} ETH</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
