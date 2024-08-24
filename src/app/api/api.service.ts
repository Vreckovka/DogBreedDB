import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogBreed, DogBreedImage } from '../types/types';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    private fetchData<T>(params: string): Observable<T> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-api-key': environment.apiKey,
        });

        return this.http.get<T>(`${environment.apiUrl}${params}`, { headers });
    }

    fetchBreeds(limit: number = 10): Observable<DogBreed[]> {
        return this.fetchData<DogBreed[]>(`breeds?limit=${limit}`);
    }

    fetchBreedImage(breed: DogBreed): Observable<DogBreedImage> {
        return this.fetchData<DogBreedImage>(`images/${breed.reference_image_id}`);
    }
}