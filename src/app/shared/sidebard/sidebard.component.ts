import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styles: []
})
export class SidebardComponent implements OnInit {

  constructor( public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
