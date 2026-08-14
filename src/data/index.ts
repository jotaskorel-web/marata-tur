import { Destination, Trip, Testimonial, BlogPost, SocialPost } from '@/types'

/**
 * Todos os dados abaixo foram extraídos das publicações públicas reais do
 * Instagram @live.tur (re-scrape em ago/2026). Preços, datas e roteiros são
 * os divulgados pela própria agência. Estrutura pronta para futura integração
 * com CMS/back-end sem alterar a interface.
 */

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'natal',
    title: 'Natal',
    state: 'RN',
    country: 'Brasil',
    description:
      'O queridinho da Live Tur: dias de sol no Marsol Beach Resort em sistema all inclusive, com muito conforto à beira-mar.',
    image: '/images/cities/natal.jpg',
    featured: true,
    region: 'Nordeste',
  },
  {
    id: '2',
    slug: 'rio-de-janeiro',
    title: 'Rio de Janeiro',
    state: 'RJ',
    country: 'Brasil',
    description:
      'Ponto de embarque do nosso Carnaval em alto-mar a bordo do MSC Musica, navegando pelo melhor do litoral brasileiro.',
    image: '/images/cities/rio-de-janeiro.jpg',
    featured: true,
    region: 'Sudeste',
  },
  {
    id: '3',
    slug: 'porto-de-galinhas',
    title: 'Porto de Galinhas',
    state: 'PE',
    country: 'Brasil',
    description:
      'Piscinas naturais, praias paradisíacas e a charmosa Vila de Carneiros em um roteiro completo pelo litoral pernambucano.',
    image: '/images/cities/porto-de-galinhas.jpg',
    featured: true,
    region: 'Nordeste',
  },
  {
    id: '4',
    slug: 'campos-do-jordao',
    title: 'Serras de MG e SP',
    state: 'MG / SP',
    country: 'Brasil',
    description:
      'Monte Verde, Monte Sião, Serra Negra e Campos do Jordão: o charme das montanhas com voo direto saindo de João Pessoa.',
    image: '/images/cities/campos-do-jordao.jpg',
    featured: true,
    region: 'Sudeste',
  },
  {
    id: '5',
    slug: 'belo-horizonte',
    title: 'Belo Horizonte',
    state: 'MG',
    country: 'Brasil',
    description:
      'A capital mineira com sua gastronomia inconfundível, cultura e hospitalidade — aéreo saindo de Recife.',
    image: '/images/cities/belo-horizonte.jpg',
    featured: false,
    region: 'Sudeste',
  },
  {
    id: '6',
    slug: 'bariloche',
    title: 'Bariloche',
    state: 'Rio Negro',
    country: 'Argentina',
    description:
      'Paisagens de tirar o fôlego na Patagônia argentina, parte do nosso Circuito Andino entre o Chile e a Argentina.',
    image: '/images/cities/bariloche.jpg',
    featured: true,
    region: 'Internacional',
  },
  {
    id: '7',
    slug: 'natuba',
    title: 'Natuba',
    state: 'PB',
    country: 'Brasil',
    description:
      'A tradicional excursão Tur das Uvas: um bate-volta cheio de sabor, paisagens e experiências pertinho de casa.',
    image: '/images/cities/natuba.jpg',
    featured: false,
    region: 'Nordeste',
  },
  {
    id: '8',
    slug: 'taquaritinga-do-norte',
    title: 'Taquaritinga do Norte',
    state: 'PE',
    country: 'Brasil',
    description:
      'A Rota dos Mirantes na serra pernambucana: café especial, passeio de Toyota 4x4 e o melhor pôr do sol da região.',
    image: '/images/cities/taquaritinga.jpg',
    featured: false,
    region: 'Nordeste',
  },
]

