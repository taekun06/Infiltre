/* ===== words.js ===== */
/* Base de mots du jeu
 * Fichier généré depuis la version monolithique lors de la refonte technique.
 */

// --- BASE DE DONNÉES DE 300 MOTS ---
const wordList = [
    "Clé", "Parapluie", "Miroir", "Brosse à dents", "Briquet", "Sac à dos", "Lampe de poche", "Stylo", "Lunettes", "Peigne", "Rasoir", "Cintre", "Télécommande", "Oreiller", "Serviette", "Ventilateur", "Porte-monnaie", "Cadenas", "Éponge", "Savon", "Calculatrice", "Calendrier", "Horloge", "Thermomètre", "Masque", "Agrafeuse", "Tasse", "Fourchette", "Couteau", "Assiette",
    "Lion", "Cactus", "Volcan", "Papillon", "Méduse", "Baleine", "Nuage", "Lune", "Iceberg", "Forêt", "Diamant", "Éclair", "Perle", "Fossile", "Dinosaure", "Moustique", "Caméléon", "Tournesol", "Vague", "Gravité", "Corail", "Noix de coco", "Désert", "Aigle", "Séisme", "Avalanche", "Plume", "Fourmi", "Champignon", "Escargot",
    "Tour Eiffel", "Bibliothèque", "Prison", "Phare", "Hôpital", "Pyramide", "Colisée", "Aéroport", "Station de ski", "Bunker", "Studio de cinéma", "Musée", "Cathédrale", "Pôle Nord", "Ferme", "Grotte", "Mine", "Laboratoire", "Base sous-marine", "Cirque", "Stade", "Serre", "Château", "Titanic", "Ambassade", "Parc d'attraction", "Tribunal", "Temple", "Pont", "Égout",
    "Temps", "Sommeil", "Nostalgie", "Mensonge", "Justice", "Rêve", "Ombre", "Hasard", "Mort", "Ennui", "Peur", "Secret", "Vérité", "Destin", "Silence", "Liberté", "Espoir", "Échec", "Chance", "Imagination", "Colère", "Courage", "Respect", "Amitié", "Patience", "Chaos", "Magie", "Pouvoir", "Paix", "Culture",
    "Pizza", "Baguette", "Hamburger", "Sushis", "Curry", "Fondue", "Chocolat", "Thé", "Café", "Glace", "Oignon", "Pomme", "Miel", "Œuf", "Crêpe", "Bretzel", "Épice", "Sel", "Poivre", "Gâteau", "Soupe", "Salade", "Barbecue", "Fromage", "Croissant", "Kebab", "Paella", "Taco", "Muffin", "Sirop",
    "Robot", "Wi-Fi", "Satellite", "Fusée", "Laser", "Puce électronique", "Télescope", "Drone", "Scanner", "Batterie", "Sous-marin", "Aimant", "Atome", "ADN", "Cerveau", "Radiographie", "Logiciel", "Disque dur", "Ampoule", "Moteur", "Antenne", "Imprimante", "Clavier", "Réalité virtuelle", "Vaccin", "Microscope", "Vis", "Engrenage", "Écran", "Fibre optique",
    "Pinceau", "Piano", "Guitare", "Caméra", "Violon", "Livre", "Sculpture", "Tableau", "Photographie", "Stylo plume", "Micro", "Partitions", "Projecteur", "Costume", "Galerie", "Bande dessinée", "Cinéma", "Opéra", "Poésie", "Calligraphie", "Fresque", "Dessin animé", "Design", "Architecture", "Instrument", "Graffiti", "Marionnette", "Mime",
    "Ballon", "Raquette", "Vélo", "Skis", "Rugby", "Surf", "Haltères", "Maillot", "Médaille", "Trophée", "Boussole", "Tente", "Cerf-volant", "Piscine", "Échiquier", "Cartes", "Dé", "Skate", "Ring", "Filet", "Sifflet", "Chronomètre", "Cible", "Fléchettes", "Gant de boxe", "Casque", "Corde à sauter", "Yoga", "Rollers", "Trottinette",
    "Détective", "Pirate", "Magicien", "Astronaute", "Roi", "Ninja", "Alien", "Père Noël", "Espion", "Docteur", "Clown", "Chevalier", "Fantôme", "Vampire", "Samouraï", "Cuisinier", "Pompier", "Policier", "Enseignant", "Artiste", "Athlète", "Aventurier", "Garde du corps", "Savant fou", "Sorcier", "Explorateur", "Génie", "Juge", "Pilote",
    "Brique", "Bouton", "Ficelle", "Reflet", "Écho", "Trace", "Message", "Signature", "Détail", "Prototype", "Symbole", "Étiquette", "Cachette", "Souvenir", "Horizon", "Souffle", "Étincelle", "Puzzle", "Équilibre", "Fuite", "Bulle", "Impact", "Transition", "Tournant", "Limite", "Option", "Début", "Énergie", "Vibration", "Fréquence"
];

// BLACK EDITION : notions moins concrètes, nuances et concepts qui demandent
// des questions plus précises. Les mots trop techniques ou introuvables sont évités.
const blackWordList = [
    "Paradoxe", "Intuition", "Manipulation", "Coïncidence", "Ambition",
    "Culpabilité", "Jalousie", "Influence", "Rumeur", "Illusion",
    "Mémoire", "Instinct", "Conscience", "Réputation", "Trahison",
    "Contradiction", "Confiance", "Soupçon", "Alibi", "Compromis",
    "Dilemme", "Priorité", "Habitude", "Héritage", "Tradition",
    "Évolution", "Révolution", "Frontière", "Interdit", "Privilège",
    "Anonymat", "Identité", "Autorité", "Stratégie", "Négociation",
    "Vengeance", "Sacrifice", "Tentative", "Conséquence", "Prétexte",
    "Énigme", "Labyrinthe", "Mirage", "Vertige", "Éclipse",
    "Constellation", "Atmosphère", "Écosystème", "Métamorphose", "Résonance",
    "Fracture", "Empreinte", "Vestige", "Antidote", "Catalyseur",
    "Algorithme", "Cryptage", "Réseau", "Intelligence artificielle", "Clone",
    "Dimension", "Univers parallèle", "Trou noir", "Matière noire", "Télépathie",
    "Hypnose", "Prophétie", "Légende", "Malédiction", "Rituel",
    "Civilisation", "Empire", "Rébellion", "Alliance", "Conspiration",
    "Diplomatie", "Contrebande", "Espionnage", "Sabotage", "Infiltration",
    "Improvisation", "Mise en scène", "Caricature", "Métaphore", "Symphonie",
    "Chef-d’œuvre", "Inspiration", "Perspective", "Nostalgie", "Adrénaline",
    "Immunité", "Mutation", "Gravitation", "Apesanteur", "Biodiversité",
    "Hologramme", "Simulation", "Prototype", "Archive", "Décryptage"
];

// MODE PERSONNAGES : personnalités et personnages immédiatement reconnaissables
// par un large public. Les noms restent volontairement courts à afficher.
const characterWordList = [
    "Harry Potter", "Hermione Granger", "Dark Vador", "Yoda", "Luke Skywalker",
    "Spider-Man", "Batman", "Superman", "Wonder Woman", "Iron Man",
    "Hulk", "Thor", "Captain America", "Deadpool", "Joker",
    "Harley Quinn", "Black Panther", "Thanos", "Wolverine", "Groot",
    "Mario", "Luigi", "Princesse Peach", "Sonic", "Pikachu",
    "Link", "Lara Croft", "Kratos", "Minecraft Steve", "Pac-Man",
    "Mickey", "Minnie", "Donald", "Picsou", "Stitch",
    "Simba", "Mufasa", "Aladdin", "Jasmine", "Elsa",
    "Vaiana", "Raiponce", "Blanche-Neige", "Cendrillon", "Peter Pan",
    "Capitaine Crochet", "Buzz l’Éclair", "Woody", "Shrek", "L’Âne",
    "Gru", "Les Minions", "Kung Fu Panda", "Totoro", "Naruto",
    "Goku", "Vegeta", "Luffy", "Sailor Moon", "Astérix",
    "Obélix", "Tintin", "Milou", "Lucky Luke", "Gaston Lagaffe",
    "Le Petit Prince", "Sherlock Holmes", "James Bond", "Indiana Jones", "Rocky",
    "Jack Sparrow", "Mercredi Addams", "Mr Bean", "Barbie", "Ken",
    "Michael Jackson", "Beyoncé", "Lady Gaga", "Rihanna", "Taylor Swift",
    "Adele", "Stromae", "Soprano", "Édith Piaf", "Elvis Presley",
    "Cristiano Ronaldo", "Lionel Messi", "Kylian Mbappé", "Zinédine Zidane", "Michael Jordan",
    "Usain Bolt", "Serena Williams", "Teddy Riner", "Tony Parker", "Lewis Hamilton",
    "Albert Einstein", "Marie Curie", "Napoléon", "Cléopâtre", "Jules César",
    "Léonard de Vinci", "Charlie Chaplin", "Marilyn Monroe", "MrBeast", "Squeezie"
];

/* ===== audio.js ===== */
/* Audio, ambiance et retours haptiques
 * Fichier généré depuis la version monolithique lors de la refonte technique.
 */

// --- MOTEUR AUDIO CINÉMATIQUE : MIXAGE, LIMITEUR ET AMBIANCE ---
    const SOUND_PREFERENCE_KEY = 'tricheur_sound_enabled';
    const MASTER_SOUND_VOLUME = 0.94;
    let audioCtx = null;
    let audioMaster = null;
    let audioCompressor = null;
    let eliminationAmbience = null;
    let soundEnabled = localStorage.getItem(SOUND_PREFERENCE_KEY) !== 'false';

    function initAudioMoteur() {
        if (!soundEnabled) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        if (!audioCtx) {
            audioCtx = new AudioContextClass();
            audioMaster = audioCtx.createGain();
            audioCompressor = audioCtx.createDynamicsCompressor();
            audioCompressor.threshold.value = -22;
            audioCompressor.knee.value = 18;
            audioCompressor.ratio.value = 7;
            audioCompressor.attack.value = 0.006;
            audioCompressor.release.value = 0.24;
            audioMaster.gain.value = MASTER_SOUND_VOLUME;
            audioMaster.connect(audioCompressor);
            audioCompressor.connect(audioCtx.destination);
        }

        if (audioCtx.state === 'suspended') audioCtx.resume();
    }

    function connectToAudioMix(node) {
        if (audioMaster) node.connect(audioMaster);
    }

    function updateSoundButton() {
        const button = document.getElementById('btn-sound-toggle');
        if (!button) return;
        const icon = document.createElement('span');
        icon.className = 'menu-sound-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = soundEnabled ? '🔊' : '🔇';
        const label = document.createElement('span');
        label.textContent = soundEnabled ? 'Son activé' : 'Son coupé';
        button.replaceChildren(icon, label);
        button.classList.toggle('muted', !soundEnabled);
        button.setAttribute('aria-label', soundEnabled ? 'Désactiver le son' : 'Activer le son');
        button.setAttribute('aria-pressed', String(soundEnabled));
        button.title = soundEnabled ? 'Désactiver le son' : 'Activer le son';
    }

    function toggleQuickMenu() {
        const menu = document.getElementById('quick-menu');
        const button = document.getElementById('btn-quick-menu');
        if (!menu || !button) return;
        const opening = menu.hidden;
        menu.hidden = !opening;
        menu.setAttribute('aria-hidden', String(!opening));
        button.setAttribute('aria-expanded', String(opening));
        button.setAttribute('aria-label', opening ? 'Fermer le menu et les règles' : 'Ouvrir le menu et les règles');
        if (opening) {
            playSound('click');
            playHaptic('tap');
            window.setTimeout(() => document.getElementById('btn-close-quick-menu')?.focus(), 0);
        }
    }

    function closeQuickMenu(restoreFocus = true) {
        const menu = document.getElementById('quick-menu');
        const button = document.getElementById('btn-quick-menu');
        if (!menu || !button || menu.hidden) return;
        menu.hidden = true;
        menu.setAttribute('aria-hidden', 'true');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Ouvrir le menu et les règles');
        if (restoreFocus) button.focus();
    }

    function toggleSound() {
        soundEnabled = !soundEnabled;
        localStorage.setItem(SOUND_PREFERENCE_KEY, String(soundEnabled));

        if (!soundEnabled) {
            stopEliminationAmbience(true);
            if (audioMaster && audioCtx) audioMaster.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.02);
        } else {
            initAudioMoteur();
            if (audioMaster && audioCtx) audioMaster.gain.setTargetAtTime(MASTER_SOUND_VOLUME, audioCtx.currentTime, 0.02);
            playSound('ui');
            if (currentActiveScreenId === 'screen-elimination') startEliminationAmbience();
        }
        updateSoundButton();
    }

    function createTone(frequency, duration, volume, options = {}) {
        if (!audioCtx || !audioMaster) return;
        const start = audioCtx.currentTime + (options.delay || 0);
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        oscillator.type = options.wave || 'sine';
        oscillator.frequency.setValueAtTime(frequency, start);
        if (options.endFrequency) oscillator.frequency.exponentialRampToValueAtTime(options.endFrequency, start + duration);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), start + Math.min(0.025, duration / 3));
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain);
        connectToAudioMix(gain);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.02);
    }

    function stopEliminationAmbience(immediate = false) {
        if (!eliminationAmbience || !audioCtx) return;
        const ambience = eliminationAmbience;
        eliminationAmbience = null;
        const now = audioCtx.currentTime;
        const stopAt = immediate ? now + 0.015 : now + 0.35;
        try {
            ambience.master.gain.cancelScheduledValues(now);
            ambience.master.gain.setValueAtTime(Math.max(0.0001, ambience.master.gain.value), now);
            ambience.master.gain.exponentialRampToValueAtTime(0.0001, stopAt);
            ambience.oscillators.forEach(oscillator => oscillator.stop(stopAt + 0.03));
            ambience.lfo.stop(stopAt + 0.03);
        } catch (error) {
            // Les nœuds peuvent déjà être arrêtés lors d'une navigation rapide.
        }
    }

    function startEliminationAmbience() {
        if (!soundEnabled) return;
        initAudioMoteur();
        if (!audioCtx || !audioMaster) return;
        stopEliminationAmbience(true);

        const now = audioCtx.currentTime;
        const master = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        const lowDrone = audioCtx.createOscillator();
        const highDrone = audioCtx.createOscillator();
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();

        lowDrone.type = 'sawtooth';
        lowDrone.frequency.value = 45;
        highDrone.type = 'sine';
        highDrone.frequency.value = 68;
        lfo.type = 'sine';
        lfo.frequency.value = 0.38;
        lfoGain.gain.value = 6;
        filter.type = 'lowpass';
        filter.frequency.value = 175;
        filter.Q.value = 4;
        master.gain.setValueAtTime(0.0001, now);
        master.gain.exponentialRampToValueAtTime(0.018, now + 0.55);

        lowDrone.connect(filter);
        highDrone.connect(filter);
        filter.connect(master);
        connectToAudioMix(master);
        lfo.connect(lfoGain);
        lfoGain.connect(highDrone.frequency);

        lowDrone.start(now);
        highDrone.start(now);
        lfo.start(now);
        eliminationAmbience = { master, filter, oscillators: [lowDrone, highDrone], lfo };
    }

    function updateEliminationAmbience(intensity) {
        if (!eliminationAmbience || !audioCtx) return;
        const safeIntensity = Math.max(0, Math.min(1, intensity));
        const now = audioCtx.currentTime;
        eliminationAmbience.master.gain.setTargetAtTime(0.018 + safeIntensity * 0.018, now, 0.3);
        eliminationAmbience.filter.frequency.setTargetAtTime(175 + safeIntensity * 245, now, 0.35);
        eliminationAmbience.oscillators[0].frequency.setTargetAtTime(45 + safeIntensity * 15, now, 0.35);
        eliminationAmbience.oscillators[1].frequency.setTargetAtTime(68 + safeIntensity * 26, now, 0.35);
    }

    function playSound(type) {
        if (!soundEnabled) return;
        try {
            initAudioMoteur();
            if (!audioCtx || !audioMaster) return;

            // Identité sonore principale choisie : P — Pulsation grave.
            // Les actions courantes et les transitions utilisent toutes ce même motif.
            if (['click', 'ui', 'phase', 'narrative'].includes(type)) {
                createTone(110, 0.24, 0.1, { wave: 'sine', endFrequency: 73.42 });
            } else if (type === 'shuffle') {
                // Pulsation grave conservée, enrichie par des passages rapides
                // et un impact final lorsque le paquet se verrouille.
                createTone(110, 0.28, 0.12, { wave: 'sine', endFrequency: 73.42 });
                createTone(220, 0.12, 0.045, { wave: 'triangle', delay: 0.18, endFrequency: 146.83 });
                createTone(246.94, 0.12, 0.048, { wave: 'triangle', delay: 0.38, endFrequency: 164.81 });
                createTone(293.66, 0.13, 0.052, { wave: 'triangle', delay: 0.59, endFrequency: 196 });
                createTone(329.63, 0.14, 0.055, { wave: 'triangle', delay: 0.8, endFrequency: 220 });
                createTone(82.41, 0.58, 0.15, { wave: 'sine', delay: 1.38, endFrequency: 55 });
                createTone(164.81, 0.48, 0.07, { wave: 'triangle', delay: 1.4, endFrequency: 110 });
            } else if (type === 'select') {
                createTone(440, 0.1, 0.06, { wave: 'sine' });
                createTone(659.25, 0.16, 0.052, { wave: 'sine', delay: 0.055 });
            } else if (type === 'pause') {
                createTone(246.94, 0.22, 0.07, { wave: 'sine', endFrequency: 164.81 });
            } else if (type === 'warning') {
                createTone(130.81, 0.16, 0.09, { wave: 'triangle', endFrequency: 98 });
                createTone(130.81, 0.16, 0.075, { wave: 'triangle', delay: 0.2, endFrequency: 98 });
            } else if (type === 'flip') {
                createTone(392, 0.13, 0.06, { wave: 'sine' });
                createTone(587.33, 0.2, 0.052, { wave: 'sine', delay: 0.1 });
            } else if (type === 'decision') {
                createTone(160, 0.18, 0.12, { wave: 'sine', endFrequency: 92 });
                createTone(480, 0.13, 0.065, { wave: 'triangle', delay: 0.025, endFrequency: 360 });
            } else if (type === 'tick') {
                createTone(138, 0.11, 0.105, { wave: 'triangle', endFrequency: 92 });
            } else if (type === 'discussion-beat') {
                createTone(150, 0.2, 0.65, { wave: 'sine', endFrequency: 95 });
                createTone(125, 0.23, 0.55, { wave: 'sine', delay: 0.21, endFrequency: 82 });
                createTone(280, 0.12, 0.22, { wave: 'triangle', delay: 0.012, endFrequency: 160 });
            } else if (type === 'tension' || type === 'tension-urgent') {
                const urgent = type === 'tension-urgent';
                createTone(urgent ? 98 : 74, 0.23, urgent ? 0.105 : 0.07, { wave: 'sine', endFrequency: 48 });
                if (urgent) createTone(88, 0.2, 0.075, { wave: 'sine', delay: 0.28, endFrequency: 52 });
            } else if (type === 'gong') {
                [110, 164.8, 220, 311].forEach((frequency, index) => {
                    createTone(frequency, 2.2 - index * 0.12, 0.065 / (1 + index * 0.22), { wave: index < 2 ? 'triangle' : 'sine', endFrequency: frequency * 0.72 });
                });
            } else if (type === 'success') {
                createTone(523.25, 0.55, 0.095, { wave: 'sine' });
                createTone(659.25, 0.6, 0.095, { wave: 'sine', delay: 0.18 });
                createTone(783.99, 0.68, 0.09, { wave: 'sine', delay: 0.36 });
                createTone(523.25, 2.32, 0.055, { wave: 'sine', delay: 0.62 });
                createTone(659.25, 2.28, 0.047, { wave: 'sine', delay: 0.66 });
                createTone(783.99, 2.24, 0.042, { wave: 'sine', delay: 0.7 });
            } else if (type === 'fail') {
                createTone(185, 0.72, 0.12, { wave: 'sawtooth', endFrequency: 72 });
                createTone(92, 0.85, 0.085, { wave: 'sine', delay: 0.08, endFrequency: 48 });
            } else if (type === 'impostor-win') {
                createTone(73.42, 0.42, 0.21, { wave: 'triangle' });
                createTone(73.42, 0.42, 0.2, { wave: 'triangle', delay: 0.45 });
                createTone(87.31, 0.48, 0.19, { wave: 'triangle', delay: 0.9 });
                createTone(98, 0.52, 0.18, { wave: 'triangle', delay: 1.4 });
                createTone(110, 1.25, 0.16, { wave: 'triangle', delay: 1.86 });
                createTone(164.81, 1.2, 0.105, { wave: 'sine', delay: 1.9 });
                createTone(220, 0.92, 0.075, { wave: 'sine', delay: 2.14, endFrequency: 207.65 });
            } else if (type === 'surprise') {
                createTone(210, 0.52, 0.11, { wave: 'sawtooth', endFrequency: 510 });
                createTone(102, 0.66, 0.07, { wave: 'sine', endFrequency: 68 });
            }
        } catch (error) {
            console.warn('Audio indisponible :', error);
        }
    }

    function playHaptic(type) {
        if (!('vibrate' in navigator) || document.visibilityState !== 'visible') return;
        const patterns = {
            tap: 18,
            select: [16, 22, 26],
            phase: [28, 35, 52],
            pause: 32,
            warning: [42, 38, 42],
            reveal: [24, 28, 42],
            citizenRole: [18, 26, 34],
            tricheurRole: [72, 34, 115],
            maitreRole: [30, 32, 68],
            compliceRole: [24, 18, 24, 18, 52],
            decision: 48,
            lock: [65, 35, 105],
            timerEnd: [95, 55, 95],
            citizenWin: [45, 35, 70, 35, 135],
            impostorWin: [115, 55, 115, 55, 180],
            failure: 170
        };
        const pattern = patterns[type];
        if (pattern === undefined) return;
        try { navigator.vibrate(pattern); } catch (error) { /* Vibration indisponible. */ }
    }

