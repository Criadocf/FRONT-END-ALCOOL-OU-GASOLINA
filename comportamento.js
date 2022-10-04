
function main(){
    const input_gasolina = document.getElementById('gasolina')
    const valor_alcool = document.getElementById('alcool')
    const performance = document.getElementById('perfomance')
    const dinheiro_disponivel = document.getElementById('dinheiro')
    const km_a_percorrer = document.getElementById('km')

    const enviar = document.getElementById('calcular')


    enviar.onclick = (e) => {
        e.preventDefault()
        
        const valor_gasolina = Number(input_gasolina.value)
        const alcool = Number(valor_alcool.value)
        const performanc_gasolina = Number(performance.value)
        const dinheiro = Number(dinheiro_disponivel.value)
        const distancia = Number(km_a_percorrer.value)
    
        /*GASOLINA*/
    
        const litros_gas_neces = distancia/performanc_gasolina
        const dinheiro_gas_necess = valor_gasolina*litros_gas_neces
        
        if (dinheiro>=dinheiro_gas_necess){
            alert('VOCÊ TEM DINNHEIRO SUFICIENTE')
        }
        else{
            alert('VOCÊ NÃO TEM DINHEIRO SUFICIENTE')
        }
    
    
    }

    
}

main()
