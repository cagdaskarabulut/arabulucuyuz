import styles from "./Hizmetler.module.scss";
import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Hizmetler sayfası
export default function Hizmetler() {
  
  const PageContentHizmetler = () => {
    return (
      <div className={styles.hizmetlerStyle}>
        <ul>
          <li>İŞÇİ İŞVEREN UYUŞMAZLIKLARINDA ARABULUCULUK</li>
          <li>TİCARİ UYUŞMAZLIKLARDA ARABULUCULUK</li>
          <li>TÜKETİCİ UYUŞMAZLIKLARINDA ARABULUCULUK</li>
          <li>
            TARIMSAL ÜRETİM SÖZLEŞMESİNDEN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK
          </li>
          <li>
            KİRA HUKUKU ANLAŞMAZLIKLARINDAN KAYNAKLI UYUŞMAZLIKLARDA
            ARABULUCULUK
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <MetaPanel
        title="Hizmetlerimiz"
        name="Arabulucu ve Avukat"
        content="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<PageContentHizmetler />} />
    </>
  );
}
