import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(public dialog: MatDialog) {}

  // Al registrarse se debe emitir algun tipo de evento para que la pantalla principal sepa que se ha terminado con el registro
  //y en ese momento cambie la apariencia del background ya que pasamos a estar logueados
  //esto mismo ocurre cuando el pavo se logea con su usuario

  openRegisterDialog(): void{

      const dialogRef = this.dialog.open(RegisterDialogComponent, {
        height: '90%',
        width: '85%'
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log('NavigationBarComponent >> ' + result);
      });
  }

  openLoginDialog(){

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
