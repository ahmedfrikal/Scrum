import { Component } from '@angular/core';
import {Projet} from "../../Model/projet";
import {ProjetService} from "../../Service/projet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  projet!:Projet;

  constructor(private projetService:ProjetService,private router:Router) {
    this.projet=new Projet();
  }

  Ajouter(projet: Projet) {
    projet.Id=++Projet.id;
    console.log(projet);
    this.projetService.add(projet).subscribe((p:Projet)=>{
      this.router.navigate(['/Projet'])
    },error => {
      console.log("Error");
    });
  }
}
