-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 02, 2022 at 06:06 PM
-- Server version: 5.7.36
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kookos_pizza`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` bigint(20) NOT NULL DEFAULT '0',
  `role_id` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `admin_id`, `role_id`, `name`, `email`, `phone`, `email_verified_at`, `password`, `status`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 1, 'Admin', 'admin@annanovas.com', NULL, '2022-09-08 06:41:18', '$2y$10$umOv/8CkCfx2YbR0LNCSEuwYijRqyQfkezv5UaP1J/TZo.YUjSrYO', 1, 'vWEnmHkhJpP9WFw6k5VyjQkIWneNLYzMRpRM7hw4bNRr1TCPXJ9W2gT1HZbp', '2022-09-08 06:41:18', '2022-09-08 06:41:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_password_resets`
--

DROP TABLE IF EXISTS `admin_password_resets`;
CREATE TABLE IF NOT EXISTS `admin_password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admin_permission_groups`
--

DROP TABLE IF EXISTS `admin_permission_groups`;
CREATE TABLE IF NOT EXISTS `admin_permission_groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_permission_groups`
--

INSERT INTO `admin_permission_groups` (`id`, `admin_id`, `name`, `key`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 'Admin', 'admins', 1, '2022-09-08 06:41:18', '2022-09-08 06:41:18', NULL),
(2, 0, 'User', 'users', 1, '2022-09-08 06:41:18', '2022-09-08 06:41:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_permission_group_permission`
--

DROP TABLE IF EXISTS `admin_permission_group_permission`;
CREATE TABLE IF NOT EXISTS `admin_permission_group_permission` (
  `admin_permission_group_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_permission_group_permission`
--

INSERT INTO `admin_permission_group_permission` (`admin_permission_group_id`, `permission_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `slug`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pizza', 'Special', 'pizza', 1, '2022-09-08 07:09:34', '2022-09-12 00:55:43', NULL),
(2, 'Burger', 'Burger', 'burger', 1, '2022-09-09 01:45:37', '2022-09-11 23:18:43', NULL),
(3, 'Combo Platter', NULL, 'combo-platter', 1, '2022-09-09 03:01:45', '2022-09-12 00:03:39', '2022-09-12 00:03:39'),
(7, 'test', NULL, 'test', 1, '2022-09-11 23:45:02', '2022-09-12 00:28:10', '2022-09-12 00:28:10'),
(9, 'Test Category', 'test category', 'test-category', 1, '2022-09-12 00:28:35', '2022-09-12 00:28:35', NULL),
(10, 'Combo Platter ||', 'rice.chicken', 'combo-platter', 1, '2022-09-13 07:09:14', '2022-09-13 07:09:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_option_items`
--

DROP TABLE IF EXISTS `category_option_items`;
CREATE TABLE IF NOT EXISTS `category_option_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `option_category_id` bigint(20) NOT NULL DEFAULT '0',
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_option_items`
--

INSERT INTO `category_option_items` (`id`, `option_category_id`, `category_id`, `option_id`, `item_id`, `status`, `created_at`, `updated_at`) VALUES
(5, 3, 2, 3, 4, 1, '2022-09-09 07:46:59', '2022-09-09 07:46:59'),
(10, 5, 3, 2, 2, 1, '2022-09-12 00:03:29', '2022-09-12 00:03:29'),
(20, 10, 9, 12, 14, 1, '2022-09-12 01:27:56', '2022-09-12 01:27:56'),
(21, 11, 2, 1, 1, 1, '2022-09-12 06:53:18', '2022-09-12 06:53:18'),
(22, 12, 2, 2, 2, 1, '2022-09-13 04:26:35', '2022-09-13 04:26:35'),
(24, 13, 1, 1, 1, 1, '2022-09-13 04:27:42', '2022-09-13 04:27:42'),
(25, 14, 10, 2, 2, 1, '2022-09-13 07:09:30', '2022-09-13 07:09:30'),
(26, 14, 10, 2, 3, 1, '2022-09-13 07:09:30', '2022-09-13 07:09:30'),
(27, 15, 1, 2, 2, 1, '2022-09-14 01:55:14', '2022-09-14 01:55:14'),
(28, 16, 10, 3, 4, 1, '2022-09-14 07:31:48', '2022-09-14 07:31:48'),
(29, 16, 10, 3, 5, 1, '2022-09-14 07:31:48', '2022-09-14 07:31:48');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `image`, `created_at`, `updated_at`, `deleted_at`, `status`) VALUES
(1, 1, '166304965856.download.jpeg', '2022-09-13 00:14:18', '2022-09-13 00:14:18', NULL, 1),
(2, 1, '166304965851.download (1).jpeg', '2022-09-13 00:14:18', '2022-09-13 00:14:18', NULL, 1),
(3, 2, '166305008569.download.jpeg', '2022-09-13 00:21:25', '2022-09-13 00:21:25', NULL, 1),
(4, 2, '166305008510.download (1).jpeg', '2022-09-13 00:21:25', '2022-09-13 00:21:25', NULL, 1),
(5, 3, '166305478257.download (1).jpeg', '2022-09-13 01:39:43', '2022-09-13 01:39:43', NULL, 1),
(6, 4, '166305906341.download.jpeg', '2022-09-13 02:51:03', '2022-09-13 02:51:03', NULL, 1),
(7, 4, '166305906327.download (1).jpeg', '2022-09-13 02:51:03', '2022-09-13 02:51:03', NULL, 1),
(8, 5, '166307437773.download.jpeg', '2022-09-13 07:06:17', '2022-09-13 07:06:17', NULL, 1),
(9, 6, '166314182622.download.jpeg', '2022-09-14 01:50:26', '2022-09-14 01:50:26', NULL, 1),
(10, 7, '166316159620.download (2).jpeg', '2022-09-14 07:19:56', '2022-09-14 07:19:56', NULL, 1),
(11, 8, '166322811840.download (2).jpeg', '2022-09-15 01:48:38', '2022-09-15 01:48:38', NULL, 1),
(12, 12, '167000211517.WhatsApp Image 2022-11-22 at 1.12.08 AM.jpeg', '2022-12-02 11:28:35', '2022-12-02 11:28:35', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `option_id`, `description`, `slug`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '12\"', 1, 'size', NULL, 1, '2022-09-08 07:10:09', '2022-09-08 07:10:09', NULL),
(2, 'Tomato', 2, 'Special', NULL, 1, '2022-09-08 23:06:06', '2022-09-08 23:06:06', NULL),
(3, 'Chili', 2, 'Special', NULL, 1, '2022-09-08 23:22:02', '2022-09-08 23:22:02', NULL),
(4, 'Goat Chese', 3, 'cru', 'goat', 1, '2022-09-09 01:50:57', '2022-09-11 23:37:02', NULL),
(5, 'Kookos Special Chese', 3, 'Special', 'kookos-special-chese', 1, '2022-09-09 01:54:04', '2022-09-09 01:54:04', NULL),
(6, 'XYZ', 3, NULL, 'xyz', 1, '2022-09-09 03:08:08', '2022-09-09 03:08:08', NULL),
(7, 'Double Petty', 1, 'size', 'double-petty', 1, '2022-09-09 03:09:48', '2022-09-13 23:32:53', '2022-09-13 23:32:53'),
(11, 'test', 3, NULL, 'test', 1, '2022-09-11 23:34:54', '2022-09-11 23:34:54', NULL),
(13, 'Special', 2, NULL, 'special', 1, '2022-09-12 01:15:17', '2022-09-12 01:15:17', NULL),
(14, 'tested', 12, 'Special', 'tested', 1, '2022-09-12 01:27:43', '2022-09-12 01:27:43', NULL),
(15, 'testwww', 3, NULL, 'testwww', 1, '2022-09-13 04:10:30', '2022-09-13 04:10:30', NULL),
(16, '6\"', 1, '6\"', '6', 1, '2022-09-13 23:33:12', '2022-09-13 23:33:12', NULL),
(17, '9\"', 1, '9\"', '9', 1, '2022-09-13 23:33:25', '2022-09-13 23:33:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item_prices`
--

DROP TABLE IF EXISTS `item_prices`;
CREATE TABLE IF NOT EXISTS `item_prices` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `variation_id` bigint(20) UNSIGNED NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_prices_product_id_foreign` (`product_id`),
  KEY `item_prices_variation_id_foreign` (`variation_id`),
  KEY `item_prices_option_id_foreign` (`option_id`),
  KEY `item_prices_item_id_foreign` (`item_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2020_04_01_120315_create_admins_table', 1),
(6, '2020_04_01_120830_create_admin_password_resets_table', 1),
(7, '2020_04_01_125024_laratrust_setup_tables', 1),
(8, '2020_04_02_051145_create_admin_permission_groups_table', 1),
(9, '2020_04_02_051527_create_admin_permission_group_permission_table', 1),
(10, '2020_09_18_205257_create_sessions_table', 1),
(11, '2020_09_18_205307_create_cache_table', 1),
(12, '2022_09_02_092148_create_categories_table', 1),
(13, '2022_09_02_133031_create_options_table', 1),
(14, '2022_09_05_124808_create_items_table', 1),
(15, '2022_09_05_125635_create_option_categories_table', 1),
(16, '2022_09_06_124653_create_category_option_items_table', 1),
(17, '2022_09_09_122331_add_option_category_id_to_category_option_items', 2),
(18, '2022_09_12_055815_add_soft_deletes_to_options_table', 3),
(19, '2022_09_12_060023_add_soft_deletes_to_categories_table', 4),
(20, '2022_09_12_060242_add_soft_deletes_to_items_table', 4),
(21, '2022_09_12_090418_create_products_table', 5),
(22, '2022_09_13_053015_create_images_table', 6),
(23, '2022_09_13_060226_remove_images_from_products_table', 7),
(24, '2022_09_13_074436_add_status_to_options_table', 8),
(25, '2022_09_13_104316_add_price_controller_to_products_table', 9),
(26, '2022_09_13_121402_create_product_prices_table', 10),
(27, '2022_09_14_055326_add_foreign_key_table', 11);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
CREATE TABLE IF NOT EXISTS `options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `name`, `description`, `slug`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Size', 'size', NULL, 1, '2022-09-08 07:09:52', '2022-09-11 23:59:29', '2022-09-11 23:59:29'),
(2, 'Sauce', 'Special', '', 1, '2022-09-08 23:04:21', '2022-09-09 02:15:00', NULL),
(3, 'Chese', 'Special', 'chese', 1, '2022-09-09 01:49:13', '2022-09-09 01:49:39', NULL),
(12, 'Test', 'option', 'test', 1, '2022-09-12 01:26:46', '2022-09-12 01:26:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `option_categories`
--

DROP TABLE IF EXISTS `option_categories`;
CREATE TABLE IF NOT EXISTS `option_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `option_categories`
--

INSERT INTO `option_categories` (`id`, `category_id`, `option_id`, `status`, `created_at`, `updated_at`) VALUES
(3, 2, 3, 1, '2022-09-09 07:46:59', '2022-09-09 07:46:59'),
(5, 3, 2, 1, '2022-09-12 00:03:29', '2022-09-12 00:03:29'),
(10, 9, 12, 1, '2022-09-12 01:27:56', '2022-09-12 01:27:56'),
(11, 2, 1, 1, '2022-09-12 06:53:18', '2022-09-12 06:53:18'),
(12, 2, 2, 1, '2022-09-13 04:26:35', '2022-09-13 04:26:35'),
(13, 1, 1, 1, '2022-09-13 04:27:42', '2022-09-13 04:27:42'),
(14, 10, 2, 1, '2022-09-13 07:09:30', '2022-09-13 07:09:30'),
(15, 1, 2, 1, '2022-09-14 01:55:14', '2022-09-14 01:55:14'),
(16, 10, 3, 1, '2022-09-14 07:31:48', '2022-09-14 07:31:48');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin-admins-create', 'Admin Create', 'Admin Create', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(2, 'admin-admins-read', 'Admin Read', 'Admin Read', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(3, 'admin-admins-update', 'Admin Update', 'Admin Update', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(4, 'admin-admins-delete', 'Admin Delete', 'Admin Delete', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(5, 'admin-users-create', 'User Create', 'User Create', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(6, 'admin-users-read', 'User Read', 'User Read', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(7, 'admin-users-update', 'User Update', 'User Update', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(8, 'admin-users-delete', 'User Delete', 'User Delete', '2022-09-08 06:41:18', '2022-09-08 06:41:18');

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE IF NOT EXISTS `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

DROP TABLE IF EXISTS `permission_user`;
CREATE TABLE IF NOT EXISTS `permission_user` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `base_price` double(8,2) NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `price_controller` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `description`, `base_price`, `slug`, `status`, `created_at`, `updated_at`, `deleted_at`, `price_controller`) VALUES
(1, 'BUTTER CHICKEN PIZZA', 1, '<p>tryetry</p>', 1500.00, 'butter-chicken-pizza', 1, '2022-09-13 00:14:18', '2022-09-14 08:17:58', NULL, 1),
(2, 'test image ed', 1, '<p>fdggdffd</p>ed', 3.00, 'test-image-ed', 1, '2022-09-13 00:21:25', '2022-09-14 01:42:06', NULL, 1),
(3, 'Single Photo', 9, '<p>dsf</p>', 444.00, 'single-photo', 1, '2022-09-13 01:39:43', '2022-09-13 23:58:04', NULL, 1),
(4, 'burger', 2, '<p>sdfsdfsd</p>', 6773.00, 'burger', 1, '2022-09-13 02:51:03', '2022-09-14 23:26:52', NULL, 0),
(5, 'Beef Burger', 2, '<p>sdasdsa</p>', 120.00, 'beef-burger', 1, '2022-09-13 07:06:17', '2022-09-15 03:19:39', NULL, 1),
(6, 'Pizza egg', 1, '<p>dsddd</p>', 45.00, 'pizza-egg', 1, '2022-09-14 01:50:26', '2022-09-14 04:11:39', NULL, 2),
(7, 'Combo Platter with Chicken Drums', 10, '<p>dfdsdfs</p>', 799.99, 'combo-platter-with-chicken-drums', 0, '2022-09-14 07:19:56', '2022-09-14 23:54:11', NULL, 0),
(8, 'we', 1, '<p>asdas</p>', 799.99, 'we', 1, '2022-09-15 01:48:38', '2022-09-15 01:48:38', NULL, NULL),
(12, 'Ringku', 1, '<p>dsfd</p>', 43.00, 'ringku', 1, '2022-12-02 11:28:35', '2022-12-02 11:28:35', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_prices`
--

DROP TABLE IF EXISTS `product_prices`;
CREATE TABLE IF NOT EXISTS `product_prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_prices`
--

INSERT INTO `product_prices` (`id`, `product_id`, `item_id`, `price`, `status`, `created_at`, `updated_at`, `deleted_at`, `option_id`) VALUES
(1, 5, 16, 250.00, 1, '2022-09-15 01:06:21', '2022-09-15 01:06:27', '2022-09-15 01:06:27', 1),
(2, 5, 2, 20.00, 1, '2022-09-15 01:06:46', '2022-09-15 01:07:00', '2022-09-15 01:07:00', 2),
(3, 5, 3, 100.00, 1, '2022-09-15 01:06:53', '2022-09-15 01:07:00', '2022-09-15 01:07:00', 2),
(4, 5, 16, 200.00, 0, '2022-09-15 01:09:29', '2022-09-15 01:13:03', '2022-09-15 01:13:03', 1),
(5, 5, 16, 200.00, 1, '2022-09-15 01:13:17', '2022-09-15 01:22:08', '2022-09-15 01:22:08', 1),
(6, 5, 17, 100.00, 1, '2022-09-15 01:16:19', '2022-09-15 01:22:08', '2022-09-15 01:22:08', 1),
(7, 5, 2, 333.00, 1, '2022-09-15 01:25:13', '2022-09-15 01:28:16', '2022-09-15 01:28:16', 2),
(8, 5, 16, 333.00, 1, '2022-09-15 01:28:28', '2022-09-15 01:28:38', '2022-09-15 01:28:38', 1),
(9, 5, 5, 333.00, 1, '2022-09-15 01:36:07', '2022-09-15 01:46:22', '2022-09-15 01:46:22', 3),
(10, 1, 1, 333.00, 1, '2022-09-15 01:54:22', '2022-09-15 01:54:22', NULL, 1),
(11, 5, 2, 99.00, 0, '2022-09-15 02:52:15', '2022-09-15 03:19:39', '2022-09-15 03:19:39', 2),
(12, 5, 3, 44.00, 1, '2022-09-15 03:07:51', '2022-09-15 03:19:39', '2022-09-15 03:19:39', 2),
(13, 5, 13, 20.00, 1, '2022-09-15 03:19:22', '2022-09-15 03:19:39', '2022-09-15 03:19:39', 2),
(14, 5, 1, 211.00, 1, '2022-09-15 03:19:47', '2022-09-15 03:25:09', NULL, 1),
(15, 5, 16, 20.00, 0, '2022-09-15 03:45:24', '2022-09-15 03:45:24', NULL, 1),
(16, 1, 16, 211.00, 0, '2022-09-16 00:13:24', '2022-09-16 02:53:06', '2022-09-16 02:53:06', 1),
(17, 1, 17, 20.00, 1, '2022-09-16 02:52:57', '2022-09-16 02:52:57', NULL, 1),
(18, 1, 16, 211.00, 1, '2022-09-16 03:02:08', '2022-09-16 03:02:19', '2022-09-16 03:02:19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Admin', 'Admin Role', '2022-09-08 06:41:18', '2022-09-08 06:41:18'),
(2, 'custom', 'Custom', 'Custom Role', '2022-09-08 06:41:18', '2022-09-08 06:41:18');

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
CREATE TABLE IF NOT EXISTS `role_user` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
(1, 1, 'App\\Models\\Admin');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
