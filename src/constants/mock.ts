type CountriesType = {
  id: number
  value: string
}[]

export const countries: CountriesType = [
  { id: 1, value: "Египет" },
  { id: 2, value: "Индия" },
  { id: 3, value: "Нигерия" },
  { id: 4, value: "Нидерланды" },
  { id: 5, value: "Бразилия" },
]

export type CategoryType = {
  id: number
  title: string
  description?: string
}
export const categoryTypes: CategoryType[] = [
  { id: 1, title: "Индивидуальные подписки (Individual)" },
  {
    id: 2,
    title: "Парные подписки (DUO)",
    description:
      "В подписку может входить до 2 аккаунтов. Регион подписки: Египет или Нигерия (случайным образом)",
  },
  {
    id: 3,
    title: "Семейные подписки (Family)",
    description:
      "В подписку может входить до 6 аккаунтов. Регион подписки: Египет или Нигерия (случайным образом)",
  },
  {
    id: 4,
    title: "Платиновая подписка (Platinum)",
    description: "В подписку может входить до 3 аккаунтов с регионом Индия.",
  },
]
export type Subscription = {
  id: number
  title: string
  price: number
  typeId: number
}
export type SubscriptionsType = {
  [key: number]: Subscription[]
}
export const subscriptions: SubscriptionsType = {
  1: [
    { id: 1, title: "Individual - 1 месяц", price: 20, typeId: 1 },
    { id: 2, title: "Individual - 3 месяца", price: 30, typeId: 1 },
    { id: 3, title: "Individual - 5 месяца", price: 50, typeId: 1 },
    { id: 3, title: "Individual - 5 месяца", price: 50, typeId: 2 },
  ],
}
