import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private uiService:UiService) { }
  faTimes = faTimesCircle;
  searchWord: string = "";

  ngOnInit(): void {
  }

  onClearSearch() {
    this.searchWord="";
  }

  onChange() {
    this.uiService.search(this.searchWord);
  }
}
