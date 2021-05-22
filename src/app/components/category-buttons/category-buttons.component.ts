import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent implements OnInit {

  CATEGORY_BUTTONS = [
    {
      text: 'Japanese',
      color: '#48D1CC'
    },
    {
      text: 'Italian',
      color: '#B0E0E6'
    },
    {
      text: 'Vietnamese',
      color: '#FF6347'
    },
    {
      text: 'Mexican',
      color: '#FFD700'
    },
    {
      text: 'Healthy',
      color: '#32CD32'
    },
  ];

  constructor(private uiService:UiService) {}

  filterByStyle(style: string)
  {
    this.uiService.search(style, 1);
  }

  ngOnInit(): void {
  }

}
