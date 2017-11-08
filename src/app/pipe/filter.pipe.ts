import { Pipe, PipeTransform } from '@angular/core';
// import { Chicken } from 'interface.chicken.ts'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // ( chickens | filter : search )
  // La methode transform prend un premier argument
  // Cet argument est celui qui sera filtré -> chickens
  // En 2e position viennent les arguments qui vont etre utilisé pour filtrer -> search
  transform(chickens: any, search: any): any {
    if (search) search = search.toLowerCase();

    // La methode Array.filter renvoie un array composé des elements
    // qui ont renvoyé true

    return chickens.filter( (chicken) => {
      // Est-ce que notre mot de recherche se trouve dans chicken.name ?
      // Ou dans chicken.hobby ?
      let foundInName = chicken.name.toLowerCase().includes(search);
      let foundInHobby = chicken.hobby.toLowerCase().includes(search);

      // Si oui pour l'un OU l'autre. On inclu le chicken dans l'array
      // (false || true) -> true // (true || true) -> true // (false || false) -> false
      return ( foundInName || foundInHobby )
    });
  }

}
