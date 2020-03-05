import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import edit from './components/edit'
import save from './components/save'

import './styles/editor.scss'

registerBlockType("sonrieme-blocks/firstblock", {
    title: __("First Block", "sonrieme-blocks"),
    description: __("Our first block", "sonrieme-blocks"),
    category: "common",
    icon: "admin-network",
    edit,
    save
});