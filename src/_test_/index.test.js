import {shallow,mount,render} from 'enzyme';
import ToGetSum, {} from '../GetSum/index'
import React from 'react';

describe("Нявність компонента", () => {
    it("Наявність компонента ", () => {
        const wrapper = mount(<ToGetSum/>)
        expect(wrapper.find(ToGetSum)).toHaveLength(1);
    })
    it("Наявність компонента div", () => {
        const wrapper = mount(<ToGetSum/>)
        expect(wrapper.find('div')).toHaveLength(3);
    })

    it("Наявність компонента з id='span_id'", () => {
        const wrapper = mount(<ToGetSum/>)
        expect(wrapper.find('#span_id')).toHaveLength(1);
    })
    it("Наявність компонента з атрибутом [type=\"number\"]", () => {
        const wrapper = mount(<ToGetSum/>)
        expect(wrapper.find('[type="number"]')).toHaveLength(2);
    })

    it("Підрахунок кількості дочірніх", () => {
        const wrapper = mount(<ToGetSum/>)
        expect(wrapper.find('label').children().length).toEqual(2)
    })

})


