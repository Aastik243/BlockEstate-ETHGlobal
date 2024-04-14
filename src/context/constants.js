import propertyRegistry from '../../contracts/out/propertyRegistry.sol/PropertyRegistry.json'
import Purchasing from '../../contracts/out/Purchasing.sol/Purchasing.json'

export const propertyRegistryABI = propertyRegistry.abi;
export const PurchasingABI = Purchasing.abi;

export const ChainId = {
    Mainnet:1,
    Sepolia:11155111,
    opavailsepolia:202402021700,
}
       