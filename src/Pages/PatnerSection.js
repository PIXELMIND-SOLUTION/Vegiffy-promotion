import { useState } from "react";
import patner from "../images/patner.png";

const features = [
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path d="M4 6h16M4 12h16M4 18h16" />
                <circle cx="8" cy="6" r="1" fill="currentColor" />
                <circle cx="16" cy="12" r="1" fill="currentColor" />
                <circle cx="10" cy="18" r="1" fill="currentColor" />
            </svg>
        ),
        title: "Poster & Banner Design",
        desc: "Create stunning posters, banners, and social media creatives instantly with Editezy.",
    },

    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <circle cx="12" cy="12" r="8" />
            </svg>
        ),
        title: "Easy Social Sharing",
        desc: "Design and share engaging content directly to your social platforms within seconds.",
    },

    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 8h8v8H8z" />
            </svg>
        ),
        title: "Professional Templates",
        desc: "Access modern ready-made templates for business promotions, events, and branding.",
    },

    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
            >
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
            </svg>
        ),
        title: "Trusted Editezy Partner",
        desc: "Proudly partnered with Editezy to deliver innovative creative solutions and digital growth.",
    },
];

const stats = [
    { value: "500+", label: "Posters", icon: "🤝" },
    { value: "50K+", label: "Users", icon: "👥" },
    { value: "120+", label: "Brands", icon: "🏢" },
    { value: "24/7", label: "Support", icon: "🛡️" },
];

export default function PatnerSection() {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <section className="bg-[#f0faf4] overflow-hidden py-14 sm:py-16 lg:py-24">
            <style>{`
                *{
                    font-family: Inter, sans-serif;
                }

                .feature-card,
                .stat-card,
                .store-btn{
                    transition: all .3s ease;
                }

                .feature-card:hover{
                    transform: translateY(-6px);
                    box-shadow: 0 18px 35px rgba(16,185,129,.12);
                }

                .stat-card:hover{
                    transform: scale(1.04);
                }

                .store-btn:hover{
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(0,0,0,.15);
                }

                .floating{
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes float{
                    0%,100%{
                        transform: translateY(0px);
                    }
                    50%{
                        transform: translateY(-12px);
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP CONTENT */}
                <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 text-sm font-medium px-5 py-2 rounded-full shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Our Partner
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Proudly Partnered With{" "}
                        <span className="text-emerald-600">
                            Editezy
                        </span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                        We are excited to announce that{" "}
                        <span className="font-semibold text-gray-900">
                            Editezy
                        </span>{" "}
                        is our trusted partner. Together, we deliver innovative
                        digital experiences, smart creative solutions, and
                        modern technology services to help businesses grow
                        faster in the digital world.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* LEFT SIDE */}
                    <div className="order-2 lg:order-1">

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-2 gap-5 mb-10">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="feature-card bg-white border border-green-100 rounded-3xl p-5 flex items-start gap-4 shadow-sm"
                                    onMouseEnter={() => setHoveredFeature(i)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                >
                                    <div
                                        className={`min-w-[56px] h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${hoveredFeature === i
                                            ? "bg-emerald-500 text-white"
                                            : "bg-green-50 text-emerald-600"
                                            }`}
                                    >
                                        {f.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {f.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className="stat-card bg-white border border-green-100 rounded-3xl py-6 px-4 text-center shadow-sm"
                                >
                                    <div className="text-2xl mb-2">
                                        {s.icon}
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                                        {s.value}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4">



                            <div className="flex flex-col sm:flex-row gap-4 w-full">

                                {/* PLAY STORE BUTTON */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.posternova.posternova"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="store-btn w-full sm:w-auto flex-1 bg-black text-white rounded-2xl px-5 py-4 flex items-center justify-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                                            alt="Play Store"
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>

                                    <div className="text-left">
                                        <p className="text-xs text-gray-400">
                                            GET IT ON
                                        </p>

                                        <h3 className="text-base sm:text-lg font-bold leading-tight">
                                            Google Play
                                        </h3>
                                    </div>
                                </a>

                                {/* APP STORE BUTTON */}
                                <a
                                    href="https://apps.apple.com/in/app/edit-ezy-poster/id6753908761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="store-btn w-full sm:w-auto flex-1 bg-emerald-600 text-white rounded-2xl px-5 py-4 flex items-center justify-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
                                            alt="App Store"
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>

                                    <div className="text-left">
                                        <p className="text-xs text-emerald-100">
                                            DOWNLOAD ON THE
                                        </p>

                                        <h3 className="text-base sm:text-lg font-bold leading-tight">
                                            App Store
                                        </h3>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="order-1 lg:order-2 relative flex justify-center items-center">

                        {/* Glow */}
                        <div className="absolute w-[260px] sm:w-[360px] lg:w-[420px] h-[260px] sm:h-[360px] lg:h-[420px] bg-emerald-200 rounded-full blur-3xl opacity-40"></div>

                        {/* Floating dots */}
                        <div className="absolute top-6 left-6 w-4 h-4 bg-green-400 rounded-full"></div>

                        <div className="absolute bottom-10 right-6 w-3 h-3 bg-emerald-300 rounded-full"></div>

                        {/* MOBILE MOCKUP */}
                        <div className="relative z-10 w-[260px] sm:w-[320px] lg:w-[350px] h-[520px] sm:h-[620px] lg:h-[700px] bg-black rounded-[42px] border-[8px] border-emerald-600 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.18)] floating">

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-[28px] bg-black rounded-b-3xl z-20"></div>

                            {/* IMAGE */}
                            <img
                                src={patner}
                                alt="Editezy Partner"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}