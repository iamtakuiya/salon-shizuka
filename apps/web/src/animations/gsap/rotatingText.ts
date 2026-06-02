import { gsap } from 'gsap';

interface RotatingTextProps {
  element: HTMLElement;
  items: string[];
  exitY?: number;
  enterY?: number;
  displayDuration?: number;
}

export function rotatingText({
  element,
  items,
  exitY = -30,
  enterY = 30,
  displayDuration = 2,
}: RotatingTextProps) {
  let index = 0;

  const tl = gsap.timeline({
    repeat: -1,
  });

  items.forEach(() => {
    tl.to(element, {
      y: exitY,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        index = (index + 1) % items.length;
        element.textContent = items[index];
      },
    });

    tl.fromTo(
      element,
      {
        y: enterY,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );

    tl.to({}, { duration: displayDuration });
  });

  return tl;
}