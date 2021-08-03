import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FantaserviceService } from '../services/fantaservice.service';

@Component({
  selector: 'app-home-select',
  templateUrl: './home-select.component.html',
  styleUrls: ['./home-select.component.css']
})
export class HomeSelectComponent implements OnInit {

  title = 'AUCTION'

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
    console.log(role);
    console.log(this.shuffle);
    this.fantaserviceService.searchPlayersWithRole(role, this.shuffle).subscribe(response => {
      this.fantaserviceService.setListOfPlayers(response);
      this.router.navigate(['role', role]);
    }, errors => {
      console.log(errors);
    });
  }
}
