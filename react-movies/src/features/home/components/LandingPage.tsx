import { useState, useEffect } from "react";
import MoviesList from "../../movies/components/MoviesList";
import type Movie from "../../movies/models/movie.model";
import apiClient from "../../../api/apiClient";
import type LandingPageDTO from "../models/LandingPageDTO";
import AlertContext from "../../../utils/AlertContext";

export default function LandingPage() {

    const [movies, setMovies] = useState<LandingPageDTO>({})

    function loadRecords() {
        apiClient.get<LandingPageDTO>('/movies/landing').then(res => {
            setMovies(res.data);
        });
    }

    useEffect(() => {

    const inTheaters: Movie[] = [
    {
      id: 1,
      title: "Dune: Part 2",
      poster: "https://image.tmdb.org/t/p/original/5aUVLiqcW0kFTBfGsCWjvLas91w.jpg",
      releaseDate: ""
    },
    {
      id: 2,
      title: "Moana 2",
      poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/af/43/6eaf430b-771d-0872-fdab-2c786a6d8e9d/24UM1IM23328.rgb.jpg/1200x1200bf-60.jpg",
      releaseDate: ""
    },
    {
      id: 3,
      title: "Avengers Endgame",
      poster: "https://th.bing.com/th/id/OIP.NPe2_emQ2NnSqxdh6Lw1EwHaK0?w=189&h=277&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      releaseDate: ""
    },
    {
      id: 4,
      title: "Alien: Romulus",
      poster: "https://posterspy.com/wp-content/uploads/2024/03/Tenth-Poster-Alien-Romulus-Evolution.jpg",
      releaseDate: ""
    },
    {
      id: 5,
      title: "Mario: The Movie",
      poster: "https://th.bing.com/th/id/OIP.WjiZcayuXkOX6nXAYtFCtQHaLu?w=189&h=300&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      releaseDate: ""
    },
    {
      id: 6,
      title: "The Conjuring 3",
      poster: "https://www.themoviedb.org/t/p/original/lkjOx3VOSi9PBll6UY6OUyQFZYe.jpg",
      releaseDate: ""
    },
    {
      id: 7,
      title: "Sonic The Hedgehog 3",
      poster: "https://www.sonicstadium.org/uploads/monthly_2024_11/2024-sonicmovie3-poster5.jpg.7a8efb5588a90806d203a7909807a5bd.jpg",
      releaseDate: ""
    },
    {
      id: 8,
      title: "Oppenheimer",
      poster: "https://www.moviepostersgallery.com/wp-content/uploads/2023/06/Oppenheimer3.jpg",
      releaseDate: ""
    },
    {
      id: 9,
      title: "Creed 3",
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/17ea3e165462993.6407d8cfaf3a0.jpg",
      releaseDate: ""
    },
    {
      id: 10,
      title: "65",
      poster: "https://tse3.mm.bing.net/th/id/OIP.mn89axXN7xTG-miYqWAs3wHaJ8?rs=1&pid=ImgDetMain&o=7&rm=3",
      releaseDate: ""
    },
    {
      id: 11,
      title: "We Live In Time",
      poster: "https://image.tmdb.org/t/p/original/bZU0YDWUYuaufxfJNYNitiESD3s.jpg",
      releaseDate: ""
    },
    {
      id: 12,
      title: "John Wick 4",
      poster: "https://posterspy.com/wp-content/uploads/2023/02/John-Wick-4-22.jpg",
      releaseDate: ""
    },
    {
      id: 13,
      title: "No Hard Feelings",
      poster: "https://image.tmdb.org/t/p/original/eKtuZ2mgnYdBLeaBtIOnGQ4ejML.jpg",
      releaseDate: ""
    },
    {
      id: 14,
      title: "Sinners",
      poster: "https://media-cache.cinematerial.com/p/500x/hkavo2sb/sinners-movie-poster.jpg?v=1743958113",
      releaseDate: ""
    },
    {
      id: 15,
      title: "Jurassic World: Rebirth",
      poster: "https://image.tmdb.org/t/p/original/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
      releaseDate: ""
    }
  ]

  const upcomingReleases: Movie[] = [
    {
      id: 16,
      title: "The Mandalorian & Grogu",
      poster: "https://www.starwarsnewsnet.com/wp-content/uploads/2023/02/Mandalorian-S3-character-poster-Din-and-Grogu.jpg",
      releaseDate: ""
    },
    {
      id: 17,
      title: "Avatar 3",
      poster: "https://th.bing.com/th/id/OIP.yaSN_Dr11kV53f4EhEk_HQHaLH?w=189&h=284&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      releaseDate: ""
    },
    {
      id: 18,
      title: "Mercy",
      poster: "https://th.bing.com/th/id/OIP.A2S0GVtERf43ndr8D_et0QHaK-?w=189&h=280&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
      releaseDate: ""
    },
    {
      id: 19,
      title: "Mortal Kombat II: Scorpion",
      poster: "https://scified.com/u/mk-ii-----scorpion-poster-6783371.jpg",
      releaseDate: ""
    },
    {
      id: 20,
      title: "The Super Mario Galaxy",
      poster: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/11/super-mario-galaxy-movie-poster.jpg?q=49&fit=crop&w=750&dpr=2",
      releaseDate: ""
    },
    {
      id: 21,
      title: "SuperGirl",
      poster: "https://image.tmdb.org/t/p/original/niSvU02l2BONH9ivubV6K1a5QiK.jpg",
      releaseDate: ""
    },
    {
      id: 22,
      title: "Spider-Man: Brand New Day",
      poster: "https://posterspy.com/wp-content/uploads/2025/09/Spider-Man-Brand-New-Day-Poster-Ver-2.jpg",
      releaseDate: ""
    },
    {
      id: 23,
      title: "Return To Silent Hill",
      poster: "https://image.tmdb.org/t/p/original/60FHq2XklzwZPLfbYzoVW1xwO6k.jpg",
      releaseDate: ""
    },
    {
      id: 24,
      title: "Michael",
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/8de85e189545255.65ad4ce8b5537.jpg",
      releaseDate: ""
    },
    {
      id: 25,
      title: "The Odyssey",
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/dd96c1235124051.68d143b7bdf09.jpg",
      releaseDate: ""
    },
    {
      id: 26,
      title: "Hoppers",
      poster: "https://images.cinemaplus.com/hosted/goodrich-quality-theater/coming-soon/kpuKKrEDhUo5j5rayFehlsuNU34ROdW0Z7Hvf57i.jpg",
      releaseDate: ""
    },
    {
      id: 27,
      title: "Project Hail Mary Movie",
      poster: "https://image.tmdb.org/t/p/original/tawKDFUp4toBzirxkv6e5KT5ArE.jpg",
      releaseDate: ""
    },
    {
      id: 28,
      title: "Greenland 2: Migration",
      poster: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2025/09/greenland_migration_xlg.jpg",
      releaseDate: ""
    },
    {
      id: 29,
      title: "Masters Of The Universe",
      poster: "https://cdn.kinocheck.com/i/yayf62k2u2.jpg",
      releaseDate: ""
    },
    {
      id: 30,
      title: "The Death of Robin Hood",
      poster: "https://imgv2-2-f.scribdassets.com/img/document/773740471/original/a872ca860b/1?v=1",
      releaseDate: ""
    },
  ]

  setTimeout(() => {
    setMovies({
      InTheaters: inTheaters,
      UpcomingReleases: upcomingReleases
    })
  }, 700);
    loadRecords();
  }, [])

    return (
        <>
            <AlertContext.Provider value={ () => loadRecords() }>
                <h1>In Theaters</h1>
                <MoviesList movies={ movies.InTheaters } />
                <h1>Upcoming Releases</h1>
                <MoviesList movies={ movies.UpcomingReleases } />
            </AlertContext.Provider>
        </>
    )
}