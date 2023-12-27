import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'projetDateFormatxl'
})
export class ProjetDateFormatxlPipe implements PipeTransform {

  transform(value: any): string {
    if(value instanceof Date){
      return formatDate(value,"yyyy-MM-dd",'en-US');
    }
    return "";
  }

}
