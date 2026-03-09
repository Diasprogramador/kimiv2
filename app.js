/* ============================================
   LILAMARKET - JAVASCRIPT PRINCIPAL
   Marketplace de Hardware e Cursos
   ============================================ */

/* ============================================
   DADOS DOS PRODUTOS - HARDWARE E CURSOS
   ============================================ */

/**
 * Array de produtos contendo hardware e cursos
 * Cada produto possui: id, nome, categoria, preço, imagem, especificações, etc.
 */
const products = [
    /* ============================================
       PLACAS DE VÍDEO (GPUs)
       ============================================ */
    {
        id: 'gpu-001',
        name: 'Placa de Vídeo RTX 4090 24GB',
        category: 'hardware',
        subcategory: 'placa-video',
        price: 10999,
        oldPrice: 12999,
        image: 'images/placa-video-rtx4090.png',
        badge: 'TOP DE LINHA',
        specs: ['24GB GDDR6X', 'CUDA Cores: 16384', 'Boost Clock: 2.52 GHz'],
        description: 'A placa de vídeo mais poderosa da NVIDIA. Desempenho excepcional para jogos em 4K, ray tracing e criação de conteúdo. Arquitetura Ada Lovelace com DLSS 3.',
        rating: 5.0,
        reviews: 428,
        estoque: 5
    },
    {
        id: 'gpu-002',
        name: 'Placa de Vídeo RX 7900 XTX 24GB',
        category: 'hardware',
        subcategory: 'placa-video',
        price: 7999,
        oldPrice: 8999,
        image: 'images/placa-video-rx7900.png',
        badge: 'CUSTO-BENEFÍCIO',
        specs: ['24GB GDDR6', 'Stream Processors: 6144', 'Game Clock: 2.3 GHz'],
        description: 'Placa de vídeo AMD flagship com excelente desempenho em 4K. Arquitetura RDNA 3 com ray tracing avançado e FidelityFX Super Resolution.',
        rating: 4.8,
        reviews: 312,
        estoque: 8
    },
    {
        id: 'gpu-003',
        name: 'Placa de Vídeo RTX 4070 Ti 12GB',
        category: 'hardware',
        subcategory: 'placa-video',
        price: 4999,
        oldPrice: 5699,
        image: 'images/placa-video-rtx4090.png',
        badge: '-12%',
        specs: ['12GB GDDR6X', 'CUDA Cores: 7680', 'Boost Clock: 2.61 GHz'],
        description: 'Placa de vídeo de alta performance para jogos em 1440p e 4K. DLSS 3, ray tracing de última geração e eficiência energética.',
        rating: 4.7,
        reviews: 589,
        estoque: 15
    },

    /* ============================================
       PROCESSADORES (CPUs)
       ============================================ */
    {
        id: 'cpu-001',
        name: 'Processador Intel Core i9-14900K',
        category: 'hardware',
        subcategory: 'processador',
        price: 3499,
        oldPrice: 3999,
        image: 'images/processador-i9.png',
        badge: 'MAIS VENDIDO',
        specs: ['24 Cores (8P+16E)', '32 Threads', 'Clock: 3.2GHz / 6.0GHz'],
        description: 'Processador de última geração Intel com arquitetura híbrida. Desempenho excepcional para gaming, criação de conteúdo e workstations.',
        rating: 4.9,
        reviews: 756,
        estoque: 12
    },
    {
        id: 'cpu-002',
        name: 'Processador AMD Ryzen 9 7950X3D',
        category: 'hardware',
        subcategory: 'processador',
        price: 3299,
        oldPrice: 3799,
        image: 'images/processador-ryzen.png',
        badge: 'GAMING',
        specs: ['16 Cores', '32 Threads', 'Clock: 4.2GHz / 5.7GHz'],
        description: 'Processador AMD com tecnologia 3D V-Cache para gaming supremo. Desempenho excepcional em jogos e aplicações multithread.',
        rating: 4.8,
        reviews: 523,
        estoque: 10
    },
    {
        id: 'cpu-003',
        name: 'Processador Intel Core i5-14600K',
        category: 'hardware',
        subcategory: 'processador',
        price: 1799,
        oldPrice: 2199,
        image: 'images/processador-i9.png',
        specs: ['14 Cores (6P+8E)', '20 Threads', 'Clock: 3.5GHz / 5.3GHz'],
        description: 'Processador intermediário com excelente custo-benefício. Ideal para gaming em 1080p e 1440p com overclocking.',
        rating: 4.6,
        reviews: 892,
        estoque: 20
    },

    /* ============================================
       PLACAS-MÃE (MOTHERBOARDS)
       ============================================ */
    {
        id: 'mb-001',
        name: 'Placa-Mãe ASUS ROG Z790',
        category: 'hardware',
        subcategory: 'placa-mae',
        price: 2899,
        oldPrice: 3299,
        image: 'images/placa-mae.png',
        badge: 'PREMIUM',
        specs: ['Socket LGA1700', 'DDR5 até 7800MHz', 'PCIe 5.0 x16'],
        description: 'Placa-mãe premium para processadores Intel de 13ª e 14ª geração. VRM robusto, WiFi 6E, Thunderbolt 4 e iluminação Aura Sync.',
        rating: 4.7,
        reviews: 234,
        estoque: 8
    },
    {
        id: 'mb-002',
        name: 'Placa-Mãe MSI B650 Tomahawk',
        category: 'hardware',
        subcategory: 'placa-mae',
        price: 1499,
        oldPrice: 1799,
        image: 'images/placa-mae.png',
        badge: 'CUSTO-BENEFÍCIO',
        specs: ['Socket AM5', 'DDR5 até 6400MHz', 'PCIe 4.0'],
        description: 'Placa-mãe robusta para processadores AMD Ryzen 7000. Excelente VRM, dissipadores de calor eficientes e conectividade completa.',
        rating: 4.6,
        reviews: 445,
        estoque: 15
    },

    /* ============================================
       MEMÓRIA RAM
       ============================================ */
    {
        id: 'ram-001',
        name: 'Memória RAM DDR5 32GB (2x16GB) 6000MHz',
        category: 'hardware',
        subcategory: 'memoria',
        price: 899,
        oldPrice: 1199,
        image: 'images/memoria-ram.png',
        badge: 'RGB',
        specs: ['32GB (2x16GB)', 'DDR5 6000MHz', 'CL30', 'RGB'],
        description: 'Kit de memória DDR5 de alta velocidade com iluminação RGB. Perfeito para gaming e aplicações que exigem alta largura de banda.',
        rating: 4.8,
        reviews: 567,
        estoque: 25
    },
    {
        id: 'ram-002',
        name: 'Memória RAM DDR4 32GB (2x16GB) 3600MHz',
        category: 'hardware',
        subcategory: 'memoria',
        price: 499,
        oldPrice: 699,
        image: 'images/memoria-ram.png',
        badge: '-29%',
        specs: ['32GB (2x16GB)', 'DDR4 3600MHz', 'CL18', 'RGB'],
        description: 'Kit de memória DDR4 com excelente custo-benefício. Compatível com a maioria das placas-mãe e ideal para upgrades.',
        rating: 4.7,
        reviews: 1234,
        estoque: 40
    },

    /* ============================================
       ARMAZENAMENTO (SSDs)
       ============================================ */
    {
        id: 'ssd-001',
        name: 'SSD NVMe 2TB M.2 PCIe 4.0',
        category: 'hardware',
        subcategory: 'armazenamento',
        price: 899,
        oldPrice: 1199,
        image: 'images/ssd-nvme.png',
        badge: 'VELOCIDADE',
        specs: ['2TB', 'Leitura: 7000 MB/s', 'Gravação: 6500 MB/s'],
        description: 'SSD NVMe de última geração com velocidades extremas. Ideal para sistema operacional, jogos e aplicações profissionais.',
        rating: 4.9,
        reviews: 789,
        estoque: 30
    },
    {
        id: 'ssd-002',
        name: 'SSD NVMe 1TB M.2 PCIe 3.0',
        category: 'hardware',
        subcategory: 'armazenamento',
        price: 399,
        oldPrice: 499,
        image: 'images/ssd-nvme.png',
        specs: ['1TB', 'Leitura: 3500 MB/s', 'Gravação: 3000 MB/s'],
        description: 'SSD NVMe confiável com excelente custo-benefício. Velocidades muito superiores a SSDs SATA tradicionais.',
        rating: 4.7,
        reviews: 1567,
        estoque: 50
    },

    /* ============================================
       FONTES DE ALIMENTAÇÃO (PSU)
       ============================================ */
    {
        id: 'psu-001',
        name: 'Fonte 850W 80 Plus Gold Modular',
        category: 'hardware',
        subcategory: 'fonte',
        price: 699,
        oldPrice: 899,
        image: 'images/fonte-psu.png',
        badge: 'EFICIENTE',
        specs: ['850W', '80 Plus Gold', 'Totalmente Modular', 'ATX 3.0'],
        description: 'Fonte de alta eficiência com certificação 80 Plus Gold. Cabos modulares para melhor organização e fluxo de ar.',
        rating: 4.8,
        reviews: 423,
        estoque: 18
    },
    {
        id: 'psu-002',
        name: 'Fonte 650W 80 Plus Bronze',
        category: 'hardware',
        subcategory: 'fonte',
        price: 349,
        oldPrice: 449,
        image: 'images/fonte-psu.png',
        specs: ['650W', '80 Plus Bronze', 'Cabo Flat'],
        description: 'Fonte confiável para builds intermediários. Proteções elétricas completas e operação silenciosa.',
        rating: 4.5,
        reviews: 892,
        estoque: 35
    },

    /* ============================================
       GABINETES
       ============================================ */
    {
        id: 'case-001',
        name: 'Gabinete Gamer Mid Tower RGB',
        category: 'hardware',
        subcategory: 'gabinete',
        price: 599,
        oldPrice: 799,
        image: 'images/gabinete-gamer.png',
        badge: 'VIDRO TEMPERADO',
        specs: ['Mid Tower', '3 Fans RGB', 'Vidro Temperado', 'USB-C'],
        description: 'Gabinete gamer com design moderno, painel lateral de vidro temperado e iluminação RGB. Excelente fluxo de ar e organização de cabos.',
        rating: 4.6,
        reviews: 334,
        estoque: 15
    },
    {
        id: 'case-002',
        name: 'Gabinete Full Tower Premium',
        category: 'hardware',
        subcategory: 'gabinete',
        price: 1299,
        oldPrice: 1599,
        image: 'images/gabinete-gamer.png',
        badge: 'PREMIUM',
        specs: ['Full Tower', '4 Fans RGB', 'Alumínio', 'E-ATX'],
        description: 'Gabinete premium de alumínio para builds de alta performance. Suporta placas E-ATX e sistemas de refrigeração customizados.',
        rating: 4.9,
        reviews: 156,
        estoque: 8
    },

    /* ============================================
       REFRIGERAÇÃO
       ============================================ */
    {
        id: 'cool-001',
        name: 'Water Cooler AIO 360mm RGB',
        category: 'hardware',
        subcategory: 'refrigeracao',
        price: 799,
        oldPrice: 999,
        image: 'images/water-cooler.png',
        badge: '360mm',
        specs: ['360mm Radiador', '3 Fans RGB', 'Bomba com Display'],
        description: 'Sistema de refrigeração líquida all-in-one com radiador de 360mm. Display na bomba mostra temperatura e informações do sistema.',
        rating: 4.7,
        reviews: 267,
        estoque: 12
    },
    {
        id: 'cool-002',
        name: 'Air Cooler Tower Dual Fan RGB',
        category: 'hardware',
        subcategory: 'refrigeracao',
        price: 299,
        oldPrice: 399,
        image: 'images/water-cooler.png',
        specs: ['6 Heatpipes', '2x 120mm Fans', 'TDP: 250W'],
        description: 'Cooler aéreo de alta performance com torre dupla e seis heatpipes. Silencioso mesmo sob carga pesada.',
        rating: 4.5,
        reviews: 445,
        estoque: 20
    },

    /* ============================================
       COMPUTADORES MONTADOS
       ============================================ */
    {
        id: 'pc-001',
        name: 'PC Gamer Extreme RTX 4090',
        category: 'hardware',
        subcategory: 'pc-montado',
        price: 24999,
        oldPrice: 27999,
        image: 'images/pc-montado.png',
        badge: 'TOP DE LINHA',
        specs: ['RTX 4090 24GB', 'i9-14900K', '64GB DDR5', '2TB NVMe'],
        description: 'PC gamer extremo para 4K 144Hz. Configuração premium com os melhores componentes do mercado. Pronto para rodar qualquer jogo no máximo.',
        rating: 5.0,
        reviews: 89,
        estoque: 3
    },
    {
        id: 'pc-002',
        name: 'PC Gamer Pro RTX 4070 Ti',
        category: 'hardware',
        subcategory: 'pc-montado',
        price: 12999,
        oldPrice: 14999,
        image: 'images/pc-montado.png',
        badge: 'POPULAR',
        specs: ['RTX 4070 Ti 12GB', 'i7-14700K', '32GB DDR5', '1TB NVMe'],
        description: 'PC gamer profissional para 1440p e 4K. Excelente para gaming competitivo e streaming. Montado e testado.',
        rating: 4.8,
        reviews: 234,
        estoque: 8
    },
    {
        id: 'pc-003',
        name: 'PC Gamer Entry RX 6650 XT',
        category: 'hardware',
        subcategory: 'pc-montado',
        price: 4999,
        oldPrice: 5999,
        image: 'images/pc-montado.png',
        badge: 'CUSTO-BENEFÍCIO',
        specs: ['RX 6650 XT 8GB', 'Ryzen 5 5600', '16GB DDR4', '512GB NVMe'],
        description: 'PC gamer de entrada para 1080p alto. Excelente custo-benefício para quem está começando no PC gaming.',
        rating: 4.6,
        reviews: 567,
        estoque: 15
    },

    /* ============================================
       PERIFÉRICOS - TECLADOS
       ============================================ */
    {
        id: 'kb-001',
        name: 'Teclado Mecânico Gamer RGB',
        category: 'periferico',
        subcategory: 'teclado',
        price: 499,
        oldPrice: 699,
        image: 'images/teclado-60.png',
        badge: 'SWITCH RED',
        specs: ['Switches Red', 'Layout ABNT2', 'Anti-Ghosting', 'RGB'],
        description: 'Teclado mecânico com switches red para gaming. Resposta rápida, construção robusta e iluminação RGB personalizável.',
        rating: 4.7,
        reviews: 1234,
        estoque: 40
    },
    {
        id: 'kb-002',
        name: 'Teclado Mecânico 60% Compacto',
        category: 'periferico',
        subcategory: 'teclado',
        price: 349,
        oldPrice: 449,
        image: 'images/teclado-60.png',
        specs: ['60% Compacto', 'Switches Brown', 'USB-C', 'RGB'],
        description: 'Teclado compacto 60% ideal para setups minimalistas. Switches brown táteis e construção em alumínio.',
        rating: 4.6,
        reviews: 678,
        estoque: 30
    },

    /* ============================================
       PERIFÉRICOS - MOUSES
       ============================================ */
    {
        id: 'mouse-001',
        name: 'Mouse Gamer RGB 16000 DPI',
        category: 'periferico',
        subcategory: 'mouse',
        price: 299,
        oldPrice: 399,
        image: 'images/mouse-gamer.png',
        badge: 'SENSOR ÓPTICO',
        specs: ['16000 DPI', '8 Botões', 'RGB', 'Ergonômico'],
        description: 'Mouse gamer com sensor óptico de alta precisão. Design ergonômico para longas sessões de jogo e switches duráveis.',
        rating: 4.7,
        reviews: 1567,
        estoque: 50
    },
    {
        id: 'mouse-002',
        name: 'Mouse Gamer Sem Fio 20000 DPI',
        category: 'periferico',
        subcategory: 'mouse',
        price: 499,
        oldPrice: 649,
        image: 'images/mouse-gamer.png',
        specs: ['20000 DPI', 'Sem Fio 2.4GHz', '72h Bateria', '67g'],
        description: 'Mouse ultraleve sem fio com latência mínima. Sensor de 20K DPI e bateria de longa duração para gaming competitivo.',
        rating: 4.8,
        reviews: 445,
        estoque: 25
    },

    /* ============================================
       PERIFÉRICOS - HEADSETS
       ============================================ */
    {
        id: 'headset-001',
        name: 'Headset Gamer 7.1 Surround RGB',
        category: 'periferico',
        subcategory: 'headset',
        price: 399,
        oldPrice: 499,
        image: 'images/headset-gamer.png',
        badge: '7.1 SURROUND',
        specs: ['7.1 Virtual', 'Drivers 50mm', 'RGB', 'Microfone Removível'],
        description: 'Headset com som surround 7.1 para imersão total. Drivers de 50mm e microfone com cancelamento de ruído.',
        rating: 4.6,
        reviews: 892,
        estoque: 35
    },
    {
        id: 'headset-002',
        name: 'Headset Gamer Sem Fio Bluetooth',
        category: 'periferico',
        subcategory: 'headset',
        price: 599,
        oldPrice: 799,
        image: 'images/headset-gamer.png',
        specs: ['Sem Fio', '30h Bateria', 'Bluetooth 5.2', 'ANC'],
        description: 'Headset premium sem fio com cancelamento ativo de ruído. Conexão Bluetooth de baixa latência para gaming.',
        rating: 4.8,
        reviews: 234,
        estoque: 20
    },

    /* ============================================
       PERIFÉRICOS - MONITORES
       ============================================ */
    {
        id: 'monitor-001',
        name: 'Monitor Gamer 27" 240Hz IPS',
        category: 'periferico',
        subcategory: 'monitor',
        price: 2499,
        oldPrice: 2999,
        image: 'images/monitor-gamer.png',
        badge: '240Hz',
        specs: ['27" IPS', '240Hz', '1ms', 'QHD 2560x1440'],
        description: 'Monitor gaming de alta taxa de atualização. Painel IPS com cores vibrantes e tempo de resposta de 1ms.',
        rating: 4.8,
        reviews: 445,
        estoque: 12
    },
    {
        id: 'monitor-002',
        name: 'Monitor Ultrawide 34" 165Hz',
        category: 'periferico',
        subcategory: 'monitor',
        price: 3499,
        oldPrice: 4299,
        image: 'images/monitor-gamer.png',
        badge: 'ULTRAWIDE',
        specs: ['34" Curvo', '165Hz', '1ms', 'UWQHD 3440x1440'],
        description: 'Monitor ultrawide curvo para imersão total. Proporção 21:9 ideal para simuladores, RPGs e produtividade.',
        rating: 4.9,
        reviews: 178,
        estoque: 8
    },

    /* ============================================
       PERIFÉRICOS - OUTROS
       ============================================ */
    {
        id: 'mousepad-001',
        name: 'Mousepad Gamer XXL 900x400mm',
        category: 'periferico',
        subcategory: 'mousepad',
        price: 149,
        oldPrice: 199,
        image: 'images/mousepad.png',
        specs: ['900x400mm', 'Bordas Costuradas', 'Base Antiderrapante'],
        description: 'Mousepad estendido grande o suficiente para teclado e mouse. Superfície otimizada para precisão e velocidade.',
        rating: 4.7,
        reviews: 2345,
        estoque: 60
    },
    {
        id: 'webcam-001',
        name: 'Webcam Full HD 1080p com Ring Light',
        category: 'periferico',
        subcategory: 'webcam',
        price: 299,
        oldPrice: 399,
        image: 'images/webcam.png',
        specs: ['1080p 60fps', 'Ring Light', 'Microfone Estéreo', 'Autofoco'],
        description: 'Webcam profissional com iluminação integrada. Perfeita para streaming, videochamadas e criação de conteúdo.',
        rating: 4.6,
        reviews: 567,
        estoque: 30
    },

    /* ============================================
       CURSOS - FRONT-END
       ============================================ */
    {
        id: 'curso-001',
        name: 'Curso Completo de HTML5 e CSS3',
        category: 'curso',
        subcategory: 'frontend',
        price: 199,
        oldPrice: 399,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        badge: 'INICIANTE',
        specs: ['40 horas', 'Certificado', 'Projetos Práticos'],
        description: 'Aprenda a criar sites do zero com HTML5 semântico e CSS3 moderno. Flexbox, Grid, animações e responsividade.',
        rating: 4.9,
        reviews: 2345,
        estoque: 999
    },
    {
        id: 'curso-002',
        name: 'JavaScript do Zero ao Avançado',
        category: 'curso',
        subcategory: 'frontend',
        price: 299,
        oldPrice: 599,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        badge: 'MAIS VENDIDO',
        specs: ['60 horas', 'ES6+', 'Projetos Reais'],
        description: 'Domine JavaScript moderno desde o básico até conceitos avançados. ES6+, async/await, manipulação do DOM e APIs.',
        rating: 4.8,
        reviews: 1876,
        estoque: 999
    },
    {
        id: 'curso-003',
        name: 'React.js Completo com Hooks',
        category: 'curso',
        subcategory: 'frontend',
        price: 399,
        oldPrice: 699,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        badge: 'POPULAR',
        specs: ['50 horas', 'Hooks', 'Redux', 'Next.js'],
        description: 'Crie aplicações modernas com React. Hooks, Context API, Redux, Next.js e deploy na Vercel.',
        rating: 4.9,
        reviews: 1234,
        estoque: 999
    },
    {
        id: 'curso-004',
        name: 'TypeScript para Desenvolvedores',
        category: 'curso',
        subcategory: 'frontend',
        price: 249,
        oldPrice: 449,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        specs: ['30 horas', 'Tipagem', 'Generics', 'Integração React'],
        description: 'Adicione tipagem estática ao seu JavaScript. TypeScript do básico ao avançado com projetos práticos.',
        rating: 4.7,
        reviews: 678,
        estoque: 999
    },
    {
        id: 'curso-005',
        name: 'Vue.js 3 Composition API',
        category: 'curso',
        subcategory: 'frontend',
        price: 349,
        oldPrice: 549,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        specs: ['40 horas', 'Vue 3', 'Pinia', 'Vite'],
        description: 'Desenvolva aplicações reativas com Vue.js 3. Composition API, Pinia para estado e Vite para build.',
        rating: 4.8,
        reviews: 445,
        estoque: 999
    },
    {
        id: 'curso-006',
        name: 'Tailwind CSS Masterclass',
        category: 'curso',
        subcategory: 'frontend',
        price: 179,
        oldPrice: 299,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        specs: ['25 horas', 'Utility-First', 'Design Responsivo', 'Dark Mode'],
        description: 'Crie interfaces modernas rapidamente com Tailwind CSS. Abordagem utility-first e designs responsivos.',
        rating: 4.7,
        reviews: 892,
        estoque: 999
    },

    /* ============================================
       CURSOS - BACK-END
       ============================================ */
    {
        id: 'curso-007',
        name: 'Node.js e Express Completo',
        category: 'curso',
        subcategory: 'backend',
        price: 349,
        oldPrice: 599,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        badge: 'BACK-END',
        specs: ['50 horas', 'REST API', 'Autenticação JWT', 'Deploy'],
        description: 'Construa APIs RESTful robustas com Node.js e Express. Autenticação, middleware, banco de dados e deploy.',
        rating: 4.8,
        reviews: 987,
        estoque: 999
    },
    {
        id: 'curso-008',
        name: 'Python e Django para Web',
        category: 'curso',
        subcategory: 'backend',
        price: 399,
        oldPrice: 649,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        specs: ['55 horas', 'Django 4', 'DRF', 'Deploy AWS'],
        description: 'Desenvolva aplicações web com Python e Django. ORM, admin, Django REST Framework e deploy na AWS.',
        rating: 4.9,
        reviews: 756,
        estoque: 999
    },
    {
        id: 'curso-009',
        name: 'Java Spring Boot Completo',
        category: 'curso',
        subcategory: 'backend',
        price: 449,
        oldPrice: 699,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        specs: ['60 horas', 'Spring Boot 3', 'JPA', 'Microserviços'],
        description: 'Crie aplicações enterprise com Java e Spring Boot. JPA, Security, Cloud e arquitetura de microserviços.',
        rating: 4.8,
        reviews: 623,
        estoque: 999
    },
    {
        id: 'curso-010',
        name: 'PHP 8 e Laravel Moderno',
        category: 'curso',
        subcategory: 'backend',
        price: 299,
        oldPrice: 499,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        specs: ['45 horas', 'Laravel 10', 'Eloquent', 'Filament'],
        description: 'Desenvolva aplicações modernas com PHP 8 e Laravel. Eloquent ORM, Filament para admin e deploy.',
        rating: 4.7,
        reviews: 534,
        estoque: 999
    },

    /* ============================================
       CURSOS - BANCO DE DADOS
       ============================================ */
    {
        id: 'curso-011',
        name: 'MySQL do Básico ao Avançado',
        category: 'curso',
        subcategory: 'database',
        price: 249,
        oldPrice: 449,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        specs: ['35 horas', 'SQL', 'Stored Procedures', 'Otimização'],
        description: 'Domine MySQL desde consultas básicas até procedures complexas. Modelagem, normalização e otimização.',
        rating: 4.8,
        reviews: 1123,
        estoque: 999
    },
    {
        id: 'curso-012',
        name: 'MongoDB e NoSQL',
        category: 'curso',
        subcategory: 'database',
        price: 279,
        oldPrice: 479,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        specs: ['30 horas', 'NoSQL', 'Aggregation', 'Replicação'],
        description: 'Aprenda bancos de dados NoSQL com MongoDB. Documentos, aggregation pipeline, replicação e sharding.',
        rating: 4.7,
        reviews: 445,
        estoque: 999
    },
    {
        id: 'curso-013',
        name: 'PostgreSQL Avançado',
        category: 'curso',
        subcategory: 'database',
        price: 329,
        oldPrice: 529,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        specs: ['40 horas', 'PL/pgSQL', 'JSON', 'Full-Text Search'],
        description: 'PostgreSQL avançado para aplicações complexas. Funções, triggers, JSON e busca de texto completo.',
        rating: 4.8,
        reviews: 334,
        estoque: 999
    },

    /* ============================================
       CURSOS - MOBILE
       ============================================ */
    {
        id: 'curso-014',
        name: 'React Native Completo',
        category: 'curso',
        subcategory: 'mobile',
        price: 399,
        oldPrice: 649,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        specs: ['50 horas', 'iOS e Android', 'Expo', 'Publicação'],
        description: 'Crie apps mobile para iOS e Android com React Native. Expo, navegação, APIs nativas e publicação nas lojas.',
        rating: 4.8,
        reviews: 567,
        estoque: 999
    },
    {
        id: 'curso-015',
        name: 'Flutter e Dart do Zero',
        category: 'curso',
        subcategory: 'mobile',
        price: 379,
        oldPrice: 599,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        specs: ['45 horas', 'Widgets', 'State Management', 'Firebase'],
        description: 'Desenvolva apps nativos com Flutter. Dart, widgets, gerenciamento de estado e integração com Firebase.',
        rating: 4.9,
        reviews: 445,
        estoque: 999
    },

    /* ============================================
       CURSOS - DEVOPS
       ============================================ */
    {
        id: 'curso-016',
        name: 'Docker e Kubernetes',
        category: 'curso',
        subcategory: 'devops',
        price: 449,
        oldPrice: 699,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        specs: ['40 horas', 'Containers', 'K8s', 'CI/CD'],
        description: 'Containerize aplicações com Docker e orquestre com Kubernetes. CI/CD, Helm e deploy em cloud.',
        rating: 4.8,
        reviews: 334,
        estoque: 999
    },
    {
        id: 'curso-017',
        name: 'AWS Cloud Practitioner',
        category: 'curso',
        subcategory: 'devops',
        price: 499,
        oldPrice: 799,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        specs: ['50 horas', 'EC2', 'S3', 'RDS', 'Lambda'],
        description: 'Aprenda os serviços essenciais da AWS. EC2, S3, RDS, Lambda e preparação para certificação.',
        rating: 4.7,
        reviews: 278,
        estoque: 999
    },

    /* ============================================
       CURSOS - DESIGN E UX
       ============================================ */
    {
        id: 'curso-018',
        name: 'Figma para UI/UX Design',
        category: 'curso',
        subcategory: 'design',
        price: 279,
        oldPrice: 449,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        specs: ['35 horas', 'Protótipos', 'Design System', 'Auto Layout'],
        description: 'Crie interfaces profissionais com Figma. Prototipagem, design systems, componentes e colaboração.',
        rating: 4.9,
        reviews: 892,
        estoque: 999
    },
    {
        id: 'curso-019',
        name: 'Adobe Photoshop para Web',
        category: 'curso',
        subcategory: 'design',
        price: 229,
        oldPrice: 379,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
        specs: ['30 horas', 'Edição', 'Mockups', 'Exportação'],
        description: 'Edição de imagens e criação de mockups para web. Ferramentas essenciais do Photoshop para designers.',
        rating: 4.6,
        reviews: 445,
        estoque: 999
    },

    /* ============================================
       CURSOS - DATA SCIENCE
       ============================================ */
    {
        id: 'curso-020',
        name: 'Python para Data Science',
        category: 'curso',
        subcategory: 'datascience',
        price: 449,
        oldPrice: 699,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        badge: 'DATA SCIENCE',
        specs: ['55 horas', 'Pandas', 'NumPy', 'Matplotlib'],
        description: 'Análise de dados com Python. Pandas, NumPy, visualização e introdução ao machine learning.',
        rating: 4.8,
        reviews: 623,
        estoque: 999
    },
    {
        id: 'curso-021',
        name: 'Machine Learning com Python',
        category: 'curso',
        subcategory: 'datascience',
        price: 599,
        oldPrice: 899,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        specs: ['60 horas', 'Scikit-Learn', 'TensorFlow', 'Projetos'],
        description: 'Aprenda machine learning do zero. Algoritmos supervisionados, redes neurais e projetos práticos.',
        rating: 4.9,
        reviews: 334,
        estoque: 999
    },

    /* ============================================
       KITS DE CURSOS
       ============================================ */
    {
        id: 'kit-001',
        name: 'Kit Full Stack Developer 2024',
        category: 'kit',
        subcategory: 'fullstack',
        price: 999,
        oldPrice: 1899,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        badge: 'ECONOMIZE 900',
        specs: ['200+ horas', '5 Cursos', 'Certificados', 'Suporte'],
        description: 'Pacote completo para se tornar full stack. HTML/CSS, JavaScript, React, Node.js e banco de dados.',
        rating: 5.0,
        reviews: 234,
        estoque: 999
    },
    {
        id: 'kit-002',
        name: 'Kit DevOps Professional',
        category: 'kit',
        subcategory: 'devops',
        price: 1199,
        oldPrice: 1999,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        badge: 'COMPLETO',
        specs: ['150+ horas', '4 Cursos', 'Labs Práticos'],
        description: 'Domine DevOps com Docker, Kubernetes, AWS e CI/CD. Laboratórios práticos e projetos reais.',
        rating: 4.9,
        reviews: 156,
        estoque: 999
    }
];

