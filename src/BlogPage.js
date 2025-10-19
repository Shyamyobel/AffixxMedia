import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// NEW: Import the motion component and AnimatePresence for animations
import { motion, AnimatePresence } from 'framer-motion';

// --- FULL BLOG CONTENT & DATA (Unchanged) ---
const blogPosts = [
    { 
        id: 1, 
        category: 'Social Media', 
        title: 'Social Media Marketing: The 2025 Game-Changer for Businesses & Careers', 
        summary: 'Social media in 2025 is no longer about simple brand visibility — it’s about community, storytelling, and measurable impact. ', 
        fullContent: `
            <p><strong>The New Wave of Social Media in 2025</strong></p>
            <p>Social media in 2025 is no longer about simple brand visibility — it’s about community, storytelling, and measurable impact. Platforms like Instagram Reels, YouTube Shorts, and LinkedIn thought-leadership posts dominate digital conversations. But the biggest trend today is AI-powered content personalization. Brands can now deliver hyper-relevant videos, ads, and posts to audiences based on behavior, interests, and even mood. Short-form content, live sessions, and interactive polls are gaining massive traction because they keep users engaged for longer.</p>
            <p>This means businesses must evolve from random posting to strategic, value-driven storytelling. Consumers no longer tolerate spammy promotions — they want authentic voices, consistent content, and meaningful interaction.</p>
            
            <p><strong>Why Businesses Can’t Ignore Social Media</strong></p>
            <p>For businesses, ignoring social media in 2025 is like closing your shop in the busiest market. A strong online presence builds trust, visibility, and revenue growth. With ad costs increasing, companies that rely solely on paid ads risk overspending. Instead, organic strategies like influencer collaborations, behind-the-scenes content, and reels showcasing customer stories help businesses stay relevant and cost-efficient.</p>
            <p>Recent studies show businesses investing in social media marketing achieve 3x faster customer acquisition than those relying only on traditional advertising. Social media not only drives leads but also builds brand loyalty. Customers are more likely to buy from a brand they see, engage with, and trust online.</p>
            
            <p><strong>A Fast-Growing Career Path for Individuals</strong></p>
            <p>For individuals, social media marketing is one of the fastest-growing career paths in digital marketing. Startups, corporates, and even personal brands are hiring experts who can create viral content, run paid ad campaigns, track analytics, and build strong online communities.</p>
            <p>Career opportunities range from social media managers, ad strategists, content creators, influencer marketing managers, and performance marketers. With the rise of freelance and remote work, professionals can also build independent careers by managing accounts for multiple businesses. Salaries in this field are competitive, with top specialists earning six-figure incomes and beyond.</p>
            
            <p><strong>Future Outlook: Where It’s Heading</strong></p>
            <p>Looking ahead, social media is set to merge with AI, AR, and e-commerce. Features like virtual product try-ons, AI-powered chatbots, and in-app purchases will transform how customers interact with brands. Professionals who master these tools will remain ahead of the curve.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Whether you’re a business owner looking to scale or a professional exploring a rewarding career, social media marketing is where the future lies. Those who adapt early and invest in strategy, skills, and innovation will win big.</p>
        `
    },
    { 
        id: 2, 
        category: 'Social Media', 
        title: 'Why Social Media Is the Modern Business Lifeline', 
        summary: 'In today’s world, customers don’t just buy products — they connect with brands emotionally. Social media communities play a vital role in building long-term customer relationships and loyalty.', 
        fullContent: `
            <p><strong>The Power of Online Communities</strong></p>
            <p>In today’s world, customers don’t just buy products — they connect with brands emotionally. Social media communities, whether on Instagram, LinkedIn, or Facebook, play a vital role in building long-term customer relationships. These platforms allow brands to showcase authenticity through behind-the-scenes videos, live Q&A sessions, and user-generated content.</p>
            <p>Online communities drive trust and loyalty, which are essential in a highly competitive market. A brand that engages consistently with its audience enjoys repeat purchases and stronger customer advocacy compared to one that treats social media as just an ad channel.</p>
            
            <p><strong>Social Media as a Revenue Engine</strong></p>
            <p>Social media isn’t just about likes and followers anymore — it’s a direct revenue engine. From targeted ads on Meta to product tags on Instagram and creator collaborations on TikTok, businesses now generate substantial revenue from these platforms.</p>
            <p>Short-form video is proving to be the most powerful format for conversions, with Instagram Reels and YouTube Shorts often outperforming traditional ads. Businesses using these strategies not only build awareness but also create consistent sales funnels. Studies show that over 55% of consumers discover new brands on social media before making a purchase.</p>
            
            <p><strong>A Promising Career for Creators</strong></p>
            <p>For individuals, this creates enormous career potential. Social media marketing offers diverse roles — from content creation, ad management, data analysis, to influencer campaign coordination. Young professionals with creative skills and analytical minds can quickly climb the career ladder.</p>
            <p>Additionally, the rise of the creator economy has opened up opportunities for people to monetize their own influence. Freelancers, micro-influencers, and niche content creators are thriving by collaborating with brands and offering specialized services.</p>
            
            <p><strong>Emerging Trends to Watch</strong></p>
            <p>The future of social media will be shaped by AI, AR filters, personalized video marketing, and shopping inside apps. Professionals and businesses who embrace these trends early will gain a competitive advantage.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Social media is no longer just a marketing tool — it’s a lifeline for businesses and a career goldmine for individuals. Those who learn, adapt, and act now will stay ahead in 2025 and beyond.</p>
        `
    },
    { 
        id: 3, 
        category: 'Personal Branding', 
        title: 'Personal Branding: Turning Founders Into Industry Leaders', 
        summary: 'People connect with people before they connect with brands. Learn how personal branding humanizes a company and builds authority, attracting investors and top talent.', 
        fullContent: `
            <p><strong>Why Personal Branding Matters in 2025</strong></p>
            <p>In today’s digital-first world, people connect with people before they connect with brands. This is why personal branding is more powerful than ever in 2025. Consumers want to know the face, story, and values behind a business. When founders and experts share insights through LinkedIn articles, Instagram Reels, or YouTube Shorts, they don’t just build visibility — they build authority and credibility.</p>
            <p>Unlike traditional advertising, which often feels impersonal, personal branding humanizes a company. It allows leaders to show expertise, share values, and inspire trust — qualities that drive long-term success.</p>
            
            <p><strong>The Business Benefits of a Strong Personal Brand</strong></p>
            <p>For businesses, personal branding is not just an option — it’s a growth multiplier. A strong personal brand attracts investors, clients, and even top talent. When a founder positions themselves as an industry thought leader, it elevates the business’s reputation, leading to higher sales, stronger partnerships, and increased media exposure.</p>
            <p>For example, a startup founder who actively shares insights on LinkedIn may attract collaboration offers and speaking engagements, while also driving organic inbound leads for their company. In fact, research shows that businesses with visible founders enjoy 78% higher trust levels compared to faceless brands.</p>
            
            <p><strong>Personal Branding as a Career Path</strong></p>
            <p>The growing demand for personal branding has created a thriving career field for professionals. Entrepreneurs, executives, and professionals all seek help in shaping their digital identity. This opens doors for content strategists, video editors, branding coaches, copywriters, and social media managers who specialize in personal branding.</p>
            <p>For individuals entering this field, the rewards are significant. Personal branding specialists often enjoy flexible working models, the chance to collaborate with inspiring leaders, and high-value projects that pay well.</p>
            
            <p><strong>Future Outlook: The Evolution of Personal Branding</strong></p>
            <p>The next wave of personal branding will integrate AI tools, storytelling-driven content, and AR/VR experiences. Leaders who use podcasts, interactive videos, and live sessions will stand out. At the same time, professionals who master these skills will be in high demand globally.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>In 2025 and beyond, personal branding is the shortcut to influence, trust, and growth. For businesses, it’s a revenue driver. For professionals, it’s a career with limitless opportunities.</p>
        `
    },
    { 
        id: 4, 
        category: 'Personal Branding', 
        title: 'How Personal Branding Drives Both Business & Careers', 
        summary: 'A major trend in 2025 is the rise of founder-led content. A well-established personal brand generates organic inbound leads and acts as a career accelerator.', 
        fullContent: `
            <p><strong>The Rise of Founder-Led Content</strong></p>
            <p>A major trend in 2025 is the rise of founder-led content. Audiences want to hear directly from the people running a business, not just polished corporate posts. Whether it’s a CEO sharing leadership lessons on LinkedIn or a startup founder posting Instagram Reels about their journey, this type of content builds authenticity and relatability.</p>
            <p>Founder-led content humanizes the brand, allowing potential customers to connect on a deeper level. This emotional connection is often the deciding factor when choosing between two similar businesses.</p>
            
            <p><strong>ROI of Personal Branding for Businesses</strong></p>
            <p>The return on investment (ROI) for personal branding is significant. A well-established personal brand generates organic inbound leads. Instead of chasing clients, opportunities flow naturally to founders who position themselves as trusted authorities.</p>
            <p>This also extends to recruitment — employees are more likely to join a company where the leadership is visible, respected, and inspiring. In competitive industries, personal branding is often the differentiator that helps businesses stand out.</p>
            
            <p><strong>A Growing Field for New Professionals</strong></p>
            <p>As businesses realize the importance of personal branding, there is a rising demand for skilled professionals who can help leaders craft their image. Roles include content writers, social media specialists, PR consultants, branding strategists, and video creators.</p>
            <p>This career path is particularly attractive to young professionals because it combines creativity, strategy, and impact. Not only can they help leaders grow, but they can also build their own brand in the process, opening doors for freelancing or consulting opportunities.</p>
            
            <p><strong>Emerging Trends in Personal Branding</strong></p>
            <p>Looking ahead, personal branding will rely heavily on authentic storytelling and digital-first platforms. Podcasts, live sessions, and AI-enhanced video creation tools will dominate. Leaders who embrace transparency and consistency will see the strongest growth.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Personal branding is both a business growth engine and a career accelerator. In 2025, those who invest in building a personal brand — or helping others create one — are setting themselves up for long-term success.</p>
        `
    },
    { 
        id: 5, 
        category: 'SEO', 
        title: 'SEO in 2025: The Key to Sustainable Business Growth', 
        summary: 'SEO remains the foundation of digital visibility. Businesses that rank high enjoy consistent organic traffic, better brand authority, and long-term visibility without paying for every click.', 
        fullContent: `
            <p><strong>Why SEO Still Matters</strong></p>
            <p>In 2025, SEO remains the foundation of digital visibility. Even with the rise of social media and paid ads, over 70% of online experiences still begin with a search engine. Businesses that rank high on Google enjoy consistent organic traffic, better brand authority, and long-term visibility without paying for every click.</p>
            <p>Unlike ads, which stop the moment you stop spending, SEO provides evergreen results. Once your website is optimized and ranking, it continues to generate traffic and leads, giving you compounding returns. This makes SEO one of the most cost-effective marketing strategies.</p>
            
            <p><strong>SEO as a Revenue Channel</strong></p>
            <p>Businesses that treat SEO as an investment, not a cost, see massive ROI. Ranking for high-intent keywords allows companies to attract customers who are actively searching for their products or services. These leads are warmer and more likely to convert, making SEO one of the highest-quality lead-generation channels.</p>
            <p>For example, a local restaurant optimized for “best Italian food near me” can bring in consistent footfall, while an e-commerce brand ranking for “buy running shoes online” can build a steady sales funnel. In fact, research shows businesses leveraging SEO generate 3x more leads than those that rely only on outbound marketing.</p>
            
            <p><strong>Careers in SEO Are Booming</strong></p>
            <p>The demand for SEO professionals is skyrocketing. Companies of all sizes — from startups to Fortune 500 brands — need experts to optimize websites, create content, and analyze search trends. Career opportunities range from SEO analysts, content strategists, and link-building specialists to technical SEO experts.</p>
            <p>What makes SEO even more attractive is its global demand. With remote work on the rise, SEO professionals can work with clients worldwide, making it a career that offers flexibility, high income potential, and stability.</p>
            
            <p><strong>The Future of SEO</strong></p>
            <p>SEO is evolving with AI-powered search, voice queries, and personalized search experiences. Google’s algorithms are smarter, focusing more on user experience, relevance, and authority. Businesses and professionals who adapt to trends like voice search optimization, video SEO, and AI content tools will stay ahead of the curve.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>SEO in 2025 is not just about ranking higher — it’s about building sustainable growth, credibility, and long-term revenue. For businesses, it’s an essential marketing channel. For professionals, it’s a career path with immense potential.</p>
        `
    },
    { 
        id: 6, 
        category: 'SEO', 
        title: 'From Visibility to Profit: The Power of SEO', 
        summary: 'When your business appears on the first page of Google, it’s not just visibility — it’s credibility. SEO provides compounding, profitable returns over time.', 
        fullContent: `
            <p><strong>Ranking Equals Trust</strong></p>
            <p>When your business appears on the first page of Google, it’s not just visibility — it’s credibility. Customers naturally trust brands that rank high because they associate visibility with authority. This trust often translates into higher click-through rates, conversions, and sales.</p>
            <p>For small and medium businesses, SEO levels the playing field. Even with limited budgets, a well-optimized website can compete with bigger players by targeting niche keywords and local search terms.</p>
            
            <p><strong>The ROI of SEO for Businesses</strong></p>
            <p>Unlike ads that demand constant investment, SEO is a long-term asset. The work you put in today — from optimizing content to building backlinks — continues to deliver results for months or even years. Businesses that consistently invest in SEO enjoy steady streams of leads without the rising costs associated with paid ads.</p>
            <p>A study by HubSpot revealed that inbound leads from SEO cost 61% less than outbound leads like cold calls or print ads. This proves why SEO is one of the most profitable marketing channels for businesses.</p>
            
            <p><strong>A Career Path With Global Demand</strong></p>
            <p>For individuals, SEO offers a future-proof career. The roles available are diverse:</p>
            <ul>
                <li>On-page SEO specialists focusing on keyword strategy and content.</li>
                <li>Technical SEO experts handling site speed, indexing, and structure.</li>
                <li>Link-building strategists improving domain authority.</li>
                <li>SEO analysts tracking performance and making data-driven adjustments.</li>
            </ul>
            <p>With businesses worldwide investing in SEO, professionals can work remotely, freelance, or join agencies. The freedom to work globally makes SEO a career that is both flexible and lucrative.</p>
            
            <p><strong>The Future of SEO Trends</strong></p>
            <p>SEO in 2025 is shaped by voice search, AI-driven results, and mobile-first indexing. More people are using voice assistants like Siri and Alexa to search, making conversational keyword optimization critical. At the same time, user experience (UX) and high-quality content remain non-negotiable.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>From visibility to profit, SEO remains the engine of digital success. For businesses, it creates sustainable growth. For professionals, it’s a high-demand skill offering career stability and freedom.</p>
        `
    },
    { 
        id: 7, 
        category: 'Performance Marketing', 
        title: 'Performance Marketing in 2025 – Where Every Click Counts', 
        summary: 'Performance marketing focuses on measurable outcomes: clicks, leads, and conversions. It’s the strategy that ensures budgets are invested in what truly drives growth and ROI.', 
        fullContent: `
            <p><strong>Results That Speak for Themselves</strong></p>
            <p>Performance marketing has transformed the digital advertising world by focusing on measurable outcomes. Instead of vague promises about brand awareness, businesses in 2025 can see exactly what they’re paying for: clicks, leads, and conversions. This results-first approach ensures marketing budgets aren’t wasted on guesswork but invested in what truly drives growth.</p>
            <p>For businesses, this transparency builds confidence. Whether it’s an e-commerce brand tracking purchases or a service company measuring lead generation, performance marketing shows the ROI in black and white. In a world where competition is fierce, accountability is the real differentiator.</p>
            
            <p><strong>The ROI of Performance Marketing for Businesses</strong></p>
            <p>The power of performance marketing lies in its efficiency. Unlike traditional ads that burn through budgets without guarantees, performance campaigns work on models like Cost Per Click (CPC), Cost Per Lead (CPL), and Cost Per Acquisition (CPA). This means businesses only pay when a desired action occurs.</p>
            <p>The ROI can be game-changing. A startup with a limited budget can still scale quickly by running targeted Google Ads or Meta Ads that directly connect with buyers ready to act. For SMEs and enterprises, it ensures marketing investments generate consistent, predictable results. In fact, businesses that master performance marketing often achieve 5x–10x returns on ad spend (ROAS).</p>
            
            <p><strong>Career Opportunities in Performance Marketing</strong></p>
            <p>For individuals, performance marketing offers one of the hottest career paths of the decade. Every business needs specialists who can manage paid campaigns, analyze data, and optimize strategies.</p>
            <p>Careers include roles like Paid Ads Manager, PPC Specialist, Performance Marketing Analyst, Growth Marketer, and CRO (Conversion Rate Optimization) Expert. With AI-driven tools taking over repetitive tasks, the most in-demand professionals are those who combine creativity with data-driven decision-making. Freelancers and consultants also find huge opportunities here, since many companies outsource campaign management to experts.</p>
            
            <p><strong>The Future of Performance Marketing Trends</strong></p>
            <p>Performance marketing in 2025 is increasingly shaped by AI automation, predictive analytics, and omnichannel campaigns. Platforms are smarter than ever, using machine learning to decide who sees what ad, at what time, and on what device. Meanwhile, integrating campaigns across search, social, and display ensures a seamless user journey from awareness to purchase.</p>
            <p>Another rising trend is performance partnerships — collaborations where influencers, affiliates, or publishers are paid only when they deliver tangible results. This “pay-for-performance” model reduces risks for businesses while expanding opportunities for marketers.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Performance marketing is no longer just a strategy — it’s the foundation of profitable digital growth. For businesses, it offers clarity, efficiency, and scalability. For professionals, it provides a results-driven career with global demand.</p>
            <p>In 2025, where every click counts, those who master performance marketing will lead the race — and those who ignore it risk falling behind.</p>
        `
    },
    { 
        id: 8, 
        category: 'Influencer Marketing', 
        title: 'Influencer Marketing in 2025 – The Trust Economy', 
        summary: 'Consumers want recommendations from people they trust. Influencer marketing bridges the gap between brand and customer, tapping into loyal, engaged communities.', 
        fullContent: `
            <p><strong>Trust is the New Currency</strong></p>
            <p>In 2025, consumers don’t just want ads — they want recommendations from people they trust. That’s where influencer marketing shines. When a creator genuinely promotes a product, their followers see it as advice from a friend, not a sales pitch. This trust-based approach is why influencer campaigns often outperform traditional advertising.</p>
            <p>For businesses, influencer marketing bridges the gap between brand and customer. A skincare brand working with beauty influencers or a SaaS tool promoted by LinkedIn thought leaders instantly taps into loyal, engaged communities.</p>
            
            <p><strong>The ROI of Influencer Marketing for Businesses</strong></p>
            <p>Unlike broad campaigns that spray and pray, influencer marketing targets niche audiences with precision. Whether it’s micro-influencers with 10,000 loyal fans or macro-creators with millions, businesses pay for real impact. Studies show that businesses earn $5.20 on average for every $1 spent on influencer campaigns, proving it’s one of the highest ROI marketing strategies.</p>
            <p>For startups with small budgets, collaborating with micro-influencers can generate authentic buzz without overspending. For established brands, influencer tie-ups amplify reach, boost conversions, and create long-term brand advocates.</p>
            
            <p><strong>Career Opportunities in Influencer Marketing</strong></p>
            <p>Influencer marketing has created entire career ecosystems. Beyond being an influencer yourself, roles like Influencer Manager, Campaign Strategist, Talent Coordinator, and Brand Partnership Specialist are in high demand.</p>
            <p>Agencies and brands alike need professionals who can identify the right influencers, negotiate deals, track campaign performance, and ensure ROI. On the creator side, individuals with niche knowledge or unique storytelling skills can turn their personal brand into a lucrative career.</p>
            
            <p><strong>Future Trends in Influencer Marketing</strong></p>
            <p>2025 is seeing the rise of AI-driven influencer discovery, making it easier for brands to find creators whose audiences match their exact target profiles. Authenticity is also taking center stage — audiences are quick to spot scripted promotions, so genuine storytelling wins.</p>
            <p>Another major trend is the growth of nano and micro-influencers. While celebrity endorsements still exist, smaller creators with highly engaged communities are delivering better ROI. Live shopping streams, collaborative content, and influencer-led communities are shaping the next wave.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Influencer marketing is more than a trend — it’s the foundation of modern brand trust. For businesses, it creates authentic customer connections. For individuals, it offers endless career paths and creator opportunities.</p>
            <p>In today’s trust economy, influencers don’t just sell products — they shape decisions.</p>
        `
    },
    { 
        id: 9, 
        category: 'Influencer Marketing', 
        title: 'From Followers to Fortune – How Influencer Marketing Drives Growth', 
        summary: 'Influencer marketing is central to how businesses connect with audiences. Learn how influence translates into measurable sales and long-term credibility.', 
        fullContent: `
            <p><strong>Influence Equals Impact</strong></p>
            <p>Social media has given rise to a new kind of power: influence. In 2025, creators are not just entertainers; they’re powerful brand partners shaping consumer behavior. When influencers speak, audiences listen — and take action. That influence is priceless for brands looking to cut through the noise.</p>
            <p>For businesses, partnering with the right influencers means instant access to highly engaged audiences. It’s not about the size of the following anymore, but about engagement, trust, and community loyalty.</p>
            
            <p><strong>The ROI of Influencer Marketing for Businesses</strong></p>
            <p>What sets influencer marketing apart is its measurable impact on sales. Brands can track clicks, conversions, and sales directly from influencer campaigns. This makes it a performance-driven strategy that blends awareness with direct results.</p>
            <p>For example, an influencer-led Instagram Reel showcasing a product can generate thousands of sales in hours. Similarly, B2B influencers on LinkedIn can drive high-value leads for tech companies. The ROI isn’t just financial — it’s also in long-term credibility and customer loyalty.</p>
            
            <p><strong>Career Opportunities in Influencer Marketing</strong></p>
            <p>The career landscape here is thriving. Besides influencer roles, professionals are building careers as Influencer Marketing Specialists, Talent Agents, PR Strategists, Content Collaborators, and Analytics Experts. With the industry projected to cross $30 billion globally in the next few years, opportunities are limitless.</p>
            <p>Even freelancers are cashing in — helping small businesses run influencer campaigns or managing creator-brand collaborations. And for those who love storytelling, becoming an influencer yourself can be a career path with financial independence and creative freedom.</p>
            
            <p><strong>Future Trends in Influencer Marketing</strong></p>
            <p>The future is all about authenticity, community, and commerce. Live shopping events, affiliate partnerships, and long-term brand-influencer relationships are dominating 2025. AI is also changing the space by predicting campaign success and measuring audience sentiment in real time.</p>
            <p>We’re also seeing the rise of creator-driven products — influencers launching their own brands and turning audiences into loyal customer bases. Businesses that collaborate with such creators are not just buying promotions; they’re buying into entire ecosystems of trust.</p>
            
            <p><strong>Final Takeaway</strong></p>
            <p>Influencer marketing is no longer a side strategy — it’s central to how businesses connect with audiences in 2025. For companies, it drives visibility, sales, and credibility. For individuals, it’s a pathway to build influence, income, and independence.</p>
            <p>The future belongs to those who can turn followers into fortune — and influencer marketing is the bridge that makes it possible.</p>
        `
    },
];

