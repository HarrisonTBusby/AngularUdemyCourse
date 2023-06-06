import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  data = {
    title: 'AngularTitle'
  };

  onLogoClicked(){
    alert('Crunk');
  }

  onKeyUp(newTitle:string){
    this.data.title = newTitle;
  }
}
