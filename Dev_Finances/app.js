const modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("ativo");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("ativo");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    money: -50000,
    date: "01/07/2024",
  },
  {
    id: 2,
    description: "Salário",
    money: 500000,
    date: "01/07/2024",
  },
  {
    id: 3,
    description: "Água",
    money: -20000,
    date: "01/07/2024",
  },
];

const Transaction = {
  income() {},
  expense() {},
  total() {},
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.money > 0 ? "income" : "expense";
    const formattedMoney = (transaction.money / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${formattedMoney}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover Transação" />
      </td>
    `;
    return html;
  },
};

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});
