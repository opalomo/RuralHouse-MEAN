import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-house-creator',
  templateUrl: './house-creator.component.html',
  styleUrls: ['./house-creator.component.css'],
  providers: [ApiService]
})
export class HouseCreatorComponent {

  houseNameCtrl = new FormControl( '', [Validators.required]);
  contactMailCtrl = new FormControl( '', [Validators.required, Validators.email]);
  roomsCtrl =  new FormControl( '', [Validators.required]);
  bedsCtrl =  new FormControl( '', [Validators.required]);
  bathsCtrl =  new FormControl( '', [Validators.required]);

  constructor() { }

  createHouse() {
    console.log('Procedesmos a llamar al servicio');
  }

  getErrorMessage() {
    return this.contactMailCtrl.hasError('required') ? 'You must enter an email' :
      this.contactMailCtrl.hasError('email') ? 'Not a valid email' :
      '';
  }

}
