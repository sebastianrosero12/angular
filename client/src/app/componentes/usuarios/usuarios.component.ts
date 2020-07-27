import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

import { UsuariosService } from '../../services/usuarios.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.less']
})
export class UsuariosComponent implements OnInit {

  user: User= {
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 0,
    telefono:''
  };

  /* addUser(cedulaUser,nameUser,apellidoUser,emailUser,passwordUser,rolUser,telUser){
    //console.log(newUser.value);
    //console.log(passworUser.value);
    let name     = nameUser.value;
    let apellido = apellidoUser.value;
    let cedula   = cedulaUser.valuew;
    let email    = emailUser.value;
    let password = passwordUser.value;
    let rol      = rolUser.value;
    let tel      = telUser.value;
    console.log(name+" "+ apellido+" "+ cedula+" "+ email+" "+ password+" "+ rol+" "+ tel);
    nameUser.value = "";
    apellidoUser.value = "";
    cedulaUser.value = "";
    emailUser.value = "";
    passwordUser.value = "";
    rolUser.value = "";
    telUser.value = "";
    

    return false;
  } */

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    
  }

  saveNewUser(){
    console.log(this.user);
    this.usuariosService.saveUser(this.user)
      .subscribe(
      res =>{
        console.log(res);
      },
      err=> console.log(err)
      
    )
  }

}
