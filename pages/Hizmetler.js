import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function Hizmetler() {
  const PageContentHizmetler = () => {
    return (
      <div>
        <ul style={{marginTop:"0px"}}>
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
