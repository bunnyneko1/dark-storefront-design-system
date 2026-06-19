/* Extra storefront sections to add rhythm: announcement bar, brand story, reviews. */

function AnnouncementBar() {
  return (
    <div style={{ background: 'linear-gradient(90deg, var(--ember-600), var(--ember-500))', borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '9px var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-50)' }}>
          {'{{ANNOUNCEMENT}}'}
        </span>
      </div>
    </div>
  );
}
window.AnnouncementBar = AnnouncementBar;

function BrandStory({ onShop }) {
  const { Button } = window.EmberTobaccoCoDesignSystem_3a8c24;
  const Icon = window.Icon;
  const isMobile = window.useIsMobile();
  const points = [
    ['leaf', '{{STORY_POINT_1}}'],
    ['snowflake', '{{STORY_POINT_2}}'],
    ['package-check', '{{STORY_POINT_3}}'],
  ];
  return (
    <section style={{ background: 'var(--ink-850)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', marginTop: 72 }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: isMobile ? '0' : '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: isMobile ? 0 : 48, alignItems: 'center' }}>
          <div style={{ position: 'relative', alignSelf: 'stretch', minHeight: isMobile ? 280 : 460, borderRight: isMobile ? 'none' : '1px solid var(--line)', borderBottom: isMobile ? '1px solid var(--line)' : 'none', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(120% 120% at 50% 0%, var(--ink-700), var(--ink-900))' }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{'{{STORY_IMAGE}}'}</span>
          </div>
          <div style={{ padding: isMobile ? '40px var(--gutter)' : '64px 0' }}>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-400)', margin: '0 0 14px' }}>{'{{STORY_EYEBROW}}'}</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 500, color: 'var(--text-strong)', margin: '0 0 18px', lineHeight: 1.08, letterSpacing: '-0.015em' }}>{'{{STORY_TITLE}}'}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 460 }}>
              {'{{STORY_BODY}}'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {points.map(([ic, t]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, flex: 'none', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line-gold)', background: 'var(--accent-soft)', color: 'var(--gold-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon n={ic} s={17} />
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)' }}>{t}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" onClick={onShop}>{'{{CTA_PRIMARY}}'}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.BrandStory = BrandStory;

function Reviews() {
  const isMobile = window.useIsMobile();
  const reviews = [
    { name: '{{REVIEW_1_NAME}}', place: '{{REVIEW_1_PLACE}}', text: '{{REVIEW_1_TEXT}}' },
    { name: '{{REVIEW_2_NAME}}', place: '{{REVIEW_2_PLACE}}', text: '{{REVIEW_2_TEXT}}' },
    { name: '{{REVIEW_3_NAME}}', place: '{{REVIEW_3_PLACE}}', text: '{{REVIEW_3_TEXT}}' },
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter) 0' }}>
      <SectionHead eyebrow="{{REVIEWS_EYEBROW}}" title="{{REVIEWS_TITLE}}" />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))', gap: 18 }}>
        {reviews.map(r => (
          <div key={r.name} className="lift" style={{ background: 'var(--surface-card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '24px 26px' }}>
            <span style={{ fontSize: 14, color: 'var(--gold-400)', letterSpacing: '0.1em' }}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.45, margin: '14px 0 20px' }}>&ldquo;{r.text}&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-body)' }}>{r.name}</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{r.place}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Reviews = Reviews;