const categories = ['All', 'Social Media', 'Personal Branding', 'SEO', 'Performance Marketing', 'Influencer Marketing'];

// --- BLOG CARD COMPONENT WITH FRAMER MOTION ---
const BlogCard = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    // REMOVED: Intersection Observer useEffect is no longer needed

    const toggleExpand = () => setIsExpanded(prev => !prev);
    
    // NEW: Animation variants for the card itself
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            layout // This is the magic prop for animating layout changes
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`blog-card ${isExpanded ? 'expanded' : ''}`}
        >
            <div className="card-header" style={{ backgroundColor: 'var(--brand-primary)' }}>
                <span className="card-category">{post.category}</span>
            </div>
            <div className="card-body">
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
                
                {/* NEW: Framer Motion AnimatePresence for smooth expand/collapse */}
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: 'auto', marginTop: '1.5rem' },
                                collapsed: { opacity: 0, height: 0, marginTop: '0' }
                            }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="full-content-container"
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: post.fullContent }}
                                className="full-content"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <motion.button
                    onClick={toggleExpand}
                    className="read-more-button"
                    whileHover={{ color: '#1f8e97' }}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
                </motion.button>
            </div>
        </motion.div>
    );
};


// --- MAIN BLOG PAGE COMPONENT ---
const BlogPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const dropdownTimerRef = useRef(null);

    // NEW: Animation variants for staggered containers
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

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

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMobileMenuOpen]);

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
             name: 'Influencer Marketing',
             path: '/InfluenceMarketing',
             description: 'Leverage creators for authentic reach.',
			icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            	<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L18 12.75l-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5L15 12l-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12.75l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 12.75l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12.75L6.75 12l-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 15l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 15l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 17.25l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 18l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25l-1.5-1.5-1.5 1.5" stroke="none" />
            	<path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.5-1.5-1.5 1.5" stroke="none" />
        	</svg>
         }
    ];
    
    const socialLinksFooter = [
        { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>, href: 'https://www.facebook.com/profile.php?id=61561031900007' },
        { name: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>, href: 'https://www.instagram.com/affixxmedia/' },
        { name: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 18.01c-1.5 0-2.96-.4-4.22-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.23 8.24m4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12-.64.82-.79.98-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74s-.02-.38.11-.51c.11-.11.25-.29.37-.43s.16-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43h-.48c-.18 0-.47.06-.71.31s-.91.89-.91 2.16.93 2.5 1.06 2.68c.12.18 1.81 2.76 4.39 3.82.62.25 1.1.4 1.48.51.54.17.95.15 1.3.1.39-.06 1.47-.6 1.68-1.18s.21-1.07.15-1.18c-.06-.12-.23-.18-.48-.3z" /></svg>, href: 'https://wa.me/919363771010?text=Hi%20AffixxMedia%2C%20I%27d%20like%20to%20know%20more%20about%20your%20marketing%20services' },
        { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.556V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>, href: 'https://www.linkedin.com/company/affixxmedia/' },
        { name: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M21.582 7.243c-.24-.877-.91-1.545-1.79-1.784C18.25 5 12 5 12 5s-6.25 0-7.792.459c-.882.239-1.55-.907-1.79 1.784C2 8.745 2 12 2 12s0 3.255.418 4.757c.24.877.908 1.545 1.79 1.784C5.75 19 12 19 12 19s6.25 0 7.792-.459c.882.239-1.55-.907-1.79-1.784C22 15.255 22 12 22 12s0-3.255-.418-4.757zM9.75 15.115V8.885L15.445 12 9.75 15.115z" /></svg>, href: 'https://youtube.com/@affixxmedia?si=Ha_c7cy7UISl2Z4H' },
        { name: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/affixxmedia?s=21' },
    ];


    return (
        <div className="app">
            <style>
                {`
                    /* --- ALL FONT DEFINITIONS (Unchanged) --- */
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

                    /* --- GLOBAL & HEADER/NAV/FOOTER STYLES (Unchanged) --- */
                    :root { --brand-primary: #25A4AD; --brand-dark: #313131; --brand-light: #FFFFFF; --secondary-light-gray: #F8F8F8; --divider-gray: #E5E7EB; }
                    body { margin: 0; font-family: 'Gilroy', sans-serif; font-weight: 400; color: var(--brand-dark); background-color: var(--brand-light); }
                    .app { min-height: 100vh; display: flex; flex-direction: column; }
                    .no-scroll { overflow: hidden; }
                    .header { position: relative; background-color: var(--brand-light); padding: 0.5rem 1.5rem; z-index: 50; }
                    .nav-container { display: flex; align-items: center; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
                    .logo { font-size: 1.5rem; font-weight: 700; color: var(--brand-primary); text-decoration: none; }
                    .nav-links-center { display: none; gap: 3rem; margin: 0 auto; transform: translateX(7rem); }
                    .nav-links-center a, .nav-contact-link, .services-dropdown-trigger { text-decoration: none; color: var(--brand-dark); font-weight: 500; font-size: 18px; transition: color 0.3s ease; padding: 0.5rem 0; background: none; border: none; font-family: inherit; }
                    .nav-links-center a:hover, .nav-contact-link:hover, .services-dropdown-trigger:hover { color: var(--brand-primary); }
                    .nav-right { display: flex; align-items: center; margin-left: auto; }
                    .nav-contact-link { display: none; }
                    .mobile-menu-button-container { display: block; }
                    .mobile-menu-button { background: none; border: none; cursor: pointer; padding: 0.5rem; }
                    .hamburger-icon { width: 24px; height: 24px; color: var(--brand-dark); }
                    @keyframes slickFadeInUp { from { opacity: 0; transform: translateY(-10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                    .services-dropdown-container { position: relative; display: inline-block; }
                    .services-dropdown-trigger { cursor: pointer; display: flex; align-items: center; gap: 0.25rem; }
                    .dropdown-menu { position: absolute; top: calc(100% + 15px); left: 0; background-color: var(--brand-light); border-radius: 12px; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05); z-index: 1000; width: 320px; padding: 8px; list-style: none; border: 1px solid var(--divider-gray); transform-origin: top center; }
                    .dropdown-item { display: flex; align-items: center; gap: 12px; padding: 10px; text-decoration: none; border-radius: 8px; transition: background-color 0.2s ease, transform 0.2s ease; }
                    .dropdown-item:hover { background-color: var(--secondary-light-gray); transform: translateX(4px); }
                    .dropdown-item-icon { flex-shrink: 0; width: 28px; height: 28px; color: var(--brand-primary); }
                    .dropdown-item-text h4 { font-size: 16px; font-weight: 600; color: var(--brand-dark); margin: 0 0 2px; }
                    .dropdown-item-text p { font-size: 13px; color: #6B7280; margin: 0; font-weight: 400; line-height: 1.4; }
                    .dropdown-divider { height: 1px; background-color: var(--divider-gray); margin: 6px 10px; }
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

                    /* --- BLOG SPECIFIC STYLES (Unchanged) --- */
                    main { flex-grow: 1; }
                    .blog-hero { padding: 3rem 1.5rem 2rem; max-width: 1280px; margin: 0 auto; text-align: center; }
                    .blog-hero h1 { font-size: clamp(3rem, 8vw, 5rem); font-weight: 800; color: var(--brand-dark); margin: 0 0 0.5rem; line-height: 1.1; }
                    .blog-hero h1 span { color: var(--brand-primary); }
                    .blog-hero p { font-size: clamp(18px, 4vw, 24px); font-weight: 300; max-width: 700px; margin: 0 auto 3rem; }
                    .filter-bar { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding: 1rem 1.5rem; max-width: 1280px; margin: 0 auto 3rem; border-bottom: 2px solid var(--secondary-light-gray); }
                    .filter-button { background-color: var(--secondary-light-gray); color: var(--brand-dark); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 16px; font-weight: 500; border: 2px solid transparent; cursor: pointer; transition: background-color 0.3s, color 0.3s, border-color 0.3s, transform 0.2s; }
                    /* REMOVED: Hover state now handled by Framer Motion */
                    .filter-button.active { background-color: var(--brand-primary); color: var(--brand-light); border-color: var(--brand-primary); font-weight: 600; box-shadow: 0 4px 8px rgba(37, 164, 173, 0.3); }
                    .blog-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; max-width: 1280px; padding: 0 1.5rem 5rem; margin: 0 auto; }
                    .blog-card { text-decoration: none; display: flex; flex-direction: column; background-color: var(--brand-light); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); border: 1px solid var(--divider-gray); }
                    /* REMOVED: Hover styles handled by motion component */
                    .card-header { padding: 0.75rem 1rem; color: var(--brand-light); display: flex; justify-content: flex-start; font-weight: 600; font-size: 14px; }
                    .card-category { padding: 2px 8px; border-radius: 4px; background-color: var(--brand-primary); }
                    .card-body { padding: 1.5rem 1.25rem; display: flex; flex-direction: column; .card-body}
                    .card-body h4 { font-size: 20px; font-weight: 700; color: var(--brand-dark); margin: 0 0 0.5rem; line-height: 1.4; }
                    .card-body p { font-size: 16px; color: #6B7280; margin-bottom: 1.5rem; line-height: 1.5; }
                    .full-content-container { overflow: hidden; /* Important for framer motion height: auto */ border-top: 1px solid var(--divider-gray); }
                    .full-content-container p { margin-top: 0.75rem; margin-bottom: 0.75rem; font-size: 16px; }
                    .full-content-container strong { color: var(--brand-primary); font-weight: 700; display: block; margin-top: 1.5rem; }
                    .read-more-button { align-self: flex-start; background: none; border: none; cursor: pointer; font-size: 16px; font-weight: 600; color: var(--brand-primary); padding: 0.5rem 0; margin-top: auto; }
                    
                    /* Media Queries (Unchanged) */
                    @media (min-width: 768px) {
                        .mobile-menu-button-container { display: none; }
                        .nav-links-center { display: flex; align-items: center; }
                        .nav-contact-link { display: block; }
                        .blog-grid { grid-template-columns: repeat(2, 1fr); }
                        .footer-container { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
                    }
                    @media (min-width: 1024px) {
                        .blog-grid { grid-template-columns: repeat(3, 1fr); }
                    }
                `}
            </style>
            
            <header className="header">
                {/* --- HEADER JSX (Unchanged but with motion enhancements) --- */}
                <nav className="nav-container">
                    <Link to="/AffixMedia" className="logo">AffixxMedia</Link>
                    <div className="nav-links-center">
                        <motion.div whileHover={{ y: -2 }}><Link to="/AffixMedia">Home</Link></motion.div>
                        <div className="services-dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <motion.button whileHover={{ y: -2 }} className="services-dropdown-trigger">Services</motion.button>
                            <AnimatePresence>
                                {isServicesDropdownOpen && (
                                    <motion.div 
                                        className="dropdown-menu"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {servicesLinks.map((service, index) => (
                                            <React.Fragment key={service.name}>
                                                <Link to={service.path} className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
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
                        <motion.div whileHover={{ y: -2 }}><Link to="/BlogPage">Blogs</Link></motion.div>
                        <motion.div whileHover={{ y: -2 }}><Link to="/JobsPage">Jobs</Link></motion.div>
                    </div>
                    <div className="nav-right">
                         <motion.a whileHover={{ y: -2 }} href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer" className="nav-contact-link">Contact</motion.a>
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
                        <motion.div className="mobile-menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMobileMenu}>
                            <motion.div className="mobile-menu-panel" initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()}>
                                {/* Mobile Menu Content (Unchanged) */}
                                <div className="mobile-menu-header">
                                    <Link to="/AffixMedia" className="logo" onClick={toggleMobileMenu}>AffixxMedia</Link>
                                    <button onClick={toggleMobileMenu} className="close-menu-button" aria-label="Close menu">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
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
                                            {servicesLinks.map(service => (<li key={service.name}><Link to={service.path} onClick={toggleMobileMenu}>{service.name}</Link></li>))}
                                        </ul>
                                    </li>
                                    <li><Link to="/WorksPage" onClick={toggleMobileMenu}>Works</Link></li>
                                    <li><Link to="/BlogPage" onClick={toggleMobileMenu}>Blogs</Link></li>
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
                <motion.section 
                    className="blog-hero"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 variants={fadeInUp}>
                        <span>INSIGHTS.</span> IDEAS. <span>INNOVATION.</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        Stay ahead of the curve with our expert analysis on digital marketing, SEO, personal branding, and the future of online influence.
                    </motion.p>
                </motion.section>
                
                <div className="filter-bar">
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            className={`filter-button ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <motion.section 
                    layout // This prop enables animation on layout changes
                    className="blog-grid"
                >
                    <AnimatePresence>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))
                        ) : (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full text-center text-lg text-gray-500 col-span-full"
                            >
                                No blog posts found for this category.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.section>
            </main>

            <footer className="footer">
                {/* --- FOOTER JSX (Unchanged) --- */}
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
                            <li><Link to="/AffixMedia#services">Services</Link></li>
                            <li><Link to="/WorksPage">Works</Link></li>
                            <li><Link to="/BlogPage">Blogs</Link></li>
                            <li><Link to="/JobsPage">Jobs</Link></li>
                            <li><a href="https://whatsform.com/FLt6zu" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <div className="footer-social-links">
                            {socialLinksFooter.map((link) => (
                                <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>&nbsp;</h4>
                        <ul>
                            <li><Link to="/PrivacyPolicyPage">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            
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

export default BlogPage;