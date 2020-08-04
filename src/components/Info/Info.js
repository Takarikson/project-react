import React from 'react';
import styles from './Info.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { info } from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={info.title} image={info.image} />
      <div className={styles.description}>{info.description}</div>
    </section>
  </Container>
);

export default Info;