export const trips: Trip[] = [
  {
    id: '1',
    slug: 'carnaval-alto-mar-msc-musica-2027',
    title: 'Carnaval em Alto-Mar — MSC Musica 2027',
    destination: 'Rio de Janeiro',
    departureCity: 'Rio de Janeiro',
    startDate: '2027-02-02',
    duration: '7 noites',
    image: '/images/cities/rio-de-janeiro.jpg',
    description:
      'Viva um Carnaval inesquecível a bordo do MSC Musica, com 7 noites de conforto, gastronomia e paisagens deslumbrantes pelo litoral brasileiro.',
    highlights: [
      'Cruzeiro de 7 noites no MSC Musica',
      'Pensão completa a bordo',
      'Cabine com Varanda — Categoria Bella',
      'Roteiro por Búzios, Ilha Grande, Paranaguá, Itajaí e Ilhabela',
    ],
    included: [
      'Cruzeiro de 7 noites',
      'Pensão completa',
      'Cabine com Varanda (Categoria Bella)',
    ],
    itinerary: [
      { day: 1, title: 'Embarque no Rio de Janeiro', description: 'Início da viagem com embarque no MSC Musica.' },
      { day: 2, title: 'Búzios (RJ)', description: 'Parada em uma das praias mais charmosas do litoral fluminense.' },
      { day: 3, title: 'Ilha Grande (RJ)', description: 'Natureza preservada e mar cristalino em Angra dos Reis.' },
      { day: 4, title: 'Paranaguá (PR)', description: 'História e cultura do litoral paranaense.' },
      { day: 5, title: 'Itajaí (SC)', description: 'O melhor do litoral catarinense.' },
      { day: 6, title: 'Ilhabela (SP)', description: 'Praias selvagens e paisagens exuberantes.' },
      { day: 7, title: 'Retorno ao Rio de Janeiro', description: 'Último dia a bordo com desembarque no Rio.' },
    ],
    category: 'cruzeiro',
    featured: true,
    price: 4344,
    installments: 12,
    installmentValue: 386,
    perPerson: true,
  },
  {
    id: '2',
    slug: 'circuito-das-montanhas-mg-sp',
    title: 'Circuito das Montanhas — Minas Gerais + São Paulo',
    destination: 'Monte Verde, Monte Sião, Serra Negra e Campos do Jordão',
    departureCity: 'João Pessoa',
    startDate: '',
    dateLabel: 'Consulte a próxima saída',
    duration: '6 dias / 5 noites',
    image: '/images/cities/campos-do-jordao.jpg',
    description:
      'Um roteiro exclusivo pelo charme das montanhas de Minas Gerais e São Paulo, com voo direto saindo de João Pessoa e pacote completo.',
    highlights: [
      'Monte Verde (MG)',
      'Monte Sião (MG)',
      'Serra Negra (SP)',
      'Campos do Jordão (SP)',
      'Voo direto saindo de João Pessoa',
    ],
    included: [
      'Passagem aérea',
      'Hotéis',
      'Transporte terrestre',
      'City tours',
      'Guias locais',
      'Acompanhamento da equipe Live Tur',
      'Brinde exclusivo da agência',
    ],
    category: 'nacional',
    featured: true,
    price: 3790,
    installments: 10,
    installmentValue: 399,
    perPerson: true,
  },
  {
    id: '3',
    slug: 'belo-horizonte-promo-relampago',
    title: 'Belo Horizonte — Promoção Relâmpago',
    destination: 'Belo Horizonte',
    departureCity: 'Recife',
    startDate: '2026-10-31',
    endDate: '2026-11-03',
    duration: '4 dias',
    image: '/images/cities/belo-horizonte.jpg',
    description:
      'Conheça a capital mineira com aéreo saindo de Recife, hotel e transfers inclusos. Promoção relâmpago com apenas 10 vagas.',
    highlights: [
      'Aéreo saindo de Recife',
      'Hotel',
      'Transfer de chegada e saída (On/Out)',
      'Gastronomia mineira',
    ],
    included: ['Passagem aérea', 'Hospedagem', 'Transfer aeroporto/hotel'],
    category: 'nacional',
    featured: true,
    price: 1890,
    originalPrice: 2890,
    installments: 10,
    installmentValue: 179,
    entryValue: 100,
    perPerson: true,
    promo: true,
  },
  {
    id: '4',
    slug: 'natal-marsol-all-inclusive',
    title: 'Natal — Marsol Beach Resort (All Inclusive)',
    destination: 'Natal',
    departureCity: 'Consulte a saída',
    startDate: '2026-12-06',
    endDate: '2026-12-08',
    duration: '3 dias / 2 diárias',
    image: '/images/cities/natal.jpg',
    description:
      'O pacote mais aguardado do ano está de volta: 3 dias no Marsol Beach Resort em sistema all inclusive, com comidas e bebidas inclusas.',
    highlights: [
      'Sistema All Inclusive',
      'Comidas e bebidas (alcoólicas e não alcoólicas) inclusas',
      '3 dias / 2 diárias à beira-mar',
    ],
    included: ['Hospedagem no Marsol Beach Resort', 'All inclusive (comidas e bebidas)'],
    category: 'praia',
    featured: true,
    price: 1490,
    installments: 14,
    installmentValue: 100,
    entryValue: 90,
    perPerson: true,
    promo: true,
  },
  {
    id: '5',
    slug: 'tamandare-porto-de-galinhas-carneiros',
    title: 'Tamandaré + Porto de Galinhas + Carneiros',
    destination: 'Litoral de Pernambuco',
    departureCity: 'Areia',
    departureCities: ['Areia', 'Alagoa Grande'],
    startDate: '2026-09-18',
    endDate: '2026-09-20',
    duration: '3 dias / 2 noites',
    image: '/images/cities/porto-de-galinhas.jpg',
    description:
      'Três destinos incríveis em uma única viagem: praia, passeio e experiência noturna pelo melhor do litoral pernambucano.',
    highlights: [
      'Hospedagem em Tamandaré com café da manhã',
      'Noite especial na charmosa Vila Padre Arlindo (Carneiros)',
      'Passeio completo para Porto de Galinhas (bate e volta)',
      'Tempo livre para curtir praias paradisíacas',
    ],
    included: ['Hospedagem em Tamandaré com café da manhã', 'Passeios conforme roteiro'],
    category: 'praia',
    featured: true,
    price: 690,
    installments: 10,
    installmentValue: 69,
    perPerson: true,
    promo: true,
  },
  {
    id: '6',
    slug: 'circuito-andino-chile-argentina',
    title: 'Circuito Andino — Chile e Argentina',
    destination: 'Bariloche, Córdoba e Cordilheira dos Andes',
    departureCity: 'Consulte a saída',
    startDate: '',
    dateLabel: 'Viagem realizada — consulte próximas edições',
    duration: 'Roteiro internacional',
    image: '/images/cities/bariloche.jpg',
    gallery: ['/images/cities/bariloche.jpg', '/images/gallery/paisagem.jpg'],
    description:
      'Uma travessia inesquecível pela Cordilheira dos Andes, saindo do Chile a caminho da Argentina, passando por Bariloche e Córdoba. Em parceria com a Trajjetus Turismo.',
    highlights: ['Bariloche (Argentina)', 'Córdoba (Argentina)', 'Travessia dos Andes'],
    category: 'internacional',
    featured: false,
  },
  {
    id: '7',
    slug: 'tur-das-uvas-natuba',
    title: 'Tur das Uvas — Natuba (PB)',
    destination: 'Natuba',
    departureCity: 'Consulte a saída',
    startDate: '',
    dateLabel: 'Excursão bate-volta — consulte próximas datas',
    duration: '1 dia',
    image: '/images/cities/natuba.jpg',
    description:
      'A tradicional excursão Tur das Uvas em Natuba: um dia repleto de alegria, paisagens encantadoras e experiências únicas pertinho de casa.',
    highlights: ['Passeio de um dia', 'Paisagens da região', 'Acompanhamento Live Tur'],
    category: 'excursao',
    featured: false,
  },
  {
    id: '8',
    slug: 'rota-dos-mirantes-taquaritinga',
    title: 'Rota dos Mirantes — Taquaritinga do Norte (PE)',
    destination: 'Taquaritinga do Norte',
    departureCity: 'Consulte a saída',
    startDate: '',
    dateLabel: 'Excursão — consulte próximas datas',
    duration: '2 dias',
    image: '/images/cities/taquaritinga.jpg',
    description:
      'A serra pernambucana como você nunca viu: café especial, passeio de Toyota 4x4, mirantes e um pôr do sol inesquecível.',
    highlights: [
      'Passeio em Toyotas 4x4 (Toyoserra)',
      'Experiências de café na serra',
      'Mirante Rampa do Pepê e pôr do sol',
      'City tour em Taquaritinga do Norte',
    ],
    included: [
      'Transporte ida e volta em ônibus confortável',
      'Passeio em Toyotas 4x4',
      'Hospedagem em hotel com piscina',
      'Café da manhã no hotel',
      '02 almoços inclusos',
      'Guia de turismo acompanhante',
      'Todas as taxas de entrada inclusas',
    ],
    category: 'excursao',
    featured: false,
  },
  {
    id: '9',
    slug: 'romaria-aparecida-cancao-nova',
    title: 'Romaria — Aparecida, Canção Nova e Santuários',
    destination: 'Aparecida, Canção Nova, Atibaia e Campos do Jordão',
    departureCity: 'Consulte a saída',
    startDate: '',
    dateLabel: 'Viagem religiosa — consulte próximas edições',
    duration: 'Roteiro de fé',
    image: '/images/cities/aparecida.jpg',
    description:
      'Uma jornada de fé e emoção por destinos especiais: Canção Nova, Frei Galvão, Aparecida, o Santuário Mãe Rainha em Atibaia, Campos do Jordão e a encantadora Holambra.',
    highlights: [
      'Santuário Nacional de Aparecida',
      'Canção Nova',
      'Santuário Mãe Rainha (Atibaia)',
      'Campos do Jordão e Holambra',
    ],
    category: 'religioso',
    featured: false,
  },
]

