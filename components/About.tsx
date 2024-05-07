import React from 'react';
import {
  IoBasketballOutline,
  IoCameraOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
} from 'react-icons/io5';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p>
        Am a computer engineer skilled in RPA automation, 
        mobile and web development, embedded systems, Hardware programming, database management.
        </p>
      </div>
    </>
  );
}
