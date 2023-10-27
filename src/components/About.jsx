import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className=" text-center">
          <h2 className="text-5xl  font-bold">
            Truted by developer across the word
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            tenetur maxime soluta, dolore incidunt deleniti obcaecati quas
            corrupti quaerat molestias quis nihil impedit voluptas officiis sed.
            Omnis ab culpa non.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p>Comletion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p>Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
