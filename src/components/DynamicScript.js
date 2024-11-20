// components/DynamicScript.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DynamicScript = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set to true once the component is mounted on the client side
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Return nothing before mounting
    }

    let scriptContent = null;

    if (pathname === "/services/digital-marketing") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital marketing is the practice of promoting products or services through online channels such as search engines, social media, email, and websites. It involves various strategies like SEO, PPC, content marketing, and social media marketing to reach and engage with your target audience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see results from digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The timeframe for seeing results from digital marketing varies depending on several factors, including your industry, competition, and the specific strategies implemented. While some campaigns may yield quick results, others may take several months to show significant impact. Consistency and patience are key in digital marketing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does digital marketing cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of digital marketing can vary widely depending on your budget, goals, and the scope of your campaign. Factors such as the size of your business, your target audience, and the specific strategies you choose will influence the overall cost. It's important to discuss your budget with your digital marketing agency or consultant to determine a suitable plan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between SEO and PPC?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SEO (Search Engine Optimization): This involves optimizing your website's content and structure to improve its ranking in search engine results pages (SERPs) organically. It is a long-term strategy that can take time to yield results. PPC (Pay-Per-Click): This involves paying for ads to appear at the top of search engine results pages or on social media platforms. It provides immediate visibility but requires ongoing investment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I measure the success of my digital marketing campaigns?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are various metrics to track the success of your digital marketing campaigns, including: Website Traffic, Conversion Rates, Social Media Engagement, Return on Investment (ROI), Brand Awareness. By tracking these metrics, you can assess the effectiveness of your campaigns and make data-driven decisions to improve your digital marketing strategy."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/web-development") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the website development services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Web development encompasses a wide range of services, from creating the visual interface and user experience of a website (front-end development) to building server-side functionality and database interactions (back-end development). We also offer full-stack development, which combines both front-end and back-end development. Additionally, we specialize in custom web development, e-commerce development, CMS development, and PWA development."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much does website development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of website development can vary significantly depending on several factors. Websites with simple designs and basic features are generally less expensive than complex ones with advanced features and integrations. The time required to create the design and code can also impact the cost. It's best to get quotes from multiple developers to compare pricing and services."
                    }
                }, {
                    "@type": "Question",
                    "name": "Who needs web development services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Businesses of all sizes can benefit from web development services. A website is essential for establishing an online presence, building and promoting your brand identity, providing information and services to customers, generating leads, driving sales, and implementing digital marketing strategies."
                    }
                }, {
                    "@type": "Question",
                    "name": "Will I lose Google ranking if I redevelop my website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While redeveloping a website can potentially impact your Google ranking, it doesn't have to be a negative experience. By carefully planning and executing the redevelopment process, you can minimize any potential ranking loss. Factors to consider include maintaining content consistency, redirecting old URLs to the corresponding new pages, optimizing the new website for search engines, and ensuring it's mobile-friendly."
                    }
                }, {
                    "@type": "Question",
                    "name": "Which tool is best for web development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best tool for web development depends on your specific needs and preferences. Some popular options include code editors like Visual Studio Code, Sublime Text, and Atom, integrated development environments (IDEs) like PhpStorm, WebStorm, and Eclipse, content management systems (CMS) like WordPress, Drupal, and Joomla, and frameworks like React, Angular, Vue.js, Django, and Laravel."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are the 4 principles of web development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While there are many principles of web development, four key ones are accessibility, performance, security, and user experience. Accessibility ensures that your website is usable by people with disabilities. Performance refers to optimizing your website for fast loading times and responsiveness. Security involves protecting your website and user data from threats. User experience focuses on creating a website that is easy to navigate and enjoyable to use."
                    }
                }, {
                    "@type": "Question",
                    "name": "What kind of website do you create?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We can create a wide variety of websites, including corporate websites, e-commerce websites, portfolio websites, blog websites, and landing pages."
                    }
                }, {
                    "@type": "Question",
                    "name": "I am not sure of my website requirements. Can you help?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! We can help you define your website requirements through a consultation process. We'll discuss your goals, target audience, and desired features to create a tailored website solution."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/hubspot-development") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What exactly is HubSpot used for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "HubSpot is a comprehensive CRM and marketing platform that offers a wide range of tools to help businesses attract, engage, and delight customers. It can be used for various purposes, including marketing automation, customer relationship management (CRM), website development, content management, and analytics."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much does HubSpot Development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of HubSpot development varies depending on the specific services you require and the complexity of your project. Factors that can influence the cost include the scope of the project, your existing website or CRM, and your business goals. It's best to contact WebGuruz for a personalized quote based on your specific requirements."
                    }
                }, {
                    "@type": "Question",
                    "name": "What does a HubSpot Developer do?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A HubSpot developer is responsible for implementing and customizing HubSpot solutions to meet your business needs. They typically have expertise in HubSpot's API and integrations, CMS and website development, CRM and marketing automation tools, and custom module development. A HubSpot developer will work closely with you to understand your goals and create a tailored solution that drives results."
                    }
                }, {
                    "@type": "Question",
                    "name": "How are HubSpot Development Services at WebGuruz better?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WebGuruz offers several advantages when it comes to HubSpot development services, including a proven track record of successful projects, an experienced team of developers, customized solutions tailored to your specific needs, excellent customer support, and competitive pricing."
                    }
                }, {
                    "@type": "Question",
                    "name": "Will I need HubSpot Development if I am migrating my website to HubSpot?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you will likely need HubSpot development services if you are migrating your website to HubSpot. While HubSpot offers a user-friendly interface, migrating your existing website and data may require technical expertise. A HubSpot developer can help you migrate your website content and design, migrate your existing customer data to HubSpot's CRM, configure HubSpot's marketing automation tools, and customize your HubSpot website to meet your specific needs. By working with a HubSpot developer, you can ensure a smooth and efficient migration process and maximize the benefits of HubSpot for your business."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/pay-per-click-management") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the full form of PPC?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PPC stands for \"Pay-Per-Click,\" a digital marketing model where advertisers pay each time a user clicks on their ads."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are paid advertising services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid advertising services involve creating and managing ad campaigns across various platforms to promote products or services, driving targeted traffic and generating leads."
                    }
                }, {
                    "@type": "Question",
                    "name": "How much do paid ads cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of paid ads varies based on factors like the platform, targeting options, and competition. Typically, businesses set a budget that aligns with their marketing goals and monitor performance to optimize spending."
                    }
                }, {
                    "@type": "Question",
                    "name": "What is paid advertising on social media?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid advertising on social media involves creating sponsored posts or ads on platforms like Facebook, Instagram, and LinkedIn to reach specific audiences and drive engagement or conversions."
                    }
                }, {
                    "@type": "Question",
                    "name": "Why use paid ads?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paid ads provide immediate visibility, allow for precise targeting, and are measurable, helping businesses achieve their marketing objectives quickly and effectively."
                    }
                }, {
                    "@type": "Question",
                    "name": "What paid marketing strategies do you use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We utilize a mix of strategies including keyword targeting, audience segmentation, retargeting, A/B testing, and continuous optimization to maximize campaign performance."
                    }
                }, {
                    "@type": "Question",
                    "name": "Which metrics do you track to measure the success of paid advertising campaigns?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We track key metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI to evaluate campaign effectiveness."
                    }
                }, {
                    "@type": "Question",
                    "name": "What are the benefits of working with WebGuruz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Partnering with WebGuruz gives you access to a team of experts, tailored strategies, transparent reporting, and ongoing support to ensure your PPC campaigns are successful."
                    }
                }
            ]
        };
    }
    if (pathname === "/services/search-engine-optimization") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How much does it cost for SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO pricing varies depending on the scope of your project, the level of competition in your industry, and the specific services required. At WebGuruz, we offer flexible pricing plans tailored to your needs. Whether you're a small business or an enterprise, we have solutions that fit every budget. For a more accurate estimate, feel free to reach out for a consultation, and we'll provide you with a detailed breakdown of costs."
                }
            }, {
                "@type": "Question",
                "name": "What is SEO and its purpose?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO, or Search Engine Optimization, refers to the practice of optimizing your website to improve its visibility in search engine results. The primary purpose of SEO is to increase organic traffic by ranking higher for relevant keywords, which ultimately leads to more website visitors, higher conversions, and increased revenue. It’s a long-term investment in your business's online presence."
                }
            }, {
                "@type": "Question",
                "name": "Is SEO a marketing service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SEO is an essential part of digital marketing. It involves improving your website's visibility in search engines like Google and Bing, which helps attract potential customers who are actively searching for your products or services. By integrating SEO into your marketing strategy, you can enhance your brand's online presence and reach a wider audience."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between SEO and online marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a specific aspect of online marketing focused on improving organic search engine rankings. Online marketing, on the other hand, encompasses a broad range of tactics, including SEO, social media marketing, content marketing, paid advertising (PPC), and email marketing. SEO is just one of many tools used in a comprehensive digital marketing strategy."
                }
            }, {
                "@type": "Question",
                "name": "Which is better: Google Ads or SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both Google Ads (PPC) and SEO have their unique advantages. SEO focuses on long-term organic growth and provides lasting results, while Google Ads offers immediate visibility through paid search results. The best choice depends on your goals: SEO is ideal for sustained, long-term growth, while Google Ads can drive instant traffic. For most businesses, a combination of both strategies works best."
                }
            }]

        };
    }
    if (pathname === "/services/organic-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are organic SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Organic SEO services refer to optimizing your website using strategies like keyword targeting, content creation, and link building to increase your rankings on search engines without paid advertising."
                }
            }, {
                "@type": "Question",
                "name": "How much does organic SEO cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of organic SEO services can vary depending on the complexity of your project, the industry you're in, and the level of competition. At WebGuruz, we offer competitive pricing tailored to your needs."
                }
            }, {
                "@type": "Question",
                "name": "Is organic SEO better than paid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, organic SEO provides long-term results that grow over time, while paid advertising only works as long as you're paying for it. Organic traffic builds trust and drives sustainable growth."
                }
            }, {
                "@type": "Question",
                "name": "How long does organic SEO take to show results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It typically takes 4 to 6 months to see noticeable improvements in rankings, but organic SEO is a long-term strategy that delivers sustainable results over time."
                }
            }, {
                "@type": "Question",
                "name": "How can I increase my organic traffic SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on optimizing your content, targeting the right keywords, building backlinks, and ensuring your site is technically sound. Our organic SEO services can help you achieve these goals."
                }
            }, {
                "@type": "Question",
                "name": "Does organic search pay for clicks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, organic search results are free, and you don't pay for clicks. This is one of the key benefits of investing in organic SEO over paid advertising."
                }
            }, {
                "@type": "Question",
                "name": "How does organic SEO work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Organic SEO works by improving the relevance, structure, and authority of your website so that search engines rank it higher in results. It involves keyword research, on-page optimization, and building a strong backlink profile."
                }
            }]
        };
    }
    if (pathname === "/services/local-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are local SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Local SEO services focus on optimizing your online presence to attract more business from local searches. This includes managing Google My Business, building local citations, and optimizing your website with local keywords."
                }
            }, {
                "@type": "Question",
                "name": "How much do local SEO services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of local SEO services varies depending on your business needs. A typical campaign can range from $300 to $2000 per month, depending on the level of service required."
                }
            }, {
                "@type": "Question",
                "name": "Is local SEO worth it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, local SEO is worth it. It increases your visibility to nearby customers, making it easier for them to find and engage with your business."
                }
            }, {
                "@type": "Question",
                "name": "Do I need a website for local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While having a website isn’t mandatory for local SEO, it significantly improves your chances of ranking higher in search results and attracting more customers."
                }
            }, {
                "@type": "Question",
                "name": "Do backlinks help local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, backlinks from local websites help improve your site’s authority and ranking in local search results."
                }
            }, {
                "@type": "Question",
                "name": "What is the best URL structure for local SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best URL structure for local SEO includes the business name, location, and target keyword. For example, www.businessname.com/city-service would be ideal."
                }
            }]

        };
    }
    if (pathname === "/services/technical-seo") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is technical SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO services focus on optimizing the backend structure of a website to make it easier for search engines to crawl, index, and rank. These services include tasks like improving website speed, mobile-friendliness, and fixing crawl errors."
                }
            }, {
                "@type": "Question",
                "name": "How much does technical SEO cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of technical SEO services varies depending on the scope of the project, the size of your website, and the specific requirements. Contact us for a detailed quote based on your unique needs."
                }
            }, {
                "@type": "Question",
                "name": "Is technical SEO hard?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO can be complex, requiring expertise in website structure, coding, and search engine algorithms. However, with the right team, like WebGuruz, it becomes a manageable and rewarding process."
                }
            }, {
                "@type": "Question",
                "name": "What are the types of technical SEO?Technical SEO covers several areas including site speed optimization, mobile optimization, site architecture, security (HTTPS), and structured data implementation.",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO covers several areas including site speed optimization, mobile optimization, site architecture, security (HTTPS), and structured data implementation."
                }
            }, {
                "@type": "Question",
                "name": "What is the difference between technical SEO and SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While general SEO focuses on optimizing content and keywords, Technical SEO ensures the website’s infrastructure is optimized for search engines to access and rank your content."
                }
            }, {
                "@type": "Question",
                "name": "What is the main objective of technical SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main goal of technical SEO is to enhance the technical elements of your website, making it easier for search engines to crawl, index, and rank, while improving user experience."
                }
            }, {
                "@type": "Question",
                "name": "How does technical SEO work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO works by optimizing your website’s structure, performance, and security. This makes it easier for search engines to access and index your site, ultimately improving your rankings."
                }
            }]
        };
    }
    if (pathname === "/seo-packages") {
        scriptContent = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How much does it cost to hire an SEO agency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of hiring an SEO agency varies based on the services provided, business size, and goals. At WebGuruz, we offer flexible packages that start with essential services for small businesses and scale up for larger enterprises with extensive SEO needs. Our goal is to provide an affordable solution without compromising quality or results."
                }
            }, {
                "@type": "Question",
                "name": "Is SEO a one-time cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, SEO is an ongoing process rather than a one-time cost. SEO requires continuous optimization to stay effective, as search engines frequently update their algorithms. Regular efforts ensure that your website remains competitive and visible over time."
                }
            }, {
                "@type": "Question",
                "name": "Why is SEO so expensive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO can be resource-intensive due to the need for skilled experts, quality content, and ongoing adjustments. However, it offers a high return on investment by driving organic, sustainable traffic and enhancing your brand’s credibility, making it a worthwhile investment."
                }
            }, {
                "@type": "Question",
                "name": "Can I do SEO myself?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While it’s possible to learn the basics of SEO, achieving significant results requires expertise, tools, and a time commitment. Working with SEO professionals lets you focus on your business while experts handle the technical aspects, increasing your chances of success."
                }
            }, {
                "@type": "Question",
                "name": "Is it worth it to hire someone for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Hiring an SEO professional provides you with advanced skills, insights, and tools that maximize your website’s performance. It’s an investment that can lead to higher rankings, increased traffic, and a better ROI in the long run."
                }
            }, {
                "@type": "Question",
                "name": "Do people pay for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, businesses across all industries pay for SEO services as they recognize the value of high search engine visibility in attracting and retaining customers."
                }
            }, {
                "@type": "Question",
                "name": "Which is better, PPC or SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both have their advantages. SEO builds long-term, sustainable traffic, while PPC provides immediate visibility. For maximum benefit, combining SEO and PPC often produces the best results."
                }
            }, {
                "@type": "Question",
                "name": "Is Google Ads better than SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Google Ads offers immediate visibility, while SEO takes time to build but provides sustained, long-term traffic. Both have a role in a comprehensive digital marketing strategy."
                }
            }, {
                "@type": "Question",
                "name": "Who needs SEO the most?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses that rely on online visibility, including e-commerce, professional services, and local businesses, benefit most from SEO as it drives targeted traffic and builds brand credibility."
                }
            }, {
                "@type": "Question",
                "name": "What type of SEO is best?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best SEO combines on-page, off-page, and technical elements. Each plays a vital role in creating a well-rounded strategy that improves your rankings and user experience."
                }
            }, {
                "@type": "Question",
                "name": "Which type of domain is best for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Domains with brandable names and .com extensions often perform well for SEO. However, using a keyword-relevant domain may help in niche industries where relevance is a priority."
                }
            }]

        };
    }

    if (scriptContent) {
        return (
            <script type="application/ld+json">
                {JSON.stringify(scriptContent)}
            </script>
        );
    }

    return null; // No script for other pathnames
};

export default DynamicScript;

