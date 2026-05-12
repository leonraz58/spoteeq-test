import type { ListByCategory } from "~/pages/index.vue"
import type { Subscription } from "~/src/constants/mock"

export const sortSubscriptions = (subUnsorted: Subscription[]) => {
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
