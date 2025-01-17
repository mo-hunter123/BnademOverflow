import React from 'react';
import Layout from '../components/layout/Layout';
import Metadata from '../components/metadata';
import { Link } from 'gatsby';

const NotFound = () => (
  <Layout>
    <Metadata
      title="404"
      description="The page you are looking for does not exist."
      image="https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png"
    />
    <div class="bg-gradient-to-r from-purple-300 to-blue-200">
      <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="bg-white shadow-xl overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-6xl font-medium py-8">Coming Soon...</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist or still in development mode.
            </p>
            <Link to="/">
              <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-full mr-6">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
