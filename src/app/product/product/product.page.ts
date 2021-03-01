import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  equipments = [
    {
      Title: "Rock Breaker",
      desc: "SMM Group Constantly strives to maximize the satisfaction of our customers across India by offering High quality World class products at competitive pricing along with prompt and professional after -sales services. The use of advanced hydraulics, materials technology, strength calculations, impact wave theory and production technology have enabled SMM to create hydraulic Rock Breakers that are powerful, durable, cost-effective and the undisputed leaders in their class.",
      img: "rock-breaker.png",
      showMore: false,
    },
    {
      Title: "Ripper Tooth",
      desc: "Ripper tooth is an attachment with long angled tooth that fits on Hydraulic Excavator to penetrate and loosen subsurface layers of earth to a depth of up to 3 ft (approx. 1 m).These attachments are used for loosening layers of frozen soil, rock (usually of medium strength), and artificial surfaces in layers using the tractive force of a prime mover. Rippers are used in construction together with other excavating machines to prepare foundation pits, canals, and trenches.",
      img: "ripper_content.png",
      showMore: false,
    },
    {
      Title: "Quick Coupler",
      desc: "Quick couplers are used with construction machines to allow the rapid change of buckets and attachments on the machine. They remove the need to use hammers to manually drive out and insert the mounting pins for attachments. They also bring with them additional safety risks that must be overcome by careful design and manufacture, and proper use",
      img: "quick_coupler.png",
      showMore: false,
    },
    {
      Title: "Auger Assembly",
      desc: "SMM Auger Drive Units have been designed to suit all Parent Machines includes Mounting Frames, Extensions, Motors etc with unmatched performance and reliability.",
      img: "Auger-Assembly-1.jpg",
      showMore: false,
    },
    {
      Title: "Vibro Rippper",
      desc: "A Vibro Ripper is a Unique Machine Designed and Developed with the Latest Technology for Ripping without Explosion which gives more Productivity in Mining Segment Especially in Limestone and Soft Strata. A Robust Hydraulic motor driven eccentrics generate huge vibratory force, which is used to drive a wedge in a rock surface causing a fracture. Thereby the tooth penetrates the rock and helps Rip the same",
      img: "VR.png",
      showMore: false,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
