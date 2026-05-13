import { defineStore } from "pinia"
import type {
  CategoryType,
  Country,
  ListByCategory,
  SubscriptionsType,
} from "~/src/types/subscriptions"

export interface SubscriptionsStoreState {
  countries: Country[]
  subscriptions: SubscriptionsType
  selectedId: number | null
  categories: CategoryType[]
}

export const useSubscriptionsStore = defineStore("subs", {
  state(): SubscriptionsStoreState {
    return {
      countries: [
        { id: 1, value: "Египет" },
        { id: 2, value: "Индия" },
        { id: 3, value: "Нигерия" },
        { id: 4, value: "Нидерланды" },
        { id: 5, value: "Бразилия" },
      ],
      subscriptions: {
        1: [
          { id: 1, title: "Individual - 1 месяц", price: 20, typeId: 1 },
          { id: 2, title: "Individual - 3 месяца", price: 30, typeId: 1 },
          { id: 3, title: "Individual - 5 месяцев", price: 50, typeId: 1 },
          { id: 4, title: "Duo - 1 месяц", price: 50, typeId: 2 },
        ],
        2: [
          { id: 5, title: "Individual - 1 месяц", price: 20, typeId: 1 },
          { id: 6, title: "Individual - 3 месяца", price: 30, typeId: 1 },
          { id: 7, title: "Duo - 1 месяц", price: 50, typeId: 2 },
          { id: 8, title: "Family - 1 месяц", price: 50, typeId: 3 },
        ],
        3: [
          { id: 9, title: "Individual - 1 месяц", price: 20, typeId: 1 },
          { id: 10, title: "Duo - 1 месяц", price: 30, typeId: 2 },
          { id: 11, title: "Family - 1 месяц", price: 50, typeId: 3 },
          { id: 12, title: "Platinum - 1 месяц", price: 50, typeId: 4 },
        ],
        4: [
          { id: 13, title: "Individual - 1 месяц", price: 20, typeId: 1 },
          { id: 14, title: "Duo - 1 месяц", price: 30, typeId: 2 },
          { id: 15, title: "Family - 1 месяц", price: 50, typeId: 3 },
          { id: 16, title: "Platinum - 1 месяц", price: 50, typeId: 4 },
          { id: 17, title: "Platinum - 3 месяца", price: 50, typeId: 4 },
        ],
      },
      selectedId: null,
      categories: [
        { id: 1, title: "Индивидуальные подписки (Individual)", background: "#ffd2d7" },
        {
          id: 2,
          title: "Парные подписки (DUO)",
          description:
            "В подписку может входить до 2 аккаунтов. Регион подписки: Египет или Нигерия (случайным образом)",
          background: "#ffc862",
        },
        {
          id: 3,
          title: "Семейные подписки (Family)",
          description:
            "В подписку может входить до 6 аккаунтов. Регион подписки: Египет или Нигерия (случайным образом)",
          background: "#a5bbd1",
        },
        {
          id: 4,
          title: "Платиновая подписка (Platinum)",
          description: "В подписку может входить до 3 аккаунтов с регионом Индия.",
          background: "#c4b1d4",
        },
      ],
    }
  },
  getters: {
    sortedSubscriptions(state) {
      return (id: number) => {
        const subUnsorted = state.subscriptions[id]

        const subSorted: ListByCategory[] = []

        if (subUnsorted) {
          for (const item of subUnsorted) {
            const index = subSorted.findIndex((s) => s.typeId === item.typeId)
            if (index >= 0) {
              if (subSorted[index]) {
                subSorted[index].items.push(item)
              }
            } else {
              subSorted.push({
                typeId: item.typeId,
                items: [item],
              })
            }
          }
        }
        return subSorted
      }
    },
  },
  actions: {
    setSelectedId(id: number) {
      this.selectedId = id
    },
  },
})
