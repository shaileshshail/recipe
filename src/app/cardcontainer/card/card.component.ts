import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    console.log(this.item)
  }
  @Input() item!:any;

  navigate(){
    this.router.navigate(['recipe',this.item?.idMeal]);
  }

}
