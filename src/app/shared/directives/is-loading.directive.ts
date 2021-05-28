import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isLoading]'
})
export class IsLoadingDirective implements OnChanges {

  @Input() isLoading: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading != undefined) {
      this.handleLoading(changes.isLoading.currentValue);
    }
  }

  private handleLoading(isLoading: boolean) {
    if (isLoading) {
      this.renderer.addClass(this.el.nativeElement, 'is-loading');
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'is-loading');
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }


}
