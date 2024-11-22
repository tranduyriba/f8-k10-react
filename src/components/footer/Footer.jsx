import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <p>Copyrigh Duy Riba</p>
            <button className={styles.btn}>Subscribe</button>
        </footer>
    );
};

export default Footer;