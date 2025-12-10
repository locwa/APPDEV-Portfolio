import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-first-grading',
  imports: [
    RouterLink
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

  imgSrc = ""

  changePhoto(index: number){
    this.imgSrc = this.imgLinks[index]
  }
}
