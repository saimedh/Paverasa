import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { LazyImage } from '../components/LazyImage';
import { posts } from '../data/blog';
import './blog.css';

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="page-hero page-hero--light" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: 'var(--color-primary)' }}>Blog &amp; Insights</p>
            <h1 className="blog-hero-title">Thoughts from<br />our team</h1>
            <p className="page-hero__sub" style={{ color: 'var(--color-text-muted)' }}>
              Engineering lessons, design philosophy, AI deep-dives, and stories from building software in Africa and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured post */}
          <ScrollReveal>
            <Link to={`/blog/${posts[0].slug}`} className="blog-featured">
              <div className="blog-featured__thumb" style={{ background: posts[0].gradient }}>
                <span className="blog-featured__category">{posts[0].category}</span>
              </div>
              <div className="blog-featured__body">
                <div className="blog-featured__meta">
                  <span className="blog-featured__meta-item"><Calendar size={13} /> {posts[0].date}</span>
                  <span className="blog-featured__meta-item"><Clock size={13} /> {posts[0].readTime}</span>
                </div>
                <h2 className="blog-featured__title">{posts[0].title}</h2>
                <p className="blog-featured__excerpt">{posts[0].excerpt}</p>
                <div className="blog-featured__footer">
                  <span className="blog-featured__author">By {posts[0].author}</span>
                  <span className="btn btn-primary btn-sm">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* All posts grid */}
          <div className="blog-posts-header">
            <h2 className="blog-posts-title">All Articles</h2>
          </div>
          <div className="blog-all-grid">
            {posts.map((post) => (
              <a
                href={`/blog/${post.slug}`}
                key={post.title}
                className="blog-section-card"
              >
                <LazyImage
                  src={post.image}
                  fallback="https://placehold.co/640x360?text=Paverasa"
                  inView={true}
                  alt={post.title}
                  ratio={16 / 9}
                  className="blog-section-card__img"
                />
                <div className="blog-section-card__body">
                  <div className="blog-section-card__meta">
                    <p>by {post.author}</p>
                    <div className="blog-section-card__dot" />
                    <p>{post.date}</p>
                    <div className="blog-section-card__dot" />
                    <p>{post.readTime}</p>
                  </div>
                  <h3 className="blog-section-card__title">
                    {post.title}
                  </h3>
                  <p className="blog-section-card__excerpt">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="container">
          <ScrollReveal>
            <div className="blog-newsletter__card">
              <div className="blog-newsletter__text">
                <p className="eyebrow">Stay in the loop</p>
                <h2>Get insights in your inbox</h2>
                <p>Join 2,000+ readers who get our best thinking on software, AI, and innovation — every two weeks.</p>
              </div>
              <form className="blog-newsletter__form" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="blog-newsletter__input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
