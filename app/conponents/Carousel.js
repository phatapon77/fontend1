'use client';
import { useEffect } from 'react';

import Image from "next/image";

export default function Carousel() {
 
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
<div 
id="carouselExample" 
className="carousel slide carousel-fade" 
data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://t4.ftcdn.net/jpg/15/09/66/21/360_F_1509662144_OJD6sfcteeHj8N5A4s5gU779zo1FAHaz.jpg" 
      className="d-block w-100" 
      alt="..."width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <img src="https://images.wallpaperscraft.com/image/single/yamaha_mt09_yamaha_motorcycle_254634_1920x1080.jpg" 
      className="d-block w-100" alt="..." 
      width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <img src="/images/sliders/sliders-03.png" 
      className="d-block w-100" alt="..." 
      width={1920} height={690} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
}