"use client"

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface FoodContainerProps {
  name: string;
  haveAddButton?: boolean | false;
  StyleContainer?: string | "";
}

export default function FoodContainer({ name, haveAddButton , StyleContainer}: FoodContainerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetX = useRef<number>(0);
  const offsetY = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const animateDrag = () => {
      if (!containerRef.current) return;

      const left = containerRef.current.offsetLeft;
      const top = containerRef.current.offsetTop;

      containerRef.current.style.left = `${left}px`;
      containerRef.current.style.top = `${top}px`;

      animationFrameId = requestAnimationFrame(animateDrag);
    };

    if (isDragging && containerRef.current) {
      animationFrameId = requestAnimationFrame(animateDrag);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);


  

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    offsetX.current = e.clientX - (containerRef.current?.offsetLeft || 0);
    offsetY.current = e.clientY - (containerRef.current?.offsetTop || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (container) {
      const left = e.clientX - offsetX.current;
      const top = e.clientY - offsetY.current;
      container.style.left = `${left}px`;
      container.style.top = `${top}px`;
      container.style.zIndex = "30"
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = containerRef.current;
    if(container){
      container.style.zIndex = "0";
    }
  };

  return (
    <div
      className={`ingredient-box bg-primary-color w-80 rounded-[20px] absolute pb-6 ${StyleContainer} ${
        isDragging ? "grabbing" : ""
      }`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}

    >
      <style jsx>{`
        .grabbing {
          cursor: grabbing;
        }
      `}</style>
      <div className="flex pl-8 pr-4 h-10 justify-between items-center">
        <h2>{name}</h2>
        <div className="flex items-center">
          {haveAddButton !== false && (
            <Image src="images/plus.svg" alt="plus-sign" width={20} height={20} />
          )}
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="bg-item-color flex pl-6 h-[50px] pr-3">
          <div className="flex flex-grow items-center">
            <h2>Ovo</h2>
          </div>
          <div className="flex items-center">
            <p>1230cal</p>
          </div>
        </li>
        <li className="bg-item-color flex pl-6 h-[50px] pr-3">
          <div className="flex flex-grow items-center">
            <h2>Ovo</h2>
          </div>
          <div className="flex items-center">
            <p>1230cal</p>
          </div>
        </li>
      </ul>
      {name == "Daily" && (<div className="relative max-w-min float-right border-t-2 border-black mr-2 mt-1">1300cal</div>)}
    </div>
  );
}
