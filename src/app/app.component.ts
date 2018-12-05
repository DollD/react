import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ControlContainer
} from "@angular/forms";
import { AppValidators } from "./app.validators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "formspro";
  userForm;
  minDate = new Date(1950, 1, 1);
  maxDate = new Date(2010, 1, 1);
  current_dist = [];
  dist1 = ["A", "B", "C"];
  dist2 = ["M", "N", "O"];
  dist3 = ["X", "y", "Z"];
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        AppValidators.nameValidator
      ]),
      gender: new FormControl("male"),
      title: new FormControl(""),
      adult: new FormControl(!true),
      state: new FormControl(""),
      district: new FormControl("Warangal"),
      age: new FormControl(),
      ssc: new FormControl(),
      graduation: new FormControl(),
      date: new FormControl(),
      color: new FormControl(""),
      cc: new FormControl("", [Validators.required, AppValidators.ccError])
    });
    (this.userForm.get("age") as FormControl).setValue(50);

    (this.userForm.get("title") as FormControl).valueChanges.subscribe(x => {
      console.log(x);
      // if (x === "Mr") {
      //   this.userForm.get("gender").setValue("male");
      // } else {
      //   this.userForm.get("gender").setValue("female");
      // }

      x === "Mr"
        ? this.userForm.get("gender").setValue("female")
        : this.userForm.get("gender").setValue("male");
    });

    this.userForm.get("name").valueChanges.subscribe(data => {
      const pattern = /^[A-Za-z]+$/;
      if (pattern.test(data)) {
        return;
      } else {
        console.log(data.slice(0, data.length - 1));
        this.userForm.get("name").setValue(data.slice(0, data.length - 1));
      }
    });

    this.userForm.get("state").valueChanges.subscribe(data => {
      if (data == "Telangana") {
        this.current_dist = this.dist1;
      }
      if (data == "Tamil Nadu") {
        this.current_dist = this.dist2;
      }
    });
  }

  submitData() {
    console.log(this.userForm.value);
  }
}
