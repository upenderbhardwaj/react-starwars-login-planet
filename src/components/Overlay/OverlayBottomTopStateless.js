import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class OverlayBottomTopStateless extends React.Component {

  onCloseClicked = (e) => {
    e.preventDefault();
    if (this.props.onCloseClicked) {
      this.props.onCloseClicked();
    }
  }

  render() {
    const { isVisible } = this.props;

    return (
      <div
        role='dialog'
        aria-atomic='true'
        aria-live='assertive'
        className={isVisible ? "":"iregOverlayWrapper"}>
        <section
          className={`overlayBottomTop ${this.props.className}`}
        >
          <div className={isVisible ? "overlayActive":""}>
            <div className='dialogStyles'>
              <a
                href='#'
                className='closeButtonStyle icon-cross-x before h4 text-color-dark_grey'
                ref={(ch) => this.focusClose = ch}
                onClick={this.onCloseClicked}
                role='button'>X
              </a>
              {this.props.children}

            </div>
          </div>
        </section>
      </div>
    );
  }
}

OverlayBottomTopStateless.displayName = 'OverlayBottomTopStateless';

OverlayBottomTopStateless.sharedPropTypes = {
  closeButtonStyle: PropTypes.object,
  dialogStyles: PropTypes.object,
  onCloseClicked: PropTypes.func,
  onOverlayClicked: PropTypes.func,
  overlayStyles: PropTypes.object,
  showOverlay: PropTypes.bool,
  title: PropTypes.any,
  transitionDuration: PropTypes.number,
  titleStyle: PropTypes.object,
  closeOnEsc: PropTypes.bool,
  className: PropTypes.string,
  closeButton: PropTypes.any,
};

OverlayBottomTopStateless.propTypes = {
  ...OverlayBottomTopStateless.sharedPropTypes,
  isVisible: PropTypes.bool,
};

OverlayBottomTopStateless.defaultProps = {
  title: '',
  showOverlay: true,
  transitionDuration: 400,
  closeOnEsc: true,
  className: '',
};
