import newsEvImage from "@/assets/news-ev.jpg";
import newsHealthImage from "@/assets/news-health.jpg";
import newsCoastImage from "@/assets/news-coast.jpg";

export interface NewsArticle {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "ev-rebate-program-launches",
    date: "January 5, 2026",
    category: "Transportation",
    title: "New Electric Vehicle Rebate Program Launches Statewide",
    excerpt: "Pacifica residents can now apply for up to $5,000 in rebates for new EV purchases.",
    content: `
The State of Pacifica today announced the launch of a comprehensive Electric Vehicle Rebate Program, offering residents up to $5,000 in incentives for purchasing or leasing new zero-emission vehicles.

## Program Highlights

The program, which takes effect immediately, is designed to accelerate the state's transition to zero-emission vehicles and reduce greenhouse gas emissions by 40% by 2030.

**Key Benefits:**
- Up to $5,000 rebate for new battery electric vehicles
- Up to $3,000 rebate for plug-in hybrid electric vehicles
- Additional $2,000 for income-qualified households
- No cap on the number of rebates available

## How to Apply

Pacifica residents can apply online through the Department of Transportation's Clean Vehicle Portal. Applications will be processed within 30 business days, and rebates will be issued via direct deposit or check.

## Income Qualifications

Households earning less than 300% of the federal poverty level qualify for enhanced rebates. This includes:
- Single-person households earning up to $43,740
- Four-person households earning up to $90,000

## Environmental Impact

Transportation accounts for nearly 40% of Pacifica's greenhouse gas emissions. This program is expected to put 500,000 additional electric vehicles on the road by 2028, preventing an estimated 2 million metric tons of CO2 emissions annually.

Governor Martinez stated, "This program represents our commitment to a cleaner, more sustainable future for all Pacificans. We're making electric vehicles accessible to every resident, regardless of income."

For more information, visit transportation.pacifica.gov/ev-rebate or call 1-800-PAC-EVGO.
    `,
    image: newsEvImage,
    featured: true,
  },
  {
    slug: "healthcare-coverage-young-adults",
    date: "January 3, 2026",
    category: "Health",
    title: "Expanded Healthcare Coverage for Young Adults",
    excerpt: "New legislation extends coverage to all residents under 26 regardless of parental insurance.",
    content: `
Governor Martinez signed landmark legislation today expanding healthcare coverage to all Pacifica residents under the age of 26, regardless of their parents' insurance status.

## What's Changing

Previously, young adults could only remain on their parents' health insurance until age 26. Under the new Pacifica Young Adult Care Act, all residents aged 18-25 now have access to comprehensive healthcare coverage through the state's Covered Pacifica program.

**Coverage Includes:**
- Primary and preventive care
- Mental health services
- Prescription medications
- Emergency services
- Dental and vision care

## Enrollment Information

Eligible residents can enroll immediately through the Covered Pacifica website. The enrollment period is open year-round for qualifying young adults.

## Cost

Premiums are based on a sliding scale according to household income:
- Households below 200% FPL: No premium
- Households 200-400% FPL: $50-150/month
- Households above 400% FPL: $150-300/month

## Impact

An estimated 340,000 young adults in Pacifica currently lack health insurance. This legislation ensures that no young person goes without access to essential healthcare services during this critical period of their lives.

Health and Human Services Secretary Chen noted, "Young adulthood is a time of transition. Whether you're in college, starting a career, or between jobs, you deserve quality healthcare. This legislation makes that a reality."
    `,
    image: newsHealthImage,
  },
  {
    slug: "coastal-protection-federal-funding",
    date: "December 28, 2025",
    category: "Environment",
    title: "Coastal Protection Initiative Receives Federal Funding",
    excerpt: "$200 million allocated for sea wall construction and wetland restoration projects.",
    content: `
The federal government has approved $200 million in funding for Pacifica's Coastal Resilience Initiative, a comprehensive program to protect the state's 840-mile coastline from rising sea levels and increased storm activity.

## Project Components

The funding will support three major initiatives:

### Sea Wall Reinforcement ($80 million)
- Strengthening existing barriers in Pacific Bay and Coastline City
- Construction of new protective infrastructure in vulnerable areas
- Installation of smart monitoring systems

### Wetland Restoration ($70 million)
- Restoration of 15,000 acres of coastal wetlands
- Creation of natural buffer zones
- Habitat preservation for endangered species

### Community Relocation Assistance ($50 million)
- Voluntary buyout programs for high-risk properties
- Relocation assistance for affected families
- Development of new affordable housing in safer areas

## Timeline

Construction is expected to begin in Spring 2026, with major projects completed by 2030.

## Economic Benefits

The initiative is projected to create 5,000 construction jobs and prevent an estimated $2 billion in potential storm damage over the next 20 years.

Environmental Protection Agency Director Thompson announced, "Pacifica is leading the nation in climate adaptation. This investment will protect communities, preserve ecosystems, and create a model for coastal states nationwide."
    `,
    image: newsCoastImage,
  },
  {
    slug: "community-college-tuition-waiver",
    date: "December 20, 2025",
    category: "Education",
    title: "Community College Tuition Waiver Program Expanded",
    excerpt: "More Pacifica residents now qualify for free community college education.",
    content: `
The Pacifica Community Colleges system announced a major expansion of its tuition waiver program, making higher education more accessible to hundreds of thousands of additional residents.

## Expanded Eligibility

Under the new guidelines, the following groups now qualify for full tuition waivers:

- All first-time students under age 25
- Working adults returning to school
- Veterans and their dependents
- Former foster youth
- Students from households earning below 400% FPL

## Program Details

The Pacifica Promise Plus program covers:
- Full tuition at any of the state's 116 community colleges
- Fees and student services charges
- Textbook assistance up to $500 per semester

## Application Process

Students can apply through the Pacifica Promise portal. The application takes approximately 15 minutes and requires proof of residency and income verification.

## Expected Impact

Education Secretary Williams stated, "With this expansion, we expect to see 200,000 additional students enroll in community college over the next five years. A more educated workforce benefits everyone."

The state has allocated $500 million annually to fund the expanded program through 2030.
    `,
  },
  {
    slug: "unemployment-rate-historic-low",
    date: "December 15, 2025",
    category: "Economy",
    title: "Unemployment Rate Drops to Historic Low",
    excerpt: "Pacifica's economy continues to strengthen with 50,000 new jobs added this quarter.",
    content: `
The State Employment Development Department reported today that Pacifica's unemployment rate has fallen to 3.1%, the lowest level in the state's 175-year history.

## Key Statistics

- **Unemployment Rate:** 3.1% (down from 3.8% last quarter)
- **Jobs Added:** 50,000 this quarter; 180,000 this year
- **Wage Growth:** 4.2% year-over-year increase
- **Labor Force Participation:** 67.8% (highest since 2000)

## Leading Sectors

The strongest job growth occurred in:
1. Technology and Innovation (+18,000 jobs)
2. Healthcare (+12,000 jobs)
3. Clean Energy (+8,000 jobs)
4. Construction (+7,000 jobs)
5. Hospitality (+5,000 jobs)

## Regional Breakdown

All eight of Pacifica's economic regions reported job gains, with the Pacific Valley leading at 2.8% unemployment, followed by the Northern Highlands at 3.0%.

## Outlook

Economists project continued growth through 2026, though at a more moderate pace as the labor market tightens.

Labor Secretary Rodriguez commented, "These numbers reflect the strength of our diversified economy and our investments in workforce development. Pacificans are finding good-paying jobs in growing industries."
    `,
  },
  {
    slug: "high-speed-rail-milestone",
    date: "December 10, 2025",
    category: "Infrastructure",
    title: "High-Speed Rail Project Reaches Major Milestone",
    excerpt: "First phase of construction completed ahead of schedule and under budget.",
    content: `
The Pacifica High-Speed Rail Authority announced today that Phase 1 of the statewide rail project has been completed six months ahead of schedule and $400 million under budget.

## Completed Work

Phase 1 included:
- 200 miles of dedicated high-speed rail track
- Construction of stations in Pacific City, Coastline, and Valley Central
- Installation of electrification systems
- Testing of train sets at speeds up to 220 mph

## Timeline to Opening

Commercial service is now expected to begin in Fall 2027, six months earlier than originally planned.

## Ticket Prices

Preliminary pricing has been announced:
- Pacific City to Coastline: $45 one-way
- Pacific City to Valley Central: $75 one-way
- Monthly commuter passes available at 50% discount

## Environmental Benefits

When fully operational, the high-speed rail system is expected to:
- Remove 1 million car trips daily from highways
- Reduce aviation emissions by 30% on covered routes
- Decrease statewide transportation emissions by 8%

## Next Phases

Phase 2 construction, connecting the Northern Highlands to the existing network, will begin in Spring 2026.

Transportation Secretary Park stated, "This milestone proves that major infrastructure projects can be delivered on time and on budget. Pacificans will soon enjoy fast, clean, affordable intercity travel."
    `,
  },
  {
    slug: "emergency-response-system-upgrade",
    date: "December 5, 2025",
    category: "Public Safety",
    title: "Emergency Response System Upgrade Complete",
    excerpt: "New 911 system reduces response times by 30% across the state.",
    content: `
The Governor's Office of Emergency Services today announced the completion of a statewide upgrade to Pacifica's 911 emergency response system, resulting in a 30% reduction in average response times.

## System Improvements

The Next Generation 911 (NG911) system includes:

### Enhanced Location Services
- Automatic GPS-based caller location
- Indoor positioning for multi-story buildings
- Integration with connected vehicle systems

### Multimedia Capabilities
- Text-to-911 service now available statewide
- Video calling for hearing-impaired residents
- Photo sharing for incident documentation

### AI-Assisted Dispatch
- Predictive resource allocation
- Automatic translation for 40+ languages
- Real-time traffic and routing optimization

## Response Time Improvements

Average response times have improved across all categories:
- Medical emergencies: 8.2 minutes (down from 11.5)
- Fire response: 5.8 minutes (down from 8.2)
- Police response: 6.4 minutes (down from 9.1)

## Investment

The $180 million upgrade was funded through a combination of federal grants and state emergency services funds.

Public Safety Director Johnson noted, "When every second counts, this system is literally saving lives. We're proud to have one of the most advanced emergency response networks in the nation."
    `,
  },
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

export const getFeaturedArticle = (): NewsArticle | undefined => {
  return newsArticles.find((article) => article.featured);
};
