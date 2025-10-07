# Dashboard ONG - Documentation

## 📋 Vue d'ensemble

Ce dossier contient toutes les pages du dashboard pour les organisations (ONG). Toutes les données sont centralisées dans le fichier JSON `src/composantjson/ongDashboard.json`.

## 📁 Structure des fichiers

```
src/page/ong/
├── ongdashboard.jsx      # Page principale du dashboard
├── OngProjets.jsx        # Gestion des projets
├── OngDons.jsx           # Suivi des dons reçus
├── OngBenevoles.jsx      # Gestion des bénévoles
├── OngSettings.jsx       # Paramètres de l'organisation
└── README.md             # Cette documentation
```

## 🎨 Pages disponibles

### 1. **Dashboard Principal** (`ongdashboard.jsx`)
- **Route**: `/ong/dashboard`
- **Fonctionnalités**:
  - Vue d'ensemble des statistiques
  - Projets actifs
  - Dons récents
  - Bénévoles actifs
  - Graphiques et indicateurs clés

### 2. **Gestion des Projets** (`OngProjets.jsx`)
- **Route**: `/ong/projets`
- **Fonctionnalités**:
  - Liste de tous les projets
  - Filtrage par statut (En cours, Terminé, En attente)
  - Progression des objectifs de financement
  - Statistiques par projet (bénévoles, bénéficiaires, dates)
  - Création et modification de projets

### 3. **Suivi des Dons** (`OngDons.jsx`)
- **Route**: `/ong/dons`
- **Fonctionnalités**:
  - Liste complète des dons reçus
  - Recherche par donateur ou projet
  - Filtrage par type (Mensuel, Ponctuel)
  - Statistiques des dons
  - Export des données

### 4. **Gestion des Bénévoles** (`OngBenevoles.jsx`)
- **Route**: `/ong/benevoles`
- **Fonctionnalités**:
  - Liste des bénévoles actifs
  - Profils détaillés avec compétences
  - Heures de bénévolat
  - Projets assignés
  - Informations de contact
  - Modal de détails complet

### 5. **Paramètres** (`OngSettings.jsx`)
- **Route**: `/ong/settings`
- **Fonctionnalités**:
  - Informations générales de l'ONG
  - Gestion du logo
  - Sécurité du compte
  - Changement de mot de passe
  - Préférences de notifications
  - Authentification à deux facteurs

## 📊 Structure des données JSON

Le fichier `src/composantjson/ongDashboard.json` contient:

```json
{
  "ong": {
    "id": 4,
    "name": "Nom de l'ONG",
    "logo": "/chemin/vers/logo.png",
    "description": "Description de l'ONG",
    "mission": "Mission de l'ONG",
    "email": "contact@ong.org",
    "phone": "+225 XX XX XX XX XX",
    "address": "Adresse complète",
    "founded": "2015"
  },
  "stats": {
    "totalDonations": 2500,
    "totalVolunteers": 25,
    "activeProjects": 3,
    "completedProjects": 5,
    "beneficiaries": 150
  },
  "projects": [
    {
      "id": 1,
      "title": "Titre du projet",
      "description": "Description détaillée",
      "status": "En cours",
      "donations": 1200,
      "goal": 2000,
      "startDate": "2024-01-15",
      "endDate": "2024-06-30",
      "volunteers": 8,
      "beneficiaries": 50,
      "category": "Catégorie"
    }
  ],
  "volunteers": [
    {
      "id": 1,
      "name": "Nom complet",
      "email": "email@example.com",
      "phone": "+225 XX XX XX XX XX",
      "hours": 10,
      "joinDate": "2023-06-15",
      "skills": ["Compétence 1", "Compétence 2"],
      "projects": [1, 3]
    }
  ],
  "donations": [
    {
      "id": 1,
      "donorName": "Nom du donateur",
      "amount": 500,
      "date": "2024-01-10",
      "projectId": 1,
      "projectTitle": "Titre du projet",
      "type": "Ponctuel",
      "status": "Reçu"
    }
  ],
  "sidebarMenu": [
    {
      "title": "Tableau de bord",
      "link": "/ong/dashboard",
      "icon": "LayoutDashboard"
    }
  ]
}
```

