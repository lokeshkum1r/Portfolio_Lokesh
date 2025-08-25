import React from "react";

const cards = [
  {
    title: "HTML",
    img: "/html5.svg",
    desc: "I use HTML5 to create semantic, accessible, and SEO-friendly web pages.",
    star: 4.5,
  },
  {
    title: "CSS & Tailwind",
    img: "/css.svg",
    desc: "Styled modern UIs using TailwindCSS, animations, and responsive layouts.",
    star: 4.5,
  },
  {
    title: "JavaScript",
    img: "/javascript.svg",
    desc: "Dynamic features, ES6+, DOM manipulation, async programming.",
    star: 4,
  },
  {
    title: "React",
    img: "/react.png",
    desc: "Built reusable components, hooks-based apps, and optimized state management.",
    star: 3.5,
  },
  {
    title: "MongoDB & MySQL",
    img: "/mongodb.svg",
    desc: "Worked with relational & NoSQL databases for full-stack apps.",
    star: 3.5,
  },
  {
    title: "Node.js",
    img: "/nodejs.svg",
    desc: "Developed REST APIs, authentication, and backend services.",
    star: 3,
  },
  {
    title: "Express.js",
    img: "/express.png",
    desc: "I build fast, scalable, and secure backend APIs with Express.js, handling routing, middleware, and integrations efficiently.",
    star: 3,
  },
  {
    title: "Prompt Engineering",
    img: "/prompt.png",
    desc: "I design effective prompts for AI models to generate accurate, context-aware, and optimized responses.",
    star: 4,
  },

];

// ⭐ Rating component (with half star support)
const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<span key={i} className="text-yellow-400">★</span>); // full
    } else if (value >= i - 0.5) {
      stars.push(
        <span key={i} className="relative inline-block text-gray-400">
          <span className="absolute left-0 overflow-hidden w-1/2 text-yellow-400">
            ★
          </span>
          ★
        </span>
      ); // half
    } else {
      stars.push(<span key={i} className="text-gray-400">★</span>); // empty
    }
  }
  return <div className="flex text-lg">{stars}</div>;
};

export default function Skills() {
  return (
    <div className="bg-[#545854] min-h-screen p-12 text-white">
      {/* Title */}
      <div className="max-w-screen-lg mx-auto text-center pb-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
          My Skills
        </h2>
        <p className="mt-2 text-gray-400">Hover on the cards to explore</p>
      </div>

      {/* Flip Cards Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative [clip-path:polygon(0_0,100%_20%,100%_100%,8%_100%)] w-52 h-64 [perspective:1200px]"
          >
            <div className="relative w-full h-full rounded-xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center select-none bg-gradient-to-br from-gary-300 to-blue-200 rounded-xl shadow-lg p-6 [backface-visibility:hidden]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-30 h-20 object-contain mb-4 drop-shadow-md"
                />
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="text-sm opacity-75">Hover to flip</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold mb-2 text-blue-400 select-none">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-300">{c.desc}</p>
                <div className="mt-3">
                  <Rating value={c.star} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Skills Section */}
      <div className="mt-16 max-w-screen-lg mx-auto">
        <h3 className="text-2xl font-semibold border-b border-gray-100 pb-2 mb-6">
          Categorized Skills
        </h3>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
          <div>
            <p><span className="font-bold text-white">Languages:</span> C++</p>
            <p><span className="font-bold text-white">Frontend:</span> HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
            <p><span className="font-bold text-white">Backend:</span> Node.js, Express.js</p>
            <p><span className="font-bold text-white">Databases:</span> MongoDB, MySQL</p>
          </div>
          <div>
            <p><span className="font-bold text-white">AI/ML:</span> Good in Prompt Engineering</p>
            <p><span className="font-bold text-white">Tools:</span> Git, GitHub, VS Code</p>
            <p><span className="font-bold text-white">Concepts:</span> Data Structures & Algorithms, SDLC, OOP</p>
            <p><span className="font-bold text-white">Operating Systems:</span> Windows, Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
}
