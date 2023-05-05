import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent {


  @Input() shape: any;
  @Output() calculatearea = new EventEmitter<any>();
  

  TotalArea() {
    const data = {
      length: this.shape.length,
      breadth: this.shape.breadth,
      height: this.shape.height,
    };
    this.calculatearea.emit(data);
  }
}
