"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  { number: "01", category: "단편영화", title: "벽", role: "조명감독", year: "2023", image: "/media/portfolio/01/cover.jpg", gallery: Array.from({ length: 7 }, (_, i) => `/media/portfolio/01/${i ? String(i).padStart(2, "0") : "cover"}.jpg`) },
  { number: "02", category: "단편영화", title: "지나고 이어져 망가진", role: "연출감독", year: "2023", award: "전국대학독립영화제 본선 입상", image: "/media/portfolio/02/cover.jpg", gallery: Array.from({ length: 7 }, (_, i) => `/media/portfolio/02/${i ? String(i).padStart(2, "0") : "cover"}.jpg`) },
  { number: "03", category: "단편영화", title: "우리는 가족이니까", role: "촬영감독", year: "2024", image: "/media/portfolio/03/cover.jpg", gallery: Array.from({ length: 7 }, (_, i) => `/media/portfolio/03/${i ? String(i).padStart(2, "0") : "cover"}.jpg`) },
  { number: "04", category: "단편영화", title: "어른아이", role: "촬영 및 조명감독", year: "2024", image: "/media/portfolio/04/cover.jpg", gallery: Array.from({ length: 7 }, (_, i) => `/media/portfolio/04/${i ? String(i).padStart(2, "0") : "cover"}.jpg`) },
  { number: "05", category: "단편영화", title: "서울의 델라", role: "촬영 및 조명감독", year: "2026", image: "/media/portfolio/05/cover.jpg", gallery: Array.from({ length: 7 }, (_, i) => `/media/portfolio/05/${i ? String(i).padStart(2, "0") : "cover"}.jpg`) },
  { number: "06", category: "뮤직비디오", title: "여진(L∞na) ‘Red Hot Chili Summer’", role: "조명감독", year: "2026", image: "https://img.youtube.com/vi/Kdggz2tSGRU/maxresdefault.jpg", gallery: [], youtube: "Kdggz2tSGRU" },
];

