import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  postOffer(data: any) {
    return this.httpClient.post(this.url + "/offer/add", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    });
  }


  getOfferById() {
    return this.httpClient.get(this.url + "/offer/getAllOffer/");
  }
}
