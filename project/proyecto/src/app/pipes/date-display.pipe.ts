import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'dateDisplay',
})
export class DateDisplayPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(date: Timestamp | undefined): string {
    return this.datePipe.transform(date?.toMillis(), 'short') ?? '';
  }
}
/*
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista
    return lista.filter(user => user.name.toUpperCase().includes(texto.toUpperCase()))
  }

}

*/