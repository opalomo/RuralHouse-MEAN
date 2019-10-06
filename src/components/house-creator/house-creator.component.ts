import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { House } from 'src/app/models/house';

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

  constructor(private apiService: ApiService) { }

  createHouse() {

    const houseToCreate = new House(0, this.houseNameCtrl.value, this.contactMailCtrl.value,
      this.roomsCtrl.value, this.bedsCtrl.value, this.bathsCtrl.value);

    this.apiService.postHouse(houseToCreate)
      .subscribe(houses => console.log(houses)
    );
    console.log('Procedemos a llamar al servicio');
  }

  getErrorMessage() {
    return this.contactMailCtrl.hasError('required') ? 'You must enter an email' :
      this.contactMailCtrl.hasError('email') ? 'Not a valid email' :
      '';
  }

}
