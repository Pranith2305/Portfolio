import React from 'react';

function Hero() {
  return (
    <div class="h-screen flex justify-center items-center">
  <div class="max-w-screen-lg mx-auto px-6 text-center">
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
      <span class="text-3xl md:text-5xl">Hey! I'm</span>{" "}
      <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-4xl md:text-6xl">
        Pranith.
      </span>
      <br class="hidden md:inline" />
      <p class="text-gray-200 mt-10 text-lg md:text-2xl font-semibold tracking-wide">
        "Crafting web experiences that leave a lasting impression."
      </p>
    </h1>
  </div>
</div>

  );
}

export default Hero;
