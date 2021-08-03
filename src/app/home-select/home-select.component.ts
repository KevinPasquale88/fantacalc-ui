import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FantaserviceService } from '../services/fantaservice.service';

@Component({
  selector: 'app-home-select',
  templateUrl: './home-select.component.html',
  styleUrls: ['./home-select.component.css']
})
export class HomeSelectComponent implements OnInit {

  title = 'FANTACALCIO AUCTION'

  shuffle: boolean = false;

  constructor(private fantaserviceService: FantaserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  changeSelection(eventcheck: any) {
    if (eventcheck.target.checked) {
      this.shuffle = true;
    }
  }
  
  getPlayers(role: string) {
    this.fantaserviceService.searchPlayersWithRole(role, this.shuffle).subscribe(response => {
      console.log(response);
      this.fantaserviceService.setListOfPlayers(response);
      this.router.navigate(['players', role]);
    }, errors => {
      console.log(errors);
    });
  }
}
