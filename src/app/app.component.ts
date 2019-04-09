import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import{OnInit, OnChanges} from '@angular/core';
import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Curriculum';
  route;
  navStart: Observable<NavigationStart>;
  constructor(private router: Router, private activatedRouter: ActivatedRoute){
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit(){
    this.navStart.subscribe(evt => {
      this.route = evt.url;
    });

  }

}

