import { Directive, AfterViewInit ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements AfterViewInit {

  constructor(private ref:ElementRef ) { }

  ngAfterViewInit():void{
    this.ref.nativeElement.style.color="green";
  }

}
