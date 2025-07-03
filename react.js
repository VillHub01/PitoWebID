// Gunakan pustaka ikon untuk tampilan yang lebih baik
// import { Home, Link, ShoppingBag, Settings, BarChart2, User, DollarSign, QrCode, Share2, Edit, Trash2, PlusCircle, LogOut, Eye, Palette, FileText, Calendar, Download, Mail, Bell } from 'lucide-react';

// Karena 'lucide-react' tidak tersedia di lingkungan ini, kita akan menggunakan SVG inline.
// Komponen Ikon SVG (disederhanakan untuk contoh ini)
const Icon = ({ name, className }) => {
  const icons = {
    home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>,
    link: <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </>,
    shoppingBag: <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </>,
    settings: <>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </>,
    barChart2: <>
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </>,
    user: <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </>,
    dollarSign: <>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </>,
    share2: <>
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </>,
    edit: <>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </>,
    trash2: <>
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </>,
    plusCircle: <>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </>,
    logOut: <>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </>,
    eye: <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </>,
    palette: <>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a7 7 0 1 0 10 10"></path>
        <path d="M12 22a7 7 0 1 0-10-10"></path>
        <path d="M2 12a7 7 0 1 0 10 10"></path>
        <path d="M22 12a7 7 0 1 0-10-10"></path>
    </>,
    fileText: <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </>,
    calendar: <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </>,
    download: <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </>,
    mail: <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </>,
    bell: <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </>,
    check: <polyline points="20 6 9 17 4 12"></polyline>,
    copy: <>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </>,
  };
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{icons[name] || ''}</svg>;
};

// Impor Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const { useState, useEffect, useCallback, useMemo } = React;

// Konfigurasi Firebase (akan diisi secara otomatis oleh lingkungan Canvas)
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-link-in-bio';

