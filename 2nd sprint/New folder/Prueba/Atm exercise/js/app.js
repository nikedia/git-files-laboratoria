funcion getCash(atm, money) {
  cash = [],
  centinel = false,
  currentMoney = money;

  para (i = 0; i < atm.longitud && !centinel; i++) {
    div = 0;
    papers = 0;

    si (money > 0) {
      div = parseInt(money / atm[i].amount)

      si (div > atm[i].quantity) {
        papers = atm[i].quantity
        atm[i].quantity -= papers
      } sino {
        papers = div
        atm[i].quantity -= div
      }

      cash.agregar({ amount: atm[i].amount, quantity: papers })
      money -= (atm[i].amount * papers)
    } sino {
      centinel = true
    }
  }
  retornar cash
}
