import { Injectable } from '@angular/core';
import { injectable } from'@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: '2daygui@gmail.com',
      name: 'Carlos Guilherme',
      whatsApp: 'https://api.whatsapp.com/send?phone=55083982308405&text=Ol%C3%A1,%20estou%20no%20seu%20site%20%C3%A9%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!',
      linkdIn: 'https://www.linkedin.com/in/carlos-guilherme-9b771a206/'

    }

    return profile;
  }
}
