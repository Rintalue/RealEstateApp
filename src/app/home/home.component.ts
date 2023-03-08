import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showClassAdded = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
onWindowScroll() {
  const slideElements = this.elRef.nativeElement.querySelectorAll('.slide-in');
  const fadeElements = this.elRef.nativeElement.querySelectorAll('.fade-in');

  slideElements.forEach((element: HTMLElement) => {
    const positionFromTop = element.getBoundingClientRect().top;
    const positionFromBottom = element.getBoundingClientRect().bottom;

    if (positionFromTop - window.innerHeight <= 0 && !element.classList.contains('show')) {
      this.renderer.addClass(element, 'show');
    }
    if (positionFromBottom < 0 || positionFromTop > window.innerHeight) {
      element.classList.remove('show');
    }
  });

  fadeElements.forEach((element: HTMLElement) => {
    const positionFromTop = element.getBoundingClientRect().top;
    const positionFromBottom = element.getBoundingClientRect().bottom;

    if (positionFromTop - window.innerHeight <= 0 && !element.classList.contains('show')) {
      this.renderer.addClass(element, 'show');
    }
    if (positionFromBottom < 0 || positionFromTop > window.innerHeight) {
      element.classList.remove('show');
    }
  });
}


  ngOnInit(): void {
  }

}
