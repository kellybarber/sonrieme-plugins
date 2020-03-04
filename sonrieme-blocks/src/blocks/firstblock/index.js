var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

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