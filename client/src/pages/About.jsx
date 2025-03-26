import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/about2.jpg"
          alt="About Prestige Enclave"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          About Prestige Enclave
        </h1>
        <p className="mb-4 text-slate-700">
          Welcome to Prestige Enclave, where your property dreams take shape!
          From elegant homes to prime commercial spaces, we specialize in
          connecting you with real estate options that match your vision. At
          Prestige Enclave, we prioritize transparency, trust, and a seamless
          experience for buyers, sellers, and renters.
        </p>
        <p className="mb-4 text-slate-700">
          Our platform combines advanced technology with a user-friendly
          interface to simplify every step of your real estate journey. Our team
          of experienced agents is dedicated to providing exceptional service
          and making the buying and selling process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700">
          Whether you are looking to buy, sell, or rent a property, we are here
          to help you every step of the way. Buying or selling a property should
          be an exciting and rewarding experience, and we are committed to
          making that a reality for you.
        </p>
      </motion.div>
    </div>
  );
}
