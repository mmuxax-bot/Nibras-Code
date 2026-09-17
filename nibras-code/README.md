# Nibras Code — sayt

Sadə, build tələb etməyən statik sayt (HTML/CSS/JS). Birbaşa GitHub-a atıb Vercel ilə yayımlaya bilərsiniz.

## Fayllar
- `index.html` — ana səhifə
- `nibras-arabic.html` — Nibras Arabic proqramı üçün ayrıca səhifə (hələlik "tezliklə")
- `style.css`, `script.js`
- `assets/` — loqo və tanıtım şəkli

## GitHub-a atmaq
```bash
git init
git add .
git commit -m "Nibras Code sayt"
git branch -M main
git remote add origin <repo-linkiniz>
git push -u origin main
```

## Vercel ilə yayımlamaq
1. vercel.com hesabınıza daxil olun.
2. "Add New Project" → GitHub reponuzu seçin.
3. Framework: **Other / Static** seçin, build əmri lazım deyil.
4. Deploy edin — bir neçə saniyə sonra sayt hazır olacaq.

## Növbəti addımlar
- Hər yeni proqram üçün ayrıca `.html` səhifə əlavə edib, ana səhifədəki "Proqramlarımız" bölməsinə link qoya bilərsiniz (nümunə: `nibras-arabic.html`).
- Email ünvanını (`info@nibrascode.com`) footer-də özününküyə dəyişin.
