import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  constructor(private router:Router){}
  formValidator = (control:AbstractControl) : ValidationErrors | null =>{
    return control.value == "Select"?{formValidator:true}:null;
  }

  categoryList = ["Select","Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"]
  form = new FormGroup({
    category: new FormControl(this.categoryList[0],this.formValidator),
  });
  filter() {
    this.router.navigate(['category',this.form.value.category]);
    console.log(this.form.value.category)
  }



}


