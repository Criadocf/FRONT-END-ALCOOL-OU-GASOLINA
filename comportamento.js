const valor_gasolina = document.getElementById('gasolina')
const valor_alcool = document.getElementById('alcool')
const perfomance = document.getElementById('perfomance')
const dinheiro_disponivel = document.getElementById('dinheiro')
const local_destino = document.getElementById('local')
const km_a_percorrer = document.getElementById('km')

const enviar = document.getElementById('calcular')

enviar.addEventListener('click', ()=>{
    const gasolina = Number(valor_gasolina.value)
    const alcool = Number(valor_alcool.value)
    const performanc_gasolina = Number(performance.value)
    const dinheiro = Number(dinheiro_disponivel.value)
    const destino = (local_destino.innerText)
    const distancia = Number(km_a_percorrer.value)

    /*GASOLINA*/

    const litros_gas_neces = Number(performanc_gasolina/distancia)
    const dinheiro_gas_necess = Number(gasolina*litros_gas_neces)
    const valor_a_completar_gas = Number(dinheiro_gas_necess-dinheiro)
    const troco_gas = Number(dinheiro-dinheiro_gas_necess)

    dinheiro<dinheiro_gas_necess?alert(`Mano, você tá quebrado, dá um jeito de arrumar o restante da grana, mais precisamente falando tu tem que arrumar mais R$${valor_a_completar_gas}`):alert(`Mano, tua grana é suficiente, e ainda vai te sobrar R$${troco_gas}`)

    })
