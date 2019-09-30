import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, public toastController: ToastController) { 
    this.initForm();
  }

  ngOnInit() {
  }
  initForm(){
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', Validators.required]
      });
  }
  onLogin(value){
    if(this.loginForm.valid){
      let navigationExtras: NavigationExtras = {
        state: {
          type: ''
        }
      };
      switch (this.loginForm.value.email){
        case 'admin@xpanxion.com':
          navigationExtras.state.type = 'admin';
          this.router.navigate(['landing'], navigationExtras);
        break;
        case 'xite@xpanxion.com':
          navigationExtras.state.type = 'forum';
          this.router.navigate(['landing'], navigationExtras);
        break;
        case 'keerthana@xpanxion.com':
          navigationExtras.state.type = 'user';
          this.router.navigate(['landing'], navigationExtras);
        break;
        case 'pjain@xpanxion.com':
          navigationExtras.state.type = 'user';
          this.router.navigate(['landing'], navigationExtras);
        break;
        case 'sbaghel@xpanxion.com':
          navigationExtras.state.type = 'user';
          this.router.navigate(['landing'], navigationExtras);
        break;
        default:
            this.presentToast();

      }
    }else{
      this.validateAllFormFields(this.loginForm);
    }
  }
    validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);           
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'User Does not exist',
      duration: 2000
    });
    toast.present();
  }
  ionViewDidLeave(){
    this.loginForm.reset();
  }
}