/**
 * Não há reviews formais (com nota) publicados. Os textos abaixo são falas
 * públicas reais — reposts de clientes e mensagens da própria Live Tur nas
 * redes. Nenhum depoimento foi inventado. Substituir/complementar quando a
 * agência disponibilizar avaliações do Google.
 */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Francisca Maria',
    text: 'Passeio para Natal com a Live Tur.',
    destination: 'Natal',
    sourceUrl: 'https://www.instagram.com/p/DbVvq6wDplA/',
  },
  {
    id: '2',
    name: 'Viajante Live Tur',
    text: 'Viajar é bom, mas viajar com a Live Tur é outro nível. É sobre viver momentos, colecionar histórias e aproveitar cada detalhe sem preocupação.',
    sourceUrl: 'https://www.instagram.com/reel/DXxkylGBPIa/',
  },
  {
    id: '3',
    name: 'Grupo Bariloche',
    text: 'Momentos inesquecíveis, paisagens de tirar o fôlego, muita diversão e novas amizades marcaram essa viagem dos sonhos.',
    destination: 'Bariloche, Argentina',
    sourceUrl: 'https://www.instagram.com/reel/DafzZF-OYQs/',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'carnaval-em-alto-mar-o-que-esperar',
    title: 'Carnaval em alto-mar: o que esperar de um cruzeiro na folia',
    excerpt:
      'Piscinas, espetáculos, festas temáticas e paisagens novas todos os dias. Veja como funciona passar o Carnaval a bordo de um navio.',
    content:
      'Passar o Carnaval em um cruzeiro é viver a folia com todo o conforto de um resort flutuante. A bordo do MSC Musica, por exemplo, os dias são preenchidos com piscinas, espetáculos, festas temáticas e gastronomia de alto nível, enquanto o navio navega por destinos encantadores do litoral brasileiro como Búzios, Ilha Grande e Ilhabela...',
    image: '/images/trips/carnaval-msc.jpg',
    category: 'tourism',
    date: '2026-08-06',
    author: 'Equipe Live Tur',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'circuito-das-montanhas-mg-sp-guia',
    title: 'Circuito das Montanhas: o charme de MG e SP em uma viagem',
    excerpt:
      'Monte Verde, Monte Sião, Serra Negra e Campos do Jordão em um roteiro único. Descubra o que faz das serras um destino imperdível.',
    content:
      'As montanhas de Minas Gerais e São Paulo reúnem clima romântico, gastronomia típica e paisagens inesquecíveis. Em um único roteiro é possível conhecer o charme de Monte Verde, as compras de Monte Sião, o teleférico de Serra Negra e a elegância de Campos do Jordão...',
    image: '/images/trips/circuito-montanhas.jpg',
    category: 'itineraries',
    date: '2026-08-02',
    author: 'Equipe Live Tur',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'rota-dos-mirantes-taquaritinga-serra-do-cafe',
    title: 'Rota dos Mirantes: a serra do café em Taquaritinga do Norte',
    excerpt:
      'Café especial, passeio de Toyota 4x4 e o melhor pôr do sol de Pernambuco. Conheça um dos destinos preferidos das nossas excursões.',
    content:
      'Taquaritinga do Norte, na serra pernambucana, é um destino surpreendente para quem busca clima ameno, natureza e boa gastronomia. A Rota dos Mirantes combina experiências de café especial, passeios de Toyota 4x4 pela serra e mirantes com vistas de tirar o fôlego...',
    image: '/images/trips/taquaritinga.jpg',
    category: 'destinations',
    date: '2026-04-28',
    author: 'Equipe Live Tur',
    readTime: 4,
  },
]

