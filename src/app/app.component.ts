import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from './theme';
import { THEMES, ACTIVE_THEME, ThemeOptions } from './theme/symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {

 // let selected = [lightTheme, darkTheme, rainbowTheme];

constructor(private themeService: ThemeService) {}

themes = ['lightTheme', 'darkTheme', 'rainbowTheme'];
chosenTheme: string = "";
trigger(){
  switch(this.chosenTheme) {
     case "lightTheme": { 
        this.themeService.setTheme('light');
        break;
     }
     case "darkTheme": { 
        this.themeService.setTheme('dark');
        break;
     }
     case "rainbowTheme": { 
        this.themeService.setTheme('rainbow');
        break;
     }
  }
}


  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  

  title = 'userProfileNotification';

  userProfileData:{} = {
    "profileImg":"https://b2bbucket.s3.amazonaws.com/18/img/avatarplaceholder.png",
    "fullName": "Shigenobu Nagamori",
    "designation": "Manager",
    "project":"Apps Dev Programmer Analyst",
    "location":"India",
    "user_id": "ak49554"
  };
  notificationData: object[] = [
    {
    "newFlag": true,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "13:04 pm"
  },
  {
    "newFlag": true,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "11:40 am"
  },
  {
    "newFlag": false,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "Yesterday, 10:10 pm"
  }
  ];

}
