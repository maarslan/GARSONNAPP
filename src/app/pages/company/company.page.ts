import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  companyId = null;
  selectedCompany: any;
  info: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.init();

  }
  init() {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.displayACompany();

  }
  displayACompany() {
    this.companyService.getSelectedCompany(this.companyId).subscribe(data => {
      console.log(data);
      this.selectedCompany = data;
    });

  }

}
