import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {


  constructor(public dialog: MatDialog) {}

  openRegisterDialog() {

      const dialogRef = this.dialog.open(RegisterDialogComponent, {
        height: '90%',
        width: '85%'
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log('NavigationBarComponent >> ' + result);
      });
  }

  openLoginDialog() {

    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '90%',
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log('NavigationBarComponent >> ' + result);
    });

  }

}
