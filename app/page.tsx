import { Content } from "./components/content";
import { Menu } from "./components/menu";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <Menu />
      <Content />
    </main>
  );
};

export default Home;
