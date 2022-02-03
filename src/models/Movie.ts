import { Model } from './Model';

export class Movie extends Model<Movie> {
  tagline: string;
  title: string;
  id: number;
  released: string;

  constructor(tagline: string, title: string, id: number, released: string) {
    super('Movie');

    this.id = id;
    this.released = released;
    this.title = title;
    this.tagline = tagline;
  }
}
