import { Component, OnInit, Output, ViewChild, Renderer, Input,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.scss']
})
export class PostFormImageComponent implements OnChanges {
  @Input() image: string;
  @Output() imageChange = new EventEmitter();  
  @ViewChild('uploader',{static: false}) fileInput;
   
  constructor(private renderer: Renderer) {}
  ngOnChanges(changes: SimpleChanges){
    if(!changes['image'].currentValue){
      this.image = '/assets/images/no-image-box.png'
    }

  }
  triggerFileUpload(){
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,'dispatchEvent',[new MouseEvent('click',{bubbles :true})] )

  }

  uploadImage(event){
    const reader = new FileReader();
    const image = event.target.files[0];

    reader.onload = () => {
      const result = reader.result;

      this.image = result as string;
      this.imageChange.emit(result.toString());
    }
    reader.readAsDataURL(image);
  }
}
