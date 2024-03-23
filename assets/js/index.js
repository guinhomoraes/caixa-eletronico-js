class Conta
{
    agencia
    contaCorrente
    saldo = 0

    sacar(valor)
    {
        if (this.saldo <= valor)
        {
            alert("Saldo insuficiente")
        }
        else
        {
            this.saldo -= valor
            alert("Saque realizado com sucesso")
        }
        
    }

    depositar(valor)
    {
        this.saldo += parseFloat(valor);
    }

    gerarExtrato()
    {
        console.log(`Ag/Cc: ${this.agencia}/${this.contaCorrente} 
        Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}

let conta = new Conta()

function depositar()
{
    let contaCorrente = document.getElementById('conta').value;
    let agencia = document.getElementById('agencia').value;
    let valor = parseFloat(document.getElementById('valor').value);

    if(valor > 0)
    {
        conta.agencia = agencia;
        conta.contaCorrente = contaCorrente
        conta.depositar(valor)

        alert("Depósito realizado com sucesso")

        conta.gerarExtrato()
    }
    else
    {
        alert("Informe outro valor")
    }

}


function sacar()
{
    let contaCorrente = document.getElementById('conta').value;
    let agencia = document.getElementById('agencia').value;
    let valor = parseFloat(document.getElementById('valor').value);

    if(valor > 0)
    {
        conta.agencia = agencia;
        conta.contaCorrente = contaCorrente
        
        conta.sacar(valor)

        conta.gerarExtrato()
    }
    else
    {
        alert("Informe outro valor")
    }
}


