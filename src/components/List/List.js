import React from 'react';
import styles from './List.scss';

class List extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <h3>To do list</h3>
            </section>
        )
    }
}

export default List;