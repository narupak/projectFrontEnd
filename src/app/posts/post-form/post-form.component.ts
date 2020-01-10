import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from  '../shared/post.model';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],

})
  export class PostFormComponent  {
    @Output() formSubmit:  EventEmitter<Post> = new EventEmitter();

  model: Post;

  constructor(){
    this.resetPost();

  }
  

createPost(){
  console.log(this.model);
  this.formSubmit.emit(this.model);
  this.resetPost();

}

changeImage(image){

  console.log(image);
  this.model.image = image;

}
private resetPost() {
  this.model= new Post();
  }
}
