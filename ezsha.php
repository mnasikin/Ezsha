<?php
/*
Plugin Name: Ezsha
Plugin URI: https://github.com/mnasikin/ezsha
Description: A simple and lightwight plugin designed to effortlessly integrate share buttons adorned with captivating Font Awesome icons into your single posts and pages.
Version: 1.0.2
Requires at least: 5.5
Requires PHP: 7.4
Author: Nasikin
Author URI: https://github.com/mnasikin
License: MIT
License URI: https://github.com/mnasikin/ezsha/blob/master/LICENSE
Text Domain: ezsha
Domain Path: /languages
*/

// Block direct access to the main plugin file.
defined( 'ABSPATH' ) or die( 'Are you lost?' );

function ezsha_content() {
    if ((is_single() || is_page()) && !is_front_page()) {
    include plugin_dir_path(__FILE__) . 'ezsha-main.php';
    }
}

function ezsha_assets() {
    if ((is_single() || is_page()) && !is_front_page()) {
    // Enqueue CSS
    wp_enqueue_style('ezsha-main-styles', plugin_dir_url(__FILE__) . 'assets/styles.css', array(), '1.0.2', 'all');

    // Enqueue JavaScript
    wp_enqueue_script('ezsha-main-scripts', plugin_dir_url(__FILE__) . 'assets/scripts.js', array('jquery'), '1.0.1', true);

    // Enqueue Fontawesome CSS
    wp_enqueue_style( 'ezsha-fa-6', plugins_url( '/assets/fontawesome/css/fa-custom.min.css', __FILE__ ), array(), '1.0.1', 'all' );
    wp_enqueue_style( 'ezsha-fab-6', plugins_url( '/assets/fontawesome/css/brands.min.css', __FILE__ ), array(), '6.5.1', 'all' );

    // Enqueue Font Awesome fonts
    wp_enqueue_style( 'ezsha-faf-6', plugins_url( '/assets/fontawesome/webfonts/fa-brands-400.woff2', __FILE__ ), array(), '6.5.1' );
    wp_enqueue_style( 'ezsha-faf-6', plugins_url( '/assets/fontawesome/webfonts/fa-brands-400.ttf', __FILE__ ), array(), '6.5.1' );
    wp_enqueue_style( 'ezsha-faf-6', plugins_url( '/assets/fontawesome/webfonts/fa-solid-900.ttf', __FILE__ ), array(), '6.5.1' );
    wp_enqueue_style( 'ezsha-faf-6', plugins_url( '/assets/fontawesome/webfonts/fa-solid-900.woff2', __FILE__ ), array(), '6.5.1' );
    }

}

add_action('wp_footer', 'ezsha_content');

add_action('wp_enqueue_scripts', 'ezsha_assets');