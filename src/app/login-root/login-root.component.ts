import { Component, OnInit, ContentChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.css']
})
export class LoginRootComponent implements OnInit {
  _storage: any;
  _authService: any;

  constructor(private formBuilder: FormBuilder, private router: Router,) { }
  
  hide = true;

  formGroupValidator = false

  ngOnInit(): void {
  }

  toggleShow() {
    this.hide = !this.hide;
  }

  data ={
    email : '',
    password : ''
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter a valid Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPwdMessage() {
    if (this.password.hasError('required')) {
      return 'Please Enter a valid Password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }


  loginfail() {
    Swal.fire('Invalid Credentials', '', 'error');
  }


  login(){

  this.data= {
  email: this.form.value.email,
  password:this.form.value.password,

  }
  console.log(this.data)

  if(this.form.value.email == 'admin@gmail.com' && this.form.value.password == 'Password'){
  console.log('success')
  this.router.navigate(['/dashboard'])
  }else if(this.form.value.email !== 'admin@gmail.com' || this.form.value.password !== 'Password'){
  // alert('oh no')
  this.loginfail();
  console.log('failed')
  }

}

}
