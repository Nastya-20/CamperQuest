import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <div className={css.titleWraper}>
           <h1 className={css.HeroTitle}>Campers of your dreams</h1>
            <h2 className={css.HeroText}>You can find everything you want in our catalog</h2>
            <button className={css.HeroBtn} type="submit">View Now</button>
            </div>
        </div>
    )
}