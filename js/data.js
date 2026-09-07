/* ===========================================================
   Athenium — dados de demonstração
   Em um backend real, isso viria de uma API. Aqui usamos
   localStorage para simular estado persistente entre telas.
=========================================================== */

const ATHENIUM_SEED = {
  user: {
    name: "Anna Vitória Santos",
    grade: "2° Ensino Médio",
    course: "Tec. Informática",
    registration: "2021INI0012",
    readerId: "123-456-7890",
    validUntil: "10/02/2024",
    status: "ATIVO"
  },
  colors: ["#e0483e", "#2f6bea", "#2f9e57", "#e0952e", "#7c5cd6", "#1a56db"],
  books: [
    {
      id: "geracao-ansiosa",
      title: "A Geração Ansiosa",
      author: "Jonathan Haidt",
      color: "#e0952e",
      status: "andamento",
      dueDate: "2023-07-20",
      borrowedDate: "2023-06-14",
      returnWindow: "14.06.2023 - 25.06.2023"
    },
    {
      id: "ciencia-computacao",
      title: "Ciência da Computação: Uma Visão Abrangente",
      author: "Glenn Brookshear",
      color: "#2f9e57",
      status: "andamento",
      dueDate: "2023-08-10",
      borrowedDate: "2023-07-18"
    },
    {
      id: "montanha-agua-lilas",
      title: "A Montanha da Água Lilás",
      author: "Prepetela",
      color: "#5f8f4e",
      status: "andamento",
      dueDate: "2023-08-25",
      borrowedDate: "2023-07-25"
    },
    {
      id: "rapido-devagar",
      title: "Rápido e Devagar: Duas Formas de Pensar",
      author: "Daniel Kahneman",
      color: "#f2e9d8",
      status: "pendente",
      dueDate: "2023-07-02",
      borrowedDate: "2023-06-18"
    },
    {
      id: "de-onde-eles-vem",
      title: "De Onde Eles Vêm",
      author: "Jefferson Tenório",
      color: "#7c5cd6",
      status: "pendente",
      dueDate: "2023-07-05",
      borrowedDate: "2023-06-20"
    }
  ],
  history: [
    { title: "A Garota do Lago", author: "Charlie Donlea", date: "12/09/2022", color: "#3a2f4d" },
    { title: "Pai Rico, Pai Pobre: Edição de 20 Anos Atualizada e Ampliada", author: "Robert Kiyosaki", date: "10/10/2022", color: "#e0952e" },
    { title: "#umdiasemreclamar: Descubra por que a Gratidão Pode Mudar a sua Vida", author: "Davi Lago e Marcelo Gallugpo", date: "04/10/2022", color: "#e0483e" },
    { title: "Programador Autodidata: Guia definitivo para programar profissionalmente", author: "Cory Althoff", date: "05/09/2022", color: "#1c1c1c" },
    { title: "Entendendo Algoritmos", author: "Aditya Bhargava", date: "01/09/2022", color: "#2f6bea" },
    { title: "Breves Respostas para Grandes Questões: Nova Edição", author: "Stephen Hawking", date: "30/08/2022", color: "#0d2c66" }
  ],
  notifications: [
    { time: "15 de julho de 2023 às 13:00", text: "Aproveite! Faltam 5 dias para a devolução de Sistema Operacional.", read: true },
    { time: "14 de julho de 2023 às 13:45", text: "Leitura iniciada! Aproveite A Geração Ansiosa.", read: true },
    { time: "14 de julho de 2023 às 13:30", text: "Livro A Geração Ansiosa emprestado! Fique atento ao prazo de devolução.", read: true }
  ],
  loansByMonth: {
    "Julho": [
      { title: "A Geração Ansiosa", date: "14.07.2023", color: "#e0952e" },
      { title: "Ciência da Computação", date: "18.07.2023", color: "#2f9e57" },
      { title: "A Montanha da Água Lilás", date: "25.07.2023", color: "#5f8f4e" }
    ],
    "Agosto": [],
    "Setembro": [],
    "Outubro": [],
    "Novembro": []
  },
  calendar: {
    year: 2023,
    month: 6, // 0-indexed -> Julho
    dueDay: 20,
    infoDay: 15
  }
};

function initials(title){
  return title.split(" ").filter(w => w.length > 2 || w === w.toUpperCase()).slice(0,2).map(w => w[0]).join("").toUpperCase() || title[0];
}

function loadState(){
  let raw = localStorage.getItem("athenium_state");
  if(!raw){
    localStorage.setItem("athenium_state", JSON.stringify(ATHENIUM_SEED));
    raw = localStorage.getItem("athenium_state");
  }
  return JSON.parse(raw);
}

function saveState(state){
  localStorage.setItem("athenium_state", JSON.stringify(state));
}

function isLoggedIn(){
  return localStorage.getItem("athenium_logged_in") === "1";
}

function requireLogin(){
  if(!isLoggedIn()){
    window.location.href = "index.html";
  }
}

function formatBR(dateStr){
  const [y,m,d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}
