export interface BookProps {
  id: number;
  title: string;
  authors: AuthorProps[];
  translators: AuthorProps[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    [key: string]: string;
  };
  download_count: number;
}

export interface AuthorProps {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface BooksListProps {
  books: BookProps[];
  loading: boolean;
  error: string | null;
}