import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  constructor(private router: Router){}

  navigateToHome() {
    this.router.navigate(['/blog']);
  }

  newPost: string = ''; // Define la propiedad newPost
  posts: string[] = []; // Define la propiedad posts

  sharePost() {
    // Define la lógica para compartir una publicación
    this.posts.push(this.newPost); // Agrega la nueva publicación al arreglo de posts
    this.newPost = ''; // Limpia el campo de entrada después de compartir
  }
  
}
