import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../../services/GLOBAL';
import { ContentServices } from '../../../services/content.services';
import { UsersServices } from '../../../services/users.services';
import { VideosServices } from "../../../services/video.services";

import { Videos } from "../../../models/videos_model";
import { Content } from '../../../models/content_model';


@Component({
  selector: 'app-viewvideo',
  templateUrl: './viewvideo.component.html',
  styleUrls: ['./viewvideo.component.scss'],
  providers: [ UsersServices, ContentServices, VideosServices]
})
export class ViewvideoComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public content: Content;
  public video: Videos[];

  constructor(
    private usersservices: UsersServices,
    private contentservices: ContentServices,
    private videosservices: VideosServices,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
   }

  ngOnInit(): void {

    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
    });

    this.getFile();
  }

  getFile() {
    this.route.params.forEach((params: Params) => {
      let id = params ['file'];
      
      this.videosservices.getVideoAlone(this.token, id).subscribe(
        response => {
          this.video = [response.video];
          console.log(this.video);
        },
        error => {
          console.log(error);
        }
      )
    });
  }


}
