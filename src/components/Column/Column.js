import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
//import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  state = {
    //cards: this.props.cards || [],
    cards: PropTypes.array,
  };

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
  };

  addCard(title) {
    this.setState(state => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon key="3" name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {this.state.cards.map(({ key, ...cardsProps }) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={title => this.addCard(title)}
          />
        </div>
      </section>
    );
  }
}

export default Column;
