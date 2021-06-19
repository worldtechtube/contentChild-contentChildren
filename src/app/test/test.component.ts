import { AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit{
  @ContentChildren(NumberComponent) numberComponents: QueryList<NumberComponent>;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.numberComponents.toArray());
    setTimeout(() => {
      this.numberComponents.forEach(function(obj){
        obj.num*=2;
      })
    }, 3000);
  }

  ngOnInit(): void {
  }

}
