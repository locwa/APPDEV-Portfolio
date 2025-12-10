import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-midterm',
  imports: [
    CommonModule
  ],
  templateUrl: './midterm.html',
  styleUrl: './midterm.css',
})
export class Midterm {
  imgLinks = [
    "mglab1.png",
    "mglab2.png",
    "mglab3.png",
    "mglab4.png",
    "mgexam.png"
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
