import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/player';

@Pipe({
  name: 'filterTeam'
})
export class FilterTeamPipe implements PipeTransform {

  transform(value: Iplayer[], searchVal: string) {
    if (!value) {
      return []
    }

    if (!searchVal) {
      return value
    }

    let filterArray = value.filter(e => {
      return e.country.toLowerCase().startsWith(searchVal.toLowerCase())
    })

    return filterArray
  }

}
