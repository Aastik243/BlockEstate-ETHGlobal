import propertyRegistry from "../abi/PropertyRegistry.json";
import Purchasing from "../abi/RentToOwn.json";

export const PurchasingAddress = 0xb900865f8c16fa7427760489148311b3d9a152cc;
export const propertyRegistryAddress = 0x193be412d660045587f21293ac2b5715290d7dde;
export const propertyRegistryABI = propertyRegistry.abi;
export const PurchasingABI = Purchasing.abi;

export const ChainId = {
  Mainnet: 1,
  Sepolia: 11155111,
  opavailsepolia: 202402021700,
};
