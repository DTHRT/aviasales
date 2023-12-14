export default function formatPrice(price) {
  if (!Number.isNaN(price)) {
    return price.toLocaleString('ru-RU', {})
  }
  return price
}
