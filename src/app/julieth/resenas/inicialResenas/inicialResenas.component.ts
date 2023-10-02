import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicialResenas',
  templateUrl: './inicialResenas.component.html',
  styleUrls: ['./inicialResenas.component.css']
})
export class inicialResenasComponent implements OnInit {
  ratings = [
    { id: 1, name: "Terrible" },
    { id: 2, name: "Bad" },
    { id: 3, name: "OK" },
    { id: 4, name: "Good" },
    { id: 5, name: "Excellent" }
  ];
  rating: any = null;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.addEventListener("change", (e) => this.updateRating(e));

      // Stop Firefox from preserving form data between refreshes
      try {
        formElement.reset();
      } catch (err) {
        console.error("Element isn’t a form.");
      }
    }
  }

  updateRating(e: any) {
    // Clear animation delays
    const labelElements = document.querySelectorAll(`[for*="rating"]`);
    labelElements.forEach((el) => {
      el.classList.remove("rating__label--delay1");
      el.classList.remove("rating__label--delay2");
      el.classList.remove("rating__label--delay3");
      el.classList.remove("rating__label--delay4");
    });

    const ratingObject = this.ratings.find((r) => r.id === +e.target.value);
    const prevRatingID = this.rating?.id || 0;

    let delay = 0;
    this.rating = ratingObject;
    this.ratings.forEach((rating) => {
      const { id } = rating;

      // Add the delays
      const ratingLabel = document.querySelector(`[for="rating-${id}"]`);

      if (id > prevRatingID + 1 && id <= this.rating.id) {
        ++delay;
        ratingLabel?.classList.add(`rating__label--delay${delay}`);
      }

      // Hide ratings to not read, show the one to read
      const ratingTextEl = document.querySelector(`[data-rating="${id}"]`);

      if (this.rating.id !== id) {
        ratingTextEl?.setAttribute("hidden", "true");
      } else {
        ratingTextEl?.removeAttribute("hidden");
      }
    });
  }
}
