import React from 'react';
import { shallow } from 'enzyme';
import OverlayBottomTop from '../../src/components/Overlay/OverlayBottomTop';

const props = {
    isVisible: false,
    beforeOpen: ()=>{return true;},
    beforeClose: ()=>{return true;},
    afterOpen: ()=>{return true;},
    afterClose: ()=>{return true;}
};

describe('<OverlayBottomTop>this is and overlay </OverlayBottomTop>', () => {
    beforeEach(()=>{
        global.scrollTo=jest.fn();
    });

    it('should have component overlaybottontopstateless sections ', () => {
        const wrapper = shallow(<OverlayBottomTop />);
        expect(wrapper.find('OverlayBottomTopStateless')).toHaveLength(1);
    });

    it('should have component will update  ', () => {
        const wrapper = shallow(<OverlayBottomTop { ...props } />);
        expect(wrapper.instance().componentWillUpdate(false,true));
    });

    it('should have component did update ', () => {
        const wrapper = shallow(<OverlayBottomTop { ...props } />);
        expect(wrapper.instance().componentDidUpdate(false,true));
    });

    it('should have class did update ', () => {
        const wrapper = shallow(<OverlayBottomTop { ...props } />);
        wrapper.instance().overlayStateless = { focusClose: { focus: ()=>{return true;} } };
        expect(wrapper.instance().show());
    });

    it('should have class did hide ', () => {
        const wrapper = shallow(<OverlayBottomTop { ...props } />);
        expect(wrapper.instance().hide());
    });
});
