// ====== GANTI NOMOR WA TUJUAN ======
const WA_NUMBER = "628553333529";

const DATA = {
  "Streaming Apps": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "YouTube": { icon: "icon/yt.png", proses: "instant", prices: { 1: 14000 } },
      "Netflix Via Email": { icon: "icon/netflix.png", proses: "3-5", prices: { 1: 29000 } },
      "Netflix Via Link": { icon: "icon/netflix.png", prices: { 1: 19000 } },
      "Vidio": { icon: "icon/vidio.png", prices: { 1: 49000 } },
      "Vision+": { icon: "icon/vision.png", prices: { 1: 29000 } },
      "Disney+": { icon: "icon/disney.png", prices: { 1: 00000 } },
      "Prime Video": { icon: "icon/prime.png", prices: { 1: 14000 } },
      "Bstation": { icon: "icon/bstation.png", prices: { 1: 32000 } },
      "HBO Max Standar": { icon: "icon/hbo.png", prices: { 1: 14000 } },
      "HBO Max Ultimate": { icon: "icon/hbo.png", prices: { 1: 19000 } },
      "iQIYI": { icon: "icon/iqiyi.png", prices: { 1: 25000 } },
      "Viu": { icon: "icon/viu.png", prices: { 12: 6000 } },
      "WeTV": { icon: "icon/wetv.png", prices: { 1: 32000 } },
      "Loklok": { icon: "icon/loklok.png", unit: "hari", prices: { 40: 42000 } },
      
  }
 },

  "Editing Apps": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "Canva": { icon: "icon/canva.png", prices: { 1: 3000 } },
      "Capcut": { icon: "icon/capcut.png", prices: { 1: 27000 } },
      "Alight Motion": { icon: "icon/am.png", prices: { 1: 5000 } },
      "Picsart": { icon: "icon/picsart.png", unit: "hari", prices: { 7: 9000 } },
      "Meitu": { icon: "icon/meitu.png", unit: "hari", prices: { 7: 8500 } },
      "Wink": { icon: "icon/wink.png", unit: "hari", prices: { 7: 8500 } },
  }
 },

  "Music Apps": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "Spotify": { icon: "icon/spotify.png", prices: { 1: 19000 } },
      "Apple Music": { icon: "icon/apple.png", prices: { 1: 9000 } },
  }
 },

  "AI Apps": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "ChatGPT Go": { icon: "icon/chatgpt.png", prices: { 3: 89000 } },
      "Gemini Pro": { icon: "icon/gemini.png", prices: { 3: 19000 } },
  }
 },

  "Nokos WhatsApp": {
    icon: "icon/app.png",
    unit: "nomor",
    services: {
      "Region Indonesia": { icon: "icon/indonesia.png", prices: { 1: 10000 } },
      "Region Malaysia": { icon: "icon/malaysia.png", prices: { 1: 15000 } },
      "Region India": { icon: "icon/india.png", prices: { 1: 30000 } },
      "Region Singapore": { icon: "icon/singapore.png", prices: { 1: 2100000 } },

  }
 }
};
// ============================================================

// Deskripsi tiap layanan — terpisah dari data harga, nggak nyampur


