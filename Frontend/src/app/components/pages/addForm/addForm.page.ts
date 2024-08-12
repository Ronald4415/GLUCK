import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OfferService } from 'src/app/services/services/offer.service';

@Component({
  selector: 'app-addForm',
  templateUrl: './addForm.page.html',
  styleUrls: ['./addForm.page.scss'],
})
export class AddForm implements OnInit {
  name_type!: string;
  signupForm: any = FormGroup;
  imageBase64: string | null = null; // Variable para almacenar la imagen Base64
  responseMessage: any;



  constructor(private offerService: OfferService, private alert: AlertController, private router: Router, private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      typeOffer: [null, [Validators.required]],
      description: [null, [Validators.required]],
      address: [null, [Validators.required]],
      time: [null, [Validators.required]],
      photo: [null],
    });
  }

  onFileSelected(event: any) {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    // Verificar que fileInput y fileInput.files no sean nulos
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        this.imageBase64 = event.target?.result as string;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }

  handleSubmit() {
    var formData = this.signupForm.value;

    // this.idUser = localStorage.getItem('data');
    // const userId = JSON.parse(this.idUser);

    let data = {
      typeOffer: formData.typeOffer,
      description: formData.description,
      address: formData.address,
      time: formData.time,
      photo: this.imageBase64,
    }

    this.offerService.postOffer(data).subscribe((response: any) => {
      if (response) {
        this.responseMessage = response?.message;
        this.alert_ok();
      } else {
        console.log(response);
      }
    });
  }
  async alert_ok() {
    const alert = await this.alert.create({
      header: 'Registro Completo',
      message: 'La oferta se ha creado de manera exitosa!',
      mode: 'ios',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/contracting/tabs/tab1'])
    }, 3100);
  }


}
