import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
    // --- STATE MANAGEMENT ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [activeValueIndex, setActiveValueIndex] = useState(0);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeHeroIndex, setActiveHeroIndex] = useState(0); // State for cycling hero text

    // --- REFS ---
    const coreValuesRef = useRef(null);
    const [isCoreValuesVisible, setIsCoreValuesVisible] = useState(false);
    const dropdownTimerRef = useRef(null);

    // --- ANIMATION VARIANTS ---
    const staggerContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const fadeInUp = {
        hidden: { y: 60, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
    };
    
    const fadeInLeft = {
        hidden: { x: -80, opacity: 0, rotate: -3 },
        show: { x: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] } },
    };

    const fadeInRight = {
        hidden: { x: 80, opacity: 0, rotate: 3 },
        show: { x: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] } },
    };
    
    // For the hero title word-by-word animation
    const heroTitleVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
            },
        },
    };
    const letterVariant = {
        hidden: { opacity: 0, y: '100%' },
        show: { opacity: 1, y: '0%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    // Stagger container for the new services grid
    const servicesGridStagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // --- DATA ---
    const heroContent = [
        { title: "Brand Promise", subtitle: "Strategic clarity. Creative impact. Real results." },
        { title: "Teamwork", subtitle: "When you reach out, we’re ready to roll. We don’t wait, we act." }
    ];

    const servicesLinks = [
        { name: 'Social Media Marketing', path: '/SocialMediaMarketing', description: 'Amplify your voice across social channels.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg> },
        { name: 'Personal Branding', path: '/PersonalBranding', description: 'Craft your unique professional identity.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> },
        { name: 'Search Engine Optimization', path: '/SearchEngineOptimization', description: 'Climb the ranks on search engines.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg> },
        { name: 'Performance Marketing', path: '/PerformanceMarketing', description: 'Drive measurable results and ROI.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg> },
        { name: 'Influencer Marketing', path: '/InfluenceMarketing', description: 'Leverage creators for authentic reach.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg> }
    ];
    const socialLinksFooter = [
        { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>, href: 'https://www.facebook.com/profile.php?id=61561031900007' },
        { name: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>, href: 'https://www.instagram.com/affixxmedia/' },
        { name: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 18.01c-1.5 0-2.96-.4-4.22-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.23 8.24m4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12-.64.82-.79.98-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74s-.02-.38.11-.51c.11-.11.25-.29.37-.43s.16-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43h-.48c-.18 0-.47.06-.71.31s-.91.89-.91 2.16.93 2.5 1.06 2.68c.12.18 1.81 2.76 4.39 3.82.62.25 1.1.4 1.48.51.54.17.95.15 1.3.1.39-.06 1.47-.6 1.68-1.18s.21-1.07.15-1.18c-.06-.12-.23-.18-.48-.3z" /></svg>, href: 'https://wa.me/919363771010?text=Hi%20AffixxMedia%2C%20I%27d%20like%20to%20know%20more%20about%20your%20marketing%20services' },
        { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.556V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>, href: 'https://www.linkedin.com/company/affixxmedia/' },
        { name: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M21.582 7.243c-.24-.877-.91-1.545-1.79-1.784C18.25 5 12 5 12 5s-6.25 0-7.792.459c-.882-.239-1.55-.907-1.79 1.784C2 8.745 2 12 2 12s0 3.255.418 4.757c.24.877.908 1.545 1.79 1.784C5.75 19 12 19 12 19s6.25 0 7.792-.459c.882-.239 1.55-.907 1.79-1.784C22 15.255 22 12 22 12s0-3.255-.418-4.757zM9.75 15.115V8.885L15.445 12 9.75 15.115z" /></svg>, href: 'https://youtube.com/@affixxmedia?si=Ha_c7cy7UISl2Z4H' },
        { name: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/affixxmedia?s=21' },
    ];
    
    // --- EVENT HANDLERS ---
    const toggleMobileMenu = () => {
        const nextState = !isMobileMenuOpen;
        setIsMobileMenuOpen(nextState);
        if (!nextState) {
            setIsMobileServicesOpen(false);
        }
    };
    const handleMouseEnter = () => {
        clearTimeout(dropdownTimerRef.current);
        setIsServicesDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        dropdownTimerRef.current = setTimeout(() => {
            setIsServicesDropdownOpen(false);
        }, 200);
    };

    // --- USEEFFECT HOOKS ---
    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 2500); // Extended for a smoother reveal
        return () => clearTimeout(timer);
    }, []);

    // Hero text cycling
    useEffect(() => {
        if (isLoading) return;
        const heroInterval = setInterval(() => {
            setActiveHeroIndex(prev => (prev + 1) % heroContent.length);
        }, 5000);
        return () => clearInterval(heroInterval);
    }, [isLoading, heroContent.length]);
    
    // Observer for triggering auto-cycling core values
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsCoreValuesVisible(entry.isIntersecting),
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );
        if (coreValuesRef.current) observer.observe(coreValuesRef.current);
        return () => {
            if (coreValuesRef.current) observer.unobserve(coreValuesRef.current);
        };
    }, []);

    // Auto-cycling core values logic
    useEffect(() => {
        if (!isCoreValuesVisible) return;
        const intervalId = setInterval(() => {
            setActiveValueIndex(prevIndex => (prevIndex + 1) % 6);
        }, 3500);
        return () => clearInterval(intervalId);
    }, [isCoreValuesVisible]);

    // Scrolling active core value card into view
    useEffect(() => {
        if (coreValuesRef.current && isCoreValuesVisible) {
            const activeCard = coreValuesRef.current.querySelector(`.value-card:nth-child(${activeValueIndex + 1})`);
            if (activeCard) {
                activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeValueIndex, isCoreValuesVisible]);
    
    // Body scroll lock for mobile menu or preloader
    useEffect(() => {
        if (isMobileMenuOpen || isLoading) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMobileMenuOpen, isLoading]);

    return (
        <div className="app">
            <style>
                {`
                    /* --- FONT DEFINITIONS --- */
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Regular.ttf') format('truetype'); font-weight: 400; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Medium.ttf') format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-SemiBold.ttf') format('truetype'); font-weight: 600; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Bold.ttf') format('truetype'); font-weight: 700; font-style: normal; font-display: swap; }
                    /* --- GLOBAL STYLES --- */
                    :root { --brand-primary: #25A4AD; --brand-dark: #313131; --brand-light: #FFFFFF; --secondary-light-gray: #F8F8F8; --divider-gray: #E5E7EB; }
                    html { scroll-behavior: smooth; }
                    body { margin: 0; font-family: 'Gilroy', sans-serif; font-weight: 400; color: var(--brand-dark); background-color: var(--brand-light); }
                    .app { min-height: 100vh; display: flex; flex-direction: column; }
                    .no-scroll { overflow: hidden; }
                    
                    /* --- ENHANCED PRELOADER STYLES --- */
                    .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; z-index: 9999; }
                    .loader-panel { width: 100%; height: 100%; background-color: var(--brand-dark); display: flex; justify-content: center; align-items: center; }
                    .loader-text { color: var(--brand-primary); font-size: 2rem; font-weight: 700; }

                    /* --- HEADER & NAV --- */
                    .header { position: relative; background-color: var(--brand-light); padding: 0.5rem 1.5rem; z-index: 50; }
                    .nav-container { display: flex; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
                    .logo { font-size: 1.5rem; font-weight: 700; color: var(--brand-primary); text-decoration: none; }
                    .nav-links-center { display: none; gap: 3rem; margin: 0 auto; transform: translateX(7rem); }
                    .nav-links-center a, .nav-contact-link, .services-dropdown-trigger { text-decoration: none; color: var(--brand-dark); font-weight: 500; font-size: 18px; transition: color 0.3s ease; padding: 0.5rem 0; background: none; border: none; font-family: inherit; cursor: pointer; }
                    .nav-links-center a:hover, .nav-contact-link:hover, .services-dropdown-trigger:hover { color: var(--brand-primary); }
                    .nav-right { display: flex; align-items: center; margin-left: auto; }
                    .nav-contact-link { display: none; }
                    .mobile-menu-button { background: none; border: none; cursor: pointer; padding: 0.5rem; }
                    .hamburger-icon { width: 24px; height: 24px; color: var(--brand-dark); }
                    
                    /* --- ENHANCED DROPDOWN STYLES --- */
                    .services-dropdown-container { position: relative; display: inline-block; }
                    .services-dropdown-trigger { display: flex; align-items: center; gap: 0.25rem; }
                    .dropdown-menu { position: absolute; top: calc(100% + 15px); left: 0; background-color: var(--brand-light); border-radius: 12px; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05); z-index: 1000; width: 320px; padding: 8px; list-style: none; border: 1px solid var(--divider-gray); }
                    .dropdown-menu::before { content: ''; position: absolute; top: -6px; left: 35px; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; background-color: var(--brand-light); border-top: 1px solid var(--divider-gray); border-left: 1px solid var(--divider-gray); }
                    .dropdown-item { display: flex; align-items: center; gap: 12px; padding: 10px; text-decoration: none; border-radius: 8px; transition: background-color 0.2s ease, transform 0.2s ease; }
                    .dropdown-item:hover { background-color: var(--secondary-light-gray); transform: translateX(4px); }
                    .dropdown-item-icon { flex-shrink: 0; width: 28px; height: 28px; color: var(--brand-primary); }
                    .dropdown-item-text h4 { font-size: 16px; font-weight: 600; color: var(--brand-dark); margin: 0 0 2px; }
                    .dropdown-item-text p { font-size: 13px; color: #6B7280; margin: 0; font-weight: 400; line-height: 1.4; }
                    .dropdown-divider { height: 1px; background-color: var(--divider-gray); margin: 6px 10px; }
                    
                    /* --- MOBILE MENU STYLES --- */
                    .mobile-menu-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 60; }
                    .mobile-menu-panel { position: fixed; top: 0; right: 0; width: 85%; max-width: 350px; height: 100%; background-color: var(--brand-light); box-shadow: -5px 0 15px rgba(0,0,0,0.1); z-index: 70; display: flex; flex-direction: column; }
                    .mobile-menu-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--divider-gray); }
                    .mobile-menu-header .logo { font-size: 1.25rem; }
                    .close-menu-button { background: none; border: none; padding: 0.5rem; cursor: pointer; }
                    .close-icon { width: 28px; height: 28px; color: var(--brand-dark); }
                    .mobile-nav-links { padding: 1rem 1.5rem; list-style: none; margin: 0; flex-grow: 1; overflow-y: auto; }
                    .mobile-nav-links a { display: block; text-decoration: none; color: var(--brand-dark); font-size: 1.1rem; font-weight: 500; padding: 1rem 0.5rem; border-radius: 6px; transition: background-color 0.2s ease, color 0.2s ease; }
                    .mobile-nav-links a:hover { background-color: var(--secondary-light-gray); color: var(--brand-primary); }
                    .mobile-services-toggle { display: flex; justify-content: space-between; align-items: center; width: 100%; font-size: 1.1rem; font-weight: 500; padding: 1rem 0.5rem; background: none; border: none; text-align: left; font-family: inherit; color: var(--brand-dark); cursor: pointer; }
                    .chevron-icon { width: 16px; height: 16px; transition: transform 0.3s ease; }
                    .chevron-icon.open { transform: rotate(180deg); }
                    .mobile-submenu { list-style: none; padding-left: 1.5rem; margin: 0; max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; }
                    .mobile-submenu.open { max-height: 500px; }
                    .mobile-submenu a { font-size: 1rem; font-weight: 400; color: #4B5563; padding-top: 0.75rem; padding-bottom: 0.75rem; }
                    .mobile-menu-footer { padding: 1.5rem; margin-top: auto; border-top: 1px solid var(--divider-gray); }
                    .mobile-contact-button { display: block; width: 100%; padding: 0.75rem 1.5rem; background-color: var(--brand-primary); color: var(--brand-light); text-align: center; text-decoration: none; border-radius: 9999px; font-weight: 600; transition: opacity 0.3s ease; }
                    .mobile-contact-button:hover { opacity: 0.9; }
                    
                    /* --- PAGE CONTENT STYLES --- */
                    main { flex-grow: 1; }
                    h2, h3, h4 { color: var(--brand-dark); font-weight: 600; }
                    p { font-weight: 400; }
                    .logo, .hero-text h2, .connecting-text h3, .services-section h2, .about-content h2, .core-values-section h2 { color: var(--brand-primary); }
                    .heading-thin-black { color: var(--brand-dark); font-weight: 300; }
                    .hero-section { padding-top: 1rem; max-width: 100%; margin: 0 auto; }
                    .hero-content { display: flex; flex-direction: column; justify-content: flex-start; align-items: center; max-width: 1280px; margin: 0 auto; position: relative; min-height: 550px; background-image: url('/Affexmedia icons/Landing page girl.png'); background-repeat: no-repeat; margin-bottom: 1rem; background-size: 90% auto; background-position: center bottom; padding: 0 1.5rem; }
                    .hero-text { text-align: center; z-index: 10; padding: 1rem; width: 90%; align-self: center; height: 150px; } /* Set fixed height for cycle animation */
                    .hero-text h2 { font-weight: 600; font-size: clamp(2rem, 7vw, 3rem); margin-bottom: 0.5rem; }
                    .hero-text p { font-weight: 500; font-size: clamp(1rem, 4vw, 1.5rem); color: var(--brand-dark); }
                    .connecting-text-container { position: relative; text-align: center; background-color: var(--secondary-light-gray); width: 100%; }
                    .connecting-text { padding: 4rem 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; max-width: 1280px; margin: 0 auto; }
                    .connecting-text h3 { font-weight: 600; font-size: clamp(2rem, 10vw, 4.375rem); margin: 0; }
                    .about-section { padding: 3rem 0; max-width: 100%; margin: 3rem auto; }
                    .about-content { text-align: center; max-width: 100%; margin: 0; padding: 0 1.5rem; }
                    .about-content h2, .core-values-section h2, .services-section h2 { font-size: clamp(2.5rem, 8vw, 4.0625rem); }
                    .about-content p { font-size: 24px; line-height: 1.6; max-width: 65rem; margin: 1.5rem auto 0; }
                    .about-divider { height: 2px; background-color: #cccccc; margin: 2.5rem auto 0; max-width: 65rem; }
                    .mission-vision-section { padding: 4rem 1.5rem; max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 5rem; overflow: hidden; }
                    .mission-block, .vision-block { display: flex; align-items: center; gap: 2rem; width: 100%; }
                    .mission-block .text-content { text-align: left; }
                    .vision-block .text-content { text-align: right; }
                    .mission-block h3, .vision-block h3 { font-size: 48px; font-weight: 600; color: #0097A7; margin: 0 0 0.75rem 0; }
                    .mission-block p, .vision-block p { font-size: 20px; line-height: 1.6; color: var(--brand-dark); margin: 0; }
                    .quote-icon { flex-shrink: 0; width: 60px; height: 60px; stroke: #0097A7; fill: none; }
                    .quote-close { transform: scaleX(-1); }
                    .core-values-section { padding: 3rem 0; background-color: var(--secondary-light-gray); width: 100%; text-align: center; overflow: hidden; }
                    .core-values-section h2 { margin-bottom: 3rem; }
                    .values-row-container { overflow-x: scroll; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding-bottom: 1rem; scrollbar-width: none; -ms-overflow-style: none; }
                    .values-row-container::-webkit-scrollbar { display: none; }
                    .values-row { display: flex; gap: 1.5rem; padding: 0 10%; justify-content: flex-start; }
                    .value-card { flex-shrink: 0; width: 80%; height: 250px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 1.5rem; background-color: var(--brand-light); border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 2px solid transparent; scroll-snap-align: center; transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease; }
                    .value-card:hover { transform: translateY(-5px); box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15); }
                    .value-card.active { border-color: var(--brand-primary); }
                    .value-card h4 { font-size: 24px; font-weight: 600; margin-bottom: 0.5rem; }
                    .value-card.active h4 { color: var(--brand-primary); }
                    .value-card p { font-size: 16px; }
                    
                    /* --- NEW SERVICES SECTION STYLES --- */
                    .services-section { padding: 3rem 1.5rem; max-width: 1280px; margin: 0 auto; text-align: center; }
                    .services-section h2 { margin-bottom: 3rem; }
                    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }
                    .service-card { display: flex; flex-direction: column; text-align: left; padding: 2rem; background-color: var(--brand-light); border: 1px solid var(--divider-gray); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-decoration: none; color: inherit; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
                    .service-card:hover { transform: translateY(-8px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-color: var(--brand-primary); }
                    .service-card-icon { color: var(--brand-primary); width: 40px; height: 40px; margin-bottom: 1.5rem; }
                    .service-card h4 { font-size: 20px; font-weight: 600; margin-bottom: 0.5rem; color: var(--brand-dark); }
                    .service-card p { font-size: 16px; line-height: 1.6; color: #6B7280; margin: 0; }

                    .get-quote-button { font-weight: 700; font-size: 18px; padding: 1rem 2rem; background-color: var(--brand-primary); color: var(--brand-light); border-radius: 9999px; box-shadow: 0 10px 15px rgba(37, 164, 173, 0.2); border: none; cursor: pointer; text-decoration: none; display: inline-block; transition: transform 0.2s ease, box-shadow 0.2s ease; }
                    .get-quote-button:hover { transform: translateY(-2px); box-shadow: 0 12px 20px rgba(37, 164, 173, 0.3); }

                    /* --- FOOTER --- */
                    .footer { background-color: #1a1a1a; background-image: linear-gradient(to top left, rgba(255, 255, 255, 0.05) 49.9%, transparent 50%), linear-gradient(to bottom right, rgba(255, 255, 255, 0.03) 49.9%, transparent 50%); color: #EAEAEA; padding: 4rem 1.5rem 1.5rem; margin-top: auto; font-size: 14px; font-weight: 300; }
                    .footer-container { max-width: 1280px; margin: 0 auto; display: grid; gap: 2rem; grid-template-columns: 1fr; }
                    .footer-column .footer-logo-img { width: 120px; height: auto; margin-bottom: 1rem; }
                    .footer-column h4 { font-weight: 700; font-size: 16px; margin-bottom: 1.5rem; color: var(--brand-light); }
                    .footer-column p { margin: 0.9rem 0; }
                    .footer-column ul { list-style: none; padding: 0; margin: 0; }
                    .footer-column li { margin-bottom: 1.2rem; }
                    .footer a { color: inherit; text-decoration: none; transition: color 0.3s ease; }
                    .footer a:hover { color: var(--brand-primary); }
                    .footer-social-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; font-size: 24px; }
                    .footer-copyright { text-align: center; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 12px; color: #A0A0A0; }
                    
                    /* --- DESKTOP & TABLET OVERRIDES --- */
                    @media (min-width: 768px) {
                        .mobile-menu-button-container { display: none; }
                        .nav-links-center { display: flex; align-items: center; }
                        .nav-contact-link { display: block; }
                        .hero-content { flex-direction: row; justify-content: flex-start; align-items: center; min-height: 600px; background-size: contain; background-position: right center; }
                        .hero-text { text-align: left; max-width: 40%; width: auto; align-self: center; margin-left: 10%; padding: 2rem; height: auto; }
                        .hero-text h2 { font-size: clamp(2.5rem, 8vw, 4.0625rem); }
                        .hero-text p { font-size: 28px; }
                        .values-row { justify-content: center; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
                        .value-card { width: 250px; }
                        .mission-vision-section { gap: 2rem; }
                        .mission-block { max-width: 65%; align-self: flex-start; }
                        .vision-block { max-width: 65%; align-self: flex-end; }
                        .footer-container { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
                    }
                    @media (min-width: 1024px) {
                        .hero-content { min-height: 700px; }
                        .values-row-container { max-width: none; }
                        .values-row { justify-content: flex-start; }
                        .value-card { min-width: 300px; width: 300px; }
                        .services-grid { grid-template-columns: repeat(3, 1fr); }
                    }
                `}
            </style>
            
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="preloader"
                        key="preloader"
                        initial={{ opacity: 1 }}
                        exit={{}} // Exit handled by children
                    >
                        <motion.div
                            className="loader-panel"
                            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.4 } }}
                        />
                        <motion.div
                            className="loader-panel"
                            initial={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                            animate={{ opacity: [0, 1, 1, 0], transition: { duration: 2.2, times: [0, 0.2, 0.8, 1] } }}
                        >
                            <h1 className="loader-text">AffixxMedia</h1>
                        </motion.div>
                        <motion.div
                            className="loader-panel"
                            exit={{ y: '100%', transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.4 } }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            
            {!isLoading && (
            <>
            <header className="header">
                <nav className="nav-container">
                    <Link to="/AffixMedia" className="logo">AffixxMedia</Link>
                    <div className="nav-links-center">
                        <motion.div whileHover={{ y: -2 }}><Link to="/AffixMedia">Home</Link></motion.div>
                        <div 
                            className="services-dropdown-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <motion.button whileHover={{ y: -2 }} className="services-dropdown-trigger">Services</motion.button>
                            <AnimatePresence>
                            {isServicesDropdownOpen && (
                                <motion.div 
                                    className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }}
                                >
                                    {servicesLinks.map((service, index) => (
                                        <React.Fragment key={service.name}>
                                            <Link
                                                to={service.path}
                                                className="dropdown-item"
                                                onClick={() => setIsServicesDropdownOpen(false)}
                                            >
                                                <div className="dropdown-item-icon">{service.icon}</div>
                                                <div className="dropdown-item-text">
                                                    <h4>{service.name}</h4>
                                                    <p>{service.description}</p>
                                                </div>
                                            </Link>
                                            {index < servicesLinks.length - 1 && <div className="dropdown-divider"></div>}
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                        <motion.div whileHover={{ y: -2 }}><Link to="/WorksPage">Works</Link></motion.div>
                        <motion.div whileHover={{ y: -2 }}><a href="/BlogPage">Blogs</a></motion.div>
                        <motion.div whileHover={{ y: -2 }}><Link to="/JobsPage">Jobs</Link></motion.div>
                    </div>
                    <div className="nav-right">
                        <motion.a whileHover={{ y: -2, scale: 1.05 }} href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" className="nav-contact-link">Contact</motion.a>
                        <div className="mobile-menu-button-container">
                            <button onClick={toggleMobileMenu} className="mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="mobile-menu-backdrop" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMobileMenu}
                    >
                        <motion.div 
                            className="mobile-menu-panel" 
                            initial={{ x: '100%' }}
                            animate={{ x: '0%' }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-menu-header">
                                <Link to="/AffixMedia" className="logo" onClick={toggleMobileMenu}>AffixxMedia</Link>
                                <button onClick={toggleMobileMenu} className="close-menu-button" aria-label="Close menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul className="mobile-nav-links">
                                <li><Link to="/AffixMedia" onClick={toggleMobileMenu}>Home</Link></li>
                                <li>
                                    <button className="mobile-services-toggle" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}>
                                        <span>Services</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`chevron-icon ${isMobileServicesOpen ? 'open' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <ul className={`mobile-submenu ${isMobileServicesOpen ? 'open' : ''}`}>
                                        {servicesLinks.map(service => (
                                            <li key={service.name}><Link to={service.path} onClick={toggleMobileMenu}>{service.name}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                                <li><Link to="/WorksPage" onClick={toggleMobileMenu}>Works</Link></li>
                                <li><a href="/BlogPage" onClick={toggleMobileMenu}>Blogs</a></li>
                                <li><Link to="/JobsPage" onClick={toggleMobileMenu}>Jobs</Link></li>
                            </ul>
                            <div className="mobile-menu-footer">
                                <a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" className="mobile-contact-button" onClick={toggleMobileMenu}>Contact</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
            </header>

            <main className="main-content">
                <section id="home" className="hero-section">
                    <div className="hero-content">
                        <div className="hero-text">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeHeroIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
                                    exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }}
                                >
                                    <motion.h2 variants={heroTitleVariants} initial="hidden" animate="show">
                                        {heroContent[activeHeroIndex].title.split(" ").map((word, index) => (
                                            <motion.span key={index} style={{ display: 'inline-block', marginRight: '0.5rem', overflow: 'hidden' }}>
                                                <motion.span variants={letterVariant} style={{ display: 'inline-block' }}>{word}</motion.span>
                                            </motion.span>
                                        ))}
                                    </motion.h2>
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
                                        {heroContent[activeHeroIndex].subtitle}
                                    </motion.p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <motion.div 
                        className="connecting-text-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="connecting-text">
                            <h3>CONNECTING B2C!</h3>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/WorksPage" className="get-quote-button">See What We’ve Done</Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
                <motion.section 
                    id="about" 
                    className="about-section"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <div className="about-content">
                        <motion.h2 variants={fadeInUp}>
                            <span>About </span>
                            <span className="heading-thin-black">Us</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp}>
                            At AffixxMedia, our core philosophy is simple: marketing should create measurable <br />
                            business change. That’s why we don’t just take on clients. We partner with businesses <br />
                            where our work can make a meaningful difference. Whether generating leads, increasing <br />
                            sales, or building long-term brand value, we deliver strategies built for results, not just <br />
                            activity.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="about-divider"></motion.div>
                    </div>
                </motion.section>

                <section id="mission-vision" className="mission-vision-section">
                    <motion.div 
                        className="mission-block"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInLeft}
                    >
                        <svg width="64" height="52" viewBox="0 0 64 52" fill="none" className="quote-icon" stroke="currentColor" strokeWidth="2">
                            <path d="M2 50 L28 50 L28 22 C28 10, 18 2, 2 22 Z" />
                            <path d="M36 50 L62 50 L62 22 C62 10, 52 2, 36 22 Z" />
                        </svg>
                        <div className="text-content">
                            <h3>Mission</h3>
                            <p>
                                To empower brands by creating meaningful digital connections between
                                businesses and consumers, driving growth, engagement, and lasting
                                relationships through innovative and impactful strategies.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="vision-block"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInRight}
                    >
                        <div className="text-content">
                            <h3>Vision</h3>
                            <p>
                                To be the most trusted and innovative digital partner for brands,
                                transforming their online presence into powerful engines of influence,
                                connection, and success across the globe.
                            </p>
                        </div>
                        <svg width="64" height="52" viewBox="0 0 64 52" fill="none" className="quote-icon quote-close" stroke="currentColor" strokeWidth="2">
                            <path d="M2 50 L28 50 L28 22 C28 10, 18 2, 2 22 Z" />
                            <path d="M36 50 L62 50 L62 22 C62 10, 52 2, 36 22 Z" />
                        </svg>
                    </motion.div>
                </section>
                
                <section id="core-values" className="core-values-section">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <span className="heading-thin-black">Our </span>
                        <span>Core Values</span>
                    </motion.h2>
                    <motion.div 
                        ref={coreValuesRef} 
                        className="values-row-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="values-row">
                            <div className={`value-card ${activeValueIndex === 0 ? 'active' : ''}`}><h4>Collaboration Wins</h4><p>We believe anyone can succeed with the right team, and we strive to be that team for every client.</p></div>
                            <div className={`value-card ${activeValueIndex === 1 ? 'active' : ''}`}><h4>Integrity in Value</h4><p>We welcome negotiation in strategies, never in the value we deliver.</p></div>
                            <div className={`value-card ${activeValueIndex === 2 ? 'active' : ''}`}><h4>Mutual Understanding</h4><p>We understand our clients and help them clearly understand the process, goals, and results.</p></div>
                            <div className={`value-card ${activeValueIndex === 3 ? 'active' : ''}`}><h4>Creative Clarity</h4><p>We combine bold ideas with strategic focus — because creativity without purpose is just noise.</p></div>
                            <div className={`value-card ${activeValueIndex === 4 ? 'active' : ''}`}><h4>Results Matter</h4><p>Our success is measured by the impact we create for our clients, not by vanity metrics.</p></div>
                            <div className={`value-card ${activeValueIndex === 5 ? 'active' : ''}`}><h4>Transparency Always</h4><p>We believe in open communication, honest feedback, and earning trust through every interaction.</p></div>
                        </div>
                    </motion.div>
                </section>
                <motion.section 
                    id="services" 
                    className="services-section"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp}>Our Services</motion.h2>
                    <motion.div className="services-grid" variants={servicesGridStagger}>
                        {servicesLinks.map((service) => (
                            <motion.div key={service.name} variants={fadeInUp}>
                                <Link to={service.path} className="service-card">
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h4>{service.name}</h4>
                                    <p>{service.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" className="get-quote-button">GET QUOTE</a>
                    </motion.div>
                </motion.section>
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <img src="/Affexmedia icons/logo-png.png" alt="AffixxMedia Logo" className="footer-logo-img" />
                        <p>+91 93637 71010</p>
                        <p>affixxmedia@gmail.com</p>
                        <p>Working hours: 9:00 am to 6:00 pm</p>
                    </div>
                    <div className="footer-column">
                        <h4>Quicklinks</h4>
                        <ul>
                            <li><Link to="/AffixMedia">Home</Link></li>
                            <li><a href="#services">Services</a></li>
                            <li><Link to="/WorksPage">Works</Link></li>
                            <li><a href="/BlogPage">Blogs</a></li>
                            <li><Link to="/JobsPage">Jobs</Link></li>
                            <li><a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <div className="footer-social-links">
                            {socialLinksFooter.map((link) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    aria-label={link.name} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>&nbsp;</h4>
                        <ul>
                            <li><Link to="/PrivacyPolicyPage">Privacy Policy</Link></li>
                            <li><Link to="/TermsAndConditionsPage">Terms & Conditions</Link></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2025 AffixxMedia. All rights reserved.
                </div>
            </footer>
            </>
            )}
        </div>
    );
};

export default HomePage;