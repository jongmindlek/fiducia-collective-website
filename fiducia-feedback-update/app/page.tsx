"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  { image: "/media/work-01.jpg", number: "01", title: "우리는 가족이니까", role: "촬영감독", year: "2024" },
  { image: "/media/work-02.jpg", number: "02", title: "작품 정보 업데이트 예정", role: "포트폴리오", year: "2025" },
  { image: "/media/work-03.jpg", number: "03", title: "작품 정보 업데이트 예정", role: "포트폴리오", year: "2025" },
  { image: "/media/work-04.jpg", number: "04", title: "작품 정보 업데이트 예정", role: "포트폴리오", year: "2025" },
  { image: "/media/work-05.jpg", number: "05", title: "작품 정보 업데이트 예정", role: "포트폴리오", year: "2025" },
  { image: "/media/work-06.jpg", number: "06", title: "작품 정보 업데이트 예정", role: "포트폴리오", year: "2025" },
];

const services = [
  ["01", "WEDDING FILM", "웨딩 필름", "가장 가까운 시선으로 하루의 온도와 감정을 오래 남깁니다"],
  ["02", "INTERVIEW", "인터뷰", "사람의 목소리와 표정에 집중해 진정성 있는 메시지를 전합니다"],
  ["03", "BRAND FILM", "브랜드 필름", "브랜드의 태도와 핵심 가치를 선명한 영상 언어로 설계합니다"],
  ["04", "MUSIC VIDEO", "뮤직비디오", "음악의 분위기와 아티스트의 세계를 감각적인 장면으로 확장합니다"],
  ["05", "LONG & SHORT FILM", "장편 및 단편영화", "이야기의 호흡을 이해하고 기획부터 완성까지 함께 만들어갑니다"],
];

const packages = ["ESSENTIAL", "LIGHT", "STANDARD", "PLUS", "PREMIUM", "SIGNATURE", "CUSTOM"];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedPackage, setSelectedPackage] = useState(2);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) await video.play().catch(() => undefined);
  };

  const openPrice = (service: (typeof services)[number]) => {
    setSelectedService(service);
    setPriceOpen(true);
  };

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

      <section className="hero" id="top" ref={heroRef}>
        <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline poster="/media/reel-poster.jpg" preload="metadata">
          <source src="/media/fiducia-reel-2025-hq.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-controls">
          <a className="reel-link" href="#works"><span className="play">▶</span><span>2025 SHOWREEL</span></a>
          <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={muted ? "영상 소리 켜기" : "영상 소리 끄기"}>
            <span className={`sound-bars ${muted ? "is-muted" : ""}`}><i /><i /><i /></span>
            {muted ? "SOUND ON" : "SOUND OFF"}
          </button>
        </div>
      </section>

      <section className="intro section-shell">
        <p className="eyebrow">BUILT AROUND YOUR STORY</p>
        <h2>예산은 유연하게<br />과정은 투명하게</h2>
        <p className="intro-copy">
          피두사 컬렉티브는 정해진 방식보다 프로젝트에 맞는 방식을 먼저 찾습니다.
          원하는 제작비와 목표를 함께 살피고, 꼭 필요한 과정에 집중해 맞춤형 제작안을 설계합니다.
          기획부터 촬영, 후반작업까지 진행 상황과 비용을 투명하게 공유하며 좋은 결과에 도달합니다.
        </p>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading">
          <div><p className="eyebrow">RECENT WORKS</p><h2>최근 작품</h2></div>
          <p>PORTFOLIO</p>
        </div>
        <div className="work-grid">
          {works.map((work, index) => (
            <article className={`work-card work-${index + 1}`} key={work.number}>
              <button className="work-image" type="button" aria-label={`${work.title} 상세 보기`}>
                <img src={work.image} alt={`${work.title} 스틸`} />
                <span className="work-arrow">↗</span>
              </button>
              <div className="work-info">
                <span>{work.number}</span><h3>{work.title}</h3><span>{work.role}</span><span>{work.year}</span>
              </div>
              <div className="award-slot">AWARDS / FESTIVALS — 업데이트 예정</div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className={`service-track ${priceOpen ? "show-price" : ""}`}>
          <div className="service-page section-shell">
            <div className="section-heading">
              <div><p className="eyebrow">WHAT WE CREATE</p><h2>필요한 만큼<br />정확하게 만듭니다</h2></div>
              <p className="services-note">목적과 예산을 먼저 듣고<br />가장 현실적인 제작 방식을 제안합니다</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <button type="button" key={service[0]} onClick={() => openPrice(service)}>
                  <span>{service[0]}</span><div><b>{service[1]}</b><h3>{service[2]}</h3></div><p>{service[3]}</p><span className="service-arrow">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="price-page section-shell" aria-hidden={!priceOpen}>
            <button className="price-back" type="button" onClick={() => setPriceOpen(false)}>← SERVICES</button>
            <div className="price-heading">
              <div><p className="eyebrow">PACKAGE GUIDE</p><h2>{selectedService[2]}</h2><p>{selectedService[1]}</p></div>
              <p>프로젝트의 목적과 규모에 따라 달라지는 참고 구성입니다<br />상담 후 필요한 항목만 남겨 최종 견적을 안내합니다</p>
            </div>
            <div className="package-grid">
              {packages.map((name, index) => (
                <button className={selectedPackage === index ? "selected" : ""} type="button" key={name} onClick={() => setSelectedPackage(index)}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{index === 2 ? "RECOMMENDED" : "PACKAGE"}</small>
                </button>
              ))}
            </div>
            <div className="package-summary"><span>선택한 패키지</span><strong>{packages[selectedPackage]}</strong><p>세부 구성과 가격은 추후 입력할 수 있도록 준비된 영역입니다</p><a href="#contact">이 패키지로 문의하기 ↗</a></div>
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-visual">
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          <img className="about-mark" src="/media/fiducia-mark-white.png" alt="" aria-hidden="true" />
          <span className="about-caption">FIDUCIA / TRUST</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT FIDUCIA</p>
          <h2>신뢰를 만드는<br />제작의 과정</h2>
          <p>Fiducia는 라틴어로 ‘신뢰’를 뜻합니다. 중앙의 마크를 둘러싼 선은 서로 다른 사람과 생각이 하나의 결과를 향해 만나는 과정을 표현합니다.</p>
          <p>우리는 멋진 화면만큼 솔직한 협업을 중요하게 생각합니다. 예산과 일정, 제작 범위를 명확하게 나누고 각 프로젝트에 꼭 필요한 팀을 구성해 처음의 의도가 완성된 화면까지 흔들리지 않도록 함께합니다.</p>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="eyebrow">LET’S TALK</p>
        <h2>Your story<br />starts here</h2>
        <div className="contact-actions">
          <a href="http://pf.kakao.com/_WLxapn" target="_blank" rel="noreferrer"><span>카카오톡 채널</span><span>↗</span></a>
          <a href="https://www.instagram.com/fiduciacollective/" target="_blank" rel="noreferrer"><span>인스타그램</span><span>↗</span></a>
        </div>
        <div className="business-info"><span>FIDUCIA COLLECTIVE</span><span>사업자등록번호 872-28-01941</span></div>
        <div className="contact-bottom">
          <div className="footer-brand"><img src="/media/fiducia-logo-white.png" alt="FIDUCIA COLLECTIVE" /></div>
          <div><a href="http://pf.kakao.com/_WLxapn" target="_blank" rel="noreferrer">KAKAO ↗</a><a href="https://www.instagram.com/fiduciacollective/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
          <p>© 2026 FIDUCIA COLLECTIVE</p>
        </div>
      </section>
    </main>
  );
}
