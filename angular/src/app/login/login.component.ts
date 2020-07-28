import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  data:any={};
  masuk(data)
  {
    if(data.username == 'tika@gmail.com',data.password == '12345')
    {
      this.router.navigate(['/buku-alamat']);
    }
    if(data.username == 'elsndra@gmail.com',data.password == '09876')
    {
      this.router.navigate(['/karyawan']);
    }
    {
    if(data.username == null,data.password == null){
      alert("E-mail Harus Diisi.")
    }
  }
  {
    if(data.username == 'salah'){
      alert("E-mail yang anda masukkan salah atau tidak terdaftar.")
    }
  }
  {
    if(data.password == null){
      alert("Password Harus Diisi.")
    }
  }
  }
}