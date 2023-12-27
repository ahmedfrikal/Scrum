import {Component, OnInit} from '@angular/core';
import {Projet} from "../../Model/projet";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ProjetService} from "../../Service/projet.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  projet!:Projet;
  constructor(private  router:Router, private route:ActivatedRoute ,private projetService:ProjetService) {
    this.projet=new Projet();
  }
  ngOnInit(): void {
    this.getProjet();
  }
  getIdProjet(){
    const projetId: string |null  = this.route.snapshot.paramMap.get('id');
    return projetId;
  }
  getProjet(){

    const projetId=this.getIdProjet();

    if(projetId){
      this.projetService.detailProjet(+projetId).subscribe((data)=>{
        console.log(data);
        this.projet=data;
      },error => {
        console.log(error);
      })
    }

  }

  Update(projet: Projet) {
    const projetId=this.getIdProjet();
    if(projetId){
      this.projetService.update(+projetId,projet).subscribe((data)=>{
        this.router.navigate(["/Projet"]);
      },error => {
        console.log(error);
      })
    }

  }
}

