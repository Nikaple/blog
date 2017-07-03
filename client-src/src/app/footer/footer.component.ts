import { Component, OnInit } from '@angular/core';
import { SocialNetwork } from '../models/social-network';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  socialNetworks: SocialNetwork[];
  constructor() { }

  ngOnInit() {
    this.socialNetworks = [
      {
        name: ' QQ',
        link: 'http://wpa.qq.com/msgrd?v=3&uin=524203957&site=qq&menu=yes',
        icon: 'fa-qq',
      },
      {
        name: ' GitHub',
        link: 'http://github.com/Nikaple',
        icon: 'fa-github',
      },
      {
        name: ' CodePen',
        link: 'http://codepen.io/Nikaple/',
        icon: 'fa-codepen',
      },
      {
        name: ' LinkedIn',
        link: 'http://www.linkedin.com/in/nikaple/',
        icon: 'fa-linkedin',
      }
    ];
  }

  linkToSocialNetwork(social: SocialNetwork) {
    window.open(social.link);
  }

}
