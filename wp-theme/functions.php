<?php
/**
 * Theme Name: Vanita Math Classes
 * Theme URI: https://vanitamathclasses.com
 * Description: Modern, professional WordPress theme for Vanita Math Classes coaching center
 * Version: 1.0.0
 * Author: Vanita Math Classes
 * Author URI: https://vanitamathclasses.com
 * Text Domain: vanita-math-classes
 * Domain Path: /languages
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define theme constants
define( 'VANITA_THEME_VERSION', '1.0.0' );
define( 'VANITA_THEME_DIR', get_template_directory() );
define( 'VANITA_THEME_URI', get_template_directory_uri() );

// Setup theme
function vanita_theme_setup() {
    // Add theme support
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );

    // Register menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'vanita-math-classes' ),
        'footer' => esc_html__( 'Footer Menu', 'vanita-math-classes' ),
    ) );

    // Load text domain
    load_theme_textdomain( 'vanita-math-classes', VANITA_THEME_DIR . '/languages' );
}
add_action( 'after_setup_theme', 'vanita_theme_setup' );

// Enqueue styles and scripts
function vanita_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap', array(), null );

    // Tailwind CSS (CDN for quick setup, can be compiled)
    wp_enqueue_style( 'tailwind-css', 'https://cdn.tailwindcss.com', array(), null );

    // Font Awesome
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0' );

    // Theme styles
    wp_enqueue_style( 'vanita-style', VANITA_THEME_URI . '/assets/css/style.css', array(), VANITA_THEME_VERSION );

    // Theme scripts
    wp_enqueue_script( 'vanita-script', VANITA_THEME_URI . '/assets/js/script.js', array( 'jquery' ), VANITA_THEME_VERSION, true );

    // Localize script
    wp_localize_script( 'vanita-script', 'vanitaVars', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'vanita_enqueue_scripts' );

// Register custom post types
function vanita_register_post_types() {
    // Courses CPT
    register_post_type( 'course', array(
        'labels' => array(
            'name' => esc_html__( 'Courses', 'vanita-math-classes' ),
            'singular_name' => esc_html__( 'Course', 'vanita-math-classes' ),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'menu_icon' => 'dashicons-book',
        'rewrite' => array( 'slug' => 'courses' ),
    ) );

    // Testimonials CPT
    register_post_type( 'testimonial', array(
        'labels' => array(
            'name' => esc_html__( 'Testimonials', 'vanita-math-classes' ),
            'singular_name' => esc_html__( 'Testimonial', 'vanita-math-classes' ),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'menu_icon' => 'dashicons-format-quote',
    ) );
}
add_action( 'init', 'vanita_register_post_types' );

// Register custom taxonomies
function vanita_register_taxonomies() {
    register_taxonomy( 'course-category', 'course', array(
        'label' => esc_html__( 'Course Categories', 'vanita-math-classes' ),
        'rewrite' => array( 'slug' => 'course-category' ),
        'hierarchical' => true,
    ) );
}
add_action( 'init', 'vanita_register_taxonomies' );

// Custom excerpt length
function vanita_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'vanita_excerpt_length' );

// Remove admin bar on frontend
show_admin_bar( false );
