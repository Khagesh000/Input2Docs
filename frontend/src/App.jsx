import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import Endbar from './components/Endbar';
import DisplayAd from './components/DisplayAd';

// Lazy-loaded components
const Letter = lazy(() => import('./Letter'));
const Email = lazy(() => import('./Email'));
const About = lazy(() => import('./About'));
const CoverLetter = lazy(() => import('./CoverLetter'));
const Resume = lazy(() => import('./Resume'));
const Cv = lazy(() => import('./Cv'));
const Contact = lazy(() => import('./Contact'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./TermsAndConditions'));

// Components for the main page
import HomeImageCarousel from './components/HomeImageCaurosel';
import CardArrange from './components/CardArrange';
import Websitemainmoto from './components/Websitemainmoto';
import Process from './components/Process';
import ImageView from './components/imageview';
import Feedback from './components/Feedback';
import KeyMetrics from './components/KeyMetrics';

function App() {
  const location = useLocation();

  // List of special pages
  const specialPages = [
    '/letter',
    '/email',
    '/about-us',
    '/cover',
    '/resume',
    '/cv',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ];
  const isSpecialPage = specialPages.includes(location.pathname);

  // Metadata based on the current route
  const getPageMeta = () => {
    return isSpecialPage
      ? {
          title: 'Input2Docs - Templates & Tools',
          description:
            'Discover professional templates and tools for letters, resumes, cover letters, and more at Input2Docs.',
        }
      : {
          title: 'Welcome | Input2Docs Template Generator',
          description: 'Welcome to Input2Docs! Create professional email and letter templates with ease.',
        };
  };

  const { title, description } = getPageMeta();

  return (
    <div className="App">
      {/* Global SEO settings */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="document generator, templates, resume maker, email creator, professional templates, Input2Docs"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Types of Letters',
            description: 'A comprehensive list of letter types provided by Input2Docs.',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'School Letters',
                url: 'https://input2docs.com/school-letters',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Office Letters',
                url: 'https://input2docs.com/office-letters',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Police Station Letters',
                url: 'https://input2docs.com/police-station-letters',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Bank Letters',
                url: 'https://input2docs.com/bank-letters',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Legal Letters',
                url: 'https://input2docs.com/legal-letters',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Government Letters',
                url: 'https://input2docs.com/government-letters',
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Render the main page content for non-special pages */}
      {!isSpecialPage && (
        <main>
          <HomeImageCarousel />
          <h1 className="responsive-heading">Welcome To Our Template Generator</h1>
          <Websitemainmoto />
          <section className="card-section">
            <CardArrange />
          </section>
          <Process />
          <DisplayAd />
          <ImageView />
          <KeyMetrics />
          <Feedback />
        </main>
      )}

      {/* Routes for all pages */}
      <Routes>
        {specialPages.map((path, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Suspense fallback={<div className="spinner">Loading...</div>}>
                {{
                  '/letter': <Letter />,
                  '/email': <Email />,
                  '/about-us': <About />,
                  '/cover': <CoverLetter />,
                  '/resume': <Resume />,
                  '/cv': <Cv />,
                  '/contact-us': <Contact />,
                  '/privacy-policy': <PrivacyPolicy />,
                  '/terms-and-conditions': <TermsAndConditions />,
                }[path]}
              </Suspense>
            }
          />
        ))}
      </Routes>

      {/* Footer for non-special pages */}
      {!isSpecialPage && <Endbar />}
    </div>
  );
}

export default App;
