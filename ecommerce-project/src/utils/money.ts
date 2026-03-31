function formatMoney(amountCents: number) {
  return `$${(amountCents / 100).toFixed(2)}`
}

export default formatMoney