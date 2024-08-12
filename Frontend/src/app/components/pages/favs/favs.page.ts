import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/services/offer.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {
  offerData: any;

  constructor(private offerService: OfferService,
  ) { }

  ngOnInit() {
    this.offerService.getOfferById().subscribe((response: any) => {
      if (response) {
        this.offerData = response;
      } else {
        console.log(response);
      }
    });

  }

}
