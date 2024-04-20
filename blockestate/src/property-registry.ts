import { propertyAdded as propertyAddedEvent } from "../generated/PropertyRegistry/PropertyRegistry"
import { propertyAdded } from "../generated/schema"

export function handlepropertyAdded(event: propertyAddedEvent): void {
  let entity = new propertyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.location = event.params.location
  entity.price = event.params.price
  entity.carpet_area = event.params.carpet_area
  entity.bhk = event.params.bhk
  entity.furnished = event.params.furnished
  entity.rent = event.params.rent
  entity.amenities = event.params.amenities
  entity.images = event.params.images
  entity.owner_contact = event.params.owner_contact
  entity.propertyindex = event.params.propertyindex
  entity.owner = event.params.owner
  entity.owned = event.params.owned

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
