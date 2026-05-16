import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss'],
})
export class Blog {}
