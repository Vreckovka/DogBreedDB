import { Pipe, PipeTransform } from '@angular/core';
import { DogBreed } from '../types/types';

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {
    transform(breeds: DogBreed[] | null, searchValue: string): DogBreed[] {
        if (!breeds)
            return [];

        if (searchValue) {
            return breeds.filter(breed => breed.name.toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase()));
        }
        else {
            return breeds;
        }
    }
}