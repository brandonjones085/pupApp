import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  moduleId: module.id
})
export class RateComponent {
  isCreating = true;

  constructor(
    private active: ActivatedRoute,
    private pageRoute: PageRoute, 
    private router: RouterExtensions, 
    private page: Page
   
  ) {}

  

}
