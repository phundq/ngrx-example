import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  
  @Input() fail: boolean;
  @Output() submitForm = new EventEmitter<any>();
  @Output() hideMessage = new EventEmitter<any>();  

  constructor() { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  handlerSubmit(){
    let data = {
      username: this.username,
      password: this.password
    }
    console.log(data);
    this.submitForm.emit(data);
  }

  loadUsername(event:any){
    // console.log(event);
    this.username = event.value
    this.hideMessage.emit();
    
  }
  loadPassword(event:any){
    // console.log(event);
    this.password = event.value
    this.hideMessage.emit();
  }

}
