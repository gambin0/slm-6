import { RecipeItem } from './recipe-item.model';

export class Recipe {
    name: string;
    items: RecipeItem[];
    timestamp: Date;
    link: string;
    servings: number;
    duration: number; // mminutes will convert in UI to hours

}
