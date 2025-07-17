import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatsService } from './user-stats.service';

interface UserStats {
  username: string;
  profileLink: string;
  articlesCount: number;
  favoritesCount: number;
  firstArticleDate: string;
}

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: [],
  providers: [],
  imports: [CommonModule],
  standalone: true,
})
export class RosterComponent implements OnInit {
  users: UserStats[] = [];

  constructor(private userStatsService: UserStatsService) {}

  ngOnInit() {
    this.userStatsService.getUserStatistics()
      .subscribe(data => {
        this.users = data;
      }, error => {
        console.error('Error fetching user statistics:', error);
      });
  }


}
