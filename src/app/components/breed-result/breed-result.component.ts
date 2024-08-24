import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreed, DogBreedImage } from '../../types/types';
import { ApiService } from '../../api/api.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'breed-result',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './breed-result.component.html',
    styleUrl: './breed-result.component.scss'
})
export class BreedResultComponent implements OnDestroy {
    @Input() breed!: DogBreed;

    isExpanded: boolean = false;
    breedImage?: DogBreedImage;
    breedImageSubscription?: Subscription;

    constructor(private apiService: ApiService) { }

    public expand(): void {
        this.isExpanded = true;

        if (!this.breedImage) {
            this.breedImageSubscription = this.apiService.fetchBreedImage(this.breed).subscribe(image => this.breedImage = image);
        }
    }

    public collapse(): void {
        this.isExpanded = false;
    }

    ngOnDestroy(): void {
        this.breedImageSubscription?.unsubscribe();
    }

}
