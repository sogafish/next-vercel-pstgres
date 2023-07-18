import { Header } from "@/comonents/Header";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main>
      <Header title="Home" />
      <div className={css({
        paddingTop: '120px',
        width: '600px',
        margin: '0 auto',
      })}>
        <h1 className={css({ fontSize: 100, fontWeight: 600 })}>
        </h1>
      </div>
    </main>
  )
}
