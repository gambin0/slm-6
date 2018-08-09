import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.less']
})
export class CreateRecipeComponent implements OnInit {

  recipeForm = this.fb.group({
      name: ['', Validators.required],
      link: [''],
      servings: [0, Validators.required],
      duration: [0, Validators.required ],
      items: this.fb.array([
        this.buildItem()
      ])

    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  buildItem(): FormGroup {
    return this.fb.group({
      item: this.fb.group({
        name: [],
        
      }),
      measurement: this.fb.group({
        type: [],
        value: []
      })
    });
  }

}
