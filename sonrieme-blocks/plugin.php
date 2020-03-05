<?php
/**
Plugin Name: Sonrieme Blocks
Plugin URI: https://sonriemedental.com
Version: 1.0.0
Author: Kelly Barber
Author uri:
Description: Blocks for Sonrieme Dental Clinic
 */

if ( !defined( 'ABSPATH' ) ) {
    exit;
}

function sonrieme_blocks_register_block_type($block, $options = array ()) {
    register_block_type(
        'sonrieme-blocks/' .$block,
        array_merge(
            array(
                'editor_script' => 'sonrieme-blocks-editor-script',
                'editor_style' => 'sonrieme-blocks-editor-style',
                'script' => 'sonrieme-blocks-script',
                'style' => 'sonrieme-blocks-style'
            ),
            $options
        )
    );
}

function sonrieme_blocks_register() {

    wp_register_script(
        'sonrieme-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks','wp-i18n', 'wp-element', 'wp-editor', 'wp-components')
    );

    wp_register_style(
        'sonrieme-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    wp_register_script(
        'sonrieme-blocks-script',
        plugins_url('dist/script.js', __FILE__)
    );

    wp_register_style(
        'sonrieme-blocks-style',
        plugins_url('dist/style.css', __FILE__)
    );

    sonrieme_blocks_register_block_type('firstblock');
    sonrieme_blocks_register_block_type('about-card');
    sonrieme_blocks_register_block_type('post-grid');
}

add_action('init', 'sonrieme_blocks_register');