import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Svg from 'react-svg-inline';
import omdLogo from 'assets/search-view_icon/icon_omdLogo.svg';
import addIcon from 'assets/search-view_icon/icon_plus.svg';
import allIcon from 'assets/search-view_icon/icon_monitor.svg';
import favoritesIcon from 'assets/search-view_icon/icon_star.svg';
import settingIcon from 'assets/search-view_icon/icon_wheel.svg';
import i18n from 'constants/i18n';
import './SearchMenu.scss';

const propTypes = {
  filter: PropTypes.string,
  onMakeWidgetRequest: PropTypes.func,
  onOpenPreference: PropTypes.func,
  onQuitApp: PropTypes.func,
  onSetFilter: PropTypes.func,
};
const defaultProps = {
  filter: 'ALL',
  onMakeWidgetRequest() {},
  onOpenPreference() {},
  onQuitApp() {},
  onSetFilter() {},
};

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetAllFilter = this.handleSetAllFilter.bind(this);
    this.handleSetFavoritesFilter = this.handleSetFavoritesFilter.bind(this);
    this.handleMakeWidgetRequest = this.handleMakeWidgetRequest.bind(this);
  }

  handleMakeWidgetRequest() {
    const { onMakeWidgetRequest } = this.props;

    onMakeWidgetRequest();
  }

  handleSetAllFilter() {
    const { filter, onSetFilter } = this.props;

    if (filter !== 'ALL') {
      onSetFilter('ALL');
    }
  }

  handleSetFavoritesFilter() {
    const { filter, onSetFilter } = this.props;

    if (filter !== 'FAVORITES') {
      onSetFilter('FAVORITES');
    }
  }

  render() {
    const text = i18n().search;
    const { filter, onOpenPreference, onQuitApp } = this.props;
    const allMenuClassName = cx('SearchMenu__Btn', {
      'SearchMenu__Btn--active': filter === 'ALL',
    });
    const favoritesMenuClassName = cx('SearchMenu__Btn', {
      'SearchMenu__Btn--active': filter === 'FAVORITES',
    });

    return (
      <div className="SearchMenu">
        <Svg
          className="SearchMenu__Logo"
          svg={omdLogo}
        />
        <ul className="SearchMenu__List">
          <li className="SearchMenu__Item">
            <button
              className="SearchMenu__Btn"
              type="button"
              onClick={this.handleMakeWidgetRequest}
            >
              <Svg
                className="SearchMenu__Icon"
                svg={addIcon}
              />
              {text.newWidget}
            </button>
          </li>
          <li className="SearchMenu__Item">
            <button
              className={allMenuClassName}
              type="button"
              onClick={this.handleSetAllFilter}
            >
              <Svg
                className="SearchMenu__Icon"
                svg={allIcon}
              />
              {text.all}
            </button>
          </li>
          <li className="SearchMenu__Item">
            <button
              className={favoritesMenuClassName}
              type="button"
              onClick={this.handleSetFavoritesFilter}
            >
              <Svg
                className="SearchMenu__Icon"
                svg={favoritesIcon}
              />
              {text.favorites}
            </button>
          </li>
          <li className="SearchMenu__Item">
            <button
              className="SearchMenu__Btn"
              type="button"
              onClick={onOpenPreference}
            >
              <Svg
                className="SearchMenu__Icon"
                svg={settingIcon}
              />
              {text.setting}
            </button>
          </li>
          <li className="SearchMenu__Item">
            <button
              className="SearchMenu__Btn"
              type="button"
              onClick={onQuitApp}
            >
              <Svg
                className="SearchMenu__Icon"
                svg={settingIcon}
              />
              {text.quit}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

SearchMenu.propTypes = propTypes;
SearchMenu.defaultProps = defaultProps;

export default SearchMenu;
