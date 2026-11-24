/* Added 2026-11-23: version detection that also works once the site is published
   as index.html. Working files (index_rayanmadeit_V###.html) keep reading their
   number from the file name; a published page declares window.RMI_SITE_VERSION. */
function __rmiVersionMatch() {
  const fromName = window.location.pathname.match(/index_rayanmadeit_V(\d+)\.html/);
  if (fromName) return fromName;
  if (window.RMI_SITE_VERSION) {
    const v = String(window.RMI_SITE_VERSION);
    return ['index_rayanmadeit_V' + v + '.html', v];
  }
  return null;
}

// ==========================================================================
// MODE DE DÉVELOPPEMENT / THÈME FORCE
// Définir 'dark' ou 'light' pour forcer manuellement la couleur de toute l'interface.
// Laisser null pour suivre automatiquement le thème défini dans slideData.
// ==========================================================================
window.portfolioThemeOverride = 'dark'; // Force l'interface en blanc (idéal pour fond sombre)

document.addEventListener('DOMContentLoaded', () => {
  // Auto-detect version to inject styling wrapper class
  const mainVersionMatch = __rmiVersionMatch();
  const mainVersion = mainVersionMatch ? parseInt(mainVersionMatch[1], 10) : 4;
  if (mainVersion >= 5) {
    document.body.classList.add('version-v5');
  }
  if (mainVersion >= 6) {
    document.body.classList.add('version-v6-plus');
  }
  if (mainVersion >= 7) {
    document.body.classList.add('version-v7-plus');
  }
  if (mainVersion >= 9) {
    document.body.classList.add('version-v9-plus');
  }
  if (mainVersion >= 10) {
    document.body.classList.add('version-v10-plus');
  }
  if (mainVersion >= 12) {
    document.body.classList.add('version-v12-plus');
  }
  if (mainVersion >= 13) {
    document.body.classList.add('version-v13-plus');
  }
  if (mainVersion >= 14) {
    document.body.classList.add('version-v14-plus');
  }
  if (mainVersion >= 15) {
    document.body.classList.add('version-v15-plus');
  }
  if (mainVersion >= 16) {
    document.body.classList.add('version-v16-plus');
  }
  if (mainVersion >= 17) {
    document.body.classList.add('version-v17-plus');
  }
  if (mainVersion >= 18) {
    document.body.classList.add('version-v18-plus');
  }
  if (mainVersion >= 19) {
    document.body.classList.add('version-v19-plus');
  }
  if (mainVersion >= 20) {
    document.body.classList.add('version-v20-plus');
  }
  if (mainVersion >= 21) {
    document.body.classList.add('version-v21-plus');
  }
  if (mainVersion >= 22) {
    document.body.classList.add('version-v22-plus');
  }
  if (mainVersion >= 23) {
    document.body.classList.add('version-v23-plus');
  }
  if (mainVersion >= 25) {
    document.body.classList.add('version-v25-plus');
  }
  if (mainVersion >= 26) {
    document.body.classList.add('version-v26-plus');
  }
  if (mainVersion >= 27) {
    document.body.classList.add('version-v27-plus');
  }
  if (mainVersion >= 28) {
    document.body.classList.add('version-v28-plus');
  }
  if (mainVersion >= 29) {
    document.body.classList.add('version-v29-plus');
  }
  if (mainVersion >= 30) {
    document.body.classList.add('version-v30-plus');
  }
  if (mainVersion >= 31) {
    document.body.classList.add('version-v31-plus');
  }
  if (mainVersion >= 32) {
    document.body.classList.add('version-v32-plus');
  }
  if (mainVersion >= 33) {
    document.body.classList.add('version-v33-plus');
  }
  if (mainVersion >= 34) {
    document.body.classList.add('version-v34-plus');
  }
  if (mainVersion >= 35) {
    document.body.classList.add('version-v35-plus');
  }
  if (mainVersion >= 36) {
    document.body.classList.add('version-v36-plus');
  }
  if (mainVersion >= 37) {
    document.body.classList.add('version-v37-plus');
  }
  if (mainVersion >= 38) {
    document.body.classList.add('version-v38-plus');
  }
  if (mainVersion >= 39) {
    document.body.classList.add('version-v39-plus');
  }
  if (mainVersion >= 40) {
    document.body.classList.add('version-v40-plus');
  }
  if (mainVersion >= 41) {
    document.body.classList.add('version-v41-plus');
  }
  if (mainVersion >= 42) {
    document.body.classList.add('version-v42-plus');
  }
  if (mainVersion >= 43) {
    document.body.classList.add('version-v43-plus');
  }
  if (mainVersion >= 44) {
    document.body.classList.add('version-v44-plus');
  }
  if (mainVersion >= 45) {
    document.body.classList.add('version-v45-plus');
  }
  if (mainVersion >= 46) {
    document.body.classList.add('version-v46-plus');
  }
  if (mainVersion >= 47) {
    document.body.classList.add('version-v47-plus');
  }
  if (mainVersion >= 48) {
    document.body.classList.add('version-v48-plus');
  }
  if (mainVersion >= 49) {
    document.body.classList.add('version-v49-plus');
  }
  if (mainVersion >= 50) {
    document.body.classList.add('version-v50-plus');
  }
  if (mainVersion >= 51) {
    document.body.classList.add('version-v51-plus');
  }
  if (mainVersion >= 52) {
    document.body.classList.add('version-v52-plus');
  }
  if (mainVersion >= 53) {
    document.body.classList.add('version-v53-plus');
  }
  if (mainVersion >= 54) {
    document.body.classList.add('version-v54-plus');
  }
  if (mainVersion >= 55) {
    document.body.classList.add('version-v55-plus');
  }
  if (mainVersion >= 56) {
    document.body.classList.add('version-v56-plus');
  }
  if (mainVersion >= 57) {
    document.body.classList.add('version-v57-plus');
  }
  if (mainVersion >= 58) {
    document.body.classList.add('version-v58-plus');
  }
  if (mainVersion >= 59) {
    document.body.classList.add('version-v59-plus');
  }
  if (mainVersion >= 60) {
    document.body.classList.add('version-v60-plus');
  }
  if (mainVersion >= 61) {
    document.body.classList.add('version-v61-plus');
  }
  if (mainVersion >= 62) {
    document.body.classList.add('version-v62-plus');
  }
  if (mainVersion >= 63) {
    document.body.classList.add('version-v63-plus');
  }
  if (mainVersion >= 64) {
    document.body.classList.add('version-v64-plus');
  }
  if (mainVersion >= 65) {
    document.body.classList.add('version-v65-plus');
  }
  if (mainVersion >= 66) {
    document.body.classList.add('version-v66-plus');
  }
  if (mainVersion >= 67) {
    document.body.classList.add('version-v67-plus');
  }
  if (mainVersion >= 68) {
    document.body.classList.add('version-v68-plus');
  }
  if (mainVersion >= 69) {
    document.body.classList.add('version-v69-plus');
  }
  if (mainVersion >= 70) {
    document.body.classList.add('version-v70-plus');
  }
  if (mainVersion >= 71) {
    document.body.classList.add('version-v71-plus');
  }
  if (mainVersion >= 72) {
    document.body.classList.add('version-v72-plus');
  }
  if (mainVersion >= 73) {
    document.body.classList.add('version-v73-plus');
  }
  if (mainVersion >= 74) {
    document.body.classList.add('version-v74-plus');
  }
  if (mainVersion >= 75) {
    document.body.classList.add('version-v75-plus');
  }
  if (mainVersion >= 76) {
    document.body.classList.add('version-v76-plus');
  }
  if (mainVersion >= 77) {
    document.body.classList.add('version-v77-plus');
  }
  if (mainVersion >= 78) {
    document.body.classList.add('version-v78-plus');
  }
  if (mainVersion >= 79) {
    document.body.classList.add('version-v79-plus');
  }
  if (mainVersion >= 80) {
    document.body.classList.add('version-v80-plus');
  }
  if (mainVersion >= 81) {
    document.body.classList.add('version-v81-plus');
  }
  if (mainVersion >= 82) {
    document.body.classList.add('version-v82-plus');
  }
  if (mainVersion >= 83) {
    document.body.classList.add('version-v83-plus');
  }
  if (mainVersion >= 84) {
    document.body.classList.add('version-v84-plus');
  }
  if (mainVersion >= 85) {
    document.body.classList.add('version-v85-plus');
  }
  if (mainVersion >= 86) {
    document.body.classList.add('version-v86-plus');
  }
  if (mainVersion >= 87) {
    document.body.classList.add('version-v87-plus');
  }
  if (mainVersion >= 88) {
    document.body.classList.add('version-v88-plus');
  }
  if (mainVersion >= 89) {
    document.body.classList.add('version-v89-plus');
  }
  if (mainVersion >= 90) {
    document.body.classList.add('version-v90-plus');
  }
  if (mainVersion >= 91) {
    document.body.classList.add('version-v91-plus');
  }
  if (mainVersion >= 92) {
    document.body.classList.add('version-v92-plus');
  }
  if (mainVersion >= 93) {
    document.body.classList.add('version-v93-plus');
  }
  if (mainVersion >= 94) {
    document.body.classList.add('version-v94-plus');
  }
  if (mainVersion >= 95) {
    document.body.classList.add('version-v95-plus');
  }
  if (mainVersion >= 96) {
    document.body.classList.add('version-v96-plus');
  }
  if (mainVersion >= 97) {
    document.body.classList.add('version-v97-plus');
  }
  if (mainVersion >= 98) {
    document.body.classList.add('version-v98-plus');
  }
  if (mainVersion >= 99) {
    document.body.classList.add('version-v99-plus');
  }
  if (mainVersion >= 100) {
    document.body.classList.add('version-v100-plus');
  }
  if (mainVersion >= 101) {
    document.body.classList.add('version-v101-plus');
  }
  if (mainVersion >= 102) {
    document.body.classList.add('version-v102-plus');
  }
  if (mainVersion >= 103) {
    document.body.classList.add('version-v103-plus');
  }
  if (mainVersion >= 104) {
    document.body.classList.add('version-v104-plus');
  }
  if (mainVersion >= 105) {
    document.body.classList.add('version-v105-plus');
  }
  if (mainVersion >= 106) {
    document.body.classList.add('version-v106-plus');
  }
  if (mainVersion >= 107) {
    document.body.classList.add('version-v107-plus');
  }
  if (mainVersion >= 108) {
    document.body.classList.add('version-v108-plus');
  }
  if (mainVersion >= 109) {
    document.body.classList.add('version-v109-plus');
  }
  if (mainVersion >= 110) {
    document.body.classList.add('version-v110-plus');
  }
  if (mainVersion >= 111) {
    document.body.classList.add('version-v111-plus');
  }
  if (mainVersion >= 112) {
    document.body.classList.add('version-v112-plus');
  }
  if (mainVersion >= 113) {
    document.body.classList.add('version-v113-plus');
  }
  if (mainVersion >= 114) {
    document.body.classList.add('version-v114-plus');
  }
  if (mainVersion >= 115) {
    document.body.classList.add('version-v115-plus');
  }
  if (mainVersion >= 116) {
    document.body.classList.add('version-v116-plus');
  }
  if (mainVersion >= 117) {
    document.body.classList.add('version-v117-plus');
  }
  if (mainVersion >= 118) {
    document.body.classList.add('version-v118-plus');
  }
  if (mainVersion >= 119) {
    document.body.classList.add('version-v119-plus');
  }
  if (mainVersion >= 120) {
    document.body.classList.add('version-v120-plus');
  }
  if (mainVersion >= 121) {
    document.body.classList.add('version-v121-plus');
  }
  if (mainVersion >= 122) {
    document.body.classList.add('version-v122-plus');
  }
  if (mainVersion >= 123) {
    document.body.classList.add('version-v123-plus');
  }
  if (mainVersion >= 124) {
    document.body.classList.add('version-v124-plus');
  }
  if (mainVersion >= 125) {
    document.body.classList.add('version-v125-plus');
  }
  if (mainVersion >= 126) {
    document.body.classList.add('version-v126-plus');
  }
  if (mainVersion >= 127) {
    document.body.classList.add('version-v127-plus');
  }
  if (mainVersion >= 128) {
    document.body.classList.add('version-v128-plus');
  }
  if (mainVersion >= 129) {
    document.body.classList.add('version-v129-plus');
  }
  if (mainVersion >= 130) {
    document.body.classList.add('version-v130-plus');
  }
  if (mainVersion >= 131) {
    document.body.classList.add('version-v131-plus');
  }
  if (mainVersion >= 132) {
    document.body.classList.add('version-v132-plus');
  }
  if (mainVersion >= 133) {
    document.body.classList.add('version-v133-plus');
  }
  if (mainVersion >= 134) {
    document.body.classList.add('version-v134-plus');
  }
  if (mainVersion >= 135) {
    document.body.classList.add('version-v135-plus');
  }
  if (mainVersion >= 136) {
    document.body.classList.add('version-v136-plus');
  }
  if (mainVersion >= 137) {
    document.body.classList.add('version-v137-plus');
  }
  if (mainVersion >= 138) {
    document.body.classList.add('version-v138-plus');
  }
  if (mainVersion >= 139) {
    document.body.classList.add('version-v139-plus');
  }
  if (mainVersion >= 140) {
    document.body.classList.add('version-v140-plus');
  }
  if (mainVersion >= 141) {
    document.body.classList.add('version-v141-plus');
  }
  if (mainVersion >= 142) {
    document.body.classList.add('version-v142-plus');
  }
  if (mainVersion >= 143) {
    document.body.classList.add('version-v143-plus');
  }
  if (mainVersion >= 144) {
    document.body.classList.add('version-v144-plus');
  }
  if (mainVersion >= 145) {
    document.body.classList.add('version-v145-plus');
  }
  if (mainVersion >= 146) {
    document.body.classList.add('version-v146-plus');
  }
  if (mainVersion >= 149) {
    document.body.classList.add('version-v149-plus');
  }
  if (mainVersion >= 150) {
    document.body.classList.add('version-v150-plus');
  }
  if (mainVersion >= 151) {
    document.body.classList.add('version-v151-plus');
  }
  if (mainVersion >= 152) {
    document.body.classList.add('version-v152-plus');
  }
  if (mainVersion >= 153) {
    document.body.classList.add('version-v153-plus');
  }
  if (mainVersion >= 154) {
    document.body.classList.add('version-v154-plus');
  }
  if (mainVersion >= 155) {
    document.body.classList.add('version-v155-plus');
  }
  if (mainVersion >= 156) {
    document.body.classList.add('version-v156-plus');
  }
  if (mainVersion >= 157) {
    document.body.classList.add('version-v157-plus');
    if (mainVersion < 158) {
      initAboutV157LetterReveal();
    }
  }
  if (mainVersion >= 158) {
    document.body.classList.add('version-v158-plus');
    if (mainVersion < 159) {
      initAboutV158Typewriter();
    }
  }
  if (mainVersion >= 159) {
    document.body.classList.add('version-v159-plus');
    if (mainVersion < 160) {
      initAboutV159Typewriter();
    }
  }
  if (mainVersion >= 160) {
    document.body.classList.add('version-v160-plus');
  }
  if (mainVersion >= 161) {
    document.body.classList.add('version-v161-plus');
  }
  if (mainVersion >= 162) {
    document.body.classList.add('version-v162-plus');
  }
  if (mainVersion >= 163) {
    document.body.classList.add('version-v163-plus');
  }
  if (mainVersion >= 164) {
    document.body.classList.add('version-v164-plus');
  }
  if (mainVersion >= 165) {
    document.body.classList.add('version-v165-plus');
  }
  if (mainVersion >= 166) {
    document.body.classList.add('version-v166-plus');
  }
  if (mainVersion >= 167) {
    document.body.classList.add('version-v167-plus');
  }
  if (mainVersion >= 168) {
    document.body.classList.add('version-v168-plus');
  }
  if (mainVersion >= 169) {
    document.body.classList.add('version-v169-plus');
  }
  if (mainVersion >= 170) {
    document.body.classList.add('version-v170-plus');
  }
  if (mainVersion >= 171) {
    document.body.classList.add('version-v171-plus');
  }
  if (mainVersion >= 172) {
    document.body.classList.add('version-v172-plus');
  }
  if (mainVersion >= 173) {
    document.body.classList.add('version-v173-plus');
  }
  if (mainVersion >= 174) {
    document.body.classList.add('version-v174-plus');
  }
  if (mainVersion === 175) {
    document.body.classList.add('version-v175-plus');
  }
  if (mainVersion === 176) {
    document.body.classList.add('version-v176-plus');
  }
  if (mainVersion === 177) {
    document.body.classList.add('version-v177-plus');
  }
  if (mainVersion >= 178) {
    document.body.classList.add('version-v178-plus');
  }
  if (mainVersion >= 179) {
    document.body.classList.add('version-v179-plus');
  }
  if (mainVersion >= 180) {
    document.body.classList.add('version-v180-plus');
  }
  if (mainVersion >= 181) {
    document.body.classList.add('version-v181-plus');
  }
  if (mainVersion >= 183) {
    document.body.classList.add('version-v183-plus');
  }
  if (mainVersion >= 184) {
    document.body.classList.add('version-v184-plus');
  }
  if (mainVersion >= 185) {
    document.body.classList.add('version-v185-plus');
  }



  // --- Slideshow Dataset (10 projects with default dark theme) ---
  const slideData = [
    { title: "Sentinels of Silence", type: "Cinema / Music Video", theme: "dark" },
    { title: "Resonance", type: "Artistic Music Video", theme: "dark" },
    { title: "Under the Concrete", type: "Creative Documentary", theme: "dark" },
    { title: "Urban Fragments", type: "Experimental / Video Art", theme: "dark" },
    { title: "Ethereal Echoes", type: "Sound Installation", theme: "dark" },
    { title: "Mechanical Ballet", type: "Experimental Short", theme: "dark" },
    { title: "Geometry of Light", type: "Video Art", theme: "dark" },
    { title: "Lost Horizon", type: "Documentary Short", theme: "dark" },
    { title: "Monolith", type: "Music Film", theme: "dark" },
    { title: "Symmetry of Sound", type: "Visual Album", theme: "dark" }
  ];

  // Helper to toggle body global theme classes (Declared at DOMContentLoaded root scope)
  function applyInterfaceTheme(index) {
    const activeSlideData = slideData[index];
    const targetTheme = window.portfolioThemeOverride || (activeSlideData ? activeSlideData.theme : 'dark');
    
    if (targetTheme === 'dark') {
      document.body.classList.add('theme-dark-interface');
      document.body.classList.remove('theme-light-interface');
    } else {
      document.body.classList.add('theme-light-interface');
      document.body.classList.remove('theme-dark-interface');
    }
  }

  // --- Dynamic Projects Dataset ---
  const projects = [
    {
      index: 0,
      category: "production",
      type: "single",
      title: "GO CRAZY",
      artist: "Sidi",
      year: 2026,
      role: "Composition & Arrangement",
      mixing: "Loïc Dubois",
      mastering: "Loïc Dubois",
      cover: "assets/projects/production/go-crazy/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/0jBNShOG9xhH7Lvhrmekw7?si=2a80bb38a44d4424"
    },
    {
      index: 1,
      category: "production",
      type: "single",
      title: "Pétard",
      artist: "Sidi",
      year: 2026,
      role: "Composition & Arrangement",
      mixing: "Loïc Dubois",
      mastering: "Loïc Dubois",
      cover: "assets/projects/production/petard/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/6UOmqg9fJJd9qZfJjcDNem?si=1a237c67dcde44f1"
    },
    {
      index: 2,
      category: "production",
      type: "single",
      title: "ZEUDOG IS BACK #1 (Mouah)",
      artist: "Sean",
      year: 2025,
      role: "Composition & Arrangement",
      mixing: "Clément Poisson",
      mastering: "Mathieu Bameulle",
      cover: "assets/projects/production/zeudog-is-back-1/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/71Cupa9D9MmvxaVGtu6RX0?si=c1e6ce33b3014524",
      youtube: "https://www.youtube.com/watch?v=UmOCrDBRZEM"
    },
    {
      index: 3,
      category: "sound-to-image",
      type: "documentary",
      title: "Park Chan Wook, l'art de la vengeance",
      artist: "Pierre-Paul Puljiz",
      year: 2026,
      role: "Composition",
      producedBy: "Canal+",
      availableOn: "Cine+ OCS",
      cover: "assets/projects/sound-to-image/park-chan-wook/cover.jpg",
      link: "https://www.canalplus.com/cinema/park-chan-wook-l-art-de-la-vengeance/h/31422840_50002"
    },
    {
      index: 4,
      category: "sound-to-image",
      type: "video",
      title: "The dream I never had",
      artist: "Moran Moradi",
      year: 2026,
      role: "Composition & Sound Design",
      cover: "assets/projects/sound-to-image/the-dream-i-never-had/poster.jpg",
      video: "assets/projects/sound-to-image/the-dream-i-never-had/video.mp4"
    },
    {
      index: 5,
      category: "production",
      type: "ep",
      title: "<3",
      artist: "Sidi",
      year: 2025,
      role: "Composition & Arrangement",
      mixing: "Loïc Dubois",
      mastering: "Loïc Dubois",
      cover: "assets/projects/production/heart/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/album/1xQE582bCXVzBOwrXOXALI?si=FEJT-L1nSHOnoGy6fhJAUQ",
      tracklist: [
        { name: "Mieux ici <3", spotify: "https://open.spotify.com/intl-fr/track/2r6Pdsnv7Td24Cz23KNRiw?si=585dc0b44bd44cbe" },
        { name: "Sûr de toi <3", spotify: "https://open.spotify.com/intl-fr/track/1efmV1F9W0GEyUnBB87OSw?si=f7c57327bef6437a" }
      ]
    },
    {
      index: 6,
      category: "production",
      type: "ep",
      title: "Adieu là-bas",
      artist: "Sidi",
      year: 2025,
      role: "Composition & Arrangement",
      mixing: "Loïc Dubois",
      mastering: "Antoine Voidey",
      cover: "assets/projects/production/adieu-la-bas/cover.jpg",
      spotify: "https://open.spotify.com/album/4vrTkJVtuzI24ehkAoOC6Z?si=8R8fBRj-R_GK2FJfWVhy_A",
      tracklist: [
        { name: "Seul", spotify: "https://open.spotify.com/intl-fr/track/5ZbDpqb2iqznWhaHEFKcUC?si=9161ef8f3e724358", youtube: "https://www.youtube.com/watch?v=rlETmAQNAPw" },
        { name: "Layla", spotify: "https://open.spotify.com/intl-fr/track/3aEgUBqkHchh7sg3c88Z3N?si=47b9807f71864c26" },
        { name: "Caïn & Abel", spotify: "https://open.spotify.com/intl-fr/track/1YEjv8pqRm0lowIaxIm2YQ?si=446a645a313e4d43" },
        { name: "Heaven", spotify: "https://open.spotify.com/intl-fr/track/1R5iCT7491Mp3My2nu9KqV?si=9e7683094d6d42f2" },
        { name: "Bloqué dans tristesse", spotify: "https://open.spotify.com/intl-fr/track/7iw7VMCNIFssKxkbwK71wb?si=1ea43c39a2764f5b", youtube: "https://www.youtube.com/watch?v=yUpMJ84cgpY" },
        { name: "Adieu là-bas", spotify: "https://open.spotify.com/intl-fr/track/02UYmKnscLd6jqv4z8GUpA?si=84d9490cb2a04646" }
      ]
    },
    {
      index: 7,
      category: "production",
      type: "single",
      title: "Lately",
      artist: "Sidi",
      year: 2024,
      role: "Composition & Arrangement",
      cover: "assets/projects/production/lately/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/0S7FIr08QRS8WOA1yOKwKz?si=e32b8b1f555d4a83"
    },
    {
      index: 8,
      category: "production",
      type: "single",
      title: "Cassé",
      artist: "Sidi",
      year: 2023,
      role: "Composition & Arrangement",
      mixing: "Antoine Voidey",
      mastering: "Antoine Voidey",
      cover: "assets/projects/production/casse/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/7vSgWweHRkCmbzLDjt0pI6?si=ec0c632be54f4ab1"
    }
  ];

  if (mainVersion >= 165) {
    projects.push({
      index: 9,
      category: "production",
      type: "single",
      title: "VELIB'BLEU",
      artist: "Sean",
      year: 2026,
      role: "Composition / Lyrics & Arrangement",
      mixing: "Clément Poisson",
      mastering: "Mathieu Bameulle",
      cover: "assets/projects/production/velib-bleu/cover.jpg",
      spotify: "https://open.spotify.com/intl-fr/track/4IeQKn5Lti8iobHsBdYUYu?si=f6bb490285b04ea4"
    });
    // Added 2026-11-16: tfkpourlafindumonde? (Sean), released 2026-11-05
    projects.push({
      index: 10,
      category: "production",
      type: "single",
      title: "tfkpourlafindumonde?",
      preserveCase: true, // displayed in lowercase, as written (no uppercase transform)
      artist: "Sean",
      year: 2026,
      role: "Composition",
      mixing: "Clément Poisson",
      mastering: "Mathieu Bameulle",
      cover: "https://i.scdn.co/image/ab67616d0000b273f806818b0a8dcb297d1b0860",
      spotify: "https://open.spotify.com/intl-fr/track/1ZzcCIvKU390Whf7rSxUUh?si=4839e34abea2454d"
    });
  }

  let productionProjects = projects.filter(p => p.category === 'production');
  if (mainVersion >= 166) {
    const v166OrderTitles = [
      "VELIB'BLEU",
      "tfkpourlafindumonde?",
      "ZEUDOG IS BACK #1 (Mouah)",
      "GO CRAZY",
      "Pétard",
      "<3",
      "Cassé",
      "Adieu là-bas",
      "Lately"
    ];
    productionProjects = v166OrderTitles
      .map(title => productionProjects.find(p => p.title === title))
      .filter(Boolean);
  }
  const soundToImageProjects = projects.filter(p => p.category === 'sound-to-image');

  // --- Production Listening State Architecture (V74 / V86 / V167) ---
  let productionListeningStateV74 = 'closed';
  let openListeningV74Timer = null;
  let openListeningV74CompleteTimer = null;
  let closeListeningV74Timer = null;
  let currentListeningSessionId = 0;
  let productionOpenProjectIndex = -1;

  function resetProductionListeningState(targetStage) {
    currentListeningSessionId++;
    if (openListeningV74Timer) {
      clearTimeout(openListeningV74Timer);
      openListeningV74Timer = null;
    }
    if (openListeningV74CompleteTimer) {
      clearTimeout(openListeningV74CompleteTimer);
      openListeningV74CompleteTimer = null;
    }
    if (closeListeningV74Timer) {
      clearTimeout(closeListeningV74Timer);
      closeListeningV74Timer = null;
    }

    const stages = targetStage ? [targetStage] : document.querySelectorAll('.v74-production-stage');
    stages.forEach(st => {
      st.classList.remove(
        'state-closing',
        'state-resetting',
        'state-resetting-to-origin',
        'state-opening',
        'state-open',
        'is-listening',
        'is-panel-shown',
        'is-project-moved'
      );
      st.classList.add('state-closed');

      const iframes = st.querySelectorAll('.v74-spotify iframe');
      iframes.forEach(iframe => {
        if (iframe && iframe.src) {
          const currentSrc = iframe.src;
          iframe.src = '';
          iframe.src = currentSrc;
        }
      });
    });

    productionListeningStateV74 = 'closed';
    productionOpenProjectIndex = -1;
  }

  let activeCategory = 'all'; // 'all', 'production', 'sound-to-image'
  let activeYear = 'all'; // 'all', '2026', '2025', '2024', '2023'

  // --- Navigation & Tab Switching ---
  const navLinks = document.querySelectorAll('.nav-link, .logo, .home-cta, .dropdown-link');
  const sections = document.querySelectorAll('.tab-section');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  let animationActive = true; // Active on home tab

  // --- V157 About Page Letter Reveal Animation ---
  function initAboutV157LetterReveal() {
    const copyEl = document.querySelector('.about-v157-copy');
    if (!copyEl || copyEl.dataset.initialized === 'true') return;

    const paragraphs = [
      { selector: '.about-v157-p01', baseDelay: 0, stagger: 7.5 },
      { selector: '.about-v157-p02', baseDelay: 120, stagger: 4.0 },
      { selector: '.about-v157-p03', baseDelay: 220, stagger: 2.1 },
      { selector: '.about-v157-p04', baseDelay: 320, stagger: 7.5 }
    ];

    paragraphs.forEach(({ selector, baseDelay, stagger }) => {
      const p = copyEl.querySelector(selector);
      if (!p) return;
      const text = p.textContent.trim();
      p.setAttribute('aria-label', text);

      const words = text.split(' ');
      p.innerHTML = '';
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');

      let charCount = 0;
      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v157-word';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v157-char';
          const delay = Math.round(baseDelay + (charCount * stagger));
          charSpan.style.animationDelay = `${delay}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          charCount++;
        }
        wrapper.appendChild(wordSpan);

        if (wIdx < words.length - 1) {
          const space = document.createTextNode(' ');
          wrapper.appendChild(space);
          charCount++;
        }
      });

      p.appendChild(wrapper);
    });

    copyEl.dataset.initialized = 'true';
  }

  function playAboutV157Animation() {
    const copyEl = document.querySelector('.about-v157-copy');
    if (!copyEl) return;
    initAboutV157LetterReveal();
    copyEl.classList.remove('is-revealing');
    void copyEl.offsetWidth; // Force reflow to guarantee clean replay on tab re-entry
    copyEl.classList.add('is-revealing');
  }

  function resetAboutV157Animation() {
    const copyEl = document.querySelector('.about-v157-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealing');
    }
  }

  window.playAboutV157Animation = playAboutV157Animation;
  window.resetAboutV157Animation = resetAboutV157Animation;

  // --- V158 About Page Fast Typewriter Reveal Animation ---
  function initAboutV158Typewriter() {
    const copyEl = document.querySelector('.about-v158-copy');
    if (!copyEl || copyEl.dataset.initialized === 'true') return;

    const paragraphSelectors = [
      '.about-v158-p01',
      '.about-v158-p02',
      '.about-v158-p03',
      '.about-v158-p04'
    ];

    const stagger = 2.5; // 2.5ms per character
    const paragraphGap = 30; // 30ms gap between paragraphs
    let currentDelay = 0;

    paragraphSelectors.forEach((sel, pIdx) => {
      const p = copyEl.querySelector(sel);
      if (!p) return;
      const text = p.textContent.trim();
      p.setAttribute('aria-label', text);

      const words = text.split(' ');
      p.innerHTML = '';
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');

      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v158-word';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v158-char';
          charSpan.style.animationDelay = `${Math.round(currentDelay)}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          currentDelay += stagger;
        }
        wrapper.appendChild(wordSpan);

        if (wIdx < words.length - 1) {
          const space = document.createTextNode(' ');
          wrapper.appendChild(space);
          currentDelay += stagger;
        }
      });

      p.appendChild(wrapper);

      if (pIdx < paragraphSelectors.length - 1) {
        currentDelay += paragraphGap;
      }
    });

    copyEl.dataset.initialized = 'true';
  }

  function playAboutV158Animation() {
    const copyEl = document.querySelector('.about-v158-copy');
    if (!copyEl) return;
    initAboutV158Typewriter();
    copyEl.classList.remove('is-revealing');
    void copyEl.offsetWidth; // Force reflow to guarantee clean replay on tab re-entry
    copyEl.classList.add('is-revealing');
  }

  function resetAboutV158Animation() {
    const copyEl = document.querySelector('.about-v158-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealing');
    }
  }

  window.playAboutV158Animation = playAboutV158Animation;
  window.resetAboutV158Animation = resetAboutV158Animation;

  // --- V159 About Page Slowed Typewriter Reveal Animation ---
  function initAboutV159Typewriter() {
    const copyEl = document.querySelector('.about-v159-copy');
    if (!copyEl || copyEl.dataset.initialized === 'true') return;

    const paragraphSelectors = [
      '.about-v159-p01',
      '.about-v159-p02',
      '.about-v159-p03',
      '.about-v159-p04'
    ];

    const stagger = 7.6; // 7.6ms per character (calibrated to hit ~4.4s total)
    const paragraphGap = 75; // 75ms gap between paragraphs
    let currentDelay = 0;

    paragraphSelectors.forEach((sel, pIdx) => {
      const p = copyEl.querySelector(sel);
      if (!p) return;
      const text = p.textContent.trim();
      p.setAttribute('aria-label', text);

      const words = text.split(' ');
      p.innerHTML = '';
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');

      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v159-word';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v159-char';
          charSpan.style.animationDelay = `${Math.round(currentDelay)}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          currentDelay += stagger;
        }
        wrapper.appendChild(wordSpan);

        if (wIdx < words.length - 1) {
          const space = document.createTextNode(' ');
          wrapper.appendChild(space);
          currentDelay += stagger;
        }
      });

      p.appendChild(wrapper);

      if (pIdx < paragraphSelectors.length - 1) {
        currentDelay += paragraphGap;
      }
    });

    copyEl.dataset.initialized = 'true';
  }

  function playAboutV159Animation() {
    const copyEl = document.querySelector('.about-v159-copy');
    if (!copyEl) return;
    initAboutV159Typewriter();
    copyEl.classList.remove('is-revealing');
    void copyEl.offsetWidth; // Force reflow to guarantee clean replay on tab re-entry
    copyEl.classList.add('is-revealing');
  }

  function resetAboutV159Animation() {
    const copyEl = document.querySelector('.about-v159-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealing');
    }
  }

  window.playAboutV159Animation = playAboutV159Animation;
  window.resetAboutV159Animation = resetAboutV159Animation;

  // --- V160 About Page: Character Wave + Line Reveal + Tracking Resolve ---
  function initAboutV160Motion() {
    if (document.body.classList.contains('version-v181-plus') || document.body.classList.contains('version-v183-plus') || document.body.classList.contains('version-v184-plus') || document.body.classList.contains('version-v185-plus')) return;
    const copyEl = document.querySelector('.about-v160-copy');
    if (!copyEl) return;
    if (copyEl.dataset.initialized === 'true') return;

    // Check if about is active/visible so measurements are accurate
    const aboutSection = document.getElementById('about');
    if (aboutSection && !aboutSection.classList.contains('active')) {
      return;
    }

    // Motion parameters (calibrated to target ~1.75s total sequence duration)
    // Timeline:
    // P1: starts at 0ms (char wave: stagger 9ms, fade 260ms)
    // P2: starts at 300ms (line mask: stagger 60ms, duration 440ms)
    // P3: starts at 520ms (line mask: stagger 60ms, duration 440ms)
    // P4: starts at 920ms (char wave: stagger 10ms, fade 260ms; tracking resolve: 820ms)
    const p1Start = 0;
    const p1CharStagger = 9;
    const p1FadeDuration = 260;

    const p2Start = 300;
    const p2LineStagger = 60;
    const p2LineDuration = 440;

    const p3Start = 520;
    const p3LineStagger = 60;
    const p3LineDuration = 440;

    const p4Start = 920;
    const p4CharStagger = 10;
    const p4FadeDuration = 260;
    const p4TrackingDuration = 820;

    // --- 1. Paragraph 01: Character Wave Reveal ---
    const p1 = copyEl.querySelector('.about-v160-p01');
    if (p1) {
      const text1 = p1.dataset.originalText || p1.textContent.trim();
      p1.dataset.originalText = text1;
      p1.setAttribute('aria-label', text1);
      const words1 = text1.split(' ');
      p1.innerHTML = '';
      const wrapper1 = document.createElement('span');
      wrapper1.setAttribute('aria-hidden', 'true');

      let currentDelay = p1Start;
      words1.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v160-word';
        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v160-char';
          charSpan.style.animationDelay = `${Math.round(currentDelay)}ms`;
          charSpan.style.animationDuration = `${p1FadeDuration}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          currentDelay += p1CharStagger;
        }
        wrapper1.appendChild(wordSpan);
        if (wIdx < words1.length - 1) {
          wrapper1.appendChild(document.createTextNode(' '));
          currentDelay += p1CharStagger;
        }
      });
      p1.appendChild(wrapper1);
    }

    // --- Helper for Line Mask Reveal (Paragraphs 02 & 03) ---
    function setupLineMaskParagraph(pEl, baseStart, lineStagger, lineDuration, predefinedLines) {
      if (!pEl) return;
      const text = pEl.dataset.originalText || pEl.textContent.trim();
      pEl.dataset.originalText = text;
      pEl.setAttribute('aria-label', text);

      let lines = [];
      if (predefinedLines && window.innerWidth >= 900) {
        lines = predefinedLines.map(l => l.split(/\s+/));
      } else {
        // Temporary measurement spans to detect line wrapping points
        const words = text.split(/\s+/);
        pEl.innerHTML = '';
        const measureSpans = [];
        words.forEach((word, idx) => {
          const span = document.createElement('span');
          span.className = 'about-v160-word-measure';
          span.textContent = word;
          pEl.appendChild(span);
          if (idx < words.length - 1) {
            pEl.appendChild(document.createTextNode(' '));
          }
          measureSpans.push(span);
        });

        let currentLineWords = [];
        let currentTop = null;

        measureSpans.forEach(span => {
          const top = Math.round(span.offsetTop);
          if (currentTop === null || Math.abs(top - currentTop) < 4) {
            if (currentTop === null) currentTop = top;
            currentLineWords.push(span.textContent);
          } else {
            lines.push(currentLineWords);
            currentLineWords = [span.textContent];
            currentTop = top;
          }
        });
        if (currentLineWords.length > 0) {
          lines.push(currentLineWords);
        }
      }

      // Build line mask DOM
      pEl.innerHTML = '';
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');
      wrapper.style.display = 'block';

      lines.forEach((lineWords, lIdx) => {
        const lineMask = document.createElement('span');
        lineMask.className = 'about-v160-line-mask';

        const lineInner = document.createElement('span');
        lineInner.className = 'about-v160-line-inner';
        const delay = Math.round(baseStart + (lIdx * lineStagger));
        lineInner.style.animationDelay = `${delay}ms`;
        lineInner.style.animationDuration = `${lineDuration}ms`;
        lineInner.textContent = lineWords.join(' ');

        lineMask.appendChild(lineInner);
        wrapper.appendChild(lineMask);
        if (lIdx < lines.length - 1) {
          wrapper.appendChild(document.createTextNode(' '));
        }
      });

      pEl.appendChild(wrapper);
    }

    // --- 2. Paragraph 02 & 03: Line Mask Reveals (or Inline Wave for V174+ Cover Block) ---
    const isV174Plus = document.body.classList.contains('version-v174-plus');
    const isV173Plus = document.body.classList.contains('version-v173-plus');

    function setupInlineWaveSpan(spanEl, baseStart, charStagger, fadeDuration) {
      if (!spanEl) return;
      if (!spanEl.dataset.originalHtml) {
        spanEl.dataset.originalHtml = spanEl.innerHTML;
      } else {
        spanEl.innerHTML = spanEl.dataset.originalHtml;
      }
      const text = spanEl.dataset.originalText || spanEl.textContent.trim();
      spanEl.dataset.originalText = text;
      spanEl.setAttribute('aria-label', text);

      const rawNodes = Array.from(spanEl.childNodes);
      spanEl.innerHTML = '';
      const wrapper = document.createElement('span');
      wrapper.setAttribute('aria-hidden', 'true');

      let currentDelay = baseStart;

      function appendWord(word, targetContainer) {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v160-word';
        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v160-char';
          charSpan.style.animationDelay = `${Math.round(currentDelay)}ms`;
          charSpan.style.animationDuration = `${fadeDuration}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          currentDelay += charStagger;
        }
        targetContainer.appendChild(wordSpan);
      }

      if (rawNodes.length <= 1 && (!rawNodes[0] || rawNodes[0].nodeType === Node.TEXT_NODE)) {
        const words = text.split(' ');
        words.forEach((word, wIdx) => {
          appendWord(word, wrapper);
          if (wIdx < words.length - 1) {
            wrapper.appendChild(document.createTextNode(' '));
            currentDelay += charStagger;
          }
        });
      } else {
        rawNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const nodeText = node.textContent;
            const tokens = nodeText.split(/(\s+)/);
            tokens.forEach(tok => {
              if (!tok) return;
              if (/^\s+$/.test(tok)) {
                wrapper.appendChild(document.createTextNode(tok));
                currentDelay += charStagger;
              } else {
                appendWord(tok, wrapper);
              }
            });
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const subWrapper = document.createElement(node.tagName.toLowerCase());
            subWrapper.className = node.className;
            const subText = node.textContent;
            const tokens = subText.split(/(\s+)/);
            tokens.forEach(tok => {
              if (!tok) return;
              if (/^\s+$/.test(tok)) {
                subWrapper.appendChild(document.createTextNode(tok));
                currentDelay += charStagger;
              } else {
                appendWord(tok, subWrapper);
              }
            });
            wrapper.appendChild(subWrapper);
          }
        });
      }

      spanEl.appendChild(wrapper);
    }

    const p2Predefined = [
      "After ten years of making music, my approach has become increasingly instinctive and reductive: looking for the",
      "simplest way to express what matters."
    ];
    const p2 = copyEl.querySelector('.about-v160-p02');
    if (p2) {
      if (isV174Plus) {
        setupInlineWaveSpan(p2, p2Start, p1CharStagger, p1FadeDuration);
      } else {
        setupLineMaskParagraph(p2, p2Start, p2LineStagger, p2LineDuration, isV173Plus ? null : p2Predefined);
      }
    }

    const p3Predefined = [
      "Whether working from an image, a story or an artist, the process begins by looking for what makes it singular : its tension,",
      "emotion, rhythm, or sometimes something harder to name. Music becomes a way of revealing what is already there,",
      "rather than adding another layer to it."
    ];
    const p3 = copyEl.querySelector('.about-v160-p03');
    if (p3) {
      if (isV174Plus) {
        setupInlineWaveSpan(p3, p3Start, p1CharStagger, p1FadeDuration);
      } else {
        setupLineMaskParagraph(p3, p3Start, p3LineStagger, p3LineDuration, isV173Plus ? null : p3Predefined);
      }
    }

    // --- 3. Paragraph 04: Character Wave + Tracking Resolve ---
    const p4 = copyEl.querySelector('.about-v160-p04');
    if (p4) {
      const text4 = p4.dataset.originalText || p4.textContent.trim();
      p4.dataset.originalText = text4;
      p4.setAttribute('aria-label', text4);

      const trackingWrapper = document.createElement('span');
      trackingWrapper.className = 'about-v160-p04-tracking';
      trackingWrapper.setAttribute('aria-hidden', 'true');
      trackingWrapper.style.animationDelay = `${p4Start}ms`;
      trackingWrapper.style.animationDuration = `${p4TrackingDuration}ms`;

      const words4 = text4.split(' ');
      let currentDelay = p4Start;

      words4.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'about-v160-word';

        for (let i = 0; i < word.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.className = 'about-v160-char';
          charSpan.style.animationDelay = `${Math.round(currentDelay)}ms`;
          charSpan.style.animationDuration = `${p4FadeDuration}ms`;
          charSpan.textContent = word[i];
          wordSpan.appendChild(charSpan);
          currentDelay += p4CharStagger;
        }
        trackingWrapper.appendChild(wordSpan);

        if (wIdx < words4.length - 1) {
          trackingWrapper.appendChild(document.createTextNode(' '));
          currentDelay += p4CharStagger;
        }
      });

      p4.innerHTML = '';
      p4.appendChild(trackingWrapper);
    }

    copyEl.dataset.initialized = 'true';
  }

  function playAboutV160Motion() {
    const copyEl = document.querySelector('.about-v160-copy');
    if (!copyEl) return;
    initAboutV160Motion();
    copyEl.classList.remove('is-revealing');
    void copyEl.offsetWidth; // Force reflow to guarantee clean replay on tab re-entry
    copyEl.classList.add('is-revealing');
  }

  function resetAboutV160Motion() {
    const copyEl = document.querySelector('.about-v160-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealing');
    }
  }

  window.playAboutV160Motion = playAboutV160Motion;
  window.resetAboutV160Motion = resetAboutV160Motion;

  // --- V181 About Page: Optical Focus Reveal ---
  let aboutV181AnimId = null;

  function initAboutV181Layers() {
    const copyEl = document.querySelector('.about-v181-copy') || document.querySelector('.about-v160-copy');
    if (!copyEl) return null;
    const sharpEl = copyEl.querySelector('.about-v181-block') || copyEl.querySelector('.about-v174-block');
    if (!sharpEl) return null;

    copyEl.style.position = 'relative';

    let blurredEl = copyEl.querySelector('.about-v181-blurred-clone');
    if (!blurredEl) {
      blurredEl = sharpEl.cloneNode(true);
      blurredEl.className = `${sharpEl.className} about-v181-blurred-clone`;
      blurredEl.setAttribute('aria-hidden', 'true');
      blurredEl.style.position = 'absolute';
      blurredEl.style.top = '0';
      blurredEl.style.left = '0';
      blurredEl.style.width = '100%';
      blurredEl.style.height = '100%';
      blurredEl.style.margin = '0';
      blurredEl.style.padding = '0';
      blurredEl.style.pointerEvents = 'none';
      copyEl.appendChild(blurredEl);
    }
    return { copyEl, sharpEl, blurredEl };
  }

  function playAboutV181Motion() {
    const layers = initAboutV181Layers();
    if (!layers) return;
    const { copyEl, sharpEl, blurredEl } = layers;

    if (aboutV181AnimId) {
      cancelAnimationFrame(aboutV181AnimId);
      aboutV181AnimId = null;
    }

    // Set initial optical state: visible, soft, low opacity (0.20), blurred (6px)
    blurredEl.style.display = 'block';
    blurredEl.style.filter = 'blur(6px)';
    blurredEl.style.opacity = '0.20';
    blurredEl.style.willChange = 'opacity, -webkit-mask-image, mask-image';
    sharpEl.style.willChange = '-webkit-mask-image, mask-image';

    // Start with un-settled hierarchy (unified tone)
    copyEl.classList.remove('is-hierarchy-settled');

    // Initial mask: sharp layer masked out at top-left, blurred layer visible
    const initialStart = -40;
    const initialEnd = initialStart + 45;
    const initialSharpMask = `linear-gradient(135deg, #000 0%, #000 ${initialStart}%, transparent ${initialEnd}%, transparent 100%)`;
    const initialBlurMask = `linear-gradient(135deg, transparent 0%, transparent ${initialStart}%, #000 ${initialEnd}%, #000 100%)`;

    sharpEl.style.webkitMaskImage = initialSharpMask;
    sharpEl.style.maskImage = initialSharpMask;
    blurredEl.style.webkitMaskImage = initialBlurMask;
    blurredEl.style.maskImage = initialBlurMask;

    const duration = 1550; // 1.55s total duration (target 1.4s - 1.8s)
    let startTime = null;
    let hierarchyTriggered = false;

    function render(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth organic cubic easing: decelerates smoothly into crisp focus
      const ease = 1 - Math.pow(1 - progress, 3);

      // Traveling diagonal focus plane (-40% to 135%)
      const startPercent = -40 + ease * 175;
      const endPercent = startPercent + 45; // 45% soft organic diagonal feather

      sharpEl.style.webkitMaskImage = `linear-gradient(135deg, #000 0%, #000 ${startPercent.toFixed(1)}%, transparent ${endPercent.toFixed(1)}%, transparent 100%)`;
      sharpEl.style.maskImage = `linear-gradient(135deg, #000 0%, #000 ${startPercent.toFixed(1)}%, transparent ${endPercent.toFixed(1)}%, transparent 100%)`;

      blurredEl.style.webkitMaskImage = `linear-gradient(135deg, transparent 0%, transparent ${startPercent.toFixed(1)}%, #000 ${endPercent.toFixed(1)}%, #000 100%)`;
      blurredEl.style.maskImage = `linear-gradient(135deg, transparent 0%, transparent ${startPercent.toFixed(1)}%, #000 ${endPercent.toFixed(1)}%, #000 100%)`;

      // Secondary subtle hierarchy contrast settling (150-250ms) as optical focus completes
      if (progress >= 0.88 && !hierarchyTriggered) {
        hierarchyTriggered = true;
        copyEl.classList.add('is-hierarchy-settled');
      }

      if (progress < 1) {
        aboutV181AnimId = requestAnimationFrame(render);
      } else {
        // Final state: 100% sharp, zero residual filters or masks
        aboutV181AnimId = null;
        sharpEl.style.webkitMaskImage = '';
        sharpEl.style.maskImage = '';
        sharpEl.style.willChange = '';
        blurredEl.style.display = 'none';
        blurredEl.style.webkitMaskImage = '';
        blurredEl.style.maskImage = '';
        blurredEl.style.willChange = '';
        if (!hierarchyTriggered) {
          copyEl.classList.add('is-hierarchy-settled');
        }
      }
    }

    aboutV181AnimId = requestAnimationFrame(render);
  }

  function resetAboutV181Motion() {
    if (aboutV181AnimId) {
      cancelAnimationFrame(aboutV181AnimId);
      aboutV181AnimId = null;
    }
    const layers = initAboutV181Layers();
    if (layers) {
      const { copyEl, sharpEl, blurredEl } = layers;
      copyEl.classList.remove('is-hierarchy-settled');
      sharpEl.style.webkitMaskImage = '';
      sharpEl.style.maskImage = '';
      sharpEl.style.willChange = '';
      blurredEl.style.display = 'block';
      blurredEl.style.filter = 'blur(6px)';
      blurredEl.style.opacity = '0.20';
      blurredEl.style.webkitMaskImage = 'linear-gradient(135deg, transparent 0%, transparent -40%, #000 5%, #000 100%)';
      sharpEl.style.webkitMaskImage = 'linear-gradient(135deg, #000 0%, #000 -40%, transparent 5%, transparent 100%)';
    }
  }

  window.playAboutV181Motion = playAboutV181Motion;
  window.resetAboutV181Motion = resetAboutV181Motion;

  // --- V183 About Page: Controlled Fragment Reveal ---
  let aboutV183Timeouts = [];

  function playAboutV183Motion() {
    const copyEl = document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (!copyEl) return;
    const fragments = copyEl.querySelectorAll('.about-fragment');
    if (!fragments || fragments.length === 0) return;

    // Clear any previous scheduled timeouts
    aboutV183Timeouts.forEach(t => clearTimeout(t));
    aboutV183Timeouts = [];

    // Reset fragment state
    copyEl.classList.remove('is-revealed');
    fragments.forEach(f => {
      f.classList.remove('is-visible');
    });

    // Schedule deterministic choreographed fragment reveals
    fragments.forEach((fragment) => {
      const delayStr = fragment.style.getPropertyValue('--f-delay').trim();
      const delay = delayStr ? parseInt(delayStr, 10) : 0;
      const tid = setTimeout(() => {
        fragment.classList.add('is-visible');
      }, delay);
      aboutV183Timeouts.push(tid);
    });

    // Mark completion when all fragments are resolved (1230ms start + 280ms duration = 1510ms)
    const completeTid = setTimeout(() => {
      copyEl.classList.add('is-revealed');
      fragments.forEach(f => f.classList.add('is-visible'));
    }, 1520);
    aboutV183Timeouts.push(completeTid);
  }

  function resetAboutV183Motion() {
    aboutV183Timeouts.forEach(t => clearTimeout(t));
    aboutV183Timeouts = [];
    const copyEl = document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealed');
      const fragments = copyEl.querySelectorAll('.about-fragment');
      fragments.forEach(f => f.classList.remove('is-visible'));
    }
  }

  window.playAboutV183Motion = playAboutV183Motion;
  window.resetAboutV183Motion = resetAboutV183Motion;

  // --- V184 About Page: Softer Fragment Reveal ---
  let aboutV184Timeouts = [];

  function playAboutV184Motion() {
    const copyEl = document.querySelector('.about-v184-copy') || document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (!copyEl) return;
    const fragments = copyEl.querySelectorAll('.about-fragment');
    if (!fragments || fragments.length === 0) return;

    // Clear any previous scheduled timeouts
    aboutV184Timeouts.forEach(t => clearTimeout(t));
    aboutV184Timeouts = [];

    // Reset fragment state
    copyEl.classList.remove('is-revealed');
    fragments.forEach(f => {
      f.classList.remove('is-visible');
    });

    // Schedule deterministic choreographed fragment reveals
    let maxDelay = 0;
    fragments.forEach((fragment) => {
      const delayStr = fragment.style.getPropertyValue('--f-delay').trim();
      const delay = delayStr ? parseInt(delayStr, 10) : 0;
      if (delay > maxDelay) maxDelay = delay;
      const tid = setTimeout(() => {
        fragment.classList.add('is-visible');
      }, delay);
      aboutV184Timeouts.push(tid);
    });

    // Mark completion only after all fragments have completely resolved (1500ms start + 650ms fade = 2150ms)
    const completeTid = setTimeout(() => {
      copyEl.classList.add('is-revealed');
      fragments.forEach(f => f.classList.add('is-visible'));
    }, maxDelay + 670);
    aboutV184Timeouts.push(completeTid);
  }

  function resetAboutV184Motion() {
    aboutV184Timeouts.forEach(t => clearTimeout(t));
    aboutV184Timeouts = [];
    const copyEl = document.querySelector('.about-v184-copy') || document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealed');
      const fragments = copyEl.querySelectorAll('.about-fragment');
      fragments.forEach(f => f.classList.remove('is-visible'));
    }
  }

  window.playAboutV184Motion = playAboutV184Motion;
  window.resetAboutV184Motion = resetAboutV184Motion;

  // --- V185 About Page: Refined Final Reveal Rhythm ---
  let aboutV185Timeouts = [];

  function playAboutV185Motion() {
    const copyEl = document.querySelector('.about-v185-copy') || document.querySelector('.about-v184-copy') || document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (!copyEl) return;
    const fragments = copyEl.querySelectorAll('.about-fragment');
    if (!fragments || fragments.length === 0) return;

    // Clear any previous scheduled timeouts
    aboutV185Timeouts.forEach(t => clearTimeout(t));
    aboutV185Timeouts = [];

    // Reset fragment state cleanly
    copyEl.classList.remove('is-revealed');
    fragments.forEach(f => {
      f.classList.remove('is-visible');
    });

    // Schedule deterministic choreographed fragment reveals
    let maxDelay = 0;
    fragments.forEach((fragment) => {
      const delayStr = fragment.style.getPropertyValue('--f-delay').trim();
      const delay = delayStr ? parseInt(delayStr, 10) : 0;
      if (delay > maxDelay) maxDelay = delay;
      const tid = setTimeout(() => {
        fragment.classList.add('is-visible');
      }, delay);
      aboutV185Timeouts.push(tid);
    });

    // Mark completion only after all fragments have completely resolved (1970ms start + 650ms fade = 2620ms)
    const completeTid = setTimeout(() => {
      copyEl.classList.add('is-revealed');
      fragments.forEach(f => f.classList.add('is-visible'));
    }, maxDelay + 670);
    aboutV185Timeouts.push(completeTid);
  }

  function resetAboutV185Motion() {
    aboutV185Timeouts.forEach(t => clearTimeout(t));
    aboutV185Timeouts = [];
    const copyEl = document.querySelector('.about-v185-copy') || document.querySelector('.about-v184-copy') || document.querySelector('.about-v183-copy') || document.querySelector('.about-v160-copy');
    if (copyEl) {
      copyEl.classList.remove('is-revealed');
      const fragments = copyEl.querySelectorAll('.about-fragment');
      fragments.forEach(f => f.classList.remove('is-visible'));
    }
  }

  window.playAboutV185Motion = playAboutV185Motion;
  window.resetAboutV185Motion = resetAboutV185Motion;

  function pauseSectionMediaOnExit(sectionId) {
    if (sectionId === 'home') {
      const homeMedia = document.querySelectorAll('.home-slideshow-container video, #home video, #home audio');
      homeMedia.forEach(m => {
        if (!m.paused) {
          try { m.pause(); } catch(e) {}
        }
        const slide = m.closest('.slide');
        if (slide) {
          const state = slide.getAttribute('data-playback-state') || 'IDLE';
          if (state === 'PLAYING') {
            slide.setAttribute('data-playback-state', 'PAUSED');
          }
        }
      });
      if (typeof pauseHomepageVideo === 'function' && typeof currentSlideIndex !== 'undefined') {
        const curSlide = document.querySelector(`.slide[data-slide-index="${currentSlideIndex}"]`);
        if (curSlide && curSlide.getAttribute('data-playback-state') === 'PLAYING') {
          pauseHomepageVideo(currentSlideIndex);
        }
      }
      document.body.classList.remove('hide-cursor-active');
    } else if (sectionId === 'production') {
      const prodMedia = document.querySelectorAll('#production video, #production audio');
      prodMedia.forEach(m => {
        if (!m.paused) {
          try { m.pause(); } catch(e) {}
        }
      });
      resetProductionListeningState();
    } else if (sectionId === 'soundToImage') {
      if (typeof pauseStiVideoV151 === 'function') {
        pauseStiVideoV151(false);
      } else if (typeof pauseStiVideoV149 === 'function') {
        pauseStiVideoV149();
      } else if (typeof pauseStiVideoV148 === 'function') {
        pauseStiVideoV148();
      } else if (typeof pauseStiVideo === 'function') {
        pauseStiVideo();
      }
      const stiMedia = document.querySelectorAll('#soundToImage video, #soundToImage audio');
      stiMedia.forEach(m => {
        if (!m.paused) {
          try { m.pause(); } catch(e) {}
        }
      });
    }
  }

  function switchTab(tabId) {
    // Hide mobile menu if open
    if (navMenu) navMenu.classList.remove('mobile-active');
    if (menuToggle) menuToggle.classList.remove('open');

    // Fallback alias: if directionArtistique requested but section is about
    if (tabId === 'directionArtistique' && !document.getElementById('directionArtistique') && document.getElementById('about')) {
      tabId = 'about';
    }

    if (mainVersion >= 164) {
      ['home', 'production', 'soundToImage'].forEach(sec => {
        if (sec !== tabId) {
          pauseSectionMediaOnExit(sec);
        }
      });
    } else {
      if (tabId !== 'soundToImage') {
        if (typeof pauseStiVideoV151 === 'function') {
          pauseStiVideoV151(true);
        }
      }
    }

    // Remove active class from all sections and links
    sections.forEach(sec => sec.classList.remove('active'));
    
    // Deactivate all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-tab-target') === tabId) {
        link.classList.add('active');
      }
    });

    // Activate target section
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (tabId === 'home') {
      animationActive = true;
      document.body.classList.add('home-active'); // Hides footer and shows full-screen media
      document.body.classList.remove('contact-active');
      document.body.classList.remove('production-active');
      document.body.classList.remove('soundToImage-active');
      document.body.classList.remove('about-active');
      if (document.body.classList.contains('version-v185-plus')) {
        resetAboutV185Motion();
      } else if (document.body.classList.contains('version-v184-plus')) {
        resetAboutV184Motion();
      } else if (document.body.classList.contains('version-v183-plus')) {
        resetAboutV183Motion();
      } else if (document.body.classList.contains('version-v181-plus')) {
        resetAboutV181Motion();
      } else if (document.body.classList.contains('version-v160-plus')) {
        resetAboutV160Motion();
      } else if (document.body.classList.contains('version-v159-plus')) {
        resetAboutV159Animation();
      } else if (document.body.classList.contains('version-v158-plus')) {
        resetAboutV158Animation();
      } else if (document.body.classList.contains('version-v157-plus')) {
        resetAboutV157Animation();
      }
      applyInterfaceTheme(); // Apply theme on home return
    } else if (tabId === 'contact') {
      animationActive = false;
      document.body.classList.remove('home-active');
      document.body.classList.remove('production-active');
      document.body.classList.remove('soundToImage-active');
      document.body.classList.remove('about-active');
      if (document.body.classList.contains('version-v185-plus')) {
        resetAboutV185Motion();
      } else if (document.body.classList.contains('version-v184-plus')) {
        resetAboutV184Motion();
      } else if (document.body.classList.contains('version-v183-plus')) {
        resetAboutV183Motion();
      } else if (document.body.classList.contains('version-v181-plus')) {
        resetAboutV181Motion();
      } else if (document.body.classList.contains('version-v160-plus')) {
        resetAboutV160Motion();
      } else if (document.body.classList.contains('version-v159-plus')) {
        resetAboutV159Animation();
      } else if (document.body.classList.contains('version-v158-plus')) {
        resetAboutV158Animation();
      } else if (document.body.classList.contains('version-v157-plus')) {
        resetAboutV157Animation();
      }
      document.body.classList.add('contact-active'); // Transparent header, hides footer
      stopSynth(); // Stop audio synth on tab change
    } else if (tabId === 'about') {
      animationActive = false;
      document.body.classList.remove('home-active');
      document.body.classList.remove('contact-active');
      document.body.classList.remove('production-active');
      document.body.classList.remove('soundToImage-active');
      document.body.classList.add('about-active');
      stopSynth();
      if (document.body.classList.contains('version-v185-plus')) {
        playAboutV185Motion();
      } else if (document.body.classList.contains('version-v184-plus')) {
        playAboutV184Motion();
      } else if (document.body.classList.contains('version-v183-plus')) {
        playAboutV183Motion();
      } else if (document.body.classList.contains('version-v181-plus')) {
        playAboutV181Motion();
      } else if (document.body.classList.contains('version-v160-plus')) {
        playAboutV160Motion();
      } else if (document.body.classList.contains('version-v159-plus')) {
        playAboutV159Animation();
      } else if (document.body.classList.contains('version-v158-plus')) {
        playAboutV158Animation();
      } else if (document.body.classList.contains('version-v157-plus')) {
        playAboutV157Animation();
      }
    } else {
      animationActive = false;
      document.body.classList.remove('home-active');
      document.body.classList.remove('contact-active');
      document.body.classList.remove('about-active');
      stopSynth(); // Stop audio synth on tab change
      if (document.body.classList.contains('version-v185-plus')) {
        resetAboutV185Motion();
      } else if (document.body.classList.contains('version-v184-plus')) {
        resetAboutV184Motion();
      } else if (document.body.classList.contains('version-v183-plus')) {
        resetAboutV183Motion();
      } else if (document.body.classList.contains('version-v181-plus')) {
        resetAboutV181Motion();
      } else if (document.body.classList.contains('version-v160-plus')) {
        resetAboutV160Motion();
      } else if (document.body.classList.contains('version-v159-plus')) {
        resetAboutV159Animation();
      } else if (document.body.classList.contains('version-v158-plus')) {
        resetAboutV158Animation();
      } else if (document.body.classList.contains('version-v157-plus')) {
        resetAboutV157Animation();
      }
      
      if (tabId === 'production') {
        document.body.classList.add('production-active');
        document.body.classList.remove('soundToImage-active');
        renderStack('production');
      } else {
        document.body.classList.remove('production-active');
        if (tabId === 'soundToImage') {
          document.body.classList.add('soundToImage-active');
          renderStack('sound-to-image');
        } else {
          document.body.classList.remove('soundToImage-active');
        }
      }
    }
  }

  window.switchTab = switchTab;

  // Bind click event to navigation elements
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-tab-target');
      if (target) {
        switchTab(target);
      }
    });
  });

  // Mobile Menu Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('mobile-active');
    });
  }

  // Header scroll appearance
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Web Audio API Synth for "Sound to Image" ---
  let audioCtx = null;
  let currentOscillators = [];
  let currentGain = null;
  let activeTrackItem = null;

  function startSynth(freqs) {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    currentGain = audioCtx.createGain();
    currentGain.gain.setValueAtTime(0, audioCtx.currentTime);
    currentGain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.8);
    currentGain.connect(audioCtx.destination);

    currentOscillators = freqs.map(freq => {
      const osc = audioCtx.createOscillator();
      osc.type = Math.random() > 0.5 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.connect(currentGain);
      osc.start();
      return osc;
    });
  }

  function stopSynth() {
    if (currentGain) {
      const g = currentGain;
      const os = currentOscillators;
      const now = audioCtx.currentTime;
      g.gain.setValueAtTime(g.gain.value, now);
      g.gain.linearRampToValueAtTime(0, now + 0.4);
      setTimeout(() => {
        os.forEach(osc => {
          try { osc.stop(); } catch(e) {}
        });
      }, 500);
      currentGain = null;
      currentOscillators = [];
      
      // Update play buttons UI
      document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('playing');
        const playBtn = item.querySelector('.play-btn');
        if (playBtn) {
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path fill="#0C100D" d="M8 5v14l11-7z"/></svg>`;
        }
      });
    }
  }

  // --- Slideshow Dataset (Determined Dynamically from projects) ---
  const cursorLabel = document.getElementById('customCursor');
  const homeSection = document.getElementById('homeSection');
  const bottomTimeline = document.getElementById('bottomTimeline');

  function getRandomizedProjects() {
    const bias = 0.45; // Light preference shift to prioritize video projects early
    const scored = projects.map(proj => {
      const isVideo = !!proj.video;
      const score = Math.random() + (isVideo ? bias : 0);
      return { proj, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.map(x => x.proj);
  }

  const biasedRandomProjects = getRandomizedProjects();

  // --- V104 Dedicated Homepage Audiovisual Dataset ---
  const homepageProjects = [
    {
      id: "moran-the-dream-i-never-had",
      title: "THE DREAM I NEVER HAD",
      artist: "Moran Moradi",
      type: "video",
      category: "sound-to-image",
      displayMeta: "SOUND TO IMAGE / VIDEO",
      thumbnail: "miniatures/moran_the_dream_i_never_had.png",
      video: "video/web/moran_the_dream_i_never_had.mp4"
    },
    {
      id: "sean-zeudog-is-back",
      title: "ZEUDOG IS BACK",
      artist: "Sean",
      type: "music-video",
      category: "production",
      displayMeta: "PRODUCTION / MUSIC VIDEO",
      thumbnail: "miniatures/sean_zeudog_is_back_mouah.png",
      video: "video/web/sean_zeudog_is_back_mouah.mp4"
    },
    {
      id: "sidi-casse",
      title: "CASSÉ",
      artist: "Sidi",
      type: "music-video",
      category: "production",
      displayMeta: "PRODUCTION / MUSIC VIDEO",
      thumbnail: "miniatures/sidi_casse.png",
      video: "video/web/sidi_casse.mp4"
    },
    {
      id: "sidi-go-crazy",
      title: "GO CRAZY",
      artist: "Sidi",
      type: "music-video",
      category: "production",
      displayMeta: "PRODUCTION / MUSIC VIDEO",
      thumbnail: "miniatures/sidi_go_crazy.png",
      video: "video/web/sidi_go_crazy.mp4"
    },
    {
      id: "sidi-seul",
      title: "SEUL",
      artist: "Sidi",
      type: "music-video",
      category: "production",
      displayMeta: "PRODUCTION / MUSIC VIDEO",
      thumbnail: "miniatures/sidi_seul.png",
      video: "video/web/sidi_seul.mp4"
    },
    {
      id: "sidi-bloque-dans-tristesse",
      title: "BLOQUÉ DANS TRISTESSE",
      artist: "Sidi",
      type: "music-video",
      category: "production",
      displayMeta: "PRODUCTION / MUSIC VIDEO",
      thumbnail: "miniatures/sidi_bloque_dans_tristesse.png",
      video: "video/web/sidi_bloque_dans_tristesse.mp4"
    },
    {
      id: "sidi-nefs",
      title: "NEFS",
      artist: "Sidi",
      type: "music-video",
      category: "music-video",
      displayMeta: "MUSIC VIDEO",
      thumbnail: "miniatures/sidi_nefs.png",
      video: "video/web/sidi_nefs.mp4"
    }
  ];

  if (mainVersion >= 168) {
    const velibBleuHomepageProject = {
      id: "velib-bleu",
      title: "VELIB'BLEU",
      artist: mainVersion >= 170 ? "Sean" : "Rayan Made it",
      credit: "Produced by Rayan Made it",
      type: "music-video",
      category: "production",
      displayMeta: "Produced by Rayan Made it",
      thumbnail: "miniatures/velib_bleu_video.jpg",
      video: "video/web/velib_bleu.mp4"
    };

    if (mainVersion >= 169) {
      const casseIndex = homepageProjects.findIndex(p => p.id === "sidi-casse" || p.title === "CASSÉ");
      if (casseIndex !== -1) {
        homepageProjects.splice(casseIndex + 1, 0, velibBleuHomepageProject);
      } else {
        homepageProjects.push(velibBleuHomepageProject);
      }
    } else {
      homepageProjects.push(velibBleuHomepageProject);
    }

    // Added 2026-11-19: tfkpourlafindumonde? (Sean), right after VELIB'BLEU
    const tfkHomepageProject = {
      id: "sean-tfkpourlafindumonde",
      title: "tfkpourlafindumonde?",
      preserveCase: true,
      artist: "Sean",
      type: "music-video",
      category: "production",
      displayMeta: "Music produced by Rayan Made it",
      thumbnail: "miniatures/sean_tfkpourlafindumonde.jpg",
      video: "video/web/sean_tfkpourlafindumonde.mp4"
    };
    const velibHomeIndex = homepageProjects.findIndex(p => p.id === "velib-bleu");
    if (velibHomeIndex !== -1) {
      homepageProjects.splice(velibHomeIndex + 1, 0, tfkHomepageProject);
    } else {
      homepageProjects.push(tfkHomepageProject);
    }
  }

  // Added 2026-11-19: Homepage order requested by Rayan (projects not listed keep their order, at the end)
  if (mainVersion >= 168) {
    const homepageOrderIds = [
      "moran-the-dream-i-never-had",
      "velib-bleu",
      "sidi-casse",
      "sean-tfkpourlafindumonde",
      "sean-zeudog-is-back",
      "sidi-go-crazy",
      "sidi-seul",
      "sidi-bloque-dans-tristesse",
      "sidi-nefs"
    ];
    const orderedHome = homepageOrderIds.map(id => homepageProjects.find(p => p.id === id)).filter(Boolean);
    const remainingHome = homepageProjects.filter(p => !homepageOrderIds.includes(p.id));
    homepageProjects.splice(0, homepageProjects.length, ...orderedHome, ...remainingHome);
  }

  // Added 2026-11-19: music video / film directors shown on the Homepage caption
  const homepageDirectorsById = {
    "moran-the-dream-i-never-had": "Directed by Moran Moradi",
    "sean-zeudog-is-back": "Music video directed by Fringz",
    "sidi-casse": "Music video directed by Sidi, Ray Nguyen & Chloé Rose",
    "velib-bleu": "Music video directed by Trevor Anton",
    "sean-tfkpourlafindumonde": "Music video directed by Trevor Anton",
    "sidi-go-crazy": "Music video directed by Moran Moradi & Sandro Zef",
    "sidi-seul": "Music video directed by Sidi",
    "sidi-bloque-dans-tristesse": "Music video directed by Sidi",
    "sidi-nefs": "Music video directed by Sidi & Dario Holtz"
  };

  // --- V130 Dedicated Sound to Image Audiovisual Dataset ---
  const soundToImageAudiovisualProjects = [
    {
      id: "park-chan-wook",
      title: "PARK CHAN-WOOK, L’ART DE LA VENGEANCE",
      year: "2026",
      credit: "MUSIC BY RAYAN MADE IT",
      director: "A DOCUMENTARY DIRECTED BY PIERRE-PAUL PULJIZ",
      production: "PRODUCED BY CANAL+",
      availability: "AVAILABLE EXCLUSIVELY ON CINÉ+ OCS",
      externalUrl: "https://www.canalplus.com/cinema/park-chan-wook-l-art-de-la-vengeance/h/31422840_50002",
      externalLabel: "WATCH ON CANAL+",
      thumbnail: mainVersion >= 161 ? "miniatures/paul_parkchanwook_2_crop.jpg" : "miniatures/paul_parkchanwook.jpg",
      video: mainVersion >= 161 ? "video/web/paul_parkchanwook.mp4" : null,
      opticalOffsetX: 0
    },
    {
      id: "the-dream-i-never-had",
      title: "THE DREAM I NEVER HAD",
      year: "2026",
      credit: "MUSIC & SOUND DESIGN BY RAYAN MADE IT",
      director: "A SHORT EXPERIMENTAL FILM BY MORAN MORADI & SANDRO ZEF",
      production: "PRODUCED BY MADE IN SOMEWHERE & ALMAA FILMS",
      availability: null,
      externalUrl: null,
      externalLabel: null,
      thumbnail: "miniatures/moran_the_dream_i_never_had.png",
      video: "video/web/moran_the_dream_i_never_had.mp4",
      opticalOffsetX: 0
    }
  ];

  function getHomeProjects() {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion >= 104) {
      return homepageProjects;
    }
    if (currentVersion >= 92) {
      return productionProjects;
    }
    return biasedRandomProjects;
  }

  let currentSlideIndex = 0;
  let currentVirtualIndex = getHomeProjects().length; // Set 1, Project 0

  // --- V100 Homepage Micro-Player Width Sync & Audio Engine ---
  let homeSpotifyController = null;
  let currentPlayingUri = null;
  let isHomeAudioPlaying = false;
  let homeAudioPosition = 0;
  let homeAudioDuration = 0;

  function syncHomeAudioPlayerGeometry() {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 100 || currentVersion >= 103) return;

    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;

    const activeMedia = activeSlide.querySelector('.slide-media');
    const audioCtrl = activeSlide.querySelector('.home-audio-control');

    if (activeMedia && audioCtrl) {
      const rect = activeMedia.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (currentVersion >= 101) {
          audioCtrl.style.position = 'fixed';
          audioCtrl.style.left = `${Math.round(rect.left)}px`;
          audioCtrl.style.width = `${Math.round(rect.width)}px`;
          audioCtrl.style.top = `${Math.round(rect.bottom + 12)}px`;
          audioCtrl.style.transform = 'none';
          audioCtrl.style.margin = '0';
        } else {
          audioCtrl.style.width = `${Math.round(rect.width)}px`;
        }
      }
    }
  }

  function syncHomeAudioPlayerWidth() {
    syncHomeAudioPlayerGeometry();
  }

  window.addEventListener('resize', syncHomeAudioPlayerGeometry);

  function getProjectSpotifyUri(proj) {
    if (!proj) return null;
    let url = proj.spotify;
    if (proj.type === 'ep' && proj.tracklist && proj.tracklist.length > 0 && proj.tracklist[0].spotify) {
      url = proj.tracklist[0].spotify;
    }
    if (!url) return null;
    if (url.includes('/track/')) {
      const id = url.split('/track/')[1].split('?')[0];
      return `spotify:track:${id}`;
    } else if (url.includes('/album/')) {
      const id = url.split('/album/')[1].split('?')[0];
      return `spotify:album:${id}`;
    }
    return null;
  }

  window.onSpotifyIframeApiReady = function(IFrameAPI) {
    console.log('[V100] Spotify API ready');
    const element = document.getElementById('homeSpotifyEmbedTarget');
    if (!element) return;
    const options = {
      width: '300',
      height: '80',
      uri: 'spotify:track:0jBNShOG9xhH7Lvhrmekw7'
    };
    const callback = (EmbedController) => {
      console.log('[V100] Controller created');
      homeSpotifyController = EmbedController;

      EmbedController.addListener('playback_update', e => {
        if (!e || !e.data) return;
        homeAudioPosition = e.data.position || 0;
        homeAudioDuration = e.data.duration || 0;
        isHomeAudioPlaying = !e.data.isPaused;

        updateHomeAudioUIState();
      });
    };
    IFrameAPI.createController(element, options, callback);
  };

  function updateHomeAudioUIState() {
    const btns = document.querySelectorAll('.home-audio-btn');
    btns.forEach(btn => {
      btn.textContent = isHomeAudioPlaying ? 'Ⅱ' : '▶';
    });

    const fills = document.querySelectorAll('.home-audio-progress-fill');
    fills.forEach(fill => {
      if (homeAudioDuration > 0) {
        const pct = Math.min(100, Math.max(0, (homeAudioPosition / homeAudioDuration) * 100));
        fill.style.width = `${pct}%`;
      } else {
        fill.style.width = '0%';
      }
    });
  }

  function toggleHomeAudioPlayback(proj) {
    const uri = getProjectSpotifyUri(proj);
    console.log('[V100] toggleHomeAudioPlayback requested for URI:', uri);
    if (!uri || !homeSpotifyController) {
      console.warn('[V100] Controller or URI not ready');
      return;
    }

    if (currentPlayingUri !== uri) {
      currentPlayingUri = uri;
      console.log('[V100] Project URI loaded:', uri);
      homeSpotifyController.loadUri(uri);
      console.log('[V100] Play requested');
      homeSpotifyController.play();
      isHomeAudioPlaying = true;
    } else {
      if (isHomeAudioPlaying) {
        console.log('[V100] Pause requested');
        homeSpotifyController.pause();
        isHomeAudioPlaying = false;
      } else {
        console.log('[V100] Play requested (resume)');
        homeSpotifyController.play();
        isHomeAudioPlaying = true;
      }
    }
    updateHomeAudioUIState();
  }

  function seekHomeAudio(e) {
    e.stopPropagation();
    if (!homeSpotifyController || !homeAudioDuration || homeAudioDuration <= 0) return;
    const track = e.currentTarget;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, clickX / rect.width));
    const seekSeconds = (pct * homeAudioDuration) / 1000;
    homeSpotifyController.seek(seekSeconds);
  }

  function stopHomeAudio() {
    if (homeSpotifyController && isHomeAudioPlaying) {
      homeSpotifyController.pause();
    }
    isHomeAudioPlaying = false;
    currentPlayingUri = null;
    homeAudioPosition = 0;
    homeAudioDuration = 0;
    updateHomeAudioUIState();
  }

  function getHomepageMediaSource(proj) {
    if (!proj) return { type: 'image', src: 'assets/fallback-cover.jpg', resolvedType: 'fallback' };

    // 1. proj.homeMedia if explicitly defined
    if (proj.homeMedia && typeof proj.homeMedia === 'string' && proj.homeMedia.trim() !== '') {
      return { type: 'image', src: proj.homeMedia.trim(), resolvedType: 'homeMedia' };
    }

    // 2. spotifyCoverCache[proj.spotify] if available
    if (proj.spotify && typeof spotifyCoverCache !== 'undefined' && spotifyCoverCache[proj.spotify]) {
      return { type: 'image', src: spotifyCoverCache[proj.spotify], resolvedType: 'spotifyCache' };
    }

    // 3. proj.cover if available
    if (proj.cover && typeof proj.cover === 'string' && proj.cover.trim() !== '') {
      return { type: 'image', src: proj.cover.trim(), resolvedType: 'cover' };
    }

    // 4. Existing fallback
    return { type: 'image', src: 'assets/fallback-cover.jpg', resolvedType: 'fallback' };
  }

  function resolveHomepageMedia(proj) {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

    if (currentVersion >= 96) {
      return getHomepageMediaSource(proj);
    } else if (currentVersion >= 94) {
      return getHomepageMediaSource(proj);
    } else {
      if (proj.video) {
        return { type: 'video', src: proj.video, resolvedType: 'video' };
      }
      const legacyCover = (proj.spotify && spotifyCoverCache[proj.spotify]) || proj.cover || 'assets/fallback-cover.jpg';
      return { type: 'image', src: legacyCover, resolvedType: 'cover fallback' };
    }
  }

  function resetSlideToIdle(slide) {
    if (!slide) return;
    const vid = slide.querySelector('.slide-video-media');
    const img = slide.querySelector('.slide-media');
    const playBtn = slide.querySelector('.home-play-overlay-btn');
    const pauseBtn = slide.querySelector('.home-pause-overlay-btn');

    if (vid) {
      try {
        vid.pause();
        vid.currentTime = 0;
        vid.removeAttribute('src');
        vid.load();
      } catch(e) {}
      vid.style.display = 'none';
    }
    if (img) img.style.display = 'block';
    if (playBtn) {
      playBtn.style.display = 'block';
      playBtn.style.opacity = '1';
    }
    if (pauseBtn) {
      pauseBtn.style.display = 'none';
      pauseBtn.style.opacity = '0';
    }
    slide.setAttribute('data-playback-state', 'IDLE');
  }

  function stopAllHomepageVideos() {
    console.log('[V106] project-change reset');
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      resetSlideToIdle(slide);
    });
  }

  function pauseHomepageVideo(index) {
    console.log(`[V106] pause click received for slide ${index}`);
    document.body.classList.remove('hide-cursor-active');
    const slide = document.querySelector(`.slide[data-slide-index="${index}"]`);
    if (!slide) return;

    const vid = slide.querySelector('.slide-video-media');
    if (vid && !vid.paused) {
      vid.pause();
      console.log(`[V106] pause at currentTime: ${vid.currentTime}`);
    }

    slide.setAttribute('data-playback-state', 'PAUSED');
  }

  function toggleHomePlayback(index) {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 104) return;

    const slide = document.querySelector(`.slide[data-slide-index="${index}"]`);
    if (!slide) return;

    const vid = slide.querySelector('.slide-video-media');
    if (!vid) return;

    const currentState = slide.getAttribute('data-playback-state') || 'IDLE';

    if (currentState === 'PLAYING' && !vid.paused) {
      pauseHomepageVideo(index);
    } else {
      playHomepageVideo(index);
    }
  }

  function playHomepageVideo(index) {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 104) return;

    console.log(`[V106] play click received for slide ${index}`);

    const slide = document.querySelector(`.slide[data-slide-index="${index}"]`);
    if (!slide) return;

    const vid = slide.querySelector('.slide-video-media');
    const currentState = slide.getAttribute('data-playback-state') || 'IDLE';

    if (!vid) return;

    // --- RESUME FLOW (state === PAUSED) ---
    if (currentState === 'PAUSED' && vid.src && vid.currentTime > 0) {
      console.log(`[V106] resume requested at currentTime: ${vid.currentTime}`);
      const resumePromise = vid.play();
      if (resumePromise !== undefined) {
        resumePromise.then(() => {
          console.log(`[V106] play() (resume) resolved at currentTime: ${vid.currentTime}`);
          slide.setAttribute('data-playback-state', 'PLAYING');
        }).catch(err => {
          console.error(`[V106] play() (resume) rejected for slide ${index}:`, err);
        });
      }
      return;
    }

    // --- FIRST PLAY FLOW (state === IDLE) ---
    stopAllHomepageVideos();

    const proj = homepageProjects[index];
    console.log('[V106] active project:', proj ? proj.title : index);
    const videoSrc = vid.getAttribute('data-video-src');
    console.log('[V106] requested video src:', videoSrc);

    if (videoSrc && (!vid.src || !vid.src.includes(videoSrc.replace('../', '')))) {
      vid.src = videoSrc;
      vid.preload = 'metadata';
      vid.muted = false;
      vid.controls = false;
      vid.load();
      console.log('[V106] video element created / loaded');
    }

    vid.onloadstart = () => console.log(`[V106] loadstart for slide ${index}`);
    vid.onloadedmetadata = () => console.log(`[V106] loadedmetadata for slide ${index}`);
    vid.oncanplay = () => console.log(`[V106] canplay for slide ${index}`);
    vid.onpause = () => console.log(`[V106] pause event for slide ${index}`);
    vid.onplay = () => console.log(`[V106] play event for slide ${index}`);

    console.log(`[V106] play() called for slide ${index}`);
    const playPromise = vid.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log(`[V106] play() resolved for slide ${index}`);
        slide.setAttribute('data-playback-state', 'PLAYING');
      }).catch(err => {
        console.error(`[V106] play() rejected for slide ${index}:`, err);
        slide.setAttribute('data-playback-state', 'IDLE');
      });
    }

    vid.onended = () => {
      console.log(`[V106] video ended for slide ${index}`);
      slide.setAttribute('data-playback-state', 'IDLE');
      try {
        vid.pause();
        vid.currentTime = 0;
        vid.removeAttribute('src');
        vid.load();
      } catch(e) {}
    };
  }

  function buildHomeSlideshowAndTimeline() {
    const viewport = document.getElementById('slideshowViewport');
    const timelineTrack = document.getElementById('timelineTrack');
    if (!viewport) return;

    viewport.innerHTML = '';
    if (timelineTrack) timelineTrack.innerHTML = '';

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    const isV104Plus = currentVersion >= 104;
    const isV99Plus = currentVersion >= 99 && currentVersion <= 101;
    const isV98Plus = currentVersion >= 98;
    const isV97Plus = currentVersion >= 97;

    const homeProjs = getHomeProjects();

    if (isV104Plus) {
      const homeDotsTrack = document.getElementById('homeDotsTrack');
      if (homeDotsTrack) homeDotsTrack.innerHTML = '';

      homeProjs.forEach((proj, idx) => {
        const slide = document.createElement('div');
        slide.className = `slide ${idx === 0 ? 'active' : ''}`;
        slide.setAttribute('data-slide-index', idx);
        slide.setAttribute('data-playback-state', 'IDLE');
        if (proj.id) slide.setAttribute('data-proj-id', proj.id);

        if (currentVersion === 119) {
          slide.innerHTML = `
            <div class="slide-inner">
              <div class="home-media-frame">
                <img class="slide-media" data-proj-id="${proj.id}" src="${proj.thumbnail}" alt="${proj.title}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; margin: auto; display: block;">
                <video class="slide-video-media" data-video-src="${proj.video}" playsinline style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; margin: auto; display: none;"></video>
                <button type="button" class="home-play-overlay-btn" aria-label="Play Video" data-slide-index="${idx}">▶</button>
                <button type="button" class="home-pause-overlay-btn" aria-label="Pause Video" data-slide-index="${idx}" style="display: none; opacity: 0;">Ⅱ</button>
              </div>
            </div>
          `;
        } else {
          slide.innerHTML = `
            <div class="slide-inner">
              <img class="slide-media" data-proj-id="${proj.id}" src="${proj.thumbnail}" alt="${proj.title}" style="max-width: 88.5vw; max-height: 77.7vh; width: auto; height: auto; object-fit: contain; transform: translateY(-18px); margin: auto; display: block;">
              <video class="slide-video-media" data-video-src="${proj.video}" playsinline style="max-width: 88.5vw; max-height: 77.7vh; width: auto; height: auto; object-fit: contain; transform: translateY(-18px); margin: auto; display: none;"></video>
              <button type="button" class="home-play-overlay-btn" aria-label="Play Video" data-slide-index="${idx}">▶</button>
              <button type="button" class="home-pause-overlay-btn" aria-label="Pause Video" data-slide-index="${idx}" style="display: none; opacity: 0;">Ⅱ</button>
            </div>
          `;
        }
        viewport.appendChild(slide);

        const slideInner = slide.querySelector('.slide-inner');
        const img = slide.querySelector('.slide-media');
        const vid = slide.querySelector('.slide-video-media');
        const playBtn = slide.querySelector('.home-play-overlay-btn');
        const pauseBtn = slide.querySelector('.home-pause-overlay-btn');

        if (currentVersion >= 128) {
          const mediaElements = [img, vid, playBtn, pauseBtn].filter(Boolean);
          mediaElements.forEach(el => {
            let startX = 0;
            let startY = 0;
            let isPointerDown = false;

            el.addEventListener('pointerdown', (e) => {
              isPointerDown = true;
              startX = e.clientX;
              startY = e.clientY;
            });

            el.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();

              if (isPointerDown) {
                const deltaX = Math.abs(e.clientX - startX);
                const deltaY = Math.abs(e.clientY - startY);
                isPointerDown = false;
                if (Math.hypot(deltaX, deltaY) > 8) return;
              }

              toggleHomePlayback(idx);
            });
          });
        } else {
          if (playBtn) {
            playBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              playHomepageVideo(idx);
            });
          }

          if (pauseBtn) {
            pauseBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              pauseHomepageVideo(idx);
            });
          }

          if (slideInner && pauseBtn) {
            slideInner.addEventListener('mouseenter', () => {
              const video = slide.querySelector('.slide-video-media');
              if (video && !video.paused && video.style.display !== 'none') {
                pauseBtn.style.opacity = '1';
              }
            });
            slideInner.addEventListener('mouseleave', () => {
              pauseBtn.style.opacity = '0';
            });
          }
        }

        if (homeDotsTrack) {
          const dot = document.createElement('button');
          dot.className = `home-dot ${idx === 0 ? 'active' : ''}`;
          dot.setAttribute('data-dot-index', idx);
          dot.setAttribute('aria-label', `Project ${idx + 1}`);
          dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const itemsPerSet = getHomeProjects().length;
            showSlide(idx, idx + itemsPerSet);
          });
          homeDotsTrack.appendChild(dot);
        }
      });
      return;
    }

    homeProjs.forEach((proj, idx) => {
      // 1. Create slide
      const slide = document.createElement('div');
      slide.className = `slide ${idx === 0 ? 'active' : ''}`;
      slide.setAttribute('data-slide-index', idx);

      const mediaRes = resolveHomepageMedia(proj);
      let mediaStyle = 'width: 100%; height: 100%; object-fit: cover;';
      if (isV98Plus) {
        mediaStyle = 'max-width: 88.5vw; max-height: 77.7vh; width: auto; height: auto; object-fit: contain; transform: translateY(-18px);';
      } else if (isV97Plus) {
        mediaStyle = 'max-width: 82vw; max-height: 72vh; width: auto; height: auto; object-fit: contain;';
      }

      let mediaHtml = '';
      if (mediaRes.type === 'video') {
        mediaHtml = `
          <video class="slide-media" loop muted playsinline autoplay style="${mediaStyle}">
            <source src="${mediaRes.src}" type="video/mp4">
          </video>
        `;
      } else {
        mediaHtml = `
          <img class="slide-media" data-proj-title="${proj.title || ''}" src="${mediaRes.src}" alt="${proj.title}" style="${mediaStyle}">
        `;
      }

      let audioControlHtml = '';
      if (isV99Plus) {
        audioControlHtml = `
          <div class="home-audio-control" data-slide-index="${idx}">
            <button class="home-audio-btn" aria-label="Play/Pause Audio">▶</button>
            <div class="home-audio-progress-track">
              <div class="home-audio-progress-fill"></div>
            </div>
          </div>
        `;
      }

      slide.innerHTML = `<div class="slide-inner">${mediaHtml}${audioControlHtml}</div>`;
      viewport.appendChild(slide);

      const slideMediaEl = slide.querySelector('.slide-media');
      if (slideMediaEl) {
        slideMediaEl.addEventListener('load', () => syncHomeAudioPlayerGeometry());
        slideMediaEl.addEventListener('loadeddata', () => syncHomeAudioPlayerGeometry());
      }

      if (isV99Plus) {
        const audioCtrl = slide.querySelector('.home-audio-control');
        if (audioCtrl) {
          audioCtrl.addEventListener('click', (e) => e.stopPropagation());
          const btn = audioCtrl.querySelector('.home-audio-btn');
          if (btn) {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              toggleHomeAudioPlayback(proj);
            });
          }
          const track = audioCtrl.querySelector('.home-audio-progress-track');
          if (track) {
            track.addEventListener('click', (e) => {
              e.stopPropagation();
              seekHomeAudio(e);
            });
          }
        }
      }

      // 2. Create SVG-styled timeline thumb
      if (timelineTrack) {
        const thumb = document.createElement('div');
        thumb.className = `timeline-thumb ${idx === 0 ? 'active' : ''}`;
        thumb.setAttribute('data-thumb-index', idx);
        const thumbSrc = mediaRes.src;
        thumb.innerHTML = `
          <svg viewBox="0 0 100 75">
            <image data-proj-title="${proj.title || ''}" href="${thumbSrc}" width="100" height="75" preserveAspectRatio="xMidYMid slice" />
          </svg>
        `;
        timelineTrack.appendChild(thumb);
      }

      // Trigger async Spotify cover fetch if spotify URL is present and homeMedia is not set
      if (proj.spotify && !proj.homeMedia) {
        loadSpotifyVisualAsync(proj.spotify, proj.title);
      }
    });

    // Infinite Timeline Clones (Clone the items 3 times for wrapping resets)
    if (timelineTrack) {
      const originalThumbs = Array.from(timelineTrack.children);
      timelineTrack.innerHTML = '';
      const setsCount = 3;
      const itemsPerSet = originalThumbs.length;

      for (let s = 0; s < setsCount; s++) {
        originalThumbs.forEach((thumb, idx) => {
          const clone = thumb.cloneNode(true);
          clone.setAttribute('data-thumb-index', idx);
          clone.setAttribute('data-virtual-index', s * itemsPerSet + idx);
          timelineTrack.appendChild(clone);
        });
      }
    }
  }

  function showSlide(index, targetVirtualIndex = null) {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion >= 99 && currentVersion <= 101 && typeof stopHomeAudio === 'function') {
      stopHomeAudio();
    }
    if (currentVersion >= 127) {
      // V127: Immediate audio pause across outgoing videos
      const allSlides = document.querySelectorAll('.slide');
      allSlides.forEach(slide => {
        const vid = slide.querySelector('.slide-video-media');
        if (vid && !vid.paused) {
          try { vid.pause(); } catch(e) {}
        }
      });
      // Delay visual reset & currentTime=0 until after 650ms media crossfade completes
      if (typeof window.v127ResetToken === 'undefined') window.v127ResetToken = 0;
      window.v127ResetToken++;
      setTimeout(() => {
        const currentSlides = document.querySelectorAll('.slide');
        currentSlides.forEach((s, idx) => {
          if (idx !== currentSlideIndex) {
            resetSlideToIdle(s);
          }
        });
      }, 650);
    } else if (currentVersion >= 104) {
      stopAllHomepageVideos();
    }

    const slides = document.querySelectorAll('.slide');
    const thumbs = document.querySelectorAll('.timeline-thumb');
    const timelineTrack = document.getElementById('timelineTrack');
    const titleEl = document.getElementById('slideshowTitle');
    const typeEl = document.getElementById('slideshowType');
    const counterEl = document.getElementById('projectCounter');

    if (slides.length === 0) return;

    const homeProjs = getHomeProjects();

    currentSlideIndex = index;
    if (targetVirtualIndex !== null) {
      currentVirtualIndex = targetVirtualIndex;
    }

    // Toggle active classes on fullscreen slides
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) slides[index].classList.add('active');

    if (currentVersion >= 100 && currentVersion <= 101) {
      requestAnimationFrame(() => syncHomeAudioPlayerWidth());
    }

    if (currentVersion >= 129) {
      document.body.classList.remove('hide-cursor-active');
    }

    // Update caption text details (V118+ Sequential Caption Fade)
    const proj = homeProjs[index];
    if (proj) {
      let newTitleText = proj.title || '';
      if (currentVersion >= 170 && proj.artist) {
        newTitleText = `${proj.title} — ${proj.artist.toUpperCase()}`;
      }
      let newTypeText = '';
      if (currentVersion >= 129 && proj) {
        if (proj.id === "moran-the-dream-i-never-had") {
          newTypeText = "MUSIC & SOUND DESIGN BY RAYAN MADE IT";
        } else {
          newTypeText = "MUSIC PRODUCED BY RAYAN MADE IT";
        }
      } else if (currentVersion >= 104 && proj.displayMeta) {
        newTypeText = proj.displayMeta;
      } else {
        const format = proj.type ? proj.type.toUpperCase() : 'SINGLE';
        const cat = proj.category ? proj.category.toUpperCase() : 'PRODUCTION';
        newTypeText = `${cat} / ${format}`;
      }

      if (currentVersion >= 118) {
        const captionWrapper = document.getElementById('slideCaptionWrapper');
        if (captionWrapper) {
          if (typeof window.v118CaptionToken === 'undefined') {
            window.v118CaptionToken = 0;
          }
          window.v118CaptionToken++;
          const currentToken = window.v118CaptionToken;

          // Step A: Fade Out Current Caption (220ms)
          captionWrapper.classList.remove('caption-fading-in');
          captionWrapper.classList.add('caption-fading-out');

          setTimeout(() => {
            // Rapid Swipe Guard: Abort stale callback if a newer swipe occurred
            if (currentToken !== window.v118CaptionToken) return;

            // Step B: Text Swap at opacity 0
            if (titleEl) {
              titleEl.innerText = newTitleText;
              // keep lowercase titles as written (e.g. tfkpourlafindumonde?)
              if (proj.preserveCase) titleEl.style.setProperty('text-transform', 'none', 'important');
              else titleEl.style.removeProperty('text-transform');
            }
            if (typeEl) typeEl.innerText = newTypeText;

            // Director line (added 2026-11-19), created once under the credit line
            if (typeEl && currentVersion >= 129) {
              let directorEl = document.getElementById('slideshowDirector');
              if (!directorEl) {
                directorEl = document.createElement('span');
                directorEl.className = 'slide-type slide-director';
                directorEl.id = 'slideshowDirector';
                typeEl.insertAdjacentElement('afterend', directorEl);
              }
              const directorText = proj.director || homepageDirectorsById[proj.id] || '';
              directorEl.innerText = directorText;
              directorEl.style.display = directorText ? '' : 'none';
            }

            // Step C: Fade In New Caption (320ms)
            captionWrapper.classList.remove('caption-fading-out');
            captionWrapper.classList.add('caption-fading-in');
          }, 220);
        }
      } else if (currentVersion === 117) {
        const captionWrapper = document.getElementById('slideCaptionWrapper');
        if (captionWrapper) {
          let layerA = document.getElementById('captionLayerA');
          let layerB = document.getElementById('captionLayerB');

          // Initialize layers if not present in DOM
          if (!layerA) {
            layerA = document.createElement('div');
            layerA.id = 'captionLayerA';
            layerA.className = 'slide-caption-layer layer-a active';
            captionWrapper.appendChild(layerA);
          }
          if (!layerB) {
            layerB = document.createElement('div');
            layerB.id = 'captionLayerB';
            layerB.className = 'slide-caption-layer layer-b';
            captionWrapper.appendChild(layerB);
          }

          const isLayerAActive = layerA.classList.contains('active');
          const targetLayer = isLayerAActive ? layerB : layerA;
          const outgoingLayer = isLayerAActive ? layerA : layerB;

          targetLayer.innerHTML = `<h3 class="slide-title">${newTitleText}</h3><span class="slide-type">${newTypeText}</span>`;

          outgoingLayer.classList.remove('active');
          requestAnimationFrame(() => {
            targetLayer.classList.add('active');
          });
        }
      } else if (currentVersion === 116) {
        const captionWrapper = document.getElementById('slideCaptionWrapper') || (titleEl ? titleEl.parentElement : null);
        if (captionWrapper) {
          const existingLayers = captionWrapper.querySelectorAll('.slide-caption-layer');
          existingLayers.forEach(layer => {
            layer.classList.remove('active');
            setTimeout(() => {
              if (layer.parentNode && !layer.classList.contains('active')) {
                layer.parentNode.removeChild(layer);
              }
            }, 650);
          });
          const newLayer = document.createElement('div');
          newLayer.className = 'slide-caption-layer';
          newLayer.innerHTML = `<h3 class="slide-title">${newTitleText}</h3><span class="slide-type">${newTypeText}</span>`;
          captionWrapper.appendChild(newLayer);
          requestAnimationFrame(() => {
            newLayer.classList.add('active');
          });
        }
      } else if (titleEl && typeEl) {
        titleEl.innerText = newTitleText;
        typeEl.innerText = newTypeText;
      }
    }

    // Update project counter (e.g. 01 / 07)
    if (counterEl) {
      const displayIdx = String(index + 1).padStart(2, '0');
      const totalCount = String(homeProjs.length).padStart(2, '0');
      counterEl.innerText = `${displayIdx} / ${totalCount}`;
    }

    // Update V104 Navigation Dots
    if (currentVersion >= 104) {
      const dots = document.querySelectorAll('.home-dot');
      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Center timeline track on active virtual thumbnail center dynamically
    if (timelineTrack && thumbs[currentVirtualIndex]) {
      const activeThumb = thumbs[currentVirtualIndex];
      const thumbWidth = activeThumb.offsetWidth || 100;
      const gap = 20; // 20px gap
      const leftOffset = currentVirtualIndex * (thumbWidth + gap);
      const translateVal = (window.innerWidth / 2) - leftOffset - (thumbWidth / 2);

      timelineTrack.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)';
      timelineTrack.style.transform = `translateX(${translateVal}px)`;
    }

    // Dynamic Depth / Saturation effect on the thumbnails
    thumbs.forEach((thumb, idx) => {
      const distance = Math.abs(idx - currentVirtualIndex);
      let opacity = 0.12;
      let filter = 'grayscale(100%) blur(0.5px)';
      let scale = 0.94;

      if (distance === 0) {
        opacity = 1.0;
        filter = 'grayscale(0%) blur(0px)';
        scale = 1.0;
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
        if (distance === 1) {
          opacity = 0.45;
          filter = 'grayscale(70%) blur(0px)';
          scale = 0.97;
        } else if (distance === 2) {
          opacity = 0.25;
          filter = 'grayscale(90%) blur(0.2px)';
          scale = 0.95;
        }
      }

      thumb.style.opacity = opacity;
      thumb.style.filter = filter;
      thumb.style.transform = `scale(${scale})`;
    });

    // Auto-play video inside current slide if present (pre-V104)
    if (currentVersion < 104) {
      slides.forEach((slide, i) => {
        const vid = slide.querySelector('video');
        if (vid) {
          if (i === index) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
            vid.currentTime = 0;
          }
        }
      });
    }

    // Force interface theme
    applyInterfaceTheme();
  }

  // Force always dark interface theme (white text on dark background)
  function applyInterfaceTheme() {
    document.body.classList.add('theme-dark-interface');
    document.body.classList.remove('theme-light-interface');
  }

  function setupTimelineResetListener() {
    const timelineTrack = document.getElementById('timelineTrack');
    if (!timelineTrack) return;

    timelineTrack.addEventListener('transitionend', (e) => {
      if (e.target !== timelineTrack) return;
      const thumbs = document.querySelectorAll('.timeline-thumb');
      const itemsPerSet = getHomeProjects().length;

      if (currentVirtualIndex >= 2 * itemsPerSet) {
        currentVirtualIndex = currentVirtualIndex - itemsPerSet;
        timelineTrack.style.transition = 'none';

        const activeThumb = thumbs[currentVirtualIndex];
        const thumbWidth = activeThumb ? (activeThumb.offsetWidth || 100) : 100;
        const gap = 20;
        const leftOffset = currentVirtualIndex * (thumbWidth + gap);
        const translateVal = (window.innerWidth / 2) - leftOffset - (thumbWidth / 2);

        timelineTrack.style.transform = `translateX(${translateVal}px)`;
        timelineTrack.offsetHeight; // force repaint
      } else if (currentVirtualIndex < itemsPerSet) {
        currentVirtualIndex = currentVirtualIndex + itemsPerSet;
        timelineTrack.style.transition = 'none';

        const activeThumb = thumbs[currentVirtualIndex];
        const thumbWidth = activeThumb ? (activeThumb.offsetWidth || 100) : 100;
        const gap = 20;
        const leftOffset = currentVirtualIndex * (thumbWidth + gap);
        const translateVal = (window.innerWidth / 2) - leftOffset - (thumbWidth / 2);

        timelineTrack.style.transform = `translateX(${translateVal}px)`;
        timelineTrack.offsetHeight;
      }
    });
  }

  function bindTimelineThumbnailsClick() {
    const thumbs = document.querySelectorAll('.timeline-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetProjIdx = parseInt(thumb.getAttribute('data-thumb-index'));
        const targetVirtualIdx = parseInt(thumb.getAttribute('data-virtual-index'));
        showSlide(targetProjIdx, targetVirtualIdx);
      });
    });
  }

  function setupSlideshowMouseController() {
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let hideCursor = false;

    function updateCursor() {
      if (cursorLabel) {
        cursorLabel.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(16px, -20px)`;
      }
      isMoving = false;
    }

    const globalHeader = document.querySelector('header');
    if (globalHeader) {
      globalHeader.addEventListener('mouseenter', () => {
        document.body.classList.add('is-topbar-hovered');
      });
      globalHeader.addEventListener('mouseleave', () => {
        document.body.classList.remove('is-topbar-hovered');
      });
    }

    const hideTargets = document.querySelectorAll('.logo, .nav-link, .bottom-timeline, .home-dots-wrapper, .home-play-overlay-btn, .project-counter, #menuToggle, #projectModal');
    hideTargets.forEach(target => {
      if (target) {
        target.addEventListener('mouseenter', () => { hideCursor = true; });
        target.addEventListener('mouseleave', () => { hideCursor = false; });
      }
    });

    if (homeSection && cursorLabel) {
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!animationActive) {
          cursorLabel.classList.remove('visible');
          return;
        }

        const rectHome = homeSection.getBoundingClientRect();
        const insideHome = e.clientX >= rectHome.left && e.clientX <= rectHome.right &&
                           e.clientY >= rectHome.top && e.clientY <= rectHome.bottom;
        const isTopbarHovered = document.body.classList.contains('is-topbar-hovered');

        const versionMatch = __rmiVersionMatch();
        const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
        const isV110Plus = currentVersion >= 110;

        if (insideHome && !hideCursor && !isTopbarHovered && !isV110Plus) {
          cursorLabel.classList.add('visible');
          const targetText = (e.clientX < window.innerWidth / 2) ? "PREVIOUS" : "NEXT";
          if (cursorLabel.innerText !== targetText) {
            cursorLabel.innerText = targetText;
          }
        } else {
          cursorLabel.classList.remove('visible');
        }

        if (!isMoving) {
          isMoving = true;
          requestAnimationFrame(updateCursor);
        }
      });
    }

    const homeSlideshow = document.getElementById('homeSlideshow');
    const handleHomeHalfClick = (e) => {
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
      if (currentVersion >= 110) return;

      const homeDots = document.getElementById('homeDots');
      if (bottomTimeline && bottomTimeline.contains(e.target)) return;
      if (homeDots && homeDots.contains(e.target)) return;
      if (e.target.closest('.home-play-overlay-btn')) return;
      if (e.target.closest('.home-pause-overlay-btn')) return;
      if (e.target.closest('header')) return;
      if (!animationActive) return;

      const isNext = e.clientX >= window.innerWidth / 2;
      const itemsPerSet = getHomeProjects().length;

      if (!isNext) {
        currentVirtualIndex = currentVirtualIndex - 1;
      } else {
        currentVirtualIndex = currentVirtualIndex + 1;
      }

      const projIdx = (currentVirtualIndex % itemsPerSet + itemsPerSet) % itemsPerSet;
      showSlide(projIdx, currentVirtualIndex);
    };

    if (homeSection) {
      homeSection.addEventListener('click', handleHomeHalfClick);
    }
    if (homeSlideshow) {
      homeSlideshow.addEventListener('click', handleHomeHalfClick);
    }
  }

  // --- Immersive UI Inactivity Timer (Hide UI in 2.5s / V129 & V131 Cursor & Info Hide) ---
  let uiTimeout;
  function resetUiTimeout() {
    document.body.classList.remove('hide-ui-active');
    document.body.classList.remove('hide-cursor-active');
    clearTimeout(uiTimeout);

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

    const stiSection = document.getElementById('soundToImage');
    const isStiActive = currentVersion >= 131 && stiSection && stiSection.classList.contains('active');

    if (isStiActive) {
      staggerInV133Info();
      const activeView = document.querySelector('.sti-project-view');
      const isPlaying = activeView && activeView.getAttribute('data-playback-state') === 'PLAYING';

      if (isPlaying) {
        uiTimeout = setTimeout(() => {
          staggerOutV133Info(() => {
            document.body.classList.add('hide-cursor-active');
          });
        }, 2000);
      }
      return;
    }

    if (document.body.classList.contains('home-active') && animationActive) {
      const timeoutDelay = currentVersion >= 104 ? 2000 : 2500;
      uiTimeout = setTimeout(() => {
        document.body.classList.add('hide-ui-active');
        if (currentVersion >= 129) {
          const activeSlide = document.querySelector('.slide.active');
          if (activeSlide && activeSlide.getAttribute('data-playback-state') === 'PLAYING') {
            document.body.classList.add('hide-cursor-active');
          }
        }
      }, timeoutDelay);
    }
  }

  ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'touchend'].forEach(evt => {
    document.addEventListener(evt, resetUiTimeout);
  });

  // --- Spotify Cover Artwork Dynamic Resolver & Persistent Cache ---
  const SPOTIFY_CACHE_KEY = 'rayanmadeit_spotify_covers_v1';
  let spotifyCoverCache = {};

  try {
    const cached = localStorage.getItem(SPOTIFY_CACHE_KEY);
    if (cached) {
      spotifyCoverCache = JSON.parse(cached);
    }
  } catch (e) {
    console.warn("Local storage cache reading failed", e);
  }
  if (!spotifyCoverCache["https://open.spotify.com/intl-fr/track/4IeQKn5Lti8iobHsBdYUYu?si=f6bb490285b04ea4"]) {
    spotifyCoverCache["https://open.spotify.com/intl-fr/track/4IeQKn5Lti8iobHsBdYUYu?si=f6bb490285b04ea4"] = "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273b1ed0222ef5fe8524015b044";
  }
  if (!spotifyCoverCache["https://open.spotify.com/intl-fr/track/1ZzcCIvKU390Whf7rSxUUh?si=4839e34abea2454d"]) {
    spotifyCoverCache["https://open.spotify.com/intl-fr/track/1ZzcCIvKU390Whf7rSxUUh?si=4839e34abea2454d"] = "https://i.scdn.co/image/ab67616d0000b273f806818b0a8dcb297d1b0860";
  }

  function saveSpotifyCache() {
    try {
      localStorage.setItem(SPOTIFY_CACHE_KEY, JSON.stringify(spotifyCoverCache));
    } catch (e) {
      console.warn("Local storage cache saving failed", e);
    }
  }

  async function fetchSpotifyCover(spotifyUrl) {
    if (!spotifyUrl) return null;
    if (spotifyCoverCache[spotifyUrl]) {
      return spotifyCoverCache[spotifyUrl];
    }

    const proxies = [
      url => url,
      url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
    ];

    const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;

    for (const getProxyUrl of proxies) {
      try {
        const response = await fetch(getProxyUrl(oembedUrl));
        if (response.ok) {
          const data = await response.json();
          if (data && data.thumbnail_url) {
            spotifyCoverCache[spotifyUrl] = data.thumbnail_url;
            saveSpotifyCache();
            return data.thumbnail_url;
          }
        }
      } catch (e) {
        console.warn("CORS proxy failed, trying next option...", e);
      }
    }
    return null;
  }

  function loadSpotifyVisualAsync(spotifyUrl, projTitle) {
    fetchSpotifyCover(spotifyUrl).then(coverUrl => {
      if (coverUrl) {
        const imgs = document.querySelectorAll(`img[data-proj-title="${projTitle}"]`);
        imgs.forEach(img => {
          if (img.src !== coverUrl) {
            img.src = coverUrl;
          }
        });
        const svgImgs = document.querySelectorAll(`image[data-proj-title="${projTitle}"]`);
        svgImgs.forEach(svgImg => {
          if (svgImg.getAttribute('href') !== coverUrl) {
            svgImg.setAttribute('href', coverUrl);
          }
        });
      }
    });
  }

  // ==========================================================================
  // INTERACTIVE CARD STACK ENGINE (Production & Sound to Image Portfolios)
  // ==========================================================================

  let activeProdIndex = 0;
  let activeSoundIndex = 0;

  function getSpotifyEmbedUrl(url) {
    if (!url) return '';
    const isTrack = url.includes('/track/');
    const isAlbum = url.includes('/album/');
    let id = '';
    if (isTrack) {
      id = url.split('/track/')[1].split('?')[0];
      return `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;
    } else if (isAlbum) {
      id = url.split('/album/')[1].split('?')[0];
      return `https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`;
    }
    return '';
  }

  function renderEPLayout(proj, mediaHtml, useSpotifyCover) {
    let tracksHtml = '';
    if (proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        tracksHtml += `
          <div class="ep-track-row" style="--track-index: ${tIdx};">
            <span class="ep-track-number">${trackNum}</span>
            <span class="ep-track-name">${track.name}</span>
            <span class="ep-track-action">▶</span>
          </div>
        `;
      });
    }

    const embedUrl = getSpotifyEmbedUrl(proj.spotify);
    const spotifyEmbedHtml = embedUrl ? `
      <div class="ep-spotify-player">
        <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 4px; border: none; display: block;"></iframe>
      </div>
    ` : '';

    return `
      <div class="ep-project-composition">
        <div class="ep-cover">
          ${mediaHtml}
        </div>
        <div class="ep-tracklist-panel">
          <div class="ep-tracklist-header">
            <span class="ep-tracklist-label">EP</span>
            <h3 class="ep-tracklist-title">${proj.title}</h3>
          </div>
          <div class="ep-tracklist">
            ${tracksHtml}
          </div>
          ${spotifyEmbedHtml}
        </div>
      </div>
    `;
  }

  function renderEPLayoutV18(proj, mediaHtml, useSpotifyCover) {
    let tracksHtml = '';
    if (proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        tracksHtml += `
          <div class="production-ep-track" style="--track-index: ${tIdx}; display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
            <div class="production-ep-track-title" style="font-family: var(--font-sans); font-size: 0.68rem; font-weight: 500; color: rgba(245, 244, 240, 0.7); text-transform: uppercase; letter-spacing: 0.06em; margin-left: 2px;">
              ${trackNum} — ${track.name}
            </div>
            <iframe src="${trackEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 4px; border: none; display: block; box-shadow: 0 4px 12px rgba(0,0,0,0.35);"></iframe>
          </div>
        `;
      });
    }

    return `
      <div class="production-ep-layout" style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start; gap: 0; width: 100%; position: relative;">
        <div class="production-ep-cover-wrapper" style="position: relative; flex-shrink: 0; z-index: 5;">
          <div class="production-ep-cover" style="aspect-ratio: 1 / 1; width: clamp(320px, 34vw, 480px); height: auto; display: block;">
            ${mediaHtml}
          </div>
        </div>
        <div class="production-ep-tracklist" style="flex-grow: 1; margin-left: -50px; z-index: 10; display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px; box-sizing: border-box; overflow: visible;">
          ${tracksHtml}
        </div>
      </div>
    `;
  }

  function renderSingleLayout(proj, mediaHtml, useSpotifyCover) {
    const embedUrl = proj.spotify ? getSpotifyEmbedUrl(proj.spotify) : '';
    const playerHtml = embedUrl ? `<iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px; border: none; display: block;"></iframe>` : '';

    const titleStyle = "font-family: 'Bootzy', var(--font-title); font-size: 1.8rem; font-weight: normal; color: #F5F4F0; line-height: 1.2; margin: 0; text-transform: uppercase; letter-spacing: -0.01em;";
    const roleStyle = "font-family: var(--font-sans); font-size: 0.8rem; font-weight: normal; color: rgba(245, 244, 240, 0.6); text-transform: uppercase; letter-spacing: 0.08em; margin: 0.2rem 0 0 0;";
    const dateStyle = "font-family: var(--font-sans); font-size: 0.7rem; font-weight: normal; color: rgba(245, 244, 240, 0.4); text-transform: uppercase; letter-spacing: 0.06em; margin: 0.2rem 0 0 0;";

    return `
      <div class="v15-card-content" style="display: flex; flex-direction: column; gap: 1.2rem; width: 100%;">
        <div class="v15-media-wrapper" style="width: 100%; aspect-ratio: 1/1; position: relative;">
          ${mediaHtml}
        </div>
        <div class="v15-player-wrapper" style="width: 100%;">
          ${playerHtml}
        </div>
        <div class="v15-meta-wrapper" style="width: 100%; text-align: left;">
          <h3 class="v15-title" style="${titleStyle}">${proj.title}</h3>
          <p class="v15-role" style="${roleStyle}">Rayan Made It &mdash; ${proj.role}</p>
          <p class="v15-date" style="${dateStyle}">${proj.year}</p>
        </div>
      </div>
    `;
  }

  window.playEPTrackV23 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.navigateStackV23 = function(direction) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;
    view.classList.add('fade-out');
    setTimeout(() => {
      const list = productionProjects;
      const total = list.length;
      if (direction === 'next') {
        activeProdIndex = (activeProdIndex + 1) % total;
      } else {
        activeProdIndex = (activeProdIndex - 1 + total) % total;
      }
      renderProductionProjectV23(activeProdIndex);
      view.classList.remove('fade-out');
    }, 400);
  };

  function renderProductionProjectV23(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v23-cover-img" src="${resolvedSrc}" alt="${proj.title}">`;

    let contentHtml = '';
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          <div class="v23-project-header">
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV23('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v23-project-header">
            <span class="v23-ep-tag">EP</span>
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-ep-tracklist">
            ${tracksHtml}
          </div>
          ${playerHtml}
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      <div class="v23-editorial-nav">
        <button class="v23-nav-editorial-btn prev-btn" onclick="window.navigateStackV23('prev')">← PREVIOUS</button>
        <button class="v23-nav-editorial-btn next-btn" onclick="window.navigateStackV23('next')">NEXT →</button>
      </div>
    `;

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV26 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  let isTransitioning = false;
  window.goToProductionProject = function(newIndex) {
    if (isTransitioning) return;

    const total = productionProjects.length;
    if (newIndex < 0) {
      newIndex = total - 1;
    }
    if (newIndex >= total) {
      newIndex = 0;
    }
    if (newIndex === activeProdIndex) return;

    isTransitioning = true;
    const previousIndex = activeProdIndex;
    activeProdIndex = newIndex;

    animateProductionTransition(previousIndex, activeProdIndex);
  };

  window.nextProductionProject = function() {
    goToProductionProject(activeProdIndex + 1);
  };

  window.previousProductionProject = function() {
    goToProductionProject(activeProdIndex - 1);
  };

  function animateProductionTransition(prevIdx, nextIdx) {
    const view = document.getElementById('productionEditorialView');
    if (!view) {
      isTransitioning = false;
      return;
    }

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

    if (currentVersion >= 86) {
      let rail = view.querySelector('#v86Rail');
      let slotCurrent = view.querySelector('#v86SlotCurrent');
      let slotAdjacent = view.querySelector('#v86SlotAdjacent');

      if (!rail || !slotCurrent || !slotAdjacent) {
        renderProductionProjectV86(prevIdx);
        rail = view.querySelector('#v86Rail');
        slotCurrent = view.querySelector('#v86SlotCurrent');
        slotAdjacent = view.querySelector('#v86SlotAdjacent');
      }

      // AUTO-CLOSE COORDINATION IF PLAYER IS OPEN, OPENING, OR CLOSING (V167)
      if (productionListeningStateV74 !== 'closed') {
        // 1. Invalidate any pending listening session callbacks and cancel open/close timers
        currentListeningSessionId++;
        if (openListeningV74Timer) { clearTimeout(openListeningV74Timer); openListeningV74Timer = null; }
        if (openListeningV74CompleteTimer) { clearTimeout(openListeningV74CompleteTimer); openListeningV74CompleteTimer = null; }
        if (closeListeningV74Timer) { clearTimeout(closeListeningV74Timer); closeListeningV74Timer = null; }

        // 2. Stop Spotify audio playback on the outgoing project immediately
        const prevIframes = slotCurrent.querySelectorAll('.v74-spotify iframe');
        prevIframes.forEach(iframe => {
          if (iframe && iframe.src) {
            const curSrc = iframe.src;
            iframe.src = '';
            iframe.src = curSrc;
          }
        });

        // 3. Initiate the approved close animation on the outgoing stage as it slides away
        const prevStage = slotCurrent.querySelector('.v74-production-stage');
        if (prevStage) {
          prevStage.classList.add('state-closing');
        }

        // 4. Reset internal state flags immediately so no stale open state persists
        productionListeningStateV74 = 'closed';
        productionOpenProjectIndex = -1;
      }

      const total = productionProjects.length;
      const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);

      // 1. Prepare ADJACENT slot with next project HTML
      slotAdjacent.innerHTML = getProductionProjectHTML_V74(nextIdx);

      // 2. Position ADJACENT slot: place-below (+100%) for NEXT, place-above (-100%) for PREVIOUS
      slotAdjacent.className = 'v86-project-slot v86-slot-adjacent ' + (isNext ? 'place-below' : 'place-above');
      slotAdjacent.style.display = 'block';

      // 3. Reset rail transform to 0 without transition before starting movement
      rail.style.transition = 'none';
      rail.style.transform = 'translateY(0)';
      rail.getBoundingClientRect(); // force layout reflow

      const targetRailY = isNext ? '-100%' : '100%';
      const transitionDuration = (currentVersion >= 90) ? 1150 : (currentVersion >= 88) ? 900 : (currentVersion >= 87) ? 820 : 1000;
      const transitionEasing = (currentVersion >= 90) ? 'cubic-bezier(0.62, 0, 0.38, 1)' : (currentVersion >= 88) ? 'cubic-bezier(0.65, 0, 0.35, 1)' : (currentVersion >= 87) ? 'cubic-bezier(0.76, 0, 0.24, 1)' : 'linear';
      const transitionStartTime = Date.now();

      // 4. Animate rail in double rAF
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          rail.style.transition = `transform ${transitionDuration}ms ${transitionEasing}`;
          rail.style.transform = `translateY(${targetRailY})`;
        });
      });

      // 5. After transition completes:
      setTimeout(() => {
        const elapsedSec = (Date.now() - transitionStartTime) / 1000;

        // Hide and clear slotAdjacent FIRST so it cannot produce any flash at viewport boundary
        slotAdjacent.style.display = 'none';
        slotAdjacent.innerHTML = '';
        slotAdjacent.className = 'v86-project-slot v86-slot-adjacent';

        // Update slotCurrent with newly reached project HTML
        slotCurrent.innerHTML = getProductionProjectHTML_V74(nextIdx);

        // Synchronize marquee horizontal animation phase for V89+
        if (currentVersion >= 89) {
          const newMarqueeTrack = slotCurrent.querySelector('.v47-marquee-track');
          if (newMarqueeTrack) {
            newMarqueeTrack.style.animationDelay = `-${elapsedSec}s`;
          }
        }

        // Reset rail transform invisibly to translateY(0)
        rail.style.transition = 'none';
        rail.style.transform = 'translateY(0)';
        rail.getBoundingClientRect(); // force layout reflow

        const counterEl = document.getElementById('projectCounter');
        if (counterEl) {
          const activeNum = String(nextIdx + 1).padStart(2, '0');
          const totalNum = String(total).padStart(2, '0');
          counterEl.textContent = `${activeNum} / ${totalNum}`;
        }

        // Strictly guarantee clean closed listening state on destination project
        productionListeningStateV74 = 'closed';
        productionOpenProjectIndex = -1;

        isTransitioning = false;
      }, transitionDuration);

      return;
    }

    if (currentVersion >= 27) {
      // V27: Fade out only project info text panel and bottom rail, keeping cover stable (Section 2)
      const info = view.querySelector('.v23-project-info') || view.querySelector('.v31-project-info-column');
      const rail = view.querySelector('.v26-editorial-rail') || view.querySelector('.v31-editorial-counter');
      const v34Blocks = view.querySelectorAll('.v34-title-block, .v34-role-block, .v34-credits-block, .v34-tracklist-block, .v34-player-block');
      const v34Counter = view.querySelector('.v34-editorial-counter');
      const v36Blocks = view.querySelectorAll('.v36-header-group, .v36-project-info-line, .v36-listening-zone');
      const v37Blocks = view.querySelectorAll('.v37-title-block, .v37-metadata-line, .v37-tracklist-block, .v37-player-block');
      const v37Counter = view.querySelector('.v37-editorial-counter');
      
      if (info) {
        info.style.transition = 'opacity 150ms ease, transform 150ms ease';
        info.style.opacity = '0';
        info.style.transform = 'translateY(-4px)';
      }
      if (rail) {
        rail.style.transition = 'opacity 150ms ease';
        rail.style.opacity = '0';
      }
      if (v34Blocks.length > 0) {
        v34Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      if (v34Counter) {
        v34Counter.style.transition = 'opacity 150ms ease';
        v34Counter.style.opacity = '0';
      }
      if (v36Blocks.length > 0) {
        v36Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      if (v37Blocks.length > 0) {
        v37Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      if (v37Counter) {
        v37Counter.style.transition = 'opacity 150ms ease';
        v37Counter.style.opacity = '0';
      }
      const v39Blocks = view.querySelectorAll('.v39-title, .v39-artist, .v39-metadata, .v39-tracklist, .v39-spotify, .v39-counter');
      if (v39Blocks.length > 0) {
        v39Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v42Blocks = view.querySelectorAll('.v42-title, .v42-artist, .v42-metadata, .v42-counter, .v42-play-cta, .v42-listening-panel');
      if (v42Blocks.length > 0) {
        v42Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v43Blocks = view.querySelectorAll('.v43-title, .v43-artist, .v43-metadata, .v43-counter, .v43-play-cta, .v43-listening-panel');
      if (v43Blocks.length > 0) {
        v43Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v44Blocks = view.querySelectorAll('.v44-title, .v44-artist, .v44-metadata, .v44-counter, .v44-tracklist, .v44-listen-container');
      if (v44Blocks.length > 0) {
        v44Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v45Blocks = view.querySelectorAll('.v45-project-block, .v45-listening-area');
      if (v45Blocks.length > 0) {
        v45Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v46Blocks = view.querySelectorAll('.v46-main-composition, .v46-listening-area');
      if (v46Blocks.length > 0) {
        v46Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v47Blocks = view.querySelectorAll('.v47-main-composition, .v47-listening-area');
      if (v47Blocks.length > 0) {
        v47Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v48Blocks = view.querySelectorAll('.v48-main-composition, .v48-listening-area');
      if (v48Blocks.length > 0) {
        v48Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v49Blocks = view.querySelectorAll('.v49-main-composition, .v49-listening-area');
      if (v49Blocks.length > 0) {
        v49Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v50Blocks = view.querySelectorAll('.v50-main-composition, .v50-listening-area');
      if (v50Blocks.length > 0) {
        v50Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v51Blocks = view.querySelectorAll('.v51-main-composition, .v51-listening-area');
      if (v51Blocks.length > 0) {
        v51Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v52Blocks = view.querySelectorAll('.v52-main-composition, .v52-listening-area');
      if (v52Blocks.length > 0) {
        v52Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v53Blocks = view.querySelectorAll('.v53-main-composition, .v53-listening-area');
      if (v53Blocks.length > 0) {
        v53Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v54Blocks = view.querySelectorAll('.v54-main-composition, .v54-listening-area');
      if (v54Blocks.length > 0) {
        v54Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v55Blocks = view.querySelectorAll('.v55-main-composition, .v55-listening-area');
      if (v55Blocks.length > 0) {
        v55Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v56Blocks = view.querySelectorAll('.v56-main-composition, .v56-listening-area');
      if (v56Blocks.length > 0) {
        v56Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v57Blocks = view.querySelectorAll('.v57-main-composition, .v57-listening-area');
      if (v57Blocks.length > 0) {
        v57Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v58Blocks = view.querySelectorAll('.v58-main-composition, .v58-listening-area');
      if (v58Blocks.length > 0) {
        v58Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v59Blocks = view.querySelectorAll('.v59-main-composition, .v59-listening-area');
      if (v59Blocks.length > 0) {
        v59Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v60Blocks = view.querySelectorAll('.v60-main-composition, .v60-listening-area');
      if (v60Blocks.length > 0) {
        v60Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v61Blocks = view.querySelectorAll('.v61-main-composition, .v61-listening-area');
      if (v61Blocks.length > 0) {
        v61Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v62Blocks = view.querySelectorAll('.v62-main-composition, .v62-listening-area');
      if (v62Blocks.length > 0) {
        v62Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v63Blocks = view.querySelectorAll('.v63-main-composition, .v63-listening-area');
      if (v63Blocks.length > 0) {
        v63Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v64Blocks = view.querySelectorAll('.v64-main-composition, .v64-listening-area');
      if (v64Blocks.length > 0) {
        v64Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v65Blocks = view.querySelectorAll('.v65-main-composition, .v65-listening-area');
      if (v65Blocks.length > 0) {
        v65Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v66Blocks = view.querySelectorAll('.v66-main-composition, .v66-listening-area');
      if (v66Blocks.length > 0) {
        v66Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v67Blocks = view.querySelectorAll('.v67-main-composition, .v67-listening-area');
      if (v67Blocks.length > 0) {
        v67Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v68Blocks = view.querySelectorAll('.v68-main-composition, .v68-listening-area');
      if (v68Blocks.length > 0) {
        v68Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v69Blocks = view.querySelectorAll('.v69-main-composition, .v69-listening-area');
      if (v69Blocks.length > 0) {
        v69Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v70Blocks = view.querySelectorAll('.v70-main-composition, .v70-listening-area');
      if (v70Blocks.length > 0) {
        v70Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v71Blocks = view.querySelectorAll('.v71-main-composition, .v71-listening-area');
      if (v71Blocks.length > 0) {
        v71Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v73Blocks = view.querySelectorAll('.v73-main-composition, .v73-listening-area');
      if (v73Blocks.length > 0) {
        v73Blocks.forEach(block => {
          block.style.transition = 'opacity 150ms ease, transform 150ms ease';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      const v75Blocks = view.querySelectorAll('.v75-main-composition, .v75-listening-area');
      if (v75Blocks.length > 0) {
        v75Blocks.forEach(block => {
          block.style.transition = 'opacity 480ms cubic-bezier(0.4, 0, 0.2, 1), transform 480ms cubic-bezier(0.4, 0, 0.2, 1)';
          block.style.opacity = '0';
          block.style.transform = 'translateY(-4px)';
        });
      }
      if (currentVersion >= 85) {
        // V85 Debug Step 2B: Hide outgoing ghost and hide old project immediately to isolate incoming project
        document.querySelectorAll('.v85-swipe-outgoing-ghost, .v84-swipe-outgoing-ghost, .v83-swipe-outgoing-ghost').forEach(el => el.remove());
        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          oldComp.style.opacity = '0';
        }
      } else if (currentVersion >= 84) {
        // 1. Remove any stale ghosts from interrupted transitions
        document.querySelectorAll('.v84-swipe-outgoing-ghost').forEach(el => el.remove());

        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          // 2. Measure rect BEFORE cloning or hiding oldComp
          const rect = oldComp.getBoundingClientRect();

          // 3. Clone & isolate root layout class
          const ghost = oldComp.cloneNode(true);
          ghost.classList.remove('v74-main-composition');
          ghost.classList.add('v84-swipe-outgoing-ghost');

          // 4. Clean up interactive elements & duplicate IDs inside ghost
          ghost.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          // 5. Position ghost explicitly using measured viewport coordinates
          ghost.style.position = 'fixed';
          ghost.style.left = `${rect.left}px`;
          ghost.style.top = `${rect.top}px`;
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.style.margin = '0';
          ghost.style.pointerEvents = 'none';
          ghost.style.boxSizing = 'border-box';
          ghost.style.transform = 'translate3d(0, 0, 0)';
          ghost.style.opacity = '1';
          ghost.style.zIndex = '19';
          ghost.style.willChange = 'transform, opacity';
          ghost.style.transition = 'none';

          const stage = document.getElementById('production') || view.parentElement || view;
          stage.appendChild(ghost);
          ghost.getBoundingClientRect(); // force layout reflow

          // 6. Hide original oldComp AFTER ghost is securely placed & reflowed
          oldComp.style.opacity = '0';

          // 7. Determine navigation direction
          const total = productionProjects.length;
          const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
          const exitY = isNext ? '-25vh' : '25vh';

          // 8. Double rAF ensures initial paint at opacity 1 / translate3d(0,0,0) before exit transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ghost.style.transition = 'transform 1000ms linear';
              ghost.style.opacity = '1';
              ghost.style.transform = `translate3d(0, ${exitY}, 0)`;
            });
          });

          // 9. Remove ghost when exit completes at 1000ms
          setTimeout(() => {
            if (ghost && ghost.parentNode) {
              ghost.parentNode.removeChild(ghost);
            }
          }, 1000);
        }
      } else if (currentVersion >= 83) {
        // 1. Remove any stale ghosts from interrupted transitions
        document.querySelectorAll('.v83-swipe-outgoing-ghost').forEach(el => el.remove());

        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          // 2. Measure rect BEFORE cloning or hiding oldComp
          const rect = oldComp.getBoundingClientRect();

          // 3. Clone & isolate root layout class
          const ghost = oldComp.cloneNode(true);
          ghost.classList.remove('v74-main-composition');
          ghost.classList.add('v83-swipe-outgoing-ghost');

          // 4. Clean up interactive elements & duplicate IDs inside ghost
          ghost.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          // 5. Position ghost explicitly using measured viewport coordinates
          ghost.style.position = 'fixed';
          ghost.style.left = `${rect.left}px`;
          ghost.style.top = `${rect.top}px`;
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.style.margin = '0';
          ghost.style.pointerEvents = 'none';
          ghost.style.boxSizing = 'border-box';
          ghost.style.transform = 'translate3d(0, 0, 0)';
          ghost.style.opacity = '1';
          ghost.style.zIndex = '19';
          ghost.style.willChange = 'transform, opacity';
          ghost.style.transition = 'none';

          const stage = document.getElementById('production') || view.parentElement || view;
          stage.appendChild(ghost);
          ghost.getBoundingClientRect(); // force layout reflow

          // 6. Hide original oldComp AFTER ghost is securely placed & reflowed
          oldComp.style.opacity = '0';

          // 7. Determine navigation direction
          const total = productionProjects.length;
          const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
          const exitY = isNext ? '-25vh' : '25vh';

          // 8. Double rAF ensures initial paint at opacity 1 / translate3d(0,0,0) before exit transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ghost.style.transition = 'transform 1000ms linear';
              ghost.style.opacity = '1';
              ghost.style.transform = `translate3d(0, ${exitY}, 0)`;
            });
          });

          // 9. Remove ghost when exit completes at 1000ms
          setTimeout(() => {
            if (ghost && ghost.parentNode) {
              ghost.parentNode.removeChild(ghost);
            }
          }, 1000);
        }
      } else if (currentVersion >= 82) {
        // 1. Remove any stale ghosts from interrupted transitions
        document.querySelectorAll('.v82-swipe-outgoing-ghost').forEach(el => el.remove());

        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          // 2. Measure rect BEFORE cloning or hiding oldComp
          const rect = oldComp.getBoundingClientRect();

          // 3. Clone & isolate root layout class
          const ghost = oldComp.cloneNode(true);
          ghost.classList.remove('v74-main-composition');
          ghost.classList.add('v82-swipe-outgoing-ghost');

          // 4. Clean up interactive elements & duplicate IDs inside ghost
          ghost.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          // 5. Position ghost explicitly using measured viewport coordinates
          ghost.style.position = 'fixed';
          ghost.style.left = `${rect.left}px`;
          ghost.style.top = `${rect.top}px`;
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.style.margin = '0';
          ghost.style.pointerEvents = 'none';
          ghost.style.boxSizing = 'border-box';
          ghost.style.transform = 'translate3d(0, 0, 0)';
          ghost.style.opacity = '1';
          ghost.style.zIndex = '19';
          ghost.style.willChange = 'transform, opacity';
          ghost.style.transition = 'none';

          const stage = document.getElementById('production') || view.parentElement || view;
          stage.appendChild(ghost);
          ghost.getBoundingClientRect(); // force layout reflow

          // 6. Hide original oldComp AFTER ghost is securely placed & reflowed
          oldComp.style.opacity = '0';

          // 7. Determine navigation direction (14vh travel)
          const total = productionProjects.length;
          const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
          const exitY = isNext ? '-14vh' : '14vh';

          // 8. Double rAF ensures initial paint at opacity 1 / translate3d(0,0,0) before exit transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ghost.style.transition = 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)';
              ghost.style.opacity = '0';
              ghost.style.transform = `translate3d(0, ${exitY}, 0)`;
            });
          });

          // 9. Remove ghost when exit completes at 600ms
          setTimeout(() => {
            if (ghost && ghost.parentNode) {
              ghost.parentNode.removeChild(ghost);
            }
          }, 600);
        }
      } else if (currentVersion >= 81) {
        // 1. Remove any stale ghosts from interrupted transitions
        document.querySelectorAll('.v81-swipe-outgoing-ghost').forEach(el => el.remove());

        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          // 2. Measure rect BEFORE cloning or hiding oldComp
          const rect = oldComp.getBoundingClientRect();

          // 3. Clone
          const ghost = oldComp.cloneNode(true);

          // 4. CRITICAL: Remove root layout class to prevent V74 CSS collision (!important rules)
          ghost.classList.remove('v74-main-composition');
          ghost.classList.add('v81-swipe-outgoing-ghost');

          // 5. Clean up interactive elements & duplicate IDs inside ghost
          ghost.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          // 6. Position ghost explicitly using measured viewport coordinates
          ghost.style.position = 'fixed';
          ghost.style.left = `${rect.left}px`;
          ghost.style.top = `${rect.top}px`;
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.style.margin = '0';
          ghost.style.pointerEvents = 'none';
          ghost.style.boxSizing = 'border-box';
          ghost.style.transform = 'translate3d(0, 0, 0)';
          ghost.style.opacity = '1';
          ghost.style.zIndex = '19';
          ghost.style.willChange = 'transform, opacity';
          ghost.style.transition = 'none';

          const stage = document.getElementById('production') || view.parentElement || view;
          stage.appendChild(ghost);
          ghost.getBoundingClientRect(); // force layout reflow

          // 7. Hide original oldComp AFTER ghost is securely placed & reflowed
          oldComp.style.opacity = '0';

          // 8. Determine navigation direction
          const total = productionProjects.length;
          const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
          const exitY = isNext ? '-12px' : '12px';

          // 9. Double rAF ensures initial paint at opacity 1 / translate3d(0,0,0) before exit transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ghost.style.transition = 'opacity 520ms cubic-bezier(0.4, 0, 0.2, 1), transform 520ms cubic-bezier(0.4, 0, 0.2, 1)';
              ghost.style.opacity = '0';
              ghost.style.transform = `translate3d(0, ${exitY}, 0)`;
            });
          });

          // 10. Remove ghost when exit completes at 520ms
          setTimeout(() => {
            if (ghost && ghost.parentNode) {
              ghost.parentNode.removeChild(ghost);
            }
          }, 520);
        }
      } else if (currentVersion >= 80) {
        // 1. Clean up any stale ghosts from interrupted transitions
        document.querySelectorAll('.v80-swipe-outgoing-ghost').forEach(el => el.remove());

        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          const rect = oldComp.getBoundingClientRect();
          const ghost = oldComp.cloneNode(true);
          ghost.classList.add('v80-swipe-outgoing-ghost');

          // Clean up interactive elements / duplicate IDs / iframe inside ghost
          ghost.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          // Position ghost using measured viewport coordinates
          ghost.style.position = 'fixed';
          ghost.style.left = `${rect.left}px`;
          ghost.style.top = `${rect.top}px`;
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.style.margin = '0';
          ghost.style.pointerEvents = 'none';
          ghost.style.transform = 'translateY(0)';
          ghost.style.opacity = '1';
          ghost.style.zIndex = '19';
          ghost.style.willChange = 'transform, opacity';
          ghost.style.transition = 'none';

          const stage = document.getElementById('production') || view.parentElement || view;
          stage.appendChild(ghost);
          ghost.offsetHeight; // reflow

          // Determine navigation direction
          const total = productionProjects.length;
          const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
          const exitY = isNext ? '-6px' : '6px';

          // Exit animation: 520ms cubic-bezier(0.4, 0, 0.2, 1)
          ghost.style.transition = 'opacity 520ms cubic-bezier(0.4, 0, 0.2, 1), transform 520ms cubic-bezier(0.4, 0, 0.2, 1)';
          ghost.style.opacity = '0';
          ghost.style.transform = `translateY(${exitY})`;

          oldComp.style.opacity = '0';

          setTimeout(() => {
            if (ghost && ghost.parentNode) {
              ghost.parentNode.removeChild(ghost);
            }
          }, 520);
        }
      } else if (currentVersion >= 79) {
        const oldComp = view.querySelector('.v74-main-composition');
        if (oldComp) {
          const clone = oldComp.cloneNode(true);
          clone.classList.add('v79-temp-outgoing-clone');
          clone.style.pointerEvents = 'none';
          clone.style.position = 'absolute';
          clone.style.left = '50vw';
          clone.style.transform = 'translateX(-50%) translateY(0)';
          clone.style.zIndex = '19';
          clone.style.opacity = '1';
          clone.style.transition = 'none';

          // Clean up interactive elements inside clone
          clone.querySelectorAll('iframe, button, a').forEach(el => {
            if (el.tagName === 'IFRAME') el.remove();
            else {
              el.style.pointerEvents = 'none';
              el.removeAttribute('id');
            }
          });
          clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

          const stage = view.parentElement || view;
          stage.appendChild(clone);
          clone.offsetHeight; // reflow

          // Outgoing exit animation: 620ms cubic-bezier(0.4, 0, 0.2, 1)
          clone.style.transition = 'opacity 620ms cubic-bezier(0.4, 0, 0.2, 1), transform 620ms cubic-bezier(0.4, 0, 0.2, 1)';
          clone.style.opacity = '0';
          clone.style.transform = 'translateX(-50%) translateY(-4px)';

          setTimeout(() => {
            if (clone && clone.parentNode) {
              clone.parentNode.removeChild(clone);
            }
          }, 630);

          oldComp.style.opacity = '0';
        }
      } else {
        const v74Blocks = view.querySelectorAll('.v74-main-composition, .v74-listening-area');
        if (v74Blocks.length > 0) {
          v74Blocks.forEach(block => {
            let outDur = '150ms ease';
            if (currentVersion >= 78) {
              outDur = '450ms cubic-bezier(0.4, 0, 0.2, 1)';
            } else if (currentVersion >= 77) {
              outDur = '460ms cubic-bezier(0.4, 0, 0.2, 1)';
            } else if (currentVersion === 76) {
              outDur = '480ms cubic-bezier(0.4, 0, 0.2, 1)';
            }
            block.style.transition = `opacity ${outDur}, transform ${outDur}`;
            block.style.opacity = '0';
            block.style.transform = 'translateY(-4px)';
          });
        }
      }

      const transitionDelay = (currentVersion >= 85) ? 220 : (currentVersion >= 84) ? 220 : (currentVersion >= 83) ? 220 : (currentVersion >= 82) ? 260 : (currentVersion >= 81) ? 220 : (currentVersion >= 80) ? 220 : (currentVersion >= 79) ? 340 : (currentVersion >= 75) ? 300 : 150;
      const transitionLockBuffer = (currentVersion >= 85) ? 1220 : (currentVersion >= 84) ? 1220 : (currentVersion >= 83) ? 1000 : (currentVersion >= 82) ? 720 : (currentVersion >= 81) ? 620 : (currentVersion >= 80) ? 620 : (currentVersion >= 79) ? 700 : (currentVersion >= 78) ? 620 : (currentVersion >= 77) ? 640 : (currentVersion >= 75) ? 600 : 200;

      setTimeout(() => {
        if (currentVersion >= 85) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            const total = productionProjects.length;
            const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
            const enterY = isNext ? '25vh' : '-25vh';

            newComp.classList.add('v85-incoming-debug');
            newComp.style.setProperty('--v85-incoming-y', enterY);
            newComp.style.transition = 'none';
            newComp.getBoundingClientRect(); // force reflow

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                newComp.style.transition = 'transform 1000ms linear';
                newComp.style.setProperty('--v85-incoming-y', '0vh');
              });
            });

            setTimeout(() => {
              if (newComp) {
                newComp.classList.remove('v85-incoming-debug');
                newComp.style.removeProperty('--v85-incoming-y');
                newComp.style.transition = '';
              }
            }, 1050);
          }
        } else if (currentVersion >= 84) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            const total = productionProjects.length;
            const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
            const enterY = isNext ? '25vh' : '-25vh';

            newComp.classList.add('v84-incoming-debug');
            newComp.style.setProperty('--v84-incoming-y', enterY);
            newComp.style.transition = 'none';
            newComp.getBoundingClientRect(); // force reflow

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                newComp.style.transition = 'transform 1000ms linear';
                newComp.style.setProperty('--v84-incoming-y', '0vh');
              });
            });

            setTimeout(() => {
              if (newComp) {
                newComp.classList.remove('v84-incoming-debug');
                newComp.style.removeProperty('--v84-incoming-y');
                newComp.style.transition = '';
              }
            }, 1050);
          }
        } else if (currentVersion >= 83) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
            newComp.offsetHeight; // reflow
            setTimeout(() => {
              if (newComp) {
                newComp.style.transition = '';
                newComp.style.opacity = '';
                newComp.style.transform = '';
              }
            }, 50);
          }
        } else if (currentVersion >= 82) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            const total = productionProjects.length;
            const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
            const enterY = isNext ? '11vh' : '-11vh';

            newComp.style.transition = 'none';
            newComp.style.opacity = '0.45';
            newComp.style.transform = `translateX(-50%) translateY(${enterY})`;
            newComp.offsetHeight; // reflow

            newComp.style.transition = 'opacity 720ms cubic-bezier(0.16, 1, 0.3, 1), transform 720ms cubic-bezier(0.16, 1, 0.3, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';

            // Clean inline styles after animation so CSS controls CLOSED state cleanly
            setTimeout(() => {
              if (newComp) {
                newComp.style.transition = '';
                newComp.style.opacity = '';
                newComp.style.transform = '';
              }
            }, 720);
          }
        } else if (currentVersion >= 81) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            const total = productionProjects.length;
            const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
            const enterY = isNext ? '12px' : '-12px';

            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = `translateX(-50%) translateY(${enterY})`;
            newComp.offsetHeight; // reflow

            newComp.style.transition = 'opacity 620ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';

            // Clean inline styles after animation so CSS controls CLOSED state cleanly
            setTimeout(() => {
              if (newComp) {
                newComp.style.transition = '';
                newComp.style.opacity = '';
                newComp.style.transform = '';
              }
            }, 620);
          }
        } else if (currentVersion >= 80) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            const total = productionProjects.length;
            const isNext = (nextIdx === (prevIdx + 1) % total) || (prevIdx === total - 1 && nextIdx === 0);
            const enterY = isNext ? '6px' : '-6px';

            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = `translateX(-50%) translateY(${enterY})`;
            newComp.offsetHeight; // reflow

            newComp.style.transition = 'opacity 620ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';

            // Clean inline styles after animation so CSS controls CLOSED state cleanly
            setTimeout(() => {
              if (newComp) {
                newComp.style.transition = '';
                newComp.style.opacity = '';
                newComp.style.transform = '';
              }
            }, 620);
          }
        } else if (currentVersion >= 79) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = 'translateX(-50%) translateY(8px)';
            newComp.offsetHeight; // reflow
            newComp.style.transition = 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
          }
        } else if (currentVersion >= 78) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = 'translateX(-50%) translateY(8px)';
            newComp.offsetHeight; // reflow
            newComp.style.transition = 'opacity 620ms cubic-bezier(0.14, 1, 0.25, 1), transform 620ms cubic-bezier(0.14, 1, 0.25, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
          }
        } else if (currentVersion >= 77) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = 'translateX(-50%) translateY(8px)';
            newComp.offsetHeight; // reflow
            newComp.style.transition = 'opacity 640ms cubic-bezier(0.16, 1, 0.3, 1), transform 640ms cubic-bezier(0.16, 1, 0.3, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
          }
        } else if (currentVersion === 76) {
          renderProductionProjectV74(nextIdx);
          const newComp = view.querySelector('.v74-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = 'translateX(-50%) translateY(8px)';
            newComp.offsetHeight; // reflow
            newComp.style.transition = 'opacity 620ms cubic-bezier(0.22, 1, 0.36, 1), transform 620ms cubic-bezier(0.22, 1, 0.36, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
          }
        } else if (currentVersion >= 75) {
          renderProductionProjectV75(nextIdx);
          const newComp = view.querySelector('.v75-main-composition');
          if (newComp) {
            newComp.style.transition = 'none';
            newComp.style.opacity = '0';
            newComp.style.transform = 'translateX(-50%) translateY(8px)';
            newComp.offsetHeight; // reflow
            newComp.style.transition = 'opacity 620ms cubic-bezier(0.22, 1, 0.36, 1), transform 620ms cubic-bezier(0.22, 1, 0.36, 1)';
            newComp.style.opacity = '1';
            newComp.style.transform = 'translateX(-50%) translateY(0)';
          }
        } else if (currentVersion >= 74) {
          renderProductionProjectV74(nextIdx);
        } else if (currentVersion >= 73) {
          renderProductionProjectV73(nextIdx);
        } else if (currentVersion >= 71) {
          renderProductionProjectV71(nextIdx);
        } else if (currentVersion >= 70) {
          renderProductionProjectV70(nextIdx);
        } else if (currentVersion >= 69) {
          renderProductionProjectV69(nextIdx);
        } else if (currentVersion >= 68) {
          renderProductionProjectV68(nextIdx);
        } else if (currentVersion >= 67) {
          renderProductionProjectV67(nextIdx);
        } else if (currentVersion >= 66) {
          renderProductionProjectV66(nextIdx);
        } else if (currentVersion >= 65) {
          renderProductionProjectV65(nextIdx);
        } else if (currentVersion >= 64) {
          renderProductionProjectV64(nextIdx);
        } else if (currentVersion >= 63) {
          renderProductionProjectV63(nextIdx);
        } else if (currentVersion >= 62) {
          renderProductionProjectV62(nextIdx);
        } else if (currentVersion >= 61) {
          renderProductionProjectV61(nextIdx);
        } else if (currentVersion >= 60) {
          renderProductionProjectV60(nextIdx);
        } else if (currentVersion >= 59) {
          renderProductionProjectV59(nextIdx);
        } else if (currentVersion >= 58) {
          renderProductionProjectV58(nextIdx);
        } else if (currentVersion >= 57) {
          renderProductionProjectV57(nextIdx);
        } else if (currentVersion >= 56) {
          renderProductionProjectV56(nextIdx);
        } else if (currentVersion >= 55) {
          renderProductionProjectV55(nextIdx);
        } else if (currentVersion >= 54) {
          renderProductionProjectV54(nextIdx);
        } else if (currentVersion >= 53) {
          renderProductionProjectV53(nextIdx);
        } else if (currentVersion >= 52) {
          renderProductionProjectV52(nextIdx);
        } else if (currentVersion >= 51) {
          renderProductionProjectV51(nextIdx);
        } else if (currentVersion >= 50) {
          renderProductionProjectV50(nextIdx);
        } else if (currentVersion >= 49) {
          renderProductionProjectV49(nextIdx);
        } else if (currentVersion >= 48) {
          renderProductionProjectV48(nextIdx);
        } else if (currentVersion >= 47) {
          renderProductionProjectV47(nextIdx);
        } else if (currentVersion >= 46) {
          renderProductionProjectV46(nextIdx);
        } else if (currentVersion >= 45) {
          renderProductionProjectV45(nextIdx);
        } else if (currentVersion >= 44) {
          renderProductionProjectV44(nextIdx);
        } else if (currentVersion >= 43) {
          renderProductionProjectV43(nextIdx);
        } else if (currentVersion >= 42) {
          renderProductionProjectV42(nextIdx);
        } else if (currentVersion >= 41) {
          renderProductionProjectV39(nextIdx);
        } else if (currentVersion >= 40) {
          renderProductionProjectV39(nextIdx);
        } else if (currentVersion >= 39) {
          renderProductionProjectV39(nextIdx);
        } else if (currentVersion >= 38) {
          renderProductionProjectV37(nextIdx);
        } else if (currentVersion >= 37) {
          renderProductionProjectV37(nextIdx);
        } else if (currentVersion >= 36) {
          renderProductionProjectV36(nextIdx);
        } else if (currentVersion >= 35) {
          renderProductionProjectV35(nextIdx);
        } else if (currentVersion >= 34) {
          renderProductionProjectV34(nextIdx);
        } else if (currentVersion >= 33) {
          renderProductionProjectV32(nextIdx);
        } else if (currentVersion >= 32) {
          renderProductionProjectV32(nextIdx);
        } else if (currentVersion >= 31) {
          renderProductionProjectV31(nextIdx);
        } else if (currentVersion >= 29) {
          renderProductionProjectV29(nextIdx);
        } else if (currentVersion >= 28) {
          renderProductionProjectV28(nextIdx);
        } else {
          renderProductionProjectV27(nextIdx);
        }
        // Release transition lock
        setTimeout(() => {
          isTransitioning = false;
        }, transitionLockBuffer);
      }, transitionDelay);
    } else {
      // V26: Fade out entire layout
      const layout = view.querySelector('.v23-editorial-layout');
      if (layout) {
        layout.style.transition = 'opacity 200ms ease';
        layout.style.opacity = '0';
      }

      setTimeout(() => {
        renderProductionProjectV26(nextIdx);

        const newLayout = view.querySelector('.v23-editorial-layout');
        if (newLayout) {
          newLayout.style.transition = 'none';
          newLayout.style.opacity = '0';
          newLayout.style.transform = 'translateY(8px)';
          newLayout.offsetHeight; // reflow

          newLayout.style.transition = 'opacity 250ms ease, transform 350ms cubic-bezier(0.22, 1, 0.36, 1)';
          newLayout.style.opacity = '1';
          newLayout.style.transform = 'translateY(0)';
        }

        setTimeout(() => {
          isTransitioning = false;
        }, 350);
      }, 200);
    }
  }

  function renderProductionProjectV26(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v23-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let contentHtml = '';
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          <div class="v23-project-header">
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV26('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v23-project-header">
            <span class="v23-ep-tag">EP</span>
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-ep-tracklist">
            ${tracksHtml}
          </div>
          ${playerHtml}
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    let indexHtml = '';
    const total = productionProjects.length;
    productionProjects.forEach((p, idx) => {
      const activeClass = (idx === index) ? 'is-active' : '';
      const numStr = String(idx + 1).padStart(2, '0');
      const numStyle = (idx === index) ? 'transform: translateY(0);' : 'transform: translateY(4px);';
      indexHtml += `
        <span class="v26-index-item ${activeClass}" style="${numStyle}" onclick="goToProductionProject(${idx})">${numStr}</span>
      `;
    });

    const progressPercent = total > 1 ? (index / (total - 1)) * 100 : 0;

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      
      <div class="v26-editorial-rail">
        <div class="v26-index-numbers">
          ${indexHtml}
        </div>
        <div class="v26-progress-track">
          <div class="v26-progress-dot" style="left: ${progressPercent}%;"></div>
        </div>
      </div>
    `;

    const rail = view.querySelector('.v26-editorial-rail');
    if (rail) {
      let isDragging = false;
      let startX = 0;
      let dragX = 0;
      const DRAG_THRESHOLD = 50;

      rail.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragX = 0;
        rail.setPointerCapture(e.pointerId);
      });

      rail.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragX = e.clientX - startX;
      });

      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        rail.releasePointerCapture(e.pointerId);

        if (dragX > DRAG_THRESHOLD) {
          nextProductionProject();
        } else if (dragX < -DRAG_THRESHOLD) {
          previousProductionProject();
        }
      };

      rail.addEventListener('pointerup', endDrag);
      rail.addEventListener('pointercancel', endDrag);
    }

    view.onwheel = (e) => {
      if (e.target.closest('.v23-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV25 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  let v25TransitionLocked = false;
  window.requestProductionTransitionV25 = function(direction) {
    if (v25TransitionLocked) return;
    v25TransitionLocked = true;

    const stackContainer = document.getElementById('productionStack');
    if (!stackContainer) {
      v25TransitionLocked = false;
      return;
    }

    const activeCard = stackContainer.querySelector('.v25-stack-card.is-active');
    
    if (direction === 'next') {
      if (activeCard) {
        activeCard.style.transform = 'translate3d(25px, -20px, 10px)';
        activeCard.style.opacity = '0';
      }
    } else {
      const prevIdx = (activeProdIndex - 1 + productionProjects.length) % productionProjects.length;
      const prevCard = stackContainer.querySelector(`.v25-stack-card[data-index="${prevIdx}"]`);
      if (prevCard) {
        prevCard.style.transition = 'none';
        prevCard.style.transform = 'translate3d(-20px, 15px, 20px)';
        prevCard.style.opacity = '0';
        prevCard.offsetHeight; // reflow
        prevCard.style.transition = 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease';
        prevCard.style.transform = 'translate3d(0, 0, 0)';
        prevCard.style.opacity = '1';
        prevCard.style.zIndex = '101';
      }
    }

    setTimeout(() => {
      const total = productionProjects.length;
      if (direction === 'next') {
        activeProdIndex = (activeProdIndex + 1) % total;
      } else {
        activeProdIndex = (activeProdIndex - 1 + total) % total;
      }
      renderProductionProjectV25(activeProdIndex);
      v25TransitionLocked = false;
    }, 400);
  };

  function renderProductionProjectV25(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );

    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    // Render all cover cards stacked (Section 5, 9, 10)
    let stackHtml = '';
    const total = productionProjects.length;
    productionProjects.forEach((p, idx) => {
      const diff = (idx - index + total) % total;
      
      let opacity = 0;
      if (diff === 0) opacity = 1;
      else if (diff === 1) opacity = 0.65;
      else if (diff === 2) opacity = 0.38;
      else if (diff === 3) opacity = 0.15;
      else opacity = 0;

      const offsetVal = 10;
      const tx = diff * offsetVal;
      const ty = diff * -offsetVal;
      const tz = diff * -10;

      const zIndex = 100 - diff;
      const activeClass = (diff === 0) ? 'is-active' : '';

      const fallbackUrl = p.cover || 'assets/fallback-cover.jpg';
      const resolvedSrc = (useSpotifyCover && spotifyCoverCache[p.spotify]) || fallbackUrl;

      stackHtml += `
        <div class="v25-stack-card ${activeClass}" data-index="${idx}" style="
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: ${opacity};
          z-index: ${zIndex};
          transform: translate3d(${tx}px, ${ty}px, ${tz}px);
          transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease;
        ">
          <img class="v23-cover-img" src="${resolvedSrc}" alt="${p.title}" data-proj-title="${p.title}">
        </div>
      `;
    });

    let contentHtml = '';
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          <div class="v23-project-header">
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV25('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v23-project-header">
            <span class="v23-ep-tag">EP</span>
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist} &mdash; ${proj.year}</div>
          </div>
          <div class="v23-ep-tracklist">
            ${tracksHtml}
          </div>
          ${playerHtml}
          <div class="v23-role-block">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container" id="productionStack" style="position: relative; overflow: visible;">
          ${stackHtml}
          <div class="v25-stack-feedback" id="stackFeedback">SCROLL TO NAVIGATE</div>
        </div>
        ${contentHtml}
      </div>
      <div class="v23-editorial-nav">
        <button class="v23-nav-editorial-btn prev-btn" onclick="window.requestProductionTransitionV25('prev')">← PREVIOUS</button>
        <button class="v23-nav-editorial-btn next-btn" onclick="window.requestProductionTransitionV25('next')">NEXT →</button>
      </div>
    `;

    // Rebind V25 stack-only interactive listeners
    const productionStack = document.getElementById('productionStack');
    if (productionStack) {
      let productionTransitionLocked = false;
      const WHEEL_THRESHOLD = 30;

      productionStack.addEventListener('wheel', (event) => {
        const delta = event.deltaY;
        if (Math.abs(delta) < WHEEL_THRESHOLD) {
          return;
        }
        if (productionTransitionLocked) {
          event.preventDefault();
          return;
        }
        event.preventDefault();
        productionTransitionLocked = true;

        const fb = document.getElementById('stackFeedback');
        if (fb) fb.classList.remove('visible');

        if (delta > 0) {
          window.requestProductionTransitionV25('next');
        } else {
          window.requestProductionTransitionV25('prev');
        }

        setTimeout(() => {
          productionTransitionLocked = false;
        }, 550);
      }, { passive: false });

      let touchStartY = 0;
      productionStack.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      productionStack.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diffY = touchStartY - touchEndY;
        if (productionTransitionLocked) return;

        if (Math.abs(diffY) > 50) {
          productionTransitionLocked = true;
          const fb = document.getElementById('stackFeedback');
          if (fb) fb.classList.remove('visible');

          if (diffY > 0) {
            window.requestProductionTransitionV25('next');
          } else {
            window.requestProductionTransitionV25('prev');
          }

          setTimeout(() => {
            productionTransitionLocked = false;
          }, 550);
        }
      });

      productionStack.addEventListener('mouseenter', () => {
        const fb = document.getElementById('stackFeedback');
        if (fb) fb.classList.add('visible');
      });
      productionStack.addEventListener('mouseleave', () => {
        const fb = document.getElementById('stackFeedback');
        if (fb) fb.classList.remove('visible');
      });
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV27 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV27(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v23-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let contentHtml = '';
    
    // Animation-delay staggered entries for V27 (Section 1)
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          <div class="v23-project-header v27-fade-item" style="animation-delay: 0ms; opacity: 0;">
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist}</div>
          </div>
          <div class="v23-role-block v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          <div class="v23-year-block v27-fade-item" style="animation-delay: 160ms; opacity: 0;">
            <span class="v23-year-value">${proj.year}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV27('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v23-project-header v27-fade-item" style="animation-delay: 0ms; opacity: 0;">
            <span class="v23-ep-tag">EP</span>
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist}</div>
          </div>
          <div class="v23-ep-tracklist v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            ${tracksHtml}
          </div>
          <div class="v23-role-block v27-fade-item" style="animation-delay: 160ms; opacity: 0;">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          <div class="v23-year-block v27-fade-item" style="animation-delay: 200ms; opacity: 0;">
            <span class="v23-year-value">${proj.year}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    }

    // Index rail (Section 2, 7)
    let indexHtml = '';
    const total = productionProjects.length;
    productionProjects.forEach((p, idx) => {
      const activeClass = (idx === index) ? 'is-active' : '';
      const numStr = String(idx + 1).padStart(2, '0');
      const numStyle = (idx === index) ? 'transform: translateY(0);' : 'transform: translateY(4px);';
      indexHtml += `
        <span class="v26-index-item ${activeClass}" style="${numStyle} width: 24px; text-align: center; display: inline-block;" onclick="goToProductionProject(${idx})">${numStr}</span>
      `;
    });

    const progressPercent = total > 1 ? (index / (total - 1)) * 100 : 0;

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      
      <div class="v26-editorial-rail" style="position: relative; width: fit-content; margin: 3.5rem auto 0 auto;">
        <div class="v26-index-numbers">
          ${indexHtml}
        </div>
        <div class="v26-progress-track" style="position: absolute; bottom: 0; left: 12px; right: 12px; height: 1px;">
          <div class="v26-progress-dot" style="left: ${progressPercent}%;"></div>
        </div>
      </div>
    `;

    // Rebind V26 drag & wheel navigation
    const rail = view.querySelector('.v26-editorial-rail');
    if (rail) {
      let isDragging = false;
      let startX = 0;
      let dragX = 0;
      const DRAG_THRESHOLD = 50;

      rail.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragX = 0;
        rail.setPointerCapture(e.pointerId);
      });

      rail.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragX = e.clientX - startX;
      });

      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        rail.releasePointerCapture(e.pointerId);

        if (dragX > DRAG_THRESHOLD) {
          nextProductionProject();
        } else if (dragX < -DRAG_THRESHOLD) {
          previousProductionProject();
        }
      };

      rail.addEventListener('pointerup', endDrag);
      rail.addEventListener('pointercancel', endDrag);
    }

    view.onwheel = (e) => {
      if (e.target.closest('.v23-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV28 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV28(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v23-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let contentHtml = '';
    
    // Staggered fade animation delay styling (Section 1)
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player v27-fade-item" style="animation-delay: 0ms; opacity: 0; margin-bottom: 0.8rem;">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          ${playerHtml}
          <div class="v23-project-header v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist}</div>
          </div>
          <div class="v23-role-block v27-fade-item" style="animation-delay: 160ms; opacity: 0;">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          <div class="v23-year-block v27-fade-item" style="animation-delay: 200ms; opacity: 0;">
            <span class="v23-year-value">${proj.year}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV28('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v23-project-header v27-fade-item" style="animation-delay: 0ms; opacity: 0;">
            <span class="v23-ep-tag">EP</span>
            <h3 class="v23-project-title">${proj.title}</h3>
            <div class="v23-project-artist-year">${proj.artist}</div>
          </div>
          <div class="v23-ep-tracklist v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            ${tracksHtml}
          </div>
          <div class="v23-role-block v27-fade-item" style="animation-delay: 160ms; opacity: 0;">
            <span class="v23-role-label">RAYAN MADE IT</span>
            <span class="v23-role-value">${proj.role}</span>
          </div>
          <div class="v23-year-block v27-fade-item" style="animation-delay: 200ms; opacity: 0;">
            <span class="v23-year-value">${proj.year}</span>
          </div>
          ${proj.mixing || proj.mastering ? `
            <div class="v23-credits-block v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
              ${proj.mixing ? `<div>MIX &mdash; <strong>${proj.mixing}</strong></div>` : ''}
              ${proj.mastering ? `<div>MASTER &mdash; <strong>${proj.mastering}</strong></div>` : ''}
            </div>
          ` : ''}
          ${playerHtml}
        </div>
      `;
    }

    // Index rail (Section 5)
    let indexHtml = '';
    const total = productionProjects.length;
    productionProjects.forEach((p, idx) => {
      const activeClass = (idx === index) ? 'is-active' : '';
      const numStr = String(idx + 1); // 1-based (Section 5)
      const numStyle = (idx === index) ? 'transform: translateY(0);' : 'transform: translateY(4px);';
      indexHtml += `
        <span class="project-index-item ${activeClass}" data-index="${idx}" style="${numStyle} width: 24px; text-align: center; display: inline-block;" onclick="goToProductionProject(${idx})">${numStr}</span>
      `;
    });

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      
      <div class="v26-editorial-rail" style="position: relative; width: fit-content; margin: 3.5rem auto 0 auto;">
        <div class="v26-index-numbers">
          ${indexHtml}
        </div>
        <div class="v26-progress-track" style="position: relative; height: 1px; width: 100%; margin-top: 0.4rem;">
          <div class="project-index-indicator" style="position: absolute; top: -3px; width: 7px; height: 7px; border-radius: 50%; background: #171717; transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);"></div>
        </div>
      </div>
    `;

    // Mathematical Dot Alignment (Section 6)
    const activeItem = view.querySelector(`.project-index-item[data-index="${index}"]`);
    const indicator = view.querySelector('.project-index-indicator');
    if (activeItem && indicator) {
      setTimeout(() => {
        const itemRect = activeItem.getBoundingClientRect();
        const parentRect = activeItem.parentElement.getBoundingClientRect();
        const center = itemRect.left + (itemRect.width / 2) - parentRect.left - 3.5;
        indicator.style.transform = `translateX(${center}px)`;
      }, 0);
    }

    // Rebind V26 drag & wheel navigation
    const rail = view.querySelector('.v26-editorial-rail');
    if (rail) {
      let isDragging = false;
      let startX = 0;
      let dragX = 0;
      const DRAG_THRESHOLD = 50;

      rail.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragX = 0;
        rail.setPointerCapture(e.pointerId);
      });

      rail.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragX = e.clientX - startX;
      });

      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        rail.releasePointerCapture(e.pointerId);

        if (dragX > DRAG_THRESHOLD) {
          nextProductionProject();
        } else if (dragX < -DRAG_THRESHOLD) {
          previousProductionProject();
        }
      };

      rail.addEventListener('pointerup', endDrag);
      rail.addEventListener('pointercancel', endDrag);
    }

    view.onwheel = (e) => {
      if (e.target.closest('.v23-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV29 = function(trackUrl, element) {
    const iframe = element.closest('.v23-editorial-layout').querySelector('.v23-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v23-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  let productionListeningStateV67 = 'closed';
  let openListeningV67Timer = null;
  let closeListeningV67Timer = null;

  window.playEPTrackV67 = function(trackUrl, element) {
    const stage = element.closest('.v67-production-stage');
    const iframe = stage.querySelector('.v67-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v67-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV67 = function() {
    if (productionListeningStateV67 !== 'closed') return;

    const stage = document.querySelector('.v67-production-stage');
    if (!stage) return;

    productionListeningStateV67 = 'opening';

    if (openListeningV67Timer) clearTimeout(openListeningV67Timer);
    if (closeListeningV67Timer) clearTimeout(closeListeningV67Timer);

    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    openListeningV67Timer = setTimeout(() => {
      if (productionListeningStateV67 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    setTimeout(() => {
      if (productionListeningStateV67 === 'opening') {
        productionListeningStateV67 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV67 = function() {
    if (productionListeningStateV67 !== 'open') return;

    const stage = document.querySelector('.v67-production-stage');
    if (!stage) return;

    productionListeningStateV67 = 'closing';

    if (openListeningV67Timer) clearTimeout(openListeningV67Timer);
    if (closeListeningV67Timer) clearTimeout(closeListeningV67Timer);

    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v67-main-composition');
    const listeningAreaEl = stage.querySelector('.v67-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV67 !== 'closing') return;

      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            const iframe = stage.querySelector('.v67-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV67 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v67ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    closeListeningV67Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV67(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    console.log("Production project V67:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v67-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v67-ep-track-row ${activeClass}" onclick="window.playEPTrackV67('${trackEmbedUrl}', this)">
            <span class="v67-ep-track-number">${trackNum}</span>
            <span class="v67-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      tracksHtml = `
        <div class="v67-ep-track-row is-active">
          <span class="v67-ep-track-number">01</span>
          <span class="v67-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    productionListeningStateV67 = 'closed';

    view.innerHTML = `
      <div class="v67-production-stage state-closed">
        <div class="v67-main-composition">
          <div class="v67-header-block">
            <div class="v67-title">
              <h3 class="v67-project-title">${proj.title}</h3>
            </div>
            <div class="v67-artist">
              <div class="v67-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <div class="v67-cover" onclick="window.openListeningV67()">
            ${mediaHtml}
            <div class="v67-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <div class="v67-listening-area">
          <div class="v67-tracklist">
            <div class="v67-ep-tracklist">${tracksHtml}</div>
          </div>

          <div class="v67-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <div class="v67-close-container">
            <button class="v67-close-btn" onclick="window.closeListeningV67()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    const stageEl = view.querySelector('.v67-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v67-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V68: CONTINUOUS PLAYER FADE DURING CLOSE MOVEMENT
     ========================================================================== */

  let productionListeningStateV68 = 'closed';
  let openListeningV68Timer = null;
  let closeListeningV68Timer = null;

  window.playEPTrackV68 = function(trackUrl, element) {
    const stage = element.closest('.v68-production-stage');
    const iframe = stage.querySelector('.v68-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v68-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV68 = function() {
    if (productionListeningStateV68 !== 'closed') return;

    const stage = document.querySelector('.v68-production-stage');
    if (!stage) return;

    productionListeningStateV68 = 'opening';

    if (openListeningV68Timer) clearTimeout(openListeningV68Timer);
    if (closeListeningV68Timer) clearTimeout(closeListeningV68Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV68Timer = setTimeout(() => {
      if (productionListeningStateV68 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV68 === 'opening') {
        productionListeningStateV68 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV68 = function() {
    if (productionListeningStateV68 !== 'open') return;

    const stage = document.querySelector('.v68-production-stage');
    if (!stage) return;

    productionListeningStateV68 = 'closing';

    if (openListeningV68Timer) clearTimeout(openListeningV68Timer);
    if (closeListeningV68Timer) clearTimeout(closeListeningV68Timer);

    // Add state-closing class to kick off 1200ms transform transition & v68ListeningFade animation
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v68-main-composition');
    const listeningAreaEl = stage.querySelector('.v68-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV68 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible (opacity: 0) with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v68-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV68 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v68ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV68Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV68(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V68:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v68-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v68-ep-track-row ${activeClass}" onclick="window.playEPTrackV68('${trackEmbedUrl}', this)">
            <span class="v68-ep-track-number">${trackNum}</span>
            <span class="v68-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v68-ep-track-row is-active">
          <span class="v68-ep-track-number">01</span>
          <span class="v68-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV68 = 'closed';

    view.innerHTML = `
      <div class="v68-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v68-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v68-header-block">
            <div class="v68-title">
              <h3 class="v68-project-title">${proj.title}</h3>
            </div>
            <div class="v68-artist">
              <div class="v68-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v68-cover" onclick="window.openListeningV68()">
            ${mediaHtml}
            <div class="v68-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v68-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v68-tracklist">
            <div class="v68-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v68-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v68-close-container">
            <button class="v68-close-btn" onclick="window.closeListeningV68()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v68-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v68-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V69: CONTINUOUS OPACITY CONVERGENCE DURING CLOSE
     ========================================================================== */

  let productionListeningStateV69 = 'closed';
  let openListeningV69Timer = null;
  let closeListeningV69Timer = null;

  window.playEPTrackV69 = function(trackUrl, element) {
    const stage = element.closest('.v69-production-stage');
    const iframe = stage.querySelector('.v69-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v69-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV69 = function() {
    if (productionListeningStateV69 !== 'closed') return;

    const stage = document.querySelector('.v69-production-stage');
    if (!stage) return;

    productionListeningStateV69 = 'opening';

    if (openListeningV69Timer) clearTimeout(openListeningV69Timer);
    if (closeListeningV69Timer) clearTimeout(closeListeningV69Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV69Timer = setTimeout(() => {
      if (productionListeningStateV69 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV69 === 'opening') {
        productionListeningStateV69 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV69 = function() {
    if (productionListeningStateV69 !== 'open') return;

    const stage = document.querySelector('.v69-production-stage');
    if (!stage) return;

    productionListeningStateV69 = 'closing';

    if (openListeningV69Timer) clearTimeout(openListeningV69Timer);
    if (closeListeningV69Timer) clearTimeout(closeListeningV69Timer);

    // Add state-closing class to kick off 1200ms transform transition & v69ListeningFade animation in the EXACT SAME FRAME
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v69-main-composition');
    const listeningAreaEl = stage.querySelector('.v69-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV69 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible (opacity: 0) with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v69-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV69 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v69ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV68Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV69(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V69:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v69-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v69-ep-track-row ${activeClass}" onclick="window.playEPTrackV69('${trackEmbedUrl}', this)">
            <span class="v69-ep-track-number">${trackNum}</span>
            <span class="v69-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v69-ep-track-row is-active">
          <span class="v69-ep-track-number">01</span>
          <span class="v69-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV69 = 'closed';

    view.innerHTML = `
      <div class="v69-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v69-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v69-header-block">
            <div class="v69-title">
              <h3 class="v69-project-title">${proj.title}</h3>
            </div>
            <div class="v69-artist">
              <div class="v69-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v69-cover" onclick="window.openListeningV69()">
            ${mediaHtml}
            <div class="v69-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v69-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v69-tracklist">
            <div class="v69-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v69-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v69-close-container">
            <button class="v69-close-btn" onclick="window.closeListeningV69()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v69-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v69-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V70: WEBANIMATIONS API FOR RIGHT LISTENING PANEL CLOSE
     ========================================================================== */

  let productionListeningStateV70 = 'closed';
  let openListeningV70Timer = null;
  let closeListeningV70Timer = null;

  window.playEPTrackV70 = function(trackUrl, element) {
    const stage = element.closest('.v70-production-stage');
    const iframe = stage.querySelector('.v70-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v70-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV70 = function() {
    if (productionListeningStateV70 !== 'closed') return;

    const stage = document.querySelector('.v70-production-stage');
    if (!stage) return;

    productionListeningStateV70 = 'opening';

    if (openListeningV70Timer) clearTimeout(openListeningV70Timer);
    if (closeListeningV70Timer) clearTimeout(closeListeningV70Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV70Timer = setTimeout(() => {
      if (productionListeningStateV70 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV70 === 'opening') {
        productionListeningStateV70 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV70 = function() {
    if (productionListeningStateV70 !== 'open') return;

    const stage = document.querySelector('.v70-production-stage');
    if (!stage) return;

    productionListeningStateV70 = 'closing';

    if (openListeningV70Timer) clearTimeout(openListeningV70Timer);
    if (closeListeningV70Timer) clearTimeout(closeListeningV70Timer);

    const mainCompEl = stage.querySelector('.v70-main-composition');
    const listeningAreaEl = stage.querySelector('.v70-listening-area');

    if (!listeningAreaEl) return;

    // FIRST: set productionListeningStateV70 = 'closing' (already done above)
    // THEN in the same JavaScript execution/frame:
    // - trigger LEFT group return toward center
    // - start rightCloseAnimation
    stage.classList.add('state-closing');

    // Start Web Animation directly on listeningAreaEl as ONE unified browser animation
    const rightCloseAnimation = listeningAreaEl.animate(
      [
        {
          offset: 0,
          transform: 'translateX(0)',
          opacity: 1
        },
        {
          offset: 0.20,
          transform: 'translateX(-1vw)',
          opacity: 0.96
        },
        {
          offset: 0.40,
          transform: 'translateX(-2.2vw)',
          opacity: 0.84
        },
        {
          offset: 0.60,
          transform: 'translateX(-3.5vw)',
          opacity: 0.62
        },
        {
          offset: 0.78,
          transform: 'translateX(-4.7vw)',
          opacity: 0.36
        },
        {
          offset: 0.90,
          transform: 'translateX(-5.4vw)',
          opacity: 0.16
        },
        {
          offset: 1,
          transform: 'translateX(-6vw)',
          opacity: 0
        }
      ],
      {
        duration: 1200,
        easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
        fill: 'forwards'
      }
    );

    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV70 !== 'closing') return;

      // STEP 1: Freeze panel invisibly at -6vw position
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Cancel the Web Animation ONLY AFTER CSS has established opacity: 0 and hidden base transform
            if (rightCloseAnimation) {
              rightCloseAnimation.cancel();
            }

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v70-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV70 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (rightCloseAnimation && rightCloseAnimation.finished) {
      rightCloseAnimation.finished.then(() => {
        rightCloseFinished = true;
        tryFinalizeClosed();
      }).catch(() => {
        rightCloseFinished = true;
        tryFinalizeClosed();
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV70Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV70(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V70:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v70-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v70-ep-track-row ${activeClass}" onclick="window.playEPTrackV70('${trackEmbedUrl}', this)">
            <span class="v70-ep-track-number">${trackNum}</span>
            <span class="v70-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v70-ep-track-row is-active">
          <span class="v70-ep-track-number">01</span>
          <span class="v70-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV70 = 'closed';

    view.innerHTML = `
      <div class="v70-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v70-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v70-header-block">
            <div class="v70-title">
              <h3 class="v70-project-title">${proj.title}</h3>
            </div>
            <div class="v70-artist">
              <div class="v70-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v70-cover" onclick="window.openListeningV70()">
            ${mediaHtml}
            <div class="v70-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v70-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v70-tracklist">
            <div class="v70-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v70-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v70-close-container">
            <button class="v70-close-btn" onclick="window.closeListeningV70()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v70-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v70-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V71: RESTORE STABLE CSS CLOSE TRANSITION + OPACITY FADE
     ========================================================================== */

  let productionListeningStateV71 = 'closed';
  let openListeningV71Timer = null;
  let closeListeningV71Timer = null;

  window.playEPTrackV71 = function(trackUrl, element) {
    const stage = element.closest('.v71-production-stage');
    const iframe = stage.querySelector('.v71-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v71-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV71 = function() {
    if (productionListeningStateV71 !== 'closed') return;

    const stage = document.querySelector('.v71-production-stage');
    if (!stage) return;

    productionListeningStateV71 = 'opening';

    if (openListeningV71Timer) clearTimeout(openListeningV71Timer);
    if (closeListeningV71Timer) clearTimeout(closeListeningV71Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV71Timer = setTimeout(() => {
      if (productionListeningStateV71 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV71 === 'opening') {
        productionListeningStateV71 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV71 = function() {
    if (productionListeningStateV71 !== 'open') return;

    const stage = document.querySelector('.v71-production-stage');
    if (!stage) return;

    productionListeningStateV71 = 'closing';

    if (openListeningV71Timer) clearTimeout(openListeningV71Timer);
    if (closeListeningV71Timer) clearTimeout(closeListeningV71Timer);

    // Add state-closing class to kick off 1200ms transform transition & 1200ms v71ListeningFade animation in the EXACT SAME FRAME
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v71-main-composition');
    const listeningAreaEl = stage.querySelector('.v71-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV71 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible (opacity: 0) with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v71-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV71 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v71ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV71Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV71(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG
    console.log("Production project V71:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v71-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v71-ep-track-row ${activeClass}" onclick="window.playEPTrackV71('${trackEmbedUrl}', this)">
            <span class="v71-ep-track-number">${trackNum}</span>
            <span class="v71-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v71-ep-track-row is-active">
          <span class="v71-ep-track-number">01</span>
          <span class="v71-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV71 = 'closed';

    view.innerHTML = `
      <div class="v71-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v71-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v71-header-block">
            <div class="v71-title">
              <h3 class="v71-project-title">${proj.title}</h3>
            </div>
            <div class="v71-artist">
              <div class="v71-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v71-cover" onclick="window.openListeningV71()">
            ${mediaHtml}
            <div class="v71-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v71-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v71-tracklist">
            <div class="v71-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v71-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v71-close-container">
            <button class="v71-close-btn" onclick="window.closeListeningV71()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v71-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v71-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V73: FINAL CLOSE ABSORPTION EFFECT (CLIP-PATH OCCLUSION + OPACITY FADE)
     ========================================================================== */

  let productionListeningStateV73 = 'closed';
  let openListeningV73Timer = null;
  let closeListeningV73Timer = null;

  window.playEPTrackV73 = function(trackUrl, element) {
    const stage = element.closest('.v73-production-stage');
    const iframe = stage.querySelector('.v73-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v73-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV73 = function() {
    if (productionListeningStateV73 !== 'closed') return;

    const stage = document.querySelector('.v73-production-stage');
    if (!stage) return;

    productionListeningStateV73 = 'opening';

    if (openListeningV73Timer) clearTimeout(openListeningV73Timer);
    if (closeListeningV73Timer) clearTimeout(closeListeningV73Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV73Timer = setTimeout(() => {
      if (productionListeningStateV73 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV73 === 'opening') {
        productionListeningStateV73 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV73 = function() {
    if (productionListeningStateV73 !== 'open') return;

    const stage = document.querySelector('.v73-production-stage');
    if (!stage) return;

    productionListeningStateV73 = 'closing';

    if (openListeningV73Timer) clearTimeout(openListeningV73Timer);
    if (closeListeningV73Timer) clearTimeout(closeListeningV73Timer);

    // Add state-closing class to kick off 1200ms transform transition & 1200ms v73ListeningFade absorption animation in the EXACT SAME FRAME
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v73-main-composition');
    const listeningAreaEl = stage.querySelector('.v73-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV73 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible (opacity: 0) with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v73-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV73 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v73ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV73Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV73(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG
    console.log("Production project V73:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v73-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v73-ep-track-row ${activeClass}" onclick="window.playEPTrackV73('${trackEmbedUrl}', this)">
            <span class="v73-ep-track-number">${trackNum}</span>
            <span class="v73-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v73-ep-track-row is-active">
          <span class="v73-ep-track-number">01</span>
          <span class="v73-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV73 = 'closed';

    view.innerHTML = `
      <div class="v73-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v73-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v73-header-block">
            <div class="v73-title">
              <h3 class="v73-project-title">${proj.title}</h3>
            </div>
            <div class="v73-artist">
              <div class="v73-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v73-cover" onclick="window.openListeningV73()">
            ${mediaHtml}
            <div class="v73-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v73-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v73-tracklist">
            <div class="v73-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v73-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v73-close-container">
            <button class="v73-close-btn" onclick="window.closeListeningV73()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v73-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v73-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V75: REFINED SWIPE / PROJECT TRANSITION TIMING (480ms OUT / 620ms IN)
     ========================================================================== */

  let productionListeningStateV75 = 'closed';
  let openListeningV75Timer = null;
  let closeListeningV75Timer = null;

  window.playEPTrackV75 = function(trackUrl, element) {
    const stage = element.closest('.v75-production-stage');
    const iframe = stage.querySelector('.v75-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v75-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV75 = function() {
    if (productionListeningStateV75 !== 'closed') return;

    const stage = document.querySelector('.v75-production-stage');
    if (!stage) return;

    productionListeningStateV75 = 'opening';

    if (openListeningV75Timer) clearTimeout(openListeningV75Timer);
    if (closeListeningV75Timer) clearTimeout(closeListeningV75Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV75Timer = setTimeout(() => {
      if (productionListeningStateV75 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV75 === 'opening') {
        productionListeningStateV75 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV75 = function() {
    if (productionListeningStateV75 !== 'open') return;

    const stage = document.querySelector('.v75-production-stage');
    if (!stage) return;

    productionListeningStateV75 = 'closing';

    if (openListeningV75Timer) clearTimeout(openListeningV75Timer);
    if (closeListeningV75Timer) clearTimeout(closeListeningV75Timer);

    // STEP 1: Add state-closing class at 0ms.
    // CSS applies 1200ms cubic-bezier(0.45, 0, 0.55, 1) transition for both transform and opacity.
    stage.classList.remove('state-open', 'state-opening');
    stage.classList.add('state-closing');

    let rightCloseFinished = false;
    let leftCloseFinished = false;

    const tryFinalizeClosed = () => {
      if (!rightCloseFinished || !leftCloseFinished) return;
      if (productionListeningStateV75 !== 'closing') return;

      // STEP 2: Pure CSS transition finished at 1200ms.
      stage.classList.remove('state-closing', 'is-listening', 'is-project-moved', 'is-panel-shown');
      stage.classList.add('state-resetting');

      // Force synchronous browser layout reflow
      void stage.offsetHeight;

      // STEP 3: Jump instantly to +12px origin position while remaining invisible
      stage.classList.remove('state-resetting');
      stage.classList.add('state-resetting-to-origin');

      // Force another reflow
      void stage.offsetHeight;

      // STEP 4: Final clean reset to state-closed
      requestAnimationFrame(() => {
        stage.classList.remove('state-resetting-to-origin');
        stage.classList.add('state-closed');

        const iframe = stage.querySelector('.v75-spotify iframe');
        if (iframe) {
          const currentSrc = iframe.src;
          iframe.src = 'about:blank';
          iframe.src = currentSrc;
        }

        productionListeningStateV75 = 'closed';
      });
    };

    const mainCompEl = stage.querySelector('.v75-main-composition');
    const listeningAreaEl = stage.querySelector('.v75-listening-area');

    if (mainCompEl) {
      const onLeftTransitionEnd = (e) => {
        if (e.target !== mainCompEl || e.propertyName !== 'left') return;
        mainCompEl.removeEventListener('transitionend', onLeftTransitionEnd);
        leftCloseFinished = true;
        tryFinalizeClosed();
      };
      mainCompEl.addEventListener('transitionend', onLeftTransitionEnd);
    } else {
      leftCloseFinished = true;
    }

    if (listeningAreaEl) {
      const onRightTransitionEnd = (e) => {
        if (e.target !== listeningAreaEl || (e.propertyName !== 'transform' && e.propertyName !== 'opacity')) return;
        listeningAreaEl.removeEventListener('transitionend', onRightTransitionEnd);
        rightCloseFinished = true;
        tryFinalizeClosed();
      };
      listeningAreaEl.addEventListener('transitionend', onRightTransitionEnd);
    } else {
      rightCloseFinished = true;
    }

    // Safety fallback timer at 1500ms
    closeListeningV75Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV75(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG
    console.log("Production project V75:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v75-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v75-ep-track-row ${activeClass}" onclick="window.playEPTrackV75('${trackEmbedUrl}', this)">
            <span class="v75-ep-track-number">${trackNum}</span>
            <span class="v75-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v75-ep-track-row is-active">
          <span class="v75-ep-track-number">01</span>
          <span class="v75-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV75 = 'closed';

    view.innerHTML = `
      <div class="v75-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v75-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v75-header-block">
            <div class="v75-title">
              <h3 class="v75-project-title">${proj.title}</h3>
            </div>
            <div class="v75-artist">
              <div class="v75-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v75-cover" onclick="window.openListeningV75()">
            ${mediaHtml}
            <div class="v75-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v75-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v75-tracklist">
            <div class="v75-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v75-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v75-close-container">
            <button class="v75-close-btn" onclick="window.closeListeningV75()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v75-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v75-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };

      // Pointer-based 1:1 real-time drag response for V75 with 400ms snap-back
      let isDragging = false;
      let startX = 0;
      let dragX = 0;
      const DRAG_THRESHOLD = 50;

      stageEl.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('iframe') || e.target.closest('.v75-ep-track-row')) return;
        if (productionListeningStateV75 !== 'closed') return;

        isDragging = true;
        startX = e.clientX;
        dragX = 0;
        stageEl.setPointerCapture(e.pointerId);
        const mainComp = stageEl.querySelector('.v75-main-composition');
        if (mainComp) {
          mainComp.style.transition = 'none'; // 1:1 immediate pointer response
        }
      });

      stageEl.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragX = e.clientX - startX;
        const mainComp = stageEl.querySelector('.v75-main-composition');
        if (mainComp) {
          mainComp.style.transform = `translateX(calc(-50% + ${dragX}px))`;
        }
      });

      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { stageEl.releasePointerCapture(e.pointerId); } catch(err) {}

        const mainComp = stageEl.querySelector('.v75-main-composition');

        if (dragX < -DRAG_THRESHOLD) {
          if (mainComp) mainComp.style.transform = `translateX(-50%)`;
          nextProductionProject();
        } else if (dragX > DRAG_THRESHOLD) {
          if (mainComp) mainComp.style.transform = `translateX(-50%)`;
          previousProductionProject();
        } else {
          // Snap back if threshold not reached (380–420ms target -> 400ms cubic-bezier(0.22, 1, 0.36, 1))
          if (mainComp) {
            mainComp.style.transition = 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)';
            mainComp.style.transform = 'translateX(-50%)';
          }
        }
      };

      stageEl.addEventListener('pointerup', endDrag);
      stageEl.addEventListener('pointercancel', endDrag);
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  /* ==========================================================================
     PRODUCTION V74: CLEAN SYNCHRONIZED CLOSE MOVEMENT + SIMPLE OPACITY TRANSITION
     ========================================================================== */

  window.playEPTrackV74 = function(trackUrl, element) {
    const stage = element.closest('.v74-production-stage');
    const iframe = stage.querySelector('.v74-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v74-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV74 = function() {
    if (isTransitioning) return;
    if (productionListeningStateV74 !== 'closed') return;

    const stage = document.querySelector('#v86SlotCurrent .v74-production-stage') || document.querySelector('.v74-production-stage');
    if (!stage) return;

    const sessionId = ++currentListeningSessionId;
    productionListeningStateV74 = 'opening';
    productionOpenProjectIndex = activeProdIndex;

    if (openListeningV74Timer) { clearTimeout(openListeningV74Timer); openListeningV74Timer = null; }
    if (openListeningV74CompleteTimer) { clearTimeout(openListeningV74CompleteTimer); openListeningV74CompleteTimer = null; }
    if (closeListeningV74Timer) { clearTimeout(closeListeningV74Timer); closeListeningV74Timer = null; }

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV74Timer = setTimeout(() => {
      if (sessionId !== currentListeningSessionId) return;
      if (productionListeningStateV74 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    openListeningV74CompleteTimer = setTimeout(() => {
      if (sessionId !== currentListeningSessionId) return;
      if (productionListeningStateV74 === 'opening') {
        productionListeningStateV74 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV74 = function() {
    if (productionListeningStateV74 !== 'open') return;

    const stage = document.querySelector('#v86SlotCurrent .v74-production-stage') || document.querySelector('.v74-production-stage');
    if (!stage) return;

    const sessionId = ++currentListeningSessionId;
    productionListeningStateV74 = 'closing';

    if (openListeningV74Timer) { clearTimeout(openListeningV74Timer); openListeningV74Timer = null; }
    if (openListeningV74CompleteTimer) { clearTimeout(openListeningV74CompleteTimer); openListeningV74CompleteTimer = null; }
    if (closeListeningV74Timer) { clearTimeout(closeListeningV74Timer); closeListeningV74Timer = null; }

    // Add state-closing class to kick off 1200ms transform & opacity transitions in the EXACT SAME FRAME
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v74-main-composition');
    const listeningAreaEl = stage.querySelector('.v74-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (sessionId !== currentListeningSessionId) return;
      if (productionListeningStateV74 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible (opacity: 0) with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        if (sessionId !== currentListeningSessionId) return;
        requestAnimationFrame(() => {
          if (sessionId !== currentListeningSessionId) return;
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            if (sessionId !== currentListeningSessionId) return;
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v74-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV74 = 'closed';
            productionOpenProjectIndex = -1;
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (sessionId !== currentListeningSessionId) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          return;
        }
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('transitionend', function onRightEnd(e) {
        if (sessionId !== currentListeningSessionId) {
          listeningAreaEl.removeEventListener('transitionend', onRightEnd);
          return;
        }
        if (e.target === listeningAreaEl && (e.propertyName === 'opacity' || e.propertyName === 'transform')) {
          listeningAreaEl.removeEventListener('transitionend', onRightEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV74Timer = setTimeout(() => {
      if (sessionId !== currentListeningSessionId) return;
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function getProductionProjectHTML_V74(index) {
    const proj = productionProjects[index];
    if (!proj) return '';

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v74-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v74-ep-track-row ${activeClass}" onclick="window.playEPTrackV74('${trackEmbedUrl}', this)">
            <span class="v74-ep-track-number">${trackNum}</span>
            <span class="v74-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      tracksHtml = `
        <div class="v74-ep-track-row is-active">
          <span class="v74-ep-track-name"${proj.preserveCase ? ' style="text-transform: none !important;"' : ''}>${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    return `
      <div class="v74-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v74-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v74-header-block">
            <div class="v74-title">
              <h3 class="v74-project-title"${proj.preserveCase ? ' style="text-transform: none !important;"' : ''}>${proj.title}</h3>
            </div>
            <div class="v74-artist">
              <div class="v74-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v74-cover" onclick="window.openListeningV74()">
            ${mediaHtml}
            <div class="v74-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v74-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v74-tracklist">
            <div class="v74-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v74-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v74-close-container">
            <button class="v74-close-btn" onclick="window.closeListeningV74()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderProductionProjectV86(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    resetProductionListeningState();

    const currentHTML = getProductionProjectHTML_V74(index);

    view.innerHTML = `
      <div class="v86-project-viewport" id="v86Viewport">
        <div class="v86-project-rail" id="v86Rail">
          <div class="v86-project-slot v86-slot-current" id="v86SlotCurrent">
            ${currentHTML}
          </div>
          <div class="v86-project-slot v86-slot-adjacent" id="v86SlotAdjacent">
          </div>
        </div>
      </div>
    `;

    const viewportEl = view.querySelector('#v86Viewport');
    if (viewportEl) {
      viewportEl.onwheel = (e) => {
        if (e.target.closest('.v74-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const total = productionProjects.length;
      const activeNum = String(index + 1).padStart(2, '0');
      const totalNum = String(total).padStart(2, '0');
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  function renderProductionProjectV74(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG
    console.log("Production project V74:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v74-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v74-ep-track-row ${activeClass}" onclick="window.playEPTrackV74('${trackEmbedUrl}', this)">
            <span class="v74-ep-track-number">${trackNum}</span>
            <span class="v74-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v74-ep-track-row is-active">
          <span class="v74-ep-track-name"${proj.preserveCase ? ' style="text-transform: none !important;"' : ''}>${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    resetProductionListeningState();

    view.innerHTML = `
      <div class="v74-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v74-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v74-header-block">
            <div class="v74-title">
              <h3 class="v74-project-title"${proj.preserveCase ? ' style="text-transform: none !important;"' : ''}>${proj.title}</h3>
            </div>
            <div class="v74-artist">
              <div class="v74-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v74-cover" onclick="window.openListeningV74()">
            ${mediaHtml}
            <div class="v74-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v74-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v74-tracklist">
            <div class="v74-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v74-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v74-close-container">
            <button class="v74-close-btn" onclick="window.closeListeningV74()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v74-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v74-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV66 = 'closed';
  let openListeningV66Timer = null;
  let closeListeningV66Timer = null;

  window.playEPTrackV66 = function(trackUrl, element) {
    const stage = element.closest('.v66-production-stage');
    const iframe = stage.querySelector('.v66-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v66-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV66 = function() {
    if (productionListeningStateV66 !== 'closed') return;

    const stage = document.querySelector('.v66-production-stage');
    if (!stage) return;

    productionListeningStateV66 = 'opening';

    if (openListeningV66Timer) clearTimeout(openListeningV66Timer);
    if (closeListeningV66Timer) clearTimeout(closeListeningV66Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV66Timer = setTimeout(() => {
      if (productionListeningStateV66 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV66 === 'opening') {
        productionListeningStateV66 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV66 = function() {
    if (productionListeningStateV66 !== 'open') return;

    const stage = document.querySelector('.v66-production-stage');
    if (!stage) return;

    productionListeningStateV66 = 'closing';

    if (openListeningV66Timer) clearTimeout(openListeningV66Timer);
    if (closeListeningV66Timer) clearTimeout(closeListeningV66Timer);

    // Add state-closing class to kick off 1200ms transitions & v66ListeningFade animation
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v66-main-composition');
    const listeningAreaEl = stage.querySelector('.v66-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV66 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v66-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV66 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v66ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV66Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV66(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V66:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v66-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v66-ep-track-row ${activeClass}" onclick="window.playEPTrackV66('${trackEmbedUrl}', this)">
            <span class="v66-ep-track-number">${trackNum}</span>
            <span class="v66-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v66-ep-track-row is-active">
          <span class="v66-ep-track-number">01</span>
          <span class="v66-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV66 = 'closed';

    view.innerHTML = `
      <div class="v66-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v66-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v66-header-block">
            <div class="v66-title">
              <h3 class="v66-project-title">${proj.title}</h3>
            </div>
            <div class="v66-artist">
              <div class="v66-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v66-cover" onclick="window.openListeningV66()">
            ${mediaHtml}
            <div class="v66-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v66-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v66-tracklist">
            <div class="v66-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v66-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v66-close-container">
            <button class="v66-close-btn" onclick="window.closeListeningV66()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v66-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v66-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV65 = 'closed';
  let openListeningV65Timer = null;
  let closeListeningV65Timer = null;

  window.playEPTrackV65 = function(trackUrl, element) {
    const stage = element.closest('.v65-production-stage');
    const iframe = stage.querySelector('.v65-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v65-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV65 = function() {
    if (productionListeningStateV65 !== 'closed') return;

    const stage = document.querySelector('.v65-production-stage');
    if (!stage) return;

    productionListeningStateV65 = 'opening';

    if (openListeningV65Timer) clearTimeout(openListeningV65Timer);
    if (closeListeningV65Timer) clearTimeout(closeListeningV65Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing', 'state-resetting', 'state-resetting-to-origin');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV65Timer = setTimeout(() => {
      if (productionListeningStateV65 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV65 === 'opening') {
        productionListeningStateV65 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV65 = function() {
    if (productionListeningStateV65 !== 'open') return;

    const stage = document.querySelector('.v65-production-stage');
    if (!stage) return;

    productionListeningStateV65 = 'closing';

    if (openListeningV65Timer) clearTimeout(openListeningV65Timer);
    if (closeListeningV65Timer) clearTimeout(closeListeningV65Timer);

    // Add state-closing class to kick off 1200ms transitions/animations
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v65-main-composition');
    const listeningAreaEl = stage.querySelector('.v65-listening-area');
    
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV65 !== 'closing') return;

      // STEP 1: Freeze panel at -6vw while completely invisible with transition: none
      stage.classList.add('state-resetting');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // STEP 2: Jump instantly from -6vw to +12px while opacity remains 0 and transition is NONE
          stage.classList.add('state-resetting-to-origin');

          requestAnimationFrame(() => {
            // STEP 3: Enter state-closed cleanly with zero visible movement
            stage.classList.remove(
              'state-closing',
              'state-resetting',
              'state-resetting-to-origin',
              'state-opening',
              'state-open',
              'is-listening',
              'is-panel-shown',
              'is-project-moved'
            );
            stage.classList.add('state-closed');

            // Reset iframe ONLY after close animation & invisible reset have fully finished
            const iframe = stage.querySelector('.v65-spotify iframe');
            if (iframe) {
              const currentSrc = iframe.src;
              iframe.src = '';
              iframe.src = currentSrc;
            }
            productionListeningStateV65 = 'closed';
          });
        });
      });
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v65ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms
    closeListeningV65Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV65(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V65:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v65-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v65-ep-track-row ${activeClass}" onclick="window.playEPTrackV65('${trackEmbedUrl}', this)">
            <span class="v65-ep-track-number">${trackNum}</span>
            <span class="v65-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v65-ep-track-row is-active">
          <span class="v65-ep-track-number">01</span>
          <span class="v65-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV65 = 'closed';

    view.innerHTML = `
      <div class="v65-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v65-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v65-header-block">
            <div class="v65-title">
              <h3 class="v65-project-title">${proj.title}</h3>
            </div>
            <div class="v65-artist">
              <div class="v65-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v65-cover" onclick="window.openListeningV65()">
            ${mediaHtml}
            <div class="v65-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v65-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v65-tracklist">
            <div class="v65-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v65-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v65-close-container">
            <button class="v65-close-btn" onclick="window.closeListeningV65()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v65-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v65-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV64 = 'closed';
  let openListeningV64Timer = null;
  let closeListeningV64Timer = null;

  window.playEPTrackV64 = function(trackUrl, element) {
    const stage = element.closest('.v64-production-stage');
    const iframe = stage.querySelector('.v64-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v64-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV64 = function() {
    if (productionListeningStateV64 !== 'closed') return;

    const stage = document.querySelector('.v64-production-stage');
    if (!stage) return;

    productionListeningStateV64 = 'opening';

    if (openListeningV64Timer) clearTimeout(openListeningV64Timer);
    if (closeListeningV64Timer) clearTimeout(closeListeningV64Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV64Timer = setTimeout(() => {
      if (productionListeningStateV64 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV64 === 'opening') {
        productionListeningStateV64 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV64 = function() {
    if (productionListeningStateV64 !== 'open') return;

    const stage = document.querySelector('.v64-production-stage');
    if (!stage) return;

    productionListeningStateV64 = 'closing';

    if (openListeningV64Timer) clearTimeout(openListeningV64Timer);
    if (closeListeningV64Timer) clearTimeout(closeListeningV64Timer);

    // Add state-closing class to kick off 1200ms transitions/animations
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v64-main-composition');
    const listeningAreaEl = stage.querySelector('.v64-listening-area');
    
    // V64 FIXED RACE CONDITION LOGIC:
    // Track both completions separately with independent flags.
    let leftCloseFinished = false;
    let rightCloseFinished = false;
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV64 !== 'closing') return;

      // Finalize closed state ONLY when both sides have fully completed.
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      // Reset iframe ONLY after close animation has fully completed and panel is 100% invisible
      const iframe = stage.querySelector('.v64-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV64 = 'closed';
    };

    const tryFinalizeClosed = () => {
      if (!leftCloseFinished) return;
      if (!rightCloseFinished) return;
      finalizeClosed();
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && e.propertyName === 'left') {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          leftCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl && e.animationName === 'v64ListeningFade') {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          rightCloseFinished = true;
          tryFinalizeClosed();
        }
      });
    }

    // Safety fallback timer at 1500ms (only if browser transitionend/animationend fails)
    closeListeningV64Timer = setTimeout(() => {
      leftCloseFinished = true;
      rightCloseFinished = true;
      tryFinalizeClosed();
    }, 1500);
  };

  function renderProductionProjectV64(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V64:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v64-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v64-ep-track-row ${activeClass}" onclick="window.playEPTrackV64('${trackEmbedUrl}', this)">
            <span class="v64-ep-track-number">${trackNum}</span>
            <span class="v64-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v64-ep-track-row is-active">
          <span class="v64-ep-track-number">01</span>
          <span class="v64-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV64 = 'closed';

    view.innerHTML = `
      <div class="v64-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v64-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v64-header-block">
            <div class="v64-title">
              <h3 class="v64-project-title">${proj.title}</h3>
            </div>
            <div class="v64-artist">
              <div class="v64-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v64-cover" onclick="window.openListeningV64()">
            ${mediaHtml}
            <div class="v64-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v64-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v64-tracklist">
            <div class="v64-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v64-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v64-close-container">
            <button class="v64-close-btn" onclick="window.closeListeningV64()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v64-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v64-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV63 = 'closed';
  let openListeningV63Timer = null;
  let closeListeningV63Timer = null;

  window.playEPTrackV63 = function(trackUrl, element) {
    const stage = element.closest('.v63-production-stage');
    const iframe = stage.querySelector('.v63-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v63-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV63 = function() {
    if (productionListeningStateV63 !== 'closed') return;

    const stage = document.querySelector('.v63-production-stage');
    if (!stage) return;

    productionListeningStateV63 = 'opening';

    if (openListeningV63Timer) clearTimeout(openListeningV63Timer);
    if (closeListeningV63Timer) clearTimeout(closeListeningV63Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV63Timer = setTimeout(() => {
      if (productionListeningStateV63 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV63 === 'opening') {
        productionListeningStateV63 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV63 = function() {
    if (productionListeningStateV63 !== 'open') return;

    const stage = document.querySelector('.v63-production-stage');
    if (!stage) return;

    productionListeningStateV63 = 'closing';

    if (openListeningV63Timer) clearTimeout(openListeningV63Timer);
    if (closeListeningV63Timer) clearTimeout(closeListeningV63Timer);

    // V63 SYNCHRONIZED CLOSE (1200ms duration)
    // CRITICAL: Add state-closing WITHOUT removing open classes yet.
    // CSS transition interpolates transform from 0 to -6vw while v63ListeningFade opacity animation fades 1 to 0 over 1200ms!
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v63-main-composition');
    const listeningAreaEl = stage.querySelector('.v63-listening-area');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV63 !== 'closing') return;

      // Cleanup & Reset ONLY after 1200ms close cycle is 100% complete and opacity is 0!
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      // Reset iframe ONLY after close animation has fully completed and panel is invisible
      const iframe = stage.querySelector('.v63-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV63 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    if (listeningAreaEl) {
      listeningAreaEl.addEventListener('animationend', function onAnimEnd(e) {
        if (e.target === listeningAreaEl) {
          listeningAreaEl.removeEventListener('animationend', onAnimEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1280ms (slightly longer than 1200ms animation)
    closeListeningV63Timer = setTimeout(finalizeClosed, 1280);
  };

  function renderProductionProjectV63(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V63:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v63-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v63-ep-track-row ${activeClass}" onclick="window.playEPTrackV63('${trackEmbedUrl}', this)">
            <span class="v63-ep-track-number">${trackNum}</span>
            <span class="v63-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v63-ep-track-row is-active">
          <span class="v63-ep-track-number">01</span>
          <span class="v63-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV63 = 'closed';

    view.innerHTML = `
      <div class="v63-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v63-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v63-header-block">
            <div class="v63-title">
              <h3 class="v63-project-title">${proj.title}</h3>
            </div>
            <div class="v63-artist">
              <div class="v63-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v63-cover" onclick="window.openListeningV63()">
            ${mediaHtml}
            <div class="v63-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v63-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v63-tracklist">
            <div class="v63-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v63-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v63-close-container">
            <button class="v63-close-btn" onclick="window.closeListeningV63()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v63-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v63-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV62 = 'closed';
  let openListeningV62Timer = null;
  let closeListeningV62Timer = null;

  window.playEPTrackV62 = function(trackUrl, element) {
    const stage = element.closest('.v62-production-stage');
    const iframe = stage.querySelector('.v62-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v62-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV62 = function() {
    if (productionListeningStateV62 !== 'closed') return;

    const stage = document.querySelector('.v62-production-stage');
    if (!stage) return;

    productionListeningStateV62 = 'opening';

    if (openListeningV62Timer) clearTimeout(openListeningV62Timer);
    if (closeListeningV62Timer) clearTimeout(closeListeningV62Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV62Timer = setTimeout(() => {
      if (productionListeningStateV62 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV62 === 'opening') {
        productionListeningStateV62 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV62 = function() {
    if (productionListeningStateV62 !== 'open') return;

    const stage = document.querySelector('.v62-production-stage');
    if (!stage) return;

    productionListeningStateV62 = 'closing';

    if (openListeningV62Timer) clearTimeout(openListeningV62Timer);
    if (closeListeningV62Timer) clearTimeout(closeListeningV62Timer);

    // V62 SYNCHRONIZED CSS TRANSITION CLOSE (1200ms duration with cubic-bezier(0.45, 0, 0.55, 1))
    // CRITICAL: Add state-closing WITHOUT removing open classes yet. CSS transition interpolates transform from 0 to -6vw!
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v62-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV62 !== 'closing') return;

      // Cleanup & Reset ONLY after 1200ms transition completes
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      // Reset iframe ONLY after close animation has fully completed
      const iframe = stage.querySelector('.v62-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV62 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1300ms (slightly longer than 1200ms animation)
    closeListeningV62Timer = setTimeout(finalizeClosed, 1300);
  };

  function renderProductionProjectV62(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V62:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v62-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v62-ep-track-row ${activeClass}" onclick="window.playEPTrackV62('${trackEmbedUrl}', this)">
            <span class="v62-ep-track-number">${trackNum}</span>
            <span class="v62-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v62-ep-track-row is-active">
          <span class="v62-ep-track-number">01</span>
          <span class="v62-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV62 = 'closed';

    view.innerHTML = `
      <div class="v62-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v62-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v62-header-block">
            <div class="v62-title">
              <h3 class="v62-project-title">${proj.title}</h3>
            </div>
            <div class="v62-artist">
              <div class="v62-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v62-cover" onclick="window.openListeningV62()">
            ${mediaHtml}
            <div class="v62-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v62-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v62-tracklist">
            <div class="v62-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v62-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v62-close-container">
            <button class="v62-close-btn" onclick="window.closeListeningV62()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v62-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v62-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV61 = 'closed';
  let openListeningV61Timer = null;
  let closeListeningV61Timer = null;

  window.playEPTrackV61 = function(trackUrl, element) {
    const stage = element.closest('.v61-production-stage');
    const iframe = stage.querySelector('.v61-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v61-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV61 = function() {
    if (productionListeningStateV61 !== 'closed') return;

    const stage = document.querySelector('.v61-production-stage');
    if (!stage) return;

    productionListeningStateV61 = 'opening';

    if (openListeningV61Timer) clearTimeout(openListeningV61Timer);
    if (closeListeningV61Timer) clearTimeout(closeListeningV61Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV61Timer = setTimeout(() => {
      if (productionListeningStateV61 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV61 === 'opening') {
        productionListeningStateV61 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV61 = function() {
    if (productionListeningStateV61 !== 'open') return;

    const stage = document.querySelector('.v61-production-stage');
    if (!stage) return;

    productionListeningStateV61 = 'closing';

    if (openListeningV61Timer) clearTimeout(openListeningV61Timer);
    if (closeListeningV61Timer) clearTimeout(closeListeningV61Timer);

    // V61 SYNCHRONIZED CONVERGENCE CLOSE (1200ms duration with cubic-bezier(0.45, 0, 0.55, 1) and -6vw)
    // CRITICAL: FIRST add state-closing WITHOUT immediately removing open classes to prevent pre-animation flash/reset!
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v61-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV61 !== 'closing') return;

      // Cleanup & Reset ONLY after 1200ms close animation completes
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      // Reset iframe ONLY after close animation has fully completed
      const iframe = stage.querySelector('.v61-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV61 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1300ms (slightly longer than 1200ms animation)
    closeListeningV61Timer = setTimeout(finalizeClosed, 1300);
  };

  function renderProductionProjectV61(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V61:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v61-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v61-ep-track-row ${activeClass}" onclick="window.playEPTrackV61('${trackEmbedUrl}', this)">
            <span class="v61-ep-track-number">${trackNum}</span>
            <span class="v61-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v61-ep-track-row is-active">
          <span class="v61-ep-track-number">01</span>
          <span class="v61-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV61 = 'closed';

    view.innerHTML = `
      <div class="v61-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v61-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v61-header-block">
            <div class="v61-title">
              <h3 class="v61-project-title">${proj.title}</h3>
            </div>
            <div class="v61-artist">
              <div class="v61-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v61-cover" onclick="window.openListeningV61()">
            ${mediaHtml}
            <div class="v61-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v61-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v61-tracklist">
            <div class="v61-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v61-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v61-close-container">
            <button class="v61-close-btn" onclick="window.closeListeningV61()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v61-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v61-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV60 = 'closed';
  let openListeningV60Timer = null;
  let closeListeningV60Timer = null;

  window.playEPTrackV60 = function(trackUrl, element) {
    const stage = element.closest('.v60-production-stage');
    const iframe = stage.querySelector('.v60-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v60-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV60 = function() {
    if (productionListeningStateV60 !== 'closed') return;

    const stage = document.querySelector('.v60-production-stage');
    if (!stage) return;

    productionListeningStateV60 = 'opening';

    if (openListeningV60Timer) clearTimeout(openListeningV60Timer);
    if (closeListeningV60Timer) clearTimeout(closeListeningV60Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV60Timer = setTimeout(() => {
      if (productionListeningStateV60 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV60 === 'opening') {
        productionListeningStateV60 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV60 = function() {
    if (productionListeningStateV60 !== 'open') return;

    const stage = document.querySelector('.v60-production-stage');
    if (!stage) return;

    productionListeningStateV60 = 'closing';

    if (openListeningV60Timer) clearTimeout(openListeningV60Timer);
    if (closeListeningV60Timer) clearTimeout(closeListeningV60Timer);

    // V60 SYNCHRONIZED CONVERGENCE CLOSE (1500ms duration with cubic-bezier(0.45, 0, 0.55, 1))
    // CRITICAL: FIRST add state-closing WITHOUT immediately removing open classes to prevent pre-animation flash/reset!
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v60-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV60 !== 'closing') return;

      // Cleanup & Reset ONLY after 1500ms close animation completes
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      // Reset iframe ONLY after close animation has fully completed
      const iframe = stage.querySelector('.v60-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV60 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1600ms (slightly longer than 1500ms animation)
    closeListeningV60Timer = setTimeout(finalizeClosed, 1600);
  };

  function renderProductionProjectV60(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V60:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v60-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v60-ep-track-row ${activeClass}" onclick="window.playEPTrackV60('${trackEmbedUrl}', this)">
            <span class="v60-ep-track-number">${trackNum}</span>
            <span class="v60-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v60-ep-track-row is-active">
          <span class="v60-ep-track-number">01</span>
          <span class="v60-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV60 = 'closed';

    view.innerHTML = `
      <div class="v60-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v60-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v60-header-block">
            <div class="v60-title">
              <h3 class="v60-project-title">${proj.title}</h3>
            </div>
            <div class="v60-artist">
              <div class="v60-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v60-cover" onclick="window.openListeningV60()">
            ${mediaHtml}
            <div class="v60-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v60-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v60-tracklist">
            <div class="v60-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v60-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v60-close-container">
            <button class="v60-close-btn" onclick="window.closeListeningV60()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v60-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v60-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV59 = 'closed';
  let openListeningV59Timer = null;
  let closeListeningV59Timer = null;

  window.playEPTrackV59 = function(trackUrl, element) {
    const stage = element.closest('.v59-production-stage');
    const iframe = stage.querySelector('.v59-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v59-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV59 = function() {
    if (productionListeningStateV59 !== 'closed') return;

    const stage = document.querySelector('.v59-production-stage');
    if (!stage) return;

    productionListeningStateV59 = 'opening';

    if (openListeningV59Timer) clearTimeout(openListeningV59Timer);
    if (closeListeningV59Timer) clearTimeout(closeListeningV59Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV59Timer = setTimeout(() => {
      if (productionListeningStateV59 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV59 === 'opening') {
        productionListeningStateV59 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV59 = function() {
    if (productionListeningStateV59 !== 'open') return;

    const stage = document.querySelector('.v59-production-stage');
    if (!stage) return;

    productionListeningStateV59 = 'closing';

    if (openListeningV59Timer) clearTimeout(openListeningV59Timer);
    if (closeListeningV59Timer) clearTimeout(closeListeningV59Timer);

    // V59 SYNCHRONIZED ABSORPTION CLOSE (1400ms duration)
    stage.classList.remove('state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v59-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV59 !== 'closing') return;

      // Cleanup & Reset
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      const iframe = stage.querySelector('.v59-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV59 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1450ms
    closeListeningV59Timer = setTimeout(finalizeClosed, 1450);
  };

  function renderProductionProjectV59(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V59:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v59-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v59-ep-track-row ${activeClass}" onclick="window.playEPTrackV59('${trackEmbedUrl}', this)">
            <span class="v59-ep-track-number">${trackNum}</span>
            <span class="v59-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v59-ep-track-row is-active">
          <span class="v59-ep-track-number">01</span>
          <span class="v59-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV59 = 'closed';

    view.innerHTML = `
      <div class="v59-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v59-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v59-header-block">
            <div class="v59-title">
              <h3 class="v59-project-title">${proj.title}</h3>
            </div>
            <div class="v59-artist">
              <div class="v59-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v59-cover" onclick="window.openListeningV59()">
            ${mediaHtml}
            <div class="v59-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v59-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v59-tracklist">
            <div class="v59-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v59-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v59-close-container">
            <button class="v59-close-btn" onclick="window.closeListeningV59()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v59-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v59-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV58 = 'closed';
  let openListeningV58Timer = null;
  let closeListeningV58Timer = null;

  window.playEPTrackV58 = function(trackUrl, element) {
    const stage = element.closest('.v58-production-stage');
    const iframe = stage.querySelector('.v58-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v58-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV58 = function() {
    if (productionListeningStateV58 !== 'closed') return;

    const stage = document.querySelector('.v58-production-stage');
    if (!stage) return;

    productionListeningStateV58 = 'opening';

    if (openListeningV58Timer) clearTimeout(openListeningV58Timer);
    if (closeListeningV58Timer) clearTimeout(closeListeningV58Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV58Timer = setTimeout(() => {
      if (productionListeningStateV58 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV58 === 'opening') {
        productionListeningStateV58 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV58 = function() {
    if (productionListeningStateV58 !== 'open') return;

    const stage = document.querySelector('.v58-production-stage');
    if (!stage) return;

    productionListeningStateV58 = 'closing';

    if (openListeningV58Timer) clearTimeout(openListeningV58Timer);
    if (closeListeningV58Timer) clearTimeout(closeListeningV58Timer);

    // V58 SYNCHRONIZED CLOSE WITH EARLY OPACITY DISSOLVE
    stage.classList.remove('state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v58-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV58 !== 'closing') return;

      // Cleanup & Reset
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      const iframe = stage.querySelector('.v58-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV58 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1250ms
    closeListeningV58Timer = setTimeout(finalizeClosed, 1250);
  };

  function renderProductionProjectV58(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V58:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v58-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v58-ep-track-row ${activeClass}" onclick="window.playEPTrackV58('${trackEmbedUrl}', this)">
            <span class="v58-ep-track-number">${trackNum}</span>
            <span class="v58-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v58-ep-track-row is-active">
          <span class="v58-ep-track-number">01</span>
          <span class="v58-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV58 = 'closed';

    view.innerHTML = `
      <div class="v58-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v58-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v58-header-block">
            <div class="v58-title">
              <h3 class="v58-project-title">${proj.title}</h3>
            </div>
            <div class="v58-artist">
              <div class="v58-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v58-cover" onclick="window.openListeningV58()">
            ${mediaHtml}
            <div class="v58-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v58-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v58-tracklist">
            <div class="v58-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v58-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v58-close-container">
            <button class="v58-close-btn" onclick="window.closeListeningV58()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v58-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v58-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV57 = 'closed';
  let openListeningV57Timer = null;
  let closeListeningV57Timer = null;

  window.playEPTrackV57 = function(trackUrl, element) {
    const stage = element.closest('.v57-production-stage');
    const iframe = stage.querySelector('.v57-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v57-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV57 = function() {
    if (productionListeningStateV57 !== 'closed') return;

    const stage = document.querySelector('.v57-production-stage');
    if (!stage) return;

    productionListeningStateV57 = 'opening';

    if (openListeningV57Timer) clearTimeout(openListeningV57Timer);
    if (closeListeningV57Timer) clearTimeout(closeListeningV57Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV57Timer = setTimeout(() => {
      if (productionListeningStateV57 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV57 === 'opening') {
        productionListeningStateV57 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV57 = function() {
    if (productionListeningStateV57 !== 'open') return;

    const stage = document.querySelector('.v57-production-stage');
    if (!stage) return;

    productionListeningStateV57 = 'closing';

    if (openListeningV57Timer) clearTimeout(openListeningV57Timer);
    if (closeListeningV57Timer) clearTimeout(closeListeningV57Timer);

    // V57 SYNCHRONIZED CLOSE: Both LEFT and RIGHT groups move AT THE SAME TIME (0ms delay, 1200ms duration)
    stage.classList.remove('state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
    stage.classList.add('state-closing');

    const mainCompEl = stage.querySelector('.v57-main-composition');
    let closedStateTriggered = false;

    const finalizeClosed = () => {
      if (closedStateTriggered) return;
      closedStateTriggered = true;

      if (productionListeningStateV57 !== 'closing') return;

      // Cleanup & Reset
      stage.classList.remove('state-closing', 'state-opening', 'state-open', 'is-listening', 'is-panel-shown', 'is-project-moved');
      stage.classList.add('state-closed');

      const iframe = stage.querySelector('.v57-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
      productionListeningStateV57 = 'closed';
    };

    if (mainCompEl) {
      mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
        if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
          mainCompEl.removeEventListener('transitionend', onCompEnd);
          finalizeClosed();
        }
      });
    }

    // Fallback timer at 1250ms
    closeListeningV57Timer = setTimeout(finalizeClosed, 1250);
  };

  function renderProductionProjectV57(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V57:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v57-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v57-ep-track-row ${activeClass}" onclick="window.playEPTrackV57('${trackEmbedUrl}', this)">
            <span class="v57-ep-track-number">${trackNum}</span>
            <span class="v57-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v57-ep-track-row is-active">
          <span class="v57-ep-track-number">01</span>
          <span class="v57-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV57 = 'closed';

    view.innerHTML = `
      <div class="v57-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v57-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v57-header-block">
            <div class="v57-title">
              <h3 class="v57-project-title">${proj.title}</h3>
            </div>
            <div class="v57-artist">
              <div class="v57-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v57-cover" onclick="window.openListeningV57()">
            ${mediaHtml}
            <div class="v57-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v57-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v57-tracklist">
            <div class="v57-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v57-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v57-close-container">
            <button class="v57-close-btn" onclick="window.closeListeningV57()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v57-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v57-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  let productionListeningStateV56 = 'closed';
  let openListeningV56Timer = null;
  let closeListeningV56Timer = null;

  window.playEPTrackV56 = function(trackUrl, element) {
    const stage = element.closest('.v56-production-stage');
    const iframe = stage.querySelector('.v56-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v56-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV56 = function() {
    if (productionListeningStateV56 !== 'closed') return;

    const stage = document.querySelector('.v56-production-stage');
    if (!stage) return;

    productionListeningStateV56 = 'opening';

    if (openListeningV56Timer) clearTimeout(openListeningV56Timer);
    if (closeListeningV56Timer) clearTimeout(closeListeningV56Timer);

    // STEP 1: Begin LEFT PROJECT GROUP movement at 0ms (1100ms glide)
    stage.classList.remove('state-closed', 'state-closing-player', 'state-recentering');
    stage.classList.add('state-opening', 'is-project-moved');

    // STEP 2: RIGHT LISTENING GROUP fade begins at 350ms delay (500ms duration)
    openListeningV56Timer = setTimeout(() => {
      if (productionListeningStateV56 === 'opening') {
        stage.classList.add('is-panel-shown');
      }
    }, 350);

    // Completion at 1100ms: State becomes 'open'
    setTimeout(() => {
      if (productionListeningStateV56 === 'opening') {
        productionListeningStateV56 = 'open';
        stage.classList.remove('state-opening');
        stage.classList.add('state-open', 'is-listening');
      }
    }, 1100);
  };

  window.closeListeningV56 = function() {
    if (productionListeningStateV56 !== 'open') return;

    const stage = document.querySelector('.v56-production-stage');
    if (!stage) return;

    productionListeningStateV56 = 'closing_player';

    if (openListeningV56Timer) clearTimeout(openListeningV56Timer);
    if (closeListeningV56Timer) clearTimeout(closeListeningV56Timer);

    stage.classList.remove('state-open', 'is-listening');
    stage.classList.add('state-closing-player');

    // PHASE 1: Hide ENTIRE RIGHT LISTENING GROUP (moves LEFT -14px & fades out over 550ms)
    // COVER / TITLE / ARTIST / MARQUEE DO NOT MOVE (is-project-moved is still active)
    stage.classList.remove('is-panel-shown');

    const panelEl = stage.querySelector('.v56-listening-area');
    const mainCompEl = stage.querySelector('.v56-main-composition');

    let phaseBTriggered = false;

    const triggerPhaseB = () => {
      if (phaseBTriggered) return;
      phaseBTriggered = true;

      if (productionListeningStateV56 !== 'closing_player') return;

      productionListeningStateV56 = 'recentering';
      stage.classList.remove('state-closing-player');
      stage.classList.add('state-recentering');

      // PHASE 2: Controlled 100ms breathing pause before left group returns
      setTimeout(() => {
        if (productionListeningStateV56 !== 'recentering') return;

        // PHASE 3: Move LEFT PROJECT GROUP back to center (1100ms glide)
        stage.classList.remove('is-project-moved');

        let closedStateTriggered = false;

        const finalizeClosed = () => {
          if (closedStateTriggered) return;
          closedStateTriggered = true;

          if (productionListeningStateV56 !== 'recentering') return;

          // Cleanup & Reset
          stage.classList.remove('state-recentering', 'state-opening', 'state-closing-player', 'state-open', 'is-listening', 'is-panel-shown');
          stage.classList.add('state-closed');

          const iframe = stage.querySelector('.v56-spotify iframe');
          if (iframe) {
            const currentSrc = iframe.src;
            iframe.src = '';
            iframe.src = currentSrc;
          }
          productionListeningStateV56 = 'closed';
        };

        if (mainCompEl) {
          mainCompEl.addEventListener('transitionend', function onCompEnd(e) {
            if (e.target === mainCompEl && (e.propertyName === 'left' || e.propertyName === 'transform')) {
              mainCompEl.removeEventListener('transitionend', onCompEnd);
              finalizeClosed();
            }
          });
        }
        closeListeningV56Timer = setTimeout(finalizeClosed, 1150);

      }, 100);
    };

    if (panelEl) {
      panelEl.addEventListener('transitionend', function onPanelEnd(e) {
        if (e.target === panelEl && (e.propertyName === 'opacity' || e.propertyName === 'transform')) {
          panelEl.removeEventListener('transitionend', onPanelEnd);
          triggerPhaseB();
        }
      });
    }
    setTimeout(triggerPhaseB, 590);
  };

  function renderProductionProjectV56(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V56:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v56-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v56-ep-track-row ${activeClass}" onclick="window.playEPTrackV56('${trackEmbedUrl}', this)">
            <span class="v56-ep-track-number">${trackNum}</span>
            <span class="v56-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v56-ep-track-row is-active">
          <span class="v56-ep-track-number">01</span>
          <span class="v56-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    // Reset state for new render
    productionListeningStateV56 = 'closed';

    view.innerHTML = `
      <div class="v56-production-stage state-closed">
        <!-- Main Centered Composition (LEFT PROJECT GROUP) -->
        <div class="v56-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v56-header-block">
            <div class="v56-title">
              <h3 class="v56-project-title">${proj.title}</h3>
            </div>
            <div class="v56-artist">
              <div class="v56-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v56-cover" onclick="window.openListeningV56()">
            ${mediaHtml}
            <div class="v56-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (RIGHT LISTENING GROUP) -->
        <div class="v56-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v56-tracklist">
            <div class="v56-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v56-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v56-close-container">
            <button class="v56-close-btn" onclick="window.closeListeningV56()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v56-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v56-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV55 = function(trackUrl, element) {
    const stage = element.closest('.v55-production-stage');
    const iframe = stage.querySelector('.v55-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v55-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV55 = function() {
    const stage = document.querySelector('.v55-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV55 = function() {
    const stage = document.querySelector('.v55-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v55-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV55(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V55:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v55-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v55-ep-track-row ${activeClass}" onclick="window.playEPTrackV55('${trackEmbedUrl}', this)">
            <span class="v55-ep-track-number">${trackNum}</span>
            <span class="v55-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v55-ep-track-row is-active">
          <span class="v55-ep-track-number">01</span>
          <span class="v55-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v55-production-stage">
        <!-- Main Centered Composition -->
        <div class="v55-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v55-header-block">
            <div class="v55-title">
              <h3 class="v55-project-title">${proj.title}</h3>
            </div>
            <div class="v55-artist">
              <div class="v55-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v55-cover" onclick="window.openListeningV55()">
            ${mediaHtml}
            <div class="v55-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v55-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v55-tracklist">
            <div class="v55-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v55-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v55-close-container">
            <button class="v55-close-btn" onclick="window.closeListeningV55()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v55-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v55-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV54 = function(trackUrl, element) {
    const stage = element.closest('.v54-production-stage');
    const iframe = stage.querySelector('.v54-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v54-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV54 = function() {
    const stage = document.querySelector('.v54-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV54 = function() {
    const stage = document.querySelector('.v54-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v54-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV54(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V54:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v54-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v54-ep-track-row ${activeClass}" onclick="window.playEPTrackV54('${trackEmbedUrl}', this)">
            <span class="v54-ep-track-number">${trackNum}</span>
            <span class="v54-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v54-ep-track-row is-active">
          <span class="v54-ep-track-number">01</span>
          <span class="v54-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v54-production-stage">
        <!-- Main Centered Composition -->
        <div class="v54-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v54-header-block">
            <div class="v54-title">
              <h3 class="v54-project-title">${proj.title}</h3>
            </div>
            <div class="v54-artist">
              <div class="v54-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v54-cover" onclick="window.openListeningV54()">
            ${mediaHtml}
            <div class="v54-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v54-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v54-tracklist">
            <div class="v54-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v54-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v54-close-container">
            <button class="v54-close-btn" onclick="window.closeListeningV54()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v54-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v54-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV53 = function(trackUrl, element) {
    const stage = element.closest('.v53-production-stage');
    const iframe = stage.querySelector('.v53-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v53-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV53 = function() {
    const stage = document.querySelector('.v53-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV53 = function() {
    const stage = document.querySelector('.v53-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v53-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV53(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V53:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v53-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v53-ep-track-row ${activeClass}" onclick="window.playEPTrackV53('${trackEmbedUrl}', this)">
            <span class="v53-ep-track-number">${trackNum}</span>
            <span class="v53-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v53-ep-track-row is-active">
          <span class="v53-ep-track-number">01</span>
          <span class="v53-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v53-production-stage">
        <!-- Main Centered Composition -->
        <div class="v53-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v53-header-block">
            <div class="v53-title">
              <h3 class="v53-project-title">${proj.title}</h3>
            </div>
            <div class="v53-artist">
              <div class="v53-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v53-cover" onclick="window.openListeningV53()">
            ${mediaHtml}
            <div class="v53-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v53-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v53-tracklist">
            <div class="v53-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v53-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v53-close-container">
            <button class="v53-close-btn" onclick="window.closeListeningV53()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v53-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v53-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV52 = function(trackUrl, element) {
    const stage = element.closest('.v52-production-stage');
    const iframe = stage.querySelector('.v52-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v52-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV52 = function() {
    const stage = document.querySelector('.v52-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV52 = function() {
    const stage = document.querySelector('.v52-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v52-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV52(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V52:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v52-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v52-ep-track-row ${activeClass}" onclick="window.playEPTrackV52('${trackEmbedUrl}', this)">
            <span class="v52-ep-track-number">${trackNum}</span>
            <span class="v52-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v52-ep-track-row is-active">
          <span class="v52-ep-track-number">01</span>
          <span class="v52-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v52-production-stage">
        <!-- Main Centered Composition -->
        <div class="v52-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v52-header-block">
            <div class="v52-title">
              <h3 class="v52-project-title">${proj.title}</h3>
            </div>
            <div class="v52-artist">
              <div class="v52-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v52-cover" onclick="window.openListeningV52()">
            ${mediaHtml}
            <div class="v52-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v52-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v52-tracklist">
            <div class="v52-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v52-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v52-close-container">
            <button class="v52-close-btn" onclick="window.closeListeningV52()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v52-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v52-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV51 = function(trackUrl, element) {
    const stage = element.closest('.v51-production-stage');
    const iframe = stage.querySelector('.v51-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v51-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV51 = function() {
    const stage = document.querySelector('.v51-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV51 = function() {
    const stage = document.querySelector('.v51-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v51-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV51(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V51:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v51-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v51-ep-track-row ${activeClass}" onclick="window.playEPTrackV51('${trackEmbedUrl}', this)">
            <span class="v51-ep-track-number">${trackNum}</span>
            <span class="v51-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v51-ep-track-row is-active">
          <span class="v51-ep-track-number">01</span>
          <span class="v51-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v51-production-stage">
        <!-- Main Centered Composition -->
        <div class="v51-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v51-header-block">
            <div class="v51-title">
              <h3 class="v51-project-title">${proj.title}</h3>
            </div>
            <div class="v51-artist">
              <div class="v51-project-artist">${proj.artist.toUpperCase()}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v51-cover" onclick="window.openListeningV51()">
            ${mediaHtml}
            <div class="v51-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v51-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v51-tracklist">
            <div class="v51-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v51-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v51-close-container">
            <button class="v51-close-btn" onclick="window.closeListeningV51()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v51-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v51-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV50 = function(trackUrl, element) {
    const stage = element.closest('.v50-production-stage');
    const iframe = stage.querySelector('.v50-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v50-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV50 = function() {
    const stage = document.querySelector('.v50-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV50 = function() {
    const stage = document.querySelector('.v50-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v50-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV50(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V50:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v50-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v50-ep-track-row ${activeClass}" onclick="window.playEPTrackV50('${trackEmbedUrl}', this)">
            <span class="v50-ep-track-number">${trackNum}</span>
            <span class="v50-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v50-ep-track-row is-active">
          <span class="v50-ep-track-number">01</span>
          <span class="v50-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v50-production-stage">
        <!-- Main Centered Composition -->
        <div class="v50-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v50-header-block">
            <div class="v50-title">
              <h3 class="v50-project-title">${proj.title}</h3>
            </div>
            <div class="v50-artist">
              <div class="v50-project-artist">${proj.artist}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v50-cover" onclick="window.openListeningV50()">
            ${mediaHtml}
            <div class="v50-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v50-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v50-tracklist">
            <div class="v50-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v50-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v50-close-container">
            <button class="v50-close-btn" onclick="window.closeListeningV50()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v50-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v50-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV49 = function(trackUrl, element) {
    const stage = element.closest('.v49-production-stage');
    const iframe = stage.querySelector('.v49-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v49-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV49 = function() {
    const stage = document.querySelector('.v49-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV49 = function() {
    const stage = document.querySelector('.v49-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v49-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV49(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V49:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v49-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v49-ep-track-row ${activeClass}" onclick="window.playEPTrackV49('${trackEmbedUrl}', this)">
            <span class="v49-ep-track-number">${trackNum}</span>
            <span class="v49-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v49-ep-track-row is-active">
          <span class="v49-ep-track-number">01</span>
          <span class="v49-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v49-production-stage">
        <!-- Main Centered Composition -->
        <div class="v49-main-composition">
          <!-- Title & Artist (In-flow above cover) -->
          <div class="v49-header-block">
            <div class="v49-title">
              <h3 class="v49-project-title">${proj.title}</h3>
            </div>
            <div class="v49-artist">
              <div class="v49-project-artist">${proj.artist}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v49-cover" onclick="window.openListeningV49()">
            ${mediaHtml}
            <div class="v49-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v49-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v49-tracklist">
            <div class="v49-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v49-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v49-close-container">
            <button class="v49-close-btn" onclick="window.closeListeningV49()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v49-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v49-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV48 = function(trackUrl, element) {
    const stage = element.closest('.v48-production-stage');
    const iframe = stage.querySelector('.v48-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v48-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV48 = function() {
    const stage = document.querySelector('.v48-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV48 = function() {
    const stage = document.querySelector('.v48-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v48-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV48(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V48:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v48-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v48-ep-track-row ${activeClass}" onclick="window.playEPTrackV48('${trackEmbedUrl}', this)">
            <span class="v48-ep-track-number">${trackNum}</span>
            <span class="v48-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v48-ep-track-row is-active">
          <span class="v48-ep-track-number">01</span>
          <span class="v48-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v48-production-stage">
        <!-- Main Centered Composition -->
        <div class="v48-main-composition">
          <!-- Title & Artist (Centered above cover) -->
          <div class="v48-header-block">
            <div class="v48-title">
              <h3 class="v48-project-title">${proj.title}</h3>
            </div>
            <div class="v48-artist">
              <div class="v48-project-artist">${proj.artist}</div>
            </div>
          </div>

          <!-- Cover Image Container (Clickable) -->
          <div class="v48-cover" onclick="window.openListeningV48()">
            ${mediaHtml}
            <div class="v48-cover-overlay">
              <span>LISTEN</span>
            </div>
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v48-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v48-tracklist">
            <div class="v48-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v48-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v48-close-container">
            <button class="v48-close-btn" onclick="window.closeListeningV48()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v48-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v48-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      // Updates the fixed projectCounter using 01 / 07 visual logic
      counterEl.textContent = `${activeNum} / ${totalNum}`;
    }
  }

  window.playEPTrackV47 = function(trackUrl, element) {
    const stage = element.closest('.v47-production-stage');
    const iframe = stage.querySelector('.v47-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v47-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV47 = function() {
    const stage = document.querySelector('.v47-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV47 = function() {
    const stage = document.querySelector('.v47-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v47-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV47(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V47:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v47-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v47-ep-track-row ${activeClass}" onclick="window.playEPTrackV47('${trackEmbedUrl}', this)">
            <span class="v47-ep-track-number">${trackNum}</span>
            <span class="v47-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v47-ep-track-row is-active">
          <span class="v47-ep-track-number">01</span>
          <span class="v47-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;
    const divider = " &nbsp;&nbsp;&middot;&nbsp;&nbsp; ";
    const metaRepeated = `${metaString}${divider}${metaString}${divider}`;

    view.innerHTML = `
      <div class="v47-production-stage">
        <!-- Main Centered Composition -->
        <div class="v47-main-composition">
          <!-- Title & Artist (Centered above cover) -->
          <div class="v47-header-block">
            <div class="v47-title">
              <h3 class="v47-project-title">${proj.title}</h3>
            </div>
            <div class="v47-artist">
              <div class="v47-project-artist">${proj.artist}</div>
            </div>
          </div>

          <!-- Cover Image Container -->
          <div class="v47-cover">
            ${mediaHtml}
          </div>

          <!-- Moving Credits Marquee (Attached directly under cover) -->
          <div class="v47-marquee">
            <div class="v47-marquee-track">
              <span class="v47-marquee-content">${metaRepeated}</span>
              <span class="v47-marquee-content" aria-hidden="true">${metaRepeated}</span>
            </div>
          </div>

          <!-- LISTEN & Counter Container (Centered below cover) -->
          <div class="v47-listen-counter-group">
            <div class="v47-listen-container">
              <button class="v47-listen-btn" onclick="window.openListeningV47()">
                LISTEN
              </button>
            </div>
            <div class="v47-counter">
              ${activeNum} / ${totalNum}
            </div>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v47-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v47-tracklist">
            <div class="v47-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v47-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v47-close-container">
            <button class="v47-close-btn" onclick="window.closeListeningV47()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v47-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v47-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV46 = function(trackUrl, element) {
    const stage = element.closest('.v46-production-stage');
    const iframe = stage.querySelector('.v46-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v46-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV46 = function() {
    const stage = document.querySelector('.v46-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV46 = function() {
    const stage = document.querySelector('.v46-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v46-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV46(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V46:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v46-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v46-ep-track-row ${activeClass}" onclick="window.playEPTrackV46('${trackEmbedUrl}', this)">
            <span class="v46-ep-track-number">${trackNum}</span>
            <span class="v46-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single release tracklist representation
      tracksHtml = `
        <div class="v46-ep-track-row is-active">
          <span class="v46-ep-track-number">01</span>
          <span class="v46-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    view.innerHTML = `
      <div class="v46-production-stage">
        <!-- Main Centered Composition -->
        <div class="v46-main-composition">
          <!-- Title & Artist (Centered above cover) -->
          <div class="v46-header-block">
            <div class="v46-title">
              <h3 class="v46-project-title">${proj.title}</h3>
            </div>
            <div class="v46-artist">
              <div class="v46-project-artist">${proj.artist}</div>
            </div>
          </div>

          <!-- Credits Annotation Block (Left of cover) -->
          <div class="v46-credits-block">
            <div class="v46-credit-row">RAYAN MADE IT</div>
            <div class="v46-credit-row">${proj.role.toUpperCase()}</div>
            <div class="v46-credit-row">${proj.year}</div>
          </div>

          <!-- Counter Annotation Block (Right of cover) -->
          <div class="v46-counter-block">
            ${activeNum} / ${totalNum}
          </div>

          <!-- Cover Image Container -->
          <div class="v46-cover">
            ${mediaHtml}
          </div>

          <!-- LISTEN Button (Centered below cover) -->
          <div class="v46-listen-container">
            <button class="v46-listen-btn" onclick="window.openListeningV46()">
              LISTEN
            </button>
          </div>
        </div>

        <!-- Listening Area (Open State, positioned right) -->
        <div class="v46-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v46-tracklist">
            <div class="v46-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v46-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v46-close-container">
            <button class="v46-close-btn" onclick="window.closeListeningV46()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v46-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v46-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV45 = function(trackUrl, element) {
    const stage = element.closest('.v45-production-stage');
    const iframe = stage.querySelector('.v45-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v45-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV45 = function() {
    const stage = document.querySelector('.v45-production-stage');
    if (stage) {
      stage.classList.add('is-listening');
    }
  };

  window.closeListeningV45 = function() {
    const stage = document.querySelector('.v45-production-stage');
    if (stage) {
      stage.classList.remove('is-listening');
      const iframe = stage.querySelector('.v45-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }
    }
  };

  function renderProductionProjectV45(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V45:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v45-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    let mainEmbedUrl = '';

    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v45-ep-track-row ${activeClass}" onclick="window.playEPTrackV45('${trackEmbedUrl}', this)">
            <span class="v45-ep-track-number">${trackNum}</span>
            <span class="v45-ep-track-name">${track.name}</span>
          </div>
        `;
      });
      if (proj.tracklist.length > 0) {
        mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
      }
    } else {
      // Single behaves visually like a one-track release
      tracksHtml = `
        <div class="v45-ep-track-row is-active">
          <span class="v45-ep-track-number">01</span>
          <span class="v45-ep-track-name">${proj.title}</span>
        </div>
      `;
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    view.innerHTML = `
      <div class="v45-production-stage">
        <!-- Project block (grows vertically, positioned relative to cover center) -->
        <div class="v45-project-block">
          <!-- Title -->
          <div class="v45-title">
            <h3 class="v45-project-title">${proj.title}</h3>
          </div>

          <!-- Artist -->
          <div class="v45-artist">
            <div class="v45-project-artist">${proj.artist}</div>
          </div>

          <!-- Cover -->
          <div class="v45-cover">
            ${mediaHtml}
          </div>

          <!-- Metadata -->
          <div class="v45-metadata">
            ${metaString}
          </div>

          <!-- Counter -->
          <div class="v45-counter">
            ${activeNum} / ${totalNum}
          </div>

          <!-- LISTEN Link (Closed State) -->
          <div class="v45-listen-container">
            <button class="v45-listen-btn" onclick="window.openListeningV45()">
              LISTEN
            </button>
          </div>
        </div>

        <!-- Listening Area (Open State) -->
        <div class="v45-listening-area">
          <!-- Numbered Tracklist -->
          <div class="v45-tracklist">
            <div class="v45-ep-tracklist">${tracksHtml}</div>
          </div>

          <!-- Spotify embed -->
          <div class="v45-spotify">
            <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <!-- CLOSE Button -->
          <div class="v45-close-container">
            <button class="v45-close-btn" onclick="window.closeListeningV45()">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v45-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v45-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  let v44ListeningOpen = false;
  let v44ActiveTrackIndex = null;

  function ensureV44SpotifyDrawer() {
    if (document.querySelector('.v44-spotify-drawer')) return;
    const drawer = document.createElement('div');
    drawer.className = 'v44-spotify-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div class="v44-spotify-drawer-inner">
        <div class="v44-spotify-drawer-meta">
          <span class="v44-now-playing"></span>
        </div>
        <div class="v44-spotify-embed-slot"></div>
        <button class="v44-spotify-close" onclick="window.closeV44SpotifyDrawer()">
          CLOSE &times;
        </button>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  window.openV44SpotifyDrawer = function(spotifyUrl, label) {
    ensureV44SpotifyDrawer();
    const drawer = document.querySelector('.v44-spotify-drawer');
    const nowPlaying = drawer.querySelector('.v44-now-playing');
    const embedSlot = drawer.querySelector('.v44-spotify-embed-slot');

    if (nowPlaying) {
      nowPlaying.textContent = label;
    }

    const embedUrl = getSpotifyEmbedUrl(spotifyUrl);
    let iframe = embedSlot.querySelector('iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '80';
      iframe.frameBorder = '0';
      iframe.allowFullscreen = true;
      iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      iframe.loading = 'lazy';
      embedSlot.appendChild(iframe);
    }
    
    if (iframe.src !== embedUrl) {
      iframe.src = embedUrl;
    }

    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    v44ListeningOpen = true;
  };

  window.closeV44SpotifyDrawer = function() {
    const drawer = document.querySelector('.v44-spotify-drawer');
    if (drawer) {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      
      const iframe = drawer.querySelector('iframe');
      if (iframe) {
        iframe.src = '';
      }
    }
    v44ListeningOpen = false;
  };

  window.selectV44EpTrack = function(projectIndex, trackIndex, element) {
    const proj = productionProjects[projectIndex];
    if (!proj || !proj.tracklist || !proj.tracklist[trackIndex]) return;

    v44ActiveTrackIndex = trackIndex;
    
    const container = element.parentNode;
    const rows = container.querySelectorAll('.v44-ep-track-row');
    rows.forEach((row, rIdx) => {
      if (rIdx === trackIndex) {
        row.classList.add('is-active');
      } else {
        row.classList.remove('is-active');
      }
    });

    const track = proj.tracklist[trackIndex];
    const label = `${proj.title.toUpperCase()} — ${track.name.toUpperCase()}`;
    openV44SpotifyDrawer(track.spotify, label);
  };

  window.listenEpV44 = function(projectIndex) {
    const firstRow = document.querySelector('.v44-ep-track-row');
    if (firstRow) {
      window.selectV44EpTrack(projectIndex, 0, firstRow);
    }
  };

  function renderProductionProjectV44(index) {
    window.closeV44SpotifyDrawer();

    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V44:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v44-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        tracksHtml += `
          <div class="v44-ep-track-row" onclick="window.selectV44EpTrack(${index}, ${tIdx}, this)">
            <span class="v44-ep-track-number">${trackNum}</span>
            <span class="v44-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    let listenCtaHtml = '';
    if (proj.type === 'ep') {
      listenCtaHtml = `
        <button class="v44-listen-btn" onclick="window.listenEpV44(${index})">
          LISTEN &nearr;
        </button>
      `;
    } else {
      listenCtaHtml = `
        <button class="v44-listen-btn" onclick="window.openV44SpotifyDrawer('${proj.spotify}', '${proj.title.toUpperCase()} — ${proj.artist.toUpperCase()}')">
          LISTEN &nearr;
        </button>
      `;
    }

    view.innerHTML = `
      <div class="v44-production-stage">
        <!-- Title -->
        <div class="v44-title">
          <h3 class="v44-project-title">${proj.title}</h3>
        </div>

        <!-- Artist -->
        <div class="v44-artist">
          <div class="v44-project-artist">${proj.artist}</div>
        </div>

        <!-- Cover -->
        <div class="v44-cover">
          ${mediaHtml}
        </div>

        <!-- Metadata -->
        <div class="v44-metadata">
          ${metaString}
        </div>

        <!-- Counter -->
        <div class="v44-counter">
          ${activeNum} / ${totalNum}
        </div>

        <!-- EP Tracklist -->
        ${proj.type === 'ep' ? `
          <div class="v44-tracklist">
            <div class="v44-ep-tracklist">${tracksHtml}</div>
          </div>
        ` : ''}

        <!-- Listen Link -->
        <div class="v44-listen-container">
          ${listenCtaHtml}
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v44-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v44-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV43 = function(trackUrl, element) {
    const iframe = element.closest('.v43-listening-panel').querySelector('.v43-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v43-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV43 = function() {
    const playCta = document.querySelector('.v43-play-cta');
    const panel = document.querySelector('.v43-listening-panel');
    if (playCta && panel) {
      playCta.style.opacity = '0';
      setTimeout(() => {
        playCta.style.display = 'none';
        panel.style.display = 'block';
        setTimeout(() => {
          panel.style.opacity = '1';
        }, 30);
      }, 200);
    }
  };

  window.closeListeningV43 = function() {
    const playCta = document.querySelector('.v43-play-cta');
    const panel = document.querySelector('.v43-listening-panel');
    if (playCta && panel) {
      panel.style.opacity = '0';
      
      const iframe = panel.querySelector('.v43-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }

      setTimeout(() => {
        panel.style.display = 'none';
        playCta.style.display = 'block';
        setTimeout(() => {
          playCta.style.opacity = '1';
        }, 30);
      }, 250);
    }
  };

  function renderProductionProjectV43(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V43:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v43-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v43-ep-track-row ${activeClass}" onclick="window.playEPTrackV43('${trackEmbedUrl}', this)">
            <span class="v43-ep-track-number">${trackNum}</span>
            <span class="v43-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    let mainEmbedUrl = '';
    if (proj.type === 'ep' && proj.tracklist && proj.tracklist.length > 0) {
      mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
    } else {
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }
    
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    view.innerHTML = `
      <div class="v43-production-stage">
        <!-- Title -->
        <div class="v43-title">
          <h3 class="v43-project-title">${proj.title}</h3>
        </div>

        <!-- Artist -->
        <div class="v43-artist">
          <div class="v43-project-artist">${proj.artist}</div>
        </div>

        <!-- Cover -->
        <div class="v43-cover">
          ${mediaHtml}
        </div>

        <!-- Metadata -->
        <div class="v43-metadata">
          ${metaString}
        </div>

        <!-- Counter -->
        <div class="v43-counter">
          ${activeNum} / ${totalNum}
        </div>

        <!-- Play CTA (Closed State) - Stacked Vertically -->
        <div class="v43-play-cta" onclick="window.openListeningV43()">
          <div>P</div>
          <div>L</div>
          <div>A</div>
          <div>Y</div>
        </div>

        <!-- Listening Panel (Open State) -->
        <div class="v43-listening-panel" style="display: none; opacity: 0;">
          <div class="v43-close-bar">
            <span class="v43-close-btn" onclick="window.closeListeningV43()">CLOSE &times;</span>
          </div>

          <!-- EP Tracklist -->
          ${proj.type === 'ep' ? `
            <div class="v43-tracklist">
              <div class="v43-ep-tracklist">${tracksHtml}</div>
            </div>
          ` : ''}

          <!-- Spotify player -->
          <div class="v43-spotify">
            ${playerHtml}
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v43-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v43-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV42 = function(trackUrl, element) {
    const iframe = element.closest('.v42-listening-panel').querySelector('.v42-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v42-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  window.openListeningV42 = function() {
    const playCta = document.querySelector('.v42-play-cta');
    const panel = document.querySelector('.v42-listening-panel');
    if (playCta && panel) {
      playCta.style.opacity = '0';
      setTimeout(() => {
        playCta.style.display = 'none';
        panel.style.display = 'block';
        setTimeout(() => {
          panel.style.opacity = '1';
        }, 30);
      }, 200);
    }
  };

  window.closeListeningV42 = function() {
    const playCta = document.querySelector('.v42-play-cta');
    const panel = document.querySelector('.v42-listening-panel');
    if (playCta && panel) {
      panel.style.opacity = '0';
      
      const iframe = panel.querySelector('.v42-spotify iframe');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
      }

      setTimeout(() => {
        panel.style.display = 'none';
        playCta.style.display = 'block';
        setTimeout(() => {
          playCta.style.opacity = '1';
        }, 30);
      }, 250);
    }
  };

  function renderProductionProjectV42(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V42:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v42-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v42-ep-track-row ${activeClass}" onclick="window.playEPTrackV42('${trackEmbedUrl}', this)">
            <span class="v42-ep-track-number">${trackNum}</span>
            <span class="v42-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    let mainEmbedUrl = '';
    if (proj.type === 'ep' && proj.tracklist && proj.tracklist.length > 0) {
      mainEmbedUrl = getSpotifyEmbedUrl(proj.tracklist[0].spotify);
    } else {
      mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    }
    
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    view.innerHTML = `
      <div class="v42-production-stage">
        <!-- Title -->
        <div class="v42-title">
          <h3 class="v42-project-title">${proj.title}</h3>
        </div>

        <!-- Artist -->
        <div class="v42-artist">
          <div class="v42-project-artist">${proj.artist}</div>
        </div>

        <!-- Cover -->
        <div class="v42-cover">
          ${mediaHtml}
        </div>

        <!-- Metadata -->
        <div class="v42-metadata">
          ${metaString}
        </div>

        <!-- Counter -->
        <div class="v42-counter">
          ${activeNum} / ${totalNum}
        </div>

        <!-- Play CTA (Closed State) -->
        <div class="v42-play-cta" onclick="window.openListeningV42()">
          PLAY
        </div>

        <!-- Listening Panel (Open State) -->
        <div class="v42-listening-panel" style="display: none; opacity: 0;">
          <div class="v42-close-bar">
            <span class="v42-close-btn" onclick="window.closeListeningV42()">CLOSE &times;</span>
          </div>

          <!-- EP Tracklist -->
          ${proj.type === 'ep' ? `
            <div class="v42-tracklist">
              <div class="v42-ep-tracklist">${tracksHtml}</div>
            </div>
          ` : ''}

          <!-- Spotify player -->
          <div class="v42-spotify">
            ${playerHtml}
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v42-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v42-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV39 = function(trackUrl, element) {
    const iframe = element.closest('.v39-production-stage').querySelector('.v39-spotify iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v39-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV39(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V39:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v39-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v39-ep-track-row ${activeClass}" onclick="window.playEPTrackV39('${trackEmbedUrl}', this)">
            <span class="v39-ep-track-number">${trackNum}</span>
            <span class="v39-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    view.innerHTML = `
      <div class="v39-production-stage">
        <!-- Title -->
        <div class="v39-title">
          <h3 class="v39-project-title">${proj.title}</h3>
        </div>

        <!-- Artist -->
        <div class="v39-artist">
          <div class="v39-project-artist">${proj.artist}</div>
        </div>

        <!-- Cover -->
        <div class="v39-cover">
          ${mediaHtml}
        </div>

        <!-- Metadata -->
        <div class="v39-metadata">
          ${metaString}
        </div>

        <!-- EP Tracklist -->
        ${proj.type === 'ep' ? `
          <div class="v39-tracklist">
            <div class="v39-ep-tracklist">${tracksHtml}</div>
          </div>
        ` : ''}

        <!-- Spotify player -->
        <div class="v39-spotify">
          ${playerHtml}
        </div>

        <!-- Counter -->
        <div class="v39-counter">
          ${activeNum} / ${totalNum}
        </div>
      </div>
    `;

    // Rebind wheel navigation on the stage container
    const stageEl = view.querySelector('.v39-production-stage');
    if (stageEl) {
      stageEl.onwheel = (e) => {
        if (e.target.closest('.v39-ep-tracklist')) return;

        e.preventDefault();
        const delta = e.deltaY;
        const WHEEL_THRESHOLD = 25;

        if (Math.abs(delta) < WHEEL_THRESHOLD) return;

        if (delta > 0) {
          nextProductionProject();
        } else {
          previousProductionProject();
        }
      };
    }

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }

    // MANDATORY DEBUG CHECK (Section: MANDATORY DEBUG CHECK)
    setTimeout(() => {
      const stage = document.querySelector('.v39-production-stage');
      const cover = document.querySelector('.v39-cover');
      const player = document.querySelector('.v39-spotify');
      const tracks = document.querySelector('.v39-tracklist');

      console.table({
        stage: stage ? stage.getBoundingClientRect() : null,
        cover: cover ? cover.getBoundingClientRect() : null,
        player: player ? player.getBoundingClientRect() : null,
        tracks: tracks ? tracks.getBoundingClientRect() : null
      });
    }, 100);
  }

  window.playEPTrackV37 = function(trackUrl, element) {
    const iframe = element.closest('.v37-editorial-stage').querySelector('.v37-player-block iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v37-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV37(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V37:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v37-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v37-ep-track-row ${activeClass}" onclick="window.playEPTrackV37('${trackEmbedUrl}', this)">
            <span class="v37-ep-track-number">${trackNum}</span>
            <span class="v37-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    // Single metadata horizontal line format
    const metaString = `RAYAN MADE IT &mdash; ${proj.role.toUpperCase()} &middot; ${proj.year}${proj.mixing ? ` &middot; MIX ${proj.mixing.toUpperCase()}` : ''}${proj.mastering ? ` &middot; MASTER ${proj.mastering.toUpperCase()}` : ''}`;

    view.innerHTML = `
      <div class="v37-editorial-stage">
        <!-- 1. Title Block -->
        <div class="v37-title-block">
          <h3 class="v37-project-title">${proj.title}</h3>
          <div class="v37-project-artist">${proj.artist}</div>
        </div>

        <!-- 2. Cover Container -->
        <div class="v37-cover-container">
          ${mediaHtml}
        </div>

        <!-- 3. Fixed Metadata Line Below Cover -->
        <div class="v37-metadata-line">
          ${metaString}
        </div>

        <!-- 4. Fixed EP Tracklist Zone -->
        <div class="v37-tracklist-block">
          ${tracksHtml ? `<div class="v37-ep-tracklist">${tracksHtml}</div>` : ''}
        </div>

        <!-- 5. Fixed Spotify Player Block -->
        <div class="v37-player-block">
          ${playerHtml}
        </div>

        <!-- 6. Fixed Counter -->
        <div class="v37-editorial-counter">
          ${activeNum} / ${totalNum}
        </div>
      </div>
    `;

    // Rebind wheel navigation on the view container
    view.onwheel = (e) => {
      if (e.target.closest('.v37-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV36 = function(trackUrl, element) {
    const iframe = element.closest('.v36-listening-plate').querySelector('.v36-player-block iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v36-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV36(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V36:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v36-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v36-ep-track-row ${activeClass}" onclick="window.playEPTrackV36('${trackEmbedUrl}', this)">
            <span class="v36-ep-track-number">${trackNum}</span>
            <span class="v36-ep-track-name">${track.name}</span>
          </div>
        `;
      });
    }

    const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    view.innerHTML = `
      <div class="v36-listening-plate">
        <!-- LEFT: Project Identity -->
        <div class="v36-project-identity">
          <div class="v36-header-group">
            <div class="v36-project-title-block">
              <h3 class="v36-project-title">${proj.title}</h3>
              <div class="v36-project-artist">${proj.artist}</div>
            </div>
            <div class="v36-editorial-counter">${activeNum} / ${totalNum}</div>
          </div>
          
          <div class="v36-cover-container">
            ${mediaHtml}
          </div>
          
          <div class="v36-project-info-line">
            <span class="v36-role-label">RAYAN MADE IT &mdash; ${proj.role}</span>
            <span class="v36-credits-sep">&middot;</span>
            <span class="v36-credits-label">
              ${proj.year}
              ${proj.mixing ? ` &middot; Mix ${proj.mixing}` : ''}
              ${proj.mastering ? ` &middot; Master ${proj.mastering}` : ''}
            </span>
          </div>
        </div>

        <!-- RIGHT: Listening Zone -->
        <div class="v36-listening-zone ${proj.type === 'ep' ? 'v36-ep-listening' : 'v36-single-listening'}">
          <div class="v36-listening-header">LISTEN</div>
          
          <!-- EP Tracklist block -->
          ${proj.type === 'ep' ? `
            <div class="v36-tracklist-block">
              <div class="v36-ep-tracklist">${tracksHtml}</div>
            </div>
          ` : ''}
          
          <div class="v36-player-block">
            ${playerHtml}
          </div>
        </div>
      </div>
    `;

    // Rebind wheel navigation on the view container
    view.onwheel = (e) => {
      if (e.target.closest('.v36-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV35 = function(trackUrl, element) {
    const iframe = element.closest('.v34-editorial-stage').querySelector('.v34-player-block iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v34-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV35(index) {
    // V35 uses the same layout and structure of V34 (styled under .version-v34-plus)
    renderProductionProjectV34(index);
  }

  window.playEPTrackV34 = function(trackUrl, element) {
    const iframe = element.closest('.v34-editorial-stage').querySelector('.v34-player-block iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v34-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV34(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V34:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v34-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    let tracksHtml = '';
    if (proj.type === 'ep' && proj.tracklist) {
      proj.tracklist.forEach((track, tIdx) => {
        const trackNum = String(tIdx + 1).padStart(2, '0');
        const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
        const activeClass = tIdx === 0 ? 'is-active' : '';
        tracksHtml += `
          <div class="v34-ep-track-row ${activeClass}" onclick="window.playEPTrackV34('${trackEmbedUrl}', this)">
            <span class="v34-ep-track-number">${trackNum}</span>
            <span class="v34-ep-track-name">${track.name}</span>
            <span class="v34-ep-track-action">▶</span>
          </div>
        `;
      });
    }

    const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
    const playerHtml = mainEmbedUrl ? `
      <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    ` : '';

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    view.innerHTML = `
      <div class="v34-editorial-stage">
        <!-- 1. Title Block -->
        <div class="v34-title-block">
          <h3 class="v34-project-title">${proj.title}</h3>
          <div class="v34-project-artist">${proj.artist}</div>
        </div>

        <!-- 2. Cover Container -->
        <div class="v34-cover-container">
          ${mediaHtml}
        </div>

        <!-- 3. Role Block -->
        <div class="v34-role-block">
          <div class="v34-role-header">RAYAN MADE IT</div>
          <div class="v34-role-content">${proj.role}</div>
        </div>

        <!-- 4. Credits & Year Block -->
        <div class="v34-credits-block">
          <div class="v34-year">${proj.year}</div>
          ${proj.mixing ? `<div class="v34-credit-line">Mix &mdash; ${proj.mixing}</div>` : ''}
          ${proj.mastering ? `<div class="v34-credit-line">Master &mdash; ${proj.mastering}</div>` : ''}
        </div>

        <!-- 5. EP Tracklist Block -->
        <div class="v34-tracklist-block">
          ${tracksHtml}
        </div>

        <!-- 6. Spotify Player Block -->
        <div class="v34-player-block">
          ${playerHtml}
        </div>

        <!-- 7. Counter -->
        <div class="v34-editorial-counter">
          ${activeNum} / ${totalNum}
        </div>
      </div>
    `;

    // Rebind wheel navigation on the view container
    view.onwheel = (e) => {
      if (e.target.closest('.v34-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  window.playEPTrackV32 = function(trackUrl, element) {
    const iframe = element.closest('.v31-editorial-layout').querySelector('.v31-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v31-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV32(index) {
    // V32 uses the same layout and structure of V31 (which is styled under .version-v31-plus)
    renderProductionProjectV31(index);
  }

  window.playEPTrackV31 = function(trackUrl, element) {
    const iframe = element.closest('.v31-editorial-layout').querySelector('.v31-ep-spotify-player iframe');
    if (iframe) {
      iframe.src = trackUrl;
    }
    const rows = element.parentNode.querySelectorAll('.v31-ep-track-row');
    rows.forEach(r => r.classList.remove('is-active'));
    element.classList.add('is-active');
  };

  function renderProductionProjectV31(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project V31:", proj);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v31-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    const infoBlockHtml = `
      <div class="v31-project-info">
        <h3 class="v31-project-title">${proj.title}</h3>
        <div class="v31-project-artist">${proj.artist}</div>
        <div class="v31-project-role">Role &mdash; ${proj.role}</div>
        <div class="v31-project-year">${proj.year}</div>
        ${proj.mixing || proj.mastering ? `
          <div class="v31-project-credits">
            ${proj.mixing ? `<div>Mix &mdash; ${proj.mixing}</div>` : ''}
            ${proj.mastering ? `<div>Master &mdash; ${proj.mastering}</div>` : ''}
          </div>
        ` : ''}
      </div>
    `;

    let contentHtml = '';
    
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v31-spotify-player">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v31-project-info-column">
          ${infoBlockHtml}
          ${playerHtml}
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v31-ep-track-row ${activeClass}" onclick="window.playEPTrackV31('${trackEmbedUrl}', this)">
              <span class="v31-ep-track-number">${trackNum}</span>
              <span class="v31-ep-track-name">${track.name}</span>
              <span class="v31-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v31-ep-spotify-player">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v31-project-info-column v31-ep-info-column">
          ${infoBlockHtml}
          <div class="v31-ep-tracklist">
            ${tracksHtml}
          </div>
          ${playerHtml}
        </div>
      `;
    }

    const total = productionProjects.length;
    const activeNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    view.innerHTML = `
      <div class="v31-editorial-layout ${proj.type === 'ep' ? 'v31-ep-layout' : 'v31-single-layout'}">
        <div class="v31-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      
      <div class="v31-editorial-counter">
        ${activeNum} / ${totalNum}
      </div>
    `;

    // Rebind wheel navigation on the view container (since we don't have a rail anymore, we can navigate anywhere on the view using mousewheel)
    view.onwheel = (e) => {
      if (e.target.closest('.v31-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  function renderProductionProjectV29(index) {
    const view = document.getElementById('productionEditorialView');
    if (!view) return;

    const proj = productionProjects[index];
    if (!proj) return;

    // MANDATORY DEBUG (Section: DEBUG OBLIGATOIRE)
    console.log("Production project:", proj);
    console.log("proj.title:", proj.title);
    console.log("proj.artist:", proj.artist);
    console.log("proj.role:", proj.role);
    console.log("proj.year:", proj.year);
    console.log("proj.mixing:", proj.mixing);
    console.log("proj.mastering:", proj.mastering);

    const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
    const useSpotifyCover = proj.spotify && (
      __rmiVersionMatch() && 
      parseInt(__rmiVersionMatch()[1], 10) >= 3
    );
    const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
    if (useSpotifyCover) {
      loadSpotifyVisualAsync(proj.spotify, proj.title);
    }

    const mediaHtml = `<img class="v23-cover-img" src="${resolvedSrc}" alt="${proj.title}" data-proj-title="${proj.title}">`;

    // Requested DOM Structure (Section: STRUCTURE DE RENDU)
    const infoBlockHtml = `
      <div class="production-project-info">
        <div class="production-project-title">
          ${proj.title}
        </div>
        <div class="production-project-artist">
          ${proj.artist}
        </div>
        <div class="production-project-role">
          Role &mdash; ${proj.role}
        </div>
        <div class="production-project-year">
          ${proj.year}
        </div>
        <div class="production-project-credits">
          ${proj.mixing ? `<div>Mix &mdash; ${proj.mixing}</div>` : ''}
          ${proj.mastering ? `<div>Master &mdash; ${proj.mastering}</div>` : ''}
        </div>
      </div>
    `;

    let contentHtml = '';
    
    if (proj.type === 'single') {
      const embedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = embedUrl ? `
        <div class="v23-spotify-player v27-fade-item" style="animation-delay: 0ms; opacity: 0; margin-bottom: 0.8rem;">
          <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info">
          ${playerHtml}
          <div class="v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            ${infoBlockHtml}
          </div>
        </div>
      `;
    } else if (proj.type === 'ep') {
      let tracksHtml = '';
      if (proj.tracklist) {
        proj.tracklist.forEach((track, tIdx) => {
          const trackNum = String(tIdx + 1).padStart(2, '0');
          const trackEmbedUrl = getSpotifyEmbedUrl(track.spotify);
          const activeClass = tIdx === 0 ? 'is-active' : '';
          tracksHtml += `
            <div class="v23-ep-track-row ${activeClass}" onclick="window.playEPTrackV29('${trackEmbedUrl}', this)">
              <span class="v23-ep-track-number">${trackNum}</span>
              <span class="v23-ep-track-name">${track.name}</span>
              <span class="v23-ep-track-action">▶</span>
            </div>
          `;
        });
      }

      const mainEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
      const playerHtml = mainEmbedUrl ? `
        <div class="v23-ep-spotify-player v27-fade-item" style="animation-delay: 240ms; opacity: 0;">
          <iframe src="${mainEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      ` : '';

      contentHtml = `
        <div class="v23-project-info v23-ep-layout">
          <div class="v27-fade-item" style="animation-delay: 0ms; opacity: 0;">
            ${infoBlockHtml}
          </div>
          <div class="v23-ep-tracklist v27-fade-item" style="animation-delay: 80ms; opacity: 0;">
            ${tracksHtml}
          </div>
          ${playerHtml}
        </div>
      `;
    }

    // Index rail (Section 5)
    let indexHtml = '';
    const total = productionProjects.length;
    productionProjects.forEach((p, idx) => {
      const activeClass = (idx === index) ? 'is-active' : '';
      const numStr = String(idx + 1); // 1-based (Section 5)
      const numStyle = (idx === index) ? 'transform: translateY(0);' : 'transform: translateY(4px);';
      indexHtml += `
        <span class="project-index-item ${activeClass}" data-index="${idx}" style="${numStyle} width: 24px; text-align: center; display: inline-block;" onclick="goToProductionProject(${idx})">${numStr}</span>
      `;
    });

    view.innerHTML = `
      <div class="v23-editorial-layout">
        <div class="v23-cover-container">
          ${mediaHtml}
        </div>
        ${contentHtml}
      </div>
      
      <div class="v26-editorial-rail" style="position: relative; width: fit-content; margin: 3.5rem auto 0 auto;">
        <div class="v26-index-numbers">
          ${indexHtml}
        </div>
        <div class="v26-progress-track" style="position: relative; height: 1px; width: 100%; margin-top: 0.4rem;">
          <div class="project-index-indicator" style="position: absolute; top: -3px; width: 7px; height: 7px; border-radius: 50%; background: #171717; transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);"></div>
        </div>
      </div>
    `;

    // Mathematical Dot Alignment (Section 6)
    const activeItem = view.querySelector(`.project-index-item[data-index="${index}"]`);
    const indicator = view.querySelector('.project-index-indicator');
    if (activeItem && indicator) {
      setTimeout(() => {
        const itemRect = activeItem.getBoundingClientRect();
        const parentRect = activeItem.parentElement.getBoundingClientRect();
        const center = itemRect.left + (itemRect.width / 2) - parentRect.left - 3.5;
        indicator.style.transform = `translateX(${center}px)`;
      }, 0);
    }

    // Rebind V26 drag & wheel navigation
    const rail = view.querySelector('.v26-editorial-rail');
    if (rail) {
      let isDragging = false;
      let startX = 0;
      let dragX = 0;
      const DRAG_THRESHOLD = 50;

      rail.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragX = 0;
        rail.setPointerCapture(e.pointerId);
      });

      rail.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragX = e.clientX - startX;
      });

      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        rail.releasePointerCapture(e.pointerId);

        if (dragX > DRAG_THRESHOLD) {
          nextProductionProject();
        } else if (dragX < -DRAG_THRESHOLD) {
          previousProductionProject();
        }
      };

      rail.addEventListener('pointerup', endDrag);
      rail.addEventListener('pointercancel', endDrag);
    }

    view.onwheel = (e) => {
      if (e.target.closest('.v23-ep-tracklist')) return;

      e.preventDefault();
      const delta = e.deltaY;
      const WHEEL_THRESHOLD = 25;

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (delta > 0) {
        nextProductionProject();
      } else {
        previousProductionProject();
      }
    };

    const counterEl = document.getElementById('projectCounter');
    if (counterEl) {
      const activeNum = String(index + 1).padStart(3, '0');
      const totalNum = String(productionProjects.length).padStart(3, '0');
      counterEl.textContent = `${activeNum} of ${totalNum}`;
    }
  }

  function renderStack(category) {
    const isProd = (category === 'production');
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

    if (isProd && currentVersion >= 86) {
      renderProductionProjectV86(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 76) {
      renderProductionProjectV74(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 75) {
      renderProductionProjectV75(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 74) {
      renderProductionProjectV74(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 73) {
      renderProductionProjectV73(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 71) {
      renderProductionProjectV71(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 70) {
      renderProductionProjectV70(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 69) {
      renderProductionProjectV69(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 68) {
      renderProductionProjectV68(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 67) {
      renderProductionProjectV67(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 66) {
      renderProductionProjectV66(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 65) {
      renderProductionProjectV65(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 64) {
      renderProductionProjectV64(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 63) {
      renderProductionProjectV63(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 62) {
      renderProductionProjectV62(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 61) {
      renderProductionProjectV61(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 60) {
      renderProductionProjectV60(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 59) {
      renderProductionProjectV59(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 58) {
      renderProductionProjectV58(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 57) {
      renderProductionProjectV57(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 56) {
      renderProductionProjectV56(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 55) {
      renderProductionProjectV55(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 54) {
      renderProductionProjectV54(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 53) {
      renderProductionProjectV53(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 52) {
      renderProductionProjectV52(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 51) {
      renderProductionProjectV51(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 50) {
      renderProductionProjectV50(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 49) {
      renderProductionProjectV49(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 48) {
      renderProductionProjectV48(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 47) {
      renderProductionProjectV47(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 46) {
      renderProductionProjectV46(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 45) {
      renderProductionProjectV45(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 44) {
      renderProductionProjectV44(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 43) {
      renderProductionProjectV43(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 42) {
      renderProductionProjectV42(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 41) {
      renderProductionProjectV39(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 40) {
      renderProductionProjectV39(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 39) {
      renderProductionProjectV39(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 38) {
      renderProductionProjectV37(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 37) {
      renderProductionProjectV37(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 35) {
      renderProductionProjectV35(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 34) {
      renderProductionProjectV34(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 33) {
      renderProductionProjectV32(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 32) {
      renderProductionProjectV32(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 31) {
      renderProductionProjectV31(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 29) {
      renderProductionProjectV29(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 28) {
      renderProductionProjectV28(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 27) {
      renderProductionProjectV27(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 26) {
      renderProductionProjectV26(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 25) {
      renderProductionProjectV25(activeProdIndex);
      return;
    }
    if (isProd && currentVersion >= 23) {
      renderProductionProjectV23(activeProdIndex);
      return;
    }

    const containerId = isProd ? 'productionStack' : 'soundToImageStack';
    const stackContainer = document.getElementById(containerId);
    if (!stackContainer) return;

    const list = isProd ? productionProjects : soundToImageProjects;
    const activeIdx = isProd ? activeProdIndex : activeSoundIndex;
    const total = list.length;

    // Check if we already have the cards in the DOM
    let cards = stackContainer.querySelectorAll('.stack-card');
    const isVersionV3OrHigher = versionMatch && parseInt(versionMatch[1], 10) >= 3;
    const needsBuild = (cards.length !== total || (isProd && currentVersion >= 15));

    if (isProd && currentVersion >= 16) {
      const activeProj = list[activeIdx];
      const isEpActive = (activeProj && activeProj.type === 'ep');
      if (isEpActive) {
        stackContainer.classList.add('stack-has-ep-active');
      } else {
        stackContainer.classList.remove('stack-has-ep-active');
      }
    }

    if (needsBuild) {
      stackContainer.innerHTML = '';
      
      // Empty external player and info containers on Production V15+
      if (isProd && currentVersion >= 15) {
        const leftPlayer = document.getElementById('productionLeftPlayer');
        const infoContainer = document.getElementById('productionInfo');
        if (leftPlayer) leftPlayer.innerHTML = '';
        if (infoContainer) infoContainer.innerHTML = '';
      }

      list.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'stack-card';
        card.setAttribute('data-card-index', idx);

        const diff = (idx - activeIdx + total) % total;
        const useSpotifyCover = isProd && proj.spotify && (
          isVersionV3OrHigher || 
          window.location.pathname.endsWith('index.html')
        );

        const isCanvasAvailable = proj.canvas;
        const isCanvasActive = isCanvasAvailable && diff === 0;
        const isMoranVideo = (proj.title === "The dream I never had" && proj.video);
        
        if (isProd && currentVersion >= 15) {
          // V15 Stack of Artworks layout
          const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
          const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
          
          let mediaHtml = '';
          if (isCanvasActive) {
            mediaHtml = `<video src="${proj.canvas}" autoplay muted loop playsinline style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; border-radius: 4px;"></video>`;
          } else {
            mediaHtml = `<img class="stack-card-img" src="${resolvedSrc}" alt="${proj.title}" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; border-radius: 4px;">`;
            if (useSpotifyCover) {
              loadSpotifyVisualAsync(proj.spotify, proj.title);
            }
          }

          const isEp = proj.type === 'ep';
          if (isProd && currentVersion >= 19 && currentVersion < 21) {
            if (isEp) {
              card.classList.add('is-ep-card');
            } else {
              card.classList.remove('is-ep-card');
            }
          } else {
            card.classList.remove('is-ep-card');
          }

          if (diff === 0) {
            const isVersionV22OrHigher = currentVersion >= 22;
            const isVersionV21Only = currentVersion === 21;
            const isVersionV19OrHigher = currentVersion >= 19;
            const isVersionV16OrHigher = currentVersion >= 16;

            if (isEp && isVersionV22OrHigher) {
              card.innerHTML = renderEPLayout(proj, mediaHtml, useSpotifyCover);
            } else if (isEp && isVersionV21Only) {
              card.innerHTML = `
                <div class="v15-card-content" style="width: 100%;">
                  <div class="v15-media-wrapper" style="width: 100%; aspect-ratio: 1/1; position: relative;">
                    ${mediaHtml}
                  </div>
                </div>
              `;
            } else if (isEp && isVersionV19OrHigher) {
              card.innerHTML = renderEPLayout(proj, mediaHtml, useSpotifyCover);
            } else if (isEp && isVersionV16OrHigher) {
              card.innerHTML = renderEPLayoutV18(proj, mediaHtml, useSpotifyCover);
            } else {
              card.innerHTML = renderSingleLayout(proj, mediaHtml, useSpotifyCover);
            }
          } else {
            // Background Cards: Contains COVER visual only (to optimize load performance)
            card.innerHTML = `
              <div class="v15-card-content" style="width: 100%;">
                <div class="v15-media-wrapper" style="width: 100%; aspect-ratio: 1/1; position: relative;">
                  ${mediaHtml}
                </div>
              </div>
            `;
          }
        } else {
          // Classic layout
          let mediaHtml = '';
          if (isCanvasActive) {
            mediaHtml = `
              <div class="stack-card-inner">
                <video src="${proj.canvas}" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
              </div>
            `;
          } else if (isMoranVideo && diff === 0) {
            mediaHtml = `
              <div class="stack-card-inner">
                <video src="${proj.video}" poster="${proj.cover}" controls autoplay muted style="width: 100%; height: 100%; object-fit: cover;"></video>
              </div>
            `;
          } else {
            const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
            const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
            mediaHtml = `
              <div class="stack-card-inner">
                <img class="stack-card-img" data-proj-title="${proj.title}" src="${resolvedSrc}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
              </div>
            `;
            if (useSpotifyCover) {
              loadSpotifyVisualAsync(proj.spotify, proj.title);
            }
          }
          card.innerHTML = mediaHtml;
        }

        stackContainer.appendChild(card);
      });
      cards = stackContainer.querySelectorAll('.stack-card');
    }

    // Now update positions and styles
    cards.forEach((card) => {
      const idx = parseInt(card.getAttribute('data-card-index'), 10);
      const proj = list[idx];
      const diff = (idx - activeIdx + total) % total;

      const useSpotifyCover = isProd && proj.spotify && (
        isVersionV3OrHigher || 
        window.location.pathname.endsWith('index.html')
      );

      // Toggle Moran Moradi video vs image play states
      const isMoranVideo = (proj.title === "The dream I never had" && proj.video);
      const isCanvasAvailable = proj.canvas;
      const isCanvasActive = isCanvasAvailable && diff === 0;
      const inner = card.querySelector('.stack-card-inner');

      if (inner) {
        if (isCanvasAvailable) {
          const hasVideo = inner.querySelector('video');
          if (isCanvasActive && !hasVideo) {
            inner.innerHTML = `<video src="${proj.canvas}" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>`;
          } else if (!isCanvasActive && hasVideo) {
            const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
            const resolvedSrc = (useSpotifyCover && spotifyCoverCache[proj.spotify]) || fallbackUrl;
            inner.innerHTML = `<img class="stack-card-img" data-proj-title="${proj.title}" src="${resolvedSrc}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
          }
        } else if (isMoranVideo) {
          const hasVideo = inner.querySelector('video');
          if (diff === 0 && !hasVideo) {
            inner.innerHTML = `<video src="${proj.video}" poster="${proj.cover}" controls autoplay muted style="width: 100%; height: 100%; object-fit: cover;"></video>`;
          } else if (diff !== 0 && hasVideo) {
            const fallbackUrl = proj.cover || 'assets/fallback-cover.jpg';
            inner.innerHTML = `<img class="stack-card-img" data-proj-title="${proj.title}" src="${fallbackUrl}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
          }
        }
      }

      // Card depths translate & scale offsets
      const isCardV15OrHigher = currentVersion >= 15;
      const isCardV14OrHigher = currentVersion >= 14;
      const isCardV13OrHigher = currentVersion >= 13;
      const isCardV12OrHigher = currentVersion >= 12;
      const isCardV10OrHigher = currentVersion >= 10;
      const isCardV9OrHigher = currentVersion >= 9;
      const isCardV5OrHigher = currentVersion >= 5;

      let translateX = diff * 16;
      let translateY = -diff * 16;
      let translateZ = -diff * 20;
      let scale = 1 - (diff * 0.025);
      let opacity = 1;
      let zIndex = 10 - diff;
      let pointerEvents = 'auto';

      if (isCardV15OrHigher) {
        // V15 Stack of Artworks layout
        // translateY: 0, -18px, -34px, -48px
        // translateX: 0
        // scale: 1, 0.99, 0.98, 0.97
        // opacity: 1, 0.75, 0.45, 0.20
        translateX = 0;
        translateY = diff === 0 ? 0 : diff === 1 ? -18 : diff === 2 ? -34 : -48;
        translateZ = -diff * 2;
        scale = diff === 0 ? 1 : diff === 1 ? 0.99 : diff === 2 ? 0.98 : 0.97;

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.75;
        else if (diff === 2) opacity = 0.45;
        else if (diff === 3) opacity = 0.20;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 100 - diff;
      } else if (isCardV14OrHigher) {
        // V14 exact stack hierarchy values
        translateX = diff === 0 ? 0 : diff === 1 ? 18 : diff === 2 ? 34 : 48;
        translateY = diff === 0 ? 0 : diff === 1 ? -14 : diff === 2 ? -27 : -39;
        translateZ = -diff * 2;
        scale = diff === 0 ? 1 : diff === 1 ? 0.985 : diff === 2 ? 0.97 : 0.955;

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.65;
        else if (diff === 2) opacity = 0.38;
        else if (diff === 3) opacity = 0.16;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 100 - diff;
      } else if (isCardV13OrHigher) {
        // V13 exact stack hierarchy values
        translateX = diff === 0 ? 0 : diff === 1 ? 12 : diff === 2 ? 24 : 36;
        translateY = diff === 0 ? 0 : diff === 1 ? -10 : diff === 2 ? -20 : -30;
        translateZ = -diff * 2;
        scale = diff === 0 ? 1 : diff === 1 ? 0.97 : diff === 2 ? 0.94 : 0.91;

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.65;
        else if (diff === 2) opacity = 0.38;
        else if (diff === 3) opacity = 0.15;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 100 - diff;
      } else if (isCardV12OrHigher) {
        // V12 exact subtle stacking values
        translateX = diff === 0 ? 0 : diff === 1 ? 8 : diff === 2 ? 14 : 19;
        translateY = diff === 0 ? 0 : diff === 1 ? -8 : diff === 2 ? -14 : -19;
        translateZ = -diff * 2;
        scale = diff === 0 ? 1 : diff === 1 ? 0.96 : diff === 2 ? 0.92 : 0.88;

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.65;
        else if (diff === 2) opacity = 0.40;
        else if (diff === 3) opacity = 0.15;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 100 - diff;
      } else if (isCardV10OrHigher) {
        // V10 exact subtle stacking values
        translateX = diff === 0 ? 0 : diff === 1 ? 10 : diff === 2 ? 18 : 25;
        translateY = diff === 0 ? 0 : diff === 1 ? -8 : diff === 2 ? -14 : -19;
        translateZ = -diff * 2;
        scale = diff === 0 ? 1 : diff === 1 ? 0.985 : diff === 2 ? 0.97 : 0.955;

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.75;
        else if (diff === 2) opacity = 0.45;
        else if (diff === 3) opacity = 0.20;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 100 - diff;
      } else if (isCardV9OrHigher) {
        translateX = diff * 22;
        translateY = -diff * 22;
        translateZ = -diff * 2;
        scale = 1 - (diff * 0.05);

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.85;
        else if (diff === 2) opacity = 0.65;
        else if (diff === 3) opacity = 0.45;
        else if (diff === 4) opacity = 0.20;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 10 - diff;
      } else if (isCardV5OrHigher) {
        translateX = diff * 32;
        translateY = -diff * 22;
        translateZ = -diff * 40;
        scale = 1 - (diff * 0.1);

        if (diff === 0) opacity = 1;
        else if (diff === 1) opacity = 0.7;
        else if (diff === 2) opacity = 0.4;
        else if (diff === 3) opacity = 0.15;
        else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 10 - diff;
      } else {
        if (diff === 0) {
          opacity = 1;
        } else if (diff === 1) {
          opacity = 0.7;
        } else if (diff === 2) {
          opacity = 0.45;
        } else if (diff === 3) {
          opacity = 0.25;
        } else if (diff === 4) {
          opacity = 0.12;
        } else {
          opacity = 0;
          pointerEvents = 'none';
        }
        zIndex = 10 - diff;
      }

      // Apply transforms ONLY if not currently running the CSS animation
      if (!card.classList.contains('send-to-back') && !card.classList.contains('bring-to-front')) {
        card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
        card.style.pointerEvents = pointerEvents;
      }

      // Add click listener if needsBuild was true
      if (needsBuild) {
        card.addEventListener('click', (e) => {
          if (e.target.closest('video') || e.target.tagName === 'VIDEO') return;
          e.preventDefault();
          if (diff === 0) {
            navigateStack(category, 'next');
          } else {
            setStackActive(category, idx);
          }
        });
      }
    });

    renderStackInfo(category);
  }

  function navigateStack(category, direction) {
    const isProd = (category === 'production');
    const list = isProd ? productionProjects : soundToImageProjects;
    const total = list.length;
    let activeIdx = isProd ? activeProdIndex : activeSoundIndex;
    const prevActiveIdx = activeIdx;

    if (direction === 'next') {
      activeIdx = (activeIdx + 1) % total;
    } else {
      activeIdx = (activeIdx - 1 + total) % total;
    }

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    const isV10OrHigher = currentVersion >= 10;
    const animDuration = currentVersion >= 12 ? 400 : 650;

    if (isProd && isV10OrHigher) {
      const containerId = 'productionStack';
      const stackContainer = document.getElementById(containerId);
      if (stackContainer) {
        const prevCard = stackContainer.querySelector(`[data-card-index="${prevActiveIdx}"]`);
        const nextActiveCard = stackContainer.querySelector(`[data-card-index="${activeIdx}"]`);

        if (direction === 'next' && prevCard) {
          prevCard.classList.add('send-to-back');
          setTimeout(() => {
            prevCard.classList.remove('send-to-back');
            renderStack(category);
          }, animDuration);
        } else if (direction === 'prev' && nextActiveCard) {
          nextActiveCard.classList.add('bring-to-front');
          setTimeout(() => {
            nextActiveCard.classList.remove('bring-to-front');
            renderStack(category);
          }, animDuration);
        }
      }
    }

    if (isProd) {
      activeProdIndex = activeIdx;
    } else {
      activeSoundIndex = activeIdx;
    }

    renderStack(category);
  }

  function setStackActive(category, index) {
    const isProd = (category === 'production');
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    const isV10OrHigher = currentVersion >= 10;
    const animDuration = currentVersion >= 12 ? 400 : 650;

    if (isProd && isV10OrHigher) {
      const total = productionProjects.length;
      const prevActiveIdx = activeProdIndex;
      const containerId = 'productionStack';
      const stackContainer = document.getElementById(containerId);

      if (stackContainer) {
        const prevCard = stackContainer.querySelector(`[data-card-index="${prevActiveIdx}"]`);
        const nextActiveCard = stackContainer.querySelector(`[data-card-index="${index}"]`);

        if (index === (prevActiveIdx + 1) % total && prevCard) {
          prevCard.classList.add('send-to-back');
          setTimeout(() => {
            prevCard.classList.remove('send-to-back');
            renderStack(category);
          }, animDuration);
        } else if (index === (prevActiveIdx - 1 + total) % total && nextActiveCard) {
          nextActiveCard.classList.add('bring-to-front');
          setTimeout(() => {
            nextActiveCard.classList.remove('bring-to-front');
            renderStack(category);
          }, animDuration);
        }
      }
    }

    if (isProd) {
      activeProdIndex = index;
    } else {
      activeSoundIndex = index;
    }
    renderStack(category);
  }

  function renderStackInfo(category) {
    const isProd = (category === 'production');
    const infoContainer = document.getElementById(isProd ? 'productionInfo' : 'soundToImageInfo');
    if (!infoContainer) return;

    const list = isProd ? productionProjects : soundToImageProjects;
    const activeIdx = isProd ? activeProdIndex : activeSoundIndex;
    const proj = list[activeIdx];
    if (!proj) return;

    infoContainer.classList.add('fade-out');

    setTimeout(() => {
      let html = '';

      if (isProd) {
        const infoVersionMatch = __rmiVersionMatch();
        const currentVersion = infoVersionMatch ? parseInt(infoVersionMatch[1], 10) : 4;
        const isInfoV5OrHigher = currentVersion >= 5;

        const isEp = proj.type === 'ep';
        const isV22OrHigher = currentVersion >= 22;
        const isV21Only = currentVersion === 21;

        if (isEp && isV22OrHigher) {
          // Clear left player (Single spotify embed below cover)
          const leftPlayer = document.getElementById('productionLeftPlayer');
          if (leftPlayer) leftPlayer.innerHTML = '';

          // Remove production-has-ep class (not needed for attached stack layout)
          const stackLayout = document.querySelector('.portfolio-stack-layout');
          if (stackLayout) {
            stackLayout.classList.remove('production-has-ep');
          }

          // Render normal metadata in #productionInfo (same as single layout metadata hierarchy)
          if (isInfoV5OrHigher) {
            const isV9OrHigher = currentVersion >= 9;
            if (isV9OrHigher) {
              html += `
                <div class="v9-role-block v6-cascade-item" style="animation-delay: 0ms;">
                  <span class="v9-role-company">RAYAN MADE IT</span>
                  <span class="v9-role-title">${proj.role}</span>
                </div>
              `;

              const baseDelay = 100;
              html += `
                <div class="v9-project-info v6-cascade-item" style="animation-delay: ${baseDelay}ms;">
                  <div class="v9-info-main">
                    <span class="v9-info-artist">${proj.artist}</span>
                    <span class="v9-info-title">${proj.title}</span>
                    <span class="v9-info-year">${proj.year}</span>
                  </div>
                  
                  ${proj.mixing || proj.mastering ? `
                    <div class="v9-info-credits">
                      ${proj.mixing ? `<div class="v9-credit-line">MIX — <strong>${proj.mixing}</strong></div>` : ''}
                      ${proj.mastering ? `<div class="v9-credit-line">MASTER — <strong>${proj.mastering}</strong></div>` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }
          }
        } else if (isEp && isV21Only) {
          // Clear left player (Single spotify embed below cover)
          const leftPlayer = document.getElementById('productionLeftPlayer');
          if (leftPlayer) leftPlayer.innerHTML = '';

          // Add production-has-ep class to horizontal layout
          const stackLayout = document.querySelector('.portfolio-stack-layout');
          if (stackLayout) {
            stackLayout.classList.add('production-has-ep');
          }

          let tracksHtml = '';
          if (proj.tracklist) {
            proj.tracklist.forEach((track, index) => {
              const number = String(index + 1).padStart(2, '0');
              tracksHtml += `
                <div class="ep-track-row">
                  <span class="ep-track-number">${number}</span>
                  <span class="ep-track-name">${track.name}</span>
                </div>
              `;
            });
          }

          const embedUrl = getSpotifyEmbedUrl(proj.spotify);
          const spotifyEmbedHtml = embedUrl ? `
            <div class="ep-spotify-player">
              <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          ` : '';

          html = `
            <div class="ep-track-panel">
              <div class="ep-track-panel-header">
                <div class="ep-project-title">${proj.title}</div>
                <div class="ep-project-subtitle">RAYAN MADE IT &mdash; ${proj.role}</div>
                <div class="ep-project-meta">${proj.year} · EP</div>
                ${proj.mixing || proj.mastering ? `
                  <div class="ep-project-credits">
                    ${proj.mixing ? `<div>MIX — <strong>${proj.mixing}</strong></div>` : ''}
                    ${proj.mastering ? `<div>MASTER — <strong>${proj.mastering}</strong></div>` : ''}
                  </div>
                ` : ''}
              </div>
              <div class="ep-tracklist">
                ${tracksHtml}
              </div>
              ${spotifyEmbedHtml}
            </div>
          `;
        } else {
          // Remove EP class for Singles
          const stackLayout = document.querySelector('.portfolio-stack-layout');
          if (stackLayout) {
            stackLayout.classList.remove('production-has-ep');
          }

          if (isInfoV5OrHigher) {
          const isV9OrHigher = currentVersion >= 9;
          const isV7Or8 = currentVersion === 7 || currentVersion === 8;
          const isV6 = currentVersion === 6;

          if (isV9OrHigher) {
            // Render player below cover on the left
            const leftPlayer = document.getElementById('productionLeftPlayer');
            if (leftPlayer) {
              let playerHtml = '';
              if (proj.spotify) {
                const embedUrl = getSpotifyEmbedUrl(proj.spotify);
                if (embedUrl) {
                  playerHtml = `<iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px; border: none;"></iframe>`;
                }
              }
              leftPlayer.innerHTML = playerHtml;
            }

            // Small independent block for Rayan Made It's role
            html += `
              <div class="v9-role-block v6-cascade-item" style="animation-delay: 0ms;">
                <span class="v9-role-company">RAYAN MADE IT</span>
                <span class="v9-role-title">${proj.role}</span>
              </div>
            `;

            const isEp = proj.type === 'ep';
            if (isEp && proj.tracklist) {
              html += `<div class="v6-tracklist-container v6-cascade-item" style="animation-delay: 100ms;">`;
              proj.tracklist.forEach((track, tIdx) => {
                const trackNum = String(tIdx + 1).padStart(2, '0');
                html += `
                  <div class="v6-track-row" style="margin-bottom:0.75rem;">
                    <button class="v6-track-btn" id="v6-track-btn-${tIdx}" onclick="toggleV6TrackPlayer(${tIdx}, '${track.spotify}')">
                      <span>${trackNum} &mdash; ${track.name}</span>
                      <span class="v6-track-indicator">&#9656; Listen</span>
                    </button>
                    ${track.youtube ? `
                      <a href="${track.youtube}" target="_blank" class="v6-track-clip-link">Watch Clip &rarr;</a>
                    ` : ''}
                    <div class="v6-track-player-embed" id="v6-track-embed-${tIdx}"></div>
                  </div>
                `;
              });
              html += `</div>`;
            }

            const baseDelay = isEp ? 200 : 100;
            html += `
              <div class="v9-project-info v6-cascade-item" style="animation-delay: ${baseDelay}ms;">
                <div class="v9-info-main">
                  <span class="v9-info-artist">${proj.artist}</span>
                  <span class="v9-info-title">${proj.title}</span>
                  <span class="v9-info-year">${proj.year}</span>
                </div>
                
                ${proj.mixing || proj.mastering ? `
                  <div class="v9-info-credits">
                    ${proj.mixing ? `<div class="v9-credit-line">MIX — <strong>${proj.mixing}</strong></div>` : ''}
                    ${proj.mastering ? `<div class="v9-credit-line">MASTER — <strong>${proj.mastering}</strong></div>` : ''}
                  </div>
                ` : ''}
                
                ${proj.youtube && !isEp ? `
                  <div class="v9-youtube-wrapper">
                    <a href="${proj.youtube}" target="_blank" class="v6-track-clip-link">Watch Music Video &rarr;</a>
                  </div>
                ` : ''}
              </div>
            `;
          } else if (isV7Or8) {
            // Render player below cover on the left
            const leftPlayer = document.getElementById('productionLeftPlayer');
            if (leftPlayer) {
              let playerHtml = '';
              if (proj.spotify) {
                const embedUrl = getSpotifyEmbedUrl(proj.spotify);
                if (embedUrl) {
                  playerHtml = `<iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px; border: none;"></iframe>`;
                }
              }
              leftPlayer.innerHTML = playerHtml;
            }

            // Right column HTML (Title + Cascade meta-lines)
            html += `<h3 class="v7-info-title v6-cascade-item" style="animation-delay: 0ms;">${proj.title}</h3>`;
            
            const isEp = proj.type === 'ep';
            if (isEp && proj.tracklist) {
              html += `<div class="v6-tracklist-container v6-cascade-item" style="animation-delay: 100ms;">`;
              proj.tracklist.forEach((track, tIdx) => {
                const trackNum = String(tIdx + 1).padStart(2, '0');
                html += `
                  <div class="v6-track-row" style="margin-bottom:0.75rem;">
                    <button class="v6-track-btn" id="v6-track-btn-${tIdx}" onclick="toggleV6TrackPlayer(${tIdx}, '${track.spotify}')">
                      <span>${trackNum} &mdash; ${track.name}</span>
                      <span class="v6-track-indicator">&#9656; Listen</span>
                    </button>
                    ${track.youtube ? `
                      <a href="${track.youtube}" target="_blank" class="v6-track-clip-link">Watch Clip &rarr;</a>
                    ` : ''}
                    <div class="v6-track-player-embed" id="v6-track-embed-${tIdx}"></div>
                  </div>
                `;
              });
              html += `</div>`;
            }

            const baseDelay = isEp ? 200 : 100;
            html += `
              <div class="v7-metadata-container">
                <div class="v7-meta-line v6-cascade-item" style="animation-delay: ${baseDelay}ms; font-weight: 500; color: #F5F4F0;">${proj.artist}</div>
                <div class="v7-meta-line v6-cascade-item" style="animation-delay: ${baseDelay + 100}ms; color: rgba(245, 244, 240, 0.7);">${proj.role}</div>
                <div class="v7-meta-line v6-cascade-item" style="animation-delay: ${baseDelay + 200}ms; color: rgba(245, 244, 240, 0.5);">${proj.year}</div>
                
                ${proj.mixing || proj.mastering ? `<div class="v7-meta-spacer v6-cascade-item" style="animation-delay: ${baseDelay + 250}ms; height: 1rem;"></div>` : ''}
                
                ${proj.mixing ? `
                  <div class="v7-meta-line v6-cascade-item" style="animation-delay: ${baseDelay + 300}ms; color: rgba(245, 244, 240, 0.45);">Mixing — <strong>${proj.mixing}</strong></div>
                ` : ''}
                ${proj.mastering ? `
                  <div class="v7-meta-line v6-cascade-item" style="animation-delay: ${baseDelay + 400}ms; color: rgba(245, 244, 240, 0.45);">Mastering — <strong>${proj.mastering}</strong></div>
                ` : ''}
                
                ${proj.youtube && !isEp ? `
                  <div class="v6-cascade-item" style="animation-delay: ${baseDelay + 500}ms; margin-top: 1rem;">
                    <a href="${proj.youtube}" target="_blank" class="v6-track-clip-link">Watch Music Video &rarr;</a>
                  </div>
                ` : ''}
              </div>
            `;
          } else if (isV6) {
            // Render player below cover on the left
            const leftPlayer = document.getElementById('productionLeftPlayer');
            if (leftPlayer) {
              let playerHtml = '';
              if (proj.spotify) {
                const embedUrl = getSpotifyEmbedUrl(proj.spotify);
                if (embedUrl) {
                  playerHtml = `<iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px;"></iframe>`;
                }
              }
              leftPlayer.innerHTML = playerHtml;
            }

            // Right column HTML with Cascade Animation delays (V6)
            html += `<h3 class="v6-info-title v6-cascade-item" style="animation-delay: 0ms;">${proj.title}</h3>`;
            html += `<p class="v6-info-artist v6-cascade-item" style="animation-delay: 100ms;">By ${proj.artist}</p>`;

            const isEp = proj.type === 'ep';
            if (isEp && proj.tracklist) {
              html += `<div class="v6-tracklist-container v6-cascade-item" style="animation-delay: 200ms;">`;
              proj.tracklist.forEach((track, tIdx) => {
                const trackNum = String(tIdx + 1).padStart(2, '0');
                html += `
                  <div class="v6-track-row" style="margin-bottom:0.75rem;">
                    <button class="v6-track-btn" id="v6-track-btn-${tIdx}" onclick="toggleV6TrackPlayer(${tIdx}, '${track.spotify}')">
                      <span>${trackNum} &mdash; ${track.name}</span>
                      <span class="v6-track-indicator">&#9656; Listen</span>
                    </button>
                    ${track.youtube ? `
                      <a href="${track.youtube}" target="_blank" class="v6-track-clip-link">Watch Clip &rarr;</a>
                    ` : ''}
                    <div class="v6-track-player-embed" id="v6-track-embed-${tIdx}"></div>
                  </div>
                `;
              });
              html += `</div>`;
            }

            // Metadata & Credits at the bottom
            const metaDelay = isEp ? '300ms' : '200ms';
            html += `
              <div class="v6-metadata-container v6-cascade-item" style="animation-delay: ${metaDelay};">
                <div class="v6-meta-role-year">${proj.role} &mdash; ${proj.year}</div>
                
                <div class="v6-meta-credits">
                  ${proj.mixing ? `<div>Mix &mdash; <strong>${proj.mixing}</strong></div>` : ''}
                  ${proj.mastering ? `<div>Master &mdash; <strong>${proj.mastering}</strong></div>` : ''}
                </div>
                
                ${proj.youtube && !isEp ? `
                  <div style="margin-top: 0.5rem;">
                    <a href="${proj.youtube}" target="_blank" class="v6-track-clip-link">Watch Music Video &rarr;</a>
                  </div>
                ` : ''}
              </div>
            `;
          } else {
            // V5 layout
            // Clear left player in case we navigated from V6 to V5 somehow
            const leftPlayer = document.getElementById('productionLeftPlayer');
            if (leftPlayer) leftPlayer.innerHTML = '';

            html += `<h3 class="v5-info-title">${proj.title}</h3>`;
            html += `<p class="v5-info-artist">By ${proj.artist}</p>`;

            // 2. Players (Spotify embed or EP tracklist with embeds)
            const isEp = proj.type === 'ep';
            if (!isEp) {
              // Single: Render Spotify player
              if (proj.spotify) {
                const embedUrl = getSpotifyEmbedUrl(proj.spotify);
                if (embedUrl) {
                  html += `
                    <div class="v5-player-wrapper">
                      <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px;"></iframe>
                    </div>
                  `;
                }
              }
            } else {
              // EP: Render global project player (Album Embed)
              if (proj.spotify) {
                const epEmbedUrl = getSpotifyEmbedUrl(proj.spotify);
                if (epEmbedUrl) {
                  html += `
                    <div class="v5-player-wrapper" style="margin-bottom: 1.25rem;">
                      <iframe src="${epEmbedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px;"></iframe>
                    </div>
                  `;
                }
              }
              // EP: Render tracklist scrollable container with individual players
              if (proj.tracklist) {
                html += `<div class="v5-ep-players-container">`;
                proj.tracklist.forEach((track, tIdx) => {
                  const trackNum = String(tIdx + 1).padStart(2, '0');
                  const trackEmbed = getSpotifyEmbedUrl(track.spotify);
                  html += `
                    <div class="v5-ep-track-item">
                      <div class="v5-ep-track-header">
                        <span>${trackNum} &mdash; ${track.name}</span>
                        ${track.youtube ? `<a href="${track.youtube}" target="_blank" class="v5-youtube-link">Watch Clip &rarr;</a>` : ''}
                      </div>
                      <iframe src="${trackEmbed}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 6px;"></iframe>
                    </div>
                  `;
                });
                html += `</div>`;
              }
            }

            // 3. Metadata & Credits
            html += `
              <div class="v5-metadata-container">
                <div class="v5-meta-role-year">${proj.role} &mdash; ${proj.year}</div>
                
                <div class="v5-meta-credits">
                  ${proj.mixing ? `<div>Mix &mdash; <strong>${proj.mixing}</strong></div>` : ''}
                  ${proj.mastering ? `<div>Master &mdash; <strong>${proj.mastering}</strong></div>` : ''}
                </div>
                
                ${proj.youtube && !isEp ? `
                  <div style="margin-top: 0.5rem;">
                    <a href="${proj.youtube}" target="_blank" class="v5-youtube-link">Watch Music Video &rarr;</a>
                  </div>
                ` : ''}
              </div>
            `;
          }

        } else {
          // Original V4/V5 layout
          html += `<h3 class="info-title">${proj.title}</h3>`;
          html += `<p class="info-subtitle">${proj.artist}</p>`;
          
          html += `
            <div class="info-meta-row">
              <div class="info-meta-item">Role: <strong>${proj.role}</strong></div>
              <div class="info-meta-item">Year: <strong>${proj.year}</strong></div>
            </div>
          `;

          const isEp = proj.type === 'ep';
          if (proj.spotify && !isEp) {
            const embedUrl = getSpotifyEmbedUrl(proj.spotify);
            if (embedUrl) {
              html += `
                <div class="info-spotify-wrapper">
                  <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 8px;"></iframe>
                </div>
              `;
            }
          }

          if (isEp && proj.tracklist) {
            html += `<ul class="ep-tracklist">`;
            proj.tracklist.forEach((track, tIdx) => {
              const trackNum = String(tIdx + 1).padStart(2, '0');
              let mediaBtnsHtml = '';
              if (track.spotify) {
                mediaBtnsHtml += `<a href="${track.spotify}" target="_blank" class="tracklist-media-btn">Spotify</a>`;
              }
              if (track.youtube) {
                mediaBtnsHtml += `<a href="${track.youtube}" target="_blank" class="tracklist-media-btn">YouTube Clip</a>`;
              }
              html += `
                <li class="tracklist-item">
                  <span>${trackNum} — ${track.name}</span>
                  <div class="tracklist-media-links">
                    ${mediaBtnsHtml}
                  </div>
                </li>
              `;
            });
            html += `</ul>`;
          }

          if (proj.mixing || proj.mastering) {
            html += `<div class="info-credits-group">`;
            if (proj.mixing) {
              html += `<div class="info-credit-item">Mixing: <strong>${proj.mixing}</strong></div>`;
            }
            if (proj.mastering) {
              html += `<div class="info-credit-item">Mastering: <strong>${proj.mastering}</strong></div>`;
            }
            html += `</div>`;
          }
        }
      }

      } else {
        html += `<h3 class="info-title">${proj.title}</h3>`;
        html += `<p class="info-subtitle">${proj.type}</p>`;

        html += `
          <div class="info-credits-group" style="border:none; padding:0; gap:0.55rem;">
            <div class="info-credit-item">Director: <strong>${proj.artist}</strong></div>
            <div class="info-credit-item">Role: <strong>${proj.role}</strong></div>
            ${proj.producedBy ? `<div class="info-credit-item">Produced by: <strong>${proj.producedBy}</strong></div>` : ''}
            ${proj.availableOn ? `<div class="info-credit-item">Available exclusively on: <strong>${proj.availableOn}</strong></div>` : ''}
            <div class="info-credit-item">Year: <strong>${proj.year}</strong></div>
          </div>
        `;

        if (proj.link) {
          html += `
            <a href="${proj.link}" target="_blank" class="info-action-btn">
              Watch on Canal+
            </a>
          `;
        }
      }

      infoContainer.innerHTML = html;
      infoContainer.classList.remove('fade-out');
    }, 150);
  }

  function bindStackNavigationButtons() {
    const prodPrev = document.getElementById('productionPrevBtn');
    const prodNext = document.getElementById('productionNextBtn');
    if (prodPrev && prodNext) {
      prodPrev.addEventListener('click', (e) => {
        e.preventDefault();
        navigateStack('production', 'prev');
      });
      prodNext.addEventListener('click', (e) => {
        e.preventDefault();
        navigateStack('production', 'next');
      });
    }

    const soundPrev = document.getElementById('soundToImagePrevBtn');
    const soundNext = document.getElementById('soundToImageNextBtn');
    if (soundPrev && soundNext) {
      soundPrev.addEventListener('click', (e) => {
        e.preventDefault();
        navigateStack('sound-to-image', 'prev');
      });
      soundNext.addEventListener('click', (e) => {
        e.preventDefault();
        navigateStack('sound-to-image', 'next');
      });
    }
  }

  function openProjectModal(proj) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalContent');
    if (!modal || !content) return;
    
    stopSynth();
    
    const getSpotifyEmbedUrlLocal = (url) => {
      if (!url) return "";
      return url.replace("open.spotify.com/", "open.spotify.com/embed/");
    };

    let mediaHtml = "";
    if (proj.category === 'sound-to-image') {
      if (proj.video) {
        mediaHtml = `
          <div class="video-container" style="margin-bottom: 2.5rem;">
            <video class="project-video" controls poster="${proj.cover || ''}" preload="metadata" playsinline>
              <source src="${proj.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        `;
      } else {
        mediaHtml = `
          <div class="modal-project-cover-wrapper">
            <img class="modal-project-cover" src="${proj.cover || ''}" alt="${proj.title}">
          </div>
          ${proj.link ? `
            <a href="${proj.link}" target="_blank" class="youtube-btn" style="border-color: rgba(245, 244, 240, 0.4); margin-bottom: 2rem;">
              Watch Documentary
            </a>
          ` : ""}
        `;
      }
    } else {
      const embedUrl = getSpotifyEmbedUrlLocal(proj.spotify);
      const isEP = proj.type === 'ep';
      const playerHeight = isEP ? 352 : 80;
      
      mediaHtml = `
        <div class="modal-project-cover-wrapper">
          <img class="modal-project-cover" src="${proj.cover || ''}" alt="${proj.title}">
        </div>
        <div class="modal-player-container">
          <iframe src="${embedUrl}" width="100%" height="${playerHeight}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      `;
    }

    let tracklistHtml = "";
    if (proj.type === 'ep' && proj.tracklist) {
      tracklistHtml = `
        <div class="modal-tracklist">
          <h4 class="tracklist-title">Tracklist</h4>
          ${proj.tracklist.map((track, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return `
              <div class="track-item-row">
                <div class="track-number-name">
                  <span class="track-number">${num}</span>
                  <span class="track-name">${track.name}</span>
                </div>
                <div class="track-links">
                  ${track.spotify ? `<a href="${track.spotify}" target="_blank" class="track-link">Spotify</a>` : ''}
                  ${track.youtube ? `<a href="${track.youtube}" target="_blank" class="track-link">Music Video</a>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    let creditsHtml = "";
    if (proj.mixing || proj.mastering || proj.producedBy || proj.availableOn || proj.youtube) {
      creditsHtml = `
        <div class="credits-section">
          ${proj.producedBy ? `<div class="credit-row"><span class="label">Produced by</span><span class="value">${proj.producedBy}</span></div>` : ''}
          ${proj.availableOn ? `<div class="credit-row"><span class="label">Available on</span><span class="value">${proj.availableOn}</span></div>` : ''}
          ${proj.mixing ? `<div class="credit-row"><span class="label">Mixing</span><span class="value">${proj.mixing}</span></div>` : ''}
          ${proj.mastering ? `<div class="credit-row"><span class="label">Mastering</span><span class="value">${proj.mastering}</span></div>` : ''}
          ${proj.youtube && proj.type !== 'ep' ? `
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="${proj.youtube}" target="_blank" class="youtube-btn">Watch Music Video</a>
            </div>
          ` : ''}
        </div>
      `;
    }

    content.innerHTML = `
      <h3 class="modal-project-title">${proj.title}</h3>
      <div class="modal-project-artist">${proj.category === 'sound-to-image' ? `Directed by ${proj.artist}` : proj.artist}</div>
      
      ${mediaHtml}
      
      ${tracklistHtml}
      
      <div class="modal-project-info">
        <div class="info-row">
          <span class="label">Role</span>
          <span class="value">${proj.role}</span>
        </div>
        <div class="info-row">
          <span class="label">Year</span>
          <span class="value">${proj.year}</span>
        </div>
        ${creditsHtml}
      </div>
    `;

    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    const video = modal.querySelector('video');
    if (video) video.pause();
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Set up modal close interactions
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  
  const modalEl = document.getElementById('projectModal');
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeProjectModal();
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();

    // V26: Discret keyboard navigation (Section 5)
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion >= 26) {
      const prodSection = document.getElementById('production');
      if (prodSection && prodSection.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (typeof window.nextProductionProject === 'function') window.nextProductionProject();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (typeof window.previousProductionProject === 'function') window.previousProductionProject();
        }
      }
    }
  });

  // Initialize stacks & bind navigation controls
  renderStack('production');
  renderStack('sound-to-image');
  bindStackNavigationButtons();

  // Production V6: Vertical mouse-wheel and swipe scroll navigation on Production tab
  let lastScrollTime = 0;
  const scrollCooldown = 800; // ms

  const productionSection = document.getElementById('production');
  if (productionSection) {
    // Wheel event
    productionSection.addEventListener('wheel', (e) => {
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
      if (currentVersion >= 12) return; // Bypassed on V12+ because it is attached only to #productionStack!

      // Ignore if user is scrolling inside the tracklist container
      if (e.target.closest('.v6-tracklist-container')) return;

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      lastScrollTime = now;

      if (e.deltaY > 0) {
        // Scroll DOWN -> Previous project
        navigateStack('production', 'prev');
      } else if (e.deltaY < 0) {
        // Scroll UP -> Next project
        navigateStack('production', 'next');
      }
    }, { passive: false });

    // Touch events for swipe support (bypassed on V10+ because pointer drag handles it)
    let touchStartY = 0;
    productionSection.addEventListener('touchstart', (e) => {
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
      if (currentVersion >= 10) return;
      if (e.target.closest('.v6-tracklist-container')) return;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    productionSection.addEventListener('touchend', (e) => {
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
      if (currentVersion >= 10) return;
      if (e.target.closest('.v6-tracklist-container')) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;

      if (Math.abs(diffY) > 50) { // minimum threshold of 50px swipe
        lastScrollTime = now;
        if (diffY > 0) {
          // Swipe UP -> Next project
          navigateStack('production', 'next');
        } else {
          // Swipe DOWN -> Previous project
          navigateStack('production', 'prev');
        }
      }
    });

    // Pointer-based swipe dragging gesture for V10+ (tactile/mouse drag connected to distance)
    const prodStack = document.getElementById('productionStack');
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    const isV10OrHigher = (currentVersion >= 10);

    if (prodStack && isV10OrHigher && currentVersion < 23) {
      let startX = 0;
      let startY = 0;
      let dragX = 0;
      let dragY = 0;
      let isDragging = false;
      let dragActiveCard = null;

      prodStack.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('iframe')) return;
        
        // Only target the active card DOM element (representing activeProdIndex)
        const activeCardDom = prodStack.querySelector(`[data-card-index="${activeProdIndex}"]`);
        if (!activeCardDom) return;

        // Prevent dragging if modal is open
        if (document.getElementById('projectModal')?.classList.contains('visible')) return;

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        dragActiveCard = activeCardDom;
        dragActiveCard.setPointerCapture(e.pointerId);
        dragActiveCard.style.transition = 'none'; // Disable transition for 1:1 real-time drag response
      });

      prodStack.addEventListener('pointermove', (e) => {
        if (!isDragging || !dragActiveCard) return;
        dragX = (e.clientX - startX) * 0.45;
        dragY = (e.clientY - startY) * 0.45;
        
        // Tactile direct visual response: shift card in space!
        dragActiveCard.style.transform = `translate3d(${dragX}px, ${dragY}px, 10px) scale(1.02)`;
      });

      const endDrag = (e) => {
        if (!isDragging || !dragActiveCard) return;
        isDragging = false;
        dragActiveCard.style.transition = ''; // Restore transition

        const now = Date.now();
        const timeDiff = now - lastScrollTime;

        // Validate drag threshold (80px) to trigger portfolio re-ordering
        if (Math.abs(dragY) > 80 && timeDiff > scrollCooldown) {
          lastScrollTime = now;
          if (dragY < 0) {
            // Drag UP -> Slide active card to back
            navigateStack('production', 'next');
          } else {
            // Drag DOWN -> Bring previous card to front
            navigateStack('production', 'prev');
          }
        } else {
          // Snap card back to visual center
          dragActiveCard.style.transform = `translate3d(0, 0, 0) scale(1)`;
        }

        dragActiveCard.releasePointerCapture(e.pointerId);
        dragActiveCard = null;
        dragX = 0;
        dragY = 0;
      };

      prodStack.addEventListener('pointerup', endDrag);
      prodStack.addEventListener('pointercancel', endDrag);

      // Scroll lock/debounce on the stack container for V12+ (1 gesture = 1 project)
      if (currentVersion >= 12) {
        let isTransitioning = false;
        const THRESHOLD = 15; // standard scroll/trackpad trigger threshold

        prodStack.addEventListener('wheel', (e) => {
          if (isTransitioning) {
            e.preventDefault();
            return;
          }

          if (Math.abs(e.deltaY) < THRESHOLD) {
            return;
          }

          e.preventDefault();
          isTransitioning = true;

          if (e.deltaY > 0) {
            // Scroll DOWN -> Previous project
            navigateStack('production', 'prev');
          } else {
            // Scroll UP -> Next project
            navigateStack('production', 'next');
          }

          setTimeout(() => {
            isTransitioning = false;
          }, 450); // 400ms duration + 50ms buffer
        }, { passive: false });
      }
    }
  }

  // Global EP Tracklist player toggle for V6
  window.toggleV6TrackPlayer = function(trackIdx, trackSpotifyUrl) {
    const allWrappers = document.querySelectorAll('.v6-track-player-embed');
    const targetWrapper = document.getElementById(`v6-track-embed-${trackIdx}`);
    const targetBtn = document.getElementById(`v6-track-btn-${trackIdx}`);
    
    if (!targetWrapper || !targetBtn) return;

    const isAlreadyOpen = targetWrapper.classList.contains('expanded');
    
    // Collapse all
    allWrappers.forEach(w => {
      w.classList.remove('expanded');
      w.innerHTML = '';
    });
    document.querySelectorAll('.v6-track-btn').forEach(b => b.classList.remove('active'));

    if (!isAlreadyOpen) {
      targetWrapper.classList.add('expanded');
      targetBtn.classList.add('active');
      const trackEmbed = getSpotifyEmbedUrl(trackSpotifyUrl);
      targetWrapper.innerHTML = `<iframe src="${trackEmbed}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 6px; margin-top:0.4rem; border:none;"></iframe>`;
    }
  };

  // V110-V114 Dedicated Vertical Wheel / Trackpad / Touch Swipe Controller for Homepage
  function setupV110HomepageVerticalNavigation() {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 110) return;

    let isHomeTransitioning = false;
    let wheelAccumulatorY = 0;
    let touchStartY = 0;

    // V114 Ultra-Reliable Wheel Gesture & 480ms Cinematic Crossfade Synchronization
    let gestureConsumed = false;
    let lastWheelTimestamp = 0;
    let lastWheelDirection = 0;

    const WHEEL_THRESHOLD = (currentVersion >= 113) ? 50 : ((currentVersion === 112) ? 70 : ((currentVersion === 111) ? 90 : 60));
    const TOUCH_THRESHOLD = 40;
    const LOCK_DURATION = (currentVersion >= 114) ? 150 : ((currentVersion === 113) ? 180 : ((currentVersion === 112) ? 280 : ((currentVersion === 111) ? 650 : 560)));
    const GESTURE_GAP = (currentVersion >= 114) ? 70 : 90; // 70ms gap in V114 for instant re-arming

    function triggerHomepageProjectChange(direction) {
      // direction: 1 for NEXT (swipe up / scroll down), -1 for PREVIOUS (swipe down / scroll up)
      isHomeTransitioning = true;
      gestureConsumed = true;
      wheelAccumulatorY = 0;

      if (typeof resetUiTimeout === 'function') {
        resetUiTimeout();
      }

      const itemsPerSet = getHomeProjects().length;
      if (direction > 0) {
        currentVirtualIndex++;
      } else {
        currentVirtualIndex--;
      }

      const projIdx = (currentVirtualIndex % itemsPerSet + itemsPerSet) % itemsPerSet;
      showSlide(projIdx, currentVirtualIndex);

      setTimeout(() => {
        isHomeTransitioning = false;
        wheelAccumulatorY = 0;
      }, LOCK_DURATION);
    }

    // Wheel / Trackpad listener (V114 gesture session architecture)
    window.addEventListener('wheel', (e) => {
      if (!document.body.classList.contains('home-active')) return;
      if (e.target.closest('header, nav, #projectModal')) return;
      if (!animationActive) return;

      e.preventDefault();
      if (typeof resetUiTimeout === 'function') {
        resetUiTimeout();
      }

      if (currentVersion >= 113) {
        const now = Date.now();
        const timeSinceLastWheel = now - lastWheelTimestamp;
        const currentDirection = Math.sign(e.deltaY);

        // A new physical gesture starts if wheel events paused for > GESTURE_GAP ms OR direction reversed!
        if (timeSinceLastWheel > GESTURE_GAP || (currentDirection !== 0 && currentDirection !== lastWheelDirection)) {
          gestureConsumed = false;
          wheelAccumulatorY = 0;
        }

        lastWheelTimestamp = now;
        if (currentDirection !== 0) {
          lastWheelDirection = currentDirection;
        }

        // Ignore residual momentum from a consumed gesture
        if (gestureConsumed || isHomeTransitioning) {
          wheelAccumulatorY = 0;
          return;
        }

        wheelAccumulatorY += e.deltaY;

        if (Math.abs(wheelAccumulatorY) >= WHEEL_THRESHOLD) {
          const direction = wheelAccumulatorY > 0 ? 1 : -1;
          triggerHomepageProjectChange(direction);
        }
        return;
      }

      if (currentVersion === 112) {
        if (gestureConsumed || isHomeTransitioning) {
          wheelAccumulatorY = 0;
          return;
        }

        wheelAccumulatorY += e.deltaY;

        if (Math.abs(wheelAccumulatorY) >= WHEEL_THRESHOLD) {
          const direction = wheelAccumulatorY > 0 ? 1 : -1;
          triggerHomepageProjectChange(direction);
        }
        return;
      }

      // Legacy V110/V111 handling
      if (isHomeTransitioning) {
        wheelAccumulatorY = 0;
        return;
      }

      wheelAccumulatorY += e.deltaY;

      if (Math.abs(wheelAccumulatorY) >= WHEEL_THRESHOLD) {
        const direction = wheelAccumulatorY > 0 ? 1 : -1;
        triggerHomepageProjectChange(direction);
      }
    }, { passive: false });

    // Touch listeners
    const homeSection = document.getElementById('homeSection');
    const homeSlideshow = document.getElementById('homeSlideshow');
    const touchTargets = [homeSection, homeSlideshow].filter(Boolean);

    touchTargets.forEach(target => {
      target.addEventListener('touchstart', (e) => {
        if (!document.body.classList.contains('home-active')) return;
        if (e.target.closest('header, nav, #projectModal, .home-play-overlay-btn, .home-pause-overlay-btn, .home-dot')) return;
        if (e.touches && e.touches.length > 0) {
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      target.addEventListener('touchend', (e) => {
        if (!document.body.classList.contains('home-active')) return;
        if (e.target.closest('header, nav, #projectModal, .home-play-overlay-btn, .home-pause-overlay-btn, .home-dot')) return;
        if (!animationActive || isHomeTransitioning) return;

        if (e.changedTouches && e.changedTouches.length > 0) {
          const touchEndY = e.changedTouches[0].clientY;
          const deltaY = touchStartY - touchEndY;

          if (Math.abs(deltaY) >= TOUCH_THRESHOLD) {
            const direction = deltaY > 0 ? 1 : -1;
            triggerHomepageProjectChange(direction);
          }
        }
      }, { passive: true });
    });
  }

  // ==========================================================================
  // V133 SOUND TO IMAGE AUDIOVISUAL ENGINE (STRUCTURAL RESET + 2-GROUP INFO)
  // ==========================================================================
  let currentStiIndex = 0;
  let isStiTransitioning = false;
  window.v133StaggerToken = 0;
  window.v133StaggerTimeouts = [];

  function cancelV133Stagger() {
    if (window.v133StaggerTimeouts && window.v133StaggerTimeouts.length) {
      window.v133StaggerTimeouts.forEach(t => clearTimeout(t));
    }
    window.v133StaggerTimeouts = [];
  }

  function staggerInV133Info() {
    cancelV133Stagger();
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const floating = stage.querySelector('.sti-info-floating');
    if (!floating) return;
    const lines = Array.from(floating.querySelectorAll('.sti-info-line'));

    const currentToken = ++window.v133StaggerToken;

    lines.forEach((line, idx) => {
      const timer = setTimeout(() => {
        if (window.v133StaggerToken !== currentToken) return;
        line.style.opacity = '1';
      }, idx * 120);
      window.v133StaggerTimeouts.push(timer);
    });
  }

  function staggerOutV133Info(onComplete) {
    cancelV133Stagger();
    const stage = document.getElementById('stiStage');
    if (!stage) {
      if (onComplete) onComplete();
      return;
    }
    const floating = stage.querySelector('.sti-info-floating');
    if (!floating) {
      if (onComplete) onComplete();
      return;
    }
    const lines = Array.from(floating.querySelectorAll('.sti-info-line'));
    const reversed = lines.slice().reverse();

    const currentToken = ++window.v133StaggerToken;

    reversed.forEach((line, idx) => {
      const timer = setTimeout(() => {
        if (window.v133StaggerToken !== currentToken) return;
        line.style.opacity = '0';
      }, idx * 120);
      window.v133StaggerTimeouts.push(timer);
    });

    const totalDuration = (reversed.length * 120) + 300;
    const endTimer = setTimeout(() => {
      if (window.v133StaggerToken !== currentToken) return;
      if (onComplete) onComplete();
    }, totalDuration);
    window.v133StaggerTimeouts.push(endTimer);
  }

  function pauseStiVideo(index = currentStiIndex) {
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    document.body.classList.remove('hide-cursor-active');
    const activeView = stage.querySelector('.sti-project-view') || stage.querySelector('.sti-v146-project-view');
    if (!activeView) return;

    const vid = activeView.querySelector('.sti-media-video') || activeView.querySelector('.sti-v146-media-video');
    if (vid && !vid.paused) {
      vid.pause();
    }
    activeView.setAttribute('data-playback-state', 'PAUSED');
    const playBtn = activeView.querySelector('.sti-play-btn') || activeView.querySelector('.sti-v146-play-btn');
    if (playBtn) playBtn.style.display = 'block';

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion >= 131 && currentVersion < 146) {
      staggerInV133Info();
    }
  }

  function playStiVideo(index = currentStiIndex) {
    const stage = document.getElementById('stiStage');
    if (!stage) return;

    const proj = soundToImageAudiovisualProjects[index];
    if (!proj || !proj.video) return;

    const activeView = stage.querySelector('.sti-project-view') || stage.querySelector('.sti-v146-project-view');
    if (!activeView) return;

    const vid = activeView.querySelector('.sti-media-video') || activeView.querySelector('.sti-v146-media-video');
    const img = activeView.querySelector('.sti-media-img') || activeView.querySelector('.sti-v146-media-img');
    const playBtn = activeView.querySelector('.sti-play-btn') || activeView.querySelector('.sti-v146-play-btn');
    const currentState = activeView.getAttribute('data-playback-state') || 'IDLE';

    if (!vid) return;

    if (currentState === 'PAUSED' && vid.src && vid.currentTime > 0) {
      const resumePromise = vid.play();
      if (resumePromise !== undefined) {
        resumePromise.then(() => {
          activeView.setAttribute('data-playback-state', 'PLAYING');
          if (playBtn) playBtn.style.display = 'none';
        }).catch(err => {
          console.error('[V146 STI] resume error:', err);
        });
      }
      return;
    }

    if (!vid.src || !vid.src.includes(proj.video.replace('../', ''))) {
      vid.src = proj.video;
      vid.preload = 'metadata';
      vid.muted = false;
      vid.controls = false;
      vid.load();
    }

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        activeView.setAttribute('data-playback-state', 'PLAYING');
        if (img) img.style.display = 'none';
        vid.style.display = 'block';
        if (playBtn) playBtn.style.display = 'none';
      }).catch(err => {
        console.error('[V146 STI] play error:', err);
        activeView.setAttribute('data-playback-state', 'IDLE');
      });
    }

    vid.onended = () => {
      activeView.setAttribute('data-playback-state', 'IDLE');
      if (img) img.style.display = 'block';
      vid.style.display = 'none';
      if (playBtn) playBtn.style.display = 'block';
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
      if (currentVersion >= 131 && currentVersion < 146) {
        staggerInV133Info();
      }
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch(e) {}
    };
  }

  function toggleStiPlayback(index = currentStiIndex) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj || !proj.video) return;

    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeView = stage.querySelector('.sti-project-view') || stage.querySelector('.sti-v146-project-view');
    if (!activeView) return;

    const currentState = activeView.getAttribute('data-playback-state') || 'IDLE';

    if (currentState === 'PLAYING') {
      pauseStiVideo(index);
    } else {
      playStiVideo(index);
    }
  }

  function renderStiProjectView(index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return '';

    const isPlayable = !!proj.video;

    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

    if (currentVersion >= 146) {
      return `
        <div class="sti-v146-project-view" data-sti-index="${index}" data-playback-state="IDLE">
          <!-- 1. Dedicated Media Layer (Pure centered 50%/50%) -->
          <div class="sti-v146-media-layer">
            <div class="sti-v146-media-frame">
              <img class="sti-v146-media-img" src="${proj.thumbnail}" alt="${proj.title}">
              ${isPlayable ? `<video class="sti-v146-media-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
              ${isPlayable ? `<button type="button" class="sti-v146-play-btn" aria-label="Play Video">▶</button>` : ''}
            </div>
          </div>

          <!-- 2. Independent Stage Info Layer -->
          <div class="sti-v146-info-layer">
            <div class="sti-v146-info-group sti-v146-primary-group">
              <div class="sti-v146-info-line sti-v146-title-line">${proj.title}</div>
              <div class="sti-v146-info-line sti-v146-credit-line">${proj.credit}</div>
            </div>
            <div class="sti-v146-info-group sti-v146-secondary-group">
              ${proj.director ? `<div class="sti-v146-info-line sti-v146-meta-line">${proj.director}</div>` : ''}
              ${proj.production ? `<div class="sti-v146-info-line sti-v146-meta-line">${proj.production}</div>` : ''}
              ${proj.availability ? `<div class="sti-v146-info-line sti-v146-meta-line">${proj.availability}</div>` : ''}
              <div class="sti-v146-info-line sti-v146-meta-line">${proj.year}</div>
              ${proj.externalUrl ? `
                <div class="sti-v146-info-line sti-v146-action-line">
                  <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-v146-external-link">
                    ${proj.externalLabel} ↗
                  </a>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 3. Stage Counter Bar -->
          <div class="sti-v146-counter-bar">
            <div class="sti-v146-counter" id="stiProjectCounter">${String(index + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}</div>
          </div>

          <!-- 4. Stage Navigation Dots -->
          <div class="sti-v146-dots-wrapper" id="stiDots">
            <div class="sti-v146-dots-track" id="stiDotsTrack">
              ${soundToImageAudiovisualProjects.map((_, i) => `<button class="sti-v146-dot ${i === index ? 'active' : ''}" data-sti-index="${i}"></button>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    if (currentVersion >= 145) {
      return `
        <div class="sti-project-view" data-sti-index="${index}" data-playback-state="IDLE">
          <div class="sti-media-wrapper">
            <div class="sti-media-frame">
              <img class="sti-media-img" src="${proj.thumbnail}" alt="${proj.title}">
              ${isPlayable ? `<video class="sti-media-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
              ${isPlayable ? `<button type="button" class="sti-play-btn" aria-label="Play Video">▶</button>` : ''}
            </div>
          </div>

          <div class="sti-info-floating">
            <div class="sti-info-group sti-primary-group">
              <div class="sti-info-line sti-title-line" data-line-index="0">${proj.title}</div>
              <div class="sti-info-line sti-credit-line" data-line-index="1">${proj.credit}</div>
            </div>
            <div class="sti-info-group sti-secondary-group">
              ${proj.director ? `<div class="sti-info-line sti-meta-line" data-line-index="2">${proj.director}</div>` : ''}
              ${proj.production ? `<div class="sti-info-line sti-meta-line" data-line-index="3">${proj.production}</div>` : ''}
              ${proj.availability ? `<div class="sti-info-line sti-meta-line" data-line-index="4">${proj.availability}</div>` : ''}
              <div class="sti-info-line sti-meta-line" data-line-index="5">${proj.year}</div>
              ${proj.externalUrl ? `
                <div class="sti-info-line sti-action-line" data-line-index="6">
                  <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-external-link">
                    ${proj.externalLabel} ↗
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    if (currentVersion >= 133) {
      const opticalOffset = proj.opticalOffsetX || 0;
      return `
        <div class="sti-project-view" data-sti-index="${index}" data-playback-state="IDLE">
          <div class="sti-media-wrapper" style="--sti-optical-offset-x: ${opticalOffset}px;">
            <div class="sti-media-frame">
              <img class="sti-media-img" src="${proj.thumbnail}" alt="${proj.title}">
              ${isPlayable ? `<video class="sti-media-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
              ${isPlayable ? `<button type="button" class="sti-play-btn" aria-label="Play Video">▶</button>` : ''}
            </div>

            <div class="sti-info-floating">
              <div class="sti-info-group sti-primary-group">
                <div class="sti-info-line sti-title-line" data-line-index="0">${proj.title}</div>
                <div class="sti-info-line sti-credit-line" data-line-index="1">${proj.credit}</div>
              </div>
              <div class="sti-info-group sti-secondary-group">
                ${proj.director ? `<div class="sti-info-line sti-meta-line" data-line-index="2">${proj.director}</div>` : ''}
                ${proj.production ? `<div class="sti-info-line sti-meta-line" data-line-index="3">${proj.production}</div>` : ''}
                ${proj.availability ? `<div class="sti-info-line sti-meta-line" data-line-index="4">${proj.availability}</div>` : ''}
                <div class="sti-info-line sti-meta-line" data-line-index="5">${proj.year}</div>
                ${proj.externalUrl ? `
                  <div class="sti-info-line sti-action-line" data-line-index="6">
                    <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-external-link">
                      ${proj.externalLabel} ↗
                    </a>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="sti-project-view" data-sti-index="${index}" data-playback-state="IDLE">
        <div class="sti-media-column">
          <div class="sti-media-frame">
            <img class="sti-media-img" src="${proj.thumbnail}" alt="${proj.title}">
            ${isPlayable ? `<video class="sti-media-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
            ${isPlayable ? `<button type="button" class="sti-play-btn" aria-label="Play Video">▶</button>` : ''}
          </div>
        </div>
        <div class="sti-info-column">
          <h3 class="sti-title">${proj.title}</h3>
          <div class="sti-credit">${proj.credit}</div>
          <div class="sti-meta-block">
            ${proj.director ? `<div class="sti-meta-line">${proj.director}</div>` : ''}
            ${proj.production ? `<div class="sti-meta-line">${proj.production}</div>` : ''}
            ${proj.availability ? `<div class="sti-meta-line">${proj.availability}</div>` : ''}
            <div class="sti-meta-line">${proj.year}</div>
          </div>
          ${proj.externalUrl ? `
            <div class="sti-action-wrapper">
              <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-external-link">
                ${proj.externalLabel} ↗
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function wireStiProjectEvents(view, index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return;

    if (!proj.video && proj.externalUrl) {
      const mediaFrame = view.querySelector('.sti-media-frame');
      if (mediaFrame) {
        mediaFrame.style.cursor = 'pointer';
        mediaFrame.addEventListener('click', () => {
          window.open(proj.externalUrl, '_blank', 'noopener,noreferrer');
        });
      }
      return;
    }

    if (proj.video) {
      const img = view.querySelector('.sti-media-img');
      const vid = view.querySelector('.sti-media-video');
      const playBtn = view.querySelector('.sti-play-btn');
      const mediaElements = [img, vid, playBtn].filter(Boolean);

      mediaElements.forEach(el => {
        let startX = 0, startY = 0, isPointerDown = false;
        el.addEventListener('pointerdown', (e) => {
          isPointerDown = true;
          startX = e.clientX;
          startY = e.clientY;
        });

        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (isPointerDown) {
            const deltaX = Math.abs(e.clientX - startX);
            const deltaY = Math.abs(e.clientY - startY);
            isPointerDown = false;
            if (Math.hypot(deltaX, deltaY) > 8) return;
          }

          toggleStiPlayback(index);
        });
      });
    }
  }

  function showStiProject(newIndex) {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 130) return;

    if (newIndex < 0 || newIndex >= soundToImageAudiovisualProjects.length) return;
    if (newIndex === currentStiIndex && document.querySelector('.sti-project-view')) return;
    if (isStiTransitioning) return;

    isStiTransitioning = true;
    document.body.classList.remove('hide-cursor-active');

    const stage = document.getElementById('stiStage');
    const counterEl = document.getElementById('stiProjectCounter');
    const dotsTrack = document.getElementById('stiDotsTrack');
    if (!stage) return;

    const oldView = stage.querySelector('.sti-project-view');
    if (oldView) {
      const vid = oldView.querySelector('.sti-media-video');
      if (vid && !vid.paused) {
        try { vid.pause(); } catch(e) {}
      }
      if (currentVersion >= 131) {
        staggerOutV133Info();
      }
      oldView.classList.add('sti-fading-out');
    }

    currentStiIndex = newIndex;

    // Update Counter & Dots
    if (counterEl) {
      const formattedCur = String(newIndex + 1).padStart(2, '0');
      const formattedTotal = String(soundToImageAudiovisualProjects.length).padStart(2, '0');
      counterEl.textContent = `${formattedCur} / ${formattedTotal}`;
    }

    if (dotsTrack) {
      const dots = dotsTrack.querySelectorAll('.sti-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === newIndex);
      });
    }

    setTimeout(() => {
      stage.innerHTML = renderStiProjectView(newIndex);
      const newView = stage.querySelector('.sti-project-view');
      if (newView) {
        newView.classList.add('sti-fading-in');
        wireStiProjectEvents(newView, newIndex);
        if (currentVersion >= 131) {
          staggerInV133Info();
        }
        setTimeout(() => newView.classList.remove('sti-fading-in'), 350);
      }
      isStiTransitioning = false;
    }, 320);
  }

  // --- V148 ISOLATED SOUND TO IMAGE REBUILD ---
  let currentStiV148Index = 0;
  let isStiV148Transitioning = false;

  function renderStiV148(index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return '';

    const isPlayable = !!proj.video;
    const isPark = proj.id === 'park-chan-wook';

    return `
      <div class="sti-v148-project" data-sti-index="${index}" data-playback-state="IDLE">
        <!-- 1. Media Area (Centered via Flex) -->
        <div class="sti-v148-media">
          <div class="sti-v148-media-box">
            <img class="sti-v148-img" src="${proj.thumbnail}" alt="${proj.title}">
            ${isPlayable ? `<video class="sti-v148-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
            ${isPlayable ? `<button type="button" class="sti-v148-play" aria-label="Play Video">▶</button>` : ''}
          </div>
        </div>

        <!-- 2. Independent Centered Info Below Media -->
        <div class="sti-v148-info">
          <div class="sti-v148-title">${proj.title}</div>
          <div class="sti-v148-credit">${proj.credit}</div>
          <div class="sti-v148-details">
            ${proj.director ? `<div class="sti-v148-context">${proj.director}</div>` : ''}
            <div class="sti-v148-meta">${isPark ? 'CANAL+ · CINÉ+ OCS · 2026' : 'MADE IN SOMEWHERE &amp; ALMAA FILMS · 2026'}</div>
            ${proj.externalUrl ? `
              <div class="sti-v148-action">
                <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-v148-link">
                  WATCH ON CANAL+ ↗
                </a>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 3. Stage Counter & Dots Overlays -->
        <div class="sti-v148-counter" id="stiV148Counter">${String(index + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}</div>

        <div class="sti-v148-dots" id="stiV148Dots">
          ${soundToImageAudiovisualProjects.map((_, i) => `<button class="sti-v148-dot ${i === index ? 'active' : ''}" data-v148-dot="${i}" aria-label="Project ${i + 1}"></button>`).join('')}
        </div>
      </div>
    `;
  }

  function pauseStiVideoV148() {
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v148-project');
    if (!activeProj) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    if (vid && !vid.paused) {
      vid.pause();
    }
    activeProj.setAttribute('data-playback-state', 'PAUSED');
    const playBtn = activeProj.querySelector('.sti-v148-play');
    if (playBtn) playBtn.style.display = 'flex';
  }

  function playStiVideoV148() {
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v148-project');
    if (!activeProj) return;

    const proj = soundToImageAudiovisualProjects[currentStiV148Index];
    if (!proj || !proj.video) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    const img = activeProj.querySelector('.sti-v148-img');
    const playBtn = activeProj.querySelector('.sti-v148-play');
    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';

    if (!vid) return;

    if (currentState === 'PAUSED' && vid.src && vid.currentTime > 0) {
      const resumePromise = vid.play();
      if (resumePromise !== undefined) {
        resumePromise.then(() => {
          activeProj.setAttribute('data-playback-state', 'PLAYING');
          if (playBtn) playBtn.style.display = 'none';
        }).catch(err => console.error('[V148 STI] resume error:', err));
      }
      return;
    }

    if (!vid.src || !vid.src.includes(proj.video.replace('../', ''))) {
      vid.src = proj.video;
      vid.preload = 'metadata';
      vid.muted = false;
      vid.controls = false;
      vid.load();
    }

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        activeProj.setAttribute('data-playback-state', 'PLAYING');
        if (img) img.style.display = 'none';
        vid.style.display = 'block';
        if (playBtn) playBtn.style.display = 'none';
      }).catch(err => {
        console.error('[V148 STI] play error:', err);
        activeProj.setAttribute('data-playback-state', 'IDLE');
      });
    }

    vid.onended = () => {
      activeProj.setAttribute('data-playback-state', 'IDLE');
      if (img) img.style.display = 'block';
      vid.style.display = 'none';
      if (playBtn) playBtn.style.display = 'flex';
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch(e) {}
    };
  }

  function toggleStiPlaybackV148() {
    const proj = soundToImageAudiovisualProjects[currentStiV148Index];
    if (!proj || !proj.video) return;

    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v148-project');
    if (!activeProj) return;

    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';
    if (currentState === 'PLAYING') {
      pauseStiVideoV148();
    } else {
      playStiVideoV148();
    }
  }

  function wireStiV148Events(projectEl, index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return;

    if (!proj.video && proj.externalUrl) {
      const mediaBox = projectEl.querySelector('.sti-v148-media-box');
      if (mediaBox) {
        mediaBox.style.cursor = 'pointer';
        mediaBox.addEventListener('click', () => {
          window.open(proj.externalUrl, '_blank', 'noopener,noreferrer');
        });
      }
      return;
    }

    if (proj.video) {
      const img = projectEl.querySelector('.sti-v148-img');
      const vid = projectEl.querySelector('.sti-v148-video');
      const playBtn = projectEl.querySelector('.sti-v148-play');
      const mediaElements = [img, vid, playBtn].filter(Boolean);

      mediaElements.forEach(el => {
        let startX = 0, startY = 0, isPointerDown = false;
        el.addEventListener('pointerdown', (e) => {
          isPointerDown = true;
          startX = e.clientX;
          startY = e.clientY;
        });

        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (isPointerDown) {
            const deltaX = Math.abs(e.clientX - startX);
            const deltaY = Math.abs(e.clientY - startY);
            isPointerDown = false;
            if (Math.hypot(deltaX, deltaY) > 8) return;
          }

          toggleStiPlaybackV148();
        });
      });
    }
  }

  function showStiProjectV148(newIndex) {
    if (newIndex < 0 || newIndex >= soundToImageAudiovisualProjects.length) return;
    if (newIndex === currentStiV148Index && document.querySelector('.sti-v148-project')) return;
    if (isStiV148Transitioning) return;

    isStiV148Transitioning = true;
    const stage = document.getElementById('stiStage');
    if (!stage) return;

    const oldProj = stage.querySelector('.sti-v148-project');
    if (oldProj) {
      const vid = oldProj.querySelector('.sti-v148-video');
      if (vid && !vid.paused) {
        try { vid.pause(); } catch(e) {}
      }
      oldProj.classList.add('sti-fading-out');
    }

    currentStiV148Index = newIndex;

    const counterEl = document.getElementById('stiV148Counter');
    if (counterEl) {
      counterEl.textContent = `${String(newIndex + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}`;
    }

    const dots = stage.querySelectorAll('.sti-v148-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newIndex);
    });

    setTimeout(() => {
      stage.innerHTML = renderStiV148(newIndex);
      const newProj = stage.querySelector('.sti-v148-project');
      if (newProj) {
        newProj.classList.add('sti-fading-in');
        wireStiV148Events(newProj, newIndex);

        const newDots = newProj.querySelectorAll('.sti-v148-dot');
        newDots.forEach((dot, idx) => {
          dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showStiProjectV148(idx);
          });
        });

        setTimeout(() => newProj.classList.remove('sti-fading-in'), 350);
      }
      isStiV148Transitioning = false;
    }, 320);
  }

  function initStiV148() {
    const stage = document.getElementById('stiStage');
    if (!stage) return;

    stage.innerHTML = renderStiV148(currentStiV148Index);
    const initialProj = stage.querySelector('.sti-v148-project');
    if (initialProj) {
      wireStiV148Events(initialProj, currentStiV148Index);
      const dots = initialProj.querySelectorAll('.sti-v148-dot');
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showStiProjectV148(idx);
        });
      });
    }

    // Wheel and Touch gesture navigation
    let stiLockout = false;
    const stiSection = document.getElementById('soundToImage');
    if (stiSection) {
      stiSection.addEventListener('wheel', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV148Transitioning) return;
        if (Math.abs(e.deltaY) < 30) return;

        stiLockout = true;
        const dir = e.deltaY > 0 ? 1 : -1;
        const targetIdx = (currentStiV148Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
        showStiProjectV148(targetIdx);
        setTimeout(() => { stiLockout = false; }, 600);
      }, { passive: true });

      let touchStartY = 0;
      stiSection.addEventListener('touchstart', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (e.touches && e.touches.length > 0) touchStartY = e.touches[0].clientY;
      }, { passive: true });

      stiSection.addEventListener('touchend', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV148Transitioning) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const deltaY = touchStartY - e.changedTouches[0].clientY;
          if (Math.abs(deltaY) >= 50) {
            stiLockout = true;
            const dir = deltaY > 0 ? 1 : -1;
            const targetIdx = (currentStiV148Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
            showStiProjectV148(targetIdx);
            setTimeout(() => { stiLockout = false; }, 600);
          }
        }
      }, { passive: true });
    }
  }

  // --- V149 SOUND TO IMAGE VERTICAL COMPOSITION CALIBRATION ---
  let currentStiV149Index = 0;
  let isStiV149Transitioning = false;

  function renderStiV149(index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return '';

    const isPlayable = !!proj.video;
    const isPark = proj.id === 'park-chan-wook';

    return `
      <div class="sti-v149-project" data-sti-index="${index}" data-playback-state="IDLE">
        <!-- Vertical Project Composition (.sti-v149-composition) -->
        <div class="sti-v149-composition">
          <!-- 1. Media Area (Normal Flow) -->
          <div class="sti-v148-media">
            <div class="sti-v148-media-box">
              <img class="sti-v148-img" src="${proj.thumbnail}" alt="${proj.title}">
              ${isPlayable ? `<video class="sti-v148-video" data-video-src="${proj.video}" playsinline style="display: none;"></video>` : ''}
              ${isPlayable ? `<button type="button" class="sti-v148-play" aria-label="Play Video">▶</button>` : ''}
            </div>
          </div>

          <!-- 2. Independent Centered Info Below Media (Normal Flow) -->
          <div class="sti-v148-info">
            <div class="sti-v148-title">${proj.title}</div>
            <div class="sti-v148-credit">${proj.credit}</div>
            <div class="sti-v148-details">
              ${proj.director ? `<div class="sti-v148-context">${proj.director}</div>` : ''}
              <div class="sti-v148-meta">${isPark ? 'CANAL+ · CINÉ+ OCS · 2026' : 'MADE IN SOMEWHERE &amp; ALMAA FILMS · 2026'}</div>
              ${proj.externalUrl ? `
                <div class="sti-v148-action">
                  <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-v148-link">
                    WATCH ON CANAL+ ↗
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- 3. Stage Counter & Dots Overlays (Independent of composition flow) -->
        <div class="sti-v148-counter sti-v149-counter" id="stiV149Counter">${String(index + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}</div>

        <div class="sti-v148-dots sti-v149-dots" id="stiV149Dots">
          ${soundToImageAudiovisualProjects.map((_, i) => `<button class="sti-v148-dot sti-v149-dot ${i === index ? 'active' : ''}" data-v149-dot="${i}" aria-label="Project ${i + 1}"></button>`).join('')}
        </div>
      </div>
    `;
  }

  function pauseStiVideoV149() {
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    if (vid && !vid.paused) {
      vid.pause();
    }
    activeProj.setAttribute('data-playback-state', 'PAUSED');
    const playBtn = activeProj.querySelector('.sti-v148-play');
    if (playBtn) playBtn.style.display = 'flex';
  }

  function playStiVideoV149() {
    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const proj = soundToImageAudiovisualProjects[currentStiV149Index];
    if (!proj || !proj.video) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    const img = activeProj.querySelector('.sti-v148-img');
    const playBtn = activeProj.querySelector('.sti-v148-play');
    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';

    if (!vid) return;

    if (currentState === 'PAUSED' && vid.src && vid.currentTime > 0) {
      const resumePromise = vid.play();
      if (resumePromise !== undefined) {
        resumePromise.then(() => {
          activeProj.setAttribute('data-playback-state', 'PLAYING');
          if (playBtn) playBtn.style.display = 'none';
        }).catch(err => console.error('[V149 STI] resume error:', err));
      }
      return;
    }

    if (!vid.src || !vid.src.includes(proj.video.replace('../', ''))) {
      vid.src = proj.video;
      vid.preload = 'metadata';
      vid.muted = false;
      vid.controls = false;
      vid.load();
    }

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        activeProj.setAttribute('data-playback-state', 'PLAYING');
        if (img) img.style.display = 'none';
        vid.style.display = 'block';
        if (playBtn) playBtn.style.display = 'none';
      }).catch(err => {
        console.error('[V149 STI] play error:', err);
        activeProj.setAttribute('data-playback-state', 'IDLE');
      });
    }

    vid.onended = () => {
      activeProj.setAttribute('data-playback-state', 'IDLE');
      if (img) img.style.display = 'block';
      vid.style.display = 'none';
      if (playBtn) playBtn.style.display = 'flex';
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch(e) {}
    };
  }

  function toggleStiPlaybackV149() {
    const proj = soundToImageAudiovisualProjects[currentStiV149Index];
    if (!proj || !proj.video) return;

    const stage = document.getElementById('stiStage');
    if (!stage) return;
    const activeProj = stage.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';
    if (currentState === 'PLAYING') {
      pauseStiVideoV149();
    } else {
      playStiVideoV149();
    }
  }

  function wireStiV149Events(projectEl, index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return;

    if (!proj.video && proj.externalUrl) {
      const mediaBox = projectEl.querySelector('.sti-v148-media-box');
      if (mediaBox) {
        mediaBox.style.cursor = 'pointer';
        mediaBox.addEventListener('click', () => {
          window.open(proj.externalUrl, '_blank', 'noopener,noreferrer');
        });
      }
      return;
    }

    if (proj.video) {
      const img = projectEl.querySelector('.sti-v148-img');
      const vid = projectEl.querySelector('.sti-v148-video');
      const playBtn = projectEl.querySelector('.sti-v148-play');
      const mediaElements = [img, vid, playBtn].filter(Boolean);

      mediaElements.forEach(el => {
        let startX = 0, startY = 0, isPointerDown = false;
        el.addEventListener('pointerdown', (e) => {
          isPointerDown = true;
          startX = e.clientX;
          startY = e.clientY;
        });

        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (isPointerDown) {
            const deltaX = Math.abs(e.clientX - startX);
            const deltaY = Math.abs(e.clientY - startY);
            isPointerDown = false;
            if (Math.hypot(deltaX, deltaY) > 8) return;
          }

          toggleStiPlaybackV149();
        });
      });
    }
  }

  function showStiProjectV149(newIndex) {
    if (newIndex < 0 || newIndex >= soundToImageAudiovisualProjects.length) return;
    if (newIndex === currentStiV149Index && document.querySelector('.sti-v149-project')) return;
    if (isStiV149Transitioning) return;

    isStiV149Transitioning = true;
    const stage = document.getElementById('stiStage');
    if (!stage) return;

    const oldProj = stage.querySelector('.sti-v149-project');
    if (oldProj) {
      const vid = oldProj.querySelector('.sti-v148-video');
      if (vid && !vid.paused) {
        try { vid.pause(); } catch(e) {}
      }
      oldProj.classList.add('sti-fading-out');
    }

    currentStiV149Index = newIndex;

    const counterEl = document.getElementById('stiV149Counter');
    if (counterEl) {
      counterEl.textContent = `${String(newIndex + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}`;
    }

    const dots = stage.querySelectorAll('.sti-v149-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newIndex);
    });

    setTimeout(() => {
      stage.innerHTML = renderStiV149(newIndex);
      const newProj = stage.querySelector('.sti-v149-project');
      if (newProj) {
        newProj.classList.add('sti-fading-in');
        wireStiV149Events(newProj, newIndex);

        const newDots = newProj.querySelectorAll('.sti-v149-dot');
        newDots.forEach((dot, idx) => {
          dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showStiProjectV149(idx);
          });
        });

        setTimeout(() => newProj.classList.remove('sti-fading-in'), 350);
      }
      isStiV149Transitioning = false;
    }, 320);
  }

  function initStiV149() {
    window.showStiProjectV149 = showStiProjectV149;
    window.toggleStiPlaybackV149 = toggleStiPlaybackV149;

    const stage = document.getElementById('stiStage');
    if (!stage) return;

    stage.innerHTML = renderStiV149(currentStiV149Index);
    const initialProj = stage.querySelector('.sti-v149-project');
    if (initialProj) {
      wireStiV149Events(initialProj, currentStiV149Index);
      const dots = initialProj.querySelectorAll('.sti-v149-dot');
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showStiProjectV149(idx);
        });
      });
    }

    // Wheel and Touch gesture navigation
    let stiLockout = false;
    const stiSection = document.getElementById('soundToImage');
    if (stiSection) {
      stiSection.addEventListener('wheel', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV149Transitioning) return;
        if (Math.abs(e.deltaY) < 30) return;

        stiLockout = true;
        const dir = e.deltaY > 0 ? 1 : -1;
        const targetIdx = (currentStiV149Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
        showStiProjectV149(targetIdx);
        setTimeout(() => { stiLockout = false; }, 600);
      }, { passive: true });

      let touchStartY = 0;
      stiSection.addEventListener('touchstart', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (e.touches && e.touches.length > 0) touchStartY = e.touches[0].clientY;
      }, { passive: true });

      stiSection.addEventListener('touchend', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV149Transitioning) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const deltaY = touchStartY - e.changedTouches[0].clientY;
          if (Math.abs(deltaY) >= 50) {
            stiLockout = true;
            const dir = deltaY > 0 ? 1 : -1;
            const targetIdx = (currentStiV149Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
            showStiProjectV149(targetIdx);
            setTimeout(() => { stiLockout = false; }, 600);
          }
        }
      }, { passive: true });
    }

    // Tab switch pause safety
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (link.getAttribute('data-tab-target') !== 'soundToImage') {
          pauseStiVideoV149();
        }
      });
    });
  }

  // --- V151 SOUND TO IMAGE INTERACTION LAYER — PHASE 1 ---
  let currentStiV151Index = 0;
  let isStiV151Transitioning = false;

  function renderStiProjectV151(index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return '';

    const isPlayable = !!proj.video;
    const isPark = proj.id === 'park-chan-wook';
    const hasScrubber = mainVersion >= 162 && isPlayable;

    return `
      <div class="sti-v149-project sti-v151-project" data-sti-index="${index}" data-playback-state="IDLE">
        <!-- Vertical Project Composition (.sti-v149-composition) -->
        <div class="sti-v149-composition">
          <!-- 1. Media Area (Normal Flow) -->
          <div class="sti-v148-media">
            <div class="sti-v148-media-box" ${isPark && !isPlayable ? 'style="cursor: pointer;"' : ''}>
              <img class="sti-v148-img" src="${proj.thumbnail}" alt="${proj.title}">
              ${isPlayable ? `<video class="sti-v148-video" src="${proj.video}" data-video-src="${proj.video}" playsinline preload="metadata"></video>` : ''}
              ${isPlayable ? `<button type="button" class="sti-v148-play" aria-label="Play Video">▶</button>` : ''}
              ${hasScrubber ? `
                <div class="sti-v162-progress-hit" role="slider" tabindex="0" aria-label="Video progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                  <div class="sti-v162-progress-track">
                    <div class="sti-v162-progress-fill"></div>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 2. Independent Centered Info Below Media (Normal Flow) -->
          <div class="sti-v148-info">
            <div class="sti-v148-title">${proj.title}</div>
            <div class="sti-v148-credit">${proj.credit}</div>
            <div class="sti-v148-details">
              ${proj.director ? `<div class="sti-v148-context">${proj.director}</div>` : ''}
              <div class="sti-v148-meta">${isPark ? 'CANAL+ · CINÉ+ OCS · 2026' : 'MADE IN SOMEWHERE &amp; ALMAA FILMS · 2026'}</div>
              ${proj.externalUrl ? `
                <div class="sti-v148-action">
                  <a href="${proj.externalUrl}" target="_blank" rel="noopener noreferrer" class="sti-v148-link">
                    WATCH ON CANAL+ ↗
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function pauseStiVideoV151(resetToStart = false) {
    const container = document.getElementById('stiProjectContainer');
    if (!container) return;
    const activeProj = container.querySelector('.sti-v151-project') || container.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const curState = activeProj.getAttribute('data-playback-state') || 'IDLE';
    if (curState === 'IDLE' && !resetToStart) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    if (vid) {
      if (!vid.paused) {
        try { vid.pause(); } catch(e) {}
      }
      if (resetToStart) {
        try { vid.currentTime = 0; } catch(e) {}
        const fill = activeProj.querySelector('.sti-v162-progress-fill');
        if (fill) fill.style.width = '0%';
        const hit = activeProj.querySelector('.sti-v162-progress-hit');
        if (hit) hit.setAttribute('aria-valuenow', '0');
      }
    }
    activeProj.setAttribute('data-playback-state', resetToStart ? 'IDLE' : 'PAUSED');
  }

  function playStiVideoV151() {
    const container = document.getElementById('stiProjectContainer');
    if (!container) return;
    const activeProj = container.querySelector('.sti-v151-project') || container.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const proj = soundToImageAudiovisualProjects[currentStiV151Index];
    if (!proj || !proj.video) return;

    const vid = activeProj.querySelector('.sti-v148-video');
    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';

    if (!vid) return;

    if (currentState === 'PAUSED' && vid.src) {
      const resumePromise = vid.play();
      if (resumePromise !== undefined) {
        resumePromise.then(() => {
          activeProj.setAttribute('data-playback-state', 'PLAYING');
        }).catch(err => console.error('[V151 STI] resume error:', err));
      }
      return;
    }

    if (!vid.src || !vid.src.includes(proj.video.replace('../', ''))) {
      vid.src = proj.video;
      vid.preload = 'metadata';
      vid.muted = false;
      vid.controls = false;
      vid.load();
    }

    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        activeProj.setAttribute('data-playback-state', 'PLAYING');
      }).catch(err => {
        console.error('[V151 STI] play error:', err);
        activeProj.setAttribute('data-playback-state', 'IDLE');
      });
    }

    vid.onended = () => {
      activeProj.setAttribute('data-playback-state', 'IDLE');
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch(e) {}
    };
  }

  function toggleStiPlaybackV151() {
    const proj = soundToImageAudiovisualProjects[currentStiV151Index];
    if (!proj || !proj.video) return;

    const container = document.getElementById('stiProjectContainer');
    if (!container) return;
    const activeProj = container.querySelector('.sti-v151-project') || container.querySelector('.sti-v149-project');
    if (!activeProj) return;

    const currentState = activeProj.getAttribute('data-playback-state') || 'IDLE';
    if (currentState === 'PLAYING') {
      pauseStiVideoV151();
    } else {
      playStiVideoV151();
    }
  }

  function seekActiveStiVideo(delta) {
    if (mainVersion < 163) return false;

    const stiSection = document.getElementById('soundToImage');
    if (!stiSection || !stiSection.classList.contains('active')) return false;
    if (isStiV151Transitioning) return false;

    const container = document.getElementById('stiProjectContainer');
    if (!container) return false;
    const activeProj = container.querySelector('.sti-v151-project') || container.querySelector('.sti-v149-project');
    if (!activeProj) return false;

    const currentState = activeProj.getAttribute('data-playback-state');
    if (currentState !== 'PLAYING' && currentState !== 'PAUSED') return false;

    const vid = activeProj.querySelector('.sti-v148-video');
    if (!vid || !Number.isFinite(vid.duration) || vid.duration <= 0) return false;

    const targetTime = Math.max(0, Math.min(vid.duration, vid.currentTime + delta));
    vid.currentTime = targetTime;

    const pct = Math.min(Math.max(targetTime / vid.duration, 0), 1);
    const progressFill = activeProj.querySelector('.sti-v162-progress-fill');
    const progressHit = activeProj.querySelector('.sti-v162-progress-hit');
    if (progressFill) progressFill.style.width = `${pct * 100}%`;
    if (progressHit) progressHit.setAttribute('aria-valuenow', Math.round(pct * 100));

    return true;
  }
  window.seekActiveStiVideo = seekActiveStiVideo;

  function wireStiV151Events(projectEl, index) {
    const proj = soundToImageAudiovisualProjects[index];
    if (!proj) return;

    if (!proj.video && proj.externalUrl) {
      const mediaBox = projectEl.querySelector('.sti-v148-media-box');
      if (mediaBox) {
        mediaBox.style.cursor = 'pointer';
        mediaBox.addEventListener('click', () => {
          window.open(proj.externalUrl, '_blank', 'noopener,noreferrer');
        });
      }
      return;
    }

    if (proj.video) {
      const mediaBox = projectEl.querySelector('.sti-v148-media-box');
      const img = projectEl.querySelector('.sti-v148-img');
      const vid = projectEl.querySelector('.sti-v148-video');
      const playBtn = projectEl.querySelector('.sti-v148-play');
      const mediaElements = [mediaBox, img, vid, playBtn].filter(Boolean);

      if (mediaBox) {
        mediaBox.style.cursor = 'pointer';
      }

      mediaElements.forEach(el => {
        let startX = 0, startY = 0, isPointerDown = false;
        el.addEventListener('pointerdown', (e) => {
          isPointerDown = true;
          startX = e.clientX;
          startY = e.clientY;
        });

        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (isPointerDown) {
            const deltaX = Math.abs(e.clientX - startX);
            const deltaY = Math.abs(e.clientY - startY);
            isPointerDown = false;
            if (Math.hypot(deltaX, deltaY) > 8) return;
          }

          toggleStiPlaybackV151();
        });
      });

      // V162 Sound to Image Minimal Interactive Video Scrubber
      const progressHit = projectEl.querySelector('.sti-v162-progress-hit');
      const progressFill = projectEl.querySelector('.sti-v162-progress-fill');
      if (progressHit && progressFill && vid) {
        let isScrubbing = false;
        let wasPlayingBeforeScrub = false;
        let rafId = null;

        function updateProgress() {
          if (!vid || !vid.duration || isNaN(vid.duration) || isScrubbing) return;
          const pct = Math.min(Math.max(vid.currentTime / vid.duration, 0), 1);
          progressFill.style.width = `${pct * 100}%`;
          progressHit.setAttribute('aria-valuenow', Math.round(pct * 100));
        }

        function stepProgress() {
          updateProgress();
          if (!vid.paused && !vid.ended) {
            rafId = requestAnimationFrame(stepProgress);
          } else {
            rafId = null;
          }
        }

        function startProgressLoop() {
          if (!rafId && !vid.paused && !vid.ended) {
            rafId = requestAnimationFrame(stepProgress);
          }
        }

        function stopProgressLoop() {
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        }

        vid.addEventListener('play', startProgressLoop);
        vid.addEventListener('playing', startProgressLoop);
        vid.addEventListener('pause', () => {
          stopProgressLoop();
          updateProgress();
        });
        vid.addEventListener('timeupdate', updateProgress);
        vid.addEventListener('ended', () => {
          stopProgressLoop();
          progressFill.style.width = '100%';
          progressHit.setAttribute('aria-valuenow', '100');
        });

        function seekFromPointer(clientX) {
          const rect = progressHit.getBoundingClientRect();
          if (rect.width <= 0) return;
          const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
          if (vid.duration && !isNaN(vid.duration)) {
            vid.currentTime = ratio * vid.duration;
          }
          progressFill.style.width = `${ratio * 100}%`;
          progressHit.setAttribute('aria-valuenow', Math.round(ratio * 100));
        }

        progressHit.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          e.stopPropagation();
          isScrubbing = true;
          wasPlayingBeforeScrub = !vid.paused;
          if (wasPlayingBeforeScrub) {
            try { vid.pause(); } catch(err) {}
          }
          progressHit.classList.add('is-scrubbing');
          try {
            progressHit.setPointerCapture(e.pointerId);
          } catch(err) {}
          seekFromPointer(e.clientX);
        });

        progressHit.addEventListener('pointermove', (e) => {
          if (!isScrubbing) return;
          e.preventDefault();
          e.stopPropagation();
          seekFromPointer(e.clientX);
        });

        function endScrub(e) {
          if (!isScrubbing) return;
          e.preventDefault();
          e.stopPropagation();
          isScrubbing = false;
          progressHit.classList.remove('is-scrubbing');
          try {
            progressHit.releasePointerCapture(e.pointerId);
          } catch(err) {}
          seekFromPointer(e.clientX);
          if (wasPlayingBeforeScrub) {
            vid.play().catch(() => {});
          }
        }

        progressHit.addEventListener('pointerup', endScrub);
        progressHit.addEventListener('pointercancel', endScrub);

        // Click isolation so clicking scrubber does NOT toggle mediaBox play/pause
        progressHit.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          seekFromPointer(e.clientX);
        });

        // Touch event isolation to prevent section project swipe
        progressHit.addEventListener('touchstart', (e) => {
          e.stopPropagation();
        }, { passive: true });
        progressHit.addEventListener('touchmove', (e) => {
          e.stopPropagation();
        }, { passive: true });
        progressHit.addEventListener('touchend', (e) => {
          e.stopPropagation();
        }, { passive: true });

        // Keyboard seeking accessibility
        progressHit.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            e.stopPropagation();
            if (mainVersion >= 163) {
              seekActiveStiVideo(-10);
            } else if (vid.duration) {
              vid.currentTime = Math.max(0, vid.currentTime - 5);
              updateProgress();
            }
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            e.stopPropagation();
            if (mainVersion >= 163) {
              seekActiveStiVideo(10);
            } else if (vid.duration) {
              vid.currentTime = Math.min(vid.duration, vid.currentTime + 5);
              updateProgress();
            }
          } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            toggleStiPlaybackV151();
          }
        });
      }
    }
  }

  function showStiProjectV151(newIndex) {
    if (newIndex < 0 || newIndex >= soundToImageAudiovisualProjects.length) return;
    if (newIndex === currentStiV151Index && document.querySelector('.sti-v151-project')) return;
    if (isStiV151Transitioning) return;

    isStiV151Transitioning = true;
    const stage = document.getElementById('stiStage');
    const container = document.getElementById('stiProjectContainer');
    if (!stage || !container) {
      isStiV151Transitioning = false;
      return;
    }

    // 1. Immediately update persistent Counter and Dots at activation moment (Section 3 & 4)
    currentStiV151Index = newIndex;
    const counterEl = document.getElementById('stiCounter');
    if (counterEl) {
      counterEl.textContent = `${String(newIndex + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}`;
    }
    const dots = stage.querySelectorAll('.sti-v149-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newIndex);
    });

    // 2. Handle outgoing project fade and video audio pause (Section 12 & 13)
    const oldProj = container.querySelector('.sti-v151-project') || container.querySelector('.sti-v149-project');
    if (oldProj) {
      const vid = oldProj.querySelector('.sti-v148-video');
      if (vid) {
        try { 
          vid.pause(); 
          vid.currentTime = 0;
        } catch(e) {}
        const oldFill = oldProj.querySelector('.sti-v162-progress-fill');
        if (oldFill) oldFill.style.width = '0%';
        const oldHit = oldProj.querySelector('.sti-v162-progress-hit');
        if (oldHit) oldHit.setAttribute('aria-valuenow', '0');
      }
      oldProj.setAttribute('data-playback-state', 'IDLE');
      oldProj.classList.add('sti-fading-out');
    }

    // 3. Transition to incoming project
    setTimeout(() => {
      container.innerHTML = renderStiProjectV151(newIndex);
      const newProj = container.querySelector('.sti-v151-project');
      if (newProj) {
        newProj.classList.add('sti-fading-in');
        wireStiV151Events(newProj, newIndex);
        void newProj.offsetWidth;
        requestAnimationFrame(() => {
          newProj.classList.remove('sti-fading-in');
        });
        setTimeout(() => {
          isStiV151Transitioning = false;
        }, 350);
      } else {
        isStiV151Transitioning = false;
      }
    }, 320);
  }

  function initStiV151() {
    window.showStiProjectV151 = showStiProjectV151;
    window.toggleStiPlaybackV151 = toggleStiPlaybackV151;

    const stage = document.getElementById('stiStage');
    if (!stage) return;

    // Ensure persistent project container
    let container = document.getElementById('stiProjectContainer');
    if (!container) {
      container = document.createElement('div');
      container.className = 'sti-v151-project-container';
      container.id = 'stiProjectContainer';
      stage.appendChild(container);
    }

    // Ensure persistent counter
    let counterEl = document.getElementById('stiCounter');
    if (!counterEl) {
      counterEl = document.createElement('div');
      counterEl.className = 'sti-v149-counter sti-v151-counter';
      counterEl.id = 'stiCounter';
      stage.appendChild(counterEl);
    }
    counterEl.textContent = `${String(currentStiV151Index + 1).padStart(2, '0')} / ${String(soundToImageAudiovisualProjects.length).padStart(2, '0')}`;

    // Ensure persistent dots
    let dotsTrack = document.getElementById('stiDots');
    if (!dotsTrack) {
      dotsTrack = document.createElement('div');
      dotsTrack.className = 'sti-v149-dots sti-v151-dots';
      dotsTrack.id = 'stiDots';
      stage.appendChild(dotsTrack);
    }

    dotsTrack.innerHTML = soundToImageAudiovisualProjects.map((_, i) => 
      `<button class="sti-v149-dot ${i === currentStiV151Index ? 'active' : ''}" data-v151-dot="${i}" aria-label="Project ${i + 1}"></button>`
    ).join('');

    dotsTrack.querySelectorAll('.sti-v149-dot').forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showStiProjectV151(idx);
      });
    });

    // Render initial project
    container.innerHTML = renderStiProjectV151(currentStiV151Index);
    const initialProj = container.querySelector('.sti-v151-project');
    if (initialProj) {
      wireStiV151Events(initialProj, currentStiV151Index);
    }

    // Wheel and Touch gesture navigation
    let stiLockout = false;
    const stiSection = document.getElementById('soundToImage');
    if (stiSection) {
      stiSection.addEventListener('wheel', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV151Transitioning) return;
        if (Math.abs(e.deltaY) < 30) return;

        stiLockout = true;
        const dir = e.deltaY > 0 ? 1 : -1;
        const targetIdx = (currentStiV151Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
        showStiProjectV151(targetIdx);
        setTimeout(() => { stiLockout = false; }, 600);
      }, { passive: true });

      let touchStartY = 0;
      stiSection.addEventListener('touchstart', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (e.touches && e.touches.length > 0) touchStartY = e.touches[0].clientY;
      }, { passive: true });

      stiSection.addEventListener('touchend', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiV151Transitioning) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const deltaY = touchStartY - e.changedTouches[0].clientY;
          if (Math.abs(deltaY) >= 50) {
            stiLockout = true;
            const dir = deltaY > 0 ? 1 : -1;
            const targetIdx = (currentStiV151Index + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
            showStiProjectV151(targetIdx);
            setTimeout(() => { stiLockout = false; }, 600);
          }
        }
      }, { passive: true });
    }

    // Tab switch pause safety
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (link.getAttribute('data-tab-target') !== 'soundToImage') {
          pauseStiVideoV151(mainVersion >= 164 ? false : true);
        }
      });
    });
  }

  function initV130SoundToImage() {
    const versionMatch = __rmiVersionMatch();
    const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
    if (currentVersion < 130 || currentVersion >= 148) return;

    const stage = document.getElementById('stiStage');
    const counterEl = document.getElementById('stiProjectCounter');
    const dotsTrack = document.getElementById('stiDotsTrack');

    if (!stage) return;

    // Build Dots
    if (dotsTrack) {
      dotsTrack.innerHTML = '';
      soundToImageAudiovisualProjects.forEach((proj, idx) => {
        const dot = document.createElement('button');
        dot.className = `sti-dot ${idx === currentStiIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Project ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showStiProject(idx);
        });
        dotsTrack.appendChild(dot);
      });
    }

    showStiProject(currentStiIndex);

    // Sound to Image Wheel / Gesture Navigation
    let stiLockout = false;
    const stiSection = document.getElementById('soundToImage');
    if (stiSection) {
      stiSection.addEventListener('wheel', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiTransitioning) return;
        if (Math.abs(e.deltaY) < 30) return;

        stiLockout = true;
        const dir = e.deltaY > 0 ? 1 : -1;
        const targetIdx = (currentStiIndex + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
        showStiProject(targetIdx);

        setTimeout(() => { stiLockout = false; }, 600);
      }, { passive: true });

      let stiTouchStartY = 0;
      stiSection.addEventListener('touchstart', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (e.touches && e.touches.length > 0) stiTouchStartY = e.touches[0].clientY;
      }, { passive: true });

      stiSection.addEventListener('touchend', (e) => {
        if (!stiSection.classList.contains('active')) return;
        if (stiLockout || isStiTransitioning) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const touchEndY = e.changedTouches[0].clientY;
          const deltaY = stiTouchStartY - touchEndY;
          if (Math.abs(deltaY) >= 50) {
            stiLockout = true;
            const dir = deltaY > 0 ? 1 : -1;
            const targetIdx = (currentStiIndex + dir + soundToImageAudiovisualProjects.length) % soundToImageAudiovisualProjects.length;
            showStiProject(targetIdx);
            setTimeout(() => { stiLockout = false; }, 600);
          }
        }
      }, { passive: true });
    }
  }

  // Spacebar Play/Pause Shortcut (V128 Homepage & V130 Sound to Image)
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.key === ' ' || e.keyCode === 32) {
      const versionMatch = __rmiVersionMatch();
      const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;

      if (currentVersion < 128) return;

      const activeEl = document.activeElement;
      if (activeEl) {
        const tagName = activeEl.tagName ? activeEl.tagName.toLowerCase() : '';
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || tagName === 'button' || activeEl.isContentEditable) {
          return;
        }
      }

      const stiSection = document.getElementById('soundToImage');
      const isStiActive = currentVersion >= 130 && stiSection && stiSection.classList.contains('active');

      if (isStiActive) {
        e.preventDefault();
        if (currentVersion >= 151) {
          toggleStiPlaybackV151();
        } else if (currentVersion >= 149) {
          toggleStiPlaybackV149();
        } else if (currentVersion >= 148) {
          toggleStiPlaybackV148();
        } else {
          toggleStiPlayback(currentStiIndex);
        }
        return;
      }

      if (document.body.classList.contains('home-active')) {
        e.preventDefault();
        toggleHomePlayback(currentSlideIndex);
      }
    }
  });

  // V163 Sound to Image Keyboard ±10s Video Seek Shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const activeEl = document.activeElement;
      if (activeEl) {
        const tagName = activeEl.tagName ? activeEl.tagName.toLowerCase() : '';
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || activeEl.isContentEditable) {
          return;
        }
      }

      const delta = (e.key === 'ArrowRight') ? 10 : -10;
      if (typeof seekActiveStiVideo === 'function') {
        const handled = seekActiveStiVideo(delta);
        if (handled) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }
  });

  // Build and run slideshow V2
  buildHomeSlideshowAndTimeline();
  setupTimelineResetListener();
  bindTimelineThumbnailsClick();
  setupSlideshowMouseController();
  setupV110HomepageVerticalNavigation();
  showSlide(currentSlideIndex, currentVirtualIndex);
  
  const versionMatch = __rmiVersionMatch();
  const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 4;
  if (currentVersion >= 151) {
    initStiV151();
  } else if (currentVersion >= 149) {
    initStiV149();
  } else if (currentVersion >= 148) {
    initStiV148();
  } else {
    initV130SoundToImage();
  }
  resetUiTimeout();
});
