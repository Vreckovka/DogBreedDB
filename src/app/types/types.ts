export interface DogBreed {
    origin: string;
    id: number;
    life_span: string;
    name: string;
    description: string;
    reference_image_id: string;
    bred_for: string;
    temperament: string;
}

export interface DogBreedImage {
    url: string;
    id: string;
}