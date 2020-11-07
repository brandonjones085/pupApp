import { transition } from '@angular/animations';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import * as imagepicker from "nativescript-imagepicker";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Post } from '../pup.model'
import { PupService } from "../pup.service";
import { Observable } from '@nativescript/core';


@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  moduleId: module.id
})

export class UploadComponent implements OnInit {
  constructor(
    private router: RouterExtensions,public postsService: PupService,
    private fb: FormBuilder
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
      validators: [Validators.required],
      
      })
    });
  
  }
  form: FormGroup;
  enteredTitle = "";
  enteredContent = "";
  post: Post;
  isLoading = false;
  imageAssets = [];
  imageSrc: any;
  isSingleMode: boolean = true;
  thumbSize: number = 80;
  previewSize: number = 300;
  img: string
 
  imagePreview: string;
  private mode = "create";
  private postId: string;

  ngOnInit() {
    

  }

onSavePost(){

  this.postsService.addPost(
    this.form.value.title,
    this.form.value.content, 
    this.form.value.image._android
  );
  console.log(this.form.value)
  this.form.reset(); 
  
}


  public onSelectSingleTap() {
    this.isSingleMode = true;

    let context = imagepicker.create({
        mode: "single"
    });
    this.startSelection(context);
}

private startSelection(context) {
    let that = this;

    context
    .authorize()
    .then(() => {
        that.imageAssets = [];
        that.imageSrc = null;
        return context.present();
    })
    .then((selection) => {
       console.log("Selection done: " + JSON.stringify(selection));
       const file = selection;    
      
       this.form.patchValue({'image': file})
       
      
        that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

        // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
        selection.forEach(function (element) {
            element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
            element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
        });

        that.imageAssets = selection;
    }).catch(function (e) {
        console.log(e);
    });
}
  }






