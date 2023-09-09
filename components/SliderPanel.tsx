import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class SliderPanel extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false}>
          <div>
            <Image
              // src="/images/business-people-casual-meeting.jpg"
              src="https://img.freepik.com/free-photo/business-people-casual-meeting_53876-101882.jpg?w=1380&t=st=1694259970~exp=1694260570~hmac=2d7d97bd2b550c58e2ec8a4b994bfa6d8d136da0f807cf288fde2cee6084d65d"
              fill
              alt="İcra İflas Hukuku"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            <p className="legend">İcra İflas Hukuku</p>
          </div>
          <div>
            <Image
              fill
              alt="Kira Davalarında Arabuluculuk"
              src="https://img.freepik.com/free-photo/businessman-businesswoman-shaking-hands-business-handshake-close-up-view_1163-4238.jpg?w=1060&t=st=1694260120~exp=1694260720~hmac=083c3b2314887db061354e5a55a347967c8dbabdf80ddbe335e232bdf0c6a46f"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            <p className="legend">Kira Davalarında Arabuluculuk</p>
          </div>
          <div>
            <Image
              src="https://img.freepik.com/free-photo/businessman-reading-contract-closeup_1098-14742.jpg?w=1060&t=st=1694260077~exp=1694260677~hmac=778995f545f2ecbe65288ec6704bce1cddff09ce130537152f83339628766bc7"
              width={500}
              height={500}
              quality={100}
              alt="Arabuluculuk"
            />
            <p className="legend">Arabuluculuk</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
