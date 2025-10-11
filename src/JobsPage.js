import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const JobsPage = () => {
    // State management for menus
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Form state (Simple controlled components for demonstration)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        portfolio: '',
        role: '',
        about: '',
    });

    // Refs for DOM elements
    const dropdownRef = useRef(null); // Ref to handle clicks outside the dropdown

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send formData to a backend API here.
        console.log("Job Application Submitted:", formData);
        
        // Simple success message (replace with a custom modal for production)
        console.log('Application success simulated. Use a custom modal in production.');
        
        // Reset form (Optional)
        setFormData({ name: '', email: '', phone: '', portfolio: '', role: '', about: '' });
    };

    // Data for services dropdown (Consistent with Home Page)
    const servicesLinks = [
        {
            name: 'Social Media Marketing',
            path: '/SocialMediaMarketing',
            description: 'Amplify your voice across social channels.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
        },
        {
            name: 'Personal Branding',
            path: '/PersonalBranding',
            description: 'Craft your unique professional identity.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        },
        {
            name: 'Search Engine Optimization',
            path: '/SearchEngineOptimization',
            description: 'Climb the ranks on search engines.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
        },
        {
            name: 'Performance Marketing',
            path: '/PerformanceMarketing',
            description: 'Drive measurable results and ROI.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
        },
        {
            name: 'Influence Marketing',
            path: '/InfluenceMarketing',
            description: 'Leverage creators for authentic reach.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
        }
    ];

    // useEffect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Data for footer social links (Consistent with Home Page)
    const socialLinksFooter = [
        { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>, href: 'https://www.facebook.com/profile.php?id=61561031900007' },
        { name: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>, href: 'https://www.instagram.com/affixxmedia/' },
        { name: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 18.01c-1.5 0-2.96-.4-4.22-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.23 8.24m4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12-.64.82-.79.98-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74s-.02-.38.11-.51c.11-.11.25-.29.37-.43s.16-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43h-.48c-.18 0-.47.06-.71.31s-.91.89-.91 2.16.93 2.5 1.06 2.68c.12.18 1.81 2.76 4.39 3.82.62.25 1.1.4 1.48.51.54.17.95.15 1.3.1.39-.06 1.47-.6 1.68-1.18s.21-1.07.15-1.18c-.06-.12-.23-.18-.48-.3z" /></svg>, href: 'https://wa.me/919363771010?text=Hi%20AffixxMedia%2C%20I%27d%20like%20to%20know%20more%20about%20your%20marketing%20services' },
        { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.556V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>, href: 'https://www.linkedin.com/company/affixxmedia/' },
        { name: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M21.582 7.243c-.24-.877-.91-1.545-1.79-1.784C18.25 5 12 5 12 5s-6.25 0-7.792.459c-.882.239-1.55.907-1.79 1.784C2 8.745 2 12 2 12s0 3.255.418 4.757c.24.877.908 1.545 1.79 1.784C5.75 19 12 19 12 19s6.25 0 7.792-.459c.882-.239 1.55-.907 1.79-1.784C22 15.255 22 12 22 12s0-3.255-.418-4.757zM9.75 15.115V8.885L15.445 12 9.75 15.115z" /></svg>, href: 'https://youtube.com/@affixxmedia?si=Ha_c7cy7UISl2Z4H' },
        { name: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/affixxmedia?s=21' },
    ];

    return (
        <div className="app">
            <style>
                {`
                    /* --- GILROY FONT DEFINITIONS (COPIED from Home Page) --- */
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Regular.ttf') format('truetype'); font-weight: 400; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-RegularItalic.ttf') format('truetype'); font-weight: 400; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Thin.ttf') format('truetype'); font-weight: 100; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-ThinItalic.ttf') format('truetype'); font-weight: 100; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-UltraLight.ttf') format('truetype'); font-weight: 200; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-UltraLightItalic.ttf') format('truetype'); font-weight: 200; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Light.ttf') format('truetype'); font-weight: 300; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-LightItalic.ttf') format('truetype'); font-weight: 300; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Medium.ttf') format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-MediumItalic.ttf') format('truetype'); font-weight: 500; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-SemiBold.ttf') format('truetype'); font-weight: 600; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-SemiBoldItalic.ttf') format('truetype'); font-weight: 600; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Bold.ttf') format('truetype'); font-weight: 700; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-BoldItalic.ttf') format('truetype'); font-weight: 700; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-ExtraBold.ttf') format('truetype'); font-weight: 800; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-ExtraBoldItalic.ttf') format('truetype'); font-weight: 800; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Black.ttf') format('truetype'); font-weight: 900; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-BlackItalic.ttf') format('truetype'); font-weight: 900; font-style: italic; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-Heavy.ttf') format('truetype'); font-weight: 900; font-style: normal; font-display: swap; }
                    @font-face { font-family: 'Gilroy'; src: url('/font/Gilroy-HeavyItalic.ttf') format('truetype'); font-weight: 900; font-style: italic; font-display: swap; }

                    /* --- GLOBAL STYLES --- */
                    :root {
                        --brand-primary: #25A4AD;
                        --brand-dark: #313131;
                        --brand-light: #FFFFFF;
                        --secondary-light-gray: #F8F8F8;
                        --divider-gray: #E5E7EB;
                    }
                    body {
                        margin: 0;
                        font-family: 'Gilroy', sans-serif;
                        font-weight: 400;
                        color: var(--brand-dark);
                        background-color: var(--brand-light);
                    }
                    .app { min-height: 100vh; display: flex; flex-direction: column; }

                    /* --- HEADER & NAV STYLES --- */
                    .header { position: relative; background-color: var(--brand-light); padding: 0.5rem 1.5rem; z-index: 50; }
                    .nav-container { display: flex; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
                    .logo { font-size: 1.5rem; font-weight: 700; color: var(--brand-primary); text-decoration: none; }
                    .nav-links-center { display: none; gap: 3rem; margin: 0 auto; transform: translateX(7rem); }
                    .nav-links-center a, .nav-contact-link, .services-dropdown-trigger {
                        text-decoration: none; color: var(--brand-dark); font-weight: 500; font-size: 18px; transition: color 0.3s ease;
                        padding: 0.5rem 0; background: none; border: none; font-family: inherit;
                    }
                    .nav-links-center a:hover, .nav-contact-link:hover, .services-dropdown-trigger:hover { color: var(--brand-primary); }
                    .nav-right { display: flex; align-items: center; margin-left: auto; }
                    .nav-contact-link { display: none; }
                    .mobile-menu-button-container { display: block; }
                    .mobile-menu-button { background: none; border: none; cursor: pointer; padding: 0.5rem; }
                    .hamburger-icon { width: 24px; height: 24px; color: var(--brand-dark); }
                    
                    /* Dropdown Menu Styles */
                    @keyframes slickFadeInUp {
                        from { opacity: 0; transform: translateY(-10px) scale(0.98); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    .services-dropdown-container { position: relative; display: inline-block; }
                    .services-dropdown-trigger { cursor: pointer; display: flex; align-items: center; gap: 0.25rem; }
                    .dropdown-menu {
                        position: absolute; top: calc(100% + 15px); left: 0; background-color: var(--brand-light);
                        border-radius: 12px; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05);
                        z-index: 1000; width: 320px; padding: 8px; list-style: none; border: 1px solid var(--divider-gray);
                        transform-origin: top center; animation: slickFadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .dropdown-menu::before {
                        content: ''; position: absolute; top: -6px; left: 35px; transform: translateX(-50%) rotate(45deg);
                        width: 10px; height: 10px; background-color: var(--brand-light); border-top: 1px solid var(--divider-gray);
                        border-left: 1px solid var(--divider-gray);
                    }
                    .dropdown-item {
                        display: flex; align-items: center; gap: 12px; padding: 10px; text-decoration: none;
                        border-radius: 8px; transition: background-color 0.2s ease, transform 0.2s ease;
                    }
                    .dropdown-item:hover { background-color: var(--secondary-light-gray); transform: translateX(4px); }
                    .dropdown-item-icon { flex-shrink: 0; width: 28px; height: 28px; color: var(--brand-primary); }
                    .dropdown-item-text h4 { font-size: 16px; font-weight: 600; color: var(--brand-dark); margin: 0 0 2px; }
                    .dropdown-item-text p { font-size: 13px; color: #6B7280; margin: 0; font-weight: 400; line-height: 1.4; }
                    .dropdown-divider { height: 1px; background-color: var(--divider-gray); margin: 6px 10px; }
                    
                    /* Mobile Menu Styles */
                    .nav-links-mobile { background-color: var(--brand-light); padding: 1rem; display: flex; flex-direction: column; text-align: center; }
                    .nav-links-mobile a { text-decoration: none; color: var(--brand-dark); font-size: 18px; padding: 0.75rem 0; border-bottom: 1px solid var(--secondary-light-gray); }
                    .mobile-services-list .services-title { font-weight: 600; color: var(--brand-dark); padding: 0.75rem 0; border-bottom: 1px solid var(--secondary-light-gray); font-size: 18px; }
                    .mobile-services-list .mobile-service-item { padding-left: 1.5rem; font-size: 16px; color: #555; }
                    main { flex-grow: 1; }
                    
                    /* --- JOBS PAGE STYLES --- */
                    .jobs-section {
                        padding: 3rem 1.5rem;
                        max-width: 900px;
                        margin: 0 auto;
                        line-height: 1.6;
                        width: 100%;
                        box-sizing: border-box; /* FIX: Prevents horizontal overflow */
                    }

                    .jobs-section h1 {
                        font-size: clamp(2.5rem, 6vw, 4.0625rem);
                        font-weight: 600;
                        color: var(--brand-primary);
                        margin: 0 0 1rem;
                    }
                    
                    .jobs-section .header-text {
                        font-size: 20px;
                        color: var(--brand-dark);
                        font-weight: 400;
                        margin-bottom: 3rem;
                        max-width: 800px;
                    }
                    
                    .jobs-section .heading-thin-black {
                        color: var(--brand-dark); 
                        font-weight: 300;
                    }
                    
                    /* Form Styles */
                    .application-form {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        padding-bottom: 3rem;
                    }
                    
                    .form-group {
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .form-group label {
                        font-size: clamp(18px, 4.5vw, 20px); 
                        font-weight: 600;
                        color: var(--brand-dark);
                        margin-bottom: 0.5rem;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }

                    .form-group .sub-label {
                        font-size: 14px;
                        font-weight: 400;
                        color: #6B7280;
                        margin-top: 0.25rem;
                        text-transform: none;
                        letter-spacing: normal;
                    }
                    
                    .form-group input,
                    .form-group textarea {
                        padding: 0.75rem 0;
                        font-size: clamp(16px, 4vw, 18px); 
                        border: none;
                        border-bottom: 2px solid var(--divider-gray);
                        background: transparent;
                        outline: none;
                        color: var(--brand-dark);
                        font-family: 'Gilroy', sans-serif;
                        transition: border-bottom-color 0.3s ease;
                        font-weight: 500;
                    }
                    
                    .form-group input:focus,
                    .form-group textarea:focus {
                        border-bottom-color: var(--brand-primary);
                    }
                    
                    .form-group textarea {
                        resize: vertical;
                        min-height: 80px;
                    }
                    
                    .submit-button {
                        align-self: flex-start;
                        font-weight: 700; 
                        font-size: 18px; 
                        padding: 1rem 2rem; 
                        background-color: var(--brand-primary); 
                        color: var(--brand-light); 
                        border-radius: 4px;
                        box-shadow: 0 4px 10px rgba(37, 164, 173, 0.4); 
                        border: none; 
                        cursor: pointer; 
                        transition: background-color 0.3s ease, box-shadow 0.3s ease; 
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        width: 150px;
                        text-align: center;
                    }
                    
                    .submit-button:hover { 
                        background-color: #1f8e97;
                        box-shadow: 0 6px 15px rgba(37, 164, 173, 0.6);
                    }

                    /* --- FOOTER STYLES (COPIED FROM HOME PAGE) --- */
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

                    @media (min-width: 768px) {
                        .mobile-menu-button-container, .nav-links-mobile { display: none; }
                        .nav-links-center { display: flex; align-items: center; }
                        .nav-contact-link { display: block; }
                        .footer-container { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
                    }
                `}
            </style>
            
            <header className="header">
                <nav className="nav-container">
                    <Link to="/AffixMedia" className="logo">AffixxMedia</Link>
                    <div className="nav-links-center">
                        <Link to="/AffixMedia">Home</Link>
                        
                        <div className="services-dropdown-container" ref={dropdownRef}>
                            <button
                                className="services-dropdown-trigger"
                                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                            >
                                Services
                            </button>
                            {isServicesDropdownOpen && (
                                <div className="dropdown-menu">
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
                                </div>
                            )}
                        </div>

                        <Link to="/WorksPage">Works</Link>
                        <a href="/BlogPage">Blogs</a>
                        <Link to="/JobsPage">Jobs</Link>
                    </div>
                    <div className="nav-right">
                        <a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" className="nav-contact-link">Contact</a>
                        <div className="mobile-menu-button-container">
                            <button onClick={toggleMobileMenu} className="mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                {isMobileMenuOpen && (
                    <div className="nav-links-mobile">
                        <Link to="/AffixMedia" onClick={toggleMobileMenu}>Home</Link>
                        <div className="mobile-services-list">
                            <div className="services-title">Services</div>
                            {servicesLinks.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.path}
                                    className="mobile-service-item"
                                    onClick={toggleMobileMenu}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <Link to="/WorksPage" onClick={toggleMobileMenu}>Works</Link>
                        <a href="/BlogPage" onClick={toggleMobileMenu}>Blogs</a>
                        <Link to="/JobsPage" onClick={toggleMobileMenu}>Jobs</Link>
                        <a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Contact</a>
                    </div>
                )}
            </header>

            <main className="main-content">
                <section className="jobs-section">
                    <h1>
                        <span>Join</span> <span className="heading-thin-black">Our</span> <span>Team</span>
                    </h1>
                    <p className="header-text">
                        At AffixxMedia, degrees come second. What matters most is creativity, curiosity, smart thinking, and a strong work ethic. If you're someone who loves exploring new ideas and making them real, we want you on our team.
                    </p>

                    <form className="application-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">NAME*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">PHONE NUMBER*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="portfolio">PORTFOLIO OR LINKEDIN</label>
                            <input
                                type="url"
                                id="portfolio"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleFormChange}
                                required
                            />
                            <span className="sub-label">(No Google Drive links)*</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">ROLE YOU ARE APPLYING FOR*</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="about">TELL US ABOUT YOURSELF</label>
                            <textarea
                                id="about"
                                name="about"
                                value={formData.about}
                                onChange={handleFormChange}
                                required
                            />
                            <span className="sub-label">(Short intro or why you want to work with us)*</span>
                        </div>
                        
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </section>
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
                            {/* MODIFICATION: Changed to a Link that points to the homepage's services section */}
                            <li><Link to="/AffixMedia#services">Services</Link></li>
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
                                <a key={link.name} href={link.href} aria-label={link.name}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>&nbsp;</h4>
                        <ul>
                            <li><Link to="/PrivacyPolicyPage">Privacy Policy</Link></li>
                            <li><Link to="/TermsAndConditionsPage">Terms & Conditions</Link></li>
                            <li><Link to="/sitemap">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2025 AffixxMedia. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default JobsPage;