import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PaymentMade, propertyAdded } from "../generated/RentToOwn/RentToOwn"

export function createPaymentMadeEvent(
  from: Address,
  amount: BigInt
): PaymentMade {
  let paymentMadeEvent = changetype<PaymentMade>(newMockEvent())

  paymentMadeEvent.parameters = new Array()

  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paymentMadeEvent
}

export function createpropertyAddedEvent(
  name: string,
  location: string,
  price: BigInt,
  carpet_area: BigInt,
  bhk: BigInt,
  furnished: boolean,
  rent: BigInt,
  amenities: Array<string>,
  images: Array<string>,
  owner_contact: BigInt,
  propertyindex: BigInt,
  owner: Address,
  owned: boolean
): propertyAdded {
  let propertyAddedEvent = changetype<propertyAdded>(newMockEvent())

  propertyAddedEvent.parameters = new Array()

  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("location", ethereum.Value.fromString(location))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "carpet_area",
      ethereum.Value.fromUnsignedBigInt(carpet_area)
    )
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("bhk", ethereum.Value.fromUnsignedBigInt(bhk))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("furnished", ethereum.Value.fromBoolean(furnished))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("rent", ethereum.Value.fromUnsignedBigInt(rent))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "amenities",
      ethereum.Value.fromStringArray(amenities)
    )
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("images", ethereum.Value.fromStringArray(images))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "owner_contact",
      ethereum.Value.fromUnsignedBigInt(owner_contact)
    )
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyindex",
      ethereum.Value.fromUnsignedBigInt(propertyindex)
    )
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("owned", ethereum.Value.fromBoolean(owned))
  )

  return propertyAddedEvent
}
