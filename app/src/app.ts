import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
} else {
    throw Error('The application could not be initialized.');
}

const importBtn = document.querySelector('#import-btn');

if (importBtn) {
    importBtn.addEventListener('click', () => { controller.importData() })
} else {
    throw Error('Button not found.');
}

