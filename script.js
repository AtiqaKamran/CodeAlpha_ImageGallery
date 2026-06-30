const images = [
  // NATURE (6)
  { id: 1,  src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", category: "nature", title: "Mountain Sunrise",   views: 2431, featured: true  },
  { id: 2,  src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", category: "nature", title: "Enchanted Forest",   views: 1876, featured: false },
  { id: 3,  src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80", category: "nature", title: "Misty Waterfall",    views: 3102, featured: true  },
  { id: 4,  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", category: "nature", title: "Alpine Peaks",       views: 1654, featured: false },
  { id: 5,  src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", category: "nature", title: "Aerial Valley",      views: 2210, featured: false },
  { id: 6,  src: "https://plus.unsplash.com/premium_photo-1696839222555-39c55f77fe3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEdvbGRlbiUyME1lYWRvd3xlbnwwfHwwfHx8MA%3D%3D", category: "nature", title: "Golden Meadow",      views: 1390, featured: false },
  
  // CITY (6) 
  { id: 7,  src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", category: "city", title: "City at Dusk",       views: 4210, featured: true  },
  { id: 8,  src: "https://images.unsplash.com/photo-1599854171059-d91f0fee45cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJyb29rbHluJTIwQnJpZGdlfGVufDB8fDB8fHww", category: "city", title: "Brooklyn Bridge",    views: 3120, featured: false },
  { id: 9,  src: "https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VG9reW8lMjBDcm9zc2luZ3xlbnwwfHwwfHx8MA%3D%3D", category: "city", title: "Tokyo Crossing",     views: 2876, featured: true  },
  { id: 10, src: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80", category: "city", title: " Statue of Liberty",        views: 2341, featured: false },
  { id: 11, src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80", category: "city", title: "Downtown Skyline",   views: 1987, featured: false },
  { id: 12, src: "https://images.unsplash.com/photo-1491902289130-d9862e8c7982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGFyaXMlMjBieSUyME5pZ2h0fGVufDB8fDB8fHww", category: "city", title: "Paris by Night",     views: 2654, featured: false },
  
  // ANIMALS (6)
  { id: 13, src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80", category: "animals", title: "Fox in Snow",        views: 3560, featured: true  },
  { id: 14, src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80", category: "animals", title: "Panda Portrait",     views: 2987, featured: false },
  { id: 15, src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80", category: "animals", title: "Majestic Lion",      views: 4120, featured: true  },
  { id: 16, src: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&q=80", category: "animals", title: "Sea Turtle",        views: 1876, featured: false },
  { id: 17, src: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&q=80", category: "animals", title: "Golden Bear",  views: 3210, featured: false },
  { id: 18, src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80", category: "animals", title: "Elephant",     views: 2540, featured: false },
  
  // FOOD (6)
  { id: 19, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", category: "food", title: "Gourmet Platter",   views: 4801, featured: true  },
  { id: 20, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", category: "food", title: "Morning Coffee",    views: 3240, featured: false },
  { id: 21, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", category: "food", title: "Pancake Stack",     views: 2876, featured: false },
  { id: 22, src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", category: "food", title: "Fresh Salad Bowl",  views: 1987, featured: false },
  { id: 23, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", category: "food", title: "Artisan Pizza",     views: 3410, featured: true  },
  { id: 24, src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80", category: "food", title: "Donuts ",     views: 2765, featured: false },
  
  // ABSTRACT (6) 
  { id: 25, src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80", category: "abstract", title: "Color Waves",       views: 1230, featured: false },
  { id: 26, src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80", category: "abstract", title: "Paint Brush",        views: 987,  featured: false },
  { id: 27, src: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800&q=80", category: "abstract", title: "Marble Texture",    views: 854,  featured: false },
  { id: 28, src: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D", category: "abstract", title: "Lights",      views: 1102, featured: true  },
  { id: 29, src: "https://images.unsplash.com/photo-1655704705321-3ac52dc67f70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdlb21ldHJpYyUyMFNoYXBlc3xlbnwwfHwwfHx8MA%3D%3D", category: "abstract", title: "Geometric Shapes",  views: 765,  featured: false },
  { id: 30, src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXVyb3JhJTIwRHJlYW18ZW58MHx8MHx8fDA%3D", category: "abstract", title: "Aurora Dream",      views: 1870, featured: false },
  
  // BOOKS (6)
  { id: 31, src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80", category: "books", title: "Grand Library",     views: 2890, featured: true  },
  { id: 32, src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80", category: "books", title: "Classic Shelves",   views: 2102, featured: false },
  { id: 33, src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80", category: "books", title: "Reading Nook",      views: 1765, featured: false },
  { id: 34, src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80", category: "books", title: "Open Pages",        views: 1430, featured: false },
  { id: 35, src: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800&q=80", category: "books", title: "Stacked Volumes",   views: 1210, featured: false },
  { id: 36, src: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm92ZWxzfGVufDB8fDB8fHww", category: "books", title: "Novels",    views: 1980, featured: true  },
  
  // MAKEUP (6) 
  { id: 37, src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80", category: "makeup", title: "Luxury Palette",    views: 2310, featured: true  },
  { id: 38, src: "https://images.unsplash.com/photo-1708735808460-2b131ddefb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhbSUyMG1rZXVwbG9va3xlbnwwfHwwfHx8MA%3D%3D", category: "makeup", title: "Glam Eye Look",     views: 1870, featured: false },
  { id: 39, src: "https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8", category: "makeup", title: "Nail Art Design",    views: 1540, featured: false },
  { id: 40, src: "https://images.unsplash.com/photo-1683223044060-82c6f8855c13?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "makeup", title: "Lipstick Collection", views: 2100, featured: false },
  { id: 41, src: "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "makeup", title: "Nail Paints",     views: 1760, featured: false },
  { id: 42, src: "https://images.unsplash.com/photo-1659517175423-9e94aa553374?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "makeup", title: "Beauty Tools",       views: 1340, featured: false },
  
  // CLOTHES (6)
  { id: 43, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", category: "clothes", title: "Summer Collection", views: 2870, featured: true  },
  { id: 44, src: "https://images.unsplash.com/photo-1617178388553-a9d022974a5c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "clothes", title: "Denim & Leather",   views: 1980, featured: false },
  { id: 45, src: "https://images.unsplash.com/photo-1562645361-c88442d7bc58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww", category: "clothes", title: "Evening Gown",      views: 2410, featured: false },
  { id: 46, src: "https://images.unsplash.com/photo-1670092473608-47d146ea71b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzdWFsJTIwU3RyZWV0d2VhcnxlbnwwfHwwfHx8MA%3D%3D", category: "clothes", title: "Casual Streetwear", views: 1650, featured: false },
  { id: 47, src: "https://images.unsplash.com/photo-1679136343735-d3d41d9fd038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvdXAlMjBtb2RlbCUyMGxvb2tzfGVufDB8fDB8fHww", category: "clothes", title: "Model Look",       views: 3120, featured: true  },
  { id: 48, src: "https://images.unsplash.com/photo-1594883422096-c7f0b81e0133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1pbmltYWwlMjBXYXJkcm9iZXxlbnwwfHwwfHx8MA%3D%3D", category: "clothes", title: "Minimal Wardrobe",  views: 1430, featured: false }
];

//  STATE 
let currentFilter = "all";
let currentSearch = "";
let currentView = "grid";
let currentLightboxIndex = 0;
let totalViews = images.reduce((s, i) => s + i.views, 0);
const featuredCount = images.filter(i => i.featured).length;

//  DOM 
const gallery         = document.getElementById("gallery");
const lightbox        = document.getElementById("lightbox");
const lightboxImg     = document.getElementById("lightboxImg");
const lightboxTitle   = document.getElementById("lightboxTitle");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCategory= document.getElementById("lightboxCategory");
const lightboxViews   = document.getElementById("lightboxViews");
const searchInput     = document.getElementById("searchInput");
const clearSearchBtn  = document.getElementById("clearSearch");
const themeToggle     = document.getElementById("themeToggle");
const themeToggleCover= document.getElementById("themeToggleCover");
const viewToggle      = document.getElementById("viewToggle");
const filterBtns      = document.querySelectorAll(".filter-btn");
const resetFiltersBtn = document.getElementById("resetFilters");
const clearAllFilters = document.getElementById("clearAllFilters");
const noResults       = document.getElementById("noResults");
const backToTop       = document.getElementById("backToTop");
const backToGalleryBtn= document.getElementById("backToGalleryBtn");
const toast           = document.getElementById("toast");
const exploreBtn      = document.getElementById("exploreBtn");
const galleryNavLink  = document.getElementById("galleryNavLink");
const aboutNavLink    = document.getElementById("aboutNavLink");
const homeNavLink     = document.getElementById("homeNavLink");
const aboutSection    = document.getElementById("aboutSection");
const coverHero       = document.getElementById("coverHero");
const galleryContainer = document.getElementById("galleryContainer");
const coverLikeBtn    = document.getElementById("coverLikeBtn");
const likeCount       = document.getElementById("likeCount");
const closeLightboxBtn= document.getElementById("closeLightbox");
const prevImageBtn    = document.getElementById("prevImage");
const nextImageBtn    = document.getElementById("nextImage");
const downloadBtn     = document.getElementById("downloadImage");

// NAVIGATION 
function showAbout() {
  aboutSection.classList.add("active");
  coverHero.style.display = "none";
  galleryContainer.style.display = "none";
  backToGalleryBtn.classList.add("show");
  document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
  aboutNavLink.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  aboutSection.classList.remove("active");
  coverHero.style.display = "flex";
  galleryContainer.style.display = "block";
  backToGalleryBtn.classList.remove("show");
  document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
  homeNavLink.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGallery() {
  aboutSection.classList.remove("active");
  coverHero.style.display = "flex";
  galleryContainer.style.display = "block";
  backToGalleryBtn.classList.remove("show");
  document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
  galleryNavLink.classList.add("active");
  // Scroll to gallery section
  document.getElementById("galleryContainer").scrollIntoView({ behavior: "smooth" });
}

// RENDER GALLERY
function renderGallery() {
  let filtered = [...images];
  if (currentFilter !== "all") filtered = filtered.filter(i => i.category === currentFilter);
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(i => i.title.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
  }

  document.getElementById("imageCount").textContent = filtered.length;
  document.getElementById("viewCount").textContent  = totalViews.toLocaleString();
  document.getElementById("featuredCount").textContent = featuredCount;

  if (filtered.length === 0) {
    gallery.style.display = "none";
    noResults.classList.add("active");
    return;
  }
  gallery.style.display = "grid";
  noResults.classList.remove("active");
  gallery.className = `gallery ${currentView}-view`;

  gallery.innerHTML = filtered.map(img => `
    <div class="gallery-item" data-id="${img.id}">
      ${img.featured ? '<span class="featured-badge">★ FEATURED</span>' : ''}
      <img src="${img.src}" alt="${img.title}" class="gallery-img" loading="lazy" />
      <div class="gallery-info">
        <div class="gallery-title">${img.title}</div>
        <div class="gallery-meta">
          <span class="gallery-category">${img.category.toUpperCase()}</span>
          <span class="gallery-views"><i class="fas fa-eye"></i> ${img.views.toLocaleString()}</span>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => {
      const id  = parseInt(el.dataset.id);
      const idx = images.findIndex(i => i.id === id);
      if (idx !== -1) { currentLightboxIndex = idx; openLightbox(idx); }
    });
  });
}

// LIGHTBOX 
function openLightbox(index) {
  const img = images[index];
  lightboxImg.src          = img.src;
  lightboxTitle.textContent   = img.title;
  lightboxCaption.textContent = img.title;
  lightboxCategory.textContent= img.category.toUpperCase();
  lightboxViews.textContent   = `${img.views.toLocaleString()} views`;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
  images[index].views++;
  totalViews++;
  renderGallery();
}
function closeLightbox() { lightbox.classList.remove("active"); document.body.style.overflow = "auto"; }
function nextImage() { currentLightboxIndex = (currentLightboxIndex + 1) % images.length; openLightbox(currentLightboxIndex); }
function prevImage() { currentLightboxIndex = (currentLightboxIndex - 1 + images.length) % images.length; openLightbox(currentLightboxIndex); }

function downloadCurrent() {
  const img = images[currentLightboxIndex];
  fetch(img.src).then(r => r.blob()).then(blob => {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement("a");
    a.href = url; a.download = `${img.title}.jpg`; a.click();
    URL.revokeObjectURL(url); showToast("Downloaded ");
  }).catch(() => showToast("Download failed "));
}

// SEARCH 
function handleSearch() {
  currentSearch = searchInput.value;
  clearSearchBtn.classList.toggle("visible", currentSearch.length > 0);
  renderGallery();
}
function clearSearchInput() { searchInput.value = ""; currentSearch = ""; clearSearchBtn.classList.remove("visible"); renderGallery(); }

//  FILTERS 
function setFilter(cat) {
  currentFilter = cat;
  filterBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === cat));
  renderGallery();
}
function resetAllFilters() {
  currentFilter = "all"; currentSearch = ""; searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  filterBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "all"));
  renderGallery(); showToast("Filters reset");
}

function toggleView() {
  currentView = currentView === "grid" ? "list" : "grid";
  viewToggle.innerHTML = currentView === "list" ? '<i class="fas fa-list"></i>' : '<i class="fas fa-th-large"></i>';
  showToast(currentView === "list" ? "List view" : "Grid view");
  renderGallery();
}

//  THEME 
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    if (themeToggleCover) themeToggleCover.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (themeToggleCover) themeToggleCover.innerHTML = '<i class="fas fa-sun"></i>';
  }
}
function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (themeToggleCover) themeToggleCover.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

//  COVER SLIDER 
const slides = document.querySelectorAll(".cover-slide");
const dots   = document.querySelectorAll(".dot");
let slideIndex = 0;
function goToSlide(n) {
  slides[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active");
  slideIndex = n;
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}
let sliderInterval = setInterval(() => goToSlide((slideIndex + 1) % slides.length), 4500);
dots.forEach(dot => dot.addEventListener("click", () => {
  clearInterval(sliderInterval);
  goToSlide(parseInt(dot.dataset.slide));
  sliderInterval = setInterval(() => goToSlide((slideIndex + 1) % slides.length), 4500);
}));

// LIKE BUTTON 
let liked = false;
let likes = 8;
coverLikeBtn.addEventListener("click", () => {
  liked = !liked;
  likes += liked ? 1 : -1;
  likeCount.textContent = likes;
  coverLikeBtn.classList.toggle("liked", liked);
  coverLikeBtn.innerHTML = liked ? '<i class="fas fa-thumbs-up"></i>' : '<i class="far fa-thumbs-up"></i>';
});

//  TOAST 
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

//  BACK TO TOP 
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
backToGalleryBtn.addEventListener("click", showGallery);

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape")      closeLightbox();
  if (e.key === "ArrowRight")  nextImage();
  if (e.key === "ArrowLeft")   prevImage();
});

// EVENTS 
searchInput.addEventListener("input", handleSearch);
clearSearchBtn.addEventListener("click", clearSearchInput);
themeToggle.addEventListener("click", toggleTheme);
if (themeToggleCover) 
  themeToggleCover.addEventListener("click", toggleTheme);
viewToggle.addEventListener("click", toggleView);
resetFiltersBtn.addEventListener("click", resetAllFilters);
clearAllFilters.addEventListener("click", resetAllFilters);
closeLightboxBtn.addEventListener("click", closeLightbox);
prevImageBtn.addEventListener("click", prevImage);
nextImageBtn.addEventListener("click", nextImage);
downloadBtn.addEventListener("click", downloadCurrent);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
filterBtns.forEach(btn => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));

// Navigation Events
aboutNavLink.addEventListener("click", showAbout);
homeNavLink.addEventListener("click", showHome);
galleryNavLink.addEventListener("click", showGallery);
exploreBtn.addEventListener("click", showGallery);

loadTheme();
renderGallery();