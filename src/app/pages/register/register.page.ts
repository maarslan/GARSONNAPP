import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private tokenService: TokenService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }


  register(form) {
    this.ShowLoader();
    this.authService.createUser(form.value).subscribe((data) => {
      this.tokenService.SetToken(data.token);
      console.log(data);
      setTimeout(() => {
        this.DismissLoader();
        this.router.navigateByUrl('menu');
      }, 2000);
    }, err => {
      this.DismissLoader();
      this.ShowErrorAlert(err.error.message);
    });
  }
  async ShowErrorAlert(message) {
    const alert = this.alertCtrl.create({
      header: 'Giriş hatası',
      subHeader: message,
      buttons: ['OK']
    });
    (await alert).present();
  }

  async ShowLoader() {
    const loading = this.loadingCtrl.create({
      message: 'Kaydediliyor...',
      duration: 2000
    });
    (await loading).present();
  }

  async DismissLoader() {
    await this.loadingCtrl.dismiss();
  }
}
