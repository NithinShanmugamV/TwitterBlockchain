/*import contractArtifact from "./ProfileImageNfts.json";
export const contractAddress = "0xB88C1AC33298187e1878656019a5C577792a0a13";
export const contractABI = contractAddress.abi;

export const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "#334250a7",
  },
};
*/
import ProfileImageMinterContractAbi from './ProfileImageNfts.json'

export const contractABI = ProfileImageMinterContractAbi.abi
export const contractAddress = "0xB88C1AC33298187e1878656019a5C577792a0a13";

export const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#334250a7',
  },
}