import {ShopInfo} from '../proto/proto/shop/v1/shop_pb'
import {isNumeric} from '../util/number'

import {useEffect, useState} from 'react'

export const useGetShopInfo = (shopId: number) => {
  const {GetShopDetailUseCase} = useContext(dependencyContext)
  const [shopList, setShopList] = useState<Array<ShopInfo.AsObject> | undefined>(undefined)

  useEffect(() => {
    (async () => {
      if (!isNumeric(shopId)) return
      const shop1 = {
        id:     1,
        name:   'テストショップ1号店',
        address:{
          country: 'jp',
          zipCode1:'100',
          zipCode2:'0001',
          address: '東京都千代田区千代田X テストビル',
        },
        parentShopId:   0,
        sisterShopsList:[],
        openDate:       {
          seconds:1,
          nanos:  0,
        },
      }

      setShopList([shop1])
    })
  }, [shopId])

  return {shopList}
}
