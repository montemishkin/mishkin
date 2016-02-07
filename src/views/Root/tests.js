// third party imports
import $ from 'teaspoon'
import {expect} from 'chai'
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
        expect(root.state.isExpanded).to.be.false
    })


    it('toggles between expanded and contracted states', function () {
        // click the button
        button.trigger('click')
        // should be expanded now
        expect(root.state.isExpanded).to.be.true
        // click the button again
        button.trigger('click')
        // should be contracted now
        expect(root.state.isExpanded).to.be.false
    })


    function testHeaderRender() {
        const header = root.find('h1')[0]

        expect(header.innerHTML).to.equal('The Mishkins')
    }


    function testSubheaderRender() {
        const subheader = root.find('p')[0]

        expect(subheader.innerHTML).to.equal('More than just a family.')
    }


    describe('contracted', function () {
        it('renders header, with proper content', testHeaderRender)
        it('renders subheader, with proper content', testSubheaderRender)


        it('renders button, with proper content', function () {
            expect(button.innerHTML).to.equal('Learn More')
        })


        it('does not render additional text', function () {
            const more = root.find('p')[1]

            expect(more.style.opacity).to.equal('0')
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
            expect(button.innerHTML).to.equal('Learn Less')
        })


        it('renders additional text, with proper content', function () {
            const more = root.find('p')[1]

            expect(more.style.opacity).to.equal('1')
            expect(more.innerHTML).to.equal(
                'The Mishkins are a family, but they are also more.'
            )
        })
    })
})
