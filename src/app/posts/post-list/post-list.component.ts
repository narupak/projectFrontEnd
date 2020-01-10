import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { Post } from '../shared/post.model';
// import { emit } from 'cluster';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() posts: Post[];
  @Output() buttonClick = new EventEmitter();

  onClick(){
    this.buttonClick.emit(null);
    
  }
}
