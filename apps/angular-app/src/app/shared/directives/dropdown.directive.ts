import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core'

@Directive({
  selector: '[dropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding() open = false
  @HostListener('click') onMouseClick() {
    this.open = !this.open
    if (this.open) {
      this.el.nativeElement.childNodes[1].classList.remove('hidden')
    } else this.el.nativeElement.childNodes[1].classList.add('hidden')

  }
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('INIT')
    if (this.open) {
      this.el.nativeElement.childNodes[1].classList.remove('hidden')
    } else this.el.nativeElement.childNodes[1].classList.add('hidden')
  }
}
