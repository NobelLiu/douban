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
    }[];
    casts: {
        name: string
        avatars: {
            large: string
            medium: string
            small: string
        }
        id: string
    }[];
    genres: {
        name: string
    }[];
    rating: {
        max: number
        average: number
    };
    countries: string[];
    year: string;
    ratings_count: number;
    aka: string[];
}
