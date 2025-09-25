Simulateur de prix "Mon Bureau Tout Propre"

A. Présentation du projet
L’entreprise fictive **"Mon Bureau Tout Propre"**, spécialisée dans le nettoyage de bureaux, souhaite mettre à disposition de ses clients un simulateur de prix interactif directement intégré à son site internet.  
Ce simulateur permet aux visiteurs d’obtenir une estimation claire et rapide du coût des prestations pour une semaine, en fonction de critères choisis.

B. Objectifs du site
- Fournir un outil simple et responsive pour estimer un tarif en ligne.  
- Valoriser la transparence de l’entreprise en permettant aux clients de comparer différentes options.

 C. Périmètre fonctionnel
Le simulateur inclut :  
1. **Formulaire clair et responsive** comprenant :  
   - Surface des bureaux à nettoyer (saisie en m²)  
   - Fréquence du nettoyage :  
     - 1 fois par semaine  
     - 2 fois par semaine  
     - Tous les jours  
   - Option vitres incluses (oui / non)  

2. Calcul automatique du prix** selon la formule :  

   A. Tarif de base : 
   'Prix = Surface × 1,50 €'  

   B. Majoration selon la fréquence : 
   Multiplier le tarif de base par le nombre de nettoyages par semaine :  
   - 1 fois → ×1  
   - 2 fois → ×2  
   - Tous les jours (5 fois par semaine) → ×5  

   C. Options supplémentaires :
   - Si vitres incluses → +10%  

   D. Résultat final affiché :
   - Montant HT = prix après options  
   - TVA (20%) = Montant HT × 0,20  
   - Montant TTC = Montant HT + TVA  

 Contraintes techniques
- Réalisation en **HTML / CSS / JavaScript (vanilla) (+scss perso)
- Pas de framework ni de backend  
- Code clair, bien structuré et séparé (HTML, CSS, JS distincts)  
- Site responsive (ordinateur, tablette, mobile)

 E. Graphisme et ergonomie
- Interface minimaliste, moderne et lisible  
- Mise en avant du résultat calculé  
- Couleurs sobres (bleu, blanc, gris) avec contraste suffisant  

 F. Livraison et rendu attendu
- Dépôt GitHub contenant :  
  - Code complet du projet  
  - Fichier `README.md` expliquant :  
    - Contexte du projet  
    - Technologies utilisées  
    - Instructions pour tester le simulateur  
- Déploiement sur GitHub Pages
