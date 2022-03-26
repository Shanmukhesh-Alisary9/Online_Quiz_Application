import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,) { }

  hide = true;
  hide1 = true;

  ngOnInit(): void {
  }

  toggleShow() {
    this.hide = !this.hide;
  }

  toggleShow1() {
    this.hide1 = !this.hide1;
  }
  

  data ={
    email : '',
    mobile : '',
    password : '',
    confirmpassword : ''
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile : new FormControl('', [Validators.required, ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword : new FormControl('', [Validators.required, ])
  })


  email = new FormControl('', [Validators.required, Validators.email]);
  mobile = new FormControl('', [Validators.required, ]);
  password = new FormControl('', [Validators.required, ]);
  confirmpassword = new FormControl('', [Validators.required, ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter a valid Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMobileMessage() {
    if (this.mobile.hasError('required')) {
      return 'Please Enter a Mobile Number';
    }

    return this.mobile.hasError('mobile') ? 'Not a valid email' : '';
  }

  getErrorPwdMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorConfirmPwdMessage() {
    if (this.confirmpassword.hasError('required')) {
      return 'Please confirm the password';
    }

    return this.confirmpassword.hasError('password') ? 'Not a valid password' : '';
  }

  
  regsuc() {
    Swal.fire(
      'Signup successful.',
      '',
      'success'
    );
  }

  regfail() {
    Swal.fire('Signup failed!', '', 'error');
  }


  signup(){

    this.data= {
    email: this.form.value.email,
    mobile: this.form.value.mobile,
    password: this.form.value.password,
    confirmpassword: this.form.value.confirmpassword,
  
    }
    console.log(this.data)
  
    // if(this.form.value.email !== null && this.form.value.mobile !== null && this.form.value.password !== null && this.form.value.confirmpassword !== null ){
    // console.log('success')
    // this.regsuc();
    // // this.router.navigate(['/auth'])
    // }
    // else if(this.form.value.email.Invalid || this.form.value.mobile.Invalid || this.form.value.password.Invalid || this.form.value.confirmpassword.Invalid){
    // // alert('oh no')
    // // this.loginfail();
    // console.log('failed')
    // this.regfail();
    // }
  
    if(this.form.valid){
      console.log('success')
      this.regsuc();
    }else if(this.form.invalid) {
      console.log('error')
      this.regfail();
    }
  }

}
