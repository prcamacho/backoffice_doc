import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subdomain = 'https://techforb.invopay.tech.com/asklsd';
  dominio: string = '';

  constructor(
    private translate: TranslateService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.dominio = window.location.href;

  }


}
