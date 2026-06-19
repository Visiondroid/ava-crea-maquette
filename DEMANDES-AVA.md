# Demandes à Ava — finaliser le site pour la mise en ligne

**Date :** 19/06/2026 · **Statut :** retour Nour « Modification site web » (19/06) intégré — commit local prêt, reste `git push` (geste Chris)

## ✅ 19/06/2026 — Retour Nour traité (Vision)

Mail Nour 19/06 → 7 points, tous intégrés dans la maquette :

1. ✅ **Logos en version claire** — les chips clients viraient au **NOIR** en mode clair (`--chip-bg` inversé). Passés en **blanc + bordure subtile** dans les 2 modes → logos nets. *(NB : logo Laiterie Gilbert blanc → invisible sur blanc, déjà le cas en sombre ; à remplacer par une version foncée ou retirer.)*
2. ✅ **Son au clic sur les vidéos** — `muted` retiré + handler : clic = lecture AVEC son + coupe les autres.
3. ✅ **2 vidéos remplacées** — billets (video04) → **Vidéo tell and cash** · burger (bwburger) → **Vidéo anas** (rapatriées du Drive + posters générés ; anciennes supprimées). *(NB : il reste 2 vidéos Tell & Cash — la « dame en rose » gardée + la nouvelle ; si Nour voulait remplacer la dame en rose à la place → 10 sec.)*
4. ✅ **Cas Anas Boussaida** — `projet-anas.html` rédigé en entier (texte Drive de Nour : 1 000 → 11 000 abonnés, 1ʳᵉ vidéo 1M+) + 3 captures (avant/viral/après) + carte réelle sur `projets.html`.
5. ⏳ **Mentions légales** — données publiques Pappers intégrées (EI · SIRET 898 058 128 00023 · APE 78.10Z · TVA FR75 898 058 128 · Angers) + hébergeur GitHub Pages. **MANQUE (masqué par l'INSEE → demander à Nour) : nom complet (Prénom NOM) + adresse précise du siège** ; + confirmer le régime TVA (franchise en base ?).
6. ✅ **Mode sombre par défaut** — `theme.js` ouvre en sombre (toggle clair conservé).
7. ✅ **Version mobile** — maquette déjà responsive MAIS le menu burger ne s'ouvrait pas → **câblé** (theme.js + CSS). Mobile pleinement fonctionnel. → Réponse à Nour : « c'est déjà dispo, le site s'adapte au mobile ».
8. ✅ **Responsive grand écran / dézoom** (retour Chris 19/06) — les sections en animation `reveal` restaient **blanches** au dézoom (on voit plusieurs sections d'un coup, `opacity:0` non déclenché). → **reveal robuste** dans `theme.js` : révèle tout ce qui entre dans le viewport (chargement + scroll + **resize/zoom**). Vérifié en preview à 2560px = page pleine, zéro section blanche.

**Reste pour Chris :** (a) répondre à Nour (nom + adresse mentions légales ; confirmer mapping vidéos si besoin) · (b) `git -C ~/InfinityVision/05_sites/ava-crea push` pour déployer.

---

### Référence — état au 15/06/2026

- ✅ Section `#projets` créée (les CTA "Voir nos projets" pointent enfin quelque part)
- ✅ Liens morts réparés (CTA "Prendre rendez-vous", footer, FAQ-more vers `faq.html`)
- ✅ Icônes sociales : emojis remplacés par vrais SVG Instagram/TikTok/YouTube/Facebook/LinkedIn
- ✅ Open Graph + Twitter Card + canonical + favicon
- ✅ JSON-LD `ProfessionalService` (home) + `FAQPage` (home + page FAQ dédiée)
- ✅ **9 réponses FAQ home remplacées** par les vraies réponses validées d'Ava (Drive)
- ✅ **Page `faq.html` créée** avec 2 onglets : FAQ Accompagnement Création de Contenu (15 questions) + FAQ Formation Réseaux Sociaux (12 questions). Tabs interactives, JSON-LD complet.
- ✅ **Bloc "preuve / milliers d'euros de CA"** ajouté entre projets et offres (demandé par Ava dans le doc structure)
- ✅ Markup vidéos prêt à recevoir les iframes TikTok/Insta
- ✅ Mentions légales + politique de confidentialité créées (RGPD-compliant, placeholders explicites)
- ✅ Footer enrichi (liens légaux)
- ✅ CSS orphelin nettoyé

## Ce qu'il faut encore pour aller en ligne

### 1. ⚠️ Vidéos vitrines (BLOCKER — dossier Drive vide)

Le dossier **« Vidéo pour le site »** dans le Drive d'Ava est **VIDE** (créé le 06/06 mais aucun fichier déposé).

Pour intégrer les 4 vidéos dans la section #projets, on a besoin d'**URLs d'embed** TikTok ou Instagram (pas de fichiers MP4 à uploader — on embed les vidéos hébergées sur leurs plateformes natives, c'est plus léger et ça lui fait des vues).

Format demandé pour chaque vidéo :
- TikTok : `Partager` → `Intégrer` → copier le lien
- Instagram : `…` → `Embed` → copier le lien

- [ ] Vidéo 1 — Black & White Burger
- [ ] Vidéo 2 — Ti Galik
- [ ] Vidéo 3 — Tell & Cash
- [ ] Vidéo 4 — Anas Boussaida

(Ce sont les 4 cas qu'Ava a déjà préparés dans son Drive "Nos projets". Si elle préfère mettre en avant d'autres vidéos, lui demander.)

### 2. Données légales (obligatoires RGPD/LCEN)

- [ ] **Raison sociale exacte** d'AVA Créa
- [ ] **Forme juridique** (EI, SAS, SASU, EURL, micro-entreprise…)
- [ ] **SIRET** (14 chiffres)
- [ ] **Adresse du siège social** complète
- [ ] **RCS ou Répertoire des Métiers** (numéro + ville d'immatriculation, si applicable)
- [ ] **N° TVA intracommunautaire** (si assujettie)
- [ ] **Directeur de la publication** (prénom + nom)
- [ ] **Email de contact public**
- [ ] **Téléphone pro public** (optionnel)

### 3. URLs réseaux sociaux

Actuellement en placeholder `https://www.instagram.com/avacrea`, etc. À remplacer par les vraies :

- [ ] Instagram
- [ ] TikTok
- [ ] YouTube
- [ ] Facebook
- [ ] LinkedIn

### 4. Lien Calendly (CTA "Prendre rendez-vous")

- [ ] URL Calendly de l'appel découverte (actuellement placeholder `https://calendly.com/avacrea/decouverte`)

### 5. Vrais avis clients (section témoignages)

Le code actuel contient 5 verbatims **inventés** marqués "à remplacer". Demander à Ava 5+ vrais avis (idéalement extraits de ses avis Google si elle en a, sinon demandés à ses meilleurs clients).

Format : verbatim (1-3 phrases) + prénom/marque du client + secteur.

- [ ] Avis 1
- [ ] Avis 2
- [ ] Avis 3
- [ ] Avis 4
- [ ] Avis 5+

### 6. Hébergeur retenu pour le site

- [ ] **Reco Vision : Vercel** (gratuit, HTTPS auto, déploiement par git push — comme le site IV). Repo GitHub existe déjà : `Visiondroid/ava-crea-maquette` (la maquette `visiondroid.github.io/ava-crea-maquette` est déjà en ligne).
- [ ] Si elle veut autre chose (OVH, Hostinger, etc.), préciser.

### 7. Domaine

- [ ] Domaine final retenu (`avacrea.fr` ? autre ?)
- [ ] Si déjà acheté : où ? (pour pointer le DNS)
- [ ] Si pas acheté : Vision peut le faire acheter (~10 €/an).

### 8. Stats affichées (à confirmer honnêtes)

Le hero claim : **+120M vues / +40 clients / x2.6 CA**. Validés par Ava (preuves honnêtes — règle IV).

- [ ] Confirmer les 3 chiffres OU les corriger

### 9. Cover Open Graph (image partage social)

Référencée comme `images/og-cover.jpg` mais le fichier n'existe pas. 1200×630 px avec logo + tagline. Vision peut le générer (Claude Design).

- [ ] OK pour que Vision génère la cover OG ? (sinon Ava la fournit)

### 10. Cas client Anas Boussaida (page Projets)

Le doc Drive « Anas boussaida » est **vide** (créé le 07/06 mais pas rempli). Les 3 autres cas (BWBurger, Tell & Cash, Ti'Galik) sont intégrés en storytelling complet sur `projets.html`. Pour Anas, j'ai mis un placeholder « Étude de cas en préparation ».

- [ ] Ava rédige le storytelling Anas Boussaida (même format que les autres : contexte → stratégie → résultats). Les 3 screenshots (avant / 1ʳᵉ vidéo virale / après) sont déjà dans le Drive.

### 11. Blog — décision

Dans le doc Drive "Blog", Ava demande : *« Si tu penses que rajouter des blogs peut aider mon référencement je peux en créer une fois de temps en temps. »*

- [ ] **Reco Vision : OUI**, c'est un levier SEO solide pour une agence (long-tail keywords secteur-par-secteur). Pas un blocker go-live mais à activer ensuite (1-2 articles/mois suffisent). Ava peut écrire, Vision peut l'aider à formater.

---

## Mail prêt à envoyer à Ava (geste Chris)

> **Objet :** Site AVA Créa — derniers éléments pour la mise en ligne
>
> Salut Ava,
>
> Le site est quasiment prêt à passer en ligne. On a intégré ton brief structure et ta FAQ complète (15 questions Accompagnement + 12 Formation, sur une page dédiée — ça fait un super hub pour le référencement).
>
> Pour pouvoir publier, j'ai besoin de quelques éléments de ta part :
>
> **1. Tes 4 vidéos vitrines** — le dossier "Vidéo pour le site" du Drive est encore vide. Le plus simple : sur TikTok ou Instagram, va sur la vidéo que tu veux mettre en avant, clique sur "Partager → Intégrer", et copie-colle moi les 4 liens (BW Burger, Ti Galik, Tell & Cash, Anas Boussaida). C'est mieux qu'uploader les MP4 — ça fait des vues sur tes comptes en plus.
>
> **2. Tes infos légales** (obligatoires RGPD) :
> - Raison sociale exacte + forme juridique
> - SIRET
> - Adresse du siège
> - RCS si société, ou Répertoire des Métiers
> - Email de contact public
> - Directeur de la publication
>
> **3. URLs de tes réseaux sociaux** (Instagram, TikTok, YouTube, Facebook, LinkedIn)
>
> **4. Ton lien Calendly** (pour le bouton "Prendre rendez-vous")
>
> **5. 5 avis clients** (verbatim + nom + secteur) — idéalement extraits de tes avis Google.
>
> **6. Le domaine retenu** (avacrea.fr ?) — on peut s'occuper de l'achat et de la mise en ligne si tu veux.
>
> Dès que j'ai ça, je publie le site dans la foulée.
>
> À vite,
> Chris

---

**Action Chris :** envoyer ce mail à Ava ce week-end pour récupérer les éléments début de semaine prochaine et publier dans la foulée.
