import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})
export class Keys implements PipeTransform {
    transform(value: Object): any {
        return Object.keys(value);
    }
}
