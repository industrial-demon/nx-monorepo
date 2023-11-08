import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core'

@Directive({
  selector: '[dynamicIcon]',
})
export class DynamicIconDirective implements AfterViewInit, OnChanges {
  @Input({ alias: 'dynamicIcon' }) iconName: string

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setIcon(this.iconName)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { iconName } = changes
    this.setIcon(iconName.currentValue)
  }

  private setIcon(iconName: string) {
    this.renderer.setProperty(this.element.nativeElement, 'innerHTML', iconName)
  }
}
