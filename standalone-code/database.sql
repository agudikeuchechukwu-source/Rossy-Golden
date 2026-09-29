-- ==========================================================
-- Database Schema for Agudike Uchechukwu Maryrose Portfolio
-- MySQL / MariaDB compatible
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `maryrose_portfolio` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `maryrose_portfolio`;

-- Table: Contact Inquiries
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `status` ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_email` (`email`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional Table: Portfolio Projects (for dynamic CMS management)
CREATE TABLE IF NOT EXISTS `portfolio_projects` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `filter_key` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `project_url` VARCHAR(255) DEFAULT NULL,
  `is_featured` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Seed Data for Portfolio Projects
INSERT INTO `portfolio_projects` (`title`, `category`, `filter_key`, `description`, `role`, `image_url`, `is_featured`, `sort_order`) 
VALUES
('UI/UX Design Showcase Project', 'UI/UX Design', 'uiux', 'A user-centered interface wireframe and interactive prototype designed with accessibility, intuitive user flows, and modern design systems.', 'UI/UX Designer', 'assets/images/portfolio-uiux.jpg', 1, 1),
('Web Development Showcase Project', 'Web Development', 'webdev', 'Responsive business and portfolio website constructed with semantic HTML5, CSS3 grid/flexbox layouts, and modular JavaScript.', 'Web Developer', 'assets/images/portfolio-webdev.jpg', 1, 2),
('Database Management Showcase Project', 'Database Management', 'database', 'Normalized relational database architecture with entity-relationship mapping, primary/foreign key integrity, and optimized SQL queries.', 'Database Specialist', 'assets/images/portfolio-database.jpg', 1, 3),
('Graphics Design Showcase Project', 'Graphics Design', 'graphics', 'Cohesive brand identity collaterals, social media promotional banners, and harmonious typography compositions.', 'Graphic Designer', 'assets/images/portfolio-graphics.jpg', 1, 4),
('Digital Marketing Campaign Project', 'Digital Marketing', 'marketing', 'Strategic online campaign roadmap focusing on audience discoverability, content strategy, and multi-channel promotion.', 'Digital Marketer', 'assets/images/portfolio-marketing.jpg', 1, 5),
('Social Media Management Project', 'Social Media Management', 'social', 'Organized 30-day content calendar, engagement guidelines, and consistent brand tone for business social profiles.', 'Social Media Manager', 'assets/images/portfolio-social.jpg', 1, 6);
