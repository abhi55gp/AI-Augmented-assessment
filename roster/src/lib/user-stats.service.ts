import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserStats {
  username: string;
  profileLink: string;
  articlesCount: number;
  favoritesCount: number;
  firstArticleDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  constructor(private http: HttpClient) {}

  getUserStatistics(): Observable<UserStats[]> {
    return this.http.get<UserStats[]>(`/api/users/stats`);
  }
}
