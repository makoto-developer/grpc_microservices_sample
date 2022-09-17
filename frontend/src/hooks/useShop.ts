import {useEffect, useState} from 'react'

import {ShopInfo} from '../proto/proto/shop/v1/shop_pb'
import {isNumeric} from '../util/number'

export const useShopInfo = async (shopId: number) => {
  const [shopList, setShopList] = useState<Array<ShopInfo.AsObject> | undefined>(undefined)

  useEffect(() => {
    if (!isNumeric(shopId)) return
    setShopList([])

  }, [shopId])

  return {shopList}
}
