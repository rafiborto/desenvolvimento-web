const botao = document.getElementById("gerar");

const lista = document.getElementById("lista");

const numero = document.getElementById("numero");

botao.addEventListener("click", function() {
    lista.innerHTML = "";

    const valor = Number(numero.value);

for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = valor + " x " + i + " = " + (valor * i);
    lista.appendChild(item);
}   
});
