import { Component, AfterViewChecked } from '@angular/core';

import { HighlightService } from './services/highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  emptyGuid = '00000000-0000-0000-0000-000000000000';
  code = `CAST(CAST(0 AS BINARY) AS UNIQUEIDENTIFIER)`;

  highlighted = false;

  constructor(private highlightService: HighlightService) {}

  ngAfterViewChecked() {
    if (this.code && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
