import { useEffect, useState } from 'react'
import { ShopInfo } from '../proto/proto/shop/v1/shop_pb'
import { isNumeric } from '../util/number'

export const useShopInfo = async (shopId: number) => {
  if (!isNumeric(shopId)) return

  const [shopList, setShopList] = useState<Array<ShopInfo.AsObject>>(undefined)

  useEffect(() => {

    const fetch = async (shopId: number) => {
      return await fetch(`http://localhost:15000/v1/shop?id=${shopId}`)
    }

    try {
      await fetch(shopId)
    } catch {

    }

  },
  [])


  return { shopList, setShopList }
}