const DESCRIPTIONS = {
  "Streaming Apps": {
    "YouTube": [
      {
        type: "paragraph",
        text: "YouTube Premium Family Head adalah layanan berlangganan YouTube Premium bagi pemilik grup keluarga untuk menikmati video tanpa iklan, akses YouTube Music Premium, pemutaran di latar belakang, serta download video untuk ditonton secara offline."
      },
      {
        type: "benefits",
        items: [
          "Invite 5 Email Keluarga",
          "Tidak Ada Iklan",
          "Putar Video Di latar Belakang",
          "Kualitas Video Jernih",
          "Download Video Untuk Offline"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa menggunakan akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Netflix Via Email": [
      {
        type: "paragraph",
        text: "Netflix Premium adalah layanan streaming untuk menikmati berbagai film, serial, dan tayangan eksklusif dengan kualitas tinggi."
      },
      {
        type: "benefits",
        items: [
          "Akun Sharing 1P1U",
          "Login Via Email & Pass",
          "Akses Film & Serial Lengkap",
          "Tidak Ada Iklan",
          "Kualitas Video Jernih",
          "Support Semua Device"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Netflix Via Link": [
      {
        type: "paragraph",
        text: "Netflix Premium adalah layanan streaming untuk menikmati berbagai film, serial, dan tayangan eksklusif dengan kualitas tinggi."
      },
      {
        type: "benefits",
        items: [
          "Akun Sharing 1P1U",
          "Login Via Link/Tautan",
          "Akses Film & Serial Lengkap",
          "Tidak Ada Iklan",
          "Kualitas Video Jernih",
          "Support Semua Device"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Vidio": [
      {
        type: "paragraph",
        text: "Vidio Premium adalah layanan berlangganan Vidio untuk menikmati berbagai konten premium, live streaming olahraga, film, serial, dan tayangan eksklusif."
      },
      {
        type: "benefits",
        items: [
          "Akses Konten Premium & Eksklusif",
          "Live Streaming Olahraga Tertentu",
          "Lebih Banyak Channel TV Lokal",
          "Bisa Ditonton Di Berbagai Perangkat"
        ]
      },
      {
        type: "note",
        text: "Catatan: Bisa pakai akun pribadi"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Disney+": [
      {
        type: "paragraph",
        text: "Disney+ Premium adalah layanan streaming untuk menikmati film, serial, dan tayangan eksklusif dari Disney, Pixar, Marvel, Star Wars, dan lainnya."
      },
      {
        type: "benefits",
        items: [
          "Anti Screen Limit",
          "Akses Konten Eksklusif",
          "Kualitas Video Hingga 4K",
          "Religion Indonesia Only"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin. Akun Sharing, Kamu mendapatkan 1 Slot Profil Pribadi"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Bstation": [
      {
        type: "paragraph",
        text: "Bstation Premium adalah layanan berlangganan streaming untuk menikmati berbagai anime, donghua, drama, dan film favorit dengan pengalaman menonton yang lebih nyaman."
      },
      {
        type: "benefits",
        items: [
          "Bebas Iklan",
          "Akses Konten Premium & Eksklusif",
          "Kualitas Video Hingga 1080p",
          "Akses Episode Premium Lebih Lengkap"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "HBO Max Standar": [
      {
        type: "paragraph",
        text: "HBO Max Standard adalah layanan streaming untuk menikmati berbagai film blockbuster, serial populer, anime, dan tayangan eksklusif dari HBO, Warner Bros., DC, dan lainnya dengan kualitas Full HD."
      },
      {
        type: "benefits",
        items: [
          "Streaming 2 Perangkat Sekaligus",
          "Kualitas Video Full HD 1080p",
          "Akses Film & Serial Eksklusif",
          "Download Hingga 30 Konten",
          "Hingga 5 Profil dalam 1 Akun"
        ]
      },
      {
        type: "note",
        text: "Catatan: Kualitas dan fitur mengikuti ketentuan paket HBO Max."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "HBO Max Ultimate": [
      {
        type: "paragraph",
        text: "HBO Max Ultimate adalah layanan streaming premium untuk menikmati berbagai film blockbuster, serial populer, anime, dan tayangan eksklusif dengan kualitas gambar dan audio terbaik hingga 4K UHD."
      },
      {
        type: "benefits",
        items: [
          "Streaming 4 Perangkat Sekaligus",
          "Kualitas Video Hingga 4K UHD",
          "Dukungan Dolby Atmos & Dolby Vision",
          "Akses Film & Serial Eksklusif",
          "Download Hingga 100 Konten",
          "Hingga 5 Profil dalam 1 Akun"
        ]
      },
      {
        type: "note",
        text: "Catatan: Kualitas dan fitur mengikuti ketentuan paket HBO Max."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "iQIYI": [
      {
        type: "paragraph",
        text: "iQIYI Premium Private adalah layanan berlangganan streaming untuk menikmati berbagai drama Asia, anime, variety show, dan film favorit dengan pengalaman menonton yang lebih nyaman, menggunakan akun private region US."
      },
      {
        type: "benefits",
        items: [
          "Bebas Iklan",
          "Akses Konten Premium & Eksklusif",
          "Kualitas Video Hingga 1080p",
          "Akun Private (Tidak Sharing)",
          "Region US"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private region US dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],
  
    "Prime Video": [
      {
        type: "paragraph",
        text: "Prime Video Private adalah layanan streaming untuk menikmati berbagai film, serial, dan konten original favorit dengan pengalaman menonton yang lebih nyaman, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Akun Private (Tidak Sharing)",
          "Akses Film & Serial Original",
          "Kualitas Video Hingga Full HD",
          "Bisa Ditonton di Berbagai Perangkat"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Vision+": [
      {
        type: "paragraph",
        text: "Vision+ Paket Sport adalah layanan berlangganan streaming untuk menikmati berbagai tayangan olahraga favorit, pertandingan, dan konten sport lainnya dengan pengalaman menonton yang lebih nyaman."
      },
      {
        type: "benefits",
        items: [
          "Akses Channel & Konten Olahraga",
          "Tayangan Pertandingan Pilihan",
          "Bisa Ditonton di Berbagai Perangkat",
          "Kualitas Video Jernih"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Viu": [
      {
        type: "paragraph",
        text: "Viu Private adalah layanan berlangganan streaming untuk menikmati berbagai drama Korea, drama Asia, variety show, dan anime favorit dengan pengalaman menonton yang lebih nyaman, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Bebas Iklan",
          "Akses Konten Premium",
          "Akun Private (Tidak Sharing)",
          "Kualitas Video Hingga 1080p"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],
 
    "WeTV": [
      {
        type: "paragraph",
        text: "WeTV Premium adalah layanan berlangganan streaming untuk menikmati berbagai drama Asia, anime, dan variety show favorit dengan pengalaman menonton yang lebih nyaman."
      },
      {
        type: "benefits",
        items: [
          "Akses seluruh konten Premium/VIP",
          "Bebas iklan pada konten VIP",
          "Kualitas streaming hingga Full HD (sesuai perangkat)",
          "Download video untuk ditonton secara offline",
          "Akses episode terbaru lebih awal (sesuai ketersediaan konten)",
          "Full Garansi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Silakan konfirmasi ketersediaan stok terlebih dahulu sebelum melakukan pemesanan."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Loklok": [
      {
        type: "paragraph",
        text: "Loklok VIP Dasar/Basic adalah layanan berlangganan streaming untuk menikmati berbagai film, drama Asia, dan anime favorit dengan pengalaman menonton yang lebih nyaman, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Paket VIP Dasar/Basic",
          "Akun Private (Tidak Sharing)",
          "Domain Email Outlook",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin dengan domain email Outlook."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Vidio": [
      {
        type: "paragraph",
        text: "Vidio Platinum adalah paket berlangganan Vidio untuk menikmati berbagai konten premium, film, serial, dan tayangan eksklusif dengan pengalaman menonton yang lebih nyaman, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Paket Platinum",
          "Akun Private (Tidak Sharing)",
          "Support All Device",
          "Akses Konten Premium & Eksklusif",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ]
  },

  "Editing Apps": {
    "Canva": [
      {
        type: "paragraph",
        text: "Canva Pro adalah versi premium Canva dengan akses fitur, template, elemen, dan aset eksklusif untuk membuat desain lebih mudah dan profesional."
      },
      {
        type: "benefits",
        items: [
          "Akses Jutaan Template & Elemen",
          "Akses Ribuan Font Menarik",
          "Hapus Background Otomatis",
          "Simpan Design Jernih"
        ]
      },
      {
        type: "note",
        text: "Catatan: proses menggunakan sistem invite email canva kamu."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Capcut": [
      {
        type: "paragraph",
        text: "CapCut Pro adalah versi premium CapCut dengan fitur editing lebih lengkap, efek dan template eksklusif, serta akses berbagai tools premium untuk membuat video lebih keren dan profesional."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Akses Efek, Font & Template Pro",
          "Akses Tools AI",
          "Hapus Watermark",
          "Ekspor Video Kualitas Tinggi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Alight Motion": [
      {
        type: "paragraph",
        text: "Alight Motion Pro adalah versi premium Alight Motion dengan fitur editing lebih lengkap untuk membuat animasi, motion graphics, dan video profesional."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Akses Efek, Font & Template Pro",
          "Akses Tools AI",
          "Hapus Watermark",
          "Ekspor Video Kualitas Tinggi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Meitu": [
      {
        type: "paragraph",
        text: "Meitu VIP+ Private adalah versi premium Meitu dengan fitur edit foto dan video lebih lengkap, efek dan filter eksklusif, serta akses berbagai tools premium untuk hasil edit lebih keren dan profesional, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Akun Private (Tidak Sharing)",
          "Akses Fitur & Efek VIP+",
          "Tidak Ada Iklan",
          "Hapus Watermark",
          "Support All Device",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Picsart": [
      {
        type: "paragraph",
        text: "Picsart Pro Private adalah versi premium Picsart dengan fitur edit foto dan video lebih lengkap, template, efek, dan tools AI eksklusif untuk membuat desain dan konten lebih keren dan profesional, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Akun Private (Tidak Sharing)",
          "Akses Template, Efek & Font Pro",
          "Akses Tools AI",
          "Tidak Ada Iklan",
          "Hapus Watermark",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Wink": [
      {
        type: "paragraph",
        text: "Wink VIP+ adalah versi premium Wink dengan fitur edit dan perbaikan kualitas video serta foto yang lebih lengkap, efek dan tools AI eksklusif untuk hasil yang lebih jernih dan profesional, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Khusus Android",
          "Akun Private (Tidak Sharing)",
          "Akses Fitur & Tools VIP+",
          "Tidak Ada Iklan",
          "Hapus Watermark",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin, khusus perangkat Android dan tidak bisa digunakan di iOS."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ]
  },

  "Music Apps": {
    "Spotify": [
      {
        type: "paragraph",
        text: "Spotify Premium Family Plan adalah layanan berlangganan musik dan podcast untuk menikmati jutaan lagu tanpa iklan, dengan akses fitur premium seperti putar lagu sesuka hati dan download untuk didengarkan secara offline."
      },
      {
        type: "benefits",
        items: [
          "Akun Private (Tidak Sharing)",
          "Bebas Ganti Password",
          "Support All Device",
          "Bisa Perpanjang Akun yang Sama",
          "Tidak Ada Iklan",
          "Download Lagu Untuk Offline",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Apple Music": [
      {
        type: "paragraph",
        text: "Apple Music Premium Family Head adalah layanan berlangganan Apple Music bagi pengelola grup Family Sharing untuk menikmati jutaan lagu tanpa iklan, kualitas audio lossless, serta download lagu untuk didengarkan secara offline."
      },
      {
        type: "benefits",
        items: [
          "Invite 5 Email Keluarga",
          "Tidak Ada Iklan",
          "Kualitas Audio Lossless & Spatial Audio",
          "Download Lagu Untuk Offline",
          "Support Perangkat Apple & Android",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa menggunakan akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ]
  },

  "AI Apps": {
    "ChatGPT Go": [
      {
        type: "paragraph",
        text: "ChatGPT Go adalah paket berlangganan ChatGPT dengan batas penggunaan lebih besar dibanding akun gratis, untuk membantu menulis, belajar, mencari ide, membuat gambar, dan menyelesaikan berbagai tugas dengan lebih lancar, menggunakan akun private."
      },
      {
        type: "benefits",
        items: [
          "Akun Private (Tidak Sharing)",
          "Include Email Akses",
          "Batas Penggunaan Lebih Besar",
          "Support All Device",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun private dari admin, sudah termasuk akses email."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],
   
    "Gemini Pro": [
      {
        type: "paragraph",
        text: "Gemini Pro adalah paket berlangganan Google Gemini dengan akses fitur AI yang lebih lengkap untuk membantu menulis, belajar, coding, dan menyelesaikan berbagai tugas dengan lebih lancar. Akun Gemini Pro aktif selama 3 bulan."
      },
      {
        type: "benefits",
        items: [
          "Akun Gemini Pro Selama 3 Bulan",
          "Support Argon & Claude Model 5.5",
          "Support Antigravity",
          "Storage Hingga 5TB",
          "Full Bergaransi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ]
  }
};



let selectedSM = null;
let selectedService = null;
let qty = null;

const smBtn = document.getElementById("smBtn");
const smSelected = document.getElementById("smSelected");
const smList = document.getElementById("smList");
const smDropdown = document.getElementById("smDropdown");

const svBtn = document.getElementById("svBtn");
const svSelected = document.getElementById("svSelected");
const svList = document.getElementById("svList");
const svDropdown = document.getElementById("svDropdown");

const qtyStepper = document.getElementById("qtyStepper");
const qtyValue = document.getElementById("qtyValue");
const qtyLabel = document.getElementById("qtyLabel");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const priceValue = document.getElementById("priceValue");
const waBtn = document.getElementById("waBtn");
const toast = document.getElementById("toast");
const descBox = document.getElementById("descBox");
const descText = document.getElementById("descText");

let toastTimer;
function showToast(msg, color) {
  toast.textContent = msg;
  toast.style.background = color || "#038df2"; // default biru kalau nggak diisi
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function stepperLockMessage() {
  if (!selectedSM) return "Pilih kategori terlebih dahulu";
  if (!selectedService) return "Pilih layanan terlebih dahulu";
  return "";
}

function getPriceTable(sm, sv) {
  const service = DATA[sm].services[sv];
  return service.prices ? service.prices : service;
}

function getQtySteps() {
  const priceTable = getPriceTable(selectedSM, selectedService);
  return Object.keys(priceTable).map(Number).sort((a, b) => a - b);
}

function getUnit() {
  return DATA[selectedSM].services[selectedService]?.unit || DATA[selectedSM].unit;
}

function formatQtyDisplay() {
  if (qty === null) { qtyValue.textContent = "-"; return; }
  const unit = getUnit();
  qtyLabel.textContent = ["bulan", "hari"].includes(unit) ? "Pilih Durasi" : "Tentukan Jumlah";
  qtyValue.textContent = unit ? `${qty} ${unit.charAt(0).toUpperCase() + unit.slice(1)}` : qty;
}

// bangun HTML deskripsi sesuai urutan yang ditentukan
function renderDescription(desc) {
  if (!desc) return "";

  return desc.map(item => {
    if (item.type === "paragraph") {
      return `<p>${item.text}</p>`;
    }

    if (item.type === "benefits") {
      return `<ul class="benefit-list">${item.items.map(b => `<li>${b}</li>`).join("")}</ul>`;
    }

    if (item.type === "note") {
      return `<p class="desc-note">${item.text}</p>`;
    }

    return "";
  }).join("");
}

// ====== LABEL KECEPATAN PROSES (tampil di kartu deskripsi) ======
// Di tiap layanan tulis, contoh:
//   proses: "instant"   -> Proses Instant (hijau)
//   proses: "3-5"       -> Proses 3-5 Jam (oranye)
//   proses: "6-7"       -> Proses 6-7 Jam
//   proses: "1 Hari"    -> Proses 1 Hari  (teks bebas, kalau ada kata sendiri tidak ditambah "Jam")
// Kalau tidak ditulis, memakai PROSES_DEFAULT ("" = tanpa label)
const PROSES_DEFAULT = "";

function prosesBadge(sm, sv) {
  let type = DATA[sm].services[sv].proses ?? PROSES_DEFAULT;
  if (!type) return "";
  type = String(type).trim();

  if (type.toLowerCase() === "instant") {
    return `<span class="proses-badge instant"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Proses Instant</span>`;
  }

  // hanya angka/strip (misal "6-7") -> otomatis ditambah " Jam"
  const teks = /^[\d\s\-–]+$/.test(type) ? type + " Jam" : type;
  return `<span class="proses-badge jam"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Proses ${teks}</span>`;
}

Object.keys(DATA).forEach(sm => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${DATA[sm].icon}" alt="${sm}" class="sm-icon"><span>${sm}</span>`;
  li.addEventListener("click", () => {
    selectedSM = sm;
    smSelected.innerHTML = `<img src="${DATA[sm].icon}" alt="${sm}" class="sm-icon"> ${sm}`;
    smDropdown.classList.remove("open");
    smDropdown.classList.remove("attention");

    svDropdown.classList.remove("locked");
    svDropdown.classList.add("attention");

    selectedService = null;
    svSelected.textContent = "Pilih Layanan";
    svList.innerHTML = "";
    qtyStepper.classList.add("locked");
    qty = null;
    qtyValue.textContent = "-";
    qtyLabel.textContent = DATA[sm].unit === "bulan" ? "Pilih Durasi" : "Tentukan Jumlah";
    descBox.style.display = "none";

    Object.keys(DATA[sm].services).forEach(sv => {
      const liSv = document.createElement("li");
      const serviceIcon = DATA[sm].services[sv].icon;
      const badge = prosesBadge(sm, sv);
      liSv.innerHTML = serviceIcon
        ? `<img src="${serviceIcon}" alt="${sv}" class="sm-icon"><span>${sv}</span>`
        : `<span>${sv}</span>`;
      liSv.addEventListener("click", () => {
        selectedService = sv;
        svSelected.innerHTML = serviceIcon
          ? `<img src="${serviceIcon}" alt="${sv}" class="sm-icon"> ${sv}`
          : sv;
        svDropdown.classList.remove("open");
        svDropdown.classList.remove("attention");
        qtyStepper.classList.remove("locked");

        const desc = DESCRIPTIONS[selectedSM]?.[sv];
        if (desc) {
          descText.innerHTML = `<span class="proses-row">${badge}</span>` + renderDescription(desc);
          descBox.style.display = "block";
        } else {
          descBox.style.display = "none";
        }

        const steps = getQtySteps();
        qty = steps[0];
        qtyLabel.textContent = ["bulan", "hari"].includes(getUnit()) ? "Pilih Durasi" : "Tentukan Jumlah";
        formatQtyDisplay();

        updatePrice();
      });
      svList.appendChild(liSv);
    });

    updatePrice();
  });
  smList.appendChild(li);
});

smBtn.addEventListener("click", () => {
  svDropdown.classList.remove("open");
  smDropdown.classList.toggle("open");
});

svBtn.addEventListener("click", () => {
  if (svDropdown.classList.contains("locked")) {
    showToast("Pilih kategori terlebih dahulu");
    return;
  }
  smDropdown.classList.remove("open");
  svDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!smDropdown.contains(e.target)) smDropdown.classList.remove("open");
  if (!svDropdown.contains(e.target)) svDropdown.classList.remove("open");
});

plusBtn.addEventListener("click", () => {
  if (qtyStepper.classList.contains("locked")) {
    showToast(stepperLockMessage());
    return;
  }
  const steps = getQtySteps();
  const idx = steps.indexOf(qty);
  if (idx < steps.length - 1) {
    qty = steps[idx + 1];
    formatQtyDisplay();
    updatePrice();
  }
});

minusBtn.addEventListener("click", () => {
  if (qtyStepper.classList.contains("locked")) {
    showToast(stepperLockMessage());
    return;
  }
  const steps = getQtySteps();
  const idx = steps.indexOf(qty);
  if (idx > 0) {
    qty = steps[idx - 1];
    formatQtyDisplay();
    updatePrice();
  }
});

function updatePrice() {
  const hasVoucher = typeof Voucher !== "undefined";
  if (selectedSM && selectedService && qty !== null) {
    const priceTable = getPriceTable(selectedSM, selectedService);
    const total = priceTable[qty] ?? 0;
    if (hasVoucher) Voucher.refresh(total);
    const v = hasVoucher ? Voucher.calc(total) : { final: total };
    priceValue.textContent = "Rp" + v.final.toLocaleString("id-ID");
    waBtn.disabled = total <= 0;
  } else {
    if (hasVoucher) Voucher.refresh(0);
    priceValue.textContent = "Rp0";
    waBtn.disabled = true;
  }
}

waBtn.addEventListener("click", () => {
  if (!selectedSM || !selectedService || qty === null) return;
  const priceTable = getPriceTable(selectedSM, selectedService);
  const total = priceTable[qty] ?? 0;
  if (total <= 0) return;
  const v = typeof Voucher !== "undefined"
    ? Voucher.calc(total)
    : { final: total, discount: 0, code: null };
  const totalFormatted = "Rp" + v.final.toLocaleString("id-ID");
  const unit = getUnit();
  const unitName = unit ? unit.charAt(0).toUpperCase() + unit.slice(1) : "";
  const jumlahLine = ["bulan", "hari"].includes(unit)
    ? `Durasi: ${qty} ${unitName}`
    : `Jumlah: ${qty} ${unitName}`.trim();

  const voucherLine = v.code
    ? `\nHarga Normal: Rp${total.toLocaleString("id-ID")}\nVoucher: ${v.code} (potongan Rp${v.discount.toLocaleString("id-ID")})`
    : "";

  const message =
`Halo Digimalz, saya mau order:

Sosial Media/Kategori: ${selectedSM}
Layanan: ${selectedService}
${jumlahLine}${voucherLine}
Total Harga: ${totalFormatted}

Mohon info lebih lanjut. Terima kasih!`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  if (v.code) {
    Voucher.consume();
    updatePrice();
  }
});

// ============================================================
// NOTICE BAR - TEKS BERJALAN
// ============================================================

const noticeContent = document.querySelector(".notice-content");

const noticeMessages = [
  "Wellcome to Digimalz.id! 🎉 Pesan layanan produk digital dengan mudah dan cepat.",
  "Digimalz saat ini tidak lagi menjual produk katagori suntik sosmed seperti penambahan followers, likes, views.",
  "Untuk pemesanan aplikasi premium, tanyakan stok terlebih dahulu sebelum order.",
  "Harga yang tertera pada website dapat berubah sewaktu-waktu tanpa pemberitahuan."
];

let noticeIndex = 0;

function runNotice() {
  noticeContent.innerHTML = "";

  const text = document.createElement("div");
  text.className = "notice-js";
  text.textContent = noticeMessages[noticeIndex];

  noticeContent.appendChild(text);

  requestAnimationFrame(() => {
    const containerWidth = noticeContent.offsetWidth;
    const textWidth = text.offsetWidth;

    let position = containerWidth;
    const speed = 1;

    function moveText() {
      position -= speed;
      text.style.transform = `translateX(${position}px)`;

      if (position < -textWidth) {
        noticeIndex++;
        if (noticeIndex >= noticeMessages.length) {
          noticeIndex = 0;
        }
        runNotice();
        return;
      }

      requestAnimationFrame(moveText);
    }

    moveText();
  });
}

window.addEventListener("load", () => {
  runNotice();
});

// ============================================================
// HAMBURGER MENU
// ============================================================

const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  menuPanel.classList.add("show");
  menuOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuPanel.classList.remove("show");
  menuOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// ============================================================
// TESTIMONI - CAROUSEL
// ============================================================

const testimonials = [
  { name: "Putri Kirana", username: "@puputtt", photo: "icon/cw1.png", text: "Prosesnya cepat banget, followers Instagram langsung masuk kurang dari 10 menit. Recommended!" },
  { name: "Rina Azzahra", username: "@rinasukamacha", photo: "icon/cw2.png", text: "Order Netflix Premium di sini, harganya murah dan akunnya awet. Pelayanannya juga ramah." },
  { name: "Tiara Agustina", username: "@tiaaa", photo: "icon/cw3.png", text: "Suka banget sama garansinya, kemarin sempet ada kendala langsung di-refill tanpa ribet." }
];

let testiIndex = 0;

const testiAvatar = document.getElementById("testiAvatar");
const testiName = document.getElementById("testiName");
const testiUsername = document.getElementById("testiUsername");
const testiText = document.getElementById("testiText");
const testiDots = document.getElementById("testiDots");
const testiPrev = document.getElementById("testiPrev");
const testiNext = document.getElementById("testiNext");

function renderTesti() {
  const t = testimonials[testiIndex];
  testiAvatar.src = t.photo;
  testiAvatar.alt = t.name;
  testiName.textContent = t.name;
  testiUsername.textContent = t.username;
  testiText.textContent = t.text;

  testiDots.innerHTML = "";
  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === testiIndex) dot.classList.add("active");
    testiDots.appendChild(dot);
  });
}

testiPrev.addEventListener("click", () => {
  testiIndex = testiIndex === 0 ? testimonials.length - 1 : testiIndex - 1;
  renderTesti();
});

testiNext.addEventListener("click", () => {
  testiIndex = testiIndex === testimonials.length - 1 ? 0 : testiIndex + 1;
  renderTesti();
});

renderTesti();

// ============================================================
// BANNER SLIDER
// ============================================================

const bannerBox = document.querySelector(".banner-box");
const bannerTrack = document.querySelector(".banner-track");
const bannerImages = document.querySelectorAll(".banner-track img");

let bannerIndex = 0;
let bannerTimer;

let startX = 0;
let currentX = 0;
let isDragging = false;

if (bannerTrack && bannerImages.length > 0) {

  function updateBanner() {
    bannerTrack.style.transition = "transform 0.5s ease";
    bannerTrack.style.transform = `translateX(-${bannerIndex * 100}%)`;
  }

  function startBannerTimer() {
    bannerTimer = setInterval(() => {
      bannerIndex++;
      if (bannerIndex >= bannerImages.length) {
        bannerIndex = 0;
      }
      updateBanner();
    }, 5000);
  }

  function stopBannerTimer() {
    clearInterval(bannerTimer);
  }

  function restartBannerTimer() {
    stopBannerTimer();
    startBannerTimer();
  }

  bannerBox.addEventListener("touchstart", (e) => {
    stopBannerTimer();
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    bannerTrack.style.transition = "none";
  }, { passive: true });

  bannerBox.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const moveX = currentX - startX;
    const offset = -(bannerIndex * 100) + (moveX / bannerBox.offsetWidth) * 100;
    bannerTrack.style.transform = `translateX(${offset}%)`;
  }, { passive: true });

  bannerBox.addEventListener("touchend", () => {
    if (!isDragging) return;
    const moveX = currentX - startX;
    bannerTrack.style.transition = "transform 0.5s ease";

    if (moveX < -50) {
      bannerIndex++;
    } else if (moveX > 50) {
      bannerIndex--;
    }

    if (bannerIndex >= bannerImages.length) {
      bannerIndex = 0;
    }
    if (bannerIndex < 0) {
      bannerIndex = bannerImages.length - 1;
    }

    updateBanner();
    isDragging = false;
    restartBannerTimer();
  });

  startBannerTimer();
}

// ==============================
// POPUP IKLAN
// ==============================

const AD_CONFIG = {
  enabled: true,

  image: "icon/popup.png",

  link: "#"
};


document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("adPopup");
  const closeBtn = document.getElementById("adPopupClose");
  const image = document.getElementById("adPopupImage");
  const link = document.getElementById("adPopupLink");

  if (!popup) return;


  // Kalau tidak ada iklan
  if (!AD_CONFIG.enabled || !AD_CONFIG.image) {
    popup.remove();
    return;
  }


  // Pasang gambar iklan
  image.src = AD_CONFIG.image;


  // Link iklan
  if (AD_CONFIG.link && AD_CONFIG.link !== "#") {
    link.href = AD_CONFIG.link;
  } else {
    link.removeAttribute("href");
    link.removeAttribute("target");
  }


  // Tampilkan popup
  setTimeout(() => {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  }, 500);


  // Tutup popup
  function closePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  }


  closeBtn.addEventListener("click", closePopup);


  // Klik area luar popup
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

});

// sembunyikan Crisp sepenuhnya saat halaman pertama dimuat
window.addEventListener("load", () => {
  $crisp.push(["do", "chat:hide"]);
});

// fungsi untuk menyembunyikan HANYA launcher bulat kecil bawaan Crisp,
// jendela chat (yang jauh lebih besar) dibiarkan tetap muncul normal
function hideCrispLauncher() {
  const chatbox = document.getElementById("crisp-chatbox");
  if (!chatbox) return;

  const allEls = chatbox.querySelectorAll("*");
  allEls.forEach(el => {
    const style = window.getComputedStyle(el);
    if (style.position !== "fixed") return;

    const rect = el.getBoundingClientRect();
    if (rect.width > 40 && rect.width < 90 && rect.height > 40 && rect.height < 90) {
      el.style.setProperty("display", "none", "important");
    }
  });
}

// pantau terus perubahan DOM Crisp, karena launcher bisa muncul lagi kapan saja
const crispObserver = new MutationObserver(() => {
  hideCrispLauncher();
});
crispObserver.observe(document.body, { childList: true, subtree: true });

// tombol custom kita
document.getElementById("customChatBtn").addEventListener("click", (e) => {
  e.preventDefault();
  $crisp.push(["do", "chat:show"]);
  $crisp.push(["do", "chat:open"]);
});

// ============================================================
// RATING CS POPUP
// ============================================================

const ratingOverlay = document.getElementById("ratingOverlay");
const ratingQuestion = document.getElementById("ratingQuestion");
const ratingButtons = document.getElementById("ratingButtons");
const ratingThanks = document.getElementById("ratingThanks");
const ratingNoBtn = document.getElementById("ratingNoBtn");
const ratingYesBtn = document.getElementById("ratingYesBtn");

let tombolX = 0;
let tombolY = 0;

function gerakinTombolTidak() {
  const radius = 150;

  const directions = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -0.7071, y: -0.7071 },
    { x: -0.7071, y: 0.7071 },
    { x: 0.7071, y: -0.7071 },
    { x: 0.7071, y: 0.7071 }
  ];

  const rect = ratingNoBtn.getBoundingClientRect();
  const margin = 10;

  const validDirections = directions.filter(dir => {
    const nextLeft = rect.left + dir.x * radius;
    const nextRight = rect.right + dir.x * radius;
    const nextTop = rect.top + dir.y * radius;
    const nextBottom = rect.bottom + dir.y * radius;

    return (
      nextLeft >= margin &&
      nextRight <= window.innerWidth - margin &&
      nextTop >= margin &&
      nextBottom <= window.innerHeight - margin
    );
  });

  if (!validDirections.length) return;

  const dir = validDirections[
    Math.floor(Math.random() * validDirections.length)
  ];

  tombolX += dir.x * radius;
  tombolY += dir.y * radius;

  ratingNoBtn.style.transition = "transform 0.25s ease";
  ratingNoBtn.style.transform =
    `translate(${tombolX}px, ${tombolY}px)`;

  const jumpSound = document.getElementById("jumpSound");

  if (jumpSound) {
    jumpSound.currentTime = 0;
    jumpSound.play().catch(() => {});
  }
}

function resetTombolTidak() {
  tombolX = 0;
  tombolY = 0;

  ratingNoBtn.style.transition = "transform 0.25s ease";
  ratingNoBtn.style.transform = "translate(0, 0)";
}

ratingNoBtn.addEventListener(
  "mouseenter",
  gerakinTombolTidak
);

ratingNoBtn.addEventListener(
  "touchstart",
  e => {
    e.preventDefault();
    gerakinTombolTidak();
  }
);

$crisp.push([
  "on",
  "chat:closed",
  () => {
    resetTombolTidak();

    ratingQuestion.style.display = "block";
    ratingButtons.style.display = "flex";

    ratingThanks.classList.remove("show");

    ratingOverlay.classList.add("show");
  }
]);

ratingYesBtn.addEventListener(
  "click",
  () => {

    const puasSound =
      document.getElementById("puasSound");

    if (puasSound) {
      puasSound.currentTime = 0;
      puasSound.play().catch(() => {});
    }

    resetTombolTidak();

    ratingQuestion.style.display = "none";
    ratingButtons.style.display = "none";

    ratingThanks.classList.add("show");

    const bar =
      document.getElementById("ratingProgressBar");

    if (bar) {
      bar.style.animation = "none";
      bar.offsetHeight;
      bar.style.animation =
        "shrinkBar 5.5s linear forwards";
    }

    setTimeout(() => {
      ratingOverlay.classList.remove("show");
    }, 5500);
  }
);