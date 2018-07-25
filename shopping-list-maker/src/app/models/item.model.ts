import { Measurement } from './measurement.model';
import { Category } from './category.model';

// Use for tracking list of predefined and custom items per user

export class Item {
    name: string;
    custom: boolean;
    defaultCategory: Category;
}
