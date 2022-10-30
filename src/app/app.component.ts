import { Component } from '@angular/core';


// custom type

type User = {
  nom?: String;
  prenom?: String;
  email?: String;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// model
export class AppComponent {
  // FORM
  nom: String = '';
  prenom: String = '';
  email: String = '';

  // EDIT
  editing: Boolean = false;
  editIndex: Number = 0;

  // LIST
  toDoList: Array<User> = [];

  clearField() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
  }

  addElement() {
    if (this.nom.length == 0) return;

    if (this.prenom.length == 0) return;

    if (this.email.length == 0) return;

    let user: User = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
    };
    this.toDoList.push(user);
    console.log('added to list');
    this.clearField();
  }

  removeElement(item: User) {
    let index: number = this.toDoList.indexOf(item);

    this.toDoList.splice(index, 1);
    console.log('removed to list');
  }

  editElement(item: User) {
    this.editIndex = this.toDoList.indexOf(item);
    this.nom = item.nom as String;
    this.prenom = item.prenom as String;
    this.email = item.email as String;

    this.editing = true;
  }

  saveEditElement() {
    this.toDoList[this.editIndex as any].email = this.email;
    this.toDoList[this.editIndex as any].nom = this.nom;
    this.toDoList[this.editIndex as any].prenom = this.prenom;
  }

  stopEditMode() {
    this.editing = false;
    this.clearField();
  }

  clearList() {
    this.toDoList = [];
    this.editing = false;
    this.clearField();
  }
}
