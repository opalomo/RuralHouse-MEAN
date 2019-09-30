import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ApiService]
})
export class RegisterDialogComponent implements OnInit {

  nameCtrl = new FormControl( '', [Validators.required]);
  surnameCtrl =  new FormControl( '', [Validators.required]);
  emailCtrl = new FormControl( '', [Validators.required, Validators.email]);
  passCtrl = new FormControl( '', [Validators.required, Validators.minLength(8)]);

  userToRegister = new User();


  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) { }

  ngOnInit() {
  }

  register() {

    //crear un user auxiliar y meterle x constructora los valores
    //decir que el selecteduser es igual a este de aqui

    //asignar un id
    //usar la funcion de la api en el futuro
    //this.userToRegister.setId( 1 );

    //en el futuro hacer que se asignen los valores desde la constructora (menos el id)
    this.userToRegister.setName( this.nameCtrl.value);
    this.userToRegister.setSurname(this.surnameCtrl.value);
    this.userToRegister.setEmail(this.emailCtrl.value);
    this.userToRegister.setPassword(this.passCtrl.value);

    this.apiService.putUser(this.userToRegister);
  }

  close() {
    this.dialogRef.close('RegistroComponent >> Registration canceled');
  }

  getErrorMessage() {
    return this.emailCtrl.hasError('required') ? 'You must enter an email' :
      this.emailCtrl.hasError('email') ? 'Not a valid email' :
      '';
  }

}
