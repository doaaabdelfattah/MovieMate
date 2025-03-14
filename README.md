# MovieMate 🎬

MovieMate is a Next.js-based movie recommendation app that allows users to discover, search, and save their favorite movies. It fetches dynamic movie data from the TMDB API and provides an immersive browsing experience with smooth animations and responsive UI.

## 🚀 Features

- **Dynamic Movie Listings**: Browse movies categorized by popular, trending, and top-rated.
- **Detailed Movie Pages**: Get movie details, including ratings, genres, and overviews.
- **Favorites System**: Save movies to your personal favorites list.
- **Search Functionality**: Search for movies and filter results instantly.
- **Infinite Scrolling & Load More**: Seamlessly load more movies.
- **Responsive Design**: Optimized for all devices.
- **Smooth Animations**: Individual animations for movie cards and page elements using Framer Motion.

## 🛠️ Tech Stack

- **Next.js (App Router)** – Server-side rendering & API handling.
- **Tailwind CSS** – Styling & layout.
- **Styled Components** – Component-based styling.
- **TypeScript** – Type safety & better developer experience.
- **TMDB API** – Movie data fetching.
- **Framer Motion** – Smooth animations.
- **Swiper.js** – Movie sliders & carousels.

## 📂 Project Structure

```
📦 MovieMate
├── 📂 components
│   ├── 📂 home
│   │   ├── HeroSwiper.tsx
│   │   ├── HeroCard.tsx
│   ├── 📂 reusable
│   │   ├── MovieCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LoadMore.tsx
│   │   ├── HeaderSection.tsx
├── 📂 hooks
│   ├── useFetch.ts
├── 📂 lib
│   ├── tmdb.ts (API requests)
│   ├── types.ts
├── 📂 pages
│   ├── 📂 movies
│   │   ├── [id].tsx
│   ├── 📂 favorites
│   │   ├── index.tsx
│   ├── index.tsx
└── 📜 README.md
```

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/moviemate.git
   cd moviemate
   ```
2. **Install dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add:
   ```sh
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```
4. **Run the development server**:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. **Open in browser**:
   Visit `http://localhost:3000`

## 🎨 Animations & Effects

- **Movie Cards**: Staggered appearance with fade-in effects.
- **Header Lines**: Expanding line animations.
- **Swipers**: Smooth sliding with individual card delays.

## 📌 Future Enhancements

- **User Authentication**: Login to sync favorites.
- **Genre-based Filtering**: Advanced filtering options.
- **Movie Recommendations**: AI-based movie suggestions.
- **Dark Mode**: Theme toggle support.

## 🤝 Contributing

Feel free to fork, submit issues, or make pull requests! 🚀

## 📜 License

This project is licensed under the MIT License.
