import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

export class Player {
  constructor(public idplayer: number,
    public name: string,
    public team: string,
    public quote: string,
    public role: string,
    public fvm: number) { }
}

@Injectable({
  providedIn: 'root'
})
export class FantaserviceService {

  server = "localhost";
  port = "9090";

  constructor(private http: HttpClient) { }

  searchPlayersWithRole(role: string, shuffle: boolean) {
    const params = new HttpParams().set('role', role).set('shuffle', String(shuffle));
    return this.http.get<Player[]>(`http://${this.server}:${this.port}/fantacalcioapi/getPlayers`, { params });
  }

  setListOfPlayers(storage: Player[]) {
    Cookie.set('storagelistplayer', JSON.stringify(storage));
  }

  getListOfPlayers() {
    return JSON.parse(Cookie.get('storagelistplayer'));
  }

  clear() {
    Cookie.deleteAll();
  }
}
