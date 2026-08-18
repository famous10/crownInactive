import type { BoardMember, Deployment, Division } from "@/types"

export const deployments: Deployment[] = [
  {
    country: "Nigeria",
    partner: "Galaxy Backbone",
    status: "live",
    detail: "Federal Government, with Galaxy Backbone — 1Gov deployed under a G2G mandate across Federal Civil Service MDAs.",
  },
  {
    country: "Kenya",
    partner: "Konza (KoTDA)",
    status: "live",
    detail: "Crown Interactive Kenya — 1Gov partnership with the Konza Technopolis Development Authority.",
  },
  {
    country: "Uganda",
    status: "pipeline",
    detail: "Regional expansion — pipeline.",
  },
  {
    country: "Zambia",
    status: "pipeline",
    detail: "Regional expansion — pipeline.",
  },
  {
    country: "Ghana",
    status: "pipeline",
    detail: "Regional expansion — pipeline.",
  },
]

export const divisions: Division[] = [
  {
    name: "GovTech / DPI",
    description: "1Gov sovereign deployments for African governments.",
  },
  {
    name: "SaaS",
    description: "Subscription cloud products.",
  },
  {
    name: "White Label / Enterprise Private Cloud",
    description: "CICOD Enterprise Cloud for banking and enterprise.",
  },
  {
    name: "Utility BSS/OSS",
    description: "CuBOSS, the Revenue Cycle Management platform for NESI DisCos.",
  },
  {
    name: "Training Academy",
    description: "1Gov Academy, CuBOSS Training, Crown Digital Skills Institute, Graduate Technology Accelerator.",
  },
]

export const boardNigeria: BoardMember[] = [
  {
    name: 'Omamofe "Mofe" Boyo',
    role: "Chairman of the Board",
    bio: "Co-Founder and Deputy Group Chief Executive of Oando PLC. King's College London law graduate; led some of Nigeria's largest energy transactions, including Oando's acquisitions of ConocoPhillips Nigeria and Nigerian Agip Oil Company.",
  },
  {
    name: "Wumi Oghoetuoma",
    role: "Managing Director",
    bio: "Founder of Crown Interactive. Computer Science graduate, Kingston University, UK. Founded the company in 2005 to build enterprise-grade technology tailored to the African market, and leads its vision for sovereign digitalisation.",
  },
  {
    name: "Mika Alanko",
    role: "Director",
    bio: "Co-Founder and Non-Executive Director since the company's inception. MSc Investment Management (Henley Business School); TM Forum-certified Revenue Assurance Practitioner.",
  },
  {
    name: "Daniel Acton",
    role: "Director",
    bio: "Global technology and commercial executive with roles at PwC, IBM, Virgin Mobile USA, GE, Corning, Lockheed Martin and ACS. Retired Naval officer. Director since 2011.",
  },
  {
    name: "Tunde Oyewole",
    role: "Director",
    bio: "M&A and financing lawyer with clients including BAT, DHL, Halliburton, Lagos State Government, Samsung, Trafigura, Arcadia and Oando.",
  },
  {
    name: "Boye Olusanya",
    role: "Director",
    bio: "Group Managing Director and CEO, Flour Mills of Nigeria Plc. Former CEO of 9mobile and Chief Transformation Officer at Dangote Industries.",
  },
  {
    name: "Gloria Onafeko",
    role: "Director",
    bio: "FCA; heads Numero Associates. Former Executive Finance Director at Gaslink Nigeria and CFO/Treasurer at Ocean and Oil Services Ltd.",
  },
  {
    name: "Afam Edozie",
    role: "Director",
    bio: "Founder of FiCres Capital. Former Chief Marketing & Strategy Officer at MTN Nigeria; Chairman, Courteville Business Solutions Plc.",
  },
]

export const managementTeam: BoardMember[] = [
  {
    name: 'Oluremi "Remi" Adekanmbi',
    role: "Chief Operations Officer",
    bio: "Over a decade in IT infrastructure, enterprise security and systems integration. Previously Crown's Chief Technology Officer, now leading operations across the Group.",
  },
  {
    name: "Isaac Adegunle",
    role: "Chief Technology Officer",
    bio: "Over a decade in software development and architecture. Previously GM, Technology Operations; now leads Crown's technology strategy, development and enterprise SaaS management.",
  },
  {
    name: "Abiodun Majolagbe",
    role: "Acting Chief Financial Officer",
    bio: "Leading Crown's finance, FP&A and treasury function on an acting basis.",
  },
  {
    name: "Schola T. Gbashab",
    role: "Chief Legal & Compliance Officer",
    bio: "25+ years across banking, oil & gas, real estate and aviation, including General Manager, Trading at Oando Trading. Previously GM, Legal & Compliance.",
  },
  {
    name: "Deji (Ayodeji) Bakare",
    role: "GM, 1Gov",
    bio: "A decade delivering complex digital projects, including strategic roles in global programmes such as EU-SUFEGOR. Previously GM, Projects; now leads the 1Gov division.",
  },
  {
    name: "Deji Adeyeri",
    role: "GM, Power Sector",
    bio: "Leads Crown's Power Sector division, covering CuBOSS and the wider Utility BSS/OSS business.",
  },
  {
    name: "Blessing Igwe",
    role: "GM, SaaS",
    bio: "Leads Crown's SaaS division and subscription cloud product line.",
  },
]

export const boardKenya: BoardMember[] = [
  {
    name: "Caroline Mbugua, HSC",
    role: "Board Member, Crown Interactive Kenya",
    bio: "Senior Policy Manager for Sub-Saharan Africa at GSMA; formerly Policy & Stakeholder Relations Lead at Safaricom PLC.",
  },
  {
    name: "Ian Kigen Kisorio",
    role: "Chief Operating Officer, Kenya",
    bio: "Nine years leading digital transformation across health, regulatory and financial sectors, with deep expertise in ICT architecture and cloud (Azure & AWS).",
  },
]

export const companyFacts = {
  founded: "2005",
  restructured: "2012",
  hq: "Lagos, Nigeria",
  registration: "RC 795100",
  certification: "ISO 27001",
  address: "45B Admiralty Road, Lekki Phase 1, Lagos",
  phone: "+234 (1) 454 1977",
  email: "info@crowninteractive.com",
}