/* ===== scoring.js ===== */
/* Règles de score et résolution des manches
 * Fichier généré depuis la version monolithique lors de la refonte technique.
 */

// --- CALCUL DES POINTS SANS MODIFIER L'ÉTAT RÉEL DU SCORE DES PARTIES ---
    function calculateTemporaryScores() {
        let tempScores = {};
        // Copie des scores de base de la partie
        playerRoles.forEach(p => {
            tempScores[p.id] = playerScores[p.id] || 0;
        });

        // Si personne ne trouve le mot, la manche s'arrête et le Tricheur perd 1 point.
        if (selectedFinderId === 'none') {
            const tricheur = playerRoles.find(p => p.role === 'Tricheur');
            if (tricheur) tempScores[tricheur.id] -= 1;
            return tempScores;
        }

        const finder = playerRoles.find(p => p.id === parseInt(selectedFinderId));
        if (!finder || !finderAccusation) return tempScores;

        // Le groupe accuse immédiatement le trouveur d'être le Tricheur.
        if (finderAccusation === 'accused') {
            playerRoles.forEach(p => {
                if (finder.role === 'Tricheur') {
                    if (p.role === 'Citoyen' || p.role === 'Maître') tempScores[p.id] += 1;
                } else if (finder.role === 'Complice') {
                    if (p.role === 'Complice') tempScores[p.id] += 3;
                    else if (p.role === 'Tricheur') tempScores[p.id] += 1;
                } else {
                    if (p.role === 'Tricheur') tempScores[p.id] += 2;
                    else if (p.role === 'Complice') tempScores[p.id] += 1;
                }
            });
            return tempScores;
        }

        // Faire confiance à un imposteur lui offre la manche immédiatement.
        if (finder.role === 'Tricheur' || finder.role === 'Complice') {
            tempScores[finder.id] += 2;
            return tempScores;
        }

        // Le trouveur est Citoyen : +1 point, puis application du vote d'élimination.
        tempScores[finder.id] += 1;
        if (selectedEliminatedId !== null) {
            const eliminatedPlayer = playerRoles.find(p => p.id === selectedEliminatedId);
            if (eliminatedPlayer) {
                playerRoles.forEach(p => {
                    if (eliminatedPlayer.role === 'Tricheur') {
                        if (p.role === 'Citoyen' || p.role === 'Maître') { tempScores[p.id] += 1; }
                    } else if (eliminatedPlayer.role === 'Complice') {
                        if (p.role === 'Complice') { tempScores[p.id] += 3; } 
                        else if (p.role === 'Tricheur') { tempScores[p.id] += 1; }
                    } else {
                        if (p.role === 'Tricheur') { tempScores[p.id] += 2; } 
                        else if (p.role === 'Complice') { tempScores[p.id] += 1; }
                    }
                });
            }
        }

        return tempScores;
    }

    function getRoundOutcome() {
        const finder = selectedFinderId === 'none' ? null : playerRoles.find(p => p.id === parseInt(selectedFinderId));
        const eliminated = playerRoles.find(p => p.id === selectedEliminatedId);

        if (selectedFinderId === 'none') {
            return {
                icon: '❔', title: 'MOT INTROUVABLE', tone: 'no-word', sound: 'surprise', celebrate: false,
                message: 'Personne n’a trouvé le mot.'
            };
        }

        if (finderAccusation === 'accused' && finder && finder.role === 'Tricheur') {
            return {
                icon: '🎉', title: 'VICTOIRE DU VILLAGE', tone: 'village', sound: 'success', celebrate: true,
                message: 'Bonne intuition : le Tricheur est démasqué.'
            };
        }
        if (finderAccusation === 'accused' && finder && finder.role === 'Citoyen') {
            return {
                icon: '😈', title: 'VICTOIRE DES IMPOSTEURS', tone: 'impostors', sound: 'impostor-win', celebrate: true,
                message: 'Un Enquêteur a été accusé à tort.'
            };
        }
        if (finderAccusation === 'accused' && finder && finder.role === 'Complice') {
            return {
                icon: '🎭', title: 'VICTOIRE DES IMPOSTEURS', tone: 'impostors', sound: 'impostor-win', celebrate: true,
                message: 'Le Complice détourne les soupçons du Tricheur.'
            };
        }
        if (finderAccusation === 'trusted' && finder && (finder.role === 'Tricheur' || finder.role === 'Complice')) {
            return {
                icon: '😈', title: 'VICTOIRE DES IMPOSTEURS', tone: 'impostors', sound: 'impostor-win', celebrate: true,
                message: 'La confiance accordée était fatale.'
            };
        }
        if (eliminated && eliminated.role === 'Tricheur') {
            return {
                icon: '🎉', title: 'VICTOIRE DU VILLAGE', tone: 'village', sound: 'success', celebrate: true,
                message: ''
            };
        }
        if (eliminated && eliminated.role === 'Complice') {
            return {
                icon: '🎭', title: 'VICTOIRE DES IMPOSTEURS', tone: 'impostors', sound: 'impostor-win', celebrate: true,
                message: 'Le Complice se sacrifie pour son camp.'
            };
        }
        return {
            icon: '😈', title: 'VICTOIRE DES IMPOSTEURS', tone: 'impostors', sound: 'impostor-win', celebrate: true,
            message: 'Le vote élimine un innocent.'
        };
    }

/* ===== game.js ===== */
/* État, navigation et déroulement du jeu
 * Fichier généré depuis la version monolithique lors de la refonte technique.
 */

// --- GESTION DU MAINTIEN DE L'ÉCRAN ALLUMÉ (WAKE LOCK) ---
    let wakeLock = null;

    async function requestWakeLock() {
        if ('wakeLock' in navigator) {
            try {
                wakeLock = await navigator.wakeLock.request('screen');
            } catch (err) {
                console.warn(`Impossible de bloquer la mise en veille : ${err.name}, ${err.message}`);
            }
        }
    }

    function releaseWakeLock() {
        if (wakeLock !== null) {
            wakeLock.release();
            wakeLock = null;
        }
    }

    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });

function toggleFullscreen() { let elem = document.documentElement; if (!document.fullscreenElement) { if (elem.requestFullscreen) elem.requestFullscreen(); } else { if (document.exitFullscreen) document.exitFullscreen(); } }

