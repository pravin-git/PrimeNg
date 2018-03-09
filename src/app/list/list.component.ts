import { Component, OnInit, Input } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { AnotherChildComponent } from "../another-child/another-child.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() index;
  @Input() component;

  constructor() { }

  ngOnInit() {
    this.component = this.index % 2 ? ChildComponent : AnotherChildComponent;
  }

}
