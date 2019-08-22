import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HelpdeskDataService } from '../helpdesk-data/helpdesk-data.service';

@Injectable()
export class RouteStateService {
  adminRouteChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, helpdesks: HelpdeskDataService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/').splice(1);

        // check route for admin and set admin state
        if (url[0].toLowerCase() === 'admin') {
          this.adminRouteChange.next(true);
        } else if (url[0].toLowerCase() === 'helpdesk') {
          this.adminRouteChange.next(false);
        }

        if (url.length > 1) {
          helpdesks.setActiveHelpdesk(+url[1]);
        }
      }
    });
  }

  /**
   * Check if string equals 'admin'
   * @param route String to check
   */
  isAdmin(route: string): boolean {
    return (route.toLowerCase() === 'admin');
  }


}

