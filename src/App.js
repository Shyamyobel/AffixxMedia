import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HomePage from './HomePage';
import JobsPage from './JobsPage';
import SmmPage from './SmmPage';
import PbPage from './PbPage';
import SeoPage from './SeoPage';
import PmPage from './PmPage';
import ImPage from './ImPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsAndConditionsPage from './TermsAndConditionsPage';
import BlogPage from './BlogPage';
import WorksPage from './WorksPage';
const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/AffixMedia" element={<HomePage />} />
                <Route path="/JobsPage" element={<JobsPage />} />
                <Route path="/SocialMediaMarketing" element={<SmmPage />} />
                <Route path="/PersonalBranding" element={<PbPage />} />
                <Route path="/SearchEngineOptimization" element={<SeoPage />} />
                <Route path="/PerformanceMarketing" element={<PmPage />} />
                <Route path="/InfluenceMarketing" element={<ImPage />} />
                <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
                <Route path="/TermsAndConditionsPage" element={<TermsAndConditionsPage />} />
                <Route path="/BlogPage" element={<BlogPage />} />
                <Route path="/WorksPage" element={<WorksPage />} />
            </Routes>
        </Router>
    );
};

export default App;
