import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <Link href="/" className="brand" aria-label="Impulso Digital - Inicio">
            <span className="brand-icon" aria-hidden="true">✦</span>
            <span>Impulso<span className="brand-accent">Digital</span></span>
          </Link>
          <nav className="navigation" aria-label="Navegación principal">
            <Link href="/" className="nav-link nav-link--active" aria-current="page">Inicio</Link>
            <Link href="/nosotros" className="nav-link">Nosotros</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow"><span className="eyebrow-dot" /> Comunidad estudiantil · Huancayo</p>
              <h1>Ideas pequeñas.<br /><span>Grandes proyectos.</span></h1>
              <p className="hero-description">
                En Impulso Digital aprendemos programación, compartimos experiencias
                y convertimos nuestras ideas en soluciones tecnológicas útiles.
              </p>
              <Link href="/nosotros" className="hero-link">
                Conoce a nuestra comunidad <span aria-hidden="true">↗</span>
              </Link>
              <p className="hero-note">Aprender · Colaborar · Crear</p>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="art-glow art-glow--one" />
              <div className="art-glow art-glow--two" />
              <div className="code-card">
                <div className="code-card__header"><span /><span /><span /><small>nuestro-futuro.tsx</small></div>
                <div className="code-card__content">
                  <p><span className="code-purple">const</span> comunidad = {'{'}</p>
                  <p className="code-indent">aprender: <span className="code-green">true</span>,</p>
                  <p className="code-indent">crear: <span className="code-green">true</span>,</p>
                  <p className="code-indent">compartir: <span className="code-green">true</span></p>
                  <p>{'};'}</p>
                  <p className="code-highlight">// ¡El futuro comienza aquí!</p>
                </div>
              </div>
              <div className="floating-chip floating-chip--top">✦ Aprendizaje</div>
              <div className="floating-chip floating-chip--bottom">⌘ Creatividad</div>
            </div>
          </div>
        </section>

        <section className="activities container">
          <Header titulo="Descubre lo que hacemos" />
          <p className="section-description">
            Tres formas de desarrollar nuestras habilidades y aprender entre compañeros.
          </p>
          <ul className="activity-grid">
            <li className="activity-card">
              <div className="activity-icon activity-icon--lavender" aria-hidden="true">⌘</div>
              <h3>Talleres prácticos</h3>
              <p>Aprendemos desarrollo web y nuevas herramientas mediante ejercicios reales.</p>
              <span>01 / Aprender</span>
            </li>
            <li className="activity-card">
              <div className="activity-icon activity-icon--blue" aria-hidden="true">◇</div>
              <h3>Proyectos colaborativos</h3>
              <p>Trabajamos en equipo para transformar ideas en aplicaciones y páginas web.</p>
              <span>02 / Construir</span>
            </li>
            <li className="activity-card">
              <div className="activity-icon activity-icon--peach" aria-hidden="true">✳</div>
              <h3>Charlas tecnológicas</h3>
              <p>Compartimos experiencias, resolvemos dudas y conocemos tendencias digitales.</p>
              <span>03 / Compartir</span>
            </li>
          </ul>
        </section>

        <section className="join-section container">
          <div className="join-copy">
            <p className="eyebrow eyebrow--purple">Componentes reutilizables</p>
            <Header titulo="Cada idea merece una oportunidad" />
            <p>Estos dos botones utilizan el mismo componente Button, pero reciben textos diferentes mediante props.</p>
          </div>
          <div className="join-actions" aria-label="Ejemplos de botones visuales">
            <Button texto="Explorar talleres" />
            <Button texto="Ver nuestros proyectos" variante="secundaria" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2026 Impulso Digital · Hecho para aprender.</p>
          <Link href="/nosotros">Conoce al equipo ↗</Link>
        </div>
      </footer>
    </>
  );
}
