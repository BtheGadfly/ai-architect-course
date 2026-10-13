import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The AI Architect",
  description: "Engineering Workflows in the Age of Agentic AI",
  base: '/ai-architect-course/', // Replace 'ai-architect-course' with your exact repository name

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Expedition 1', link: '/module-1' },
      { text: 'Expedition 2', link: '/module-2' },
      { text: 'Expedition 3', link: '/module-3' },
      { text: 'Expedition 4', link: '/module-4' }
    ],

    sidebar: [
      {
        text: 'Course Navigation',
        items: [
          { text: 'Course Overview', link: '/' },
          { text: 'Expedition 1: Enterprise Blueprint', link: '/module-1' },
          { text: 'Expedition 2: Anatomy of an Agent', link: '/module-2' },
          { text: 'Expedition 3: Strategy & Mapping', link: '/module-3' },
          { text: 'Expedition 4: Building the Workflow', link: '/module-4' }
        ]
      }
    ]
  }
})
