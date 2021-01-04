import React, { useState, useRef, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { Button } from '../Navbar/styled';
import {
  Arrow,
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtons,
} from './styled';

const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % length);
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [currentSlide, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrentSlide((currentSlide + 1) % length);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrentSlide((currentSlide + length - 1) % length);
  };

  if (isEmpty(slides)) return null;

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => (
            <HeroSlide key={index}>
              {index === currentSlide && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>

                    <Button
                      to={slide.path}
                      primary="true"
                      style={{ maxWidth: '160px' }}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          ))}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

export default Hero;
