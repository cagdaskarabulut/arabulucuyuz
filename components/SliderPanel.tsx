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
              src="/images/business-people-casual-meeting.jpg"
              fill
              alt="image1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <Image
              fill
              alt="image2"
              src="/images/businessman-businesswoman-shaking-hands-business-handshake-close-up-view.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <Image
              src="/images/businessman-reading-contract-closeup.jpg"
              width={500}
              height={500}
              quality={100}
              alt="image5"
            />
            <p className="legend">Image 5</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
