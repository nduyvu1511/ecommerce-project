import { Category } from "@/models"
import productApi from "@/services/productApi"
import { useState } from "react"
import useSWR from "swr"

interface CategorySWR {
  data: Category[]
  error: any
  isValidating: boolean
  bannerUrls: Array<string>
}

const useBanner = (isFetch: boolean, categoryId: number = 0): CategorySWR => {
  const [childCategories, setChildCategories] = useState<Category[]>([])
  const [isChildCategoryFetching, setChildCategoryLoading] = useState<boolean>(false)

  const { data, error, isValidating } = useSWR(
    "get_banner_urls",
    isFetch
      ? () => productApi.getCategories(categoryId).then((res: any) => res?.result?.data || [])
      : null,
    { revalidateOnFocus: false, dedupingInterval: 12000 }
  )

  return {
    bannerUrls: [],
    data: [],
    error,
    isValidating,
  }
}

export { useBanner }

