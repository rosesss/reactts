import React from "react";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.less";
import logo from './assets/images/logo.svg';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={logo} />
        <h1>罗伯特机器人酷炫吊炸天online购物平台</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
