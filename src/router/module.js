const module=[{
    path: '/home/scenicSpotIntro',
    name: 'scenicSpotIntro',
    component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/index'], resolve),
    meta: {
      title: '景点介绍'
    },
  },
  {
    path: '/home/scenicSpotIntro/edit',
    name: 'editScenicSpot',
    component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/edit'], resolve),
    meta: {
      title: '景点信息编辑'
    },
  },
  {
    path: '/home/activityInfo',
    name: 'activityInfo',
    component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/index'], resolve),
    meta: {
      title: '活动资讯'
    }
  },
  {
    path: '/home/activityInfo/edit',
    name: 'editActivity',
    component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/edit'], resolve),
    meta: {
      title: '活动资讯编辑'
    }
  },
  {
    path: '/home/bookParking',
    name: 'bookParking',
    component: resolve => void require(['@/views/bookingInfo/bookParking/index'], resolve),
    meta: {
      title: '预约停车'
    }
  },
  {
    path: '/home/bookTicket',
    name: 'bookTicket',
    component: resolve => void require(['@/views/bookingInfo/bookTicket/index'], resolve),
    meta: {
      title: '购票信息'
    }
  },
  {
    path: '/home/bookTicket/edit',
    name: 'editTicket',
    component: resolve => void require(['@/views/bookingInfo/bookTicket/edit'], resolve),
    meta: {
      title: '电子门票编辑'
    }
  },
  {
    path: '/home/scenicSpotTraffic',
    name: 'scenicSpotTraffic',
    component: resolve => void require(['@/views/dataVisualization/scenicSpotTraffic'], resolve),
    meta: {
      title: '景区客流'
    }
  },
  {
    path: '/home/ticketSales',
    name: 'ticketSales',
    component: resolve => void require(['@/views/dataVisualization/ticketSales'], resolve),
    meta: {
      title: '售票情况'
    }
  },
  {
    path: '/home/heatMap',
    name: 'heatMap',
    component: resolve => void require(['@/views/dataVisualization/heatMap'], resolve),
    meta: {
      title: '客流热力图'
    }
  }
]
  export default module