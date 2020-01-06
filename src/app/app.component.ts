import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  public formSubmit=false; //TO CHECK IF SUBMIT IS CLICKED OR NOT;

  usermodel = new User('','',1,1,1,'',1,'');

  onclick()
  {
        this.formSubmit=true;
  }
}
 



