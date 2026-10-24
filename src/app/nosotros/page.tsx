import Link from "next/link";
import Header from "@/components/Header";

export default function Nosotros() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <Link href="/" className="brand" aria-label="Impulso Digital - Inicio">
            <span className="brand-icon" aria-hidden="true">✦</span>
            <span>Impulso<span className="brand-accent">Digital</span></span>
          </Link>
          <nav className="navigation" aria-label="Navegación principal">
            <Link href="/" className="nav-link">Inicio</Link>
            <Link href="/nosotros" className="nav-link nav-link--active" aria-current="page">Nosotros</Link>
          </nav>
        </div>
      </header>

      <main className="about-main">
        <section className="container about-hero">
          <Link href="/" className="back-link">← Volver al inicio</Link>
          <p className="eyebrow eyebrow--purple">Conoce nuestra iniciativa</p>
          <h1>Juntos aprendemos.<br /><span>Juntos crecemos.</span></h1>
          <div className="about-intro">
            <div className="about-symbol" aria-hidden="true">✳</div>
            <div>
              <Header titulo="¿Quiénes somos?" />
              <p>
                Somos una comunidad formada por estudiantes interesados en la programación,
                el diseño de páginas web y la innovación. Nos gusta compartir conocimientos,
                aprender de nuestros compañeros y enfrentar nuevos retos tecnológicos.
              </p>
              <p>
                Nuestro objetivo es desarrollar habilidades digitales mediante talleres,
                proyectos en equipo y charlas. Queremos crear un espacio en el que cada estudiante
                pueda aportar sus ideas, practicar lo aprendido y crecer profesionalmente.
              </p>
            </div>
          </div>
        </section>

        <section className="container about-values">
          <article className="value-card">
            <span className="value-card__icon" aria-hidden="true">◎</span>
            <h2>Nuestra misión</h2>
            <p>Aprender nuevas tecnologías y convertir el conocimiento en proyectos útiles para nuestra comunidad.</p>
          </article>
          <article className="value-card">
            <span className="value-card__icon" aria-hidden="true">✦</span>
            <h2>Nuestra visión</h2>
            <p>Ser una iniciativa estudiantil que motive a más jóvenes a compartir, innovar y crear soluciones digitales.</p>
          </article>
        </section>

        <section className="container about-bottom">
          <p>El primer paso para crear algo importante es atreverse a aprender.</p>
          <Link href="/" className="hero-link">Volver a Inicio <span aria-hidden="true">↗</span></Link>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2026 Impulso Digital · Hecho para aprender.</p>
          <Link href="/">Inicio ↗</Link>
        </div>
      </footer>
    </>
  );
}
