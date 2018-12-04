import GuidingPrinciples from './pages/guiding-principles'
import Usage from './pages/usage'
import ContributionGuide from './pages/contribution-guide'
import FAQS from './pages/faqs'
import Changes from './pages/changes'
import AutomationGlossary from './pages/automation-glossary'

const guides = [
  { path: '/', title: 'Getting started' },
  { path: '/usage', title: 'How to use Cosmos?', component: Usage },
  { path: '/guiding-principles', title: 'Guiding Principles', component: GuidingPrinciples },
  { path: '/faqs', title: 'FAQs', component: FAQS },
  { path: '/changes', title: 'Changelog', component: Changes },
  { path: '/automation', title: 'Automation Glossary', component: AutomationGlossary },
  { path: '/contribution-guide', title: 'Contributing to Cosmos', component: ContributionGuide }
]

export default guides
