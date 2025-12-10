import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finals',
  imports: [
    CommonModule
  ],
  templateUrl: './finals.html',
  styleUrl: './finals.css',
})
export class Finals {
  imgLinks = [
    "/finalscoursework.png",
    "/finalslab1.png",
    "/finalslab2.png",
    "/finalslab3.png",
    "/finalproject.png"
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