const filmography = [
  { year: "2021", entries: [["단편영화", "호치킨", "편집감독"], ["단편영화", "300만원 짜리 사진", "편집감독"], ["단편영화", "리미티드", "편집감독"], ["단편영화", "가장 완벽한 순간", "연출"]] },
  { year: "2022", entries: [["단편영화", "잠자리", "연출"]] },
  { year: "2023", entries: [["단편영화", "맨홀 속으로", "조명감독"], ["단편영화", "벽", "조명감독"], ["단편영화", "총성", "촬영 및 조명감독"], ["단편영화", "지나고 이어져 망가진", "연출", "전국대학독립영화제 본선 입상"]] },
  { year: "2024", entries: [["단편영화", "우리는 가족이니까", "촬영감독"], ["단편영화", "어른아이", "촬영 및 조명감독"], ["뮤직비디오", "blueprint! / Kash bang", "개퍼"], ["웹드라마", "레오를 죽이는 4가지 방법", "조명팀"], ["홍보 영상", "헌법재판소 공식 영상", "조명팀"], ["광고", "알파인더스트리", "조명팀"], ["광고", "동경규동", "조명팀"]] },
  { year: "2025", entries: [["단편영화", "클로즈업", "조명감독", "충무로단편독립영화제 입상 · 제2회 화성영화제 장려상"], ["광고", "탑텐키즈", "촬영팀"], ["광고", "해밀로직스", "촬영팀"], ["광고", "늘봄 노타비스", "촬영팀"]] },
  { year: "2026", entries: [["뮤직비디오", "여진(L∞na) ‘Red Hot Chili Summer’", "조명감독"], ["단편영화", "서울의 델라", "촬영 및 조명감독"]] },
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
  const [activeWork, setActiveWork] = useState(0);
  const [modalWork, setModalWork] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

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

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = 0.56;
  }, []);

  useEffect(() => {
    if (modalWork !== null) return;
    const timer = window.setInterval(() => setActiveWork((current) => (current + 1) % works.length), 3800);
    return () => window.clearInterval(timer);
  }, [modalWork]);

  useEffect(() => {
    if (modalWork === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalWork(null);
      if (event.key === "ArrowRight") setGalleryIndex((current) => (current + 1) % Math.max(works[modalWork].gallery.length, 1));
      if (event.key === "ArrowLeft") setGalleryIndex((current) => (current - 1 + Math.max(works[modalWork].gallery.length, 1)) % Math.max(works[modalWork].gallery.length, 1));
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [modalWork]);

  const openWork = (index: number) => { setModalWork(index); setGalleryIndex(0); };
  const changeGallery = (direction: number) => {
    if (modalWork === null) return;
    const count = works[modalWork].gallery.length;
    if (count) setGalleryIndex((current) => (current + direction + count) % count);
  };

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

      <section className="works" id="works">
        <div className="section-heading section-shell works-heading">
          <div><p className="eyebrow">RECENT WORKS</p><h2>최근 작품</h2></div>
          <p>{String(activeWork + 1).padStart(2, "0")} / 06 &nbsp; PORTFOLIO</p>
        </div>
        <div className="work-carousel">
          <div className="work-track" style={{ transform: `translateX(calc(20vw - ${activeWork * 60}vw - ${activeWork * 24}px))` }}>
          {works.map((work, index) => (
            <article className={`work-card ${activeWork === index ? "is-active" : ""}`} key={work.number} onMouseEnter={() => setActiveWork(index)}>
              <button className="work-image" type="button" aria-label={`${work.title} 상세 보기`} onClick={() => openWork(index)}>
                <img src={work.image} alt={`${work.title} 스틸`} />
                <span className="work-arrow">VIEW ↗</span>
              </button>
              <div className="work-info">
                <span>{work.number}</span><div><small>{work.category}</small><h3>{work.title}</h3></div><span>{work.role}</span><span>{work.year}</span>
              </div>
              {work.award && <div className="award-slot">AWARD — {work.award}</div>}
            </article>
          ))}
          </div>
        </div>
        <div className="work-nav section-shell">
          <button type="button" onClick={() => setActiveWork((activeWork - 1 + works.length) % works.length)} aria-label="이전 작품">←</button>
          <div>{works.map((work, index) => <button type="button" key={work.number} className={activeWork === index ? "active" : ""} onClick={() => setActiveWork(index)} aria-label={`${work.title} 보기`} />)}</div>
          <button type="button" onClick={() => setActiveWork((activeWork + 1) % works.length)} aria-label="다음 작품">→</button>
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

      <section className="filmography section-shell" id="filmography">
        <div className="section-heading">
          <div><p className="eyebrow">FILMOGRAPHY</p><h2>주요 연혁</h2></div>
          <p>2021—2026</p>
        </div>
        <div className="history-list">
          {filmography.map((group) => (
            <article key={group.year}>
              <h3>{group.year}</h3>
              <div>
                {group.entries.map((entry, index) => (
                  <div className="history-entry" key={`${entry[1]}-${index}`}>
                    <span>{entry[0]}</span><strong>{entry[1]}</strong><span>{entry[2]}</span>{entry[3] && <em>{entry[3]}</em>}
                  </div>
                ))}
              </div>
            </article>
          ))}
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

      {modalWork !== null && (
        <div className="work-modal" role="dialog" aria-modal="true" aria-label={`${works[modalWork].title} 작품 상세`}>
          <button className="modal-close" type="button" onClick={() => setModalWork(null)} aria-label="작품 상세 닫기">CLOSE ×</button>
          <div className="modal-meta">
            <div><span>{works[modalWork].number} / {works[modalWork].category}</span><h2>{works[modalWork].title}</h2></div>
            <div><span>{works[modalWork].year}</span><strong>{works[modalWork].role}</strong>{works[modalWork].award && <em>{works[modalWork].award}</em>}</div>
          </div>
          {works[modalWork].youtube ? (
            <div className="youtube-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${works[modalWork].youtube}?autoplay=1&rel=0`} title={works[modalWork].title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>
          ) : (
            <>
              <div className="gallery-window">
                <div className="gallery-track" style={{ transform: `translateX(calc(12vw - ${galleryIndex * 78}vw))` }}>
                  {works[modalWork].gallery.map((image, index) => <img className={galleryIndex === index ? "active" : ""} src={image} alt={`${works[modalWork].title} 스틸 ${index + 1}`} key={image} />)}
                </div>
                <button className="gallery-prev" type="button" onClick={() => changeGallery(-1)} aria-label="이전 사진">←</button>
                <button className="gallery-next" type="button" onClick={() => changeGallery(1)} aria-label="다음 사진">→</button>
              </div>
              <div className="gallery-count">{String(galleryIndex + 1).padStart(2, "0")} / {String(works[modalWork].gallery.length).padStart(2, "0")}</div>
            </>
          )}
        </div>
      )}
    </main>
  );
}
