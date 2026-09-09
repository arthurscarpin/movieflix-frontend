import { Component } from '@angular/core';
import { Card } from '../../../components/logged/card/card';
import { Header } from '../../../components/logged/header/header';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  movies: Movie[] = [
    {
      id: 1,
      title: 'O Poderoso Chefão',
      description: 'Don Corleone, o chefe da família Corleone, é o padrinho do crime organizado em Nova York. Quando um rival tenta assassinar Don Corleone, seu filho Michael se envolve no mundo do crime para proteger sua família.',
      duration: '1:30h',
      ageRating: 'Somente +18',
      approvalRating: 67,
      providerLogo: '/images/partners/claro.png',
      isTop10: true,
    },
    {
      id: 2,
      title: 'Matrix',
      description: 'Um programador de computador descobre que a realidade em que vive é uma simulação e se junta a um grupo de rebeldes para combater máquinas e libertar a humanidade.',
      duration: '2:16h',
      ageRating: 'Somente +14',
      approvalRating: 81,
      providerLogo: '/images/partners/netflix.png',
      isTop10: false,
    },
    {
      id: 3,
      title: 'Interestelar',
      description: 'Uma equipe de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enfrentando desafios cósmicos e emocionais.',
      duration: '2:49h',
      ageRating: 'Livre',
      approvalRating: 92,
      providerLogo: '/images/partners/prime-video.png',
      isTop10: true,
    },
    {
      id: 4,
      title: 'Django Livre',
      description: 'Um ex-escravo se torna um caçador de recompensas e embarca em uma missão brutal para resgatar sua esposa em meio ao Velho Oeste.',
      duration: '2:45h',
      ageRating: 'Somente +16',
      approvalRating: 74,
      providerLogo: '/images/partners/globoplay.png',
      isTop10: false,
    },
    {
      id: 5,
      title: 'O Hobbit',
      description: 'Bilbo Bolseiro é convocado para uma aventura épica junto a um grupo de anões, enfrentando dragões, monstros e escolhas que redefinem seu destino.',
      duration: '2:58h',
      ageRating: 'Livre',
      approvalRating: 88,
      providerLogo: '/images/partners/prime-video.png',
      isTop10: true,
    },
    {
      id: 6,
      title: 'Mad Max: Estrada da Fúria',
      description: 'Em um mundo pós-apocalíptico, Max e Furiosa enfrentam perigos extremos em uma corrida pela sobrevivência em meio ao caos e à violência.',
      duration: '2:00h',
      ageRating: 'Somente +16',
      approvalRating: 85,
      providerLogo: '/images/partners/netflix.png',
      isTop10: false,
    },
  ];
}
