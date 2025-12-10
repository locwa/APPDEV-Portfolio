import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-grading',
  imports: [
    CommonModule
  ],
  templateUrl: './first-grading.html',
  styleUrl: './first-grading.css',
})
export class FirstGrading {
  imgLinks = [
    "/fgact1.png",
    "/fgact2.png",
    "/fgact345.png",
    "/fgact6.png",
    "/fgexam.png"
  ]

  isHovered = false
  imgSrc = ""

  changePhoto(index: number){
    this.imgSrc = this.imgLinks[index]
    this.isHovered = true
  }

  removePhoto(){
    this.isHovered = false;
  }
}
