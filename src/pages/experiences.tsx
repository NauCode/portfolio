import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

export default function Experiences(): ReactNode {
  const experiences = [
    {
      company: 'Eurofins IT Solution South West Europe',
      location: 'Nantes',
      image: '/img/illustrations/teamwork.svg',
      duration: 'Sept. 2022 → Oct. 2025',
      period: '3 ans 2 mois',
      title: 'Développeur Full-Stack et Déploiement',
      projects: [
        {
          name: 'Projet B2B microservices (SCRUM)',
          description: 'Développement continu d\'une application B2B connectée à l\'ERP, forte volumétrie (10 000+ commandes/jour).',
          highlights: [
            'Migration .NET 6 → .NET 8 et Angular 14 → 16',
            'Création de services de transformation de données',
            'Modernisation OAuth, RBAC',
            'Optimisation performances backend et frontend',
            'Dockerisation et CI/CD (Azure DevOps, Octopus)',
            'Tests unitaires, d\'intégration et end-to-end',
            'Monitoring via Kibana',
          ],
        },
        {
          name: 'Application CRUD interne (Kanban)',
          description: 'Application interne basée sur des mappings JSON pour la majorité des équipes.',
          highlights: [
            'Notifications sur changements de base de données',
            'Outil d\'import/export de données',
            'Migrations .NET et Angular',
            'Optimisation SQL et Entity Framework',
          ],
        },
        {
          name: 'IAM & gestion des accès (Kanban)',
          description: 'Centralisation et sécurisation des accès inter-systèmes.',
          highlights: [
            'Analyse des risques et besoins IAM',
            'Étude conformité (RGPD, ISO 27001, NIS2)',
            'Évaluation multi-critères de solutions',
          ],
        },
        {
          name: 'WireMock.NET — tests d\'intégration (Kanban)',
          description: 'Système de mocking pour fiabiliser les échanges inter-systèmes.',
          highlights: [
            'Mise en place serveur WireMock.NET',
            'Scénarios de test nominaux et d\'erreurs',
            'Intégration CI/CD',
          ],
        },
      ],
    },
    {
      company: 'Greta-CFA Bretagne Sud',
      location: 'Lorient',
      image: '/img/illustrations/coding.svg',
      duration: 'Juin 2021 → Nov. 2021',
      period: '6 mois',
      title: 'Développeur Web',
      projects: [
        {
          name: 'Site CFA-GRETA Bretagne Sud (Cycle en V)',
          description: 'Création d\'un site avec PHP, MySQL et DSFR.',
          highlights: [
            'Conception et développement des pages',
            'Développement de la base de données',
            'Interface de données entrantes',
            'Tests et améliorations continues',
          ],
        },
      ],
    },
  ];

  return (
    <Layout title="Expériences" description="Expériences professionnelles de Nathan Jaouen">
      <main className={styles.pageContainer}>
        <div className={styles.pageHeader}>
          <Heading as="h1">Expériences</Heading>
          <p>Projets B2B, microservices et intégrations ERP.</p>
        </div>

        <div className={styles.experiencesList}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={clsx(styles.experienceBlock, styles.fadeInCard)}>
              <img 
                src={exp.image} 
                alt={exp.company}
                className={styles.expImage}
              />
              <div className={styles.expHeader}>
                <div className={styles.expContent}>
                  <Heading as="h2">{exp.company}</Heading>
                  <p className={styles.expMeta}>
                    {exp.title} • {exp.location}
                  </p>
                  <p className={styles.expDates}>
                    {exp.duration} ({exp.period})
                  </p>
                </div>
              </div>

              <div className={styles.projectsList}>
                {exp.projects.map((project, pidx) => (
                  <div key={pidx} className={styles.project}>
                    <Heading as="h3">{project.name}</Heading>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <ul className={styles.highlights}>
                      {project.highlights.map((highlight, hidx) => (
                        <li key={hidx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
