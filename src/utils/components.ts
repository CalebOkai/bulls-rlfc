import { SetStateAction, useRef, useEffect } from "react";


export const nextStep = (
  scrollRef: HTMLElement,
  currentStep: number,
  setCurrentStep?: (value: SetStateAction<number>) => void,
  previousStep?: number,
) => {
  const targetStep: number = (previousStep !== undefined)
    ? previousStep
    : currentStep + 1;
  let transformProp: string = `translateX(calc(${targetStep} * -100%))`;
  scrollRef.animate([
    { transform: transformProp },
  ], {
    duration: 150,
    fill: "forwards"
  });
  if (setCurrentStep)
    setCurrentStep(targetStep);
}


export const useFirstRender = () => {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    firstRenderRef.current = false;
  }, []);
  return firstRenderRef.current;
};
