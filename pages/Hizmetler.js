import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import SendIcon from '@mui/icons-material/Send';

export default function Hizmetler() {
  const PageContentHizmetler = () => {
    return (
      <div>
        <SendIcon style={{fontSize:"12px"}}/> İŞÇİ İŞVEREN UYUŞMAZLIKLARINDA ARABULUCULUK<br/><br/>
        <SendIcon style={{fontSize:"12px"}}/> TİCARİ UYUŞMAZLIKLARDA ARABULUCULUK<br/><br/>
        <SendIcon style={{fontSize:"12px"}}/> TÜKETİCİ UYUŞMAZLIKLARINDA ARABULUCULUK<br/><br/>
        <SendIcon style={{fontSize:"12px"}}/> TARIMSAL ÜRETİM SÖZLEŞMESİNDEN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK<br/><br/>
        <SendIcon style={{fontSize:"12px"}}/> KİRA HUKUKU ANLAŞMAZLIKLARINDAN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK 
      </div>
    );
  };

  return (
    <>
      <MetaPanel
        title="Hizmetlerimiz"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
        keywordsContent="iş hukukunda arabulucusu, ticari hukukunda arabuluculuk, tüketici hukukunda arabuluculuk, kira hukukunda arabuluculuk"
      />
      <PageTemplate content={<PageContentHizmetler />} />
    </>
  );
}
