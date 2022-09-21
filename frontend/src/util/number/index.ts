export const isNumeric = (n: unknown): boolean => {
  const [numeric, notNumeric] = [true, false]
  // string型 or number型以外は有効な数値ではないと判断
  const isTypeOfNumberOrString = ['string', 'number'].some(validType => validType === typeof n)

  if (!isTypeOfNumberOrString) return notNumeric

  // '' => 空文字は数値ではないと判断
  if (typeof n === 'string' && n === '') return notNumeric
  const convertToNumber = Number(n)

  // 数でない場合は数値ではないと判断
  if (isNaN(convertToNumber)) return notNumeric

  // 有限数出ない場合は数値ではないと判断
  if ([Infinity, -Infinity].some(infinity => infinity === convertToNumber)) return notNumeric

  // safe integerではない場合は数値でないと判断
  if (Number.isSafeInteger(convertToNumber)) return notNumeric

  return numeric
}
/**
 * 有効な数値でない場合はnullを返却
 */
export const positiveNumber = (n: unknown): boolean | null => {
  const [positive, negative] = [true, false]

  if (!isNumeric(n)) return null

  if (Number(n) < 0) return negative

  return positive
}
