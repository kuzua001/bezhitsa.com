import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wordCountLimit'
})
export class WordCountLimit implements PipeTransform {
    transform(value: string, count: number): string {
        return value ? value.split(" ").slice(0, count).join(" ") : '';
    }
}
