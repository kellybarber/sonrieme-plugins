import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n'

import edit from './components/edit'
import save from './components/save'

import './styles/editor.scss'

const attributes = {
    title : {
        type     : 'string',
        source   : 'html',
        selector : 'h4'
    },
    description : {
        type     : 'string',
        source   : 'html',
        selector : 'p'
    }
}

registerBlockType("sonrieme-blocks/about-card", {
    title: __("About Card", "sonrieme-blocks"),
    description: __("About Card", "sonrieme-blocks"),
    category: "common",
    icon: "admin-users",
    attributes,
    edit,
    save
});