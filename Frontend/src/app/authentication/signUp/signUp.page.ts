import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.page.html',
  styleUrls: ['./signUp.page.scss'],
})
export class SignUpPage implements OnInit {

  signupForm: any = FormGroup;
  responseMessage: any;
  password_wrong: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alert: AlertController
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      user: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      document: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      phone: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password_conf: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  handleSubmit() {
    var formData = this.signupForm.value;

    var data = {
      name: formData.name,
      user: formData.user,
      document: formData.document,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      rol: 1
    }

    if (formData.password === formData.password_conf) {
      if (localStorage.getItem('TP') != null || localStorage.getItem('TP') != '') {
        this.userService.signup(data).subscribe((response: any) => {
          if (response) {
            this.responseMessage = response?.message;
            this.alert_ok();
          } else {
            console.log(response);
          }
        });
      } else {
        this.rolSelectError();
      }
    } else {
      this.password_wrong = true;
    }
    console.log('data:', data);

  }

  async alert_ok() {
    const alert = await this.alert.create({
      header: 'Registro Completo',
      message: 'Ya eres parte de Gluck, ingresa con tus credenciales!',
      mode: 'ios',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/auth/signIn'])
    }, 3100);
  }

  async rolSelectError() {
    const alert = await this.alert.create({
      header: 'Ups, ha ocurrido un eror!',
      message: 'Antes de comenzar a navegar por el sistema, es importante seleccionar un tipo de rol. Te recomendamos elegir uno para poder continuar.',
      buttons: ['OK'],
      mode: 'ios',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      localStorage.clear();
      this.router.navigate(['/home'])
    }, 3100);
  }

}
