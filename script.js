const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: "$16.49",
    image:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1455885666463-9fb3be27f2e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$12.49",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
];

const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function getCardsPerView() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 960) return 2;
  return 3;
}

function renderCarousel() {
  const cardsPerView = getCardsPerView();
  const visibleBooks = [];

  for (let i = 0; i < cardsPerView; i += 1) {
    visibleBooks.push(books[(currentIndex + i) % books.length]);
  }

  track.innerHTML = visibleBooks
    .map(
      (book) => `
      <article class="book-card">
        <img src="${book.image}" alt="${book.title} book cover" />
        <div class="book-content">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p><strong>${book.price}</strong></p>
          <div class="book-actions">
            <a href="#" class="btn btn-secondary">Add to Wishlist</a>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </article>
    `,
    )
    .join("");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + books.length) % books.length;
  renderCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % books.length;
  renderCarousel();
});

window.addEventListener("resize", renderCarousel);

renderCarousel();
