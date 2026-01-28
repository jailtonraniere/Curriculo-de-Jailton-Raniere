
import { Project, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Conecta Cidadania',
    description: 'Plataforma integrada para facilitação do acesso a serviços públicos municipais.',
    impactArea: 'Cidadania e Assistência Social',
    solutionType: 'Plataforma Digital / Ecossistema GovTech',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Bora Impactar',
    description: 'Iniciativa voltada ao fomento do empreendedorismo social e inovação periférica.',
    impactArea: 'Desenvolvimento Social e Econômico',
    solutionType: 'Programa de Inovação Social',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Senha Fácil',
    description: 'Sistema de gestão de fluxos e agendamento inteligente para centros de atendimento social.',
    impactArea: 'Eficiência Operacional / SUAS',
    solutionType: 'SaaS / Gestão de Atendimento',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Conecta IGD',
    description: 'Ferramenta de monitoramento e gestão de indicadores de desempenho descentralizados.',
    impactArea: 'Gestão Pública e Governança',
    solutionType: 'Sistema de Business Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Viva Mais Cidadania Digital',
    description: 'Programa de inclusão digital voltado à terceira idade e públicos vulneráveis.',
    impactArea: 'Inclusão Digital',
    solutionType: 'Política Pública / Capacitação',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'CNH Social Recife',
    description: 'Programa de habilitação gratuita para cidadãos de baixa renda visando empregabilidade.',
    impactArea: 'Mobilidade e Emprego',
    solutionType: 'Programa Social',
    imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Moto Social Recife',
    description: 'Iniciativa de apoio a motociclistas profissionais em situação de vulnerabilidade.',
    impactArea: 'Trabalho e Renda',
    solutionType: 'Política Pública Setorial',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Currículo Fácil',
    description: 'Ferramenta digital para construção assistida de perfis profissionais para o mercado de trabalho.',
    impactArea: 'Empregabilidade',
    solutionType: 'Ferramenta Digital de Apoio',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    name: 'Descubra Sua Causa',
    description: 'Plataforma de matchmaking entre voluntários e organizações do terceiro setor.',
    impactArea: 'Engajamento Cívico',
    solutionType: 'Plataforma Social',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd2671c15f84?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '10',
    name: 'Atendimento Social Digital',
    description: 'Modernização dos canais de atendimento das unidades do CRAS e CREAS.',
    impactArea: 'Assistência Social (SUAS)',
    solutionType: 'Plataforma de Atendimento Omni-channel',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Prefeitura do Recife',
    role: 'Especialista em Projetos e Inovação Pública',
    description: 'Atuação estratégica em projetos de assistência social, transformação digital e modernização de serviços.',
    tasks: [
      'Digitalização de serviços públicos com foco em UX para o cidadão.',
      'Integração de bases de dados sociais para suporte à decisão.',
      'Desenvolvimento de plataformas digitais de atendimento social.',
      'Gestão de projetos públicos complexos e intersetoriais.',
      'Programas de inclusão social e digital em larga escala.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Pós-graduação em Ciências de Dados e Inteligência Artificial',
    institution: 'Uninter – EAD',
    details: 'Foco em análise preditiva para políticas públicas.'
  },
  {
    degree: 'Pós-graduação em Gestão, Inovação e Transformação Digital',
    institution: 'Uninter – EAD',
    details: 'Especialização em metodologias ágeis e inovação no setor público.'
  },
  {
    degree: 'Graduação em Serviço Social',
    institution: 'Instituição de Ensino Superior',
    details: 'Base sólida em direitos humanos e políticas sociais.'
  }
];

export const AREAS = [
  'Assistência Social (SUAS)',
  'Transformação Digital',
  'Inovação Pública',
  'Políticas Públicas',
  'Gestão de Projetos',
  'Inclusão Social',
  'Inclusão Digital',
  'Integração de Sistemas',
  'Gestão por Dados'
];

export const COMPETENCIES = [
  'Transformação digital',
  'Inovação pública',
  'Gestão de projetos',
  'Políticas públicas',
  'Integração de sistemas',
  'Inclusão social',
  'Inclusão digital',
  'Planejamento institucional',
  'Articulação intersetorial',
  'Gestão por indicadores'
];
