import GuidingPrinciples from './guides/guiding-principles'
import Usage from './guides/usage'
import ContributionGuide from './guides/contribution-guide'
import FAQS from './guides/faqs'
import Changes from './guides/changes'
import AutomationGlossary from './guides/automation-glossary'
import MigrationGuide from './guides/migration-guide'
import GettingStarted from './guides/getting-started'

const guides = [
  { path: '/', title: 'Getting started', component: GettingStarted },
  { path: '/usage', title: 'How to use Cosmos?', component: Usage },
  { path: '/guiding-principles', title: 'Guiding Principles', component: GuidingPrinciples },
  { path: '/faqs', title: 'FAQs', component: FAQS },
  { path: '/changes', title: 'Changelog', component: Changes },
  { path: '/automation', title: 'Automation Glossary', component: AutomationGlossary },
  { path: '/contribution-guide', title: 'Contributing to Cosmos', component: ContributionGuide },
  { path: '/migration-guide', title: 'Migration Guide', component: MigrationGuide }
]

export default guides
