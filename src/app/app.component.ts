import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
////  import * as path from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {name: 'vova@gfh', age: 33 , password: 12345678} ;

  title = 'lesson6';

////oninputAction() {
 //// console.log(this.title)
///}

  //submit(form: NgForm ): void {
  //console.log(form);

  //}
///}
  age = this.user.age
name = new FormControl( [this.user.name], [Validators.required, Validators.maxLength(8), this.custemFukcValidator, Validators.email]);
passworld = new FormControl([this.user.password], [Validators.required, Validators.minLength(8)]);
myForm = new FormGroup(
  {name: this.name,
  passworld: this.passworld}
);
xxx(myForm: FormGroup): void {
  console.log(myForm)
  }
  custemFukcValidator(inputData: AbstractControl): any {

  if (inputData.value === 'fukc'){
    console.log(inputData);
    return{error: true, msg: 'fukc is present'}; }
  else {
    return null;
  }
  }


}
