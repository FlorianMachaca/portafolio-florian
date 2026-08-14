import "./App.css";

/* =========================================
   DATOS PERSONALES
========================================= */

const GITHUB_URL = "https://github.com/FlorianMachaca";

const GUSSA_REPO_URL =
  "https://github.com/FlorianMachaca/gussa-system";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/florian-machaca-chacceri-4460b6388/";

const EMAIL = "florianmachaca@unsch.edu.pe";

function App() {
  return (
    <div className="portfolio">
      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <a href="#inicio" className="logo">
          FLORIAN<span>.</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="nav-button">
          Contactarme
        </a>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <main id="inicio" className="hero">
        <div className="hero-content">
          <p className="hero-tag">
            ESTUDIANTE DE INGENIERÍA DE SISTEMAS
          </p>

          <h1>
            Hola, soy <span>Florian</span>
            <br />
            Machaca Chacceri.
          </h1>

          <p className="hero-description">
            Desarrollo soluciones web y software enfocadas en resolver
            problemas reales de manera funcional, clara y eficiente.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="primary-button">
              Ver mis proyectos →
            </a>

            <a
              href="/cv/Florian-Machaca-CV.pdf"
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver CV ↗
            </a>
          </div>

          <div className="hero-social">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href={`mailto:${EMAIL}`}>
              Email ↗
            </a>
          </div>

          <div className="hero-info">
            <span>📍 Ayacucho, Perú</span>
            <span>💻 Desarrollo Web & Software</span>
          </div>
        </div>

        {/* TARJETA DE CÓDIGO */}

        <div className="hero-card">
          <div className="card-top">
            <span className="status"></span>
            Disponible para oportunidades
          </div>

          <div className="code-window">
            <div className="code-line">
              <span className="purple">const</span>{" "}
              <span className="blue">developer</span> = {"{"}
            </div>

            <div className="code-line indent">
              <span className="green">name:</span>{" "}
              <span className="orange">"Florian"</span>,
            </div>

            <div className="code-line indent">
              <span className="green">role:</span>{" "}
              <span className="orange">"Junior Developer"</span>,
            </div>

            <div className="code-line indent">
              <span className="green">location:</span>{" "}
              <span className="orange">"Ayacucho, Peru"</span>,
            </div>

            <div className="code-line indent">
              <span className="green">stack:</span> [
            </div>

            <div className="code-line double-indent">
              <span className="orange">"Java"</span>,
            </div>

            <div className="code-line double-indent">
              <span className="orange">"React"</span>,
            </div>

            <div className="code-line double-indent">
              <span className="orange">"Python"</span>,
            </div>

            <div className="code-line double-indent">
              <span className="orange">"SQL Server"</span>
            </div>

            <div className="code-line indent">]</div>

            <div className="code-line">
              {"}"}
            </div>
          </div>
        </div>
      </main>

      {/* =========================
          MI ENFOQUE
      ========================= */}

      <section className="intro-section">
        <div>
          <span className="section-label">
            MI ENFOQUE
          </span>

          <h2>
            Aprender. Construir.
            <br />
            <span>Mejorar.</span>
          </h2>
        </div>

        <p>
          Actualmente estoy fortaleciendo mis conocimientos en desarrollo
          de software y creando proyectos que me permitan convertir la
          teoría universitaria en soluciones reales.
        </p>
      </section>

      {/* =========================
          SOBRE MÍ
      ========================= */}

      <section
        id="sobre-mi"
        className="about-section"
      >
        <div className="about-header">
          <span className="section-label">
            SOBRE MÍ
          </span>

          <h2>
            Construyendo experiencia
            <br />
            <span>con proyectos reales.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy estudiante de Ingeniería de Sistemas enfocado en
              desarrollo de software y creación de soluciones web
              funcionales.
            </p>

            <p>
              Me interesa convertir problemas reales en sistemas claros,
              eficientes y fáciles de utilizar, aplicando buenas prácticas
              de programación y aprendiendo constantemente nuevas
              tecnologías.
            </p>

            <p>
              Actualmente estoy fortaleciendo mis conocimientos en
              desarrollo backend, frontend y bases de datos, mientras
              construyo proyectos que me permitan crecer profesionalmente
              como desarrollador.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-number">01</span>

              <h3>Desarrollo Web</h3>

              <p>
                Creación de interfaces modernas, funcionales y adaptables
                utilizando tecnologías web actuales.
              </p>
            </div>

            <div className="about-card">
              <span className="about-number">02</span>

              <h3>Backend</h3>

              <p>
                Desarrollo de lógica de negocio, APIs y conexión con bases
                de datos para aplicaciones reales.
              </p>
            </div>

            <div className="about-card">
              <span className="about-number">03</span>

              <h3>Bases de Datos</h3>

              <p>
                Diseño y manejo de bases de datos relacionales para
                almacenar y gestionar información de forma estructurada.
              </p>
            </div>

            <div className="about-card">
              <span className="about-number">04</span>

              <h3>Aprendizaje Continuo</h3>

              <p>
                En constante mejora de mis conocimientos en Java, React,
                Python y arquitectura de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HABILIDADES
      ========================= */}

      <section
        id="habilidades"
        className="skills-section"
      >
        <div className="skills-header">
          <span className="section-label">
            HABILIDADES
          </span>

          <h2>
            Tecnologías con las que
            <br />
            <span>construyo soluciones.</span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-category">
              BACKEND
            </span>

            <h3>Java</h3>

            <p>
              Programación orientada a objetos, lógica de negocio
              y construcción de aplicaciones.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              FRONTEND
            </span>

            <h3>React</h3>

            <p>
              Creación de interfaces modernas, componentes reutilizables
              y aplicaciones web dinámicas.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              PROGRAMACIÓN
            </span>

            <h3>Python</h3>

            <p>
              Desarrollo de lógica, automatización y construcción
              de servicios y aplicaciones.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              BASE DE DATOS
            </span>

            <h3>SQL Server</h3>

            <p>
              Diseño de bases de datos relacionales, consultas SQL
              y gestión estructurada de información.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              WEB
            </span>

            <h3>HTML & CSS</h3>

            <p>
              Desarrollo de interfaces responsivas y estructuras web
              adaptables a distintos dispositivos.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              HERRAMIENTAS
            </span>

            <h3>Git & GitHub</h3>

            <p>
              Control de versiones, publicación de proyectos
              y organización del código fuente.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              BACKEND
            </span>

            <h3>APIs REST</h3>

            <p>
              Construcción y consumo de servicios para comunicar
              frontend, backend y bases de datos.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-category">
              DISEÑO
            </span>

            <h3>Arquitectura de Software</h3>

            <p>
              Conocimientos en MVC, casos de uso, análisis de sistemas
              y organización de aplicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROYECTOS
      ========================= */}

      <section
        id="proyectos"
        className="projects-section"
      >
        <div className="projects-header">
          <span className="section-label">
            PROYECTOS
          </span>

          <h2>
            Proyectos donde convierto
            <br />
            <span>ideas en soluciones.</span>
          </h2>

          <p>
            Proyectos donde aplico desarrollo frontend, backend,
            bases de datos y principios de ingeniería de software.
          </p>
        </div>

        <div className="projects-grid">

          {/* =========================
              GUSSA
          ========================= */}

          <article className="project-card featured-project">
            <div className="project-number">
              01
            </div>

            <div className="project-content">
              <span className="project-type">
                FULL STACK · SISTEMA WEB
              </span>

              <h3>
                GUSSA System
              </h3>

              <p>
                Sistema web desarrollado para digitalizar y centralizar
                la gestión de una heladería artesanal, permitiendo
                administrar productos, inventario, compras, pedidos,
                ventas, promociones y reportes desde una sola plataforma.
              </p>

              <div className="project-highlights">
                <div>
                  <strong>Gestión</strong>
                  <span>Ventas e inventario</span>
                </div>

                <div>
                  <strong>Pedidos</strong>
                  <span>Registro y seguimiento</span>
                </div>

                <div>
                  <strong>Reportes</strong>
                  <span>Control del negocio</span>
                </div>
              </div>

              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>SQL Server</span>
                <span>REST API</span>
              </div>

              <div className="project-links">
                <a
                  href="/projects/gussa-dashboard.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver proyecto →
                </a>

                <a
                  href={GUSSA_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link secondary-link"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="project-image-container">
              <div className="project-browser">
                <div className="project-browser-top">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-address">
                    gussa-system / dashboard
                  </div>
                </div>

                <div className="project-image">
                  <img
                    src="/projects/gussa-dashboard.png"
                    alt="Sistema web GUSSA Helados Artesanales"
                  />
                </div>
              </div>

              <div className="project-image-label">
                <span className="status"></span>
                Sistema Web GUSSA
              </div>
            </div>
          </article>

          {/* =========================
              PROYECTO 2
          ========================= */}

          <article className="project-card">
            <div className="project-number">
              02
            </div>

            <div className="project-content">
              <span className="project-type">
                BACKEND · API REST
              </span>

              <h3>
                API de Gestión
              </h3>

              <p>
                Backend orientado a operaciones CRUD, validación de datos,
                manejo de rutas y comunicación con bases de datos mediante
                servicios REST.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>FastAPI</span>
                <span>SQL</span>
                <span>REST</span>
              </div>

              <div className="project-links">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver código →
                </a>
              </div>
            </div>
          </article>

          {/* =========================
              PROYECTO 3
          ========================= */}

          <article className="project-card">
            <div className="project-number">
              03
            </div>

            <div className="project-content">
              <span className="project-type">
                JAVA · SOFTWARE
              </span>

              <h3>
                Sistema de Gestión en Java
              </h3>

              <p>
                Aplicación desarrollada aplicando programación orientada
                a objetos, lógica de negocio, interfaces gráficas
                y persistencia de información.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>POO</span>
                <span>SQL</span>
                <span>Git</span>
              </div>

              <div className="project-links">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver código →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          CONTACTO
      ========================= */}

      <section
        id="contacto"
        className="contact-section"
      >
        <div className="contact-card">
          <span className="section-label">
            CONTACTO
          </span>

          <h2>
            ¿Tienes una oportunidad
            <br />
            <span>para trabajar juntos?</span>
          </h2>

          <p>
            Estoy interesado en oportunidades como desarrollador junior,
            practicante de software o proyectos donde pueda aportar,
            aprender y continuar desarrollándome profesionalmente.
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${EMAIL}`}
              className="primary-button contact-button"
            >
              Enviarme un correo →
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button contact-button"
            >
              GitHub ↗
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button contact-button"
            >
              LinkedIn ↗
            </a>

            <a
              href="/cv/Florian-Machaca-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button contact-button"
            >
              Ver CV ↗
            </a>
          </div>

          <div className="contact-info">
            <div>
              <span>UBICACIÓN</span>
              <p>Ayacucho, Perú</p>
            </div>

            <div>
              <span>DISPONIBILIDAD</span>
              <p>Prácticas · Junior · Proyectos</p>
            </div>

            <div>
              <span>ENFOQUE</span>
              <p>Backend · Web · Software</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        <div className="footer-logo">
          FLORIAN<span>.</span>
        </div>

        <p>
          © 2026 · Diseñado y desarrollado por Florian Machaca Chacceri.
        </p>

        <div className="footer-links">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="#inicio">
            ↑ Arriba
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;