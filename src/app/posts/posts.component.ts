import { Component, OnInit } from '@angular/core';

interface Chicken {
  name: string; // nom
  hobby: string; // loisir
}

const CHICKENS: Chicken[] = [
  {name: 'pedro', hobby: 'Freesbee sur la plage'},
  {name: 'marguerite', hobby: 'Faire de l\'aquagym'},
  {name: 'bobby', hobby: 'Aller au cinema'}
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  chickens: Chicken[];
  search: string;

  constructor() {
    this.search = '';
    this.chickens = CHICKENS;
  }

  ngOnInit() {
  }

}
