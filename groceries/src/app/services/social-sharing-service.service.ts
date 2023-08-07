import { Injectable } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx'; // Note the /ngx at the end

@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {

  constructor(private socialSharing: SocialSharing) { }

  share(message: string, subject?: string, file?: string, url?: string) {
    return this.socialSharing.share(message, subject, file, url);
  }

  // You can wrap other methods provided by the SocialSharing plugin here
}
