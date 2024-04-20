import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { propertyAdded } from "../generated/schema"
import { propertyAdded as propertyAddedEvent } from "../generated/PropertyRegistry/PropertyRegistry"
import { handlepropertyAdded } from "../src/property-registry"
import { createpropertyAddedEvent } from "./property-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let name = "Example string value"
    let location = "Example string value"
    let price = BigInt.fromI32(234)
    let carpet_area = BigInt.fromI32(234)
    let bhk = BigInt.fromI32(234)
    let furnished = "boolean Not implemented"
    let rent = BigInt.fromI32(234)
    let amenities = ["Example string value"]
    let images = ["Example string value"]
    let owner_contact = BigInt.fromI32(234)
    let propertyindex = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let owned = "boolean Not implemented"
    let newpropertyAddedEvent = createpropertyAddedEvent(
      name,
      location,
      price,
      carpet_area,
      bhk,
      furnished,
      rent,
      amenities,
      images,
      owner_contact,
      propertyindex,
      owner,
      owned
    )
    handlepropertyAdded(newpropertyAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("propertyAdded created and stored", () => {
    assert.entityCount("propertyAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location",
      "Example string value"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "carpet_area",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bhk",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "furnished",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rent",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amenities",
      "[Example string value]"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "images",
      "[Example string value]"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner_contact",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propertyindex",
      "234"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "propertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owned",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
