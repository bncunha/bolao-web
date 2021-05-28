import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective implements OnInit, OnDestroy {

  form!: FormGroup;
  fieldsTemplate: any[] = [];
  fieldsInvalids: {name: string, control: FormControl}[] = [];
  sub: Subscription[] = [];

  submitted = false;

  constructor(
    private ngForm: NgForm,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.form = this.ngForm.form;
    this.fieldsTemplate = this.el.nativeElement.elements;
    const sub1 = this.ngForm.ngSubmit.subscribe(() => { this.submitted = true; this.handleStatusChange() });
    const sub2 = this.ngForm.statusChanges?.subscribe(() => this.handleStatusChange());
    if (sub1) this.sub.push(sub1);
    if (sub2) this.sub.push(sub2);
  }

  handleStatusChange() {
    this.fieldsInvalids = [];
    this.getInvalidFields(this.form)
    this.criarTextoInvalido();
  }

  getInvalidFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl && control.invalid) {
        this.fieldsInvalids.push({name: field, control: control});
      } else if (control instanceof FormGroup) {
        this.getInvalidFields(control);
      }
    });
  }

  criarTextoInvalido() {
    this.submitted && this.fieldsInvalids.forEach(field => {
      if (this.fieldsTemplate[field.name as any] && field.control.invalid) {
        console.log(field);
      }
    })
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe())
  }

}
