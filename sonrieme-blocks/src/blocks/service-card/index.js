import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n'

import edit from './components/edit'
import save from './components/save'

import './styles/editor.scss'

const attributes = {
    title : {
        type     : 'string',
        source   : 'html',
        selector : 'h3'
    },
    id : {
        type : 'number'
    },
    url : {
        type : 'string'
    }
}

registerBlockType("sonrieme-blocks/service-card", {
    title       : __("Service Card", "sonrieme-blocks"),
    description : __("Service Card", "sonrieme-blocks"),
    category    : "common",
    icon        : "smiley",
    parent      : ['sonrieme-blocks/post-grid'],
    attributes,
    edit,
    save
});