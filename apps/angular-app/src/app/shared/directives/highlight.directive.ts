import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core'

@Directive({
  selector: '[highlightElement]',
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input() defaultColor = ''

  @Input() highlightElement = ''

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightElement || this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

  ngOnInit(): void {}
}
