export type Lang = 'en' | 'zh'

export type Author = { name: string; self?: boolean }

export type Publication = {
  title: string
  authors: Author[]
  venue: string
  year: string
  doi: string
}

export const publications: Publication[] = [
  {
    title:
      'protPheMut: An Interpretable Machine Learning Tool for Classification of Cancer and Neurodevelopmental Disorders in Human Missense Mutations',
    authors: [
      { name: 'Jingran Wang', self: true },
      { name: 'Miao Yang' },
      { name: 'Chang Zong' },
      { name: 'Yuan Li' },
      { name: 'Gennady Verkhivker' },
      { name: 'Fei Xiao' },
      { name: 'Guang Hu' },
    ],
    venue: 'Journal of Chemical Information and Modeling',
    year: '2025',
    doi: '10.1021/acs.jcim.5c01219',
  },
  {
    title:
      'Machine Learning and Structural Dynamics-Based Approach to Reveal Molecular Mechanism of PTEN Missense Mutations Shared by Cancer and Autism Spectrum Disorder',
    authors: [
      { name: 'Miao Yang' },
      { name: 'Jingran Wang', self: true },
      { name: 'Ziyun Zhou' },
      { name: 'Wentian Li' },
      { name: 'Gennady Verkhivker' },
      { name: 'Fei Xiao' },
      { name: 'Guang Hu' },
    ],
    venue: 'Journal of Chemical Information and Modeling',
    year: '2025',
    doi: '10.1021/acs.jcim.5c00134',
  },
]

export const copy = {
  en: {
    metaTitle: 'Jingran Wang | Biomedical Informatics',
    navAbout: 'About',
    navEducation: 'Education',
    navResearch: 'Research',
    navPublications: 'Publications',
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
      'I focus on multimodal integration, foundation-model alignment for continuous biomedical signals, and embedding models with devices in real clinical and research settings.',
    educationTitle: 'Education',
    education: [
      {
        degree: 'PhD, Biomedical Informatics',
        school: 'University of California San Diego',
        period: '2026.9 – 2031.9',
      },
      {
        degree: 'BS, Bioinformatics',
        school: 'Soochow University',
        period: '2022.9 – 2026.7',
      },
    ],
    researchTitle: 'Research Interests',
    researchIntro: 'Current themes I am exploring and developing.',
    interests: [
      {
        title: 'Multimodal integration',
        body: 'Integrating heterogeneous biomedical modalities—especially electronic health records (EHR) and genomics—into coherent representations for discovery and clinical use.',
      },
      {
        title: 'Foundation model alignment',
        body: 'Aligning foundation models and adapting them to continuous biomedical data streams and longitudinal signals.',
      },
      {
        title: 'Model–device integration',
        body: 'Embedding models with instruments and devices so learning systems can operate closer to real-world measurement and care workflows.',
      },
    ],
    publicationsTitle: 'Publications',
    publicationsIntro: 'Selected peer-reviewed publications.',
    contactTitle: 'Contact',
    contactBody: 'Open to research conversations, collaboration, and academic exchange.',
    contactGithub: 'GitHub',
    contactScholar: 'Google Scholar',
    contactLinkedIn: 'LinkedIn',
    contactEmail: 'Email',
    footer: 'Biomedical Informatics · UC San Diego',
  },
  zh: {
    metaTitle: '王景然 | 生物医学信息学',
    navAbout: '关于',
    navEducation: '教育',
    navResearch: '研究',
    navPublications: '发表',
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
      '当前关注多模态整合、面向连续数据的基础模型对齐，以及模型与设备/装置的嵌入与整合。',
    educationTitle: '教育经历',
    education: [
      {
        degree: '博士，生物医学信息学',
        school: '加州大学圣地亚哥分校（UC San Diego）',
        period: '2026.9 – 2031.9',
      },
      {
        degree: '学士，生物信息学',
        school: '苏州大学（Soochow University）',
        period: '2022.9 – 2026.7',
      },
    ],
    researchTitle: '研究方向',
    researchIntro: '当前关注并持续推进的方向。',
    interests: [
      {
        title: '多模态整合',
        body: '整合异构生物医学模态，尤其关注电子健康档案（EHR）与基因组学数据的联合建模。',
      },
      {
        title: '基础模型对齐',
        body: '对 Foundational Model 进行对齐，并应用于连续型生物医学数据与时序信号。',
      },
      {
        title: '模型与设备整合',
        body: '将模型嵌入仪器与 device，使学习系统更贴近真实测量与临床工作流。',
      },
    ],
    publicationsTitle: '发表论文',
    publicationsIntro: '部分同行评议论文。',
    contactTitle: '联系',
    contactBody: '欢迎就研究交流、合作与学术讨论联系我。',
    contactGithub: 'GitHub',
    contactScholar: '谷歌学术',
    contactLinkedIn: 'LinkedIn',
    contactEmail: '邮箱',
    footer: '生物医学信息学 · 加州大学圣地亚哥分校',
  },
} as const

export type Copy = (typeof copy)[Lang]
