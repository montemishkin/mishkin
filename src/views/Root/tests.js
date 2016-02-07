// third party imports
import $ from 'teaspoon'
import {assert} from 'chai'
import React from 'react'
// local imports
import Root from './index'


describe('Root', function () {
    // to be set in `beforeEach`
    let root
    let button


    beforeEach(function () {
        root = $(<Root />).render()
        button = root.find('button')
    })


    it('starts out contracted', function () {
        assert.isFalse(root.state().isExpanded)
    })


    it('toggles between expanded and contracted states', function () {
        // click the button
        button.trigger('click')
        // should be expanded now
        assert.isTrue(root.state().isExpanded)
        // click the button again
        button.trigger('click')
        // should be contracted now
        assert.isFalse(root.state().isExpanded)
        // click the button again
        button.trigger('click')
        // should be expanded now
        assert.isTrue(root.state().isExpanded)
        // click the button again
        button.trigger('click')
        // should be contracted now
        assert.isFalse(root.state().isExpanded)
        // click the button again
        button.trigger('click')
        // should be expanded now
        assert.isTrue(root.state().isExpanded)
    })


    function testHeaderRender() {
        const header = root.find('h1')[0]

        assert.equal(header.innerHTML, 'The Mishkins')
    }


    function testSubheaderRender() {
        const subheader = root.find('p')[0]

        assert.equal(subheader.innerHTML, 'More than just a family.')
    }


    describe('contracted', function () {
        it('renders header, with proper content', testHeaderRender)
        it('renders subheader, with proper content', testSubheaderRender)


        it('renders button, with proper content', function () {
            assert.equal(button[0].innerHTML, 'Learn More')
        })


        it('does not render additional text', function () {
            const more = root.find('p')[1]

            assert.equal(more.style.opacity, '0')
        })
    })


    describe('expanded', function () {
        beforeEach(function () {
            // click button
            button.trigger('click')
        })


        it('renders header, with proper content', testHeaderRender)
        it('renders subheader, with proper content', testSubheaderRender)


        it('renders button, with proper content', function () {
            assert.equal(button[0].innerHTML, 'Learn Less')
        })


        it('renders additional text, with proper content', function () {
            const more = root.find('p')[1]

            assert.equal(more.style.opacity, '1')
            assert.equal(
                more.innerHTML,
                'The Mishkins are a family, but they are also more.'
            )
        })
    })
})
