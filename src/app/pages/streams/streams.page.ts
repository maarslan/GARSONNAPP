import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.page.html',
  styleUrls: ['./streams.page.scss'],
})
export class StreamsPage implements OnInit {
  user: any;
  constructor(
    private companyService: CompanyService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.init();
  }
  init() {
    this.tokenService.GetPayload().then(data => {
      this.user = data;
      console.log('USER : ', this.user);
    });
  }
  displayAllCompanies() {
    this.companyService.getAllCompanies().subscribe(data => {
      console.log(data);
    }, err => { console.log(err); });
  }


}
