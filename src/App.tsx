/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ConsultationModal } from './components/ConsultationModal';
import { FindMyPathModal } from './components/FindMyPathModal';

import { HomePage } from './pages/HomePage';
import { StudyAbroadPage } from './pages/StudyAbroadPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { CreditManagementPage } from './pages/CreditManagementPage';
import { EngineeringITPage } from './pages/EngineeringITPage';
import { BusinessAccaPage } from './pages/BusinessAccaPage';
import { EventsPage } from './pages/EventsPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('united-kingdom');
  
  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPathway, setConsultationPathway] = useState<string>('');
  const [consultationDestination, setConsultationDestination] = useState<string>('');
  const [isFindMyPathOpen, setIsFindMyPathOpen] = useState(false);

  // Sync hash with page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('destination/')) {
        const destId = hash.replace('destination/', '');
        setSelectedDestinationId(destId);
        setCurrentPage('destination-detail');
      } else if (
        [
          'home',
          'study-abroad',
          'credit-management',
          'engineering-it',
          'business-acca',
          'events',
          'success-stories',
          'about',
          'contact',
        ].includes(hash)
      ) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, extraId?: string) => {
    setCurrentPage(page);
    if (page === 'destination-detail' && extraId) {
      setSelectedDestinationId(extraId);
      window.location.hash = `destination/${extraId}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultation = (pathwayId?: string, destId?: string) => {
    setConsultationPathway(pathwayId || '');
    setConsultationDestination(destId || '');
    setIsConsultationOpen(true);
  };

  const openFindMyPath = () => {
    setIsFindMyPathOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-[#d71920] selection:text-white relative overflow-x-hidden">
      {/* Ambient subtle warm & cool atmospheric glows */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] glow-orb-red pointer-events-none z-0 blur-3xl opacity-25" />
      <div className="fixed bottom-1/3 left-0 w-[500px] h-[500px] glow-orb-blue pointer-events-none z-0 blur-3xl opacity-20" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] glow-orb-red pointer-events-none z-0 blur-3xl opacity-15" />

      {/* Top Floating Pill Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => openConsultation()}
        onOpenFindMyPath={openFindMyPath}
      />

      {/* Main Content Area */}
      <main className={`flex-1 relative z-10 ${currentPage !== 'home' ? 'pt-20 sm:pt-24' : ''}`}>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
            onOpenFindMyPath={openFindMyPath}
          />
        )}

        {currentPage === 'study-abroad' && (
          <StudyAbroadPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'destination-detail' && (
          <DestinationDetailPage
            destinationId={selectedDestinationId}
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'credit-management' && (
          <CreditManagementPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'engineering-it' && (
          <EngineeringITPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'business-acca' && (
          <BusinessAccaPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'events' && (
          <EventsPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'success-stories' && (
          <SuccessStoriesPage
            onNavigate={navigateTo}
            onOpenConsultation={openConsultation}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => openConsultation()}
            onOpenFindMyPath={openFindMyPath}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => openConsultation()}
        onOpenFindMyPath={openFindMyPath}
      />

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloating />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedPathway={consultationPathway}
        preselectedDestination={consultationDestination}
      />

      {/* Interactive Find My Path Diagnostic Wizard */}
      <FindMyPathModal
        isOpen={isFindMyPathOpen}
        onClose={() => setIsFindMyPathOpen(false)}
        onNavigate={navigateTo}
        onOpenConsultation={openConsultation}
      />
    </div>
  );
}