// --- VARIABLES D'ETAT GLOBAL ---
    let playerNames = {}, playerScores = {}, playerRoles = [], currentPlayer = 0, totalPlayers = 6, secretWord = "", isBlackMode = false;
    let gameMode = 'classic';
    let isCollectingNames = false;
    let selectedDuration = 5, timerDuration = 300, timerInterval, timerRunning = false, timerEndAt = null;
    let voteDuration = 180, voteInterval, voteRunning = false, voteEndAt = null, cardIsFlipped = false;
    let eliminationDuration = 120, eliminationInterval = null, eliminationEndAt = null, eliminationRunning = false;
    let tricheurName = ""; 
    let currentActiveScreenId = 'screen-home';
    let previousActiveScreenId = 'screen-home';
    let interactionUnlockTimer = null;
    let ambientBeatTimer = null;
    let ambientWaveTimer = null;
    let recentWords = [];
    let resultRevealed = false;
    let namesStableViewportHeight = 0;
    let championPlayerId = null;
    let pendingGameAction = null;
    let gameActionReturnFocus = null;
    let rankingReturnFocus = null;
    let narrativeSequenceToken = 0;
    let newGameTransitionRunning = false;
    let nextPlayerTransitionRunning = false;
    
    let selectedFinderId = null; 
    let selectedEliminatedId = null; 
    let finderAccusation = null;
    let selectedPeekPlayerId = null;
    let peekModalReturnFocus = null;

    // Le mode Test est volontairement isolé de la sauvegarde réelle.
    // Il peut être activé avec ?test, ?test=1, &test ou #test.
    const TEST_MODE_ENABLED = (() => {
        const sources = [window.location.href, document.referrer || ''];
        return sources.some(source => /(?:[?&#/]test(?:=(?:1|true))?)(?:$|[&#/])/i.test(source));
    })();
    window.TRICHEUR_TEST_MODE = TEST_MODE_ENABLED;

    const SCREEN_FLOW_ORDER = {
        'screen-home': 0,
        'screen-names': 1,
        'screen-game': 1,
        'screen-timer': 2,
        'screen-recap': 3,
        'screen-vote': 4,
        'screen-elimination': 5,
        'screen-champion': 7
    };

    function announceUX(message) {
        const announcer = document.getElementById('ux-announcer');
        if (!announcer || !message) return;
        announcer.textContent = '';
        window.setTimeout(() => { announcer.textContent = message; }, 20);
    }

    function lockInteractions(duration = 260) {
        window.clearTimeout(interactionUnlockTimer);
        document.body.classList.add('ux-transition-lock');
        interactionUnlockTimer = window.setTimeout(() => {
            document.body.classList.remove('ux-transition-lock');
        }, duration);
    }

    function waitFor(milliseconds) {
        return new Promise(resolve => window.setTimeout(resolve, milliseconds));
    }

    const NARRATIVE_DURATION_SCALE = 1.55;
    window.TRICHEUR_TEST_SPEED = 1;
    window.TRICHEUR_TEST_NARRATIVE_SCALE = 1;

    function getTestTimeScale() {
        if (!TEST_MODE_ENABLED) return 1;
        const scale = Number(window.TRICHEUR_TEST_SPEED);
        return Number.isFinite(scale) ? Math.max(1, Math.min(60, scale)) : 1;
    }

    function getTimerRemaining(endAt) {
        if (!endAt) return 0;
        return Math.max(0, Math.ceil(((endAt - Date.now()) / 1000) * getTestTimeScale()));
    }

    function createTimerEndAt(duration) {
        return Date.now() + (Math.max(0, duration) * 1000) / getTestTimeScale();
    }

    function getNarrativeDurationScale() {
        if (!TEST_MODE_ENABLED) return NARRATIVE_DURATION_SCALE;
        const testScale = Number(window.TRICHEUR_TEST_NARRATIVE_SCALE);
        return NARRATIVE_DURATION_SCALE * (Number.isFinite(testScale) ? Math.max(0.15, Math.min(2, testScale)) : 1);
    }

    async function playNarrativeTransition(steps, tone = 'neutral') {
        const overlay = document.getElementById('narrative-overlay');
        const kicker = document.getElementById('narrative-kicker');
        const title = document.getElementById('narrative-title');
        const subtitle = document.getElementById('narrative-subtitle');
        if (!overlay || !steps.length) return;

        const sequenceToken = ++narrativeSequenceToken;
        document.body.classList.add('narrative-is-playing');
        overlay.className = `narrative-overlay tone-${tone} is-visible`;
        overlay.setAttribute('aria-hidden', 'false');

        for (const step of steps) {
            if (sequenceToken !== narrativeSequenceToken) return;
            overlay.classList.remove('show-copy', 'heartbeat', 'reveal-camp', 'blackout', 'silence', 'card-shuffle');
            [...overlay.classList]
                .filter(className => className.startsWith('shuffle-style-'))
                .forEach(className => overlay.classList.remove(className));
            kicker.textContent = step.kicker || '';
            title.textContent = step.title || '';
            subtitle.textContent = step.subtitle || '';
            void overlay.offsetWidth;
            if (step.effect) overlay.classList.add(step.effect);
            if (step.shuffleStyle) overlay.classList.add(`shuffle-style-${step.shuffleStyle}`);
            overlay.classList.add('show-copy');
            if (step.sound) playSound(step.sound);
            if (step.haptic) playHaptic(step.haptic);
            if (step.effect === 'card-shuffle') {
                window.setTimeout(() => {
                    if (sequenceToken === narrativeSequenceToken) playHaptic('tap');
                }, 620);
                window.setTimeout(() => {
                    if (sequenceToken === narrativeSequenceToken) playHaptic('lock');
                }, 1480);
            }
            announceUX([step.kicker, step.title, step.subtitle].filter(Boolean).join('. '));
            await waitFor(Math.round((step.duration || 650) * getNarrativeDurationScale()));
        }

        if (sequenceToken !== narrativeSequenceToken) return;
        overlay.classList.remove('show-copy');
        await waitFor(230);
        overlay.className = 'narrative-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('narrative-is-playing');
    }

    function setTimerExperience(kind, state) {
        const isDiscussion = kind === 'discussion';
        const status = document.getElementById(isDiscussion ? 'discussion-timer-state' : 'vote-timer-state');
        const screen = document.getElementById(isDiscussion ? 'screen-timer' : 'screen-vote');
        const button = document.getElementById(isDiscussion ? 'timer-text' : 'vote-timer-text');
        if (!status || !screen || !button) return;

        const messages = isDiscussion
            ? {
                ready: 'Enquête prête',
                running: 'Enquête en cours',
                paused: 'Enquête en pause',
                ended: 'Temps écoulé • appuie sur le minuteur pour le relancer'
            }
            : {
                ready: 'Jugement prêt',
                running: 'Jugement en cours',
                paused: 'Jugement en pause',
                ended: 'Temps écoulé'
            };
        const stateMessage = messages[state] || messages.ready;
        if (!isDiscussion) status.textContent = stateMessage;
        screen.classList.toggle('timer-is-running', state === 'running');
        screen.classList.toggle('timer-is-paused', state === 'paused');
        screen.classList.toggle('timer-is-ended', state === 'ended');
        button.setAttribute('aria-pressed', String(state === 'running'));
        button.setAttribute('aria-label', state === 'running'
            ? `Mettre le minuteur ${isDiscussion ? 'de l’enquête' : 'du jugement'} en pause`
            : `Reprendre ou relancer le minuteur ${isDiscussion ? 'de l’enquête' : 'du jugement'}`);
        document.body.classList.toggle('ambient-paused', state === 'paused');
        document.body.classList.toggle('ambient-timer-active', state === 'running');
        announceUX(stateMessage);
    }

    function setAmbientTimerProgress(remaining, total, running = true) {
        const safeTotal = Math.max(1, total);
        const progress = Math.max(0, Math.min(1, 1 - remaining / safeTotal));
        const danger = remaining <= 10 ? 1 : remaining <= 30 ? (30 - remaining) / 20 : 0;
        document.documentElement.style.setProperty('--ambient-progress', progress.toFixed(3));
        document.documentElement.style.setProperty('--ambient-danger', Math.max(0, Math.min(1, danger)).toFixed(3));
        document.body.classList.toggle('ambient-timer-active', Boolean(running && remaining > 0));
        document.body.classList.toggle('ambient-midpoint', progress >= .5 && remaining > 30);
        document.body.classList.toggle('ambient-final', remaining <= 30 && remaining > 10);
        document.body.classList.toggle('ambient-critical', remaining <= 10 && remaining > 0);
    }

    function resetAmbientTimerProgress() {
        document.documentElement.style.setProperty('--ambient-progress', '0');
        document.documentElement.style.setProperty('--ambient-danger', '0');
        document.body.classList.remove('ambient-timer-active', 'ambient-paused', 'ambient-midpoint', 'ambient-final', 'ambient-critical', 'ambient-beat');
    }

    function triggerAmbientBeat() {
        clearTimeout(ambientBeatTimer);
        document.body.classList.remove('ambient-beat');
        void document.body.offsetWidth;
        document.body.classList.add('ambient-beat');
        ambientBeatTimer = window.setTimeout(() => document.body.classList.remove('ambient-beat'), 420);
    }

    function triggerAmbientWave(source, tone = 'danger') {
        const wave = document.getElementById('ambient-wave');
        if (!wave) return;
        const bounds = source && source.getBoundingClientRect
            ? source.getBoundingClientRect()
            : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
        wave.style.setProperty('--wave-x', `${Math.round(bounds.left + bounds.width / 2)}px`);
        wave.style.setProperty('--wave-y', `${Math.round(bounds.top + bounds.height / 2)}px`);
        wave.dataset.tone = tone;
        clearTimeout(ambientWaveTimer);
        wave.classList.remove('is-active');
        void wave.offsetWidth;
        wave.classList.add('is-active');
        ambientWaveTimer = window.setTimeout(() => wave.classList.remove('is-active'), 780);
    }

    // --- SAUVEGARDE ET RESTAURATION DANS LOCALSTORAGE ---
    const SAVE_KEY = 'tricheur_game_state';
    const SAVE_VERSION = 9;
    const VALID_SCREENS = ['screen-home', 'screen-names', 'screen-game', 'screen-timer', 'screen-vote', 'screen-elimination', 'screen-recap', 'screen-champion'];
    const VALID_ROLES = ['Maître', 'Tricheur', 'Complice', 'Citoyen'];

    function importLegacyState() {
        if (!window.location.hash.startsWith('#legacy=')) return;
        try {
            const legacy = JSON.parse(decodeURIComponent(window.location.hash.slice('#legacy='.length)));
            if (typeof legacy.state === 'string') localStorage.setItem(SAVE_KEY, legacy.state);
            if (typeof legacy.sound === 'string') {
                localStorage.setItem('tricheur_sound_enabled', legacy.sound);
                soundEnabled = legacy.sound !== 'false';
            }
            if (window.history?.replaceState) window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (error) {
            console.warn('Ancienne sauvegarde non importée :', error);
        }
    }

    importLegacyState();

    function toSafeInteger(value, fallback, min, max) {
        const parsed = Number.parseInt(value, 10);
        return Number.isInteger(parsed) ? Math.max(min, Math.min(max, parsed)) : fallback;
    }

    function toSafeTimestamp(value) {
        return Number.isFinite(value) && value > 0 ? value : null;
    }

    function normalizeSavedState(rawState) {
        if (!rawState || typeof rawState !== 'object' || Array.isArray(rawState)) {
            throw new Error('Format de sauvegarde invalide.');
        }

        // Les sauvegardes créées avant le versionnage sont acceptées comme version 0.
        const version = rawState.version === undefined ? 0 : rawState.version;
        if (!Number.isInteger(version) || version < 0 || version > SAVE_VERSION) {
            throw new Error('Version de sauvegarde non prise en charge.');
        }

        const safeTotalPlayers = toSafeInteger(rawState.totalPlayers, 6, 4, 20);
        const safeCollectingNames = rawState.isCollectingNames === undefined
            ? rawState.currentActiveScreenId === 'screen-names'
            : Boolean(rawState.isCollectingNames);
        const safeNames = {};
        const safeScores = {};
        for (let i = 1; i <= safeTotalPlayers; i++) {
            const rawName = rawState.playerNames && rawState.playerNames[i];
            safeNames[i] = typeof rawName === 'string' && rawName.trim()
                ? rawName.trim().slice(0, 40).toLocaleUpperCase('fr-FR')
                : (safeCollectingNames ? '' : `JOUEUR ${i}`);
            safeScores[i] = toSafeInteger(rawState.playerScores && rawState.playerScores[i], 0, -999, 9999);
        }

        const safeRoles = Array.isArray(rawState.playerRoles)
            ? rawState.playerRoles.slice(0, safeTotalPlayers).map((player, index) => {
                const id = toSafeInteger(player && player.id, index + 1, 1, safeTotalPlayers);
                const role = player && VALID_ROLES.includes(player.role) ? player.role : 'Citoyen';
                return { id, name: safeNames[id] || `JOUEUR ${id}`, role };
            })
            : [];

        const safeScreen = VALID_SCREENS.includes(rawState.currentActiveScreenId)
            ? rawState.currentActiveScreenId
            : 'screen-home';

        // Les écrans de partie ont besoin d'une distribution complète pour être restaurés.
        const restoredScreen = ['screen-game', 'screen-timer', 'screen-vote', 'screen-elimination', 'screen-recap', 'screen-champion'].includes(safeScreen)
            && safeRoles.length !== safeTotalPlayers
            ? 'screen-home'
            : safeScreen;

        const safeGameMode = ['classic', 'black', 'characters'].includes(rawState.gameMode)
            ? rawState.gameMode
            : (rawState.isBlackMode ? 'black' : 'classic');
        const knownWords = new Set([...wordList, ...blackWordList, ...characterWordList]);

        return {
            version: SAVE_VERSION,
            isCollectingNames: safeCollectingNames,
            playerNames: safeNames,
            playerScores: safeScores,
            playerRoles: safeRoles,
            currentPlayer: toSafeInteger(rawState.currentPlayer, 0, 0, Math.max(0, safeTotalPlayers - 1)),
            totalPlayers: safeTotalPlayers,
            secretWord: typeof rawState.secretWord === 'string' ? rawState.secretWord.slice(0, 100) : '',
            isBlackMode: safeGameMode === 'black',
            gameMode: safeGameMode,
            selectedDuration: toSafeInteger(rawState.selectedDuration, 5, 1, 10),
            timerDuration: toSafeInteger(rawState.timerDuration, 300, 0, 600),
            voteDuration: version < 6 ? 180 : toSafeInteger(rawState.voteDuration, 180, 0, 600),
            timerEndAt: toSafeTimestamp(rawState.timerEndAt),
            voteEndAt: version < 6 ? null : toSafeTimestamp(rawState.voteEndAt),
            recentWords: Array.isArray(rawState.recentWords)
                ? rawState.recentWords.filter(word => typeof word === 'string' && knownWords.has(word)).slice(-20)
                : [],
            resultRevealed: Boolean(rawState.resultRevealed),
            championPlayerId: Number.isInteger(rawState.championPlayerId) ? rawState.championPlayerId : null,
            finderAccusation: ['accused', 'trusted'].includes(rawState.finderAccusation)
                ? rawState.finderAccusation
                : (version < 4 && rawState.selectedFinderId !== null && rawState.selectedFinderId !== 'none' ? 'trusted' : null),
            eliminationDuration: version < 5 ? 120 : toSafeInteger(rawState.eliminationDuration, 120, 0, 120),
            eliminationEndAt: version < 5 ? null : toSafeTimestamp(rawState.eliminationEndAt),
            eliminationRunning: version < 9
                ? Boolean(toSafeTimestamp(rawState.eliminationEndAt))
                : Boolean(rawState.eliminationRunning),
            tricheurName: typeof rawState.tricheurName === 'string' ? rawState.tricheurName.slice(0, 40).toLocaleUpperCase('fr-FR') : '',
            currentActiveScreenId: restoredScreen,
            selectedFinderId: rawState.selectedFinderId === 'none'
                ? 'none'
                : (Number.isInteger(rawState.selectedFinderId) ? rawState.selectedFinderId : null),
            selectedEliminatedId: Number.isInteger(rawState.selectedEliminatedId) ? rawState.selectedEliminatedId : null,
            constraintText: typeof rawState.constraintText === 'string' ? rawState.constraintText.slice(0, 200) : '',
            constraintVisible: rawState.constraintVisible === 'block' ? 'block' : 'none'
        };
    }

    function loadSavedState() {
        if (TEST_MODE_ENABLED) return null;
        const saved = localStorage.getItem(SAVE_KEY);
        if (!saved) return null;

        try {
            return normalizeSavedState(JSON.parse(saved));
        } catch (error) {
            console.warn('Sauvegarde ignorée car elle est invalide :', error);
            localStorage.removeItem(SAVE_KEY);
            return null;
        }
    }

    function saveGameState() {
        if (TEST_MODE_ENABLED) return;
        const state = {
            version: SAVE_VERSION,
            isCollectingNames,
            playerNames,
            playerScores,
            playerRoles,
            currentPlayer,
            totalPlayers,
            secretWord,
            isBlackMode,
            gameMode,
            selectedDuration,
            timerDuration,
            voteDuration,
            timerEndAt,
            voteEndAt,
            recentWords,
            resultRevealed,
            championPlayerId,
            finderAccusation,
            eliminationDuration,
            eliminationEndAt,
            eliminationRunning,
            tricheurName,
            currentActiveScreenId,
            selectedFinderId,
            selectedEliminatedId,
            constraintText: document.getElementById('constraint-text') ? document.getElementById('constraint-text').innerText : "",
            constraintVisible: document.getElementById('black-constraint') ? document.getElementById('black-constraint').style.display : "none"
        };
        try {
            localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        } catch (error) {
            console.warn('Impossible de sauvegarder la partie :', error);
        }
    }

    function checkSavedGame() {
        const saved = loadSavedState();
        const savedPanel = document.getElementById('saved-game-panel');
        const savedSummary = document.getElementById('saved-game-summary');
        const startBtn = document.getElementById('btn-start-fresh');
        if (saved) {
            savedPanel.style.display = 'block';
            savedSummary.textContent = `Partie à ${saved.totalPlayers} joueurs • prête à reprendre`;
            startBtn.classList.remove('secondary');
            startBtn.classList.add('primary');
        } else {
            savedPanel.style.display = 'none';
            savedSummary.textContent = 'Partie sauvegardée';
            startBtn.classList.remove('secondary');
            startBtn.classList.add('primary');
        }
        updateStartButtonLabel();
    }

    function resumeSavedGame() {
        const state = loadSavedState();
        if (!state) {
            checkSavedGame();
            return;
        }
        playerNames = state.playerNames;
        playerScores = state.playerScores;
        playerRoles = state.playerRoles;
        currentPlayer = state.currentPlayer;
        totalPlayers = state.totalPlayers;
        secretWord = state.secretWord;
        isBlackMode = state.isBlackMode;
        gameMode = state.gameMode;
        isCollectingNames = state.isCollectingNames;
        selectedDuration = state.selectedDuration;
        timerDuration = state.timerDuration;
        voteDuration = state.voteDuration;
        timerEndAt = state.timerEndAt;
        voteEndAt = state.voteEndAt;
        recentWords = state.recentWords;
        resultRevealed = state.resultRevealed;
        championPlayerId = state.championPlayerId;
        finderAccusation = state.finderAccusation;
        eliminationDuration = state.eliminationDuration;
        eliminationEndAt = state.eliminationEndAt;
        eliminationRunning = state.eliminationRunning;
        tricheurName = state.tricheurName;
        currentActiveScreenId = state.currentActiveScreenId;
        selectedFinderId = state.selectedFinderId;
        selectedEliminatedId = state.selectedEliminatedId;

        // Rétablir les réglages sur l'accueil au cas où
        syncGameModeUI();
        document.getElementById('player-count').innerText = totalPlayers;
        document.getElementById('duration-display').innerText = selectedDuration + " min";
        updateComposition();

        // Réengager le maintien de l'écran allumé
        requestWakeLock();

        // Restaurer l'affichage du minuteur
        updateTimerDisplay('timer-text', timerDuration);
        updateTimerDisplay('vote-timer-text', voteDuration);
        document.getElementById('discussion-progress-fill').style.width = `${Math.max(0, Math.min(100, timerDuration / Math.max(1, selectedDuration * 60) * 100))}%`;
        document.getElementById('vote-progress-fill').style.width = `${Math.max(0, Math.min(100, voteDuration / 180 * 100))}%`;

        // Restaurer la contrainte Black Mode s'il y en avait une
        if (document.getElementById('constraint-text')) {
            document.getElementById('constraint-text').innerText = state.constraintText || "";
        }
        if (document.getElementById('black-constraint')) {
            document.getElementById('black-constraint').style.display = state.constraintVisible || "none";
        }

        // Rediriger vers l'écran sauvegardé
        showScreen(currentActiveScreenId, false);

        // Si on était en train de distribuer
        if (currentActiveScreenId === 'screen-game') {
            updatePlayerUI();
        }
        // Si on était aux résultats
        else if (currentActiveScreenId === 'screen-recap') {
            const savedFinderId = selectedFinderId;
            const savedEliminatedId = selectedEliminatedId;
            const savedAccusation = finderAccusation;
            const savedRevealState = resultRevealed;
            selectedFinderId = null;
            selectedEliminatedId = null;
            finderAccusation = null;
            resultRevealed = false;
            buildVoteTuiles();
            if (savedFinderId !== null) {
                selectFinder(savedFinderId);
                if (savedAccusation) decideFinderAccusation(savedAccusation);
                if (savedEliminatedId !== null && requiresEliminationForFinder(savedFinderId)) {
                    selectEliminated(savedEliminatedId);
                }
            }
            if (savedRevealState) revealRoundResult(false);
        }
        else if (currentActiveScreenId === 'screen-elimination') {
            const savedEliminationId = selectedEliminatedId;
            selectedEliminatedId = null;
            initEliminationVote(true);
            if (savedEliminationId !== null) selectEliminated(savedEliminationId);
        }
        else if (currentActiveScreenId === 'screen-champion') {
            const champion = playerRoles.find(player => player.id === championPlayerId);
            if (champion) renderChampionScreen(champion, playerScores);
            else showScreen('screen-home', false);
        }
        else if (currentActiveScreenId === 'screen-names') {
            // Une ancienne sauvegarde pouvait arriver ici avant la distribution des rôles.
            if (playerRoles.length !== totalPlayers) setupRoundRoles();
            else showNameEntryForCurrentPlayer();
        }
        else if (currentActiveScreenId === 'screen-vote') {
            prepareJudgmentQuestion();
        }

        if (currentActiveScreenId === 'screen-timer' && timerEndAt) {
            timerDuration = getTimerRemaining(timerEndAt);
            if (timerDuration > 0) toggleTimer();
            else goToVote();
        } else if (currentActiveScreenId === 'screen-vote' && voteEndAt) {
            voteDuration = getTimerRemaining(voteEndAt);
            if (voteDuration > 0) toggleVoteTimer();
            else {
                voteEndAt = null;
                updateTimerDisplay('vote-timer-text', 0);
                setTimerExperience('vote', 'ended');
            }
        }
    }

    function resetEntireGame() {
        if (!TEST_MODE_ENABLED) localStorage.removeItem(SAVE_KEY);
        gameMode = 'classic';
        syncGameModeUI();
        playerScores = {};
        playerRoles = [];
        currentPlayer = 0;
        isCollectingNames = false;
        timerEndAt = null;
        voteEndAt = null;
        eliminationEndAt = null;
        eliminationRunning = false;
        finderAccusation = null;
        recentWords = [];
        resultRevealed = false;
        championPlayerId = null;
        checkSavedGame();
        showScreen('screen-home', false);
    }

    function stopActiveTimersForMenu() {
        if (timerRunning && timerEndAt) {
            timerDuration = getTimerRemaining(timerEndAt);
        }
        if (voteRunning && voteEndAt) {
            voteDuration = getTimerRemaining(voteEndAt);
        }
        if (eliminationEndAt) {
            eliminationDuration = getTimerRemaining(eliminationEndAt);
        }
        clearInterval(timerInterval);
        clearInterval(voteInterval);
        clearInterval(eliminationInterval);
        timerRunning = false;
        voteRunning = false;
        timerEndAt = null;
        voteEndAt = null;
        eliminationEndAt = null;
        eliminationRunning = false;
        stopEliminationAmbience(true);
    }

    function openGameActionConfirm(action) {
        if (!['restart', 'quit'].includes(action)) return;
        pendingGameAction = action;
        gameActionReturnFocus = document.activeElement;
        closeQuickMenu(false);

        const modal = document.getElementById('game-action-modal');
        const title = document.getElementById('game-action-title');
        const description = document.getElementById('game-action-description');
        const icon = document.getElementById('game-action-icon');
        const confirmButton = document.getElementById('btn-confirm-game-action');
        const isRestart = action === 'restart';

        icon.textContent = isRestart ? '↻' : '↩';
        title.textContent = isRestart ? 'Recommencer la partie ?' : 'Quitter la partie ?';
        description.textContent = isRestart
            ? 'Les scores seront remis à zéro. Les joueurs et les réglages seront conservés.'
            : 'La partie sera sauvegardée. Vous pourrez la reprendre depuis l’accueil.';
        confirmButton.textContent = isRestart ? 'RECOMMENCER' : 'QUITTER ET SAUVEGARDER';
        confirmButton.classList.toggle('quit-confirm', !isRestart);
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        window.setTimeout(() => confirmButton.focus(), 30);
        playHaptic('decision');
    }

    function closeGameActionConfirm(restoreFocus = true) {
        const modal = document.getElementById('game-action-modal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        pendingGameAction = null;
        if (restoreFocus && gameActionReturnFocus && typeof gameActionReturnFocus.focus === 'function') {
            gameActionReturnFocus.focus();
        }
        gameActionReturnFocus = null;
    }

    function confirmGameAction() {
        const action = pendingGameAction;
        if (!action) return;
        closeGameActionConfirm(false);
        playSound('decision');
        playHaptic('decision');

        if (action === 'restart') {
            restartWithCurrentPlayers();
            return;
        }

        const resumeScreen = currentActiveScreenId;
        stopActiveTimersForMenu();
        currentActiveScreenId = resumeScreen;
        saveGameState();
        showScreen('screen-home', false);
        checkSavedGame();
        announceUX('Partie sauvegardée. Tu pourras la reprendre depuis l’accueil.');
    }

    function restartWithCurrentPlayers() {
        stopActiveTimersForMenu();
        championPlayerId = null;
        resultRevealed = false;
        selectedFinderId = null;
        selectedEliminatedId = null;
        finderAccusation = null;
        recentWords = [];

        const hasCompletePlayerList = Object.keys(playerNames).length === totalPlayers
            && Array.from({ length: totalPlayers }, (_, index) => playerNames[index + 1]).every(Boolean);
        if (!hasCompletePlayerList) {
            goToNamesScreen();
            return;
        }

        for (let id = 1; id <= totalPlayers; id++) playerScores[id] = 0;
        isCollectingNames = false;
        setupRoundRoles();
    }

    // --- LOGIQUE DE JEU INITIALE ---
    function syncGameModeUI() {
        isBlackMode = gameMode === 'black';
        document.getElementById('mode-toggle').checked = isBlackMode;
        document.body.classList.toggle('black-theme', isBlackMode);
        document.body.classList.toggle('characters-theme', gameMode === 'characters');

        const summaries = {
            classic: 'Le jeu original, direct et équilibré.',
            black: 'Mots difficiles, contrainte et Complice dès 6 joueurs.',
            characters: 'Devinez des célébrités et personnages très populaires.'
        };
        const summary = document.getElementById('game-mode-summary');
        if (summary) summary.textContent = summaries[gameMode];

        ['classic', 'black', 'characters'].forEach(mode => {
            const button = document.getElementById(`mode-${mode}`);
            if (!button) return;
            const selected = mode === gameMode;
            button.classList.toggle('is-selected', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
        updateStartButtonLabel();
    }

    function updateStartButtonLabel() {
        const button = document.getElementById('btn-start-fresh');
        const savedPanel = document.getElementById('saved-game-panel');
        if (!button || !savedPanel) return;
        const labels = {
            classic: 'CLASSIQUE',
            black: 'BLACK',
            characters: 'PERSONNAGES'
        };
        const hasSavedGame = savedPanel.style.display !== 'none';
        button.textContent = hasSavedGame
            ? `NOUVELLE PARTIE — ${labels[gameMode]}`
            : `COMMENCER EN ${labels[gameMode]} →`;
    }

    function setGameMode(mode, withFeedback = true) {
        if (!['classic', 'black', 'characters'].includes(mode)) return;
        const changed = gameMode !== mode;
        gameMode = mode;
        syncGameModeUI();
        updateComposition();
        if (changed && withFeedback) {
            playSound('phase');
            playHaptic('select');
            const labels = { classic: 'Classique', black: 'Black Edition', characters: 'Personnages' };
            announceUX(`Mode ${labels[mode]} sélectionné.`);
        }
    }

    // Conservé pour les anciennes sauvegardes et les anciens boutons.
    function toggleBlackMode() {
        setGameMode(document.getElementById('mode-toggle').checked ? 'black' : 'classic');
    }
    function changePlayers(v) { totalPlayers = Math.max(4, Math.min(20, totalPlayers + v)); document.getElementById('player-count').innerText = totalPlayers; updateComposition(); }
    function changeDuration(v) { selectedDuration = Math.max(1, Math.min(10, selectedDuration + v)); document.getElementById('duration-display').innerText = selectedDuration + " min"; }
    function updateComposition() {
        let citoyens = totalPlayers - 2;
        const roles = [
            { className: 'maitre', text: '👑 1 Maître' },
            { className: 'tricheur', text: '🔴 1 Tricheur' }
        ];
        if (isBlackMode && totalPlayers >= 6) {
            citoyens--;
            roles.push({ className: 'complice', text: '🟠 1 Complice' });
        }
        roles.push({ className: 'citoyen', text: `🕵️ ${citoyens} Enquêteur${citoyens > 1 ? 's' : ''}` });

        const composition = document.getElementById('game-composition');
        composition.replaceChildren();
        roles.forEach(role => {
            const chip = document.createElement('span');
            chip.className = `role-chip ${role.className}`;
            chip.textContent = role.text;
            composition.appendChild(chip);
        });
        composition.dataset.mode = gameMode;
        composition.setAttribute('aria-label', `Composition du mode ${gameMode}`);
    }
    
    async function goToNamesScreen() {
        if (newGameTransitionRunning) return;
        newGameTransitionRunning = true;
        const introductions = {
            classic: {
                tone: 'neutral',
                kicker: '',
                title: 'LES CARTES DÉCIDENT',
                subtitle: ''
            },
            black: {
                tone: 'impostors',
                kicker: '',
                title: 'ALLIANCES SECRÈTES',
                subtitle: ''
            },
            characters: {
                tone: 'judgment',
                kicker: '',
                title: 'IDENTITÉS SECRÈTES',
                subtitle: ''
            }
        };
        const intro = introductions[gameMode];
        await playNarrativeTransition([{
            kicker: intro.kicker,
            title: intro.title,
            subtitle: intro.subtitle,
            effect: 'card-shuffle',
            // Choix V5 : mouvement Casino (A) avec l’anneau vertical de Cascade (E).
            shuffleStyle: 'casino',
            sound: 'shuffle',
            haptic: 'phase',
            duration: 1650
        }], intro.tone);

        playerNames = {};
        playerScores = {};
        recentWords = [];
        resultRevealed = false;
        timerEndAt = null;
        voteEndAt = null;
        eliminationEndAt = null;
        eliminationRunning = false;
        finderAccusation = null;
        isCollectingNames = true;
        for (let i = 1; i <= totalPlayers; i++) playerScores[i] = 0;
        setupRoundRoles();
        newGameTransitionRunning = false;
    }

    function updateNameEntryState() {
        const input = document.getElementById('current-player-name');
        const button = document.getElementById('btn-show-role');
        const helper = document.getElementById('name-helper');
        if (!input || !button || !helper) return false;

        const normalizedName = input.value.trim().toLocaleUpperCase('fr-FR');
        const currentPlayerId = currentPlayer + 1;
        const duplicate = Object.entries(playerNames).some(([id, savedName]) =>
            Number(id) !== currentPlayerId
            && typeof savedName === 'string'
            && savedName.toLocaleUpperCase('fr-FR') === normalizedName
        );

        const isReady = Boolean(normalizedName && !duplicate);
        button.classList.toggle('is-ready', isReady);
        button.dataset.ready = String(isReady);
        button.disabled = !isReady;
        button.setAttribute('aria-disabled', String(!isReady));
        helper.classList.toggle('is-error', duplicate);
        helper.textContent = duplicate
            ? 'Ce prénom est déjà pris. Ajoute une initiale.'
            : normalizedName
                ? ''
                : 'Entre ton prénom pour découvrir ton rôle.';
        input.setAttribute('aria-invalid', String(duplicate));
        return isReady;
    }

    function showNameEntryForCurrentPlayer() {
        showScreen('screen-names');
        const progress = document.getElementById('name-player-progress');
        const progressFill = document.getElementById('name-progress-fill');
        const progressBar = document.getElementById('name-journey-progress');
        const input = document.getElementById('current-player-name');
        progress.textContent = `Joueur ${currentPlayer + 1} sur ${totalPlayers}`;
        if (progressFill) progressFill.style.width = `${Math.max(0, (currentPlayer + 1) / totalPlayers * 100)}%`;
        if (progressBar) {
            progressBar.setAttribute('aria-valuemax', String(totalPlayers));
            progressBar.setAttribute('aria-valuenow', String(currentPlayer + 1));
        }
        input.value = (playerNames[currentPlayer + 1] || '').toLocaleUpperCase('fr-FR');
        input.setCustomValidity('');
        updateNameEntryState();
        announceUX(`Joueur ${currentPlayer + 1} sur ${totalPlayers}. Entre ton prénom.`);
        window.setTimeout(() => input.focus(), 0);
    }
    
    function startGame() { 
        const input = document.getElementById('current-player-name');
        const name = input.value.trim().toLocaleUpperCase('fr-FR');
        if (!name || !updateNameEntryState()) {
            const duplicate = Boolean(name);
            input.setCustomValidity('Écris ton prénom avant de voir ton rôle.');
            if (duplicate) input.setCustomValidity('Ce prénom est déjà utilisé par un autre joueur.');
            input.reportValidity();
            input.focus();
            playHaptic('warning');
            return;
        }

        requestWakeLock();
        const playerId = currentPlayer + 1;
        playerNames[playerId] = name.slice(0, 40);
        playerRoles[currentPlayer].name = playerNames[playerId];
        if (playerRoles[currentPlayer].role === 'Tricheur') {
            tricheurName = playerNames[playerId];
        }
        lockInteractions();
        playSound('phase');
        playHaptic('phase');
        updatePlayerUI();
        showScreen('screen-game');
    }

    function secureRandomIndex(maxExclusive) {
        if (!Number.isInteger(maxExclusive) || maxExclusive <= 1) return 0;
        if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * maxExclusive);

        const range = 0x100000000;
        const limit = range - (range % maxExclusive);
        const value = new Uint32Array(1);
        do {
            window.crypto.getRandomValues(value);
        } while (value[0] >= limit);
        return value[0] % maxExclusive;
    }

    function shuffleSecure(values) {
        const shuffled = [...values];
        for (let index = shuffled.length - 1; index > 0; index--) {
            const swapIndex = secureRandomIndex(index + 1);
            [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
        }
        return shuffled;
    }

    function getActiveWordList() {
        const source = gameMode === 'black'
            ? blackWordList
            : gameMode === 'characters'
                ? characterWordList
                : wordList;
        return [...new Set(source)];
    }

    function pickPlayerForRole(availableIds, previousId) {
        const freshCandidates = availableIds.filter(id => id !== previousId);
        const candidates = freshCandidates.length ? freshCandidates : availableIds;
        const selectedId = candidates[secureRandomIndex(candidates.length)];
        availableIds.splice(availableIds.indexOf(selectedId), 1);
        return selectedId;
    }

    function setupRoundRoles() {
        const activeWordList = getActiveWordList();
        const availableWords = activeWordList.filter(word => !recentWords.includes(word));
        const wordPool = availableWords.length ? availableWords : activeWordList;
        secretWord = wordPool[secureRandomIndex(wordPool.length)];
        recentWords.push(secretWord);
        recentWords = recentWords.slice(-20);

        const previousSpecialRoles = {};
        playerRoles.forEach(player => {
            if (player.role !== 'Citoyen') previousSpecialRoles[player.role] = player.id;
        });

        const availablePlayerIds = shuffleSecure(
            Array.from({ length: totalPlayers }, (_, index) => index + 1)
        );
        const roleByPlayerId = {};
        roleByPlayerId[pickPlayerForRole(availablePlayerIds, previousSpecialRoles['Maître'])] = 'Maître';
        roleByPlayerId[pickPlayerForRole(availablePlayerIds, previousSpecialRoles['Tricheur'])] = 'Tricheur';

        const hasComplice = isBlackMode && totalPlayers >= 6;
        if (hasComplice) {
            roleByPlayerId[pickPlayerForRole(availablePlayerIds, previousSpecialRoles['Complice'])] = 'Complice';
        }
        availablePlayerIds.forEach(id => { roleByPlayerId[id] = 'Citoyen'; });

        playerRoles = [];
        tricheurName = '';
        for (let id = 1; id <= totalPlayers; id++) {
            const playerName = playerNames[id] || `JOUEUR ${id}`;
            const role = roleByPlayerId[id];
            playerRoles.push({ id, name: playerName, role });
            if (role === 'Tricheur') tricheurName = playerName;
        }

        currentPlayer = 0;
        if (isCollectingNames) {
            showNameEntryForCurrentPlayer();
        } else {
            updatePlayerUI();
            showScreen('screen-game');
        }
    }

    function roleCanSeeSecretWord(role) {
        return role !== 'Citoyen' && role !== 'Complice';
    }

    function getRoleDisplayName(role) {
        return role === 'Citoyen' ? 'Enquêteur' : role;
    }

    function getRoleMissionParts(player) {
        if (!player) return [];
        if (player.role === 'Maître') {
            return [
                ['Faites deviner', true], [' le mot, '],
                ['soyez attentif', true], [' aux questions posées et '],
                ['démasquez', true], [' le Tricheur !']
            ];
        }
        if (player.role === 'Tricheur') {
            return [
                ['Restez crédible', true], [', faites en sorte que tout le monde trouve le mot '],
                ['sans vous faire démasquer', true], [' !']
            ];
        }
        if (player.role === 'Complice') {
            return [
                [`Le Tricheur est ${tricheurName}. `],
                ['Protégez-le', true], [' sans révéler votre alliance.']
            ];
        }
        return [
            ['Trouvez le mot', true], [' et '],
            ['démasquez le Tricheur', true], ['.']
        ];
    }

    function getRoleMission(player) {
        return getRoleMissionParts(player).map(part => part[0]).join('');
    }

    function renderRoleMission(element, player) {
        if (!element) return;
        element.replaceChildren();
        getRoleMissionParts(player).forEach(([text, emphasized]) => {
            if (emphasized) {
                const strong = document.createElement('strong');
                strong.className = 'mission-action';
                strong.textContent = text;
                element.appendChild(strong);
            } else {
                element.appendChild(document.createTextNode(text));
            }
        });
    }

    function getRoleHologramSymbol(role) {
        return { 'Maître':'👑', 'Tricheur':'🎭', 'Complice':'🤝', 'Citoyen':'🕵️' }[role] || '👁️';
    }

function resetRoleCard() {
        const flipper = document.getElementById('card-flipper');
        const cardBack = document.getElementById('role-card-back');
        const extra = document.getElementById('extra-info');
        document.getElementById('screen-game').classList.remove('role-revealed');
        delete document.body.dataset.roleReveal;

        // Masquer le verso et supprimer l'animation pendant la remise à zéro
        // empêche d'apercevoir le rôle du joueur précédent.
        flipper.classList.add('resetting');
        flipper.classList.remove('flipped');
        cardBack.className = 'back';
        document.getElementById('role-text').textContent = 'Rôle secret';
        document.getElementById('word-text').textContent = '???';
        document.getElementById('word-text').dataset.label = 'MOT À TROUVER';
        document.getElementById('word-text').style.display = '';
        document.getElementById('role-holo-symbol').textContent = '';
        const revealButton = document.getElementById('btn-reveal-card');
        const roleRevealLabel = document.getElementById('role-reveal-label');
        revealButton.setAttribute('aria-expanded', 'false');
        revealButton.setAttribute('aria-label', 'Révéler votre rôle secret');
        roleRevealLabel.setAttribute('aria-hidden', 'true');
        extra.textContent = '';
        extra.style.display = 'none';
        void flipper.offsetWidth;
        flipper.classList.remove('resetting');
        cardIsFlipped = false;
    }
    
    function updatePlayerUI() { 
        resetRoleCard();
        document.getElementById('player-label').innerText = playerRoles[currentPlayer].name; 
        const nextButton = document.getElementById('btn-next-player');
        nextButton.classList.remove('is-visible');
        nextButton.disabled = true;
        nextButton.textContent = currentPlayer === totalPlayers - 1
            ? 'LANCER L’ENQUÊTE →'
            : 'JOUEUR SUIVANT →';
        announceUX(`${playerRoles[currentPlayer].name}, ta carte est prête.`);
        saveGameState();
    }
    
    function toggleCardFlip() { 
        if (!cardIsFlipped) { 
            playSound('flip'); 
            const p = playerRoles[currentPlayer];
            const roleHaptics = { 'Citoyen':'citizenRole', 'Tricheur':'tricheurRole', 'Maître':'maitreRole', 'Complice':'compliceRole' };
            playHaptic(roleHaptics[p.role] || 'reveal');
            const roleDisplayName = getRoleDisplayName(p.role);
            document.getElementById('role-text').innerText = roleDisplayName; 
            const roleCardBack = document.getElementById('role-card-back');
            roleCardBack.className = "back holo-revealing card-" + p.role.toLowerCase().replace('î','i');
            const wordElement = document.getElementById('word-text');
            const canSeeWord = roleCanSeeSecretWord(p.role);
            const isMissionOnlyCard = p.role === 'Complice' || p.role === 'Citoyen';
            roleCardBack.classList.toggle('mission-only-card', isMissionOnlyCard);
            wordElement.innerText = canSeeWord ? secretWord : '';
            wordElement.dataset.label = canSeeWord ? 'MOT SECRET' : '';
            wordElement.style.display = isMissionOnlyCard ? 'none' : '';
            document.getElementById('role-holo-symbol').textContent = getRoleHologramSymbol(p.role);
            const extraEl = document.getElementById('extra-info');
            extraEl.style.display = "block";
            renderRoleMission(extraEl, p);
            document.getElementById('card-flipper').classList.add('flipped'); 
            document.getElementById('screen-game').classList.add('role-revealed');
            document.body.dataset.roleReveal = p.role.toLowerCase().replace('î', 'i');
            document.getElementById('role-reveal-label').setAttribute('aria-hidden', 'false');
            const revealButton = document.getElementById('btn-reveal-card');
            revealButton.setAttribute('aria-expanded', 'true');
            revealButton.setAttribute('aria-label', `Rôle révélé : ${roleDisplayName}`);
            cardIsFlipped = true;
            const nextButton = document.getElementById('btn-next-player');
            nextButton.disabled = false;
            nextButton.textContent = currentPlayer === totalPlayers - 1
                ? 'LANCER L’ENQUÊTE →'
                : 'JOUEUR SUIVANT →';
            nextButton.classList.add('is-visible');
            triggerCinematicFlash(`role-${p.role.toLowerCase().replace('î', 'i')}`);
            announceUX(`Rôle révélé : ${roleDisplayName}.`);
        } 
    }
    
    async function nextPlayer() {
        if (!cardIsFlipped || nextPlayerTransitionRunning) return;
        nextPlayerTransitionRunning = true;
        lockInteractions();
        // Son P choisi pour l'interface : pulsation grave.
        playSound('click');
        playHaptic('tap');
        currentPlayer++;
        if (currentPlayer < totalPlayers) {
            if (isCollectingNames) showNameEntryForCurrentPlayer();
            else updatePlayerUI();
            nextPlayerTransitionRunning = false;
        } else {
            isCollectingNames = false;
            const tricheur = playerRoles.find(p => p.role === 'Tricheur');
            tricheurName = tricheur ? tricheur.name : '';
            lockInteractions(1900);
            await playNarrativeTransition([
                {
                    kicker: '',
                    title: 'RÔLES SCELLÉS',
                    subtitle: '',
                    sound: 'narrative',
                    haptic: 'tap',
                    duration: 820
                },
                {
                    kicker: '',
                    title: 'L’ENQUÊTE COMMENCE',
                    subtitle: '',
                    effect: 'heartbeat',
                    sound: 'narrative',
                    haptic: 'phase',
                    duration: 980
                }
            ], 'neutral');
            initTimerPhase();
            nextPlayerTransitionRunning = false;
        }
    }
    
    function initTimerPhase() { 
        timerDuration = selectedDuration * 60; 
        timerEndAt = null;
        updateTimerDisplay('timer-text', timerDuration); 
        document.getElementById('discussion-progress-fill').style.width = '100%';
        document.getElementById('timer-text').classList.remove('urgent');
        if (isBlackMode) { 
            const constraints = [
                "Interdit de pointer du doigt.",
                "Interdit de poser des questions sur la matière.",
                "Interdit de dire « Oui » ou « Non ».",
                "Chaque réponse doit contenir au moins quatre mots.",
                "Interdit de prononcer le prénom d'un joueur.",
                "Interdit de poser deux questions de suite.",
                "Répondez uniquement avec une phrase complète.",
                "Interdit d'utiliser un chiffre ou un nombre.",
                "Chaque joueur doit parler avant qu'un joueur puisse reparler.",
                "Interdit de commencer une phrase par « Je ».",
                "Une seule question directe par joueur.",
                "Interdit de répéter un mot déjà utilisé dans la discussion."
            ];
            document.getElementById('black-constraint').style.display = 'block'; 
            document.getElementById('constraint-text').innerText = constraints[secureRandomIndex(constraints.length)]; 
        } else { 
            document.getElementById('black-constraint').style.display = 'none'; 
        } 
        setTimerExperience('discussion', 'ready');
        showScreen('screen-timer');
        toggleTimer();
    }
    
    function updateDiscussionTimer() {
        timerDuration = getTimerRemaining(timerEndAt);
        setAmbientTimerProgress(timerDuration, selectedDuration * 60, timerRunning);
        updateTimerDisplay('timer-text', timerDuration);
        document.getElementById('discussion-progress-fill').style.width = `${Math.max(0, timerDuration / Math.max(1, selectedDuration * 60) * 100)}%`;
        document.getElementById('timer-text').classList.toggle('urgent', timerDuration <= 10);
        saveGameState();
        if (timerDuration > 15 && timerDuration % 2 === 0) {
            playSound('discussion-beat');
            triggerAmbientBeat();
        } else if (timerDuration <= 15 && timerDuration > 0) {
            playSound('discussion-beat');
            triggerAmbientBeat();
        }
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            timerEndAt = null;
            playSound('gong');
            playHaptic('timerEnd');
            setTimerExperience('discussion', 'ended');
            saveGameState();
        }
    }

    function toggleTimer() { 
        if (timerRunning) {
            timerDuration = getTimerRemaining(timerEndAt);
            clearInterval(timerInterval);
            timerRunning = false;
            timerEndAt = null;
            playSound('pause');
            playHaptic('pause');
            setTimerExperience('discussion', 'paused');
            saveGameState();
            return;
        }

        if (timerDuration <= 0) timerDuration = selectedDuration * 60;
        if (!timerEndAt) timerEndAt = createTimerEndAt(timerDuration);
        timerRunning = true;
        playSound('phase');
        playHaptic('phase');
        setTimerExperience('discussion', 'running');
        updateDiscussionTimer();
        if (timerRunning) timerInterval = setInterval(updateDiscussionTimer, 1000);
    }
    
    function goToVote() { 
        clearInterval(timerInterval); 
        timerRunning = false; 
        timerEndAt = null;
        showRecap();
    }

    function prepareJudgmentQuestion() {
        const finder = playerRoles.find(player => player.id === parseInt(selectedFinderId));
        if (!finder) return false;
        document.getElementById('accusation-question').textContent = `${finder.name} EST-IL LE TRICHEUR ?`;
        document.getElementById('btn-accuse-finder').classList.toggle('selected', finderAccusation === 'accused');
        document.getElementById('btn-trust-finder').classList.toggle('selected', finderAccusation === 'trusted');
        updateRevealButtonState();
        return true;
    }

    function startJudgmentPhase() {
        if (!prepareJudgmentQuestion()) return;
        clearInterval(voteInterval);
        voteRunning = false;
        voteDuration = 180;
        voteEndAt = null;
        updateTimerDisplay('vote-timer-text', voteDuration);
        document.getElementById('vote-progress-fill').style.width = '100%';
        document.getElementById('vote-timer-text').classList.remove('urgent');
        setTimerExperience('vote', 'ready');
        lockInteractions();
        showScreen('screen-vote');
        triggerCinematicFlash('judgment');
        toggleVoteTimer();
    }
    
    function updateVoteTimer() {
        voteDuration = getTimerRemaining(voteEndAt);
        setAmbientTimerProgress(voteDuration, 180, voteRunning);
        updateTimerDisplay('vote-timer-text', voteDuration);
        document.getElementById('vote-progress-fill').style.width = `${Math.max(0, Math.min(100, voteDuration / 180 * 100))}%`;
        document.getElementById('vote-timer-text').classList.toggle('urgent', voteDuration <= 10);
        saveGameState();
        if (voteDuration <= 10 && voteDuration > 0) {
            playSound('tick');
            triggerAmbientBeat();
        }
        if (voteDuration <= 0) {
            clearInterval(voteInterval);
            voteRunning = false;
            voteEndAt = null;
            playSound('gong');
            playHaptic('timerEnd');
            setTimerExperience('vote', 'ended');
            saveGameState();
        }
    }

    function toggleVoteTimer() { 
        if (voteRunning) {
            voteDuration = getTimerRemaining(voteEndAt);
            clearInterval(voteInterval);
            voteRunning = false;
            voteEndAt = null;
            playSound('pause');
            playHaptic('pause');
            setTimerExperience('vote', 'paused');
            saveGameState();
            return;
        }

        if (voteDuration <= 0) voteDuration = 180;
        if (!voteEndAt) voteEndAt = createTimerEndAt(voteDuration);
        voteRunning = true;
        playSound('phase');
        playHaptic('phase');
        setTimerExperience('vote', 'running');
        updateVoteTimer();
        if (voteRunning) voteInterval = setInterval(updateVoteTimer, 1000);
    }
    
    function showRecap() { 
        clearInterval(eliminationInterval);
        eliminationEndAt = null;
        eliminationRunning = false;
        selectedFinderId = null; 
        selectedEliminatedId = null;
        finderAccusation = null;
        resultRevealed = false;
        buildVoteTuiles();
        lockInteractions();
        playSound('phase');
        playHaptic('phase');
        showScreen('screen-recap'); 
    }

    function buildVoteTuiles() {
        closeFullRanking(false);
        document.body.classList.remove('result-screen-open');
        document.body.classList.add('finder-phase');
        const finderContainer = document.getElementById('finder-tiles-container');
        finderContainer.replaceChildren();

        const nobodyButton = document.createElement('button');
        nobodyButton.type = 'button';
        nobodyButton.className = 'btn-tile';
        nobodyButton.id = 'tile-finder-none';
        nobodyButton.textContent = '❌ Personne';
        nobodyButton.addEventListener('click', () => selectFinder('none'));
        finderContainer.appendChild(nobodyButton);

        playerRoles.forEach(p => {
            if (p.role === 'Maître') return;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn-tile';
            button.id = `tile-finder-${p.id}`;
            button.textContent = `👤 ${p.name}`;
            button.addEventListener('click', () => selectFinder(p.id));
            finderContainer.appendChild(button);
        });

        document.getElementById('btn-accuse-finder').classList.remove('selected');
        document.getElementById('btn-trust-finder').classList.remove('selected');
        document.getElementById('results-input-phase').style.display = 'block';
        document.getElementById('results-reveal-phase').style.display = 'none';
        document.getElementById('btn-confirm-finder').disabled = true;
        document.getElementById('btn-confirm-finder').textContent = 'CHOISISSEZ UN JOUEUR';
        document.getElementById('btn-reveal-result').disabled = true;
        document.getElementById('btn-reveal-result').textContent = 'CHOISISSEZ VOTRE VERDICT';
    }

    function selectFinder(val) {
        selectedFinderId = val;
        selectedEliminatedId = null;
        finderAccusation = null;

        const buttons = document.querySelectorAll('#finder-tiles-container .btn-tile');
        buttons.forEach(btn => btn.classList.remove('selected', 'selected-imposteur', 'selected-maitre'));

        const currentBtn = document.getElementById(`tile-finder-${val}`);
        playSound('select');
        playHaptic('select');
        if (currentBtn) currentBtn.classList.add('selected');
        triggerAmbientWave(currentBtn, val === 'none' ? 'neutral' : 'citizen');
        const finder = val === 'none' ? null : playerRoles.find(p => p.id === parseInt(val));
        document.getElementById('btn-accuse-finder').classList.remove('selected');
        document.getElementById('btn-trust-finder').classList.remove('selected');
        document.getElementById('btn-confirm-finder').textContent = finder
            ? `CONTINUER AVEC ${finder.name}`
            : 'CONFIRMER : PERSONNE';
        updateRevealButtonState();
        saveGameState();
    }

    async function confirmFinderSelection() {
        if (selectedFinderId === null) return;
        lockInteractions(1900);
        playSound('decision');
        playHaptic('decision');
        if (selectedFinderId === 'none') {
            revealRoundResult();
            return;
        }
        finderAccusation = null;
        const finder = playerRoles.find(player => player.id === parseInt(selectedFinderId));
        await playNarrativeTransition([
            {
                kicker: '',
                title: 'LE MOT EST TROUVÉ',
                subtitle: '',
                sound: 'narrative',
                haptic: 'tap',
                duration: 860
            },
            {
                kicker: finder ? finder.name : '',
                title: 'JUGEMENT',
                subtitle: '',
                effect: 'heartbeat',
                sound: 'narrative',
                haptic: 'phase',
                duration: 980
            }
        ], 'judgment');
        startJudgmentPhase();
    }

    function decideFinderAccusation(decision) {
        if (!['accused', 'trusted'].includes(decision) || selectedFinderId === null || selectedFinderId === 'none') return;
        finderAccusation = decision;
        document.getElementById('btn-accuse-finder').classList.toggle('selected', decision === 'accused');
        document.getElementById('btn-trust-finder').classList.toggle('selected', decision === 'trusted');
        triggerAmbientWave(
            document.getElementById(decision === 'accused' ? 'btn-accuse-finder' : 'btn-trust-finder'),
            decision === 'accused' ? 'danger' : 'citizen'
        );
        playSound('decision');
        playHaptic('decision');
        updateRevealButtonState();
        saveGameState();
    }

    async function continueAfterFinderDecision() {
        if (!finderAccusation) return;
        if (requiresEliminationForFinder(selectedFinderId) && selectedEliminatedId === null) {
            lockInteractions(1700);
            await playNarrativeTransition([
                {
                    kicker: '',
                    title: 'CONFIANCE ACCORDÉE',
                    subtitle: '',
                    sound: 'narrative',
                    haptic: 'tap',
                    duration: 820
                },
                {
                    kicker: '',
                    title: 'VOTE D’ÉLIMINATION',
                    subtitle: '',
                    effect: 'heartbeat',
                    sound: 'narrative',
                    haptic: 'decision',
                    duration: 980
                }
            ], 'judgment');
            initEliminationVote();
        } else {
            clearInterval(voteInterval);
            voteRunning = false;
            voteEndAt = null;
            revealRoundResult();
        }
    }

    function buildEliminationTuiles() {
        const eliminatedContainer = document.getElementById('eliminated-tiles-container');
        eliminatedContainer.replaceChildren();
        playerRoles.forEach(p => {
            if (p.role === 'Maître') return;
            if (p.id === parseInt(selectedFinderId)) return; 
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn-tile';
            button.id = `tile-elim-${p.id}`;
            button.textContent = `☠️ ${p.name}`;
            button.addEventListener('click', () => selectEliminated(p.id));
            eliminatedContainer.appendChild(button);
        });
    }

    function selectEliminated(id) {
        selectedEliminatedId = id;

        const buttons = document.querySelectorAll('#eliminated-tiles-container .btn-tile');
        buttons.forEach(btn => btn.classList.remove('selected', 'selected-imposteur', 'selected-maitre'));

        const currentBtn = document.getElementById(`tile-elim-${id}`);
        const eliminatedPlayer = playerRoles.find(p => p.id === id);
        if (!eliminatedPlayer) return;

        playSound('select');
        playHaptic('select');
        if (currentBtn) currentBtn.classList.add('selected');
        triggerAmbientWave(currentBtn, 'danger');
        const confirmButton = document.getElementById('btn-confirm-elimination');
        confirmButton.disabled = false;
        confirmButton.textContent = `ÉLIMINER ${eliminatedPlayer.name}`;
        saveGameState();
    }

    function initEliminationVote(resuming = false) {
        clearInterval(voteInterval);
        voteRunning = false;
        voteEndAt = null;
        clearInterval(eliminationInterval);
        if (!resuming) {
            selectedEliminatedId = null;
            eliminationDuration = 120;
            eliminationEndAt = createTimerEndAt(eliminationDuration);
            eliminationRunning = true;
        } else if (eliminationRunning && !eliminationEndAt) {
            eliminationDuration = Math.max(10, eliminationDuration || 120);
            eliminationEndAt = createTimerEndAt(eliminationDuration);
        }

        document.getElementById('elimination-choice-phase').style.display = 'block';
        document.getElementById('elimination-confirm-phase').style.display = 'none';
        document.getElementById('btn-confirm-elimination').disabled = true;
        document.getElementById('btn-confirm-elimination').textContent = 'CHOISISSEZ UN JOUEUR';
        buildEliminationTuiles();
        lockInteractions();
        showScreen('screen-elimination');
        requestAnimationFrame(() => requestAnimationFrame(alignEliminationClockWithTransition));
        if (eliminationRunning) startEliminationAmbience();
        setEliminationTimerExperience(eliminationRunning ? 'running' : 'paused');
        updateEliminationClock();
        if (eliminationRunning && eliminationEndAt) eliminationInterval = setInterval(updateEliminationClock, 1000);
        playSound('decision');
    }

    function updateEliminationClock() {
        const clock = document.getElementById('elimination-clock');
        const fill = document.getElementById('elimination-tension-fill');
        if (!clock || !fill) return;
        if (eliminationRunning && eliminationEndAt) {
            eliminationDuration = getTimerRemaining(eliminationEndAt);
        }
        setAmbientTimerProgress(eliminationDuration, 120, eliminationRunning);
        const minutes = Math.floor(eliminationDuration / 60);
        const seconds = eliminationDuration % 60;
        const clockValue = clock.querySelector('.timer-value');
        const clockText = eliminationDuration > 0 ? `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` : 'DÉCIDEZ';
        if (clockValue) clockValue.textContent = clockText;
        else clock.textContent = clockText;
        clock.classList.toggle('urgent', eliminationDuration <= 10);
        fill.style.width = `${Math.max(0, eliminationDuration / 120 * 100)}%`;
        if (eliminationRunning) updateEliminationAmbience(1 - eliminationDuration / 120);
        if (eliminationRunning && eliminationDuration > 0 && (eliminationDuration <= 10 || eliminationDuration % 5 === 0)) {
            playSound(eliminationDuration <= 10 ? 'tension-urgent' : 'tension');
            triggerAmbientBeat();
        }
        if (eliminationRunning && eliminationDuration <= 0) {
            clearInterval(eliminationInterval);
            eliminationRunning = false;
            eliminationEndAt = null;
            stopEliminationAmbience();
            setEliminationTimerExperience('ended');
            playHaptic('timerEnd');
            playSound('gong');
        }
        saveGameState();
    }

    function setEliminationTimerExperience(state) {
        const screen = document.getElementById('screen-elimination');
        const clock = document.getElementById('elimination-clock');
        if (!screen || !clock) return;
        screen.classList.toggle('timer-is-running', state === 'running');
        screen.classList.toggle('timer-is-paused', state === 'paused');
        screen.classList.toggle('timer-is-ended', state === 'ended');
        clock.setAttribute('aria-pressed', String(state === 'running'));
        clock.setAttribute('aria-label', state === 'running'
            ? 'Mettre le minuteur du vote d’élimination en pause'
            : 'Reprendre ou relancer le minuteur du vote d’élimination');
        document.body.classList.toggle('ambient-paused', state === 'paused');
        document.body.classList.toggle('ambient-timer-active', state === 'running');
    }

    function toggleEliminationTimer() {
        if (eliminationRunning) {
            if (eliminationEndAt) eliminationDuration = getTimerRemaining(eliminationEndAt);
            clearInterval(eliminationInterval);
            eliminationRunning = false;
            eliminationEndAt = null;
            stopEliminationAmbience();
            setEliminationTimerExperience('paused');
            updateEliminationClock();
            playSound('pause');
            playHaptic('pause');
            saveGameState();
            return;
        }

        if (eliminationDuration <= 0) eliminationDuration = 120;
        eliminationEndAt = createTimerEndAt(eliminationDuration);
        eliminationRunning = true;
        startEliminationAmbience();
        setEliminationTimerExperience('running');
        updateEliminationClock();
        eliminationInterval = setInterval(updateEliminationClock, 1000);
        playSound('phase');
        playHaptic('phase');
        saveGameState();
    }

    function alignEliminationClockWithTransition() {
        const anchor = document.getElementById('elimination-clock-anchor');
        if (!anchor || currentActiveScreenId !== 'screen-elimination') return;
        anchor.style.setProperty('--elimination-center-shift', '0px');
        let attempts = 0;
        const align = () => {
            if (currentActiveScreenId !== 'screen-elimination') return;
            const viewport = window.visualViewport;
            const targetCenter = (viewport ? viewport.offsetTop : 0) + (viewport ? viewport.height : window.innerHeight) / 2;
            const bounds = anchor.getBoundingClientRect();
            const correction = targetCenter - (bounds.top + bounds.height / 2);
            const currentShift = Number.parseFloat(anchor.style.getPropertyValue('--elimination-center-shift')) || 0;
            anchor.style.setProperty('--elimination-center-shift', `${Math.round(currentShift + correction)}px`);
            attempts++;
            if (Math.abs(correction) > 1 && attempts < 4) requestAnimationFrame(align);
        };
        requestAnimationFrame(align);
    }

    function openEliminationConfirmation() {
        if (selectedEliminatedId === null) return;
        const selectedTile = document.getElementById(`tile-elim-${selectedEliminatedId}`);
        triggerAmbientWave(selectedTile, 'danger');
        document.body.classList.remove('elimination-locking');
        void document.body.offsetWidth;
        document.body.classList.add('elimination-locking');
        window.setTimeout(() => document.body.classList.remove('elimination-locking'), 720);
        clearInterval(eliminationInterval);
        eliminationRunning = false;
        eliminationEndAt = null;
        stopEliminationAmbience();
        const target = playerRoles.find(p => p.id === selectedEliminatedId);
        if (!target) return;
        document.getElementById('elimination-choice-phase').style.display = 'none';
        document.getElementById('elimination-confirm-phase').style.display = 'block';
        document.getElementById('elimination-confirm-name').textContent = target.name;
        triggerCinematicFlash('judgment');
        updateEliminationAmbience(1);
        lockInteractions(220);
        playSound('decision');
        playHaptic('lock');
        saveGameState();
    }

    function cancelEliminationConfirmation() {
        document.getElementById('elimination-choice-phase').style.display = 'block';
        document.getElementById('elimination-confirm-phase').style.display = 'none';
        eliminationDuration = Math.max(10, eliminationDuration);
        eliminationEndAt = createTimerEndAt(eliminationDuration);
        eliminationRunning = true;
        if (!eliminationAmbience) startEliminationAmbience();
        setEliminationTimerExperience('running');
        updateEliminationClock();
        eliminationInterval = setInterval(updateEliminationClock, 1000);
        playSound('click');
    }

    function finalizeEliminationVote() {
        if (selectedEliminatedId === null) return;
        clearInterval(eliminationInterval);
        eliminationRunning = false;
        eliminationEndAt = null;
        lockInteractions();
        playHaptic('lock');
        revealRoundResult();
    }

    function updateRevealButtonState() {
        document.getElementById('btn-confirm-finder').disabled = selectedFinderId === null;
        const verdictButton = document.getElementById('btn-reveal-result');
        verdictButton.disabled = finderAccusation === null;
        verdictButton.classList.toggle('verdict-accuse', finderAccusation === 'accused');
        verdictButton.classList.toggle('verdict-trust', finderAccusation === 'trusted');
        const finder = selectedFinderId === null || selectedFinderId === 'none'
            ? null
            : playerRoles.find(player => player.id === parseInt(selectedFinderId));
        verdictButton.textContent = !finderAccusation || !finder
            ? 'CHOISISSEZ VOTRE VERDICT'
            : finderAccusation === 'accused'
                ? `🔫 ACCUSER ${finder.name}`
                : `🤝 FAIRE CONFIANCE À ${finder.name}`;
    }

    function requiresEliminationForFinder(finderId) {
        if (finderId === null || finderId === 'none' || finderAccusation !== 'trusted') return false;
        const finder = playerRoles.find(p => p.id === parseInt(finderId));
        return Boolean(finder && finder.role === 'Citoyen');
    }

    function isResultSelectionComplete() {
        if (selectedFinderId === null) return false;
        if (selectedFinderId === 'none') return true;
        if (!finderAccusation) return false;
        return !requiresEliminationForFinder(selectedFinderId) || selectedEliminatedId !== null;
    }

async function revealRoundResult(withEffects = true) {
        if (!isResultSelectionComplete()) return;

        closeFullRanking(false);
        if (withEffects) document.body.classList.add('verdict-pending');
        document.body.classList.remove('finder-phase');
        resultRevealed = true;
        const tempScores = calculateTemporaryScores();
        const outcome = getRoundOutcome();
        document.body.dataset.outcome = outcome.tone;
        const ranking = [...playerRoles].sort((a, b) => tempScores[b.id] - tempScores[a.id] || a.name.localeCompare(b.name));
        const gameWinner = ranking.find(player => tempScores[player.id] >= 10);
        championPlayerId = gameWinner ? gameWinner.id : null;
        const gameWinnerIsImpostor = Boolean(gameWinner && (gameWinner.role === 'Tricheur' || gameWinner.role === 'Complice'));
        const impostorsWon = gameWinnerIsImpostor || outcome.title.includes('IMPOSTEURS');
        const citizensWon = (!gameWinnerIsImpostor && gameWinner) || outcome.tone === 'village';
        const noWordFound = selectedFinderId === 'none' || outcome.tone === 'no-word';
        const verdictTone = noWordFound ? 'no-word' : impostorsWon ? 'impostors' : 'village';

        if (withEffects) {
            stopEliminationAmbience(true);
            lockInteractions(2700);
            if (!noWordFound) {
                playSound('tick');
                playHaptic('decision');
                window.setTimeout(() => {
                    playSound('tick');
                    playHaptic('decision');
                }, 430);
            }
            await playNarrativeTransition([
                { title: '', effect: 'blackout', duration: 420 },
                {
                    kicker: '',
                    title: noWordFound ? 'PERSONNE N’A TROUVÉ' : 'VERDICT',
                    subtitle: '',
                    effect: noWordFound ? 'silence' : 'heartbeat',
                    duration: noWordFound ? 920 : 860
                },
                {
                    kicker: '',
                    title: outcome.title,
                    subtitle: '',
                    effect: 'reveal-camp',
                    duration: 1120
                }
            ], verdictTone);
        }

        document.getElementById('results-input-phase').style.display = 'none';
        document.getElementById('results-reveal-phase').style.display = 'block';
        document.body.classList.add('result-screen-open');

        const hero = document.getElementById('result-hero');
        hero.className = `result-hero ${outcome.tone}`.trim();
        document.getElementById('result-icon').textContent = outcome.icon;
        document.getElementById('result-title').textContent = outcome.title;
        renderRoundWinners(outcome);

        document.getElementById('result-subtitle').textContent = outcome.message;
        renderResultWord();
        renderRoundGains(tempScores);
        const nextRoundButton = document.getElementById('btn-next-round');
        nextRoundButton.textContent = gameWinner ? 'DÉCOUVRIR LE CHAMPION' : 'MANCHE SUIVANTE';
        nextRoundButton.classList.toggle('champion-ready', Boolean(gameWinner));
        nextRoundButton.style.background = '';
        nextRoundButton.style.boxShadow = '';
        if (currentActiveScreenId !== 'screen-recap') showScreen('screen-recap');
        document.body.classList.remove('verdict-pending');
        announceUX(`${document.getElementById('result-title').textContent}. ${outcome.message}`);

        if (withEffects) {
            if (!noWordFound) {
                playSound(gameWinnerIsImpostor ? 'impostor-win' : gameWinner ? 'success' : outcome.sound);
                playHaptic(impostorsWon ? 'impostorWin' : citizensWon ? 'citizenWin' : 'failure');
            }
            triggerCinematicFlash(gameWinnerIsImpostor || outcome.title.includes('IMPOSTEURS')
                ? 'impostors'
                : outcome.tone === 'village'
                    ? 'village'
                    : 'no-word');
            if (!noWordFound && (outcome.celebrate || gameWinner)) launchConfetti();
        }
        saveGameState();
    }

    function triggerCinematicFlash(tone = 'neutral') {
        const flash = document.getElementById('cinematic-flash');
        if (!flash) return;
        flash.className = `cinematic-flash ${tone}`;
        void flash.offsetWidth;
        flash.classList.add('is-active');
        window.setTimeout(() => flash.classList.remove('is-active'), 900);
    }

    function renderRoundWinners(outcome) {
        const container = document.getElementById('result-winners');
        container.replaceChildren();
        const winners = outcome.tone === 'village'
            ? playerRoles.filter(player => player.role === 'Maître' || player.role === 'Citoyen')
            : outcome.tone === 'impostors'
                ? playerRoles.filter(player => player.role === 'Tricheur' || player.role === 'Complice')
                : [];

        const label = document.createElement('span');
        label.className = 'result-winners-label';
        label.textContent = 'AUCUN GAGNANT';
        if (!winners.length) container.appendChild(label);

        if (!winners.length) return;
        const names = document.createElement('div');
        names.className = 'result-winners-names';
        winners.forEach(player => {
            const name = document.createElement('strong');
            name.className = 'result-winner-name';
            name.textContent = player.name;
            name.style.setProperty('--winner-color', getRoleColor(player.role));
            names.appendChild(name);
        });
        container.appendChild(names);
    }

    function renderRoundGains(tempScores) {
        const container = document.getElementById('round-gains-list');
        if (!container) return;
        container.replaceChildren();

        const rankedPlayers = [...playerRoles]
            .filter(player => tempScores[player.id] > 0)
            .sort((a, b) => tempScores[b.id] - tempScores[a.id] || a.name.localeCompare(b.name));

        if (rankedPlayers.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'round-gain-row';
            empty.style.gridColumn = '1 / -1';
            empty.style.justifyContent = 'center';
            empty.style.color = '#b8bac4';
            empty.textContent = 'Aucun joueur n’a encore de point.';
            container.appendChild(empty);
            renderResultPodium([]);
            document.getElementById('btn-open-full-ranking').hidden = true;
            return;
        }

        renderResultPodium(rankedPlayers.slice(0, 3), tempScores);
        document.getElementById('btn-open-full-ranking').hidden = false;

        rankedPlayers.forEach((player, index) => {
            const previousScore = playerScores[player.id] || 0;
            const gain = tempScores[player.id] - previousScore;
            const row = document.createElement('div');
            row.className = `round-gain-row rank-${index + 1}`;

            const rank = document.createElement('span');
            const medals = ['🥇', '🥈', '🥉'];
            rank.className = index < 3 ? 'rank-medal' : 'rank-number';
            rank.textContent = index < 3 ? medals[index] : `${index + 1}.`;
            rank.setAttribute('aria-label', `${index + 1}${index === 0 ? 'er' : 'e'} du classement`);

            const name = document.createElement('span');
            name.className = 'round-gain-name';
            name.textContent = player.name;
            name.style.color = getRoleColor(player.role);
            name.setAttribute('aria-label', `${player.name}, ${getRoleDisplayName(player.role)}`);

            const playerIdentity = document.createElement('div');
            playerIdentity.className = 'round-gain-player';
            playerIdentity.append(rank, name);

            const value = document.createElement('span');
            value.className = 'round-gain-value';
            value.setAttribute('aria-label', `${gain} point${Math.abs(gain) === 1 ? '' : 's'} pendant cette manche, ${tempScores[player.id]} points au total`);

            const total = document.createElement('span');
            total.className = 'round-gain-total';
            total.textContent = `${tempScores[player.id]} pts`;
            if (gain !== 0) {
                const delta = document.createElement('span');
                delta.className = `round-gain-delta ${gain < 0 ? 'negative' : ''}`.trim();
                delta.textContent = gain > 0 ? `+${gain}` : String(gain);
                value.appendChild(delta);
            }
            value.appendChild(total);

            row.append(playerIdentity, value);
            container.appendChild(row);
        });
    }

    function renderResultPodium(players, scores = {}) {
        const container = document.getElementById('result-podium');
        if (!container) return;
        container.replaceChildren();

        if (!players.length) {
            const empty = document.createElement('p');
            empty.className = 'result-podium-empty';
            empty.textContent = 'Aucun score à afficher.';
            container.appendChild(empty);
            return;
        }

        const medals = ['🥇', '🥈', '🥉'];
        players.forEach((player, index) => {
            const previousScore = playerScores[player.id] || 0;
            const totalScore = scores[player.id] || 0;
            const gain = totalScore - previousScore;
            const card = document.createElement('article');
            card.className = `result-podium-card rank-${index + 1}`;
            card.setAttribute('aria-label', `${index + 1}${index === 0 ? 'er' : 'e'} : ${player.name}, ${totalScore} points`);

            const medal = document.createElement('span');
            medal.className = 'result-podium-medal';
            medal.textContent = medals[index];

            const name = document.createElement('strong');
            name.className = 'result-podium-name';
            name.textContent = player.name;
            name.style.color = getRoleColor(player.role);

            const score = document.createElement('span');
            score.className = 'result-podium-score';
            score.textContent = `${totalScore} pts`;

            card.append(medal, name);
            const scoreGroup = document.createElement('span');
            scoreGroup.className = 'result-podium-scores';
            scoreGroup.appendChild(score);
            if (gain !== 0) {
                const delta = document.createElement('span');
                delta.className = `result-podium-delta ${gain < 0 ? 'negative' : ''}`.trim();
                delta.textContent = gain > 0 ? `+${gain}` : String(gain);
                scoreGroup.appendChild(delta);
            }
            card.appendChild(scoreGroup);
            container.appendChild(card);
        });
    }

    function openFullRanking() {
        const modal = document.getElementById('full-ranking-modal');
        if (!modal) return;
        rankingReturnFocus = document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('ranking-sheet-open');
        playSound('click');
        playHaptic('tap');
        window.setTimeout(() => document.getElementById('btn-close-full-ranking')?.focus(), 0);
    }

    function closeFullRanking(restoreFocus = true) {
        const modal = document.getElementById('full-ranking-modal');
        document.body.classList.remove('ranking-sheet-open');
        if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        if (restoreFocus && rankingReturnFocus instanceof HTMLElement) rankingReturnFocus.focus();
        rankingReturnFocus = null;
    }

    document.addEventListener('keydown', event => {
        const rankingModal = document.getElementById('full-ranking-modal');
        if (rankingModal?.getAttribute('aria-hidden') !== 'false') return;
        if (event.key === 'Escape') {
            closeFullRanking();
            return;
        }
        if (event.key === 'Tab') {
            const focusable = [...rankingModal.querySelectorAll('button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])')];
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    function renderResultWord() {
        const container = document.getElementById('result-word');
        if (!container) return;
        container.replaceChildren();

        const label = document.createElement('span');
        label.className = 'result-word-label';
        label.textContent = 'Mot secret';

        const value = document.createElement('strong');
        value.className = 'result-word-value';
        value.textContent = secretWord;
        container.append(label, value);
    }

    function launchConfetti() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const colors = ['#ff3b30', '#ffcc00', '#007aff', '#30d158', '#ff9500'];
        for (let i = 0; i < 36; i++) {
            const piece = document.createElement('i');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background = colors[i % colors.length];
            piece.style.setProperty('--drift', `${Math.round(Math.random() * 180 - 90)}px`);
            piece.style.animationDelay = `${Math.random() * 0.35}s`;
            document.body.appendChild(piece);
            window.setTimeout(() => piece.remove(), 2300);
        }
    }

    function getRoleColor(role) {
        return {
            'Maître': 'var(--color-maitre)',
            'Tricheur': 'var(--color-tricheur)',
            'Complice': 'var(--color-complice)',
            'Citoyen': 'var(--color-citoyen)'
        }[role] || '#f5f5f7';
    }

    async function applyScoresAndRestart() { 
        if (!resultRevealed) return;
        const tempScores = calculateTemporaryScores();
        const winner = playerRoles.find(player => tempScores[player.id] >= 10);
        playerRoles.forEach(player => { playerScores[player.id] = tempScores[player.id]; });
        if (winner) {
            championPlayerId = winner.id;
            renderChampionScreen(winner, tempScores);
            lockInteractions(1800);
            await playNarrativeTransition([
                {
                    kicker: '',
                    title: '10 POINTS',
                    subtitle: '',
                    sound: 'narrative',
                    haptic: 'decision',
                    duration: 850
                },
                {
                    kicker: 'CHAMPION',
                    title: winner.name,
                    subtitle: '',
                    effect: 'reveal-camp',
                    sound: winner.role === 'Tricheur' || winner.role === 'Complice' ? 'impostor-win' : 'success',
                    haptic: winner.role === 'Tricheur' || winner.role === 'Complice' ? 'impostorWin' : 'citizenWin',
                    duration: 1250
                }
            ], winner.role === 'Tricheur' || winner.role === 'Complice' ? 'impostors' : 'village');
            showScreen('screen-champion');
            const impostorChampion = winner.role === 'Tricheur' || winner.role === 'Complice';
            triggerCinematicFlash(impostorChampion ? 'impostors' : 'village');
            launchConfetti();
            return;
        }

        resultRevealed = false;
        selectedFinderId = null;
        selectedEliminatedId = null;
        finderAccusation = null;
        eliminationEndAt = null;
        eliminationRunning = false;
        lockInteractions(1500);
        await playNarrativeTransition([
            {
                kicker: '',
                title: 'NOUVELLE MANCHE',
                subtitle: '',
                effect: 'heartbeat',
                sound: 'narrative',
                haptic: 'phase',
                duration: 1050
            }
        ], 'neutral');
        setupRoundRoles();
    }

    function renderChampionScreen(winner, scores) {
        if (!winner) return;
        const impostorChampion = winner.role === 'Tricheur' || winner.role === 'Complice';
        document.body.classList.toggle('champion-impostor', impostorChampion);
        document.getElementById('champion-name').textContent = winner.name;
        document.getElementById('champion-name').style.color = getRoleColor(winner.role);
        document.getElementById('champion-role').textContent = getRoleDisplayName(winner.role);
        document.getElementById('champion-role').style.color = getRoleColor(winner.role);
        document.getElementById('champion-score').firstChild.textContent = `${scores[winner.id]} `;

        const rankingContainer = document.getElementById('champion-ranking');
        rankingContainer.replaceChildren();
        const ranking = [...playerRoles]
            .sort((a, b) => scores[b.id] - scores[a.id] || a.name.localeCompare(b.name))
            .slice(0, 3);
        const medals = ['♛', 'Ⅱ', 'Ⅲ'];
        ranking.forEach((player, index) => {
            const row = document.createElement('div');
            row.className = `champion-rank-row rank-${index + 1}`;
            const medal = document.createElement('span');
            medal.className = 'champion-rank-medal';
            medal.textContent = medals[index];
            const name = document.createElement('strong');
            name.textContent = player.name;
            const score = document.createElement('span');
            score.textContent = `${scores[player.id]} pts`;
            row.append(medal, name, score);
            rankingContainer.appendChild(row);
        });
        announceUX(`${winner.name} remporte la partie avec ${scores[winner.id]} points.`);
    }

    function replayWithSamePlayers() {
        playSound('phase');
        playHaptic('phase');
        document.body.classList.remove('champion-impostor');
        restartWithCurrentPlayers();
    }
    
    // --- CONSULTATION DISCRETE DES ROLES ---
    function openPeekModal() {
        const modal = document.getElementById('peek-modal');
        const tiles = document.getElementById('peek-player-tiles');
        const holdButton = document.getElementById('btn-hold-peek');
        peekModalReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        selectedPeekPlayerId = null;
        tiles.replaceChildren();

        playerRoles.forEach(p => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn-tile';
            button.id = `peek-player-${p.id}`;
            button.textContent = p.name;
            button.addEventListener('click', () => selectPeekPlayer(p.id));
            tiles.appendChild(button);
        });

        holdButton.disabled = true;
        holdButton.textContent = 'CHOISIS TON NOM';
        resetPeekArea();
        if (modal) {
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
        }
        setupPeekHoldEvents();
        const firstPlayerButton = tiles.querySelector('.btn-tile');
        window.setTimeout(() => {
            if (firstPlayerButton instanceof HTMLElement) firstPlayerButton.focus();
        }, 0);
    }

    function selectPeekPlayer(id) {
        selectedPeekPlayerId = id;
        resetPeekArea();

        document.querySelectorAll('#peek-player-tiles .btn-tile').forEach(button => {
            button.classList.remove('selected');
        });

        const selectedButton = document.getElementById(`peek-player-${id}`);
        if (selectedButton) selectedButton.classList.add('selected');

        const holdButton = document.getElementById('btn-hold-peek');
        holdButton.disabled = false;
        holdButton.textContent = 'MAINTENIR POUR AFFICHER';
        playSound('select');
        playHaptic('select');
    }

    function resetPeekArea() { 
        const area = document.getElementById('peek-display-area');
        if (area) area.style.display = 'none'; 
    }

    function setupPeekHoldEvents() {
        const btn = document.getElementById('btn-hold-peek');
        const area = document.getElementById('peek-display-area');
        
        if (!btn || !area) return;

        const showRole = () => {
            if (btn.disabled || selectedPeekPlayerId === null) return;
            playSound('flip');
            playHaptic('reveal');
            const p = playerRoles.find(r => r.id === selectedPeekPlayerId);
            if (!p) return;

            const roleTitle = document.getElementById('peek-role-title');
            const wordBox = document.getElementById('peek-word-display');
            const extra = document.getElementById('peek-extra-info');
            
            if (roleTitle) roleTitle.innerText = getRoleDisplayName(p.role);
            if (wordBox) {
                wordBox.innerText = secretWord;
                wordBox.style.display = roleCanSeeSecretWord(p.role) ? '' : 'none';
            }
            
            if (extra) {
                extra.style.display = 'block';
                renderRoleMission(extra, p);
            }
            
            if (wordBox) wordBox.style.borderColor = `var(--color-${p.role.toLowerCase().replace('î','i')})`;
            if (roleTitle) roleTitle.style.color = `var(--color-${p.role.toLowerCase().replace('î','i')})`;
            area.style.display = 'block';
        };

        const hideRole = () => { area.style.display = 'none'; };
        btn.onmousedown = showRole; btn.onmouseup = hideRole; btn.onmouseleave = hideRole;
        btn.ontouchstart = (e) => { e.preventDefault(); showRole(); }; btn.ontouchend = (e) => { e.preventDefault(); hideRole(); };
    }

    function closePeekModal() { 
        const modal = document.getElementById('peek-modal');
        selectedPeekPlayerId = null;
        resetPeekArea();
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
        const focusTarget = peekModalReturnFocus;
        peekModalReturnFocus = null;
        window.setTimeout(() => {
            if (focusTarget && focusTarget.isConnected) focusTarget.focus();
        }, 0);
    }

    document.addEventListener('keydown', event => {
        const modal = document.getElementById('peek-modal');
        if (!modal || modal.getAttribute('aria-hidden') !== 'false') return;

        if (event.key === 'Escape') {
            event.preventDefault();
            closePeekModal();
            playSound('click');
            return;
        }

        if (event.key === 'Tab') {
            const focusable = Array.from(modal.querySelectorAll('button:not([disabled])'))
                .filter(element => element.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    document.addEventListener('click', event => {
        const shell = document.getElementById('quick-menu-shell');
        const menu = document.getElementById('quick-menu');
        if (!shell || !menu || menu.hidden || shell.contains(event.target)) return;
        closeQuickMenu(false);
    });

    document.addEventListener('keydown', event => {
        const actionModal = document.getElementById('game-action-modal');
        if (!actionModal || actionModal.getAttribute('aria-hidden') !== 'false') return;
        if (event.key === 'Escape') {
            event.preventDefault();
            closeGameActionConfirm();
            playSound('click');
            return;
        }
        if (event.key === 'Tab') {
            const buttons = Array.from(actionModal.querySelectorAll('button:not([disabled])'));
            if (!buttons.length) return;
            const first = buttons[0];
            const last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    document.addEventListener('keydown', event => {
        const menu = document.getElementById('quick-menu');
        if (event.key !== 'Escape' || !menu || menu.hidden) return;
        event.preventDefault();
        closeQuickMenu(true);
        playSound('click');
    });

    function syncNameScreenToKeyboard() {
        if (currentActiveScreenId !== 'screen-names') return;
        const visualViewport = window.visualViewport;
        const visibleHeight = visualViewport ? visualViewport.height : window.innerHeight;
        const viewportOffset = visualViewport ? visualViewport.offsetTop : 0;
        const layoutHeight = Math.max(window.innerHeight, document.documentElement.clientHeight, namesStableViewportHeight);
        namesStableViewportHeight = Math.max(namesStableViewportHeight, layoutHeight);
        const keyboardHeight = Math.max(0, namesStableViewportHeight - visibleHeight - viewportOffset);
        const keyboardVisible = keyboardHeight > 120;
        const safeGap = keyboardVisible ? 10 : 18;
        const naturalAnchor = namesStableViewportHeight * 0.70;
        const keyboardAnchor = viewportOffset + visibleHeight - safeGap;
        const anchor = Math.max(250, Math.min(namesStableViewportHeight - safeGap, keyboardVisible ? keyboardAnchor : naturalAnchor));

        document.documentElement.style.setProperty('--names-screen-anchor', `${Math.round(anchor)}px`);
        document.documentElement.style.setProperty('--keyboard-visible-height', `${Math.round(visibleHeight)}px`);
        document.body.classList.toggle('mobile-keyboard-visible', keyboardVisible);
    }

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', syncNameScreenToKeyboard);
        window.visualViewport.addEventListener('scroll', syncNameScreenToKeyboard);
        window.visualViewport.addEventListener('resize', alignEliminationClockWithTransition);
        window.visualViewport.addEventListener('scroll', alignEliminationClockWithTransition);
    }
    window.addEventListener('resize', syncNameScreenToKeyboard);
    window.addEventListener('resize', alignEliminationClockWithTransition);

    // --- NAVIGATION ---
    function showScreen(id, shouldSave = true) { 
        previousActiveScreenId = currentActiveScreenId;
        currentActiveScreenId = id;
        if (id === 'screen-names') {
            namesStableViewportHeight = Math.max(
                namesStableViewportHeight,
                window.innerHeight || 0,
                document.documentElement.clientHeight || 0
            );
            window.requestAnimationFrame(syncNameScreenToKeyboard);
        }
        document.body.dataset.screen = id.replace('screen-', '');
        if (id !== 'screen-recap') {
            document.body.classList.remove('result-screen-open');
            closeFullRanking(false);
        }
        if (!['screen-timer', 'screen-vote', 'screen-elimination'].includes(id)) {
            resetAmbientTimerProgress();
        }
        if (id !== 'screen-game') delete document.body.dataset.roleReveal;
        if (id !== 'screen-recap') delete document.body.dataset.outcome;
        if (id !== 'screen-recap') document.body.classList.remove('finder-phase');
        window.dispatchEvent(new CustomEvent('tricheur:screenchange', {
            detail: { id, label: id.replace('screen-', '') }
        }));
        document.body.classList.toggle('names-screen', id === 'screen-names');
        if (id !== 'screen-champion') document.body.classList.remove('champion-impostor');
        const isActiveGameScreen = id !== 'screen-home';
        document.getElementById('btn-menu-restart').disabled = !isActiveGameScreen;
        document.getElementById('btn-menu-quit').disabled = !isActiveGameScreen;
        const previousOrder = SCREEN_FLOW_ORDER[previousActiveScreenId] ?? 0;
        const nextOrder = SCREEN_FLOW_ORDER[id] ?? previousOrder;
        const transitionClass = nextOrder < previousOrder ? 'screen-enter-back' : 'screen-enter-forward';
        if (id !== 'screen-elimination') stopEliminationAmbience();
        if (id === 'screen-home') {
            releaseWakeLock();
        }
        ['screen-home', 'screen-names', 'screen-game', 'screen-timer', 'screen-vote', 'screen-elimination', 'screen-recap', 'screen-champion'].forEach(s => {
            const el = document.getElementById(s);
            if (el) {
                if (s === id) {
                    el.style.display = 'block';
                    el.classList.remove('screen-entering', 'screen-enter-forward', 'screen-enter-back');
                    void el.offsetWidth;
                    el.classList.add('screen-entering', transitionClass);
                } else {
                    el.style.display = 'none';
                    el.classList.remove('screen-entering', 'screen-enter-forward', 'screen-enter-back');
                }
            }
        }); 
        const screenTitles = {
            'screen-home': 'Tricheur',
            'screen-names': 'Tricheur — Distribution',
            'screen-game': 'Tricheur — Rôle secret',
            'screen-timer': 'Tricheur — Enquête',
            'screen-vote': 'Tricheur — Jugement',
            'screen-elimination': 'Tricheur — Vote d’élimination',
            'screen-recap': 'Tricheur — Verdict',
            'screen-champion': 'Tricheur — Champion'
        };
        document.title = screenTitles[id] || 'Tricheur';
        if (shouldSave) {
            saveGameState();
        }
    }

    function updateTimerDisplay(id, duration) { 
        const el = document.getElementById(id);
        if (el) {
            let m = Math.floor(duration/60), s = duration%60; 
            const displayValue = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
            const valueElement = el.querySelector('.timer-value');
            if (valueElement) valueElement.textContent = displayValue;
            else el.innerText = displayValue;
        }
    }
    
    // --- ESSAI DE RESTAURATION DES LE LANCEMENT ---
    const playerNameInput = document.getElementById('current-player-name');

    playerNameInput.addEventListener('focus', () => {
        window.setTimeout(syncNameScreenToKeyboard, 80);
        window.setTimeout(syncNameScreenToKeyboard, 320);
    });
    playerNameInput.addEventListener('blur', () => {
        window.setTimeout(syncNameScreenToKeyboard, 120);
    });
    playerNameInput.addEventListener('input', event => {
        event.target.value = event.target.value.toLocaleUpperCase('fr-FR');
        event.target.setCustomValidity('');
        updateNameEntryState();
    });
    playerNameInput.addEventListener('keydown', event => {
        if (event.key === 'Enter' && !event.isComposing) {
            event.preventDefault();
            startGame();
        }
    });
    const limitedAmbientDevice = (navigator.deviceMemory && navigator.deviceMemory <= 2)
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    document.body.classList.toggle('ambient-lite', Boolean(limitedAmbientDevice));
    document.addEventListener('visibilitychange', () => {
        document.body.classList.toggle('ambient-hidden', document.hidden);
    });
    updateSoundButton();
    syncGameModeUI();
    updateComposition();
    checkSavedGame();

/* ===== pwa.js ===== */
let deferredInstallPrompt = null;
let installHelpReturnFocus = null;

function updateInstallButton() {
    const button = document.getElementById('btn-install-app');
    if (!button) return;
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    button.hidden = standalone;
}

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
});

window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    if (typeof announceUX === 'function') announceUX('Tricheur est maintenant installé.');
});

async function installTricheurApp() {
    closeQuickMenu(false);
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        updateInstallButton();
        return;
    }
    openInstallHelp();
}

function openInstallHelp() {
    const modal = document.getElementById('install-help-modal');
    const description = document.getElementById('install-help-description');
    const steps = document.getElementById('install-help-steps');
    const note = document.getElementById('install-help-note');
    if (!modal || !description || !steps || !note) return;

    installHelpReturnFocus = document.activeElement;
    const userAgent = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/i.test(userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(userAgent);
    const instructions = isIOS
        ? [
            'Ouvre cette page dans Safari.',
            'Appuie sur le bouton Partager — le carré avec une flèche.',
            'Choisis « Sur l’écran d’accueil », puis « Ajouter ».'
        ]
        : isAndroid
            ? [
                'Ouvre cette page dans Google Chrome.',
                'Appuie sur le menu ⋮ en haut à droite.',
                'Choisis « Ajouter à l’écran d’accueil » puis « Installer ».'
            ]
            : [
                'Ouvre le menu de ton navigateur.',
                'Choisis « Installer Tricheur » ou « Installer l’application ».',
                'Confirme l’installation.'
            ];

    description.textContent = isIOS
        ? 'Sur iPhone et iPad, l’installation se fait depuis Safari.'
        : isAndroid
            ? 'Sur Android, l’installation se fait depuis le menu de Chrome.'
            : 'L’option se trouve dans le menu du navigateur.';
    steps.replaceChildren();
    instructions.forEach(instruction => {
        const item = document.createElement('li');
        item.textContent = instruction;
        steps.appendChild(item);
    });
    note.textContent = 'Si une ancienne version est encore installée, supprime-la avant de recommencer.';
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    window.setTimeout(() => document.getElementById('btn-close-install-help')?.focus(), 0);
}

function closeInstallHelp() {
    const modal = document.getElementById('install-help-modal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (installHelpReturnFocus instanceof HTMLElement) installHelpReturnFocus.focus();
    installHelpReturnFocus = null;
}

document.addEventListener('keydown', event => {
    const modal = document.getElementById('install-help-modal');
    if (event.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') {
        closeInstallHelp();
    }
});

if ('serviceWorker' in navigator && ['https:', 'http:'].includes(window.location.protocol)) {
    let refreshingForUpdate = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshingForUpdate) return;
        refreshingForUpdate = true;
        const safeToReload = typeof currentActiveScreenId !== 'string' || currentActiveScreenId === 'screen-home';
        if (safeToReload) {
            window.location.reload();
        } else if (typeof announceUX === 'function') {
            announceUX('Mise à jour installée. Elle sera appliquée au prochain lancement.');
        }
    });

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js?v=5.0.2', { updateViaCache: 'none' })
            .then(registration => {
                registration.update();
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
                registration.addEventListener('updatefound', () => {
                    const worker = registration.installing;
                    if (!worker) return;
                    worker.addEventListener('statechange', () => {
                        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                            worker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                });
            })
            .catch(error => {
                console.warn('Mode hors connexion indisponible :', error);
            });
    });
}

updateInstallButton();

/* ===== test-mode.js ===== */
/* Outils de prévisualisation activés uniquement avec ?test dans l'URL. */
(function initialiseTestMode() {
    if (!window.TRICHEUR_TEST_MODE) return;

    document.body.classList.add('test-mode-active');
    const TEST_BUILD = 'V5 LAB • LOCAL • NON PUBLIÉ';
    let lastNarrativeTarget = 'transition-judgment';
    let testVolumePercent = 100;
    let statusScreen = 'Accueil';
    let testTheme = 'classic';

    function stopTestActivity() {
        clearInterval(timerInterval);
        clearInterval(voteInterval);
        clearInterval(eliminationInterval);
        timerRunning = false;
        voteRunning = false;
        timerEndAt = null;
        voteEndAt = null;
        eliminationEndAt = null;
        stopEliminationAmbience(true);
    }

    function prepareTestPlayers() {
        stopTestActivity();
        totalPlayers = 6;
        isCollectingNames = false;
        gameMode = ['classic', 'black', 'characters'].includes(testTheme) ? testTheme : 'classic';
        isBlackMode = gameMode === 'black';
        selectedDuration = 5;
        timerDuration = 300;
        voteDuration = 180;
        eliminationDuration = 120;
        secretWord = gameMode === 'characters'
            ? 'HARRY POTTER'
            : gameMode === 'black'
                ? 'PARADOXE'
                : 'VOLCAN';
        tricheurName = 'BASTIEN';
        playerNames = {
            1: 'ALICE',
            2: 'BASTIEN',
            3: 'CHLOÉ',
            4: 'DAMIEN',
            5: 'EMMA',
            6: 'FARID'
        };
        playerScores = { 1: 4, 2: 6, 3: 3, 4: 8, 5: 5, 6: 2 };
        playerRoles = [
            { id: 1, name: 'ALICE', role: 'Maître' },
            { id: 2, name: 'BASTIEN', role: 'Tricheur' },
            { id: 3, name: 'CHLOÉ', role: isBlackMode ? 'Complice' : 'Citoyen' },
            { id: 4, name: 'DAMIEN', role: 'Citoyen' },
            { id: 5, name: 'EMMA', role: 'Citoyen' },
            { id: 6, name: 'FARID', role: 'Citoyen' }
        ];
        selectedFinderId = null;
        selectedEliminatedId = null;
        finderAccusation = null;
        resultRevealed = false;
        championPlayerId = null;
        cardIsFlipped = false;

        syncGameModeUI();
        document.getElementById('player-count').textContent = totalPlayers;
        document.getElementById('duration-display').textContent = `${selectedDuration} min`;
        updateComposition();
    }

    function showTestRole(role) {
        // Le Complice n'existe que dans Black Edition : le laboratoire bascule
        // explicitement dans ce mode pour ne jamais simuler une composition invalide.
        if (role === 'Complice') testTheme = 'black';
        prepareTestPlayers();
        const index = playerRoles.findIndex(player => player.role === role);
        if (index < 0) return;
        currentPlayer = index;
        showScreen('screen-game', false);
        updatePlayerUI();
        toggleCardFlip();
    }

    function showTestDiscussion() {
        prepareTestPlayers();
        document.getElementById('black-constraint').style.display = isBlackMode ? 'block' : 'none';
        document.getElementById('constraint-text').textContent = isBlackMode
            ? 'Interdit de prononcer le prénom d’un joueur.'
            : '';
        updateTimerDisplay('timer-text', timerDuration);
        document.getElementById('discussion-progress-fill').style.width = '100%';
        setTimerExperience('discussion', 'ready');
        showScreen('screen-timer', false);
        toggleTimer();
    }

    function showTestJudgment() {
        prepareTestPlayers();
        selectedFinderId = 4;
        finderAccusation = null;
        updateTimerDisplay('vote-timer-text', voteDuration);
        document.getElementById('vote-progress-fill').style.width = '100%';
        setTimerExperience('vote', 'ready');
        prepareJudgmentQuestion();
        showScreen('screen-vote', false);
        toggleVoteTimer();
    }

    function showTestElimination() {
        prepareTestPlayers();
        selectedFinderId = 4;
        finderAccusation = 'trusted';
        initEliminationVote();
        clearInterval(eliminationInterval);
        eliminationEndAt = null;
        eliminationDuration = 120;
        const eliminationClockValue = document.querySelector('#elimination-clock .timer-value');
        if (eliminationClockValue) eliminationClockValue.textContent = '02:00';
        document.getElementById('elimination-tension-fill').style.width = '100%';
        stopEliminationAmbience(true);
    }

    function showTestResult(kind) {
        prepareTestPlayers();
        if (kind === 'village') {
            selectedFinderId = 4;
            finderAccusation = 'trusted';
            selectedEliminatedId = 2;
        } else if (kind === 'impostors') {
            selectedFinderId = 4;
            finderAccusation = 'accused';
        } else {
            selectedFinderId = 'none';
        }
        showScreen('screen-recap', false);
        revealRoundResult(false);
    }

    function showTestChampion() {
        prepareTestPlayers();
        const winner = playerRoles.find(player => player.id === 4);
        playerScores[4] = 10;
        championPlayerId = 4;
        renderChampionScreen(winner, playerScores);
        showScreen('screen-champion', false);
    }

    function showTestNarrative(target) {
        prepareTestPlayers();
        lastNarrativeTarget = target;
        const previews = {
            'transition-distribution': {
                tone: 'neutral',
                steps: [
                    {
                        kicker: 'MÉLANGE EN COURS',
                        title: 'LE HASARD PREND LA MAIN',
                        subtitle: 'Personne ne sait encore de quel côté il jouera.',
                        effect: 'card-shuffle',
                        shuffleStyle: 'casino',
                        sound: 'shuffle',
                        haptic: 'tap',
                        duration: 1650
                    },
                    {
                        kicker: 'LE TEMPS EST LANCÉ',
                        title: 'LA DISCUSSION COMMENCE',
                        subtitle: 'Questionnez. Analysez. Ne faites confiance à personne.',
                        effect: 'heartbeat',
                        sound: 'narrative',
                        haptic: 'phase',
                        duration: 860
                    }
                ]
            },
            'transition-judgment': {
                tone: 'judgment',
                steps: [
                    {
                        kicker: 'UN JOUEUR S’EST DÉMARQUÉ',
                        title: 'LE MOT A ÉTÉ TROUVÉ…',
                        subtitle: 'DAMIEN est maintenant au centre des soupçons.',
                        sound: 'narrative',
                        haptic: 'tap',
                        duration: 760
                    },
                    {
                        kicker: 'TROIS MINUTES POUR TRANCHER',
                        title: 'LE JUGEMENT COMMENCE',
                        subtitle: 'Observez. Argumentez. Décidez.',
                        effect: 'heartbeat',
                        sound: 'narrative',
                        haptic: 'phase',
                        duration: 820
                    }
                ]
            },
            'transition-elimination': {
                tone: 'judgment',
                steps: [
                    {
                        kicker: 'LE PREMIER SUSPECT EST ÉPARGNÉ',
                        title: 'LA CONFIANCE EST ACCORDÉE',
                        subtitle: 'Mais le Tricheur se cache peut-être encore parmi vous.',
                        sound: 'narrative',
                        haptic: 'tap',
                        duration: 720
                    },
                    {
                        kicker: 'IL FAUT MAINTENANT TRANCHER',
                        title: 'VOTE D’ÉLIMINATION',
                        subtitle: 'Un seul nom. Une décision définitive.',
                        effect: 'heartbeat',
                        sound: 'narrative',
                        haptic: 'decision',
                        duration: 820
                    }
                ]
            },
            'transition-next-round': {
                tone: 'neutral',
                steps: [{
                    kicker: 'LA MANCHE EST TERMINÉE',
                    title: 'LES RÔLES VONT CHANGER',
                    subtitle: 'Les certitudes disparaissent. Le jeu recommence.',
                    effect: 'heartbeat',
                    sound: 'narrative',
                    haptic: 'phase',
                    duration: 820
                }]
            },
            'transition-village': {
                tone: 'village',
                steps: [
                    { title: '', effect: 'blackout', duration: 420 },
                    {
                        kicker: 'LE VERDICT EST SCELLÉ',
                        title: '…',
                        subtitle: 'Un dernier battement avant la vérité.',
                        effect: 'heartbeat',
                        sound: 'narrative',
                        haptic: 'decision',
                        duration: 680
                    },
                    {
                        kicker: 'FIN DE LA MANCHE',
                        title: 'VICTOIRE DU VILLAGE',
                        effect: 'reveal-camp',
                        sound: 'narrative',
                        haptic: 'citizenWin',
                        duration: 920
                    }
                ]
            },
            'transition-impostors': {
                tone: 'impostors',
                steps: [
                    { title: '', effect: 'blackout', duration: 420 },
                    {
                        kicker: 'LE VERDICT EST SCELLÉ',
                        title: '…',
                        subtitle: 'Un dernier battement avant la vérité.',
                        effect: 'heartbeat',
                        sound: 'narrative',
                        haptic: 'decision',
                        duration: 680
                    },
                    {
                        kicker: 'FIN DE LA MANCHE',
                        title: 'VICTOIRE DES IMPOSTEURS',
                        effect: 'reveal-camp',
                        sound: 'narrative',
                        haptic: 'impostorWin',
                        duration: 920
                    }
                ]
            },
            'transition-no-word': {
                tone: 'no-word',
                steps: [
                    { title: '', effect: 'blackout', duration: 420 },
                    {
                        kicker: 'LE SILENCE TOMBE',
                        title: 'PERSONNE N’A TROUVÉ',
                        subtitle: 'Le mot est resté hors d’atteinte.',
                        effect: 'silence',
                        sound: 'narrative',
                        haptic: 'failure',
                        duration: 720
                    }
                ]
            },
            'transition-champion': {
                tone: 'village',
                steps: [
                    {
                        kicker: 'LE SEUIL EST ATTEINT',
                        title: '10 POINTS',
                        subtitle: 'La partie vient de basculer.',
                        sound: 'narrative',
                        haptic: 'decision',
                        duration: 650
                    },
                    {
                        kicker: 'TOUS LES REGARDS SE TOURNENT',
                        title: 'UN CHAMPION SE LÈVE',
                        subtitle: 'DAMIEN',
                        effect: 'reveal-camp',
                        sound: 'narrative',
                        haptic: 'citizenWin',
                        duration: 1000
                    }
                ]
            }
        };
        const preview = previews[target];
        if (preview) playNarrativeTransition(preview.steps, preview.tone);
    }

    function showTestShuffle(style) {
        prepareTestPlayers();
        const labels = {
            casino: ['CASINO', 'COUPE ET ENTRELACEMENT'],
            orbital: ['ORBITAL', 'LES CARTES DÉFIENT LA GRAVITÉ'],
            storm: ['TEMPÊTE', 'LE PAQUET SE DÉCHAÎNE'],
            fan: ['ÉVENTAIL', 'LES IDENTITÉS SE DÉPLOIENT'],
            cascade: ['CASCADE', 'LES CARTES TOMBENT EN PLACE'],
            glitch: ['GLITCH', 'LE SYSTÈME BROUILLE LES RÔLES'],
            prestige: ['PRESTIGE', 'UNE CARTE DEVIENT SEPT'],
            premium: ['PREMIUM', 'UN MÉLANGE SOBRE ET PRÉCIS']
        };
        const [kicker, title] = labels[style] || labels.orbital;
        playNarrativeTransition([{
            kicker: `STYLE ${kicker}`,
            title,
            subtitle: 'Observez le mouvement, le rythme et l’impact final.',
            effect: 'card-shuffle',
            shuffleStyle: style,
            sound: 'shuffle',
            haptic: 'phase',
            duration: 1750
        }], style === 'glitch' ? 'no-word' : style === 'casino' ? 'impostors' : 'neutral');
    }

    function setTestVolume(percent) {
        testVolumePercent = Math.max(0, Math.min(100, Number(percent) || 0));
        if (!soundEnabled && testVolumePercent > 0) {
            soundEnabled = true;
            localStorage.setItem(SOUND_PREFERENCE_KEY, 'true');
            updateSoundButton();
        }
        initAudioMoteur();
        if (audioMaster && audioCtx) {
            const target = Math.max(0.0001, MASTER_SOUND_VOLUME * testVolumePercent / 100);
            audioMaster.gain.setTargetAtTime(target, audioCtx.currentTime, 0.02);
        }
        updateStudioStatus();
    }

    function setTestSpeed(speed) {
        window.TRICHEUR_TEST_SPEED = Number(speed) || 1;
        document.querySelectorAll('[data-speed]').forEach(button => {
            button.classList.toggle('is-active', Number(button.dataset.speed) === window.TRICHEUR_TEST_SPEED);
        });
        updateStudioStatus();
    }

    function setTestMotion(reduced) {
        document.body.classList.toggle('test-reduced-motion', reduced);
        window.TRICHEUR_TEST_NARRATIVE_SCALE = reduced ? 0.45 : 1;
        document.querySelectorAll('[data-motion]').forEach(button => {
            button.classList.toggle('is-active', button.dataset.motion === (reduced ? 'reduced' : 'full'));
        });
        updateStudioStatus();
    }

    function setTestTheme(theme) {
        testTheme = theme;
        setGameMode(['classic', 'black', 'characters'].includes(theme) ? theme : 'classic', false);
        document.querySelectorAll('[data-theme]').forEach(button => {
            button.classList.toggle('is-active', button.dataset.theme === theme);
        });
        updateComposition();
        updateStudioStatus();
    }

    function applyScorePreset(preset) {
        prepareTestPlayers();
        const presets = {
            zero: [0, 0, 0, 0, 0, 0],
            tight: [7, 8, 7, 8, 6, 7],
            leader: [5, 7, 4, 9, 6, 3],
            champion: [6, 8, 4, 10, 7, 5]
        };
        const values = presets[preset] || presets.zero;
        playerRoles.forEach((player, index) => {
            playerScores[player.id] = values[index];
        });
        if (preset === 'champion') {
            showTestChampion();
        } else {
            selectedFinderId = 4;
            finderAccusation = 'trusted';
            selectedEliminatedId = 2;
            showScreen('screen-recap', false);
            revealRoundResult(false);
        }
        updateStudioStatus(`Scores : ${preset === 'leader' ? 'leader à 9' : preset}`);
    }

    async function resetTestCache(button) {
        const originalText = button.textContent;
        button.disabled = true;
        button.textContent = 'Nettoyage…';
        try {
            if ('caches' in window) {
                const keys = await caches.keys();
                await Promise.all(keys.map(key => caches.delete(key)));
            }
            button.textContent = 'Cache nettoyé ✓';
            announceUX('Cache de test nettoyé.');
        } catch (error) {
            button.textContent = 'Indisponible ici';
        }
        window.setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, 1400);
    }

    const screenNames = {
        'screen-home': 'Accueil',
        'screen-names': 'Prénoms',
        'screen-game': 'Carte rôle',
        'screen-timer': 'Discussion',
        'screen-recap': 'Résultat',
        'screen-vote': 'Jugement',
        'screen-elimination': 'Élimination',
        'screen-champion': 'Champion'
    };

    function updateStudioStatus(message = '') {
        const screenElement = document.querySelector('#test-status-screen');
        const speedElement = document.querySelector('#test-status-speed');
        const volumeElement = document.querySelector('#test-status-volume');
        const messageElement = document.querySelector('#test-status-message');
        if (screenElement) screenElement.textContent = statusScreen;
        if (speedElement) speedElement.textContent = `×${window.TRICHEUR_TEST_SPEED}`;
        if (volumeElement) volumeElement.textContent = `${testVolumePercent}%`;
        if (messageElement) messageElement.textContent = message || 'Prêt pour un nouveau test';
    }

    function showTestScreen(target) {
        const keepPanelOpen = /^(sound|haptic|speed|theme|motion|score|cache)-/.test(target);
        if (!keepPanelOpen) closeTestPanel();

        if (target.startsWith('sound-')) {
            playSound(target.replace('sound-', ''));
            updateStudioStatus(`Son testé : ${target.replace('sound-', '')}`);
            return;
        }
        if (target.startsWith('haptic-')) {
            playHaptic(target.replace('haptic-', ''));
            updateStudioStatus(`Vibration testée`);
            return;
        }
        if (target.startsWith('speed-')) {
            setTestSpeed(target.replace('speed-', ''));
            return;
        }
        if (target.startsWith('theme-')) {
            setTestTheme(target.replace('theme-', ''));
            return;
        }
        if (target.startsWith('motion-')) {
            setTestMotion(target === 'motion-reduced');
            return;
        }
        if (target.startsWith('score-')) {
            applyScorePreset(target.replace('score-', ''));
            return;
        }
        if (target === 'transition-replay') {
            showTestNarrative(lastNarrativeTarget);
            return;
        }
        if (target.startsWith('shuffle-')) {
            showTestShuffle(target.replace('shuffle-', ''));
            return;
        }
        if (target.startsWith('transition-')) {
            showTestNarrative(target);
        } else if (target === 'home') {
            prepareTestPlayers();
            showScreen('screen-home', false);
        } else if (target === 'names') {
            prepareTestPlayers();
            currentPlayer = 0;
            showNameEntryForCurrentPlayer();
            document.getElementById('current-player-name').value = 'ALICE';
            updateNameEntryState();
        } else if (target.startsWith('role-')) {
            const roles = {
                'role-master': 'Maître',
                'role-cheater': 'Tricheur',
                'role-accomplice': 'Complice',
                'role-citizen': 'Citoyen'
            };
            showTestRole(roles[target]);
        } else if (target === 'discussion') {
            showTestDiscussion();
        } else if (target === 'judgment') {
            showTestJudgment();
        } else if (target === 'elimination') {
            showTestElimination();
        } else if (target === 'result-input') {
            prepareTestPlayers();
            buildVoteTuiles();
            showScreen('screen-recap', false);
        } else if (target === 'result-village') {
            showTestResult('village');
        } else if (target === 'result-impostors') {
            showTestResult('impostors');
        } else if (target === 'result-empty') {
            showTestResult('empty');
        } else if (target === 'champion') {
            showTestChampion();
        }
        updateStudioStatus();
    }

    const launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.className = 'test-mode-launcher';
    launcher.textContent = '🧪 V5 LAB';
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-controls', 'test-mode-panel');

    const panel = document.createElement('aside');
    panel.id = 'test-mode-panel';
    panel.className = 'test-mode-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Navigation du mode Test');

    const header = document.createElement('div');
    header.className = 'test-mode-header';
    const title = document.createElement('h2');
    title.className = 'test-mode-title';
    title.textContent = 'Studio V5';
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'test-mode-close';
    closeButton.textContent = '×';
    closeButton.setAttribute('aria-label', 'Fermer le mode Test');
    header.append(title, closeButton);

    const note = document.createElement('p');
    note.className = 'test-mode-note';
    note.textContent = TEST_BUILD;

    const status = document.createElement('div');
    status.className = 'test-studio-status';
    status.innerHTML = `
        <span class="test-status-chip">Écran <strong id="test-status-screen">Accueil</strong></span>
        <span class="test-status-chip">Vitesse <strong id="test-status-speed">×1</strong></span>
        <span class="test-status-chip">Volume <strong id="test-status-volume">100%</strong></span>
        <span class="test-status-message" id="test-status-message">Prêt pour un nouveau test</span>
    `;
    panel.append(header, note, status);

    const groups = [
        ['Écrans', [
            ['Accueil', 'home'], ['Prénoms', 'names'],
            ['Discussion', 'discussion'], ['Jugement', 'judgment'],
            ['Vote élimination', 'elimination'], ['Saisie résultat', 'result-input']
        ]],
        ['Cartes révélées', [
            ['Maître', 'role-master'], ['Tricheur', 'role-cheater'],
            ['Complice', 'role-accomplice'], ['Enquêteur', 'role-citizen']
        ]],
        ['Résultats', [
            ['Village gagne', 'result-village', 'result-village'],
            ['Imposteurs gagnent', 'result-impostors', 'result-impostor'],
            ['Mot non trouvé', 'result-empty', 'result-empty'],
            ['Champion à 10 pts', 'champion']
        ]],
        ['Transitions narratives', [
            ['↻ Rejouer la dernière', 'transition-replay'],
            ['Distribution', 'transition-distribution'],
            ['Jugement', 'transition-judgment'],
            ['Vote élimination', 'transition-elimination'],
            ['Manche suivante', 'transition-next-round'],
            ['Verdict Village', 'transition-village', 'result-village'],
            ['Verdict Imposteurs', 'transition-impostors', 'result-impostor'],
            ['Mot non trouvé', 'transition-no-word', 'result-empty'],
            ['Champion', 'transition-champion']
        ]],
        ['8 mélanges à comparer', [
            ['A — Casino + cercle E ✓', 'shuffle-casino'],
            ['B — Orbital', 'shuffle-orbital'],
            ['C — Tempête', 'shuffle-storm'],
            ['D — Éventail', 'shuffle-fan'],
            ['E — Cascade', 'shuffle-cascade'],
            ['F — Glitch', 'shuffle-glitch'],
            ['G — Prestige', 'shuffle-prestige'],
            ['H — Premium', 'shuffle-premium']
        ]],
        ['Sons — écoute individuelle', [
            ['Pulsation grave', 'sound-narrative'],
            ['Mélange cartes', 'sound-shuffle'],
            ['Révélation carte', 'sound-flip'],
            ['Sélection', 'sound-select'],
            ['Validation décision', 'sound-decision'],
            ['Battements', 'sound-discussion-beat'],
            ['Fin du temps', 'sound-gong'],
            ['Victoire Village', 'sound-success', 'result-village'],
            ['Victoire Imposteurs', 'sound-impostor-win', 'result-impostor']
        ]],
        ['Vibrations', [
            ['Toucher', 'haptic-tap'],
            ['Révélation', 'haptic-reveal'],
            ['Décision', 'haptic-decision'],
            ['Verrouillage', 'haptic-lock'],
            ['Victoire Village', 'haptic-citizenWin'],
            ['Victoire Imposteurs', 'haptic-impostorWin']
        ]],
        ['Minuteurs accélérés', [
            ['Temps réel ×1', 'speed-1'],
            ['Rapide ×10', 'speed-10'],
            ['Express ×30', 'speed-30']
        ]],
        ['Scores prédéfinis', [
            ['Tous à 0', 'score-zero'],
            ['Partie serrée', 'score-tight'],
            ['Leader à 9', 'score-leader'],
            ['Champion 10', 'score-champion']
        ]],
        ['Comparaison visuelle', [
            ['Thème classique', 'theme-classic'],
            ['Black Edition', 'theme-black'],
            ['Mode Personnages', 'theme-characters'],
            ['Animations complètes', 'motion-full'],
            ['Animations réduites', 'motion-reduced']
        ]]
    ];

    groups.forEach(([label, actions]) => {
        const section = document.createElement('div');
        section.className = 'test-mode-section';
        section.textContent = label;
        const grid = document.createElement('div');
        grid.className = 'test-mode-grid';
        actions.forEach(([text, target, extraClass = '']) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `test-mode-action ${extraClass}`.trim();
            button.textContent = text;
            button.dataset.testTarget = target;
            if (target.startsWith('speed-')) button.dataset.speed = target.replace('speed-', '');
            if (target.startsWith('theme-')) button.dataset.theme = target.replace('theme-', '');
            if (target.startsWith('motion-')) button.dataset.motion = target.replace('motion-', '');
            grid.appendChild(button);
        });
        panel.append(section, grid);
    });

    const volumeSection = document.createElement('div');
    volumeSection.className = 'test-mode-section';
    volumeSection.textContent = 'Volume du laboratoire';
    const volumeControl = document.createElement('label');
    volumeControl.className = 'test-volume-control';
    volumeControl.innerHTML = `
        <span>0</span>
        <input id="test-volume-range" type="range" min="0" max="100" step="5" value="100" aria-label="Volume des sons de test">
        <span>100</span>
    `;
    panel.append(volumeSection, volumeControl);

    const toolsSection = document.createElement('div');
    toolsSection.className = 'test-mode-section';
    toolsSection.textContent = 'Outils';
    const toolsGrid = document.createElement('div');
    toolsGrid.className = 'test-mode-grid';
    const cacheButton = document.createElement('button');
    cacheButton.type = 'button';
    cacheButton.className = 'test-mode-action';
    cacheButton.textContent = 'Nettoyer le cache';
    cacheButton.addEventListener('click', () => resetTestCache(cacheButton));
    const reloadButton = document.createElement('button');
    reloadButton.type = 'button';
    reloadButton.className = 'test-mode-action';
    reloadButton.textContent = 'Recharger le test';
    reloadButton.addEventListener('click', () => window.location.reload());
    toolsGrid.append(cacheButton, reloadButton);
    panel.append(toolsSection, toolsGrid);

    function openTestPanel() {
        panel.hidden = false;
        launcher.setAttribute('aria-expanded', 'true');
        closeButton.focus();
    }

    function closeTestPanel() {
        panel.hidden = true;
        launcher.setAttribute('aria-expanded', 'false');
    }

    launcher.addEventListener('click', () => panel.hidden ? openTestPanel() : closeTestPanel());
    closeButton.addEventListener('click', () => {
        closeTestPanel();
        launcher.focus();
    });
    panel.addEventListener('click', event => {
        const button = event.target.closest('[data-test-target]');
        if (button) showTestScreen(button.dataset.testTarget);
    });
    panel.querySelector('#test-volume-range').addEventListener('input', event => {
        setTestVolume(event.target.value);
    });
    window.addEventListener('tricheur:screenchange', event => {
        statusScreen = screenNames[event.detail.id] || event.detail.label;
        updateStudioStatus();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !panel.hidden) {
            closeTestPanel();
            launcher.focus();
        }
    });

    document.body.append(panel, launcher);
    prepareTestPlayers();
    setTestSpeed(1);
    setTestMotion(false);
    updateStudioStatus();
})();