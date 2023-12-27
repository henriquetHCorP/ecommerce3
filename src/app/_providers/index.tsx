'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
import { FilterProvider } from './Filter'
import { RelatedProducts } from '../_blocks/RelatedProducts'
import { UserInfo } from '../(pages)/account/UserInfo'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FilterProvider>
        <CartProvider>{children}</CartProvider>
        </FilterProvider>
        <RelatedProducts/>
        <UserInfo/> 
      </AuthProvider>
    </ThemeProvider>
  )
}