/** Grid do Instagram — imagens reais de posts públicos @live.tur */
export const socialPosts: SocialPost[] = [
  { id: '1', image: '/images/trips/carnaval-msc.jpg', caption: 'Carnaval em alto-mar com a Live Tur', url: 'https://www.instagram.com/reel/Dbs75_FueJ2/' },
  { id: '2', image: '/images/trips/circuito-montanhas.jpg', caption: 'Circuito das Montanhas MG + SP', url: 'https://www.instagram.com/reel/DbikGmMOZzf/' },
  { id: '3', image: '/images/trips/natal-marsol.jpg', caption: 'Marsol Beach Resort — Natal', url: 'https://www.instagram.com/reel/DbX082zNs0q/' },
  { id: '4', image: '/images/gallery/bariloche.jpg', caption: 'Bariloche, Argentina', url: 'https://www.instagram.com/reel/DafzZF-OYQs/' },
  { id: '5', image: '/images/trips/tamandare.jpg', caption: 'Tamandaré + Porto de Galinhas + Carneiros', url: 'https://www.instagram.com/reel/DX392D_OVtV/' },
  { id: '6', image: '/images/trips/taquaritinga.jpg', caption: 'Rota dos Mirantes — Taquaritinga do Norte', url: 'https://www.instagram.com/reel/DXp6gaRDjdv/' },
]
