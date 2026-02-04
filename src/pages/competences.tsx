import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

export default function Competences(): ReactNode {
  const skills = [
    {
      category: 'Langages',
      color: 'blue',
      image: '/img/illustrations/coding.svg',
      items: ['C#', '.NET', 'ASP .NET Core', 'ASP .NET Web API', 'GraphQL', 'PHP (Symfony)', 'DSFR', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'NgRx', 'Android (Dart, Flutter)', 'YAML'],
    },
    {
      category: 'Méthodes',
      color: 'green',
      image: '/img/illustrations/teamwork.svg',
      items: ['Agile', 'Scrum', 'Kanban'],
    },
    {
      category: 'Compétences fonctionnelles',
      color: 'purple',
      image: '/img/illustrations/tools.svg',
      items: ['Développeur Full Stack', 'Déploiement, intégration'],
    },
    {
      category: 'Outils',
      color: 'indigo',
      image: '/img/illustrations/tools.svg',
      items: ['Visual Studio', 'Visual Studio Code', 'Git', 'GitHub', 'Docker', 'Azure DevOps', 'Octopus Deploy', 'SSMS', 'Suite JetBrains', 'Kibana', 'JMeter'],
    },
    {
      category: 'Systèmes',
      color: 'violet',
      image: '/img/illustrations/systems.svg',
      items: ['Microsoft (Windows, Windows Server)', 'Linux (Red Hat, Debian, Ubuntu)'],
    },
    {
      category: 'Bases de données',
      color: 'cyan',
      image: '/img/illustrations/database.svg',
      items: ['SQLite', 'MS SQL Server 2019/2022', 'MongoDB', 'MySQL'],
    },
  ];

  return (
    <Layout title="Compétences" description="Compétences techniques de Nathan Jaouen">
      <main className={styles.pageContainer}>
        <div className={styles.pageHeader}>
          <Heading as="h1">Compétences</Heading>
          <p>Technologies, méthodes, outils et base de données.</p>
        </div>

        <div className={styles.skillShowcase}>
          {skills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className={clsx(styles.skillShowcaseCard, styles.fadeInCard, styles[`skill${skillGroup.color}`])}
            >
              <img 
                src={skillGroup.image} 
                alt={skillGroup.category}
                className={styles.skillImage}
              />
              <div className={styles.skillCardContent}>
                <div className={styles.skillCategoryHeader}>
                  <Heading as="h2">{skillGroup.category}</Heading>
                  <span className={styles.skillCount}>{skillGroup.items.length}</span>
                </div>
                <ul className={styles.skillTagsList}>
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.skillTag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