## 🎯 Comment ajouter des données

### Ajouter un nouveau projet

```json
{
  "id": 4,
  "title": "Nouveau projet",
  "description": "Description du nouveau projet",
  "status": "En cours",
  "donations": 0,
  "goal": 3000,
  "startDate": "2024-03-01",
  "endDate": "2024-09-30",
  "volunteers": 0,
  "beneficiaries": 0,
  "category": "Éducation"
}
```

### Ajouter un nouveau bénévole

```json
{
  "id": 4,
  "name": "Nouveau Bénévole",
  "email": "nouveau@email.com",
  "phone": "+225 07 44 44 44 44",
  "hours": 0,
  "joinDate": "2024-03-01",
  "skills": ["Compétence 1", "Compétence 2"],
  "projects": []
}
```

### Ajouter un nouveau don

```json
{
  "id": 5,
  "donorName": "Nouveau Donateur",
  "amount": 1000,
  "date": "2024-03-01",
  "projectId": 1,
  "projectTitle": "Nom du projet",
  "type": "Ponctuel",
  "status": "Reçu"
}
```

## 🚀 Intégration dans App.jsx

Pour utiliser ces pages, ajoutez les routes dans votre `App.jsx`:

```jsx
import OngDashboard from './page/ong/ongdashboard';
import OngProjets from './page/ong/OngProjets';
import OngDons from './page/ong/OngDons';
import OngBenevoles from './page/ong/OngBenevoles';
import OngSettings from './page/ong/OngSettings';

// Dans votre configuration de routes
<Route path="/ong/dashboard" element={<OngDashboard />} />
<Route path="/ong/projets" element={<OngProjets />} />
<Route path="/ong/dons" element={<OngDons />} />
<Route path="/ong/benevoles" element={<OngBenevoles />} />
<Route path="/ong/settings" element={<OngSettings />} />
```

## 🎨 Personnalisation

### Couleurs
Les pages utilisent Tailwind CSS. Les couleurs principales sont:
- Bleu: `blue-600` (navigation, boutons principaux)
- Vert: `green-600` (bénévoles, succès)
- Rouge: `red-600` (alertes, déconnexion)
- Jaune: `yellow-600` (avertissements)
- Violet: `purple-600` (statistiques)

### Icônes
Les icônes proviennent de `lucide-react`. Pour ajouter de nouvelles icônes:

```jsx
import { NouvelleIcone } from "lucide-react";
```

## 📱 Responsive Design

Toutes les pages sont entièrement responsive avec:
- **Mobile**: Menu hamburger, grille 1 colonne
- **Tablet**: Grille 2 colonnes
- **Desktop**: Sidebar fixe, grille 3-4 colonnes

## 🔧 Fonctionnalités à venir

- [ ] Connexion à une API backend
- [ ] Gestion des images uploadées
- [ ] Graphiques interactifs
- [ ] Export PDF des rapports
- [ ] Système de messagerie interne
- [ ] Calendrier des événements
- [ ] Gestion des campagnes de financement

## 💡 Conseils d'utilisation

1. **Toujours mettre à jour le JSON** avant de tester les pages
2. **Respecter la structure des données** pour éviter les erreurs
3. **Utiliser des IDs uniques** pour chaque élément
4. **Tester sur mobile** pour vérifier la responsivité
5. **Vérifier les liens** entre les différentes pages

## 🐛 Débogage

Si vous rencontrez des problèmes:
1. Vérifiez que le fichier JSON est valide
2. Assurez-vous que tous les imports sont corrects
3. Vérifiez la console pour les erreurs
4. Testez avec des données minimales d'abord

## 📞 Support

Pour toute question ou problème, consultez la documentation React et Tailwind CSS.
