import '@payloadcms/ui/scss/app.scss'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from '../importMap'
import { serverFunction } from '../_actions'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
