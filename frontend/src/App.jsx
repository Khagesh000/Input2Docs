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

  // Metadata based on the current route
  const getPageMeta = (route) => {
    switch (route) {
      case 'letter':
        return {
          title: 'Letter Generator - Free Letter Generator | Input2Docs',
          description:
            'Comprehensive letter templates for all your personal and professional needs. Create letters, letterheads, resumes, and more with ease using Input2Docs.',
          keywords: 'letterhead online design, official letter generator, letterhead maker, professional letter templates, Input2Docs templates, customizable letterhead design',
        };
      case 'email':
        return {
          title: 'Email Generator - Free Email Generator | Input2Docs',
          description:
            'Professional email templates for every occasion. Save time and create impact with Input2Docs.',
          keywords: 'email templates, professional email designs, Input2Docs email generator',
        };
      case 'resume':
        return {
          title: 'Free Resume Builder - Online Resume Maker | Input2Docs',
          description:
            'Create stunning resumes with Input2Docs\' easy-to-use templates.',
          keywords: 'Resume Templates, Professional Resumes, Input2Docs resume generator',
        };
      case 'cv':
        return {
          title: 'Free CV Templates - CV Templates | Professional CV Designs | Input2Docs',
          description:
            'Create professional CV templates online with Input2Docs. Choose from a wide range of customizable CV designs to make your job application stand out.',
          keywords:
            'CV templates, professional CV templates, free CV template, ATS CV templates, customizable CV designs, create CV online, free CV templates, job application CV templates, best CV template',
        };
      case 'cover':
        return {
          title: 'Free Cover Letter Maker - Create a Cover Letter Online | Input2Docs',
          description:
            'Browse our cover letter templates and craft the perfect first impression. Choose from free and customizable templates to enhance your job application.',
          keywords: 'cover letter templates, ATS-friendly cover letters, customizable cover letters, job application letters',
        };
      case 'contact':
        return {
          title: 'Contact Us | Contact Input2Docs',
          description:
            'Contact With Input2docs Team',
          keywords: 'contact Input2Docs',
        };
      case 'about-us':
        return {
          title: 'About Us | Learn About Input2Docs',
          description:
            'Entire Details And Features Of Input2docs',
          keywords: 'about Input2Docs, Features Of Input2docs',
        };
      case 'privacy-policy':
        return {
          title: 'Privacy Policy | Privacy Policy Input2Docs',
          description:
            'Privacy Policy Of Input2docs',
          keywords: 'contact Input2Docs',
        };
      case 'terms-and-conditions':
        return {
          title: 'Terms and Conditions | Terms and Conditions Input2Docs',
          description:
            'Terms and Conditions of input2docs',
          keywords: 'Terms and conditions Input2docs',
        };
      default:
        return {
          title: 'Input2Docs - Professional Letter, Resume, and Document Generator',
          description:
            'Create professional templates for letters, resumes, cover letters, and more at Input2Docs.',
          keywords: 'document generator, templates, resume maker, email creator',
        };
    }
  };

   // Check if the current route is a special page
   const isSpecialPage = location.pathname.startsWith('/letter') ||
   location.pathname.startsWith('/email') ||
   location.pathname.startsWith('/resume') ||
   location.pathname.startsWith('/cv') ||
   location.pathname.startsWith('/cover') ||
   location.pathname.startsWith('/contact-us') ||
   location.pathname.startsWith('/about-us') ||
   location.pathname.startsWith('/privacy-policy') ||
   location.pathname.startsWith('/terms-and-conditions');

// Get metadata for the page
const { title, description, keywords } = getPageMeta(location.pathname.substring(1));


  return (
    <div className="App">
      {/* Global SEO settings */}
      <Helmet>
      <meta name="robots" content="index, follow" />
        <meta name="author" content="Input2Docs Team" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Types of Letters',
            description: 'A comprehensive list of letter types provided by Input2Docs.',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'School Letters', url: 'https://input2docs.com/school-letters' },
              { '@type': 'ListItem', position: 2, name: 'Office Letters', url: 'https://input2docs.com/office-letters' },
              { '@type': 'ListItem', position: 3, name: 'Police Station Letters', url: 'https://input2docs.com/police-station-letters' },
              { '@type': 'ListItem', position: 4, name: 'Bank Letters', url: 'https://input2docs.com/bank-letters' },
              { '@type': 'ListItem', position: 5, name: 'Legal Letters', url: 'https://input2docs.com/legal-letters' },
              { '@type': 'ListItem', position: 6, name: 'Government Letters', url: 'https://input2docs.com/government-letters' },
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
            {/* End bar */}
      <Endbar />
        </main>
      )}

      {/* Routes for all pages */}
      <Routes>
        <Route
          path="/letter"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><Letter /></Suspense>}
        />
        <Route
          path="/email"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><Email /></Suspense>}
        />
        <Route
          path="/about-us"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><About /></Suspense>}
        />
        <Route
          path="/cover"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><CoverLetter /></Suspense>}
        />
        <Route
          path="/resume"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><Resume /></Suspense>}
        />
        <Route
          path="/cv"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><Cv /></Suspense>}
        />
        <Route
          path="/contact-us"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><Contact /></Suspense>}
        />
        <Route
          path="/privacy-policy"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><PrivacyPolicy /></Suspense>}
        />
        <Route
          path="/terms-and-conditions"
          element={<Suspense fallback={<div className="spinner">Loading...</div>}><TermsAndConditions /></Suspense>}
        />
      </Routes>

    
    </div>
  );
}

export default App;
