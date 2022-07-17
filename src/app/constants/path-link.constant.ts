import { PageRoute } from './page-route.constant';

export const PageLink = {
  authentication: {
    default: `auth/${PageRoute.authentication.default}`,
    login: `auth/${PageRoute.authentication.login}`,
  },
  homepage: {
    default: `/${PageRoute.homepage.default}`,
  },
  law: {
    default: `/${PageRoute.law.default}`,
    searchLaw: `/${PageRoute.law.default}/${PageRoute.law.searchLaw}`,
    addLaw: `/${PageRoute.law.default}/${PageRoute.law.addLaw}`,
    assginLaw: `/${PageRoute.law.default}/${PageRoute.law.assginLaw}`
  }
}
