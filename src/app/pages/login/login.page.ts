import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { TokenService } from '../../services/token.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;

  constructor(
    public router: Router,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private tokenService: TokenService,
    private loadingCtrl: LoadingController,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get('auth-token').then(token => {
      if (token) {
        this.router.navigate(['/menu']);
      }
    }).catch(err => {
      console.log(err);
      this.router.navigateByUrl('login');
    });
  }


  login(form) {
    this.ShowLoader();
    this.authService.logInUser(form.value).subscribe((data) => {
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
      message: 'Giriş Yapılıyor...',
      duration: 2000
    });
    (await loading).present();
  }

  async DismissLoader() {
    await this.loadingCtrl.dismiss();
  }
}
