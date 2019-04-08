import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  FormGroupDirective,
  ValidationErrors,
  NgForm
} from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "crm-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.sass"]
})
export class ContactoComponent implements OnInit{
  public readonly MAX_LENGTH = 100;
  profileForm = this.fb.group({
    email : [
      "",
      [
        Validators.required,
        Validators.email
      ]
    ],
    nombre: [
      "",
      [
        Validators.required,
        cuentaCaracteresValidator
      ]
    ],
    telefono: [
      "",
      [
        Validators.required,
        Validators.minLength(9),
        cumplePatronValidator(/^\d{9}$/)
      ]
    ],
    mensaje : [
      "",
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(this.MAX_LENGTH)
      ]
    ]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  get email() {
    return this.profileForm.get("email") as FormArray;
  }
  get nombre(){
    return this.profileForm.get("nombre") as FormArray
  }
  get telefono(){
    return this.profileForm.get("telefono") as FormArray
  }
  get mensaje(){
    return this.profileForm.get("mensaje") as FormArray
  }


  enviar(form) {
    console.log('FORM', form);
    console.log('mensaje', this.mensaje)
  }
  /*
  profileForm = this.fb.group({
    firstName: [
      "",
      [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]
    ],
    lastName: ["", [Validators.required, algoValidator]],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }
  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(""));
  }
  get firstName() {
    return this.profileForm.get("firstName") as FormArray;
  }
  get lastName() {
    return this.profileForm.get("lastName") as FormArray;
  }
  algoFun() {
    console.log(this.lastName.errors);
  }
  */
}
/*
export function forbiddenNameValidator(nameRe: RegExp): ValidationErrors {
  return (control: AbstractControl): ValidationErrors => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

export function algoValidator(control: AbstractControl): ValidationErrors {
  let loquequieras = false;
  if (control.value == "Maria") {
    loquequieras = true;
  }
  return loquequieras
    ? { algo: { value: control.value }, mensaje: "hola" }
    : null;
}
*/

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
export function cumplePatronValidator(nameRe: RegExp): ValidationErrors {
  return (control: AbstractControl): ValidationErrors => {
    const forbidden = nameRe.test(control.value);
    return forbidden ?  null : { cumplePatron: { value: control.value } };
  };
}


export function cuentaCaracteresValidator(): ValidationErrors {
  let loquequieras = false;

  return null;
}
