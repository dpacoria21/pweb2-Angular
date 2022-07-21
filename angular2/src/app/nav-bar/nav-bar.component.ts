import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  videos = [
    {
      video: '4c70QXhhcCQ'
    },
    {
      video: 'SQ0CixO5ZNk'
    },
    {
      video: 'hnq-aecsRIU'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
