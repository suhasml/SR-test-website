// import Feature from "../components/Feature";
// import Pricing from "../components/Pricing";
// import Hero from "../components/Hero";
// import Layout from "../components/Layout/Layout";
// import SeoHead from "../components/SeoHead";
// import Tracker from '@openreplay/tracker';
// import { useEffect } from "react";

// const tracker = new Tracker({
//   projectKey: "L5N69rX6SwdTrr8rvpNX",  
// });


// export default function Home() {

//   useEffect(() => {
//     tracker.start();
//   }, []);

//   return (
//     <>
//       <SeoHead title='LaslesVPN Landing Page' />
//       <Layout>
//         <Hero />
//         <Feature />
//         <Pricing />
//       </Layout>
//     </>
//   );
// }

import React, { useEffect } from 'react';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';

// Import OpenReplay tracker conditionally
let Tracker;
if (typeof window !== 'undefined') {
  Tracker = require('@openreplay/tracker').default;
}

const Home = () => {
  useEffect(() => {
    // Check if we are in the browser environment before initializing OpenReplay
    if (Tracker) {
      const tracker = new Tracker({
        projectKey: 'L5N69rX6SwdTrr8rvpNX',  // Replace with your OpenReplay project key
      });
      tracker.start();
    }
  }, []); // Run this effect only once on component mount

  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

export default Home;
