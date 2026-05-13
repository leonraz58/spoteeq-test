export type Country = {
  id: number
  value: string
}
export type CategoryType = {
  id: number
  title: string
  description?: string
  background: string
}
export type Subscription = {
  id: number
  title: string
  price: number
  typeId: number
}
export type SubscriptionsType = {
  [key: number]: Subscription[]
}

export type ListByCategory = {
  typeId: number
  items: Subscription[]
}
