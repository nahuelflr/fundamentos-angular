import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'nahuel';
  public age = 21;
  img = 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';
  btnDisable = true;
  person = {
    name: 'Nahuel',
    age: 21,
    avatar: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'
  }

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
   this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLAnchorElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

}