export const getTitleFromMatched = (matched: any, routes: any) => {
  for (const match of matched) {
    const foundRoute = routes.find(
      (route: any) => route.path === match.pathname
    )
    if (foundRoute && foundRoute.meta && foundRoute.meta.title) {
      return foundRoute.meta.title
    }
  }
  return null
}
