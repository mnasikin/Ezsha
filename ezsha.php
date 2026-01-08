<?php
/*
Plugin Name: Ezsha
Plugin URI: https://github.com/mnasikin/ezsha
Description: A simple and lightwight plugin designed to effortlessly integrate share buttons adorned with captivating Font Awesome icons into your single posts and pages.
Version: 2.0.1
Requires at least: 5.5
Requires PHP: 7.4
Author: M. Nasikin
Author URI: https://github.com/mnasikin
License: MIT
License URI: https://github.com/mnasikin/ezsha/blob/master/LICENSE
Text Domain: Ezsha
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
    wp_enqueue_style('ezsha_main-styles', plugin_dir_url(__FILE__) . 'assets/styles.css', array(), '2.0.0', 'all');

    // Enqueue JavaScript
    wp_enqueue_script('ezsha_main-scripts', plugin_dir_url(__FILE__) . 'assets/scripts.js', array('jquery'), '2.0.0', true);
    }

}

add_action('wp_footer', 'ezsha_content');

add_action('wp_enqueue_scripts', 'ezsha_assets');