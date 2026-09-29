# Agudike Uchechukwu Maryrose - Standalone Portfolio Package

This folder contains the complete, self-contained standalone website files requested for traditional web hosting (such as cPanel, Apache, Nginx, or XAMPP):

## File Directory
- **`index.html`**: Semantic HTML5 single-page application structure featuring all 11 required sections.
- **`style.css`**: Pure modern responsive CSS3 utilizing the Deep Navy, Royal Purple, Electric Blue, Gold, and White palette.
- **`script.js`**: Vanilla JavaScript handling sticky navigation, mobile menu, category filtering, step switcher, and AJAX contact handling.
- **`contact.php`**: Secure PHP script that sanitizes submissions, sends notification emails, and persists inquiries into MySQL.
- **`database.sql`**: SQL database initialization script for creating the `maryrose_portfolio` database and `contact_inquiries` table.

## Quick Hosting Instructions
1. Upload `index.html`, `style.css`, `script.js`, and `contact.php` into your web server's `public_html` root or subfolder.
2. (Optional MySQL Integration): Open phpMyAdmin, import `database.sql`, and update the database credentials inside `contact.php` ($dbUser, $dbPass).
3. The contact form works with or without a database (it will still send emails via PHP mail and return JSON responses).