// Komponen Halaman Publik (yang dilihat audiens)
const PublicProfilePage = ({ username }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [db, setDb] = useState(null);

    useEffect(() => {
        if (Object.keys(firebaseConfig).length > 0) {
            try {
                const app = initializeApp(firebaseConfig);
                setDb(getFirestore(app));
            } catch(e) {
                console.error("Firebase initialization error", e);
                if (e.code !== 'duplicate-app') {
                    setError("Gagal menginisialisasi aplikasi.");
                }
            }
        }
    }, []);

    useEffect(() => {
        if (!db || !username) return;

        const profilesRef = collection(db, `/artifacts/${appId}/public/profiles`);
        const q = query(profilesRef, where("username", "==", username));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (querySnapshot.empty) {
                setError("Profil tidak ditemukan.");
                setProfile(null);
            } else {
                const profileData = querySnapshot.docs[0].data();
                setProfile({ id: querySnapshot.docs[0].id, ...profileData });
                setError('');
            }
            setLoading(false);
        }, (err) => {
            console.error("Error fetching profile:", err);
            setError("Gagal memuat profil.");
            setLoading(false);
        });

        return () => unsubscribe();
    }, [db, username]);

    const copyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('URL disalin ke clipboard!');
        } catch (err) {
            console.error('Gagal menyalin teks: ', err);
        }
        document.body.removeChild(textArea);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-gray-100"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen bg-gray-100 text-red-500">{error}</div>;
    }

    if (!profile) {
        return <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-500">Profil tidak tersedia.</div>;
    }

    const { appearance, profileImageUrl, displayName, bio, links = [], products = [], services = [] } = profile;
    const theme = {
        background: appearance?.bgColor || '#f3f4f6',
        textColor: appearance?.textColor || '#111827',
        buttonColor: appearance?.btnColor || '#3b82f6',
        buttonTextColor: appearance?.btnTextColor || '#ffffff',
        font: appearance?.font || 'Inter',
    };

    return (
        <div style={{ backgroundColor: theme.background, color: theme.textColor, fontFamily: theme.font }} className="min-h-screen transition-colors duration-300">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap');
            `}</style>
            <div className="container mx-auto max-w-2xl p-4 sm:p-6 md:p-8">
                <header className="text-center mb-8">
                    <img src={profileImageUrl || 'https://placehold.co/128x128/e2e8f0/64748b?text=Foto'} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                    <h1 className="text-2xl md:text-3xl font-bold">{displayName || 'Nama Kreator'}</h1>
                    <p className="mt-2 text-sm md:text-base">{bio || 'Bio singkat kreator.'}</p>
                    <button onClick={() => copyToClipboard(window.location.href)} className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                        <Icon name="share2" className="w-4 h-4" /> Bagikan
                    </button>
                </header>

                <main className="space-y-4">
                    {/* Links */}
                    {links.length > 0 && <h2 className="text-lg font-semibold text-center">Links</h2>}
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                           style={{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor }}
                           className="block w-full text-center p-4 rounded-lg font-semibold shadow-md hover:scale-105 transform transition-transform duration-200">
                            {link.title}
                        </a>
                    ))}

                    {/* Products */}
                    {products.length > 0 && <h2 className="text-lg font-semibold text-center mt-8">Produk Digital</h2>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="border rounded-lg p-4 flex flex-col shadow-md bg-white/50 backdrop-blur-sm">
                                <img src={product.imageUrl || 'https://placehold.co/400x300/e2e8f0/64748b?text=Produk'} alt={product.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="font-bold flex-grow">{product.title}</h3>
                                <p className="text-lg font-semibold my-2" style={{ color: theme.buttonColor }}>Rp {Number(product.price).toLocaleString('id-ID')}</p>
                                <button style={{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor }} className="w-full mt-2 p-2 rounded-lg font-semibold hover:opacity-90 transition">
                                    Beli Sekarang
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {/* Donation */}
                    <div className="text-center mt-8 pt-8 border-t border-gray-300/50">
                         <h2 className="text-lg font-semibold mb-2">Dukung Kreator</h2>
                         <p className="text-sm mb-4">Suka dengan karyanya? Beri dukungan!</p>
                         <button style={{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor }} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform transition-transform duration-200">
                            <span>☕</span> Traktir Kopi (Rp 25.000)
                        </button>
                    </div>
                </main>
                 <footer className="text-center mt-12 text-xs text-gray-500">
                    <p>Powered by LinkHub</p>
                </footer>
            </div>
        </div>
    );
};


// Komponen Halaman Utama (Landing Page)
const HomePage = ({ navigate }) => {
    return (
        <div className="bg-white text-gray-800">
            {/* Header */}
            <header className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">LinkHub</h1>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#features" className="hover:text-blue-600">Fitur</a>
                    <a href="#pricing" className="hover:text-blue-600">Harga</a>
                    <a href="#demo" className="hover:text-blue-600">Demo</a>
                </nav>
                <button onClick={() => navigate('dashboard')} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Masuk / Daftar
                </button>
            </header>

            {/* Hero Section */}
            <section className="text-center py-20 px-4 bg-gray-50">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Satu Link, Semua Monetisasi Anda.</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">Platform link-in-bio modern untuk menjual produk digital, jasa, dan mengumpulkan dukungan dari audiens Anda.</p>
                <button onClick={() => navigate('dashboard')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition">
                    Mulai Gratis
                </button>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 container mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12">Semua yang Anda Butuhkan untuk Berkembang</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="shoppingBag" className="w-8 h-8"/>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Jual Apapun</h4>
                        <p className="text-gray-600">Produk digital, e-book, video, hingga sesi konsultasi. Semua dalam satu tempat.</p>
                    </div>
                    <div className="p-6">
                        <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="palette" className="w-8 h-8"/>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Kustomisasi Penuh</h4>
                        <p className="text-gray-600">Sesuaikan halaman Anda dengan warna, font, dan tata letak yang mencerminkan brand Anda.</p>
                    </div>
                    <div className="p-6">
                        <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="barChart2" className="w-8 h-8"/>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Analitik Mendalam</h4>
                        <p className="text-gray-600">Pahami audiens Anda dengan statistik kunjungan, klik, dan penjualan yang mudah dibaca.</p>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="py-20 px-4 bg-gray-50">
                <h3 className="text-3xl font-bold text-center mb-12">Lihat Contoh Profil Kreator</h3>
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-4 border">
                    <div className="h-[500px] overflow-hidden rounded-xl">
                       <PublicProfilePage username="demouser" />
                    </div>
                </div>
            </section>


            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 container mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12">Pilih Paket yang Tepat untuk Anda</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Starter Plan */}
                    <div className="border rounded-lg p-8 w-full max-w-sm">
                        <h4 className="text-2xl font-semibold mb-2">Starter</h4>
                        <p className="text-gray-600 mb-4">Untuk memulai dan membangun audiens.</p>
                        <p className="text-4xl font-bold mb-6">Gratis</p>
                        <ul className="space-y-3 mb-8 text-gray-700">
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Link tanpa batas</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> 3 Produk Digital</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Kustomisasi dasar</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Analitik dasar</li>
                        </ul>
                        <button onClick={() => navigate('dashboard')} className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">Mulai Sekarang</button>
                    </div>
                    {/* Pro Plan */}
                    <div className="border-2 border-blue-600 rounded-lg p-8 w-full max-w-sm relative shadow-xl">
                        <div className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Paling Populer</div>
                        <h4 className="text-2xl font-semibold mb-2">Pro</h4>
                        <p className="text-gray-600 mb-4">Untuk kreator profesional dan bisnis.</p>
                        <p className="text-4xl font-bold mb-6">Rp 99.000<span className="text-lg font-normal text-gray-500">/bulan</span></p>
                        <ul className="space-y-3 mb-8 text-gray-700">
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Semua fitur Starter</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Produk & Jasa tanpa batas</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Kustomisasi Lanjutan</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Domain Kustom</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Hapus Branding LinkHub</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="text-green-500"/> Integrasi Pixel & GA</li>
                        </ul>
                        <button onClick={() => navigate('dashboard')} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Pilih Paket Pro</button>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 px-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 LinkHub. Semua Hak Cipta Dilindungi.</p>
                </div>
            </footer>
        </div>
    );
};

// Komponen Dashboard Admin
const DashboardPage = ({ user, db, auth, navigate }) => {
    const [activeTab, setActiveTab] = useState('links');
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const userId = user?.uid;
    const publicProfileUrl = useMemo(() => {
        if (!profile?.username) return '';
        const { protocol, host } = window.location;
        return `${protocol}//${host}/?user=${profile.username}`;
    }, [profile?.username]);


    const defaultProfile = {
        displayName: "Nama Anda",
        username: `user_${userId?.substring(0, 8)}`,
        bio: "Selamat datang di halaman saya!",
        profileImageUrl: `https://placehold.co/128x128/e0e7ff/4338ca?text=${userId?.[0]?.toUpperCase() || 'U'}`,
        links: [],
        products: [],
        services: [],
        appearance: {
            theme: 'simple',
            bgColor: '#F9FAFB',
            textColor: '#1F2937',
            btnColor: '#3B82F6',
            btnTextColor: '#FFFFFF',
            font: 'Inter',
        },
        plan: 'starter',
    };

    // Fetch and listen to profile data
    useEffect(() => {
        if (!userId || !db) return;
        const docRef = doc(db, `/artifacts/${appId}/users/${userId}/profile/data`);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setProfile(docSnap.data());
            } else {
                // Create a default profile if it doesn't exist
                setDoc(docRef, defaultProfile).then(() => setProfile(defaultProfile));
            }
            setLoading(false);
        }, (err) => {
            console.error("Error fetching profile:", err);
            setError("Gagal memuat data profil.");
            setLoading(false);
        });
        return () => unsubscribe();
    }, [userId, db]);
    
    // Create a public profile doc for query
    useEffect(() => {
        if (!profile || !db || !userId) return;
        
        const publicDocRef = doc(db, `/artifacts/${appId}/public/profiles/${userId}`);
        setDoc(publicDocRef, profile, { merge: true })
            .catch(err => console.error("Error updating public profile:", err));

    }, [profile, userId, db]);


    const handleSave = async (updatedProfile) => {
        if (!userId || !db) return;
        setSaving(true);
        const docRef = doc(db, `/artifacts/${appId}/users/${userId}/profile/data`);
        try {
            await setDoc(docRef, updatedProfile, { merge: true });
            // The onSnapshot listener will automatically update the state
        } catch (err) {
            console.error("Error saving profile:", err);
            alert("Gagal menyimpan perubahan.");
        } finally {
            setSaving(false);
        }
    };
    
    const handleProfileChange = (field, value) => {
        const newProfile = { ...profile, [field]: value };
        setProfile(newProfile); // Optimistic update
        handleSave(newProfile);
    };

    const handleAppearanceChange = (field, value) => {
        const newProfile = { ...profile, appearance: { ...profile.appearance, [field]: value } };
        setProfile(newProfile);
        handleSave(newProfile);
    };

    const handleAddItem = (type) => {
        const newProfile = { ...profile };
        if (type === 'link') {
            newProfile.links = [...(newProfile.links || []), { title: 'Link Baru', url: 'https://' }];
        } else if (type === 'product') {
            newProfile.products = [...(newProfile.products || []), { title: 'Produk Baru', price: 50000, imageUrl: '' }];
        }
        setProfile(newProfile);
        handleSave(newProfile);
    };

    const handleUpdateItem = (type, index, field, value) => {
        const newProfile = { ...profile };
        newProfile[type][index][field] = value;
        setProfile(newProfile);
        // Debounce save? For now, save on blur/change end
    };
    
    const handleSaveItemUpdate = () => {
        handleSave(profile);
    }

    const handleDeleteItem = (type, index) => {
        if (!window.confirm("Apakah Anda yakin ingin menghapus item ini?")) return;
        const newProfile = { ...profile };
        newProfile[type].splice(index, 1);
        setProfile(newProfile);
        handleSave(newProfile);
    };
    
    const renderActiveTab = () => {
        if (!profile) return null;
        switch (activeTab) {
            case 'links':
                return <ContentEditor type="links" items={profile.links || []} onUpdate={handleUpdateItem} onAdd={() => handleAddItem('link')} onDelete={handleDeleteItem} onSave={handleSaveItemUpdate} />;
            case 'products':
                return <ContentEditor type="products" items={profile.products || []} onUpdate={handleUpdateItem} onAdd={() => handleAddItem('product')} onDelete={handleDeleteItem} onSave={handleSaveItemUpdate} />;
            case 'appearance':
                return <AppearanceEditor appearance={profile.appearance} onChange={handleAppearanceChange} />;
            case 'stats':
                return <AnalyticsTab />;
            case 'settings':
                return <SettingsTab profile={profile} onChange={handleProfileChange} onSave={handleSave} />;
            default:
                return null;
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-gray-100"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>;
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-20 lg:w-64 bg-white border-r flex flex-col">
                <div className="h-16 border-b flex items-center justify-center lg:justify-start lg:px-6">
                    <h1 className="text-xl font-bold text-blue-600">LinkHub</h1>
                </div>
                <nav className="flex-1 py-6 space-y-2">
                    <SidebarButton icon="link" label="Links" active={activeTab === 'links'} onClick={() => setActiveTab('links')} />
                    <SidebarButton icon="shoppingBag" label="Produk" active={activeTab === 'products'} onClick={() => setActiveTab('products')} />
                    <SidebarButton icon="palette" label="Tampilan" active={activeTab === 'appearance'} onClick={() => setActiveTab('appearance')} />
                    <SidebarButton icon="barChart2" label="Statistik" active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} />
                    <SidebarButton icon="settings" label="Pengaturan" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                </nav>
                <div className="p-4 border-t">
                     <button onClick={() => auth.signOut()} className="w-full flex items-center gap-3 text-gray-600 hover:bg-red-50 hover:text-red-600 p-2 rounded-lg transition-colors">
                        <Icon name="logOut" className="w-5 h-5" />
                        <span className="hidden lg:inline">Keluar</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Halaman Anda:</span>
                        <a href={publicProfileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium text-sm hover:underline">{publicProfileUrl || 'Atur username Anda'}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => window.open(publicProfileUrl, '_blank')} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-sm">
                            <Icon name="eye" className="w-4 h-4" />
                            <span>Lihat Halaman</span>
                        </button>
                        {saving && <span className="text-sm text-gray-500 animate-pulse">Menyimpan...</span>}
                    </div>
                </header>
                <div className="flex-1 flex overflow-hidden">
                    {/* Editor Panel */}
                    <div className="w-full lg:w-1/2 overflow-y-auto p-8">
                        {renderActiveTab()}
                    </div>
                    {/* Preview Panel */}
                    <div className="hidden lg:block w-1/2 bg-gray-200 p-8 overflow-y-auto">
                        <div className="mx-auto max-w-sm bg-white rounded-2xl shadow-lg border">
                           <div className="h-[700px] overflow-y-auto rounded-xl scale-95 origin-top">
                                {profile?.username ? <PublicProfilePage username={profile.username} /> : <div className="p-8 text-center text-gray-500">Preview akan muncul di sini.</div>}
                           </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const SidebarButton = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-3 transition-colors ${active ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Icon name={icon} className="w-6 h-6" />
        <span className="hidden lg:inline">{label}</span>
    </button>
);

const ContentEditor = ({ type, items, onUpdate, onAdd, onDelete, onSave }) => {
    const title = type === 'links' ? 'Links' : 'Produk';
    const fields = type === 'links' ? 
        [{ name: 'title', placeholder: 'Judul Link', type: 'text' }, { name: 'url', placeholder: 'https://...', type: 'url' }] :
        [{ name: 'title', placeholder: 'Nama Produk', type: 'text' }, { name: 'price', placeholder: 'Harga (Rp)', type: 'number' }, { name: 'imageUrl', placeholder: 'URL Gambar Produk', type: 'url' }];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button onClick={onAdd} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                    <Icon name="plusCircle" className="w-5 h-5" />
                    <span>Tambah {type === 'links' ? 'Link' : 'Produk'}</span>
                </button>
            </div>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
                        <div className="flex justify-end mb-2">
                            <button onClick={() => onDelete(type, index)} className="text-gray-400 hover:text-red-500">
                                <Icon name="trash2" className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {fields.map(field => (
                                <div key={field.name}>
                                    <label className="text-sm font-medium text-gray-700 capitalize">{field.name}</label>
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={item[field.name] || ''}
                                        onChange={(e) => onUpdate(type, index, field.name, e.target.value)}
                                        onBlur={onSave}
                                        className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {items.length === 0 && <p className="text-gray-500 text-center py-8">Belum ada {title.toLowerCase()}.</p>}
            </div>
        </div>
   