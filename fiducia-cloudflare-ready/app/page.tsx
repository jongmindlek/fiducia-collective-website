const works = [
  { image: "/media/work-01.jpg", number: "01", type: "NARRATIVE FILM" },
  { image: "/media/work-02.jpg", number: "02", type: "CINEMATIC STORY" },
  { image: "/media/work-03.jpg", number: "03", type: "SHORT FILM" },
  { image: "/media/work-04.jpg", number: "04", type: "VISUAL PORTRAIT" },
  { image: "/media/work-05.jpg", number: "05", type: "BRAND STORY" },
  { image: "/media/work-06.jpg", number: "06", type: "ENSEMBLE FILM" },
];

const services = [
  ["01", "FILM & NARRATIVE", "단편영화와 서사 중심의 시네마틱 콘텐츠"],
  ["02", "BRAND & COMMERCIAL", "브랜드의 태도와 메시지를 담은 광고 영상"],
  ["03", "MUSIC & PERFORMANCE", "음악과 움직임을 시각 언어로 확장하는 제작"],
  ["04", "WEDDING FILM", "한 사람의 하루를 영화처럼 기록하는 웨딩 필름"],
  ["05", "AI PREVIS & VFX", "AI 프리비주얼과 VFX를 연결한 효율적인 제작"],
  ["06", "VIRTUAL PRODUCTION", "실사 촬영과 디지털 환경을 결합한 프로덕션"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="mini-brand" href="#top" aria-label="Fiducia Collective 홈">
          <img src="/media/fiducia-logo-white.png" alt="FIDUCIA COLLECTIVE" />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#works">WORKS</a>
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT</a>
          <a className="nav-contact" href="#contact">CONTACT ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/reel-poster.jpg"
          preload="metadata"
        >
          <source src="/media/fiducia-reel-2025-hq.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-grain" />

        <a className="reel-link" href="#works">
          <span className="play">▶</span>
          <span>2025 SHOWREEL</span>
        </a>
      </section>

      <section className="intro section-shell">
        <p className="eyebrow">WE MAKE MOVING IMAGES</p>
        <h2>
          기술은 더 가볍게.<br />
          이야기는 더 깊게.
        </h2>
        <p className="intro-copy">
          피두사 컬렉티브는 영화적 완성도와 새로운 제작 기술을 연결합니다.
          기획에서 촬영, 후반작업까지 하나의 흐름으로 설계해 더 많은 이야기가
          좋은 화면으로 완성될 수 있도록 합니다.
        </p>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORKS</p>
            <h2>Stories in motion.</h2>
          </div>
          <p>2025 SHOWREEL / 01—06</p>
        </div>
        <div className="work-grid">
          {works.map((work, index) => (
            <article className={`work-card work-${index + 1}`} key={work.number}>
              <div className="work-image">
                <img src={work.image} alt={`${work.type} 쇼릴 스틸 ${work.number}`} />
                <span className="work-arrow">↗</span>
              </div>
              <div className="work-info">
                <span>{work.number}</span>
                <h3>{work.type}</h3>
                <span>2025</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Production,<br />without the old limits.</h2>
          </div>
          <p className="services-note">
            프로젝트 목적과 규모에 맞춰<br />
            LIGHT부터 CUSTOM까지 설계합니다.
          </p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-visual">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <img className="about-mark" src="/media/fiducia-mark-white.png" alt="" aria-hidden="true" />
          <span className="about-caption">FIDUCIA / TRUST</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT FIDUCIA</p>
          <h2>믿음에서 시작되는<br />새로운 제작 방식.</h2>
          <p>
            Fiducia는 라틴어로 ‘신뢰’를 뜻합니다. 우리는 규모보다 좋은
            협업을, 익숙한 방식보다 더 나은 제작 흐름을 믿습니다.
          </p>
          <p>
            감독과 창작자의 시선을 중심에 두고 AI 프리비주얼, 촬영 데이터,
            VFX를 유기적으로 연결해 아이디어가 화면에 도달하는 거리를
            줄입니다.
          </p>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="eyebrow">START A PROJECT</p>
        <h2>Have a story<br />worth moving?</h2>
        <a
          className="contact-link"
          href="mailto:hello@fiduciacollective.com?subject=Project%20Inquiry"
        >
          <span>PROJECT INQUIRY</span>
          <span>↗</span>
        </a>
        <div className="contact-bottom">
          <div className="footer-brand">
            <img src="/media/fiducia-logo-white.png" alt="FIDUCIA COLLECTIVE" />
          </div>
          <div>
            <a href="#" aria-label="인스타그램">INSTAGRAM ↗</a>
            <a href="#" aria-label="유튜브">YOUTUBE ↗</a>
          </div>
          <p>© 2026 FIDUCIA COLLECTIVE</p>
        </div>
      </section>
    </main>
  );
}
