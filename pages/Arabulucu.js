import MyGrid from "@/components/tools/MyGrid";
import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default function Arabulucu() {
  const PageContentBenKimim = () => {
    return (
      <div>
        <p style={{ marginTop: "0px" }}>
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
        title="Avukat Arabulucu Öznur İlhan Karabulut"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut Hakkında Bilgiler"
        keywordsContent="arabulucu, avukat, öznur ilhan karabulut"
      />
      <PageTemplate
        content={
          <MyGrid
            breadcrumbs={
              <MyBreadcrumbs
                link1Title="Ben Kimim"
                link1Href="/Arabulucu"
                activePageNumber="1"
              />
            }
            title="Ben Kimim ?"
            leftContent={<PageContentBenKimim />}
            isOneFullContent={true}
          />
        }
      />
    </>
  );
}