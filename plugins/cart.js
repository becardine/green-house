export default function ({store}, inject) {
  store.commit('cart/LoadCart');

  inject('formatMoney', (money) => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL', style: 'currency'
    }).format(money);
  })
}