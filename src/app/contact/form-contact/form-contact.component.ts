import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {


  onFormSubmit(f) {
    if (!f.valid) {
      console.log('champs requis ou invalides');
      return ;
    }

    console.log(f.value);
    // réaliser des traitements comme
    // enregistrer le contenu dans une BDD via une API
    // vider le formulaire
    // réaliser une redirection
  }

}
