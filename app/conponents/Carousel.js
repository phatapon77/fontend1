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
      <img src="https://cdn.oneesports.co.th/cdn-data/sites/3/2023/10/Valorant_Iso_Agent24-1024x576-1.jpg" 
      className="d-block w-100" 
      alt="..."width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <img src="https://www.esports.net/wp-content/uploads/2024/09/valorant-agents-release-order.webp" 
      className="d-block w-100" alt="..." 
      width={1920} height={690} />
    </div>
    <div className="carousel-item">
      <img src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/06/07/66639c764f7f0.jpeg" 
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