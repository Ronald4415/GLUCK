import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    // private userService: UserServerTsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    // this.userService.logout()
    //   .then(() => {
    //     this.router.navigate(['/home']);
    //   })
    //   .catch(error => console.log(error));
  }

}
