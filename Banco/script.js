const operacao = document.getElementById("operacao");
const campo = document.getElementById("valor");
const botao = document.getElementById("executar");
const saldoTela = document.getElementById("saldo");
const resultado = document.getElementById("resultado");

let saldo = 1000;

let historico = [];
historico.push("Abertura da conta: R$ 1000");

botao.addEventListener("click", function() {

    let valor = Number(campo.value);

    switch (operacao.value) {

        case "saldo":
            resultado.textContent = `Seu saldo é R$ ${saldo}`;
            return;

        case "deposito":
            if (campo.value === "" || !Number.isInteger(valor) || valor <= 0) {
                resultado.textContent = "Erro: digite um número inteiro maior que zero.";
            } else {
                saldo = saldo + valor;
                saldoTela.textContent = saldo;
                historico.push(`Depósito: +R$ ${valor}`);
                resultado.textContent = `Foi depositado R$ ${valor}. Novo saldo: R$ ${saldo}`;
            }
            return;

        case "saque":
            if (campo.value === "" || !Number.isInteger(valor) || valor <= 0) {
                resultado.textContent = "Erro: digite um número inteiro maior que zero.";
            } else if (valor % 10 !== 0) {
                resultado.textContent = "Erro: o valor do saque deve ser múltiplo de 10.";
            } else if (valor > saldo) {
                resultado.textContent = "Erro: saldo insuficiente.";
            } else {
                let restante = valor;
                let notas100 = 0;
                let notas50 = 0;
                let notas20 = 0;
                let notas10 = 0;

                while (restante >= 100) {
                    restante = restante - 100;
                    notas100++;
                }
                while (restante >= 50) {
                    restante = restante - 50;
                    notas50++;
                }
                while (restante >= 20) {
                    restante = restante - 20;
                    notas20++;
                }
                while (restante >= 10) {
                    restante = restante - 10;
                    notas10++;
                }

                saldo = saldo - valor;
                saldoTela.textContent = saldo;
                historico.push(`Saque: -R$ ${valor}`);

                resultado.innerHTML = `Foi sacado R$ ${valor}<br>
                    Notas entregues:<br>
                    ${notas100} nota(s) de R$ 100<br>
                    ${notas50} nota(s) de R$ 50<br>
                    ${notas20} nota(s) de R$ 20<br>
                    ${notas10} nota(s) de R$ 10<br>
                    Saldo restante: R$ ${saldo}`;
            }
            return;

        case "extrato":
            let texto = "EXTRATO<br>";

            for (let i = 0; i < historico.length; i++) {
                texto += `${i + 1}. ${historico[i]}<br>`;
            }

            texto += `Saldo atual: R$ ${saldo}`;
            resultado.innerHTML = texto;
            return;
    }
})