import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}
  form = new FormGroup({
    keyword: new FormControl('',Validators.required),
  });

  filter() {
    this.router.navigate(['search',this.form.value.keyword]);
    console.log(this.form.value.keyword)
  }
}
