import React from "react"
import { injectIntl  } from "gatsby-plugin-intl"

import SvgLogoAirbusDe from "../svg/logo-airbus-de.svg"
import SvgLogoAirbusEn from "../svg/logo-airbus-en.svg"
import SvgLogoApertoDe from "../svg/logo-aperto-ibm-ix-de.svg"
import SvgLogoApertoEn from "../svg/logo-aperto-ibm-ix-en.svg"
import SvgLogoBitkomDe from "../svg/logo-bitkom-de.svg"
import SvgLogoBitkomEn from "../svg/logo-bitkom-en.svg"
import SvgLogoBmvgDe from "../svg/logo-bmvg-de.svg"
import SvgLogoBmvgEn from "../svg/logo-bmvg-en.svg"
import SvgLogoBshDe from "../svg/logo-bsh-de.svg"
import SvgLogoBshEn from "../svg/logo-bsh-en.svg"
import SvgLogoBundesregierungDe from "../svg/logo-bundesregierung-de.svg"
import SvgLogoBundesregierungEn from "../svg/logo-bundesregierung-en.svg"
import SvgLogoCnaDe from "../svg/logo-cna-de.svg"
import SvgLogoCnaEn from "../svg/logo-cna-en.svg"

const ClientsList = ({ intl }) => {
  return (
    <ul className="b-clients-list">
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoAirbusDe />}
          {intl.locale === 'en' && <SvgLogoAirbusEn />}
        </li>
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoApertoDe />}
          {intl.locale === 'en' && <SvgLogoApertoEn />}
        </li>
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoBitkomDe />}
          {intl.locale === 'en' && <SvgLogoBitkomEn />}
        </li>
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoBmvgDe />}
          {intl.locale === 'en' && <SvgLogoBmvgEn />}
        </li>
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoBshDe />}
          {intl.locale === 'en' && <SvgLogoBshEn />}
        </li>
        <li className="b-clients-list--item">
          {intl.locale === 'de' && <SvgLogoCnaDe />}
          {intl.locale === 'en' && <SvgLogoCnaEn />}
        </li>
    </ul>
  )
}

export default injectIntl(ClientsList)