import { RecipeItem } from './recipe-item.model';
import { Category } from './category.model';

export class ShoppingListItem {
    recipeItem: RecipeItem;
    checked: boolean;
    category: Category;
}
