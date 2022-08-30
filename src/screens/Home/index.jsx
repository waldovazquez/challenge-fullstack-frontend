import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Screen from '../../components/Screen';
import MainCarousel from '../../components/Carousel/Main';
import CardCarousel from '../../components/CardCarousel';

export default function Home() {
  const [mainCarouselData, setMainCarouselData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get('https://challenge-fullstack-waldo.herokuapp.com/api/carousel/second');
      if (response) {
        setMainCarouselData(response.data);
      }
    } catch (error) {
      console.info('Error', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen>
      {mainCarouselData.length > 0 && (
        <MainCarousel
          data={mainCarouselData}
        />
      )}
      <CardCarousel
        title="Turismo en Buenos Aires"
        tourism
        buttonContent="Todos los beneficios"
        url="https://challenge-fullstack-waldo.herokuapp.com/api/carousel/first"
      />
      <CardCarousel
        title="Códigos de descuento"
        buttonContent="Todos los códigos"
        description="¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas"
        url="https://challenge-fullstack-waldo.herokuapp.com/api/carousel/second"
      />
    </Screen>
  );
}
