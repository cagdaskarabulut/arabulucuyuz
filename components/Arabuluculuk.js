import React, { useEffect, useState }  from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import useWindowSize from "@rooks/use-window-size";
import { MOBILE_SCREEN_SIZE } from "../constants/GeneralConstants";

export default function Arabuluculuk() {
  //_ MobilePart
  const { innerWidth } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (innerWidth === null) {
      setIsMobile(false);
    } else {
      setIsMobile(innerWidth < MOBILE_SCREEN_SIZE);
    }
  }, [innerWidth]);

  return (
    <div>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="start"
        alignItems="start"
        columns={16}
      >
        <Grid item xs={isMobile ? 16 : 8}>
          <Image
            src="https://img.freepik.com/free-photo/close-up-business-handshake_53876-25263.jpg?w=1060&t=st=1694272633~exp=1694273233~hmac=012c49e7568899ac5456b3627ea2587b478308a8e63898fb53e1661ccf026cc4"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="Arabuluculuk"
          />
        </Grid>
        <Grid item xs={isMobile ? 16 : 8}>
          <p>
            Arabuluculuk, üçüncü kişinin tarafları bir araya getirerek müzakere
            edebilmelerini sağladığı ve aralarındaki iletişimi kolaylaştırdığı,
            çözüme ilişkin karar verme yetkisinin taraflarda kaldığı, sürece
            ilişkin tavsiye veya karar verme yetkisinin ise üçüncü kişide olduğu
            bir yapılandırılmış uyuşmazlık çözüm sürecidir. Arabuluculuk için en
            az iki tarafa ihtiyaç vardır; sürecin arabuluculuk olarak
            tanımlanabilmesi için ise bir üçüncü kişinin müdahalesi gereklidir.
            Kanun, arabuluculuğu{" "}
            <i>
              “sistematik yöntemler uygulayarak, görüşmek ve müzakerelerde
              bulunmak amacıyla tarafları bir araya getiren, onların birbirini
              anlamaları ve bu suretle çözümlerini kendilerinin üretmesini
              sağlamak için aralarında iletişim sürecinin kurulmasını
              gerçekleştirilen, uzmanlık eğitimi almış olan tarafsız ve bağımsız
              bir üçüncü kişinin katılımıyla ve ihtiyari olarak yürütülen
              uyuşmazlık çözüm yöntemi”
            </i>{" "}
            olarak tanımlanmaktadır.
          </p>
          <p>
            Arabuluculuk, elverişli her uyuşmazlık için kullanılabilecek bir
            uyuşmazlık çözüm yöntemidir. Ancak arabuluculuğa elverişli
            uyuşmazlıklar içinde bazılarında arabuluculuğa başvurmak ve olumlu
            sonuç almak diğerlerine göre daha kolay olabilir. Bu hâller
            şunlardır:
          </p>
          <ul>
            <li>
              Taraflar arasındaki görünen uyuşmazlığın ötesinde daha büyük
              çatışma, menfaat veya sorunlar varsa,
            </li>
            <li>
              Taraflar arasında korunmaya değer uzun süreli bir (ticari, ailevi
              nitelikte, komşuluk hukuku ile ilgili, kişisel veya uzun süreli
              sözleşme şeklinde bir) ilişki varsa,
            </li>
            <li>
              Uyuşmazlığın görünen tarafları dışında başkaca tarafları da varsa,
            </li>
            <li>Taraflar arasında birden çok uyuşmazlık varsa,</li>

            <li>
              Taraflar uyuşmazlığın hızlı bir şekilde çözülmesini istiyorlarsa,
            </li>
            <li>
              Taraflar yargılamanın uzun sürmesi sebebi ile daha hızlı çözüm
              elde etmek istiyor ise,
            </li>
            <li>
              Uyuşmazlığın yargısal yolla çözümü uyuşmazlığın değerine göre çok
              masraflı olacaksa,
            </li>
            <li>
              Uyuşmazlık konusunun yargısal yolla çözümü fazla karmaşık ise,
            </li>
            <li>
              Uyuşmazlığın yargı kararıyla çözümü hâlinde kararın icrası zor
              olacak veya mümkün olmayacak ise,
            </li>
            <li>
              Tarafların uyuşmazlığın dostane çözümünde karşılıklı çıkarları
              varsa,
            </li>
            <li>
              Taraflar, uyuşmazlık konusunda gizliliğin korunmasını istiyor ise
              veya
            </li>
            <li>
              Taraflar arasında uzun süreli kalıcı bir çözüm isteniyor ise.
            </li>
          </ul>
          Arabuluculuğun birçok olumlu yanı olup bunlar aşağıda sıralanmıştır.
          Arabuluculuğun olumu yanları:
          <ul>
            <li>
              {" "}
              Menfaat ve İhtiyaç Odaklı Karşılıklı Kabul Edilmiş Bir Çözüm
              Olması
            </li>
            <li>Zamandan ve Masraftan Tasarruf</li>
            <li>Kontrolün Taraflarda Olması</li>
            <li>Gizlilik</li>
            <li>Dava Yükünün Azaltılması</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
