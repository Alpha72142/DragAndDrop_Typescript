import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Item } from './items';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})


export class DragAndDropComponent {
  items$!: Observable<Item[]>;
  isDragging = false;

  todo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  done: any[] = [];


  drop(event: CdkDragDrop<string[]>) {
    console.log(event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  dragStarted() {
    this.isDragging = true;
  }

  dragEnded() {
    this.isDragging = false;
  }
}
