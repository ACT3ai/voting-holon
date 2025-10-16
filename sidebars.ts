import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Topics',
      collapsed: false,
      items: ['voter-rolls', 'future'],
    },
  ],
};

export default sidebars;

