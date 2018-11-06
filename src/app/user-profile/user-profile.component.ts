import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faSignOutAlt, faCogs, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('profileDetails') user:{};
  faCoffee = faCoffee;
  faSignOutAlt = faSignOutAlt;
  faCogs = faCogs;
  faMapMarker = faMapMarker;
  faEnvelope = faEnvelope;

}
