import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListBasedOnKeyValue',
  pure: false
})

export class FilterListBasedOnKeyValuePipe implements PipeTransform {
  transform(arraylist: any, fieldKey: string, fieldVal: string): any {
    return fieldVal ? arraylist.filter(item => item[fieldKey] === fieldVal): arraylist;
  }
}
