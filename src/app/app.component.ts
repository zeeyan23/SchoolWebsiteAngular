import { Component,OnInit ,ApplicationRef} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { PushNotificationService } from 'src/app/shared/services/push-notification.service';
import { DburlService } from './dburl.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    private readonly publicKey = 'BDcuuDexiLLv94N35DiJI1h4uRRWOyslhkeoEw3NxtssS5Yxf6ZUs4g8TQLgA5D04Ocszx__lZe0SxrWp21VWOw';
  isAuthenticate: boolean = false;
  authToken: any;
    constructor(private swpush: SwPush, pushNotificationService: PushNotificationService, private update :SwUpdate, private appref:ApplicationRef, private serves : DburlService) {
      
   this.authToken = localStorage.getItem('token')

   if(this.authToken != null){
    this.isAuthenticate = true;
   } else {
    this.isAuthenticate = false;
    // login page redirection
   }
      //   if (swpush.isEnabled) {
      //      swpush.requestSubscription({
      //         serverPublicKey: VAPID_PUBLIC
      //     })
      //  .then((subscription) => {
      //     console.log(subscription);
      //     pushNotificationService.sendSubscriptionToTheServer(subscription).subscribe((data)=>console.log(data));
      //  })
      //   .catch(console.error);
      // }

      this.updateClient();
      this.checkUpdate();
 
    };


  ngOnInit() {
 
    this.pushSubscription();
   
    this.swpush.messages.subscribe((message) => console.log(message));

    this.swpush.notificationClicks.subscribe(({ action, notification }) => {
   
      window.open(notification.data.url);
    });

  }

  updateClient(){
    if(!this.update.isEnabled){
      console.log('Not enabled');
      return
    }
     this.update.available.subscribe((event)=>{
      console.log('current',event.current ,'available', event.available)
      if(confirm('update vailable for the app pleae confirm')){
        this.update.activateUpdate().then(()=>location.reload());

      }
    })
     this.update.activated.subscribe((event)=>{
      console.log('current',event.previous ,'available', event.current)
    })

  }

  checkUpdate(){
      this.appref.isStable.subscribe((isStable)=>{
        if (isStable){
          const timeInterval = interval(8 * 60 * 60 * 1000);

          timeInterval.subscribe(()=>{
            this.update.checkForUpdate().then(()=> console.log('checked'));
            console.log('update checked');
          })

        }
      })
  }
 

  pushSubscription() {
    if (!this.swpush.isEnabled) {
      console.log('Notification is not enabled');
      return;
    }

    this.swpush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((sub) => {
        // Make a post call to serve
        console.log(JSON.stringify(sub));
      })
      .catch((err) => console.log(err));
      
  }



}
