import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text: string;
  @Output() submit = new EventEmitter<any>();

}
