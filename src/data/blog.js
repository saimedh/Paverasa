// Blog/Insights data
export const posts = [
  {
    id: 'the-start',
    slug: 'the-start',
    title: 'THE START',
    excerpt: 'No one really sees what it takes. From the outside, we are just four students—attending classes, writing exams, living a normal life. But behind that… there were thoughts we never said out loud.',
    date: 'April 28, 2026',
    readTime: '3 min read',
    category: 'Our Story',
    author: 'PAVERASA',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=80',
    gradient: 'linear-gradient(135deg, #14213D 0%, #0E1729 100%)',
    content: `
# THE START

No one really sees what it takes.
From the outside, we are just four students—attending classes, writing exams, living a normal life.
But behind that… there were thoughts we never said out loud.

The pressure to not fail.
The responsibility we carry for our families.
The fear of choosing a path that isn’t “safe.”

We come from middle-class homes, where dreams are often adjusted to fit reality.
And we understand why.
We’ve seen the struggles.
We’ve seen what stability means.

But somewhere, silently, each of us had the same question—
*“Is this all we are meant to do?”*

We didn’t have answers.
We didn’t have guarantees.
All we had… was a feeling that we shouldn’t ignore.
So we didn’t.

We chose to listen to that small voice inside us—
even when it didn’t make sense to anyone else.

No big announcements.
No perfect plans.
Just a quiet decision…
to try...

### In middle-class families, dreams are never just yours.

Every decision carries weight.
Every step is measured.
Every risk feels expensive.

We grew up watching our families work hard—not for luxury, but for stability.
So naturally, life had a plan for us:
Study well.
Get a secure job.
Don’t take risks.

And honestly… we respect that.
But somewhere between expectations and reality,
we found ourselves asking—

*“What if we want something more?”*

Not more money.
Not more comfort.
But more meaning.

Choosing a different path wasn’t easy.
Because it didn’t just affect us—
it challenged everything we were taught to believe.

There was fear.
There was confusion.
But there was also something else…
A quiet courage we didn’t know we had.

And that’s where our story truly began.
    `,
  },
  {
    id: 'ai-student-innovation',
    slug: 'ai-student-innovation',
    title: 'How AI Is Reshaping Student Innovation in Africa',
    excerpt: 'Across universities and tech hubs, a generation of student builders is harnessing AI tools to solve hyper-local problems. Here\'s what we\'re seeing on the ground.',
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'AI & Innovation',
    author: 'Fatima Bello',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&q=80',
    gradient: 'linear-gradient(135deg, #FCA311 0%, #14213D 100%)',
    content: `
# How AI Is Reshaping Student Innovation in Africa

Across universities, hackathons, and tech hubs from Lagos to Nairobi, something extraordinary is happening. A new generation of student builders is picking up AI tools — not as novelties, but as serious instruments for solving real problems.

## The Shift We're Seeing

At Paverasa, we run innovation programs in partnership with several universities. Over the past 18 months, the number of student projects incorporating AI has grown by over 300%. More importantly, the *quality* and *scope* of these projects has changed dramatically.

Students are no longer just building chatbots. They're building:
- Agricultural disease detection systems using computer vision
- Financial inclusion tools powered by NLP that work in local languages
- Predictive health screening tools for community clinics

## What This Means for the Industry

The implication is clear: the next wave of African tech innovation will be AI-native from day one. Companies and investors who build relationships with student innovators today are positioning themselves at the forefront of this wave.

## How Paverasa Is Contributing

Through CampusLink and our Student Innovation Programs, we provide free access to AI development resources, mentorship from our engineering team, and a community of peers building alongside you.

If you're a student with an idea — we want to hear from you.
    `,
  },
  {
    id: 'building-scalable-apis',
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs: Lessons from 50 Production Deployments',
    excerpt: 'After deploying over 50 APIs to production for clients across industries, we\'ve distilled the patterns that separate robust services from brittle ones.',
    date: 'June 14, 2026',
    readTime: '9 min read',
    category: 'Engineering',
    author: 'Kwame Osei',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80',
    gradient: 'linear-gradient(135deg, #14213D 0%, #FCA311 100%)',
    content: `
# Building Scalable APIs: Lessons from 50 Production Deployments

Scalability isn't something you bolt on after the fact — it's an architectural posture you adopt from the first line of code.

## The Top 5 Lessons

**1. Design for the 99th percentile, not the average**
Most API performance discussions focus on average response times. But your users experience the worst case. Profile under realistic load.

**2. Async everything that can be async**
Synchronous blocking calls are the number one killer of API throughput. Webhooks, message queues, and event-driven patterns exist for good reason.

**3. Rate limiting is not optional**
Every public-facing API endpoint needs rate limiting. Full stop. We've seen too many clients get hit by abuse they never anticipated.

**4. Observability from day one**
Structured logging, distributed tracing, and meaningful metrics aren't premature optimization — they're table stakes.

**5. Schema-first development pays dividends**
Whether you use OpenAPI, GraphQL, or gRPC, defining your schema before implementation creates a forcing function for clear thinking.
    `,
  },
  {
    id: 'design-systems-for-startups',
    slug: 'design-systems-for-startups',
    title: 'Why Early-Stage Startups Need a Design System (and How to Build One)',
    excerpt: 'A design system feels like overhead for a startup — until you\'re three products deep with four designers working in conflicting styles. Here\'s how to start small and scale right.',
    date: 'May 30, 2026',
    readTime: '7 min read',
    category: 'Design',
    author: 'Priya Nair',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=80',
    gradient: 'linear-gradient(135deg, #0E1729 0%, #14213D 100%)',
    content: `
# Why Early-Stage Startups Need a Design System

Most early-stage startups treat design systems as a luxury reserved for big companies with large design teams. This is a mistake that costs them dearly when they scale.

## The Real Cost of Design Debt

Without a system, every new screen becomes a negotiation. Colors vary. Spacing is inconsistent. Buttons look different across pages. The cognitive tax on your team — and on your users — compounds daily.

## Start with Just Three Things

You don't need a full-blown Figma design system on day one. Start with:
1. A color palette (5 colors max)
2. A type scale (4 sizes)
3. A spacing scale (4–6 values)

Document them. Enforce them. Everything else can evolve from there.
    `,
  },
];
