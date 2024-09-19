import React from 'react';

function HeroImage() {
  return (
    <section className="font-sans overflow-x-hidden">
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    <div class="mt-12 md:mt-0">
      <img
        src="https://pikwizard.com/pw/small/24a82486dd88f2bec0e803e3a097b564.avif"
        alt="About Us Image"
        class="object-cover rounded-lg shadow-md max-w-full h-auto"
      />
    </div>
    <div class="max-w-lg text-white">
      
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-2">Front-End Focus:</h3>
        <p>
          <span class="highlight">Front-End Aficionado:</span> Proficient in
          crafting visually stunning and user-friendly interfaces using
          JavaScript, React.js, and CSS frameworks like Bootstrap, Tailwind
          CSS, Material UI, ShanCN, and Aceternity UI. <br />
          <span class="highlight">UI/UX Maestro:</span> Experienced in creating
          intuitive user experiences that engage and delight users, with a
          strong background in design tools like Figma.
        </p>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-2">Problem-Solving Prowess:</h3>
        <p>
          <span class="highlight">DSA Enthusiast:</span> Skilled in tackling
          complex problems efficiently through knowledge of Data Structures and
          Algorithms. <br />
          <span class="highlight">Multi-Linguist:</span> Proficient in various
          programming languages including C++, C, Python, and JavaScript.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Let's Connect!</h3>
        <p>
          Whether it's collaborating on captivating front-end projects, diving
          into algorithmic challenges, or crafting visually appealing designs,
          I'm excited to explore opportunities together. Reach out, and let's
          bring your ideas to life!
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default HeroImage;
