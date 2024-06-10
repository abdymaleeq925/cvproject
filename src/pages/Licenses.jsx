import React from 'react';
import { Banner, LicensesList } from '../components';
import { licenses } from '../data/utils';

import '../styles/licenses.css';

const Licenses = () => {
  return (
    <div>
      <Banner title="Licenses" backtohome />
      <LicensesList licenses={licenses}/>
    </div>
  )
}

export default Licenses
