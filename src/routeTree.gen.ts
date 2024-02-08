/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const StatisticsLazyImport = createFileRoute('/statistics')()
const HistoryRouteLazyImport = createFileRoute('/history')()
const HistoryIndexLazyImport = createFileRoute('/history/')()
const HistoryIdLazyImport = createFileRoute('/history/$id')()

// Create/Update Routes

const StatisticsLazyRoute = StatisticsLazyImport.update({
  path: '/statistics',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/statistics.lazy').then((d) => d.Route))

const HistoryRouteLazyRoute = HistoryRouteLazyImport.update({
  path: '/history',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/history/route.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HistoryIndexLazyRoute = HistoryIndexLazyImport.update({
  path: '/',
  getParentRoute: () => HistoryRouteLazyRoute,
} as any).lazy(() => import('./routes/history/index.lazy').then((d) => d.Route))

const HistoryIdLazyRoute = HistoryIdLazyImport.update({
  path: '/$id',
  getParentRoute: () => HistoryRouteLazyRoute,
} as any).lazy(() => import('./routes/history/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/history': {
      preLoaderRoute: typeof HistoryRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/statistics': {
      preLoaderRoute: typeof StatisticsLazyImport
      parentRoute: typeof rootRoute
    }
    '/history/$id': {
      preLoaderRoute: typeof HistoryIdLazyImport
      parentRoute: typeof HistoryRouteLazyImport
    }
    '/history/': {
      preLoaderRoute: typeof HistoryIndexLazyImport
      parentRoute: typeof HistoryRouteLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  HistoryRouteLazyRoute.addChildren([
    HistoryIdLazyRoute,
    HistoryIndexLazyRoute,
  ]),
  StatisticsLazyRoute,
])

/* prettier-ignore-end */
