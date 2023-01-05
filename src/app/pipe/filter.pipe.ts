import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    console.log(items);
    console.log(filter);

    if (!items || !filter) {
      return items;
    }
    let filteredItems = items.filter((item) => {
      for (const key in filter) {
        if (key === 'price') {
          if (filter[key].min && item[key] < filter[key].min) {
            return false;
          }
          if (filter[key].max && item[key] > filter[key].max) {
            return false;
          }
        } else if (item[key] !== filter[key]) {
          return false;
        }
      }
      return true;
    });

    if (filter.sortBy === 'lowest') {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (filter.sortBy === 'highest') {
      filteredItems.sort((a, b) => b.price - a.price);
    }
    return filteredItems;
  }
}
