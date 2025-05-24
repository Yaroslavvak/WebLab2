export default class View {
  constructor() {
    this.list = document.getElementById('contact-list');
  }

  displayContacts(contacts) {
    this.list.innerHTML = '';

    contacts.forEach((contact, index) => {
      const div = document.createElement('div');
      div.className = 'list-group-item d-flex justify-content-between align-items-center';

      div.innerHTML = `
        <div>
          <strong>${contact.name}</strong><br>
          <small>${contact.phone}</small>
        </div>
        <div>
          <button class="btn btn-sm btn-outline-light edit" data-index="${index}">Редагувати</button>
          <button class="btn btn-sm btn-outline-danger delete" data-index="${index}">Видалити</button>
        </div>
      `;

      this.list.appendChild(div);
    });
  }

  bindDelete(handler) {
    this.list.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const index = e.target.dataset.index;
        handler(index);
      }
    });
  }

  bindEdit(handler) {
  this.list.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
      const index = e.target.dataset.index;

      const choice = prompt(
        'Що бажаєте змінити?\n1 — Ім’я\n2 — Номер\n3 — Обидва'
      );

      let updatedContact = {};

      switch (choice) {
        case '1':
          updatedContact.name = prompt('Нове ім’я:');
          break;
        case '2':
          updatedContact.phone = prompt('Новий номер телефону:');
          break;
        case '3':
          updatedContact.name = prompt('Нове ім’я:');
          updatedContact.phone = prompt('Новий номер телефону:');
          break;
        default:
          alert('Скасовано або неправильний вибір.');
          return;
      }

      handler(index, updatedContact);
    }
  });
}


  bindAdd(handler) {
    const addButton = document.getElementById('add-contact');
    addButton.addEventListener('click', () => {
        const name = prompt("Введіть ім’я абонента:");
        const phone = prompt("Введіть номер телефону:");
        if (name && phone) {
        handler({ name, phone });
        }
    });
    }

}