/* ============================================
   ESTADO DA APLICAÇÃO
   ============================================ */
let cart = JSON.parse(localStorage.getItem('lilamarket-cart')) || [];
let currentFilter = 'all';
let currentCategory = 'all';
let currentSlide = 0;

/* ============================================
   ELEMENTOS DO DOM
   ============================================ */
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const continueShopping = document.getElementById('continueShopping');
const productsGrid = document.getElementById('productsGrid');
const cartBody = document.getElementById('cartBody');
const cartFooter = document.getElementById('cartFooter');
const cartBadge = document.getElementById('cartBadge');
const cartSubtotal = document.getElementById('cartSubtotal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const searchInput = document.getElementById('searchInput');

/* ============================================
   FUNÇÕES DE INICIALIZAÇÃO
   ============================================ */

/**
 * Inicializa todos os componentes quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initCartDrawer();
    initCarousel();
    initFilters();
    initSearch();
    initCategoryFilter();
    
    renderProducts();
    updateCartBadge();
});

/* ============================================
   CABEÇALHO E MENU
   ============================================ */

/**
 * Efeito de scroll no cabeçalho
 */
function initHeaderScroll() {
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = 'none';
        }
    });
}

/**
 * Menu mobile - abrir e fechar
 */
function initMobileMenu() {
    if (!menuToggle || !menuClose || !mobileMenu) return;
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

/* ============================================
   CARRINHO DE COMPRAS
   ============================================ */

/**
 * Inicializa o carrinho lateral
 */
function initCartDrawer() {
    if (!cartBtn || !cartClose || !cartOverlay) return;
    
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    if (continueShopping) {
        continueShopping.addEventListener('click', closeCart);
    }
}

function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Adiciona produto ao carrinho
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.product.id === productId);
    
    if (existing) {
        existing.quantity++;
        showToast(`${product.name} - Quantidade atualizada!`);
    } else {
        cart.push({ product, quantity: 1 });
        showToast(`${product.name} adicionado ao carrinho!`);
    }

    saveCart();
    updateCartBadge();
}

