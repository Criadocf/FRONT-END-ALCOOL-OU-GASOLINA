function send(){

    const valor_gasolina = document.getElementById('gasolina')
    const valor_alcool = document.getElementById('alcool')
    const perfomance = document.getElementById('perfomance')
    const dinheiro_disponivel = document.getElementById('dinheiro')
    const km_a_percorrer = document.getElementById('km')

    const botao_enviar = document.getElementById('calcular');

    /*'PEGANDO' OS VALORES CONVERTIDOS EM NÚMEROS*/

    botao_enviar.addEventListener('click', function(){
        const valor_gasolina_conversao = Number(valor_gasolina.value)
        const valor_alcool_conversao = Number(valor_alcool.value)
        const perfomance_conversao = Number(perfomance.value)
        const dinheiro_disponivel_conversao = Number(dinheiro_disponivel.value)
        const km_a_percorrer_conversao = Number(km_a_percorrer.value)

        /*SAÍDAS GASOLINA*/
        const litros_gasolina_necessario = (km_a_percorrer_conversao/perfomance_conversao).toFixed(2)

        const dinheiro_necessario_gasolina = (valor_gasolina_conversao*litros_gasolina_necessario).toFixed(2)

        const dinheiro_suficiente_gasolina = dinheiro_disponivel_conversao >= dinheiro_necessario_gasolina

        if (dinheiro_suficiente_gasolina){
            alert(`Levi, no abastecimento com gasolina seu dinheiro é suficiente, vai te sobrar ainda a quantia de R$${(dinheiro_disponivel_conversao-dinheiro_necessario_gasolina).toFixed(2)} centavos.`)
        }else{
            alert(`Levi, no caso de abastecer seu carro com gasolinha, seu dinheiro não é suficiente, você vai precisar descolar mais R$${dinheiro_necessario_gasolina-dinheiro_disponivel_conversao} centavos.`)
        }


        /*SAÍDAS ÁLCOOL*/

        const perfomance_alcool = perfomance_conversao*0.70

        const litros_alcool_necessario = (km_a_percorrer_conversao/perfomance_alcool).toFixed(2)

        const dinheiro_necessario_alcool = (valor_alcool_conversao*litros_alcool_necessario).toFixed(2)

        const dinheiro_suficiente_alcool = dinheiro_disponivel_conversao >= dinheiro_necessario_alcool

        if (dinheiro_suficiente_alcool){
            alert(`Levi, no caso de abastecer com Álcool, seu dinheiro é suficiente, vai te sobrar ainda a quantia de R$${(dinheiro_disponivel_conversao-dinheiro_necessario_alcool).toFixed(2)} centavos.`)
        }
        else{
            alert(`Levi, no caso de abastecimento com Álcool, seu dinheiro não é suficiente, você vai precisar descolar mais R$${(dinheiro_necessario_alcool-dinheiro_disponivel_conversao).toFixed(2)} centavos.`)
        }

        /*COMPARAÇÃO FINAL ENTRE ÁLCOOL E GASOLINA */
        const valor_perfomance_final_gasolina = ((km_a_percorrer_conversao/perfomance_conversao)*(valor_gasolina_conversao)).toFixed(2)

        const valor_perfomance_final_alcool = ((km_a_percorrer_conversao/perfomance_alcool)*(valor_alcool_conversao)).toFixed(2)

        if (valor_perfomance_final_alcool < valor_perfomance_final_gasolina){
            alert(`Levi, você deveria abastecer seu carro com Álcool, pois você terá uma economia de R$${(valor_perfomance_final_gasolina-valor_perfomance_final_alcool).toFixed(2)} em relação á gasolina`)
        }

        else {alert(`Levi, você deveria abastecer seu carro com gasolina, pois você terá uma economia de R$${(valor_perfomance_final_alcool-valor_perfomance_final_gasolina).toFixed(2)} em relação ao àlcool`)   
        }

    })
        
        
        
  
}

send()
