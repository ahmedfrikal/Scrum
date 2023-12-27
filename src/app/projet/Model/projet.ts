export class Projet {
  Id!: number;
  Libelle!: string;
  Description!: string;
  SprintDays!: number;
  DateDebut!: string;
  DateFin!: string;
  Sprints!: any[];
  static id:number=0;
}
