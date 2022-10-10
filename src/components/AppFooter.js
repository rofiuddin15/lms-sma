import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://barengsaya.com" target="_blank" rel="noopener noreferrer">
          UMI
        </a>
        <span className="ms-1">&copy; 2022 PT. Unggul Mediatama Indonesia.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://barengsaya.com" target="_blank" rel="noopener noreferrer">
          DeveTeam &amp; barengsaya.com
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
