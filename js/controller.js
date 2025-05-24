export default class Controller {
    constructor(model, view) {
    this.model = model;
    this.view = view;


    this.view.displayContacts(this.model.getContacts());
    this.view.bindAdd(this.handleAdd);

    this.view.bindDelete(this.handleDelete);
    this.view.bindEdit(this.handleEdit);
    }

    handleDelete = (index) => {
        this.model.deleteContact(index);
        this.view.displayContacts(this.model.getContacts());
    }

    handleEdit = (index, updatedFields) => {
        const current = this.model.getContacts()[index];
        const updated = {
            name: updatedFields.name || current.name,
            phone: updatedFields.phone || current.phone,
        };

        this.model.editContact(index, updated);
        this.view.displayContacts(this.model.getContacts());
    };


    handleAdd = (contact) => {
        this.model.addContact(contact);
        this.view.displayContacts(this.model.getContacts());
    }

}
