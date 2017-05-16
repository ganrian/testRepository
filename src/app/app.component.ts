
import { Component } from '@angular/core';

export class Hero {
  name: string;
  id:number;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>{{hero.name}} details!</h1>
  <h2>{{hero.id}}</h2>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes 2';
    hero: Hero = {
    name: 'Windstorm',
    id: 1
    };
}
