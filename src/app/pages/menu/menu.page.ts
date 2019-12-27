import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { StreamsPage } from '../streams/streams.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rootPage = StreamsPage;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit() {
  }
  logOut() {
    this.tokenService.DeleteToken();
    this.router.navigateByUrl('login');
  }
}
