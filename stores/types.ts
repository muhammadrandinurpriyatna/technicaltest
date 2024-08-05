export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
};
  
export type ApiResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string;
};
  