export default {
  items: [
    {
      hotkey: 'g',
      title: 'Github',
      content: {
        type: 'span',
      },
    },
    {
      hotkey: 'l',
      title: 'Gitlab',
      content: {
        type: 'span',
      },
    },
    {
      hotkey: 'h',
      title: 'Harvest',
      dark: true,
      content: {
        type: 'hotkey-nav',
        items: [
          {
            hotkey: 'u',
            title: 'Uninvoiced',
            content: {
              type: 'hotkey-nav',
              items: [
                {
                  hotkey: 'm',
                  title: 'This Month',
                  content: {
                    type: 'outbound-link',
                    href:
                      'https://subdomain.harvestapp.com/reports/uninvoiced?active_projects=true&from=2021-05-01&hide_zero_balanced=true&kind=month&till=2021-05-31',
                  },
                },
                {
                  hotkey: 'l',
                  title: 'Last Month',
                  content: {
                    type: 'outbound-link',
                    href:
                      'https://subdomain.harvestapp.com/reports/uninvoiced?active_projects=true&from=2021-04-01&hide_zero_balanced=true&kind=month&till=2021-04-30',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
