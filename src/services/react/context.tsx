import React from 'react'

import { MarketplaceAPI } from '../api'

export const MarketplaceContext = React.createContext<MarketplaceAPI | null>(
  null,
)
