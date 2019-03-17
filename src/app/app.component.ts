import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core'
import { AccidentService } from './common/services/accident.service'
import { Accident } from './common/interfaces/accident'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/main.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AccidentService]
})
export class AppComponent implements OnInit, OnDestroy {
  hasAccident = false
  interval: any
  accidents: Accident[]

  constructor(private accidentService: AccidentService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.accidentService.list().subscribe((res: Accident[]) => {
        this.accidents = res
        this.hasAccident = res.findIndex((a: Accident) => !a.closed) !== -1
      })
    }, 2000)
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
