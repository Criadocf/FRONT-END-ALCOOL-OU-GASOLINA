{
    const gasolina = Number(valor_gasolina.value)
    const alcool = Number(valor_alcool.value)
    const performanc_gasolina = Number(performance.value)
    const dinheiro = Number(dinheiro_disponivel.value)
    const distancia = Number(km_a_percorrer.value)

    /*GASOLINA*/

    const litros_gas_neces = Number(distancia/performanc_gasolina)
    const dinheiro_gas_necess = Number(gasolina*litros_gas_neces)
    const dinheiro_disponivel_gasolina = dinheiro >= dinheiro_gas_necess
    const valor_a_completar_gas = Number(dinheiro_gas_necess-dinheiro)
    const troco_gas = Number(dinheiro-dinheiro_gas_necess)


    }