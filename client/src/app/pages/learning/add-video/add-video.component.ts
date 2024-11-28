import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { ContentServices } from '../../../services/content.services';
import { VideosServices } from '../../../services/video.services';
import { Content } from 'src/app/models/content_model';
import { Videos } from 'src/app/models/videos_model';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss'],
  providers: [ UsersServices, ContentServices, VideosServices ]
})
export class AddVideoComponent implements OnInit {

  public url:string;
  public content: Content;
  public videos: Videos;
  public identity;
  public token;
  public alertMessage;

  constructor(
    private contentservices: ContentServices,
    private videosservices: VideosServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.videos = new Videos ('','','','','');
  }

  ngOnInit(): void {
    AOS.init({
      once: true 
   });
  }

  public onSubmit(f:NgForm) {
    this.route.params.forEach((params: Params) => {

      let contentId = params['idVideo'];
      this.videos.content = contentId;

      this.videosservices.addNewVideo(this.token, this.videos).subscribe(
        response => {
          if(!response.INFO_VIDEO) {
            this.alertMessage = 'Se encontraron problemas en el servidor.';
          } else {
            if(!this.filesToUpload) {
              this.alertMessage = 'Se añadió el video, pero no se adjuntó archivo.';
            } else {
              this.makeFileRequest(this.url + '/upload-video/' + response.INFO_VIDEO._id, [] , this.filesToUpload).then(
                (result:any) => {
                  this.videos.files = result.files;
                  this.alertMessage = 'El video se creó con éxito.';
                  this.videos = response.INFO_VIDEO; 
                }
              );
            }
          }
        },
        error => {
          console.log(error);
        }
      )
      
    });
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;    
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    
    var token = this.token;

    return new Promise(function(resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);

    });

  }

}
