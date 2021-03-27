import React from "react";
import MapMarker from '../assets/MapMarker.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'


const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Logo"/>
          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Ribeirão das Neves</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Link to="" className="create-orphanage">
        <FiPlus />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
