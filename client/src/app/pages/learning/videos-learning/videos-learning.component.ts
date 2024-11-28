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
  selector: 'app-videos-learning',
  templateUrl: './videos-learning.component.html',
  styleUrls: ['./videos-learning.component.scss'],
  providers: [ UsersServices, ContentServices, VideosServices]
})
export class VideosLearningComponent implements OnInit {

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
    this.getVideos();
  }

  getVideos() {
    this.route.params.forEach((params: Params) => {
        
        let id = params ['ids'];
        console.log(id);
        

        this.contentservices.getContent(this.token, id).subscribe (
          response => {
            if(!response.content) {
              console.log('Se encontraron problemas en el servidor.');
            } else {
              this.content = response.content;
              this.videosservices.getVideos(this.token, response.content._id).subscribe(
                response => {
                  if(!response.videos) {
                    console.log('Se encontraron problemas en el servidor.');
                  } else {
                    this.video = response.videos;
                    console.log(this.video);
                  }
                }, 
                error => {
                  console.log(error);
                }
              )

            }
          },
          error => {
            console.log(error);
          }
        )

    });
  }

}
