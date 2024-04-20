// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {RentToOwn} from '../src/Purchasing.sol';
import '../src/propertyRegistry.sol';

contract CounterScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();    
        RentToOwn R2O = new RentToOwn();
        vm.stopBroadcast();        
    }
}
