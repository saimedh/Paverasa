import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, AtSign, MessageCircle, Link2, Share2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { posts } from '../data/blog';
import './blog-article.css';

export default function BlogArticle() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const others = posts.filter(p => p.slug !== slug).slice(0, 2);

  const renderContent = (content) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} className="article-h1">{line.slice(2)}</h1>;
        if (line.startsWith('## ')) return <h2 key={i} className="article-h2">{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} className="article-h3">{line.slice(4)}</h3>;
        if (line.startsWith('**') && line.endsWith('**')) {
          const inner = line.replace(/\*\*/g, '');
          return <p key={i} className="article-bold">{inner}</p>;
        }
        if (line.startsWith('- ')) return <li key={i} className="article-li">{line.slice(2)}</li>;
        if (line.trim() === '') return <br key={i} />;
        return <p key={i} className="article-p">{line}</p>;
      });
  };

  return (
    <div className="article-page">
      {/* Dynamic Hero Section */}
      <div className="article-hero" style={{ background: post.gradient }}>
        <div className="container article-hero__inner">
          <ScrollReveal animation="fade-up" delay={100}>
            <Link to="/blog" className="article-back">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="article-hero__meta">
              <span className="article-category">{post.category}</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <h1 className="article-title">{post.title}</h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="article-byline">
              <span className="article-byline__item">
                <User size={14} className="article-byline__icon" /> {post.author}
              </span>
              <span className="article-byline__item">
                <Calendar size={14} className="article-byline__icon" /> {post.date}
              </span>
              <span className="article-byline__item">
                <Clock size={14} className="article-byline__icon" /> {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="container article-layout">
        {/* Main Content */}
        <article className="article-body">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="article-glass-panel">
              <p className="article-lead">{post.excerpt}</p>
              <div className="article-content">
                {renderContent(post.content)}
              </div>
            </div>
          </ScrollReveal>

          {/* Share Toolbar */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="article-share-bar">
              <div className="article-share-bar__left">
                <Share2 size={20} className="article-share-bar__icon" />
                <span className="article-share-bar__text">Share this article</span>
              </div>
              <div className="article-share-bar__btns">
                <button className="article-btn-glass" aria-label="Share on Twitter">
                  <AtSign size={18} />
                </button>
                <button className="article-btn-glass" aria-label="Share on LinkedIn">
                  <MessageCircle size={18} />
                </button>
                <button className="article-btn-glass" aria-label="Copy link" onClick={() => navigator.clipboard?.writeText(window.location.href)}>
                  <Link2 size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </article>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <ScrollReveal animation="fade-left" delay={300}>
            <div className="article-sidebar__glass-card">
              <h3 className="article-sidebar__title">Author</h3>
              <div className="article-sidebar__author">
                <div className="article-sidebar__avatar-ring">
                  <div className="article-sidebar__avatar">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <p className="article-sidebar__author-name">{post.author}</p>
                  <p className="article-sidebar__author-role">Paverasa Team</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {others.length > 0 && (
            <ScrollReveal animation="fade-left" delay={400}>
              <div className="article-sidebar__glass-card">
                <h3 className="article-sidebar__title">Continue Reading</h3>
                <div className="article-sidebar__more">
                  {others.map(other => (
                    <Link key={other.id} to={`/blog/${other.slug}`} className="article-sidebar__more-item group">
                      <div className="article-sidebar__more-thumb" style={{ background: other.gradient }}>
                        <div className="article-sidebar__more-thumb-overlay">
                          <ArrowLeft size={16} className="article-sidebar__more-icon" />
                        </div>
                      </div>
                      <div className="article-sidebar__more-text">
                        <p className="article-sidebar__more-title">{other.title}</p>
                        <p className="article-sidebar__more-meta">{other.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </aside>
      </div>
    </div>
  );
}
