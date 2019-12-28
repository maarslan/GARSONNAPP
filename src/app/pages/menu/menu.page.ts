import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { StreamsPage } from '../streams/streams.page';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user: any;
  pages = [
    { title: 'Streams', url: '/menu/streams' }
  ];
  selectedPath = '';
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private menu: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.init();
  }
  logOut() {
    this.tokenService.DeleteToken();
    this.router.navigateByUrl('login');
  }


  init() {
    this.tokenService.GetPayload().then(data => {
      this.user = data;
      console.log('USER : ', this.user);
    });
  }
}
