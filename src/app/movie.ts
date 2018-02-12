export class Movie {
    id: number;
    title: string;
    summary: string;
    images: {
        large: string
        medium: string
        small: string
    };
    directors: {
        name: string
    };
    casts: {
        name: string
    };
    genres: {
        name: string
    };
    rating: {
        max: number
        average: number
    };
    year: string;
}
