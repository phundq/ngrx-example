import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() value: string;
  
  @Input() label: string;

  @Input() type: string;

  @Input() name: string;

  @Output() submit = new EventEmitter<any>();
  @Output() onEnterSubmit = new EventEmitter<any>();

  onChangeInput(event: any) {
    let data = {
      name: this.name,
      value: event.target.value
    }
    this.submit.emit(data);

    if(event.keyCode === 13)
    this.onEnterSubmit.emit();
  }

}
