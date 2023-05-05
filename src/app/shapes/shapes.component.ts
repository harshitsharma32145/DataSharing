import { Component } from '@angular/core';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent {

  
  shapeList: any[] = [];
  length: any;
  breadth: any;
  height: any;
  addShape(length: number, breadth: number, height: number)
   {
    const obj = {length, breadth, height, area: null };
    this.shapeList.push(obj);
  }

  TotalArea(shape: any)
   {
  
    const area = shape.length * shape.breadth * shape.height;
    shape.area = area;
  
    const message = ('area of the shape length'+shape.length+"cm,breadth"+shape.breadth+"cm,height"+shape.height+"cm,area:"+shape.area)
    alert(message);
  }
}
