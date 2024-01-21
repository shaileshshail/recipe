import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../cardcontainer/recipe.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrl: './singlerecipe.component.css'
})
export class SinglerecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  item: any = {};
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      if (id) {
        this.recipeService.getById(id).subscribe((data:any) => {
          this.item = data.meals[0];
          console.log(this.item);
        })
      }

    }
    )
  }
}
