import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrl: './cardcontainer.component.css'
})
export class CardcontainerComponent implements OnInit {
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  protected recipeList: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let category = params.get('category');
      let keyword = params.get('keyword');
      console.log(category, keyword)
      if (!keyword && !category) {
        this.recipeList=[];
        this.recipeService.getByArea('Indian').subscribe((data: any) => {
          for (let item in data.meals) {
            this.recipeService.getById(data.meals[item]?.idMeal).subscribe((data: any) => {
              //console.log(data)
              this.recipeList.push(data.meals[0])
            })
          }
        });

      }
      else if (category) {
        this.recipeList=[];
        this.recipeService.getByCategory(category).subscribe((data: any) => {
          for (let item in data.meals) {
            this.recipeService.getById(data.meals[item]?.idMeal).subscribe((data: any) => {
              //console.log(data)
              this.recipeList.push(data.meals[0])
            })
          }
        });
      } else if (keyword) {
        this.recipeList=[];

        this.recipeService.getByName(keyword).subscribe((data: any) => {
          console.log(data)
          for (let item in data.meals) {
            this.recipeService.getById(data.meals[item]?.idMeal).subscribe((data: any) => {
              console.log(data)
              this.recipeList.push(data.meals[0])
            })
          }
        });
      }
    })

    const shuffle = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    this.recipeList = shuffle(this.recipeList);


    console.log(this.recipeList)
  }


}
