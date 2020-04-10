import React from "react"
import PropTypes from "prop-types"
import { Location } from '@reach/router'
import { injectIntl, Link  } from "gatsby-plugin-intl"

const Header = ({ siteTitle }) => {
  return (
    <header className="b-header">
      <h1 className="b-header__heading">

        <Location>
          {({ location }) => {
            const deslashedPathname = location.pathname.replace(/\/$/, '');
            const deslashedPathend = (deslashedPathname.length > 3) ? deslashedPathname.substr(deslashedPathname.lastIndexOf('/') + 1) : '/';
            const asOriginalPath = (deslashedPathend.length > 1) ? '/' + deslashedPathend + '/' : '/';

            console.log(asOriginalPath);
            return <>
              {asOriginalPath === '/' && <span className="b-header__heading-title">{siteTitle}</span>}
              {asOriginalPath !== '/' && <Link to="/" className="b-header__heading-link"><span className="b-header__heading-title">{siteTitle}</span></Link>}
            </>
          }}
        </Location>

      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)