/**
 * Remove produto do carrinho
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    renderCart();
    updateCartBadge();
    showToast('Item removido do carrinho');
}

/**
 * Atualiza quantidade do produto
 */
function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.product.id === productId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        renderCart();
        updateCartBadge();
    }
}

/**
 * Salva carrinho no localStorage
 */
function saveCart() {
    localStorage.setItem('lilamarket-cart', JSON.stringify(cart));
}

/**
 * Atualiza o badge do carrinho
 */
function updateCartBadge() {
    if (!cartBadge) return;
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = total;
    cartBadge.style.display = total > 0 ? 'flex' : 'none';
}

/**
 * Renderiza o conteúdo do carrinho
 */
function renderCart() {
    if (!cartBody || !cartFooter) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>
                <h4>Carrinho Vazio</h4>
                <p>Adicione produtos ao seu carrinho</p>
                <button class="btn btn-primary" onclick="closeCart()">Continuar Comprando</button>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';

    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.product.image}" alt="${item.product.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.product.name}</h4>
                <p class="cart-item-price">R$ ${item.product.price.toLocaleString('pt-BR')}</p>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity - 1})">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.product.id}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    if (cartSubtotal) {
        cartSubtotal.textContent = `R$ ${subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
}

/* ============================================
   CARROSSEL
   ============================================ */

/**
 * Inicializa o carrossel de banners
 */
function initCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const carouselDots = document.getElementById('carouselDots');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    
    if (!carousel || !carouselDots) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carouselDots.querySelectorAll('.dot');

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    if (carouselNext) carouselNext.addEventListener('click', nextSlide);
    if (carouselPrev) carouselPrev.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-play
    setInterval(nextSlide, 5000);
}

/* ============================================
   PRODUTOS E FILTROS
   ============================================ */

/**
 * Cria o card de produto
 */
function createProductCard(product) {
    const isHardware = product.category === 'hardware' || product.category === 'periferico';
    
    return `
        <div class="product-card" data-category="${product.category}" data-subcategory="${product.subcategory}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-image ${isHardware ? 'hardware-image' : ''}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-quick-add">
                    <button class="btn btn-primary btn-full" onclick="addToCart('${product.id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Adicionar
                    </button>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${getCategoryLabel(product.category)}</p>
                <h3 class="product-name">${product.name}</h3>
                
                <!-- Especificações do produto -->
                <div class="product-specs">
                    ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                
                <!-- Descrição do produto -->
                <p class="product-description">${product.description}</p>
                
                <div class="product-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>${product.rating}</span>
                    <span>(${product.reviews} avaliações)</span>
                </div>
                
                <div class="product-price">
                    <span class="current">R$ ${product.price.toLocaleString('pt-BR')}</span>
                    ${product.oldPrice ? `<span class="old">R$ ${product.oldPrice.toLocaleString('pt-BR')}</span>` : ''}
                </div>
                
                ${isHardware && product.estoque < 10 ? `<p class="stock-warning">Apenas ${product.estoque} unidades!</p>` : ''}
            </div>
        </div>
    `;
}

/**
 * Retorna o label da categoria
 */
function getCategoryLabel(category) {
    const labels = {
        'hardware': 'Hardware',
        'periferico': 'Periférico',
        'curso': 'Curso',
        'kit': 'Kit de Cursos'
    };
    return labels[category] || category;
}

/**
 * Renderiza os produtos
 */
function renderProducts() {
    if (!productsGrid) return;

    let filtered = products;

    // Filtra por categoria principal
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    // Filtra por subcategoria
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.subcategory === currentCategory);
    }

    productsGrid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

/**
 * Inicializa os filtros
 */
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentCategory = 'all';
            renderProducts();
        });
    });

    // Filtros de subcategoria
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            categoryItems.forEach(c => c.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            renderProducts();
        });
    });
}

/**
 * Inicializa a busca
 */
function initSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query === '') {
            renderProducts();
            return;
        }

        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.subcategory.toLowerCase().includes(query)
        );

        productsGrid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    });
}

/**
 * Filtro de categoria na home
 */
function initCategoryFilter() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            
            // Scroll para produtos
            const produtosSection = document.getElementById('produtos');
            if (produtosSection) {
                produtosSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Atualiza filtro
            currentCategory = category;
            renderProducts();
        });
    });
}

/* ============================================
   NOTIFICAÇÕES
   ============================================ */

/**
 * Mostra mensagem toast
 */
function showToast(message) {
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

/* ============================================
   EXPOSIÇÃO GLOBAL
   ============================================ */
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.closeCart = closeCart;
window.showToast = showToast;
