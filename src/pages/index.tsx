import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <Heading as="h1" className={styles.heroTitle}>
              Nathan Jaouen
            </Heading>
            <p className={styles.heroSubtitle}>Développeur full stack .NET</p>
            <Heading as="h2" className={styles.heroSectionTitle}>
              Résumé
            </Heading>
            <p className={styles.heroSummary}>
              Développeur full stack .NET, expérience en alternance sur
              applications B2B connectées à un ERP. Compétences en C#, .NET,
              API, GraphQL, Angular et SQL. Travail sur tests d’intégration,
              sécurité (RBAC, OAuth) et fiabilité des échanges. Autonome,
              impliqué et à l’aise en équipe, français et anglais.
            </p>
            <div className={styles.badges}>
              <span>C#</span>
              <span>.NET</span>
              <span>ASP .NET Core</span>
              <span>Web API</span>
              <span>GraphQL</span>
              <span>Angular</span>
              <span>SQL</span>
              <span>Azure DevOps</span>
            </div>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/competences">
                Compétences
              </Link>
              <Link className="button button--primary button--lg" to="/experiences">
                Expériences
              </Link>
              <Link className="button button--primary button--lg" to="/diplomes">
                Diplômes
              </Link>
            </div>
          </div>
          <div className={styles.heroCard}>
            <Heading as="h2">Points forts</Heading>
            <ul>
              <li>Applications B2B connectées ERP</li>
              <li>Microservices et APIs robustes</li>
              <li>Sécurité: RBAC, OAuth</li>
              <li>Tests d’intégration & fiabilité</li>
              <li>Autonomie et travail d’équipe</li>
            </ul>
          </div>
        </div>
        <a className={styles.scrollHint} href="#suite">
          Découvrir la suite
        </a>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const experiences = [
    {
      company: 'Eurofins IT Solution South West Europe',
      title: 'Développeur Full-Stack et Déploiement',
      duration: 'Sept. 2022 → Oct. 2025 (3 ans 2 mois)',
      highlight: 'Application B2B microservices, 10 000+ commandes/jour',
      techs: ['C#', '.NET', 'Angular', 'GraphQL', 'Azure DevOps'],
    },
    {
      company: 'Greta-CFA Bretagne Sud',
      title: 'Développeur Web',
      duration: 'Juin 2021 → Nov. 2021 (6 mois)',
      highlight: 'Site CFA-GRETA avec PHP, MySQL et DSFR',
      techs: ['PHP', 'MySQL', 'DSFR'],
    },
  ];

  const diplomas = [
    { degree: 'Mastère Manager de Solutions Digitales et Data', school: 'ENI', year: 2025, level: 'Master (Niveau 7)' },
    { degree: 'Concepteur développeur d\'application', school: 'ENI', year: 2024, level: 'Licence (Niveau 6)' },
    { degree: 'BTS Système Informatique et Réseau', school: 'Saint Joseph La Salle', year: 2022, level: 'BTS' },
  ];

  return (
    <Layout
      title="Portfolio"
      description="Portfolio de Nathan Jaouen, développeur full stack .NET">
      <HomepageHeader />
      <main>
        <div className={styles.mainContentBg}>
          <section id="suite" className={clsx(styles.section, styles.fadeInSection)}>
            <div className="container">
            <Heading as="h2" className={clsx(styles.sectionTitle, styles.fadeInText)}>
              Ce que j'apporte
            </Heading>
            <div className={styles.cardGrid}>
              <div className={clsx(styles.card, styles.fadeInCard)}>
                <Heading as="h3">Back‑end .NET</Heading>
                <p>
                  APIs performantes, microservices, intégrations ERP et
                  transformations de données.
                </p>
              </div>
              <div className={clsx(styles.card, styles.fadeInCard)}>
                <Heading as="h3">Front Angular</Heading>
                <p>
                  Interfaces modernes, état applicatif avec NgRx et expériences
                  utilisateurs fiables.
                </p>
              </div>
              <div className={clsx(styles.card, styles.fadeInCard)}>
                <Heading as="h3">Qualité & sécurité</Heading>
                <p>
                  Tests d’intégration, RBAC, OAuth et observabilité pour une
                  fiabilité durable.
                </p>
              </div>
            </div>
          </div>
          </section>

          <section className={clsx(styles.sectionAlt, styles.fadeInSection)}>
            <div className="container">
            <Heading as="h2" className={clsx(styles.sectionTitle, styles.fadeInText)}>
              Expériences clés
            </Heading>
            <div className={styles.experienceShowcase}>
              {experiences.map((exp, idx) => (
                <div key={idx} className={clsx(styles.expCard, styles.fadeInCard)}>
                  <div className={styles.expHeader}>
                    <div>
                      <Heading as="h3">{exp.company}</Heading>
                      <p className={styles.expTitle}>{exp.title}</p>
                    </div>
                    <span className={styles.expYear}>{exp.duration}</span>
                  </div>
                  <p className={styles.expHighlight}>{exp.highlight}</p>
                  <div className={styles.expTechs}>
                    {exp.techs.map((tech, tidx) => (
                      <span key={tidx} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </section>

          <section className={clsx(styles.section, styles.fadeInSection)}>
            <div className="container">
            <Heading as="h2" className={clsx(styles.sectionTitle, styles.fadeInText)}>
              Formation académique
            </Heading>
            <div className={styles.diplomaTimeline}>
              {diplomas.map((diploma, idx) => (
                <div key={idx} className={clsx(styles.diplomaItem, styles.fadeInCard)}>
                  <div className={styles.diplomaYear}>{diploma.year}</div>
                  <div className={styles.diplomaContent}>
                    <Heading as="h4">{diploma.degree}</Heading>
                    <p className={styles.diplomaSchool}>{diploma.school}</p>
                    <span className={styles.diplomaLevel}>{diploma.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </section>

          <section className={clsx(styles.section, styles.fadeInSection)}>
            <div className="container">
            <Heading as="h2" className={clsx(styles.sectionTitle, styles.fadeInText)}>
              Accès rapides
            </Heading>
            <div className={styles.navGrid}>
              <Link className={clsx(styles.navCard, styles.fadeInCard)} to="/competences">
                <Heading as="h3">Compétences</Heading>
                <p>Technologies, méthodes et outils.</p>
                <span className={styles.navCta}>Voir</span>
              </Link>
              <Link className={clsx(styles.navCard, styles.fadeInCard)} to="/experiences">
                <Heading as="h3">Expériences</Heading>
                <p>Projets B2B, microservices et intégrations ERP.</p>
                <span className={styles.navCta}>Voir</span>
              </Link>
              <Link className={clsx(styles.navCard, styles.fadeInCard)} to="/diplomes">
                <Heading as="h3">Diplômes & certifications</Heading>
                <p>Parcours académique et TOEIC.</p>
                <span className={styles.navCta}>Voir</span>
              </Link>
            </div>
          </div>
          </section>

          <section className={styles.section}>
            <div className="container">
            <div className={styles.ctaStrip}>
              <div>
                <Heading as="h2">Parcours & détails</Heading>
                <p>
                  Explorez mes projets, compétences techniques et diplômes.
                </p>
              </div>
              <div className={styles.ctaButtons}>
                <Link className="button button--primary" to="/experiences">
                  Voir les expériences
                </Link>
                <Link className="button button--primary" to="/diplomes">
                  Voir les diplômes
                </Link>
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
