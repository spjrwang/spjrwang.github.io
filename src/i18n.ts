export type Lang = 'en' | 'zh'

export const copy = {
  en: {
    metaTitle: 'Jingran Wang | Biomedical Informatics',
    navAbout: 'About',
    navResearch: 'Research',
    navContact: 'Contact',
    langSwitch: '中文',
    brand: 'Jingran Wang',
    headline: 'PhD student in Biomedical Informatics at UC San Diego',
    tagline:
      'Building computational methods that connect biomedical data to clinical insight.',
    ctaResearch: 'Research',
    ctaContact: 'Get in touch',
    aboutTitle: 'About',
    aboutBody:
      'I am a PhD student in Biomedical Informatics at the University of California San Diego. My work sits at the intersection of computation, biology, and medicine—turning complex biomedical signals and records into models that support discovery and care.',
    aboutBody2:
      'I am especially interested in how machine learning and informatics can make large-scale health and molecular data more interpretable, reliable, and useful in real scientific and clinical settings.',
    researchTitle: 'Research',
    researchIntro: 'Current themes I am exploring and developing.',
    interests: [
      {
        title: 'Biomedical machine learning',
        body: 'Models that learn from high-dimensional biomedical data while remaining grounded in domain structure and evaluation.',
      },
      {
        title: 'Clinical & health informatics',
        body: 'Methods that organize, integrate, and reason over clinical data to support research and decision-making.',
      },
      {
        title: 'Translational computation',
        body: 'Bridging algorithms and biological or clinical questions so computational results can inform real-world insight.',
      },
    ],
    contactTitle: 'Contact',
    contactBody: 'Open to research conversations, collaboration, and academic exchange.',
    contactGithub: 'GitHub',
    contactEmail: 'Email',
    footer: 'Biomedical Informatics · UC San Diego',
  },
  zh: {
    metaTitle: '王景然 | 生物医学信息学',
    navAbout: '关于',
    navResearch: '研究',
    navContact: '联系',
    langSwitch: 'EN',
    brand: '王景然',
    headline: '加州大学圣地亚哥分校 · 生物医学信息学博士生',
    tagline: '用计算方法连接生物医学数据与临床洞察。',
    ctaResearch: '研究方向',
    ctaContact: '联系我',
    aboutTitle: '关于',
    aboutBody:
      '我是加州大学圣地亚哥分校（UC San Diego）生物医学信息学（Biomedical Informatics）博士生。研究位于计算、生物学与医学的交汇处，致力于将复杂的生物医学信号与记录转化为能够支持科学发现与临床实践的模型。',
    aboutBody2:
      '我特别关注机器学习与信息学如何让大规模健康与分子数据更可解释、更可靠，并在真实科研与临床场景中真正可用。',
    researchTitle: '研究',
    researchIntro: '当前关注并持续推进的方向。',
    interests: [
      {
        title: '生物医学机器学习',
        body: '面向高维生物医学数据的模型，强调领域结构约束与可靠评估。',
      },
      {
        title: '临床与健康信息学',
        body: '整合、组织并推理临床数据，以支持研究与决策。',
      },
      {
        title: '转化计算',
        body: '连接算法与生物学/临床问题，让计算结果能够转化为实际洞察。',
      },
    ],
    contactTitle: '联系',
    contactBody: '欢迎就研究交流、合作与学术讨论联系我。',
    contactGithub: 'GitHub',
    contactEmail: '邮箱',
    footer: '生物医学信息学 · 加州大学圣地亚哥分校',
  },
} as const

export type Copy = (typeof copy)[Lang]
