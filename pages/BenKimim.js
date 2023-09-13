import styles from "./BenKimim.module.scss";
import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Ben kimim sayfası
export default function BenKimim() {

  const PageContentBenKimim = () => {
    return (
      <div className={styles.benKimimStyle}>
        <p>
          <b>AV. ARB. ÖZNUR İLHAN KARABULUT</b>
        </p>
        <p>
          2010 YILINDA MALTEPE ÜNİVERSİTESİ HUKUK FAKÜLTESİNDEN MEZUN OLMASININ
          ARDINDAN ÖZEL HUKUK ALANINDA ÇALIŞMA HAYATI OLMUŞTUR. 2020 YILINDA
          ARABULUCULUK DAİRE BAŞKANLIĞI SİCİLİNE KAYIT OLARAK 12511 SİCİL NOLU
          ARBULUCU OLARAK GÖREV YAPMAYA BAŞLAMIŞTIR.
        </p>
      </div>
    );
  };

  return (
    <>
      <MetaPanel
        title="Öznur İlhan Karabulut"
        name="Öznur İlhan Karabulut"
        content="Öznur İlhan Karabulut Hakkında Bilgiler"
      />
      <PageTemplate content={<PageContentBenKimim />} />
    </>
  );
}
