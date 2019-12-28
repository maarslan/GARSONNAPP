import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/garsonn';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<any> {
    return this.http.get<any>(BASEURL + '/app/display-companies');
  }
  getSelectedCompany(id): Observable<any> {
    return this.http.get<any>(BASEURL + '/app/display-selected-company/' + id);
  }
}
