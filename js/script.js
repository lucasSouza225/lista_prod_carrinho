// Dados dos produtos
let produtos = {
  "waffle": { nome: "Waffle com Frutas Vermelhas", preco: 6.5 },

  "creme-brulee": { nome: "Creme Brûlée de Baunilha", preco: 7.0 },

  "macaron": { nome: "Mix de Cinco Macarons", preco: 8.0 },

  "tiramisu": { nome: "Tiramisu Clássico", preco: 5.5 },

  "baklava": { nome: "Baklava de Pistache", preco: 4.0 },
  "pie": { nome: "Torta de Limão Merengue", preco: 5.0 },

  "cake": { nome: "Bolo de Veludo Vermelho", preco: 4.5 },

  "brownie": { nome: "Brownie de Caramelo Salgado", preco: 3.0 },

  "panna-cotta": { nome: "Panna Cotta de Baunilha", preco: 6.5 }
};

let botoesAdicionar = document.querySelectorAll(".botao-adicionar")
let contCarrinho = document.getElementById("cont-carrinho")
let carrinhoVazio = document.getElementById("carrinho-vazio")
let itensCarrinho = document.getElementById("itens-carrinho")
let resumoCarrinho = document.getElementById("resumo-carrinho")
let precoTotal = document.getElementById("preco-total")
let confPedido = document.getElementById("conf-pedido-btn")
let orderModal = document.getElementById("order-modal")
let orderItems = document.getElementById("order-items")
let modalTotal = document.getElementById("modal-total")
let novoPedido = document.getElementById("novo-pedido-btn")

let carrinho = {}

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    let produtoId = botao.getAttribute("data-product")
    adicionarAoCarrinho(produtoId)
  })
})

function adicionarAoCarrinho(id) {
  if (!carrinho[id]) {
    carrinho[id] = { ...produtos[id], quantidade: 1 }
  } else {
    carrinho[id].quantidade++
  }
  atualizarCarrinho()
}

function atualizarCarrinho() {
  let itens = Object.values(carrinho)
  itensCarrinho.innerHTML = ""

  if (itens.length === 0) {
    carrinhoVazio.style.display = "block"
    resumoCarrinho.style.display = "none"
    contCarrinho.textContent = "0"
    return;
  }

  carrinhoVazio.style.display = "none"
  resumoCarrinho.style.display = "block"

  let total = 0
  let count = 0

  itens.forEach((item) => {
    let div = document.createElement("div")
    div.className = "item-carrinho";
    div.innerHTML = `
      <p>${item.nome} <span>R$${(item.preco * item.quantidade).toFixed(2)} (${item.quantidade}x)</span></p>
    `
    itensCarrinho.appendChild(div);

    total += item.preco * item.quantidade
    count += item.quantidade
  });

  precoTotal.textContent = `R$${total.toFixed(2)}`
  contCarrinho.textContent = count
}

confPedido.addEventListener("click", () => {
  orderModal.style.display = "flex"
  mostrarResumoPedido();
})

function mostrarResumoPedido() {
  let itens = Object.values(carrinho)
  orderItems.innerHTML = "";
  let total = 0;

  itens.forEach((item) => {
    let div = document.createElement("div")
    div.className = "item-pedido"
    div.innerHTML = 
    `
      <p>${item.nome} <span>${item.quantidade}x</span></p>
    `
    orderItems.appendChild(div);

    total += item.preco * item.quantidade
  });

  modalTotal.textContent = `R$${total.toFixed(2)}`
}

novoPedido.addEventListener("click", () => {
  carrinho = {}
  atualizarCarrinho()
  orderModal.style.display = "none"
})
