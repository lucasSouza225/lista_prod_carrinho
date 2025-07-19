// Dados dos produtos

const produtos = {
    'waffle': {
        nome: 'Waffle com Frutas Vermelhas',
        categoria: 'Waffle',
        preco: 6.50,
        
    },
    'creme-brulee': {
        nome: 'Crème Brûlée de Baunilha',
        categoria: 'Crème Brûlée',
        preco: 7.00,
       
    },
    'macaron': {
        nome: 'Mix de Macarons (5 unidades)',
        categoria: 'Macaron',
        preco: 8.00,
       
    },
    'tiramisu': {
        nome: 'Tiramisu Clássico',
        categoria: 'Tiramisu',
        preco: 5.50,
        
    },
    'baklava': {
        nome: 'Baklava com Pistache',
        categoria: 'Baklava',
        preco: 4.00,
       
    },
    'pie': {
        nome: 'Torta de Limão com Merengue',
        categoria: 'Torta',
        preco: 5.00,
        
    },
    'cake': {
        nome: 'Bolo Red Velvet',
        categoria: 'Bolo',
        preco: 4.50,
       
    },
    'brownie': {
        nome: 'Brownie com Caramelo Salgado',
        categoria: 'Brownie',
        preco: 3.00,
        
    },
    'panna-cotta': {
        nome: 'Panna Cotta de Baunilha',
        categoria: 'Panna Cotta',
        preco: 6.50,
        
    }
}

let carrinho = [];
const contadorCarrinho = document.getElementById('cart-count')
const carrinhoVazio = document.getElementById('empty-cart')
const itensCarrinho = document.getElementById('cart-items')
const resumoCarrinho = document.getElementById('cart-summary')
const precoTotal = document.getElementById('total-price')
const botaoConfirmar = document.getElementById('confirm-order-btn')
const modalPedido = document.getElementById('order-modal')
const itensPedido = document.getElementById('order-items')
const totalModal = document.getElementById('modal-total')
const botaoNovoPedido = document.getElementById('start-new-order-btn')
