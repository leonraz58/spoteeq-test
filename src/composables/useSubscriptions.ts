import { storeToRefs } from "pinia"
import { useSubscriptionsStore } from "~/src/store/subscriptions"

export const useSubscriptions = () => {
  const store = useSubscriptionsStore()
  const { countries, subscriptions, sortedSubscriptions, selectedId, categories } =
    storeToRefs(store)

  return {
    countries,
    subscriptions,
    sortedSubscriptions,
    selectedId,
    categories,
    setSelectedId: store.setSelectedId,
  }
}
