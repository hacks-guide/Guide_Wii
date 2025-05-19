/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import container from 'markdown-it-container'

import * as i18n from './i18n'

export default defineConfig({
  title: "Wii Hacks Guide",
  description: "The complete guide to modding your Wii, vWii, and Wii mini",
  head: [['link', { rel: 'icon', href: '/images/site-config/favicon.ico' }]],
  locales: {
    root: i18n.en_US,
    hu_HU: i18n.hu_HU
  },
  sitemap: {
    hostname: 'https://wii.hacks.guide'
  },
  themeConfig: {
    outline: {
      level: 'deep'
    },
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/MWxPgEp' },
      { icon: 'github', link: 'https://github.com/hacks-guide/Guide_Wii' }
    ]
  },
  cleanUrls: true
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(container, "tabs", {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<Tabs ${token.info}>\n`;
          } else {
            return `</Tabs>\n`;
          }
        }
      });

      md.use(container, 'tab', {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<Tab name="${token.info.match(/^ ?tab\s+(.*)$/)[1]}">`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  },
  srcExclude: [
    '**/_include/**',
    'af_ZA/**',
    'ar_SA/**',
    'ca_ES/**',
    'cs_CZ/**',
    'da_DK/**',
    'de_DE/**',
    'el_GR/**',
    'es_419/**',
    'es_ES/**',
    'fi_FI/**',
    'fr_FR/**',
    'he_IL/**',
    'it_IT/**',
    'ja_JP/**',
    'ko_KR/**',
    'nl_NL/**',
    'no_NO/**',
    'pl_PL/**',
    'pt_BR/**',
    'pt_PT/**',
    'ro_RO/**',
    'ru_RU/**',
    'sr_Cyrl/**',
    'sv_SE/**',
    'tr_TR/**',
    'uk_UA/**',
    'vi_VN/**',
    'zh_CN/**',
    'zh_TW/**'
  ]
})
