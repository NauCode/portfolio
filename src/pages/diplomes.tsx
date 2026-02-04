import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

export default function Diplomes(): ReactNode {
  const diplomas = [
    {
      school: 'ENI École Informatique',
      location: 'Nantes',
      image: '/img/illustrations/graduation.svg',
      degree: 'Mastère Manager de Solutions Digitales et Data',
      level: 'Titre RNCP Niveau 7 (Master)',
      year: '2025',
    },
    {
      school: 'ENI École Informatique',
      location: 'Nantes',
      image: '/img/illustrations/diploma.svg',
      degree: 'Concepteur développeur d\'application',
      level: 'Titre RNCP Niveau 6 (Licence)',
      year: '2024',
    },
    {
      school: 'Saint Joseph La Salle',
      location: 'Lorient',
      image: '/img/illustrations/diploma.svg',
      degree: 'BTS Système Informatique et Réseau',
      level: '',
      year: '2022',
    },
  ];

  return (
    <Layout title="Diplômes" description="Diplômes et certifications de Nathan Jaouen">
      <main className={styles.pageContainer}>
        <div className={styles.pageHeader}>
          <Heading as="h1">Diplômes & Certifications</Heading>
          <p>Parcours académique en informatique.</p>
        </div>

        <div className={styles.diplomasGrid}>
          {diplomas.map((diploma, idx) => (
            <div key={idx} className={clsx(styles.diplomaCard, styles.fadeInCard)}>
               <img 
                 src={diploma.image} 
                 alt={diploma.school}
                 className={styles.diplomaImage}
               />
              <div className={styles.diplomaCardContent}>
                <Heading as="h2">{diploma.degree}</Heading>
                <p className={styles.diplomaLevel}>{diploma.level}</p>
                <p className={styles.diplomaSchool}>{diploma.school}</p>
                <p className={styles.diplomaLocation}>{diploma.location}</p>
                <p className={styles.diplomaYear}>{diploma.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={clsx(styles.certificationBlock, styles.fadeInCard)}>
          <Heading as="h2">Certifications</Heading>
          <div className={styles.certCard}>
            <Heading as="h3">TOEIC</Heading>
            <p className={styles.certScore}>Score: 905</p>
            <Link
              className="button button--primary"
              to="https://www.etsglobal.org/fr/en/digital-score-report/C3082576A8E50729DA6CF00408894081F89339E5536456443A71A76C065DF1F6bXpTWHFNNk1yaytGL2ZVK001Skx6UDBvNGdhTUdYcElrRVZlaDFHcXdKSGtERTk4">
              Voir le rapport
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
