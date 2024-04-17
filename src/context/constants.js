import propertyRegistry from '../../contracts/out/propertyRegistry.sol/PropertyRegistry.json'
import Purchasing from '../../contracts/out/Purchasing.sol/Purchasing.json'


export const PurchasingAddress = 0xedD8b8f58f899d214Cf23417bc982E1dA2C2AC86;
export const propertyRegistryAddress = 0x77dae173a6C655D37Ed5bf59eC1ea6717279530e;
export const propertyRegistryABI = propertyRegistry.abi;
export const PurchasingABI = Purchasing.abi;

export const ChainId = {
    Mainnet:1,
    Sepolia:11155111,
    opavailsepolia:202402021700,
}
       