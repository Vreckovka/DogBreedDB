import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { DogBreed } from '../../types/types';
import { BreedResultComponent } from '../breed-result/breed-result.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Observable } from 'rxjs';


@Component({
    selector: 'filter',
    standalone: true,
    imports: [CommonModule, BreedResultComponent, FormsModule, FilterPipe],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss'
})
export class FilterComponent {
    breeds: Observable<DogBreed[]>;
    search: string = '';

    constructor(private apiService: ApiService) {
        this.breeds = this.apiService.fetchBreeds();
    }
}

