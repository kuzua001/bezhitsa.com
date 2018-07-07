import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'values'
})
export class Values implements PipeTransform {
    transform(value: Object): any {
        return Object.values(value);
    }
}
