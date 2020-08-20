import { getLoginInfo } from './../../store/selectors/auth.selector';
import { AppState } from './../../store/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.select(getLoginInfo).subscribe(x => {
      this.username = x.username;
    })
   }

  username: string = '';

  ngOnInit(): void {
  }

}
