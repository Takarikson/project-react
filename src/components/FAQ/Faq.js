import React from './node_modules/react';
import styles from './Faq.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faq } from '../../data/dataStore.js';

const Faq = () => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={faq.title} image={faq.image} />
      <div className={styles.description}>{faq.description}</div>
    </section>
  </Container>
);

export default Faq;
