import {Component, OnInit} from '@angular/core';
import {ProjetService} from "../../Service/projet.service";
import {Projet} from "../../Model/projet";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  projets:Projet[]=[];
constructor(private projetService :ProjetService ,private router:Router) {}
  getProjet() {
    this.projetService.FindAll().subscribe(
      (data) => {
        this.projets = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
    this.getProjet();
  }

  delete(p: Projet) {
   this.projetService.delete(p.Id).subscribe(
     ()=>{
       this.getProjet();
     }
   )
  }

  addForm() {
    this.router.navigate(['Projet/add'])
  }

  update(Id: number) {
    this.router.navigate(["Projet/update",Id]);
  }
}
