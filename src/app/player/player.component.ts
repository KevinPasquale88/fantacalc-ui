import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FantaserviceService, Player } from '../services/fantaservice.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  role: string = '';

  index = 0;
  players: Player[] = [];

  constructor(private fantaserviceService: FantaserviceService, private route: ActivatedRoute, private router: Router) {
    this.role = this.route.snapshot.params['role']
  }

  ngOnInit(): void {
    this.players = this.fantaserviceService.getListOfPlayers();
  }

  nextMedia() {
    if (this.index <= this.players.length) {
      this.index = this.index + 1;
    }
  }

  prevMedia() {
    if (this.index > 0) {
      this.index = this.index - 1;
    }
  }

  back() {
    this.fantaserviceService.clear();
    this.router.navigate(['searchplayers']);
  }
}
