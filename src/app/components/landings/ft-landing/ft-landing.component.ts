import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ft-landing',
  templateUrl: './ft-landing.component.html',
  styleUrls: ['./ft-landing.component.scss']
})
export class FtLandingComponent {
  constructor(private router: Router) { }
  show: boolean = false;
  business: boolean = false;
  startmyself: boolean = false
  signIn!: boolean;
  // links
  direct: any
  directing(type: string): any {
    console.log('show')
    if (type === 'signin') {
      this.signIn = true
      this.show = true;
      this.business = false
      return true
    } else { (type === "signup")
      this.signIn = false
      this.show = true;
      this.business = false
      return false
    }


  }
  //  picks the path of choose
  nextStep(kind: string): any {
    if (kind === 'myself') {
      this.startmyself = true;
      this.business = false
      // this.direct = '/activatin-instruction'

    } else {
      (kind === 'myself')
      this.startmyself = true;
      this.business = false
      // this.direct = '/instruction'

    }
    // business in contruction 
    if (kind === "business") {
      this.business = true
      this.startmyself = false
    }
  }
}


