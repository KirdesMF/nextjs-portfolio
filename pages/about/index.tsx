import React from 'react';
import { Layout } from '@components/Layout/Layout';
import Head from 'next/head';

const title = 'Ced | About';
function About() {
   return (
      <Layout name="About" title={title}>
         <h1>ABout</h1>
      </Layout>
   );
}

export default About;
